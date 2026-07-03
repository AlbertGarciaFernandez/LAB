"use client";

interface TooltipPayloadEntry {
  name?: string;
  value?: number | string;
  color?: string;
}

export interface ChartTooltipProps {
  active?: boolean;
  payload?: TooltipPayloadEntry[];
  label?: string;
  valueFormatter?: (value: number | string) => string;
}

export function ChartTooltip({ active, payload, label, valueFormatter }: ChartTooltipProps) {
  if (!active || !payload || payload.length === 0) return null;

  const formatValue = (value: number | string | undefined) => {
    if (value === undefined) return "";
    return valueFormatter ? valueFormatter(value) : String(value);
  };

  return (
    <div className="rounded-lg border border-border bg-surface p-2 text-sm shadow-lg">
      {label && <p className="mb-1 font-medium text-text">{label}</p>}
      <ul className="space-y-0.5">
        {payload.map((entry: TooltipPayloadEntry, index: number) => (
          <li key={index} className="flex items-center gap-2 text-text-muted">
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ backgroundColor: entry.color ?? "currentColor" }}
            />
            <span className="flex-1">{entry.name}:</span>
            <span className="font-medium text-text">{formatValue(entry.value)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
