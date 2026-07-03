"use client";

import { useMemo, useState } from "react";
import { m } from "framer-motion";
import { BarChart3, Calendar, DollarSign, Target, TrendingUp, Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ConversionChart } from "@/components/suite/charts/ConversionChart";
import { LeadSourceChart } from "@/components/suite/charts/LeadSourceChart";
import { RevenueChart } from "@/components/suite/charts/RevenueChart";
import { formatCurrency } from "@/components/suite/charts/RevenueChart";
import { PageHeader } from "@/components/suite/ui/PageHeader";
import { StatCard } from "@/components/suite/ui/StatCard";
import { users } from "@/lib/suite/data/users";

const PERIODS = [
  { value: "7d", label: "Last 7 days" },
  { value: "30d", label: "Last 30 days" },
  { value: "90d", label: "Last 90 days" },
  { value: "1y", label: "Last year" },
];

function generateRevenueData(period: string) {
  if (period === "7d") {
    return [
      { month: "Mon", revenue: 12500, target: 15000 },
      { month: "Tue", revenue: 18200, target: 16000 },
      { month: "Wed", revenue: 15400, target: 15500 },
      { month: "Thu", revenue: 24100, target: 18000 },
      { month: "Fri", revenue: 19800, target: 19000 },
      { month: "Sat", revenue: 8200, target: 7000 },
      { month: "Sun", revenue: 6400, target: 7000 },
    ];
  }

  if (period === "30d") {
    return [
      { month: "Week 1", revenue: 87500, target: 80000 },
      { month: "Week 2", revenue: 92300, target: 85000 },
      { month: "Week 3", revenue: 78100, target: 82000 },
      { month: "Week 4", revenue: 104500, target: 95000 },
    ];
  }

  if (period === "90d") {
    return [
      { month: "Apr", revenue: 245000, target: 230000 },
      { month: "May", revenue: 268000, target: 250000 },
      { month: "Jun", revenue: 312000, target: 290000 },
    ];
  }

  return [
    { month: "Aug", revenue: 310000, target: 300000 },
    { month: "Sep", revenue: 285000, target: 310000 },
    { month: "Oct", revenue: 342000, target: 320000 },
    { month: "Nov", revenue: 365000, target: 340000 },
    { month: "Dec", revenue: 398000, target: 380000 },
    { month: "Jan", revenue: 355000, target: 360000 },
    { month: "Feb", revenue: 382000, target: 370000 },
    { month: "Mar", revenue: 410000, target: 390000 },
    { month: "Apr", revenue: 395000, target: 400000 },
    { month: "May", revenue: 438000, target: 420000 },
    { month: "Jun", revenue: 465000, target: 440000 },
    { month: "Jul", revenue: 487500, target: 460000 },
  ];
}

function generateLeadSourceData(period: string) {
  const multiplier = period === "7d" ? 0.2 : period === "30d" ? 0.6 : period === "90d" ? 1 : 2.5;
  return [
    { source: "Inbound", count: Math.round(42 * multiplier) },
    { source: "Outbound", count: Math.round(28 * multiplier) },
    { source: "Referral", count: Math.round(18 * multiplier) },
    { source: "Events", count: Math.round(12 * multiplier) },
    { source: "Paid Ads", count: Math.round(22 * multiplier) },
  ];
}

function generateConversionData(period: string) {
  const base = period === "7d" ? 45 : period === "30d" ? 180 : period === "90d" ? 420 : 1650;
  return [
    { stage: "Lead", value: base, rate: 100 },
    { stage: "Qualified", value: Math.round(base * 0.55), rate: 55 },
    { stage: "Proposal", value: Math.round(base * 0.28), rate: 28 },
    { stage: "Negotiation", value: Math.round(base * 0.16), rate: 16 },
    { stage: "Closed Won", value: Math.round(base * 0.1), rate: 10 },
  ];
}

function getKPIs(period: string) {
  if (period === "7d") {
    return {
      revenue: 104600,
      leads: 122,
      conversionRate: 10,
      avgDealSize: 18500,
      revenueChange: { value: 8, isPositive: true },
      leadsChange: { value: 12, isPositive: true },
      conversionChange: { value: 2, isPositive: true },
      avgDealSizeChange: { value: 3, isPositive: false },
    };
  }

  if (period === "30d") {
    return {
      revenue: 362400,
      leads: 410,
      conversionRate: 11,
      avgDealSize: 19200,
      revenueChange: { value: 14, isPositive: true },
      leadsChange: { value: 7, isPositive: true },
      conversionChange: { value: 1, isPositive: false },
      avgDealSizeChange: { value: 5, isPositive: true },
    };
  }

  if (period === "90d") {
    return {
      revenue: 825000,
      leads: 980,
      conversionRate: 12,
      avgDealSize: 21500,
      revenueChange: { value: 18, isPositive: true },
      leadsChange: { value: 9, isPositive: true },
      conversionChange: { value: 2, isPositive: true },
      avgDealSizeChange: { value: 4, isPositive: true },
    };
  }

  return {
    revenue: 4875000,
    leads: 5280,
    conversionRate: 11,
    avgDealSize: 20800,
    revenueChange: { value: 24, isPositive: true },
    leadsChange: { value: 15, isPositive: true },
    conversionChange: { value: 1, isPositive: true },
    avgDealSizeChange: { value: 6, isPositive: true },
  };
}

const teamData = users
  .filter((user) => user.role !== "admin")
  .map((user, index) => ({
    id: user.id,
    name: user.name,
    role: user.role,
    dealsClosed: 8 + index * 4,
    revenue: 120000 + index * 45000,
    winRate: 58 + index * 5,
  }));

export default function AnalyticsPage() {
  const [period, setPeriod] = useState("30d");

  const revenueData = useMemo(() => generateRevenueData(period), [period]);
  const leadSourceData = useMemo(() => generateLeadSourceData(period), [period]);
  const conversionData = useMemo(() => generateConversionData(period), [period]);
  const kpis = useMemo(() => getKPIs(period), [period]);

  const statCards = [
    {
      label: "Total Revenue",
      value: formatCurrency(kpis.revenue),
      change: kpis.revenueChange,
      icon: <DollarSign className="h-5 w-5" />,
    },
    {
      label: "New Leads",
      value: kpis.leads,
      change: kpis.leadsChange,
      icon: <Users className="h-5 w-5" />,
    },
    {
      label: "Conversion Rate",
      value: `${kpis.conversionRate}%`,
      change: kpis.conversionChange,
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      label: "Avg Deal Size",
      value: formatCurrency(kpis.avgDealSize),
      change: kpis.avgDealSizeChange,
      icon: <Target className="h-5 w-5" />,
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
        title="Analytics"
        description="Track revenue, leads, conversions, and team performance."
        actions={
          <Select value={period} onValueChange={setPeriod}>
            <SelectTrigger className="w-[160px]">
              <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {PERIODS.map((p) => (
                <SelectItem key={p.value} value={p.value}>
                  {p.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        }
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((card, index) => (
          <m.div
            key={card.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
          >
            <StatCard label={card.label} value={card.value} change={card.change} icon={card.icon} />
          </m.div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base font-medium">
                <BarChart3 className="h-4 w-4 text-primary" />
                Revenue vs Target
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RevenueChart data={revenueData} />
            </CardContent>
          </Card>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base font-medium">
                <Users className="h-4 w-4 text-primary" />
                Leads by Source
              </CardTitle>
            </CardHeader>
            <CardContent>
              <LeadSourceChart data={leadSourceData} />
            </CardContent>
          </Card>
        </m.div>
      </div>

      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.7 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base font-medium">
              <TrendingUp className="h-4 w-4 text-primary" />
              Conversion Funnel
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ConversionChart data={conversionData} />
          </CardContent>
        </Card>
      </m.div>

      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.8 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-medium">Team Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-xl border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Sales Rep</TableHead>
                    <TableHead>Deals Closed</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead>Win Rate</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {teamData.map((member) => (
                    <TableRow key={member.id}>
                      <TableCell className="font-medium">{member.name}</TableCell>
                      <TableCell>{member.dealsClosed}</TableCell>
                      <TableCell>{formatCurrency(member.revenue)}</TableCell>
                      <TableCell>{member.winRate}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </m.div>
    </m.div>
  );
}
