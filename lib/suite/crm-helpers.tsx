import { Badge } from "@/components/ui/badge";
import { users } from "@/lib/suite/data/users";
import type { LeadStatus, OpportunityStage } from "@/lib/suite/types/crm";

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export function getOwnerName(ownerId: string) {
  return users.find((user) => user.id === ownerId)?.name ?? "-";
}

const leadStatusStyles: Record<LeadStatus, string> = {
  new: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-900",
  contacted:
    "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-900",
  qualified:
    "bg-green-100 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-900",
  unqualified:
    "bg-red-100 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-900",
  nurturing:
    "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-900",
};

export function LeadStatusBadge({ status }: { status: LeadStatus }) {
  const label = status.charAt(0).toUpperCase() + status.slice(1);
  return <Badge className={leadStatusStyles[status]}>{label}</Badge>;
}

const stageStyles: Record<OpportunityStage, string> = {
  new: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-900",
  qualified:
    "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-900",
  proposal:
    "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-900",
  negotiation:
    "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-900",
  closed_won:
    "bg-green-100 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-900",
  closed_lost:
    "bg-red-100 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-900",
};

export function OpportunityStageBadge({ stage }: { stage: OpportunityStage }) {
  const label = stage.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
  return <Badge className={stageStyles[stage]}>{label}</Badge>;
}
