"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { users } from "@/lib/suite/data/users";
import type { Company, Contact, Opportunity, OpportunityStage } from "@/lib/suite/types/crm";

const stages: OpportunityStage[] = [
  "new",
  "qualified",
  "proposal",
  "negotiation",
  "closed_won",
  "closed_lost",
];

interface DealModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  deal?: Opportunity;
  companies: Company[];
  contacts: Contact[];
  onSave: (deal: Opportunity) => void;
}

const emptyDeal: Partial<Opportunity> = {
  name: "",
  companyId: "",
  contactId: undefined,
  stage: "new",
  value: 0,
  probability: 0,
  expectedCloseDate: "",
  ownerId: "",
};

export function DealModal({
  open,
  onOpenChange,
  deal,
  companies,
  contacts,
  onSave,
}: DealModalProps) {
  const [form, setForm] = useState<Partial<Opportunity>>(emptyDeal);

  useEffect(() => {
    if (open) {
      setForm(
        deal
          ? { ...deal }
          : {
              ...emptyDeal,
              companyId: companies[0]?.id ?? "",
              ownerId: users[0]?.id ?? "",
              expectedCloseDate: new Date().toISOString().split("T")[0],
            }
      );
    }
  }, [open, deal, companies]);

  const update = <K extends keyof Opportunity>(key: K, value: Opportunity[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }) as Partial<Opportunity>);
  };

  const handleSave = () => {
    if (!form.name?.trim() || !form.companyId || !form.expectedCloseDate) {
      return;
    }

    const now = new Date().toISOString();
    const saved: Opportunity = {
      id: deal?.id ?? `op_${Date.now()}`,
      name: form.name.trim(),
      companyId: form.companyId,
      contactId: form.contactId?.trim() || undefined,
      stage: form.stage ?? "new",
      value: Number(form.value) || 0,
      probability: Number(form.probability) || 0,
      expectedCloseDate: form.expectedCloseDate,
      ownerId: form.ownerId || users[0]?.id || "",
      createdAt: deal?.createdAt ?? now,
      lastActivityAt: now,
    };

    onSave(saved);
    onOpenChange(false);
  };

  const filteredContacts = form.companyId
    ? contacts.filter((contact) => contact.companyId === form.companyId)
    : contacts;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>{deal ? "Edit Deal" : "New Deal"}</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="deal-name">Deal Name</Label>
            <Input
              id="deal-name"
              value={form.name ?? ""}
              onChange={(event) => update("name", event.target.value)}
              placeholder="Northwind Enterprise Deal"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="deal-company">Company</Label>
              <Select
                value={form.companyId ?? ""}
                onValueChange={(value) => {
                  update("companyId", value);
                  if (
                    form.contactId &&
                    !contacts.some((c) => c.id === form.contactId && c.companyId === value)
                  ) {
                    update("contactId", "");
                  }
                }}
              >
                <SelectTrigger id="deal-company">
                  <SelectValue placeholder="Select company" />
                </SelectTrigger>
                <SelectContent>
                  {companies.map((company) => (
                    <SelectItem key={company.id} value={company.id}>
                      {company.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="deal-contact">Contact (optional)</Label>
              <Select
                value={form.contactId ?? ""}
                onValueChange={(value) => update("contactId", value || undefined)}
              >
                <SelectTrigger id="deal-contact">
                  <SelectValue placeholder="Select contact" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">None</SelectItem>
                  {filteredContacts.map((contact) => (
                    <SelectItem key={contact.id} value={contact.id}>
                      {contact.firstName} {contact.lastName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="deal-stage">Stage</Label>
              <Select
                value={form.stage ?? "new"}
                onValueChange={(value) => update("stage", value as OpportunityStage)}
              >
                <SelectTrigger id="deal-stage">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {stages.map((stage) => (
                    <SelectItem key={stage} value={stage}>
                      {stage.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="deal-expectedCloseDate">Expected Close Date</Label>
              <Input
                id="deal-expectedCloseDate"
                type="date"
                value={form.expectedCloseDate ?? ""}
                onChange={(event) => update("expectedCloseDate", event.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="deal-value">Value</Label>
              <Input
                id="deal-value"
                type="number"
                min={0}
                value={form.value ?? ""}
                onChange={(event) => update("value", Number(event.target.value))}
                placeholder="0"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="deal-probability">Probability (%)</Label>
              <Input
                id="deal-probability"
                type="number"
                min={0}
                max={100}
                value={form.probability ?? ""}
                onChange={(event) => update("probability", Number(event.target.value))}
                placeholder="0"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="deal-owner">Owner</Label>
            <Select value={form.ownerId ?? ""} onValueChange={(value) => update("ownerId", value)}>
              <SelectTrigger id="deal-owner">
                <SelectValue placeholder="Select owner" />
              </SelectTrigger>
              <SelectContent>
                {users.map((user) => (
                  <SelectItem key={user.id} value={user.id}>
                    {user.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save Deal</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
