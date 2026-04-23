import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

type LabCardProps = {
  children: ReactNode;
  className?: string;
};

export default function LabCard({ children, className }: LabCardProps) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-black/10 bg-white p-6 shadow-[0_18px_50px_rgba(17,24,39,0.06)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
