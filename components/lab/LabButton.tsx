import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";

type LabButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function LabButton({
  href,
  children,
  variant = "primary",
  className,
}: LabButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2",
        variant === "primary"
          ? "bg-black text-white hover:bg-black/85"
          : "border border-black/10 bg-white text-black hover:border-black/20 hover:bg-black/[0.03]",
        className,
      )}
    >
      {children}
    </Link>
  );
}
