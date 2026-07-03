"use client";

import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import { ChartTooltip } from "./ChartTooltip";
import { formatCurrency } from "./RevenueChart";

export interface PipelineChartProps {
  data: { stage: string; value: number }[];
}

const COLORS = ["#00E6A2", "#FF7A3C", "#3B82F6", "#A855F7", "#EAB308", "#EF4444"];

export function PipelineChart({ data }: PipelineChartProps) {
  return (
    <div className="h-[320px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="stage"
            innerRadius={70}
            outerRadius={110}
            paddingAngle={2}
            cornerRadius={4}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke="transparent"
              />
            ))}
          </Pie>
          <Tooltip
            content={<ChartTooltip valueFormatter={(value) => formatCurrency(Number(value))} />}
          />
          <Legend
            verticalAlign="bottom"
            align="center"
            iconType="circle"
            wrapperStyle={{ color: "rgba(255,255,255,0.7)", fontSize: 12, paddingTop: 16 }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
