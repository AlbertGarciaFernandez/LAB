// components/sections/05StackSection.tsx

"use client";

import React from "react";
import { InfiniteLoop } from "../ui/InfiniteLoop";
import { TechIcons } from "../ui/TechIcons";

interface StackItem {
  id: string;
  name: string;
  icon: React.ReactNode;
}

// Consolidate into 2 logical rows for better visual balance
const rowOne: StackItem[] = [
  { id: "next", name: "Next.js", icon: <TechIcons.NextJS className="w-6 h-6 text-white" /> },
  { id: "react", name: "React", icon: <TechIcons.React className="w-6 h-6 text-[#61DAFB]" /> },
  { id: "ts", name: "TypeScript", icon: <TechIcons.TypeScript className="w-6 h-6 text-[#3178C6]" /> },
  { id: "node", name: "Node.js", icon: <TechIcons.NodeJS className="w-6 h-6 text-[#339933]" /> },
  { id: "nest", name: "NestJS", icon: <TechIcons.NestJS className="w-6 h-6 text-[#E0234E]" /> },
  { id: "tailwind", name: "Tailwind", icon: <TechIcons.Tailwind className="w-6 h-6 text-[#38BDF8]" /> },
  { id: "framer", name: "Motion", icon: <TechIcons.Framer className="w-6 h-6 text-white" /> },
];

const rowTwo: StackItem[] = [
  { id: "openai", name: "OpenAI", icon: <TechIcons.OpenAI className="w-6 h-6 text-white" /> },
  { id: "n8n", name: "n8n", icon: <TechIcons.N8N className="w-6 h-6 text-[#FF6D5A]" /> },
  { id: "postgres", name: "Postgres", icon: <TechIcons.PostgreSQL className="w-6 h-6 text-[#4169E1]" /> },
  { id: "graphql", name: "GraphQL", icon: <TechIcons.GraphQL className="w-6 h-6 text-[#E10098]" /> },
  { id: "git", name: "GitHub", icon: <TechIcons.Git className="w-6 h-6 text-white" /> },
  { id: "figma", name: "Figma", icon: <TechIcons.Figma className="w-6 h-6 text-[#F24E1E]" /> },
  { id: "agents", name: "Agents", icon: <TechIcons.AIAgents className="w-6 h-6 text-hunter-orange" /> },
];

const PremiumTechBadge = ({ item }: { item: StackItem }) => (
  <div className="group flex items-center gap-3 px-6 py-4 mx-2 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.15] hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] cursor-default">
    <div className="opacity-80 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0 scale-90 group-hover:scale-100 transition-transform">
      {item.icon}
    </div>
    <span className="text-sm font-bold text-gray-400 group-hover:text-white tracking-wide transition-colors duration-300">
      {item.name}
    </span>
  </div>
);

const StackSection: React.FC = () => {
  return (
    <section id="stack" className="py-20 bg-near-black relative overflow-hidden border-t border-white/5">
      {/* Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,230,162,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-12 text-center relative z-10">
        <p className="text-hunter-green text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
          Powering The Lab
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase opacity-90">
          Technology Stack
        </h2>
      </div>

      <div className="flex flex-col gap-6 relative z-10">
        {/* Row 1: Core Tech - Left */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-near-black to-transparent z-20" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-near-black to-transparent z-20" />

          <InfiniteLoop direction="left" speed={30}>
            {rowOne.map((item) => (
              <PremiumTechBadge key={item.id} item={item} />
            ))}
          </InfiniteLoop>
        </div>

        {/* Row 2: AI & Infra - Right */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-near-black to-transparent z-20" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-near-black to-transparent z-20" />

          <InfiniteLoop direction="right" speed={30}>
            {rowTwo.map((item) => (
              <PremiumTechBadge key={item.id} item={item} />
            ))}
          </InfiniteLoop>
        </div>
      </div>
    </section>
  );
};

export default StackSection;
