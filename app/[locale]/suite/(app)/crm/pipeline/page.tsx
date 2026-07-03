"use client";

import { useEffect, useMemo, useState } from "react";
import { m } from "framer-motion";
import { Plus, Sparkles } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { DealModal } from "@/components/suite/modals/DealModal";
import { LoadingState } from "@/components/suite/ui/LoadingState";
import { PageHeader } from "@/components/suite/ui/PageHeader";
import { KanbanBoard } from "@/components/suite/ui/KanbanBoard";
import {
  getCompanies,
  getContacts,
  getOpportunities,
  updateOpportunityStage,
} from "@/lib/suite/data/crm";
import { users } from "@/lib/suite/data/users";
import { formatCurrency, getOwnerName, OpportunityStageBadge } from "@/lib/suite/crm-helpers";
import type { Company, Contact, Opportunity, OpportunityStage } from "@/lib/suite/types/crm";

const FOLLOW_UP_SUGGESTIONS: Record<OpportunityStage, string[]> = {
  new: ["Send introductory email", "Schedule discovery call"],
  qualified: ["Prepare demo", "Send case studies"],
  proposal: ["Follow up on proposal", "Address pricing concerns"],
  negotiation: ["Schedule contract review", "Offer flexible terms"],
  closed_won: ["Schedule onboarding", "Request testimonial"],
  closed_lost: ["Send feedback survey", "Re-engage in 3 months"],
};

export default function PipelinePage() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    let mounted = true;
    setIsLoading(true);

    Promise.all([getOpportunities(), getCompanies(), getContacts()]).then(
      ([opportunitiesData, companiesData, contactsData]) => {
        if (!mounted) return;
        setOpportunities(opportunitiesData);
        setCompanies(companiesData);
        setContacts(contactsData);
        setIsLoading(false);
      }
    );

    return () => {
      mounted = false;
    };
  }, []);

  const handleStageChange = (opportunityId: string, newStage: OpportunityStage) => {
    updateOpportunityStage(opportunityId, newStage);
    setOpportunities((prev) =>
      prev.map((opportunity) =>
        opportunity.id === opportunityId
          ? { ...opportunity, stage: newStage, lastActivityAt: new Date().toISOString() }
          : opportunity
      )
    );
  };

  const handleCardClick = (opportunity: Opportunity) => {
    setSelectedOpportunity(opportunity);
    setSheetOpen(true);
  };

  const handleSaveDeal = (deal: Opportunity) => {
    setOpportunities((prev) => {
      const index = prev.findIndex((item) => item.id === deal.id);
      if (index >= 0) {
        const next = [...prev];
        next[index] = deal;
        return next;
      }
      return [deal, ...prev];
    });
  };

  const selectedCompany = useMemo(
    () => companies.find((company) => company.id === selectedOpportunity?.companyId),
    [companies, selectedOpportunity]
  );

  const selectedOwner = useMemo(
    () => users.find((user) => user.id === selectedOpportunity?.ownerId),
    [selectedOpportunity]
  );

  if (isLoading) {
    return <LoadingState variant="page" />;
  }

  return (
    <m.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-6 p-4 md:p-6"
    >
      <PageHeader
        title="Sales Pipeline"
        description="Track and move deals through every stage of the sales process."
        actions={
          <Button
            onClick={() => {
              setSelectedOpportunity(null);
              setModalOpen(true);
            }}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add deal
          </Button>
        }
      />

      <KanbanBoard
        opportunities={opportunities}
        companies={companies}
        users={users}
        onStageChange={handleStageChange}
        onCardClick={handleCardClick}
      />

      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent className="sm:max-w-md">
          <SheetHeader>
            <SheetTitle>{selectedOpportunity?.name ?? "Deal details"}</SheetTitle>
            <SheetDescription>{selectedCompany?.name ?? "Unknown company"}</SheetDescription>
          </SheetHeader>

          {selectedOpportunity && (
            <div className="mt-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Value</p>
                  <p className="text-lg font-semibold text-foreground">
                    {formatCurrency(selectedOpportunity.value)}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Probability</p>
                  <p className="text-lg font-semibold text-foreground">
                    {selectedOpportunity.probability}%
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Stage</p>
                  <div>
                    <OpportunityStageBadge stage={selectedOpportunity.stage} />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Expected Close</p>
                  <p className="text-sm font-medium text-foreground">
                    {selectedOpportunity.expectedCloseDate}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">Owner</p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    {selectedOwner?.avatar && (
                      <AvatarImage src={selectedOwner.avatar} alt={selectedOwner.name} />
                    )}
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {selectedOwner?.name
                        ? selectedOwner.name
                            .split(" ")
                            .map((name) => name[0])
                            .join("")
                            .slice(0, 2)
                            .toUpperCase()
                        : "?"}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {getOwnerName(selectedOpportunity.ownerId)}
                    </p>
                    <p className="text-xs text-muted-foreground">{selectedOwner?.email ?? ""}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 rounded-lg border border-border/50 bg-muted/30 p-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">
                    AI Follow-up Suggestions
                  </h3>
                </div>
                <ul className="space-y-2">
                  {FOLLOW_UP_SUGGESTIONS[selectedOpportunity.stage].map((suggestion, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>

      <DealModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        companies={companies}
        contacts={contacts}
        onSave={handleSaveDeal}
      />
    </m.div>
  );
}
