"use client";

import { useMemo, useState } from "react";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  defaultDropAnimationSideEffects,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { formatCurrency } from "@/lib/suite/crm-helpers";
import type { Company, Opportunity, OpportunityStage, User } from "@/lib/suite/types/crm";

export interface KanbanBoardProps {
  opportunities: Opportunity[];
  companies: Company[];
  users: User[];
  onStageChange: (opportunityId: string, newStage: OpportunityStage) => void;
  onCardClick: (opportunity: Opportunity) => void;
}

const STAGES: { id: OpportunityStage; label: string }[] = [
  { id: "new", label: "New" },
  { id: "qualified", label: "Qualified" },
  { id: "proposal", label: "Proposal" },
  { id: "negotiation", label: "Negotiation" },
  { id: "closed_won", label: "Closed Won" },
  { id: "closed_lost", label: "Closed Lost" },
];

function getPriority(value: number, probability: number): "low" | "medium" | "high" {
  if (value >= 100_000 || probability >= 70) return "high";
  if (value >= 50_000 || probability >= 40) return "medium";
  return "low";
}

const priorityStyles: Record<"low" | "medium" | "high", string> = {
  low: "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-950 dark:text-slate-300 dark:border-slate-900",
  medium:
    "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-900",
  high: "bg-red-100 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-900",
};

function PriorityBadge({ priority }: { priority: "low" | "medium" | "high" }) {
  const label = priority.charAt(0).toUpperCase() + priority.slice(1);
  return <Badge className={priorityStyles[priority]}>{label}</Badge>;
}

function OwnerAvatar({ user }: { user?: User }) {
  const initials = user
    ? user.name
        .split(" ")
        .map((name) => name[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "?";

  return (
    <Avatar className="h-7 w-7 text-xs">
      {user?.avatar && <AvatarImage src={user.avatar} alt={user.name} />}
      <AvatarFallback className="bg-primary/10 text-primary">{initials}</AvatarFallback>
    </Avatar>
  );
}

interface KanbanCardProps {
  opportunity: Opportunity;
  company?: Company;
  owner?: User;
  onClick: () => void;
  isOverlay?: boolean;
}

function KanbanCard({ opportunity, company, owner, onClick, isOverlay = false }: KanbanCardProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: opportunity.id,
    data: { stage: opportunity.stage, opportunity },
    disabled: isOverlay,
  });

  const priority = getPriority(opportunity.value, opportunity.probability);
  const style = transform ? { transform: CSS.Translate.toString(transform) } : undefined;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      onClick={() => {
        if (!isDragging) onClick();
      }}
      role="button"
      tabIndex={0}
      aria-label={`${opportunity.name} deal card`}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick();
        }
      }}
      className={cn(
        "group cursor-grab rounded-lg border border-border/50 bg-surface p-3 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md active:cursor-grabbing",
        isOverlay && "rotate-2 scale-105 cursor-grabbing opacity-90 shadow-xl",
        isDragging && !isOverlay && "scale-95 opacity-40"
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-medium leading-snug text-foreground">{opportunity.name}</h3>
        <PriorityBadge priority={priority} />
      </div>
      <p className="mt-1 text-xs text-muted-foreground">{company?.name ?? "Unknown company"}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-sm font-semibold text-foreground">
          {formatCurrency(opportunity.value)}
        </span>
        <OwnerAvatar user={owner} />
      </div>
    </div>
  );
}

interface KanbanColumnProps {
  stage: OpportunityStage;
  label: string;
  opportunities: Opportunity[];
  companies: Company[];
  users: User[];
  count: number;
  onCardClick: (opportunity: Opportunity) => void;
}

function KanbanColumn({
  stage,
  label,
  opportunities,
  companies,
  users,
  count,
  onCardClick,
}: KanbanColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: stage,
    data: { stage },
  });

  return (
    <div className="flex min-w-[280px] flex-1 flex-col rounded-xl bg-surface/50 p-3 md:min-w-[300px]">
      <div className="mb-3 flex items-center justify-between px-1">
        <h2 className="text-sm font-semibold text-foreground">{label}</h2>
        <span className="rounded-full bg-background px-2 py-0.5 text-xs font-medium text-muted-foreground">
          {count}
        </span>
      </div>
      <div
        ref={setNodeRef}
        className={cn(
          "flex flex-1 flex-col gap-2 rounded-lg transition-colors",
          isOver && "bg-primary/5 ring-1 ring-inset ring-primary/30"
        )}
      >
        {opportunities.map((opportunity) => (
          <KanbanCard
            key={opportunity.id}
            opportunity={opportunity}
            company={companies.find((company) => company.id === opportunity.companyId)}
            owner={users.find((user) => user.id === opportunity.ownerId)}
            onClick={() => onCardClick(opportunity)}
          />
        ))}
      </div>
    </div>
  );
}

export function KanbanBoard({
  opportunities,
  companies,
  users,
  onStageChange,
  onCardClick,
}: KanbanBoardProps) {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    })
  );

  const [activeId, setActiveId] = useState<string | null>(null);
  const activeOpportunity = useMemo(
    () => opportunities.find((opportunity) => opportunity.id === activeId),
    [activeId, opportunities]
  );

  const grouped = useMemo(() => {
    const map: Record<OpportunityStage, Opportunity[]> = {
      new: [],
      qualified: [],
      proposal: [],
      negotiation: [],
      closed_won: [],
      closed_lost: [],
    };

    for (const opportunity of opportunities) {
      map[opportunity.stage].push(opportunity);
    }

    return map;
  }, [opportunities]);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);

    if (!over) return;

    const newStage = STAGES.find((stage) => stage.id === over.id)?.id;
    const currentStage = (active.data.current as { stage?: OpportunityStage } | undefined)?.stage;

    if (newStage && newStage !== currentStage) {
      onStageChange(active.id as string, newStage);
    }
  };

  return (
    <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="flex flex-col gap-4 md:flex-row md:flex-nowrap md:overflow-x-auto md:pb-2">
        {STAGES.map(({ id, label }) => (
          <KanbanColumn
            key={id}
            stage={id}
            label={label}
            opportunities={grouped[id]}
            companies={companies}
            users={users}
            count={grouped[id].length}
            onCardClick={onCardClick}
          />
        ))}
      </div>
      <DragOverlay
        dropAnimation={{
          sideEffects: defaultDropAnimationSideEffects({
            styles: { active: { opacity: "0.5" } },
          }),
        }}
      >
        {activeOpportunity ? (
          <KanbanCard
            opportunity={activeOpportunity}
            company={companies.find((company) => company.id === activeOpportunity.companyId)}
            owner={users.find((user) => user.id === activeOpportunity.ownerId)}
            onClick={() => {}}
            isOverlay
          />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
