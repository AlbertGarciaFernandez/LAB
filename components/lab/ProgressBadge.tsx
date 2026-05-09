import { cn } from "@/utils/cn";

type ProgressBadgeProps = {
  value: number;
  label?: string;
  className?: string;
};

export default function ProgressBadge({
  value,
  label = "complete",
  className,
}: ProgressBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-black/10 bg-[#f4f1ea] px-3 py-1 text-xs font-semibold tracking-[0.02em] text-black/65",
        className
      )}
    >
      {value}% {label}
    </span>
  );
}
