// components/sections/05StackSection.tsx

"use client";

import React from "react";
import { InfiniteLoop } from "../ui/InfiniteLoop";
import { TechIcons } from "../ui/TechIcons";
import { useTranslations } from "next-intl";

interface StackItem {
  id: string;
  name: string;
  icon: React.ReactNode;
}

// Consolidate into 2 logical rows for better visual balance
const rowOne: StackItem[] = [
  { id: "next", name: "Next.js", icon: <TechIcons.NextJS className="h-6 w-6 text-white" /> },
  { id: "react", name: "React", icon: <TechIcons.React className="h-6 w-6 text-[#61DAFB]" /> },
  {
    id: "ts",
    name: "TypeScript",
    icon: <TechIcons.TypeScript className="h-6 w-6 text-[#3178C6]" />,
  },
  { id: "python", name: "Python", icon: <TechIcons.Python className="h-6 w-6 text-[#3776AB]" /> },
  { id: "node", name: "Node.js", icon: <TechIcons.NodeJS className="h-6 w-6 text-[#339933]" /> },
  { id: "nest", name: "NestJS", icon: <TechIcons.NestJS className="h-6 w-6 text-[#E0234E]" /> },
  {
    id: "tailwind",
    name: "Tailwind",
    icon: <TechIcons.Tailwind className="h-6 w-6 text-[#38BDF8]" />,
  },
  { id: "framer", name: "Motion", icon: <TechIcons.Framer className="h-6 w-6 text-white" /> },
  { id: "docker", name: "Docker", icon: <TechIcons.Docker className="h-6 w-6 text-[#2496ED]" /> },
  { id: "vercel", name: "Vercel", icon: <TechIcons.Vercel className="h-6 w-6 text-white" /> },
  { id: "prisma", name: "Prisma", icon: <TechIcons.Prisma className="h-6 w-6 text-[#5A67D8]" /> },
];

const rowTwo: StackItem[] = [
  { id: "openai", name: "OpenAI", icon: <TechIcons.OpenAI className="h-6 w-6 text-white" /> },
  {
    id: "anthropic",
    name: "Anthropic",
    icon: <TechIcons.Anthropic className="h-6 w-6 text-white" />,
  },
  {
    id: "langchain",
    name: "LangChain",
    icon: <TechIcons.LangChain className="h-6 w-6 text-hunter-green" />,
  },
  { id: "n8n", name: "n8n", icon: <TechIcons.N8N className="h-6 w-6 text-[#FF6D5A]" /> },
  {
    id: "postgres",
    name: "Postgres",
    icon: <TechIcons.PostgreSQL className="h-6 w-6 text-[#4169E1]" />,
  },
  { id: "redis", name: "Redis", icon: <TechIcons.Redis className="h-6 w-6 text-[#FF4438]" /> },
  {
    id: "graphql",
    name: "GraphQL",
    icon: <TechIcons.GraphQL className="h-6 w-6 text-[#E10098]" />,
  },
  { id: "stripe", name: "Stripe", icon: <TechIcons.Stripe className="h-6 w-6 text-[#635BFF]" /> },
  { id: "git", name: "GitHub", icon: <TechIcons.Git className="h-6 w-6 text-white" /> },
  { id: "figma", name: "Figma", icon: <TechIcons.Figma className="h-6 w-6 text-[#F24E1E]" /> },
  {
    id: "agents",
    name: "Agents",
    icon: <TechIcons.AIAgents className="h-6 w-6 text-hunter-orange" />,
  },
];

const PremiumTechBadge = ({ item }: { item: StackItem }) => (
  <div className="group mx-2 flex cursor-default items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-6 py-4 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.08] hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]">
    <div className="scale-90 opacity-80 grayscale filter transition-opacity transition-transform duration-300 group-hover:scale-100 group-hover:opacity-100 group-hover:grayscale-0">
      {item.icon}
    </div>
    <span className="text-sm font-bold tracking-wide text-gray-400 transition-colors duration-300 group-hover:text-white">
      {item.name}
    </span>
  </div>
);

const StackSection: React.FC = () => {
  const t = useTranslations("Stack");

  return (
    <section
      id="stack"
      className="relative overflow-hidden border-t border-white/5 bg-near-black py-20"
    >
      {/* Ambient Glows */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,230,162,0.03),transparent_70%)]" />

      <div className="relative z-10 mx-auto mb-12 max-w-7xl px-6 text-center">
        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-hunter-green">
          {t("subtitle")}
        </p>
        <h2 className="text-3xl font-black uppercase tracking-tighter text-white opacity-90 md:text-4xl">
          {t("title")}
        </h2>
      </div>

      <div className="relative z-10 flex flex-col gap-6">
        {/* Row 1: Core Tech - Left */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-near-black to-transparent" />
          <div className="absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-near-black to-transparent" />

          <InfiniteLoop direction="left" speed={30}>
            {rowOne.map((item) => (
              <PremiumTechBadge key={item.id} item={item} />
            ))}
          </InfiniteLoop>
        </div>

        {/* Row 2: AI & Infra - Right */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-near-black to-transparent" />
          <div className="absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-near-black to-transparent" />

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
