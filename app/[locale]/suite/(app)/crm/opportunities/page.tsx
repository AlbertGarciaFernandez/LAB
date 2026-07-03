"use client";

import { useEffect, useMemo, useState } from "react";
import { m } from "framer-motion";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DataTable, type ColumnDef } from "@/components/suite/ui/DataTable";
import { PageHeader } from "@/components/suite/ui/PageHeader";
import { DealModal } from "@/components/suite/modals/DealModal";
import { getCompanies, getContacts, getOpportunities } from "@/lib/suite/data/crm";
import { users } from "@/lib/suite/data/users";
import { formatCurrency, getOwnerName, OpportunityStageBadge } from "@/lib/suite/crm-helpers";
import type { Company, Contact, Opportunity, OpportunityStage } from "@/lib/suite/types/crm";

const stages: OpportunityStage[] = [
  "new",
  "qualified",
  "proposal",
  "negotiation",
  "closed_won",
  "closed_lost",
];

type OpportunityRow = Opportunity & { companyName: string };

function lookupCompanyName(companies: Company[], companyId: string) {
  return companies.find((company) => company.id === companyId)?.name ?? "-";
}

export default function OpportunitiesPage() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingDeal, setEditingDeal] = useState<Opportunity | undefined>();
  const [stageFilter, setStageFilter] = useState<string>("all");
  const [ownerFilter, setOwnerFilter] = useState<string>("all");

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

  const rows: OpportunityRow[] = useMemo(() => {
    return opportunities.map((opportunity) => ({
      ...opportunity,
      companyName: lookupCompanyName(companies, opportunity.companyId),
    }));
  }, [opportunities, companies]);

  const filteredRows = useMemo(() => {
    return rows.filter((row) => {
      if (stageFilter !== "all" && row.stage !== stageFilter) return false;
      if (ownerFilter !== "all" && row.ownerId !== ownerFilter) return false;
      return true;
    });
  }, [rows, stageFilter, ownerFilter]);

  const handleSave = (deal: Opportunity) => {
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

  const handleDelete = (id: string) => {
    if (!window.confirm("Are you sure you want to delete this deal?")) return;
    setOpportunities((prev) => prev.filter((item) => item.id !== id));
  };

  const columns: ColumnDef<OpportunityRow>[] = [
    {
      key: "name",
      header: "Deal Name",
      accessor: (row) => row.name,
      sortable: true,
      width: "220px",
    },
    {
      key: "company",
      header: "Company",
      accessor: (row) => row.companyName,
      sortable: true,
      sortAccessor: (row) => row.companyName,
      width: "200px",
    },
    {
      key: "stage",
      header: "Stage",
      accessor: (row) => <OpportunityStageBadge stage={row.stage} />,
      sortable: true,
      sortAccessor: (row) => row.stage,
      width: "140px",
    },
    {
      key: "value",
      header: "Value",
      accessor: (row) => formatCurrency(row.value),
      sortable: true,
      sortAccessor: (row) => row.value,
      width: "130px",
    },
    {
      key: "probability",
      header: "Probability",
      accessor: (row) => `${row.probability}%`,
      sortable: true,
      sortAccessor: (row) => row.probability,
      width: "120px",
    },
    {
      key: "expectedCloseDate",
      header: "Expected Close",
      accessor: (row) => row.expectedCloseDate,
      sortable: true,
      width: "150px",
    },
    {
      key: "owner",
      header: "Owner",
      accessor: (row) => getOwnerName(row.ownerId),
      sortable: true,
      sortAccessor: (row) => getOwnerName(row.ownerId),
      width: "150px",
    },
  ];

  return (
    <m.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-6 p-4 md:p-6"
    >
      <PageHeader
        title="Opportunities"
        description="Track deals through every stage of your pipeline."
        actions={
          <Button
            onClick={() => {
              setEditingDeal(undefined);
              setModalOpen(true);
            }}
          >
            <Plus className="mr-2 h-4 w-4" />
            New Deal
          </Button>
        }
      />

      <div className="flex flex-col gap-3 sm:flex-row">
        <Select value={stageFilter} onValueChange={setStageFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="All stages" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All stages</SelectItem>
            {stages.map((stage) => (
              <SelectItem key={stage} value={stage}>
                {stage.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={ownerFilter} onValueChange={setOwnerFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="All owners" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All owners</SelectItem>
            {users.map((user) => (
              <SelectItem key={user.id} value={user.id}>
                {user.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <DataTable
        data={filteredRows}
        columns={columns}
        isLoading={isLoading}
        searchPlaceholder="Search deals..."
        searchFields={["name", "companyName"]}
        emptyState={{
          title: "No deals found",
          description: "Try adjusting filters or add a new deal.",
        }}
        rowActions={(row) => [
          {
            label: "View",
            onClick: () => {
              setEditingDeal(row);
              setModalOpen(true);
            },
          },
          {
            label: "Edit",
            onClick: () => {
              setEditingDeal(row);
              setModalOpen(true);
            },
          },
          {
            label: "Delete",
            variant: "destructive",
            onClick: () => handleDelete(row.id),
          },
        ]}
      />

      <DealModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        deal={editingDeal}
        companies={companies}
        contacts={contacts}
        onSave={handleSave}
      />
    </m.div>
  );
}
