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
import type { Lead, LeadStatus } from "@/lib/suite/types/crm";

const leadStatuses: LeadStatus[] = ["new", "contacted", "qualified", "unqualified", "nurturing"];

interface LeadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  lead?: Lead;
  onSave: (lead: Lead) => void;
}

const emptyLead: Partial<Lead> = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  title: "",
  status: "new",
  source: "",
  estimatedValue: 0,
  ownerId: "",
};

export function LeadModal({ open, onOpenChange, lead, onSave }: LeadModalProps) {
  const [form, setForm] = useState<Partial<Lead>>(emptyLead);

  useEffect(() => {
    if (open) {
      setForm(lead ? { ...lead } : { ...emptyLead, ownerId: users[0]?.id ?? "" });
    }
  }, [open, lead]);

  const update = <K extends keyof Lead>(key: K, value: Lead[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }) as Partial<Lead>);
  };

  const handleSave = () => {
    if (!form.firstName?.trim() || !form.lastName?.trim() || !form.email?.trim()) {
      return;
    }

    const now = new Date().toISOString();
    const saved: Lead = {
      id: lead?.id ?? `ld_${Date.now()}`,
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      email: form.email.trim(),
      phone: form.phone?.trim() || undefined,
      company: form.company?.trim() || undefined,
      title: form.title?.trim() || undefined,
      status: form.status ?? "new",
      source: form.source?.trim() ?? "",
      estimatedValue: Number(form.estimatedValue) || 0,
      ownerId: form.ownerId || users[0]?.id || "",
      createdAt: lead?.createdAt ?? now,
      lastActivityAt: now,
    };

    onSave(saved);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>{lead ? "Edit Lead" : "New Lead"}</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="lead-firstName">First name</Label>
              <Input
                id="lead-firstName"
                value={form.firstName ?? ""}
                onChange={(event) => update("firstName", event.target.value)}
                placeholder="John"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lead-lastName">Last name</Label>
              <Input
                id="lead-lastName"
                value={form.lastName ?? ""}
                onChange={(event) => update("lastName", event.target.value)}
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="lead-email">Email</Label>
              <Input
                id="lead-email"
                type="email"
                value={form.email ?? ""}
                onChange={(event) => update("email", event.target.value)}
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lead-phone">Phone</Label>
              <Input
                id="lead-phone"
                value={form.phone ?? ""}
                onChange={(event) => update("phone", event.target.value)}
                placeholder="+31 6 1234 5678"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="lead-company">Company</Label>
              <Input
                id="lead-company"
                value={form.company ?? ""}
                onChange={(event) => update("company", event.target.value)}
                placeholder="Acme Inc."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lead-title">Title</Label>
              <Input
                id="lead-title"
                value={form.title ?? ""}
                onChange={(event) => update("title", event.target.value)}
                placeholder="CEO"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="lead-status">Status</Label>
              <Select
                value={form.status ?? "new"}
                onValueChange={(value) => update("status", value as LeadStatus)}
              >
                <SelectTrigger id="lead-status">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {leadStatuses.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="lead-source">Source</Label>
              <Input
                id="lead-source"
                value={form.source ?? ""}
                onChange={(event) => update("source", event.target.value)}
                placeholder="Website, LinkedIn..."
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="lead-estimatedValue">Estimated Value</Label>
              <Input
                id="lead-estimatedValue"
                type="number"
                min={0}
                value={form.estimatedValue ?? ""}
                onChange={(event) => update("estimatedValue", Number(event.target.value))}
                placeholder="0"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lead-owner">Owner</Label>
              <Select
                value={form.ownerId ?? ""}
                onValueChange={(value) => update("ownerId", value)}
              >
                <SelectTrigger id="lead-owner">
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
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save Lead</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
