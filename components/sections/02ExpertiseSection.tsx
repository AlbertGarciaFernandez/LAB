// components/sections/ExpertiseSection.tsx

"use client";

import React, { useState } from "react";
import AnimatedSection from "../layout/AnimatedSection";
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from "framer-motion";

type PillarId =
  | "frontend"
  | "ecommerce"
  | "product"
  | "automation"
  | "leadership"
  | "delivery";

type Pillar = {
  id: PillarId;
  title: string;
  micro: string;
  icon: string;
  indexLabel: string;
  heading: string;
  paragraphs: string[];
  bullets: string[];
};

const pillars: Pillar[] = [
  {
    id: "frontend",
    indexLabel: "01 · Frontend Architecture & Engineering",
    title: "Frontend Architecture",
    micro: "Scalable, maintainable systems built for long-term impact.",
    icon: "{01}",
    heading:
      "Building scalable, maintainable and high-impact web applications.",
    paragraphs: [
      "We design and lead the development of scalable, maintainable, and high-impact web applications. Our work is rooted in modern frontend architecture, with hands-on expertise in React, Next.js, and TypeScript, focused on long-term scalability, performance, and developer experience.",
      "This is not just about writing code, but about making architectural decisions that reduce complexity, scale teams, and support evolving product needs.",
    ],
    bullets: [
      "Component-driven architectures (React, Next.js)",
      "Scalability & maintainability by design",
      "Code quality, testing strategies and sustainability",
      "Performance-first mindset from day one",
    ],
  },
  {
    id: "ecommerce",
    indexLabel: "02 · Ecommerce & Performance-Critical Platforms",
    title: "Ecommerce & Performance",
    micro: "Revenue-critical platforms optimised for speed and conversion.",
    icon: "{02}",
    heading:
      "Revenue-critical platforms optimised for speed, UX and conversion.",
    paragraphs: [
      "We specialise in revenue-critical ecommerce platforms, where performance, UX, and reliability directly impact conversion and business outcomes.",
      "From leading complex Salesforce Commerce Cloud (SFCC) migrations to optimising existing Shopify and custom stacks, our focus is on building fast, accessible, and conversion-friendly user journeys.",
    ],
    bullets: [
      "SFCC migration leadership and frontend architecture",
      "Core Web Vitals & Lighthouse optimisation",
      "UX, accessibility (WCAG 2.1) and SEO-minded performance",
      "A/B testing and data-informed optimisation loops",
      "Turning performance into measurable business impact",
    ],
  },
  {
    id: "product",
    indexLabel: "03 · Product Strategy & AI Integration",
    title: "Product Strategy & AI",
    micro: "Business goals translated into clear technical decisions.",
    icon: "{03}",
    heading: "Bridging product goals with technical execution.",
    paragraphs: [
      "We bridge the gap between engineering execution and product strategy. By combining technical leadership with product thinking, we translate business goals into clear roadmaps, technical decisions, and scalable solutions.",
      "We have led the product ownership and engineering of AI-powered applications, integrating OpenAI APIs to accelerate workflows, reduce noise, and improve decision-making across teams.",
    ],
    bullets: [
      "Product discovery, roadmapping and prioritisation",
      "AI integration using OpenAI APIs and custom tooling",
      "Agile / Scrum leadership and stakeholder alignment",
      "Engineering decisions grounded in real constraints",
    ],
  },
  {
    id: "automation",
    indexLabel: "04 · AI Automation & Intelligent Workflows",
    title: "AI Automation",
    micro: "Intelligent workflows that remove friction and manual work.",
    icon: "{04}",
    heading: "Automating the boring, amplifying the meaningful.",
    paragraphs: [
      "We design and implement AI-powered automation workflows that reduce manual work, speed up decision-making, and improve operational efficiency across product and engineering teams.",
      "Using tools like n8n, custom scripts and API integrations, we connect platforms, data sources and AI models to create intelligent pipelines tailored to real business needs — not over-engineered experiments.",
    ],
    bullets: [
      "Automated content and data pipelines",
      "AI-assisted QA, analysis and reporting",
      "Workflow orchestration across teams and tools",
      "Reducing operational overhead through automation",
      "Turning raw data into actionable insights",
    ],
  },
  {
    id: "leadership",
    indexLabel: "05 · Collaboration & Technical Leadership",
    title: "Technical Leadership",
    micro: "Clear ownership, alignment and senior decision-making.",
    icon: "{05}",
    heading: "Aligning product, design and engineering around impact.",
    paragraphs: [
      "We work closely with designers, product managers, and backend teams to align technical execution with product vision. Our role often sits at the intersection of architecture, delivery, and decision-making — ensuring teams move fast without sacrificing quality.",
    ],
    bullets: [
      "Cross-functional collaboration at a senior level",
      "Clear communication and ownership of decisions",
      "Reducing friction between product, design and engineering",
      "Sustainable delivery over short-term hacks",
    ],
  },
  {
    id: "delivery",
    indexLabel: "06 · Delivery, Quality & Risk Management",
    title: "Delivery & Risk",
    micro: "Predictable delivery in complex, high-impact environments.",
    icon: "{06}",
    heading: "Predictable delivery in complex, high-impact environments.",
    paragraphs: [
      "We focus on predictable, high-quality delivery in complex technical environments. By applying proven engineering practices, we reduce technical risk, avoid costly rework, and ensure that products scale reliably over time.",
      "This includes making pragmatic trade-offs, managing technical debt consciously, and building systems that are easy to evolve rather than fragile to change.",
    ],
    bullets: [
      "Clear delivery planning and scope definition",
      "Quality standards, testing strategies and reviews",
      "Conscious technical debt management",
      "Risk mitigation in performance-critical systems",
      "Long-term maintainability over quick hacks",
    ],
  },
];

const ExpertiseSection: React.FC = () => {
  const [activeId, setActiveId] = useState<PillarId>("frontend");
  const activePillar = pillars.find((p) => p.id === activeId) ?? pillars[0];

  return (
    <AnimatedSection
      id="expertise"
      className="bg-near-black px-4 py-20 text-white md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
          <span className="text-hunter-green">02.</span> Core Expertise &
          <br className="hidden md:block" /> Strategic Pillars
        </h2>
        <p className="mx-auto mb-6 max-w-3xl text-center text-xl text-gray-400">
          Hunting the balance between clean code, UX and real impact.
        </p>

        {/* Layout principal: izquierda grid, derecha detalle */}
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {/* GRID DE 6 PILLARS */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            {pillars.map((pillar, i) => {
              const isFirst = i === 0;
              const isActive = pillar.id === activeId;

              return (
                <SpotlightCard
                  key={pillar.id}
                  pillar={pillar}
                  activeId={activeId}
                  isFirst={isFirst}
                  onClick={() => setActiveId(pillar.id)}
                  index={i}
                />
              );
            })}
          </div>

          {/* ACCORDION DETALLE DEL PILLAR ACTIVO */}
          <div className="mt-4 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="rounded-2xl border border-white/5 bg-surface-dark/80 p-6 md:p-8"
              >
                <p className="text-xs font-display font-semibold uppercase tracking-[0.25em] text-hunter-green">
                  {activePillar.indexLabel}
                </p>
                <h3 className="mt-2 text-xl font-display font-semibold text-hunter-orange md:text-2xl">
                  {activePillar.heading}
                </h3>

                {activePillar.paragraphs.map((p, idx) => (
                  <p key={idx} className="mt-3 text-sm text-gray-300">
                    {p}
                  </p>
                ))}

                <ul className="mt-4 space-y-1 text-sm text-gray-300">
                  {activePillar.bullets.map((b) => (
                    <li key={b}>· {b}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

function SpotlightCard({
  pillar,
  activeId,
  isFirst,
  onClick,
  index,
}: {
  pillar: Pillar;
  activeId: PillarId;
  isFirst: boolean;
  onClick: () => void;
  index: number;
}) {
  const isActive = pillar.id === activeId;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      whileHover={{ y: -4 }}
      className={`group relative flex h-full flex-col rounded-2xl border bg-surface-dark/70 p-6 text-left transition duration-300 ${isActive ? "border-hunter-green/60" : "border-white/5"
        }`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 230, 162, 0.15) 0%,
              rgba(255, 122, 60, 0.15) 40%,
              transparent 80%
            )
          `,
        }}
      />

      {/* watermark HNTR */}
      <div className="pointer-events-none absolute right-4 top-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-hunter-green/0 transition-colors group-hover:text-hunter-green/40">
        HNTR
      </div>

      {/* badge HNTR Mode solo en la primera card */}
      {isFirst && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="pointer-events-none absolute -left-1 -top-3 rounded-full border border-hunter-green/60 bg-near-black/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-hunter-green shadow-[0_0_24px_rgba(0,230,162,0.35)]"
        >
          HNTR Mode
        </motion.div>
      )}

      <div className="relative flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-3">
        <span className="text-3xl md:text-4xl text-hunter-green font-mono mb-1 md:mb-0">
          {pillar.icon}
        </span>
        <h3 className="text-sm font-display font-bold md:text-lg leading-tight text-white/90">
          {pillar.title}
        </h3>
      </div>

      <p className="relative mt-3 text-sm text-gray-400">
        {pillar.micro}
      </p>

      <span
        className={`relative mt-4 inline-flex items-center text-[11px] font-medium transition-colors ${isActive ? "text-hunter-orange" : "text-hunter-green/80 group-hover:text-hunter-green"
          }`}
      >
        {isActive ? "Currently selected" : "Read more"}
        <span className="ml-1 translate-y-[1px] text-xs">
          {isActive ? "●" : "↗"}
        </span>
      </span>
    </motion.button>
  );
}

export default ExpertiseSection;
