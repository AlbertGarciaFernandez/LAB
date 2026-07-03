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
import type { Company, Contact } from "@/lib/suite/types/crm";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  contact?: Contact;
  companies: Company[];
  onSave: (contact: Contact) => void;
}

const emptyContact: Partial<Contact> = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  role: "",
  companyId: "",
  ownerId: "",
};

export function ContactModal({
  open,
  onOpenChange,
  contact,
  companies,
  onSave,
}: ContactModalProps) {
  const [form, setForm] = useState<Partial<Contact>>(emptyContact);

  useEffect(() => {
    if (open) {
      setForm(
        contact
          ? { ...contact }
          : {
              ...emptyContact,
              companyId: companies[0]?.id ?? "",
              ownerId: users[0]?.id ?? "",
            }
      );
    }
  }, [open, contact, companies]);

  const update = <K extends keyof Contact>(key: K, value: Contact[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }) as Partial<Contact>);
  };

  const handleSave = () => {
    if (
      !form.firstName?.trim() ||
      !form.lastName?.trim() ||
      !form.email?.trim() ||
      !form.companyId
    ) {
      return;
    }

    const saved: Contact = {
      id: contact?.id ?? `ct_${Date.now()}`,
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      email: form.email.trim(),
      phone: form.phone?.trim() || undefined,
      role: form.role?.trim() ?? "",
      companyId: form.companyId,
      ownerId: form.ownerId || users[0]?.id || "",
      createdAt: contact?.createdAt ?? new Date().toISOString(),
    };

    onSave(saved);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>{contact ? "Edit Contact" : "New Contact"}</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contact-firstName">First name</Label>
              <Input
                id="contact-firstName"
                value={form.firstName ?? ""}
                onChange={(event) => update("firstName", event.target.value)}
                placeholder="John"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-lastName">Last name</Label>
              <Input
                id="contact-lastName"
                value={form.lastName ?? ""}
                onChange={(event) => update("lastName", event.target.value)}
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contact-email">Email</Label>
              <Input
                id="contact-email"
                type="email"
                value={form.email ?? ""}
                onChange={(event) => update("email", event.target.value)}
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-phone">Phone</Label>
              <Input
                id="contact-phone"
                value={form.phone ?? ""}
                onChange={(event) => update("phone", event.target.value)}
                placeholder="+31 6 1234 5678"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contact-role">Role</Label>
              <Input
                id="contact-role"
                value={form.role ?? ""}
                onChange={(event) => update("role", event.target.value)}
                placeholder="CEO"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-company">Company</Label>
              <Select
                value={form.companyId ?? ""}
                onValueChange={(value) => update("companyId", value)}
              >
                <SelectTrigger id="contact-company">
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
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-owner">Owner</Label>
            <Select value={form.ownerId ?? ""} onValueChange={(value) => update("ownerId", value)}>
              <SelectTrigger id="contact-owner">
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
          <Button onClick={handleSave}>Save Contact</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
