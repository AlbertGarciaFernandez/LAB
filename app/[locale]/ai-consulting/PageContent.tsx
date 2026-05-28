"use client";

import React from "react";
import { Link } from "@/navigation";
import {
  CpuIcon,
  ArrowRightIcon,
  LightningIcon,
  CheckIcon,
  CaretDownIcon,
  RobotIcon,
  ArrowsClockwiseIcon,
  ShareNetworkIcon,
  SquaresFourIcon,
  BrainIcon,
  ShieldCheckIcon,
  PlugsConnectedIcon,
} from "@phosphor-icons/react/dist/ssr";
import Header from "@/components/layout/Header";
import ROICalculator from "@/components/sections/ROICalculator";
import { m } from "framer-motion";
import AnimatedSection from "@/components/layout/AnimatedSection";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

type HeroProps = {
  badge: string;
  titlePart1: string;
  titlePart2: string;
  titleHighlight: string;
  description: string;
  cta: string;
  whyUsTitlePart1: string;
  whyUsTitleHighlight: string;
  whyUsDescription: string;
  whyUsList: string[];
  systemStatus: {
    label: string;
    value: string;
    efficiencyLabel: string;
    efficiencyValue: string;
    tooltip: string;
  };
};

type PricingItem = {
  name: string;
  price: string;
  timeline: string;
  desc: string;
  href: string;
  cta: string;
  recommended?: boolean;
  points: string[];
};

type PricingProps = {
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  recommended: string;
  items: PricingItem[];
  comparison: {
    title: string;
    desc: string;
    points: string[];
  };
};

type WhoItsForProps = {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  items: string[];
};

type ServiceItem = {
  title: string;
  desc: string;
  label: string;
  href: string;
};

type WhatWeBuildProps = {
  badge: string;
  title: string;
  highlight: string;
  services: ServiceItem[];
};

type UseCaseItem = {
  number: string;
  title: string;
  problem: string;
  solution: string;
  outcome: string;
};

type UseCasesProps = {
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  labels: {
    problem: string;
    solution: string;
    outcome: string;
  };
  items: UseCaseItem[];
};

type MigrationProps = {
  badge: string;
  title: string;
  highlight: string;
  legacy: {
    title: string;
    desc: string;
    tag: string;
  };
  optimized: {
    tag: string;
    title: string;
    desc: string;
    latencyLabel: string;
    latencyValue: string;
    costLabel: string;
    costValue: string;
  };
  action: {
    title: string;
    desc: string;
    cta1: string;
    cta2: string;
  };
};

type TechCredibilityProps = {
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  items: Array<{ title: string; desc: string }>;
};

type PageProps = {
  hero: HeroProps;
  pricing: PricingProps;
  whoItsFor: WhoItsForProps;
  whatWeBuild: WhatWeBuildProps;
  useCases: UseCasesProps;
  migration: MigrationProps;
  techCredibility: TechCredibilityProps;
  faq: {
    badge: string;
    title: string;
    titleHighlight: string;
    items: Array<{ q: string; a: string }>;
  };
  finalCta: {
    title: string;
    titleHighlight: string;
    description: string;
    primary: string;
    secondary: string;
  };
};

export default function AIConsultingPageContent({
  hero,
  pricing,
  whoItsFor,
  whatWeBuild,
  useCases,
  migration,
  techCredibility,
  faq,
  finalCta,
}: PageProps) {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen overflow-x-hidden bg-near-black">
      <Header />
      <main>
        {/* 1. Hero Section */}
        <section className="relative mx-auto max-w-7xl overflow-hidden px-6 pb-20 pt-32 lg:px-8">
          {/* Background Blobs */}
          <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-hunter-green/10 blur-[120px]" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-hunter-orange/5 blur-[120px]" />

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
            {/* LEFT COLUMN: HERO CONTENT */}
            <m.div initial="hidden" animate="visible" variants={containerVariants}>
              <m.div
                variants={itemVariants}
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-hunter-green/20 bg-hunter-green/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-hunter-green"
              >
                <div className="h-2 w-2 animate-pulse rounded-full bg-hunter-green"></div>
                {hero.badge}
              </m.div>

              <m.h1
                variants={itemVariants}
                className="mb-8 text-5xl font-black leading-[0.9] tracking-tighter text-white md:text-7xl xl:text-8xl"
              >
                {hero.titlePart1} <br /> {hero.titlePart2} <br />
                <span className="text-hunter-green">{hero.titleHighlight}</span>
              </m.h1>

              <m.p
                variants={itemVariants}
                className="mb-10 max-w-xl text-xl leading-relaxed text-gray-400"
                dangerouslySetInnerHTML={{ __html: hero.description }}
              />

              <m.div variants={itemVariants}>
                <Link
                  href="/#contact"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg px-10 py-4 font-bold text-near-black"
                >
                  <div className="absolute inset-0 h-full w-full bg-hunter-green transition-all duration-300 group-hover:bg-hunter-green-dark" />
                  <span className="relative z-10">{hero.cta}</span>
                  <ArrowRightIcon className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </m.div>
            </m.div>

            {/* RIGHT COLUMN: WHY US CONTENT */}
            <m.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative space-y-8 lg:pl-10"
            >
              {/* Decorative line/connector */}
              <div className="absolute bottom-10 left-0 top-10 hidden w-px bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />

              <h2 className="text-3xl font-black leading-tight tracking-tighter text-white md:text-5xl">
                {hero.whyUsTitlePart1} <br />
                <span className="text-hunter-orange">{hero.whyUsTitleHighlight}</span>
              </h2>
              <p className="text-lg leading-relaxed text-gray-400">{hero.whyUsDescription}</p>
              <ul className="space-y-4">
                {hero.whyUsList.map((item) => (
                  <li key={item} className="flex items-center gap-4 font-medium text-white/90">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-hunter-green/20 bg-hunter-green/10">
                      <CheckIcon className="text-hunter-green" size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Mini System Status Visual (Simplified) */}
              <div className="pt-6">
                <m.div
                  className="group relative flex cursor-default items-center justify-between overflow-hidden rounded-xl border border-white/5 bg-surface-dark/40 p-6 transition-colors hover:bg-surface-dark/60"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Scanning Beam Animation */}
                  <div className="absolute left-[-100%] top-0 h-full w-[50%] skew-x-[-20deg] animate-[scan_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-hunter-green/10 to-transparent group-hover:animate-[scan_1.5s_ease-in-out_infinite]" />

                  {/* Interactive Tooltip (Top Right) */}
                  <div className="pointer-events-none absolute right-2 top-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex items-center gap-1.5 rounded border border-hunter-green/30 bg-black/80 px-2 py-1 backdrop-blur-sm">
                      <div className="h-1.5 w-1.5 animate-ping rounded-full bg-hunter-green" />
                      <span className="whitespace-nowrap font-mono text-[9px] text-hunter-green">
                        {hero.systemStatus.tooltip}
                      </span>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="mb-1 flex items-center gap-2">
                      <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-hunter-green shadow-[0_0_8px_#00E6A2]"></div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500 transition-colors group-hover:text-gray-300">
                        {hero.systemStatus.label}
                      </span>
                    </div>
                    <div className="text-xl font-black text-white transition-all group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 group-hover:bg-clip-text group-hover:text-transparent">
                      {hero.systemStatus.value}
                    </div>
                  </div>
                  <div className="relative z-10 text-right">
                    <div className="mb-1 font-mono text-[10px] uppercase tracking-widest text-gray-500 transition-colors group-hover:text-gray-300">
                      {hero.systemStatus.efficiencyLabel}
                    </div>
                    <div className="text-xl font-black text-hunter-green transition-all group-hover:shadow-[0_0_20px_rgba(0,230,162,0.4)]">
                      {hero.systemStatus.efficiencyValue}
                    </div>
                  </div>
                </m.div>
              </div>
            </m.div>
          </div>
        </section>

        {/* 2. Who This Is For */}
        <AnimatedSection className="border-b border-white/5 px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-hunter-green/20 bg-hunter-green/10 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-hunter-green">
                  {whoItsFor.badge}
                </div>
                <h2 className="text-3xl font-black leading-tight tracking-tighter text-white md:text-5xl">
                  {whoItsFor.title} <span className="text-hunter-green">{whoItsFor.highlight}</span>
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-gray-400">
                  {whoItsFor.description}
                </p>
              </div>
              <ul className="space-y-3 lg:pt-4">
                {whoItsFor.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-hunter-green/20 bg-hunter-green/10">
                      <CheckIcon className="text-hunter-green" size={11} />
                    </div>
                    <span className="text-sm leading-relaxed text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* 3. Pricing */}
        <AnimatedSection
          id="ai-consulting-pricing"
          className="border-b border-white/5 px-6 py-20 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-hunter-orange/20 bg-hunter-orange/10 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-hunter-orange">
                  {pricing.badge}
                </div>
                <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
                  {pricing.title} <span className="text-hunter-green">{pricing.highlight}</span>
                </h2>
              </div>
              <div className="lg:pt-9">
                <p className="text-base leading-relaxed text-gray-400 md:text-lg">
                  {pricing.subtitle}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
              {pricing.items.map((item, i) => (
                <m.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className={`relative flex h-full flex-col rounded-lg border p-6 transition-colors ${
                    item.recommended
                      ? "border-hunter-green/40 bg-hunter-green/10"
                      : "border-white/5 bg-surface-dark/35 hover:border-white/10"
                  }`}
                >
                  {item.recommended ? (
                    <div className="absolute right-4 top-4 rounded bg-hunter-green px-2 py-1 text-[10px] font-black uppercase tracking-widest text-near-black">
                      {pricing.recommended}
                    </div>
                  ) : null}
                  <div className="mb-6 pr-16">
                    <h3 className="text-lg font-black text-white">{item.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-400">{item.desc}</p>
                  </div>
                  <div className="mb-5">
                    <div className="text-2xl font-black text-white">{item.price}</div>
                    <div className="mt-1 text-xs font-bold uppercase tracking-widest text-gray-500">
                      {item.timeline}
                    </div>
                  </div>
                  <ul className="mb-6 space-y-3">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm leading-relaxed text-gray-300"
                      >
                        <CheckIcon className="mt-0.5 flex-shrink-0 text-hunter-green" size={15} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={item.href}
                    className={`mt-auto inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold transition-colors ${
                      item.recommended
                        ? "bg-hunter-green text-near-black hover:bg-white"
                        : "border border-white/10 text-white hover:bg-white/5"
                    }`}
                  >
                    {item.cta}
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </m.div>
              ))}
            </div>

            <div className="mt-8 grid gap-6 rounded-lg border border-hunter-orange/20 bg-hunter-orange/10 p-6 lg:grid-cols-[0.7fr_1.3fr] lg:p-8">
              <div>
                <h3 className="text-xl font-black text-white">{pricing.comparison.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {pricing.comparison.desc}
                </p>
              </div>
              <ul className="space-y-3">
                {pricing.comparison.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm leading-relaxed text-gray-300"
                  >
                    <CheckIcon className="mt-0.5 flex-shrink-0 text-hunter-orange" size={15} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* 4. What We Build */}
        <AnimatedSection className="border-b border-white/5 px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-hunter-green/20 bg-hunter-green/10 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-hunter-green">
                {whatWeBuild.badge}
              </div>
              <h2 className="text-3xl font-black tracking-tighter text-white md:text-5xl">
                {whatWeBuild.title}{" "}
                <span className="text-hunter-green">{whatWeBuild.highlight}</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {whatWeBuild.services.map(({ title, desc, label, href }, i) => {
                const icons = [
                  RobotIcon,
                  ArrowsClockwiseIcon,
                  ShareNetworkIcon,
                  SquaresFourIcon,
                  BrainIcon,
                ];
                const Icon = icons[i];
                return (
                  <m.div
                    key={title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.07 }}
                  >
                    <Link
                      href={href}
                      className="group flex h-full flex-col gap-4 rounded-2xl border border-white/5 bg-surface-dark/40 p-6 transition-all duration-300 hover:border-hunter-green/30 hover:bg-surface-dark/70"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-hunter-green/20 bg-hunter-green/10 transition-colors group-hover:bg-hunter-green/20">
                        <Icon className="text-hunter-green" size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-1.5 text-sm font-bold tracking-tight text-white">
                          {title}
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-400">{desc}</p>
                      </div>
                      <div className="mt-auto flex items-center gap-1.5 border-t border-white/5 pt-2 text-xs font-semibold text-hunter-green">
                        <span>{label}</span>
                        <ArrowRightIcon
                          size={12}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </div>
                    </Link>
                  </m.div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* 5. ROI Calculator */}
        <ROICalculator />

        {/* 6. Use Cases */}
        <AnimatedSection className="border-t border-white/5 px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-hunter-orange/20 bg-hunter-orange/10 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-hunter-orange">
                {useCases.badge}
              </div>
              <h2 className="text-3xl font-black tracking-tighter text-white md:text-5xl">
                {useCases.title} <span className="text-hunter-orange">{useCases.highlight}</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-400">
                {useCases.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {useCases.items.map((uc, i) => (
                <m.div
                  key={uc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="flex flex-col gap-5 rounded-2xl border border-white/5 bg-surface-dark/40 p-7 transition-all duration-300 hover:border-hunter-orange/20"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-black text-hunter-orange">
                      {uc.number}
                    </span>
                    <h3 className="text-base font-bold leading-snug tracking-tight text-white">
                      {uc.title}
                    </h3>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                        {useCases.labels.problem}
                      </span>
                      <p className="mt-1 text-sm leading-relaxed text-gray-400">{uc.problem}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                        {useCases.labels.solution}
                      </span>
                      <p className="mt-1 text-sm leading-relaxed text-gray-400">{uc.solution}</p>
                    </div>
                  </div>
                  <div className="border-t border-white/5 pt-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-hunter-orange">
                      {useCases.labels.outcome}
                    </span>
                    <p className="mt-1 text-sm font-medium leading-relaxed text-white">
                      {uc.outcome}
                    </p>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* 7. Migration Journey & CTA */}
        <AnimatedSection className="relative overflow-hidden py-24">
          {/* Background Ambience */}
          <div className="absolute inset-0 bg-surface-dark/10" />
          <div className="absolute left-1/2 top-1/2 -z-10 h-[300px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-hunter-green/5 blur-[100px]" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-hunter-green/20 bg-hunter-green/10 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-hunter-green">
                {migration.badge}
              </div>
              <h2 className="text-3xl font-black tracking-tighter text-white md:text-5xl">
                {migration.title} <span className="text-hunter-green">{migration.highlight}</span>
              </h2>
            </div>

            {/* 3-STEP HORIZONTAL FLOW */}
            <div className="relative">
              {/* Connector Line (Desktop) */}
              <div className="absolute left-0 top-1/2 z-0 hidden h-px w-full -translate-y-1/2 bg-white/10 lg:block">
                <m.div
                  animate={{ width: ["0%", "100%"], opacity: [0, 1, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="h-full w-1/2 bg-gradient-to-r from-transparent via-hunter-green to-transparent"
                />
              </div>

              <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
                {/* STEP 1: LEGACY */}
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="group relative flex flex-col items-center rounded-3xl border border-white/5 bg-near-black/80 p-8 text-center backdrop-blur-md transition-colors hover:border-white/10"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 grayscale transition-all duration-500 group-hover:grayscale-0">
                    <LightningIcon className="text-orange-500" size={32} />
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-gray-400 transition-colors group-hover:text-white">
                    {migration.legacy.title}
                  </h3>
                  <p
                    className="mb-6 text-sm leading-relaxed text-gray-500"
                    dangerouslySetInnerHTML={{ __html: migration.legacy.desc }}
                  />

                  <div className="mt-auto rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-red-500">
                    {migration.legacy.tag}
                  </div>
                </m.div>

                {/* STEP 2: OPTIMIZED (Highlight) */}
                <m.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative z-20 flex flex-col items-center rounded-3xl border border-hunter-green/30 bg-near-black/90 p-10 text-center shadow-[0_0_50px_rgba(0,230,162,0.1)] lg:-mt-4 lg:mb-4 lg:scale-110"
                >
                  <div className="pointer-events-none absolute inset-0 animate-pulse rounded-3xl bg-hunter-green/5" />
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-hunter-green px-4 py-1 text-[10px] font-black uppercase tracking-widest text-near-black shadow-[0_0_20px_rgba(0,230,162,0.4)]">
                    {migration.optimized.tag}
                  </div>

                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-hunter-green shadow-[0_0_30px_rgba(0,230,162,0.3)]">
                    <CpuIcon className="text-near-black" size={40} />
                  </div>

                  <h3 className="mb-2 text-2xl font-black text-white">
                    {migration.optimized.title}
                  </h3>
                  <p
                    className="mb-6 max-w-[200px] text-sm leading-relaxed text-gray-400"
                    dangerouslySetInnerHTML={{ __html: migration.optimized.desc }}
                  />

                  <div className="mt-auto flex w-full flex-col gap-2">
                    <div className="flex w-full justify-between border-b border-hunter-green/20 pb-2 font-mono text-[10px] text-hunter-green/70">
                      <span>{migration.optimized.latencyLabel}</span>
                      <span>{migration.optimized.latencyValue}</span>
                    </div>
                    <div className="flex w-full justify-between pt-1 font-mono text-[10px] text-hunter-green/70">
                      <span>{migration.optimized.costLabel}</span>
                      <span>{migration.optimized.costValue}</span>
                    </div>
                  </div>
                </m.div>

                {/* STEP 3: ACTION */}
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="group relative flex flex-col items-center rounded-3xl border border-white/5 bg-near-black/80 p-8 text-center backdrop-blur-md transition-colors hover:border-hunter-orange/30"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-hunter-orange/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-hunter-orange/20 bg-hunter-orange/10 transition-transform duration-300 group-hover:scale-110">
                    <ArrowRightIcon className="text-hunter-orange" size={32} />
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-white">{migration.action.title}</h3>
                  <p
                    className="mb-8 text-sm leading-relaxed text-gray-400"
                    dangerouslySetInnerHTML={{ __html: migration.action.desc }}
                  />

                  <div className="relative z-10 mt-auto w-full space-y-3">
                    <Link
                      href="/#contact"
                      className="block w-full rounded-lg bg-hunter-orange py-3 text-xs font-bold uppercase tracking-widest text-near-black transition-colors duration-300 hover:bg-white"
                    >
                      {migration.action.cta1}
                    </Link>
                    <a
                      href="mailto:albert@codehunterlab.com"
                      className="block w-full rounded-lg border border-white/10 bg-transparent py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-white/5"
                    >
                      {migration.action.cta2}
                    </a>
                  </div>
                </m.div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* 8. Technical Credibility */}
        <AnimatedSection className="border-t border-white/5 px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-hunter-green/20 bg-hunter-green/10 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-hunter-green">
                {techCredibility.badge}
              </div>
              <h2 className="text-3xl font-black tracking-tighter text-white md:text-5xl">
                {techCredibility.title}{" "}
                <span className="text-hunter-green">{techCredibility.highlight}</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-400">
                {techCredibility.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {techCredibility.items.map(({ title, desc }, i) => {
                const icons = [
                  PlugsConnectedIcon,
                  CheckIcon,
                  LightningIcon,
                  ShieldCheckIcon,
                  ArrowsClockwiseIcon,
                  BrainIcon,
                ];
                const Icon = icons[i];
                return (
                  <m.div
                    key={title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex gap-4 rounded-xl border border-white/5 bg-surface-dark/30 p-6 transition-all duration-300 hover:border-hunter-green/20 hover:bg-surface-dark/50"
                  >
                    <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-hunter-green/20 bg-hunter-green/10">
                      <Icon className="text-hunter-green" size={18} />
                    </div>
                    <div>
                      <h3 className="mb-1.5 text-sm font-bold text-white">{title}</h3>
                      <p className="text-sm leading-relaxed text-gray-400">{desc}</p>
                    </div>
                  </m.div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* 9. FAQ */}
        <AnimatedSection className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-14 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-hunter-green/20 bg-hunter-green/10 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-hunter-green">
                {faq.badge}
              </div>
              <h2 className="text-3xl font-black tracking-tighter text-white md:text-5xl">
                {faq.title} <span className="text-hunter-green">{faq.titleHighlight}</span>
              </h2>
            </div>

            <div className="space-y-2">
              {faq.items.map((item, i) => (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-xl border border-white/5 bg-near-black/60 transition-colors hover:border-white/10"
                >
                  <button
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className="text-sm font-semibold leading-snug text-white md:text-base">
                      {item.q}
                    </span>
                    <CaretDownIcon
                      className={`flex-shrink-0 text-hunter-green transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                      size={18}
                    />
                  </button>
                  <m.div
                    initial={false}
                    animate={
                      openFaq === i ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed text-gray-400">{item.a}</p>
                  </m.div>
                </div>
              ))}
            </div>

            {/* Final CTA */}
            <div className="mt-16 space-y-4 text-center">
              <h2 className="text-2xl font-black tracking-tighter text-white md:text-4xl">
                {finalCta.title}{" "}
                <span className="text-hunter-green">{finalCta.titleHighlight}</span>
              </h2>
              <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-400">
                {finalCta.description}
              </p>
              <div className="flex flex-col justify-center gap-3 pt-2 sm:flex-row">
                <Link
                  href="/#contact"
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg px-8 py-3 font-bold text-near-black"
                >
                  <div className="absolute inset-0 h-full w-full bg-hunter-green transition-all duration-300 group-hover:bg-hunter-green-dark" />
                  <span className="relative z-10">{finalCta.primary}</span>
                  <ArrowRightIcon className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="mailto:albert@codehunterlab.com"
                  className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-transparent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
                >
                  {finalCta.secondary}
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </div>
  );
}
