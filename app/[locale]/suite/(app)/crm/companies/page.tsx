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
import { CompanyModal } from "@/components/suite/modals/CompanyModal";
import { getCompanies } from "@/lib/suite/data/crm";
import { getOwnerName } from "@/lib/suite/crm-helpers";
import type { Company } from "@/lib/suite/types/crm";

const sizes: Company["size"][] = ["1-10", "11-50", "51-200", "201-500", "500+"];

export default function CompaniesPage() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingCompany, setEditingCompany] = useState<Company | undefined>();
  const [industryFilter, setIndustryFilter] = useState<string>("all");
  const [sizeFilter, setSizeFilter] = useState<string>("all");

  useEffect(() => {
    let mounted = true;
    setIsLoading(true);
    getCompanies().then((data) => {
      if (!mounted) return;
      setCompanies(data);
      setIsLoading(false);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const industries = useMemo(
    () => Array.from(new Set(companies.map((company) => company.industry))).sort(),
    [companies]
  );

  const filteredCompanies = useMemo(() => {
    return companies.filter((company) => {
      if (industryFilter !== "all" && company.industry !== industryFilter) return false;
      if (sizeFilter !== "all" && company.size !== sizeFilter) return false;
      return true;
    });
  }, [companies, industryFilter, sizeFilter]);

  const handleSave = (company: Company) => {
    setCompanies((prev) => {
      const index = prev.findIndex((item) => item.id === company.id);
      if (index >= 0) {
        const next = [...prev];
        next[index] = company;
        return next;
      }
      return [company, ...prev];
    });
  };

  const handleDelete = (id: string) => {
    if (!window.confirm("Are you sure you want to delete this company?")) return;
    setCompanies((prev) => prev.filter((item) => item.id !== id));
  };

  const columns: ColumnDef<Company>[] = [
    {
      key: "name",
      header: "Name",
      accessor: (company) => company.name,
      sortable: true,
      width: "220px",
    },
    {
      key: "industry",
      header: "Industry",
      accessor: (company) => company.industry,
      sortable: true,
      width: "150px",
    },
    {
      key: "size",
      header: "Size",
      accessor: (company) => company.size,
      sortable: true,
      width: "120px",
    },
    {
      key: "location",
      header: "Location",
      accessor: (company) => company.location,
      sortable: true,
      width: "220px",
    },
    {
      key: "website",
      header: "Website",
      accessor: (company) =>
        company.website ? (
          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            {company.website.replace("https://", "").replace("http://", "")}
          </a>
        ) : (
          "-"
        ),
      sortable: true,
      sortAccessor: (company) => company.website ?? "",
      width: "220px",
    },
    {
      key: "owner",
      header: "Owner",
      accessor: (company) => getOwnerName(company.ownerId),
      sortable: true,
      sortAccessor: (company) => getOwnerName(company.ownerId),
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
        title="Companies"
        description="Manage the organizations in your pipeline."
        actions={
          <Button
            onClick={() => {
              setEditingCompany(undefined);
              setModalOpen(true);
            }}
          >
            <Plus className="mr-2 h-4 w-4" />
            New Company
          </Button>
        }
      />

      <div className="flex flex-col gap-3 sm:flex-row">
        <Select value={industryFilter} onValueChange={setIndustryFilter}>
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder="All industries" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All industries</SelectItem>
            {industries.map((industry) => (
              <SelectItem key={industry} value={industry}>
                {industry}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={sizeFilter} onValueChange={setSizeFilter}>
          <SelectTrigger className="w-full sm:w-[160px]">
            <SelectValue placeholder="All sizes" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All sizes</SelectItem>
            {sizes.map((size) => (
              <SelectItem key={size} value={size}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <DataTable
        data={filteredCompanies}
        columns={columns}
        isLoading={isLoading}
        searchPlaceholder="Search companies..."
        searchFields={["name", "industry", "location"]}
        emptyState={{
          title: "No companies found",
          description: "Try adjusting filters or add a new company.",
        }}
        rowActions={(row) => [
          {
            label: "View",
            onClick: () => {
              setEditingCompany(row);
              setModalOpen(true);
            },
          },
          {
            label: "Edit",
            onClick: () => {
              setEditingCompany(row);
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

      <CompanyModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        company={editingCompany}
        onSave={handleSave}
      />
    </m.div>
  );
}
