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
import type { Company } from "@/lib/suite/types/crm";

const sizes: Company["size"][] = ["1-10", "11-50", "51-200", "201-500", "500+"];

interface CompanyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  company?: Company;
  onSave: (company: Company) => void;
}

const emptyCompany: Partial<Company> = {
  name: "",
  industry: "",
  size: "1-10",
  location: "",
  website: "",
  ownerId: "",
};

export function CompanyModal({ open, onOpenChange, company, onSave }: CompanyModalProps) {
  const [form, setForm] = useState<Partial<Company>>(emptyCompany);

  useEffect(() => {
    if (open) {
      setForm(company ? { ...company } : { ...emptyCompany, ownerId: users[0]?.id ?? "" });
    }
  }, [open, company]);

  const update = <K extends keyof Company>(key: K, value: Company[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }) as Partial<Company>);
  };

  const handleSave = () => {
    if (!form.name?.trim() || !form.industry?.trim() || !form.location?.trim()) {
      return;
    }

    const saved: Company = {
      id: company?.id ?? `co_${Date.now()}`,
      name: form.name.trim(),
      industry: form.industry.trim(),
      size: form.size ?? "1-10",
      location: form.location.trim(),
      website: form.website?.trim() || undefined,
      ownerId: form.ownerId || users[0]?.id || "",
      createdAt: company?.createdAt ?? new Date().toISOString(),
    };

    onSave(saved);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>{company ? "Edit Company" : "New Company"}</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="company-name">Name</Label>
            <Input
              id="company-name"
              value={form.name ?? ""}
              onChange={(event) => update("name", event.target.value)}
              placeholder="Acme Inc."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company-industry">Industry</Label>
              <Input
                id="company-industry"
                value={form.industry ?? ""}
                onChange={(event) => update("industry", event.target.value)}
                placeholder="SaaS"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company-size">Size</Label>
              <Select
                value={form.size ?? "1-10"}
                onValueChange={(value) => update("size", value as Company["size"])}
              >
                <SelectTrigger id="company-size">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company-location">Location</Label>
              <Input
                id="company-location"
                value={form.location ?? ""}
                onChange={(event) => update("location", event.target.value)}
                placeholder="Amsterdam, Netherlands"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company-website">Website</Label>
              <Input
                id="company-website"
                value={form.website ?? ""}
                onChange={(event) => update("website", event.target.value)}
                placeholder="https://example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company-owner">Owner</Label>
            <Select value={form.ownerId ?? ""} onValueChange={(value) => update("ownerId", value)}>
              <SelectTrigger id="company-owner">
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
          <Button onClick={handleSave}>Save Company</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
