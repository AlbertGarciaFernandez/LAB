"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  CheckCircle2,
  Lightbulb,
  Mail,
  Presentation,
  RefreshCcw,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ActivityFeed } from "@/components/suite/ui/ActivityFeed";
import { LoadingState } from "@/components/suite/ui/LoadingState";
import { PageHeader } from "@/components/suite/ui/PageHeader";
import { StatCard } from "@/components/suite/ui/StatCard";
import { PipelineChart } from "@/components/suite/charts/PipelineChart";
import { RevenueChart } from "@/components/suite/charts/RevenueChart";
import { getActivities } from "@/lib/suite/data/activities";
import { opportunities, tasks } from "@/lib/suite/data/crm";
import { getUsers } from "@/lib/suite/data/users";
import type { Activity, OpportunityStage, User } from "@/lib/suite/types/crm";

const STAGE_LABELS: Record<OpportunityStage, string> = {
  new: "New",
  qualified: "Qualified",
  proposal: "Proposal",
  negotiation: "Negotiation",
  closed_won: "Closed Won",
  closed_lost: "Closed Lost",
};

const MONTHS = ["Feb", "Mar", "Apr", "May", "Jun", "Jul"];

function formatEuroCompact(value: number) {
  return `€${new Intl.NumberFormat("nl-NL", { maximumFractionDigits: 0 }).format(value)}`;
}

function getClosedOpportunities() {
  return opportunities.filter((o) => o.stage === "closed_won" || o.stage === "closed_lost");
}

function getPipelineValue() {
  return opportunities
    .filter((o) => o.stage !== "closed_won" && o.stage !== "closed_lost")
    .reduce((sum, o) => sum + o.value, 0);
}

function getRevenueThisMonth() {
  const now = new Date("2026-07-03T09:00:00.000Z");
  const currentMonth = now.getUTCMonth();
  const currentYear = now.getUTCFullYear();

  const monthRevenue = opportunities
    .filter((o) => o.stage === "closed_won")
    .filter((o) => {
      const d = new Date(o.createdAt);
      return d.getUTCMonth() === currentMonth && d.getUTCFullYear() === currentYear;
    })
    .reduce((sum, o) => sum + o.value, 0);

  // Fallback to a realistic derived number when no deals closed this month.
  return (
    monthRevenue ||
    opportunities.filter((o) => o.stage === "closed_won").reduce((sum, o) => sum + o.value, 0)
  );
}

function getWinRate() {
  const closed = getClosedOpportunities();
  const won = closed.filter((o) => o.stage === "closed_won").length;
  const total = closed.length;
  return total === 0 ? 0 : Math.round((won / total) * 100);
}

function getTasksDue() {
  const today = new Date("2026-07-03T09:00:00.000Z").toISOString().split("T")[0];
  return tasks.filter((t) => t.status !== "done" && t.dueDate <= today).length;
}

function getRevenueChartData() {
  return MONTHS.map((month, index) => {
    const base = 280000 + index * 15000;
    return {
      month,
      revenue: Math.round(base + Math.sin(index) * 40000),
      target: Math.round(300000 + index * 14000),
    };
  });
}

function getPipelineChartData() {
  const groups = opportunities.reduce<Record<string, number>>((acc, o) => {
    const label = STAGE_LABELS[o.stage];
    acc[label] = (acc[label] ?? 0) + o.value;
    return acc;
  }, {});

  return Object.entries(groups).map(([stage, value]) => ({ stage, value }));
}

const suggestions = [
  {
    id: 1,
    icon: <Mail className="h-4 w-4" />,
    text: "Follow up with Acme Corp — deal stalled in Proposal for 5 days",
    action: "Send email",
  },
  {
    id: 2,
    icon: <Presentation className="h-4 w-4" />,
    text: "Schedule demo with TechFlow BV",
    action: "Book demo",
  },
  {
    id: 3,
    icon: <Users className="h-4 w-4" />,
    text: "Reach out to 3 cold leads from last week",
    action: "View leads",
  },
  {
    id: 4,
    icon: <RefreshCcw className="h-4 w-4" />,
    text: "Renew proposal for Oceanic Shipping after objection",
    action: "Review deal",
  },
];

interface DashboardData {
  activities: Activity[];
  users: User[];
  pipelineValue: number;
  revenueThisMonth: number;
  winRate: number;
  tasksDue: number;
  revenueChartData: { month: string; revenue: number; target: number }[];
  pipelineChartData: { stage: string; value: number }[];
}

export default function CrmDashboardPage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<DashboardData | null>(null);
  const [dateFilter, setDateFilter] = useState("this_month");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const [activityData, userData] = await Promise.all([getActivities(600), getUsers(400)]);

      if (cancelled) return;

      setData({
        activities: activityData,
        users: userData,
        pipelineValue: getPipelineValue(),
        revenueThisMonth: getRevenueThisMonth(),
        winRate: getWinRate(),
        tasksDue: getTasksDue(),
        revenueChartData: getRevenueChartData(),
        pipelineChartData: getPipelineChartData(),
      });
      setLoading(false);
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  const statCards = useMemo(
    () => [
      {
        label: "Pipeline Value",
        value: formatEuroCompact(data?.pipelineValue ?? 0),
        change: { value: 12, isPositive: true },
        icon: <TrendingUp className="h-5 w-5" />,
      },
      {
        label: "Revenue This Month",
        value: formatEuroCompact(data?.revenueThisMonth ?? 0),
        change: { value: 8, isPositive: true },
        icon: <Target className="h-5 w-5" />,
      },
      {
        label: "Win Rate",
        value: `${data?.winRate ?? 0}%`,
        change: { value: 3, isPositive: false },
        icon: <CheckCircle2 className="h-5 w-5" />,
      },
      {
        label: "Tasks Due",
        value: data?.tasksDue ?? 0,
        change: { value: 5, isPositive: false },
        icon: <CalendarDays className="h-5 w-5" />,
      },
    ],
    [data]
  );

  if (loading || !data) {
    return <LoadingState variant="page" />;
  }

  return (
    <div className="space-y-6 p-4 md:p-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <PageHeader
          title="Dashboard"
          description="Track pipeline health, revenue, and team activity."
          actions={
            <Select value={dateFilter} onValueChange={setDateFilter}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="This month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="this_month">This month</SelectItem>
                <SelectItem value="last_month">Last month</SelectItem>
                <SelectItem value="last_90_days">Last 90 days</SelectItem>
                <SelectItem value="this_year">This year</SelectItem>
              </SelectContent>
            </Select>
          }
        />
      </motion.div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((card, index) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
          >
            <StatCard label={card.label} value={card.value} change={card.change} icon={card.icon} />
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-medium">Revenue vs Target</CardTitle>
            </CardHeader>
            <CardContent>
              <RevenueChart data={data.revenueChartData} />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-medium">Pipeline by Stage</CardTitle>
            </CardHeader>
            <CardContent>
              <PipelineChart data={data.pipelineChartData} />
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-base font-medium">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ActivityFeed activities={data.activities} users={data.users} limit={6} />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <Card className="h-full">
            <CardHeader className="flex flex-row items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <CardTitle className="text-base font-medium">AI Suggestions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {suggestions.map((suggestion) => (
                  <li
                    key={suggestion.id}
                    className="flex items-start gap-3 rounded-lg border border-border/50 bg-muted/30 p-3 transition-colors hover:bg-muted/50"
                  >
                    <div className="mt-0.5 rounded-md bg-primary/10 p-1.5 text-primary">
                      {suggestion.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm leading-relaxed text-foreground">{suggestion.text}</p>
                      <button
                        type="button"
                        className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                      >
                        <Lightbulb className="h-3 w-3" />
                        {suggestion.action}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
