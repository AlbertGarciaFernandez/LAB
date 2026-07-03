"use client";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

import { Card, CardContent } from "@/components/ui/card";

export interface StatCardProps {
  label: string;
  value: string | number;
  change?: { value: number; isPositive: boolean };
  icon?: ReactNode;
  suffix?: string;
}

export function StatCard({ label, value, change, icon, suffix }: StatCardProps) {
  const formattedValue = typeof value === "number" ? value.toLocaleString("nl-NL") : value;

  return (
    <Card className="relative overflow-hidden transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
      {icon && <div className="absolute right-4 top-4 text-muted-foreground">{icon}</div>}
      <CardContent className="p-6">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        <div className="mt-2 flex items-baseline gap-1">
          <span className="font-mono text-3xl font-semibold tabular-nums tracking-tight">
            {formattedValue}
          </span>
          {suffix && <span className="text-sm text-muted-foreground">{suffix}</span>}
        </div>
        {change && (
          <div
            className={`mt-2 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
              change.isPositive
                ? "bg-success/10 text-success"
                : "bg-destructive/10 text-destructive"
            }`}
          >
            {change.isPositive ? (
              <ArrowUpRight className="h-3 w-3" />
            ) : (
              <ArrowDownRight className="h-3 w-3" />
            )}
            {change.value}%
          </div>
        )}
      </CardContent>
    </Card>
  );
}
