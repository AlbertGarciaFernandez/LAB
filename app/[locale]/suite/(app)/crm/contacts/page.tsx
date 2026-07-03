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
import { ContactModal } from "@/components/suite/modals/ContactModal";
import { getCompanies, getContacts } from "@/lib/suite/data/crm";
import { users } from "@/lib/suite/data/users";
import { getOwnerName } from "@/lib/suite/crm-helpers";
import type { Company, Contact } from "@/lib/suite/types/crm";

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingContact, setEditingContact] = useState<Contact | undefined>();
  const [companyFilter, setCompanyFilter] = useState<string>("all");
  const [ownerFilter, setOwnerFilter] = useState<string>("all");

  useEffect(() => {
    let mounted = true;
    setIsLoading(true);
    Promise.all([getContacts(), getCompanies()]).then(([contactsData, companiesData]) => {
      if (!mounted) return;
      setContacts(contactsData);
      setCompanies(companiesData);
      setIsLoading(false);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const getCompanyName = (companyId: string) =>
    companies.find((company) => company.id === companyId)?.name ?? "-";

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) => {
      if (companyFilter !== "all" && contact.companyId !== companyFilter) return false;
      if (ownerFilter !== "all" && contact.ownerId !== ownerFilter) return false;
      return true;
    });
  }, [contacts, companyFilter, ownerFilter]);

  const handleSave = (contact: Contact) => {
    setContacts((prev) => {
      const index = prev.findIndex((item) => item.id === contact.id);
      if (index >= 0) {
        const next = [...prev];
        next[index] = contact;
        return next;
      }
      return [contact, ...prev];
    });
  };

  const handleDelete = (id: string) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;
    setContacts((prev) => prev.filter((item) => item.id !== id));
  };

  const columns: ColumnDef<Contact>[] = [
    {
      key: "name",
      header: "Name",
      accessor: (contact) => `${contact.firstName} ${contact.lastName}`,
      sortable: true,
      sortAccessor: (contact) => `${contact.firstName} ${contact.lastName}`,
      width: "180px",
    },
    {
      key: "email",
      header: "Email",
      accessor: (contact) => contact.email,
      sortable: true,
      width: "220px",
    },
    {
      key: "phone",
      header: "Phone",
      accessor: (contact) => contact.phone ?? "-",
      sortable: true,
      sortAccessor: (contact) => contact.phone ?? "",
      width: "160px",
    },
    {
      key: "role",
      header: "Role",
      accessor: (contact) => contact.role,
      sortable: true,
      width: "160px",
    },
    {
      key: "company",
      header: "Company",
      accessor: (contact) => getCompanyName(contact.companyId),
      sortable: true,
      sortAccessor: (contact) => getCompanyName(contact.companyId),
      width: "200px",
    },
    {
      key: "owner",
      header: "Owner",
      accessor: (contact) => getOwnerName(contact.ownerId),
      sortable: true,
      sortAccessor: (contact) => getOwnerName(contact.ownerId),
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
        title="Contacts"
        description="Manage people across your accounts."
        actions={
          <Button
            onClick={() => {
              setEditingContact(undefined);
              setModalOpen(true);
            }}
          >
            <Plus className="mr-2 h-4 w-4" />
            New Contact
          </Button>
        }
      />

      <div className="flex flex-col gap-3 sm:flex-row">
        <Select value={companyFilter} onValueChange={setCompanyFilter}>
          <SelectTrigger className="w-full sm:w-[220px]">
            <SelectValue placeholder="All companies" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All companies</SelectItem>
            {companies.map((company) => (
              <SelectItem key={company.id} value={company.id}>
                {company.name}
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
        data={filteredContacts}
        columns={columns}
        isLoading={isLoading}
        searchPlaceholder="Search contacts..."
        searchFields={["firstName", "lastName", "email", "role"]}
        emptyState={{
          title: "No contacts found",
          description: "Try adjusting filters or add a new contact.",
        }}
        rowActions={(row) => [
          {
            label: "View",
            onClick: () => {
              setEditingContact(row);
              setModalOpen(true);
            },
          },
          {
            label: "Edit",
            onClick: () => {
              setEditingContact(row);
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

      <ContactModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        contact={editingContact}
        companies={companies}
        onSave={handleSave}
      />
    </m.div>
  );
}
