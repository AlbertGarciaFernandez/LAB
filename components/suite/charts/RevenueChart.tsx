"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ChartTooltip } from "./ChartTooltip";

export interface RevenueChartProps {
  data: { month: string; revenue: number; target: number }[];
}

const currencyFormatter = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

function formatCurrency(value: number) {
  return currencyFormatter.format(value);
}

export function RevenueChart({ data }: RevenueChartProps) {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 16, bottom: 8, left: 0 }}>
          <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
          <XAxis
            dataKey="month"
            stroke="rgba(255,255,255,0.25)"
            tick={{ fill: "rgba(255,255,255,0.55)", fontSize: 12 }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="rgba(255,255,255,0.25)"
            tick={{ fill: "rgba(255,255,255,0.55)", fontSize: 12 }}
            tickFormatter={(value: number) => `€${(value / 1000).toFixed(0)}k`}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            content={<ChartTooltip valueFormatter={(value) => formatCurrency(Number(value))} />}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            name="Revenue"
            stroke="#00E6A2"
            strokeWidth={2}
            dot={{ r: 4, fill: "#00E6A2", strokeWidth: 0 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="target"
            name="Target"
            stroke="#A1A1AA"
            strokeWidth={2}
            strokeDasharray="6 4"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export { formatCurrency };
