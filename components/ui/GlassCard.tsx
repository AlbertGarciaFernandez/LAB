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
    "group/card relative overflow-hidden bg-near-black border border-white/[0.05] rounded-3xl p-8 transition-all duration-500 shadow-lg [&>*]:relative [&>*]:z-10";

  const hoverClasses = hoverEffect
    ? "hover:bg-[#0B0B0B] hover:-translate-y-2"
    : "";

  let glowClasses = "";
  if (hoverEffect) {
    if (glowColor === "green") {
      glowClasses =
        "hover:shadow-[0_25px_50px_-12px_rgba(0,230,162,0.25)] hover:border-hunter-green/40";
    } else if (glowColor === "orange") {
      glowClasses =
        "hover:shadow-[0_25px_50px_-12px_rgba(255,122,60,0.2)] hover:border-hunter-orange/30";
    } else {
      glowClasses = "hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]";
    }
  }

  return (
    <div className={`${baseClasses} ${hoverClasses} ${glowClasses} ${className}`}>
      {/* Subtle inner glow sweep */}
      <div className="pointer-events-none absolute inset-0 !z-0 rounded-3xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-shadow duration-500 group-hover/card:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]" />
      
      {/* Glow gradient background */}
      {hoverEffect && glowColor === "green" && (
        <div className="absolute inset-0 !z-0 rounded-3xl bg-gradient-to-br from-hunter-green/5 to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
      )}
      {hoverEffect && glowColor === "orange" && (
        <div className="absolute inset-0 !z-0 rounded-3xl bg-gradient-to-br from-hunter-orange/5 to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
      )}

      {children}
    </div>
  );
}
