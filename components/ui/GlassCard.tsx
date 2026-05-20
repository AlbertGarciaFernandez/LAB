import React, { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: "green" | "orange" | "none";
}

export function GlassCard({
  children,
  className = "",
  hoverEffect = true,
  glowColor = "none",
}: GlassCardProps) {
  const baseClasses =
    "bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 transition-all duration-300";

  const hoverClasses = hoverEffect
    ? "hover:bg-white/10 hover:border-white/20 hover:-translate-y-1"
    : "";

  let glowClasses = "";
  if (hoverEffect) {
    if (glowColor === "green") {
      glowClasses =
        "hover:shadow-[0_8px_32px_0_rgba(0,230,162,0.15)] group-hover:border-hunter-green/30";
    } else if (glowColor === "orange") {
      glowClasses =
        "hover:shadow-[0_8px_32px_0_rgba(255,122,60,0.15)] group-hover:border-hunter-orange/30";
    } else {
      glowClasses = "hover:shadow-[0_4px_30px_rgba(0,0,0,0.1)]";
    }
  }

  return (
    <div className={`${baseClasses} ${hoverClasses} ${glowClasses} ${className}`}>{children}</div>
  );
}
