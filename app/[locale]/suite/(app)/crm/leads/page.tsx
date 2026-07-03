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
import { LeadModal } from "@/components/suite/modals/LeadModal";
import { getLeads } from "@/lib/suite/data/crm";
import { users } from "@/lib/suite/data/users";
import { formatCurrency, getOwnerName, LeadStatusBadge } from "@/lib/suite/crm-helpers";
import type { Lead, LeadStatus } from "@/lib/suite/types/crm";

const leadStatuses: LeadStatus[] = ["new", "contacted", "qualified", "unqualified", "nurturing"];

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingLead, setEditingLead] = useState<Lead | undefined>();
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [ownerFilter, setOwnerFilter] = useState<string>("all");

  useEffect(() => {
    let mounted = true;
    setIsLoading(true);
    getLeads().then((data) => {
      if (!mounted) return;
      setLeads(data);
      setIsLoading(false);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      if (statusFilter !== "all" && lead.status !== statusFilter) return false;
      if (ownerFilter !== "all" && lead.ownerId !== ownerFilter) return false;
      return true;
    });
  }, [leads, statusFilter, ownerFilter]);

  const handleSave = (lead: Lead) => {
    setLeads((prev) => {
      const index = prev.findIndex((item) => item.id === lead.id);
      if (index >= 0) {
        const next = [...prev];
        next[index] = lead;
        return next;
      }
      return [lead, ...prev];
    });
  };

  const handleDelete = (id: string) => {
    if (!window.confirm("Are you sure you want to delete this lead?")) return;
    setLeads((prev) => prev.filter((item) => item.id !== id));
  };

  const columns: ColumnDef<Lead>[] = [
    {
      key: "name",
      header: "Name",
      accessor: (lead) => `${lead.firstName} ${lead.lastName}`,
      sortable: true,
      sortAccessor: (lead) => `${lead.firstName} ${lead.lastName}`,
      width: "180px",
    },
    {
      key: "company",
      header: "Company",
      accessor: (lead) => lead.company ?? "-",
      sortable: true,
      width: "180px",
    },
    {
      key: "email",
      header: "Email",
      accessor: (lead) => lead.email,
      sortable: true,
      width: "220px",
    },
    {
      key: "status",
      header: "Status",
      accessor: (lead) => <LeadStatusBadge status={lead.status} />,
      sortable: true,
      sortAccessor: (lead) => lead.status,
      width: "130px",
    },
    {
      key: "source",
      header: "Source",
      accessor: (lead) => lead.source,
      sortable: true,
      width: "140px",
    },
    {
      key: "owner",
      header: "Owner",
      accessor: (lead) => getOwnerName(lead.ownerId),
      sortable: true,
      sortAccessor: (lead) => getOwnerName(lead.ownerId),
      width: "150px",
    },
    {
      key: "estimatedValue",
      header: "Estimated Value",
      accessor: (lead) => formatCurrency(lead.estimatedValue),
      sortable: true,
      sortAccessor: (lead) => lead.estimatedValue,
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
        title="Leads"
        description="Manage and track your sales leads."
        actions={
          <Button
            onClick={() => {
              setEditingLead(undefined);
              setModalOpen(true);
            }}
          >
            <Plus className="mr-2 h-4 w-4" />
            New Lead
          </Button>
        }
      />

      <div className="flex flex-col gap-3 sm:flex-row">
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="All statuses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All statuses</SelectItem>
            {leadStatuses.map((status) => (
              <SelectItem key={status} value={status}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
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
        data={filteredLeads}
        columns={columns}
        isLoading={isLoading}
        searchPlaceholder="Search leads..."
        searchFields={["firstName", "lastName", "email", "company"]}
        emptyState={{
          title: "No leads found",
          description: "Try adjusting filters or add a new lead.",
        }}
        rowActions={(row) => [
          {
            label: "View",
            onClick: () => {
              setEditingLead(row);
              setModalOpen(true);
            },
          },
          {
            label: "Edit",
            onClick: () => {
              setEditingLead(row);
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

      <LeadModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        lead={editingLead}
        onSave={handleSave}
      />
    </m.div>
  );
}
