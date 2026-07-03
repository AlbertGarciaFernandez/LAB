"use client";

import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ChartTooltip } from "./ChartTooltip";

export interface ConversionChartProps {
  data: { stage: string; value: number; rate: number }[];
}

export function ConversionChart({ data }: ConversionChartProps) {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 8, right: 48, bottom: 8, left: 24 }}>
          <CartesianGrid stroke="rgba(255,255,255,0.06)" horizontal={false} />
          <XAxis
            type="number"
            stroke="rgba(255,255,255,0.25)"
            tick={{ fill: "rgba(255,255,255,0.55)", fontSize: 12 }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            type="category"
            dataKey="stage"
            stroke="rgba(255,255,255,0.25)"
            tick={{ fill: "rgba(255,255,255,0.7)", fontSize: 12 }}
            tickLine={false}
            axisLine={false}
            width={90}
          />
          <Tooltip content={<ChartTooltip />} />
          <Bar dataKey="value" name="Leads" fill="#00E6A2" radius={[0, 4, 4, 0]}>
            <LabelList
              dataKey="rate"
              position="right"
              formatter={
                ((rate: number) => `${rate}%`) as unknown as React.ComponentProps<
                  typeof LabelList
                >["formatter"]
              }
              fill="rgba(255,255,255,0.85)"
              fontSize={12}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
