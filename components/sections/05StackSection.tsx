// components/sections/StackSection.tsx

"use client";

import React from "react";
import { InfiniteLoop } from "../ui/InfiniteLoop";
import { TechIcons } from "../ui/TechIcons";

interface StackItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const row1: StackItem[] = [
  { name: "Next.js", icon: <TechIcons.NextJS className="w-5 h-5" />, color: "text-white" },
  { name: "React", icon: <TechIcons.React className="w-5 h-5" />, color: "text-[#61DAFB]" },
  { name: "TypeScript", icon: <TechIcons.TypeScript className="w-5 h-5" />, color: "text-[#3178C6]" },
  { name: "Tailwind CSS", icon: <TechIcons.Tailwind className="w-5 h-5" />, color: "text-[#06B6D4]" },
  { name: "Framer Motion", icon: <TechIcons.Framer className="w-5 h-5" />, color: "text-white" },
  { name: "GraphQL", icon: <TechIcons.GraphQL className="w-5 h-5" />, color: "text-[#E10098]" },
];

const row2: StackItem[] = [
  { name: "Shopify", icon: <TechIcons.Shopify className="w-5 h-5" />, color: "text-[#95BF47]" },
  { name: "Salesforce CC", icon: <TechIcons.SFCC className="w-5 h-5" />, color: "text-[#00A1E0]" },
  { name: "Figma", icon: <TechIcons.Figma className="w-5 h-5" />, color: "text-[#F24E1E]" },
  { name: "Git / CI/CD", icon: <TechIcons.Git className="w-5 h-5" />, color: "text-[#F05032]" },
  { name: "Performance", icon: <span className="text-xl font-bold font-mono">⚡</span>, color: "text-yellow-400" },
  { name: "A11y", icon: <span className="text-xl font-bold font-mono">♿</span>, color: "text-blue-400" },
];

const TechPill = ({ item }: { item: StackItem }) => (
  <div className="flex items-center space-x-3 bg-surface-dark border border-white/10 px-6 py-3 rounded-full shadow-lg whitespace-nowrap group hover:border-hunter-green/50 transition-colors">
    <div className={`opacity-70 group-hover:opacity-100 transition-opacity ${item.color}`}>
      {item.icon}
    </div>
    <span className="text-gray-300 font-medium tracking-wide group-hover:text-white transition-colors">
      {item.name}
    </span>
  </div>
);

const StackSection: React.FC = () => {
  return (
    <section
      id="stack"
      className="py-24 bg-near-black text-white overflow-hidden relative"
    >
      {/* Background gradients for depth */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-near-black to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-near-black to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16 text-center relative z-20">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 text-white">
          <span className="text-hunter-orange">05.</span> The{" "}
          <span className="text-hunter-green">TECH</span> Stack
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          The modern, high-performance technology ecosystem used to build and
          scale CodeHunter Lab solutions.
        </p>
      </div>

      <div className="flex flex-col gap-10 opacity-90">
        {/* Row 1: Core Tech - Moving Left */}
        <div className="relative transform rotate-[-1deg] hover:rotate-0 transition-transform duration-500 scale-105">
          <InfiniteLoop direction="left" speed={40}>
            {row1.map((item, idx) => (
              <TechPill key={`r1-${idx}`} item={item} />
            ))}
            {/* Duplicate for visual density in the loop if needed, though InfiniteLoop component handles duplicates manually in current impl, let's just pass straightforward arrays and let the component loop them if styled right. Our component currently duplicates {children} once. So 6 items = 12 items total. */}
          </InfiniteLoop>
        </div>

        {/* Row 2: Ecosystem - Moving Right */}
        <div className="relative transform rotate-[1deg] hover:rotate-0 transition-transform duration-500 scale-105">
          <InfiniteLoop direction="right" speed={50}>
            {row2.map((item, idx) => (
              <TechPill key={`r2-${idx}`} item={item} />
            ))}
          </InfiniteLoop>
        </div>

        {/* Row 3: Mixed/Re-emphasis - Moving Left (Faster) */}
        <div className="relative transform rotate-[-0.5deg] hover:rotate-0 transition-transform duration-500 scale-105">
          <InfiniteLoop direction="left" speed={35}>
            {[...row1, ...row2].reverse().map((item, idx) => (
              <TechPill key={`r3-${idx}`} item={item} />
            ))}
          </InfiniteLoop>
        </div>
      </div>

      {/* Side fades to mask entrance/exit */}
      <div className="absolute top-0 left-0 w-20 md:w-32 h-full bg-gradient-to-r from-near-black to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-20 md:w-32 h-full bg-gradient-to-l from-near-black to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default StackSection;
