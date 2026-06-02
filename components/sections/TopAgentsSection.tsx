"use client";

import React from "react";
import { Link } from "@/navigation";
import { m } from "framer-motion";
import {
  LightningIcon,
  PulseIcon,
  ChartBarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  SparkleIcon,
  CaretRightIcon,
  WarningOctagonIcon,
} from "@phosphor-icons/react/dist/ssr";
import { useReducer, useEffect } from "react";
import { useTranslations } from "next-intl";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

type TypingState = { wordIndex: number; text: string; deleting: boolean };
type TypingAction =
  | { type: "START_DELETE" }
  | { type: "NEXT_WORD"; length: number }
  | { type: "UPDATE_TEXT"; value: string };

function typingReducer(state: TypingState, action: TypingAction): TypingState {
  switch (action.type) {
    case "START_DELETE":
      return { ...state, deleting: true };
    case "NEXT_WORD":
      return { wordIndex: (state.wordIndex + 1) % action.length, text: "", deleting: false };
    case "UPDATE_TEXT":
      return { ...state, text: action.value };
  }
}

const TypingEffect = ({ words }: { words: string[] }) => {
  const [state, dispatch] = useReducer(typingReducer, { wordIndex: 0, text: "", deleting: false });
  const { wordIndex, text, deleting } = state;

  useEffect(() => {
    const word = words[wordIndex];
    const typeSpeed = deleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setTimeout(() => dispatch({ type: "START_DELETE" }), 2000);
      } else if (deleting && text === "") {
        dispatch({ type: "NEXT_WORD", length: words.length });
      } else {
        dispatch({
          type: "UPDATE_TEXT",
          value: word.substring(0, text.length + (deleting ? -1 : 1)),
        });
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex, words]);

  return (
    <span className="font-mono text-hunter-green">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

type TopAgentsSectionProps = {
  useCases?: UseCasesProps;
};

const TopAgentsSection: React.FC<TopAgentsSectionProps> = ({ useCases }) => {
  const t = useTranslations("AIConsulting.TopAgents");

  // Agent Data
  const agents = [
    {
      id: "leo",
      name: "LEO",
      role: t("agents.leo.role"),
      icon: LightningIcon,
      description: t("agents.leo.description"),
      capabilities: [
        t("agents.leo.capabilities.0"),
        t("agents.leo.capabilities.1"),
        t("agents.leo.capabilities.2"),
        t("agents.leo.capabilities.3"),
        t("agents.leo.capabilities.4"),
      ],
      benefit: t("agents.leo.benefit"),
      cta: t("agents.leo.cta"),
      color: "text-hunter-orange",
      bg: "bg-hunter-orange/10",
      border: "border-hunter-orange/20",
      glow: "shadow-[0_0_50px_rgba(255,122,60,0.15)]",
      hoverGlow: "group-hover:shadow-[0_0_80px_rgba(255,122,60,0.3)]",
      btnGradient: "from-hunter-orange to-[#FF9A70]",
    },
    {
      id: "atlas",
      name: "ATLAS",
      role: t("agents.atlas.role"),
      icon: PulseIcon,
      description: t("agents.atlas.description"),
      capabilities: [
        t("agents.atlas.capabilities.0"),
        t("agents.atlas.capabilities.1"),
        t("agents.atlas.capabilities.2"),
        t("agents.atlas.capabilities.3"),
        t("agents.atlas.capabilities.4"),
      ],
      benefit: t("agents.atlas.benefit"),
      cta: t("agents.atlas.cta"),
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "border-blue-400/20",
      glow: "shadow-[0_0_50px_rgba(96,165,250,0.15)]",
      hoverGlow: "group-hover:shadow-[0_0_80px_rgba(96,165,250,0.3)]",
      btnGradient: "from-blue-400 to-blue-300",
    },
    {
      id: "orion",
      name: "ORION",
      role: t("agents.orion.role"),
      icon: ChartBarIcon,
      description: t("agents.orion.description"),
      capabilities: [
        t("agents.orion.capabilities.0"),
        t("agents.orion.capabilities.1"),
        t("agents.orion.capabilities.2"),
        t("agents.orion.capabilities.3"),
        t("agents.orion.capabilities.4"),
      ],
      benefit: t("agents.orion.benefit"),
      cta: t("agents.orion.cta"),
      color: "text-hunter-green",
      bg: "bg-hunter-green/10",
      border: "border-hunter-green/20",
      glow: "shadow-[0_0_50px_rgba(0,230,162,0.15)]",
      hoverGlow: "group-hover:shadow-[0_0_80px_rgba(0,230,162,0.3)]",
      btnGradient: "from-hunter-green to-[#33FFBC]",
    },
  ];

  const agentUseCaseMap = [
    { agentId: "leo", accent: "text-hunter-orange", border: "border-hunter-orange/25" },
    { agentId: "atlas", accent: "text-blue-400", border: "border-blue-400/25" },
    { agentId: "orion", accent: "text-hunter-green", border: "border-hunter-green/25" },
  ];

  return (
    <section className="relative mx-auto max-w-7xl cursor-default overflow-hidden px-6 py-32 lg:px-8">
      {/* Ambient Background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-hunter-green/5 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-hunter-orange/5 blur-[100px]" />

      {/* Massive Background Text */}
      <div className="pointer-events-none absolute left-0 top-10 flex w-full justify-center overflow-hidden opacity-[0.03]">
        <h2 className="whitespace-nowrap text-[12rem] font-black leading-none text-white md:text-[20rem]">
          AGENTS
        </h2>
      </div>

      {/* Header */}
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mx-auto mb-24 max-w-4xl text-center"
      >
        <m.div
          variants={itemVariants}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300 backdrop-blur-md"
        >
          <SparkleIcon size={12} className="text-hunter-green" />
          {t("badge")}
        </m.div>

        <m.h2
          variants={itemVariants}
          className="mb-8 text-4xl font-black leading-[0.9] tracking-tighter text-white md:text-7xl"
        >
          {t("title")} <br />
          <span className="bg-gradient-to-r from-hunter-green via-white to-hunter-orange bg-clip-text text-transparent">
            {t("highlight")}
          </span>
        </m.h2>

        <m.p
          variants={itemVariants}
          className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-400"
        >
          {t("description")}
        </m.p>
      </m.div>

      {/* Agents Showcase */}
      <div className="mb-32 grid gap-8 lg:grid-cols-3">
        {agents.map((agent, i) => (
          <m.div
            key={agent.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`group relative rounded-[40px] p-1 transition-all duration-500 hover:-translate-y-2`}
          >
            {/* Glow Effect */}
            <div
              className={`absolute inset-0 rounded-[40px] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100 ${agent.bg}`}
            />

            {/* Card Content */}
            <div
              className={`relative flex h-full flex-col overflow-hidden rounded-[38px] border border-white/10 bg-surface-dark/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:shadow-2xl md:p-8 ${agent.hoverGlow}`}
            >
              {/* Header: Icon & Role */}
              <div className="mb-8 flex items-start justify-between">
                <div
                  className={`h-16 w-16 rounded-2xl ${agent.bg} ${agent.border} flex items-center justify-center ${agent.color} relative transition-transform duration-300 group-hover:scale-110`}
                >
                  <div
                    className={`absolute inset-0 rounded-2xl ${agent.bg} animate-ping opacity-20`}
                  />
                  <agent.icon size={28} className="relative z-10" />
                </div>
                <div
                  className={`rounded-full border px-3 py-1 ${agent.border} ${agent.bg} backdrop-blur-md`}
                >
                  <m.span
                    className={`text-[10px] font-bold uppercase tracking-widest ${agent.color} block`}
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {agent.role}
                  </m.span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="mb-4 text-4xl font-black text-white transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 group-hover:bg-clip-text group-hover:text-transparent">
                {agent.name}
              </h3>
              <p className="mb-8 text-sm font-medium leading-relaxed text-gray-400">
                {agent.description}
              </p>

              {/* Capabilities List */}
              <div className="mb-8 flex-grow space-y-3">
                {agent.capabilities.map((cap) => (
                  <div key={cap} className="group/item flex items-center gap-3">
                    <CheckCircleIcon
                      size={16}
                      className={`shrink-0 ${agent.color} opacity-50 transition-opacity group-hover/item:opacity-100`}
                    />
                    <span className="text-sm text-gray-400 transition-colors group-hover/item:text-white">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA & Benefit */}
              <div className="mt-auto space-y-4 border-t border-white/5 pt-6">
                <p className={`text-sm font-bold ${agent.color}`}>👉 {agent.benefit}</p>
                <Link
                  href="#contact"
                  className="block translate-y-4 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <div
                    className={`w-full rounded-xl bg-gradient-to-r py-3 ${agent.btnGradient} flex items-center justify-center gap-2 text-center font-bold text-near-black shadow-lg transition-all hover:brightness-110`}
                  >
                    {agent.cta} <CaretRightIcon size={16} />
                  </div>
                </Link>
              </div>
            </div>
          </m.div>
        ))}
      </div>

      {/* Vertical agent use case transfer */}
      {useCases && (
        <div className="relative mb-10">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-12 text-center"
          >
            <m.div
              variants={itemVariants}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-hunter-orange/20 bg-hunter-orange/10 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-hunter-orange"
            >
              {useCases.badge}
            </m.div>
            <m.h3
              variants={itemVariants}
              className="text-3xl font-black tracking-tighter text-white md:text-5xl"
            >
              {useCases.title} <span className="text-hunter-orange">{useCases.highlight}</span>
            </m.h3>
            <m.p
              variants={itemVariants}
              className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-400"
            >
              Each use case transfers the agent from the showcase into a real production workflow.
            </m.p>
          </m.div>

          <div className="space-y-5">
            {useCases.items.map((uc, i) => {
              const agentMeta = agentUseCaseMap[i] ?? agentUseCaseMap[0];
              const agent = agents.find((item) => item.id === agentMeta.agentId) ?? agents[0];

              return (
                <m.div
                  key={uc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className={`group relative overflow-hidden rounded-[2rem] border ${agentMeta.border} bg-surface-dark/45 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-surface-dark/70 md:p-8`}
                >
                  <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-white/5 blur-3xl transition-opacity group-hover:opacity-80" />
                  <div className="relative z-10 grid gap-6 lg:grid-cols-[0.34fr_1fr_0.42fr] lg:items-stretch">
                    <div className="flex flex-col justify-between rounded-2xl border border-white/5 bg-near-black/60 p-5">
                      <div>
                        <div
                          className={`mb-3 font-mono text-xs font-black uppercase ${agentMeta.accent}`}
                        >
                          {agent.role}
                        </div>
                        <div className="text-4xl font-black tracking-tighter text-white">
                          {agent.name}
                        </div>
                      </div>
                      <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
                        <span>{uc.number}</span>
                        <span className="h-px flex-1 bg-white/10" />
                        <span>live flow</span>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/5 bg-near-black/35 p-5">
                      <h4 className="text-2xl font-black leading-tight tracking-tight text-white">
                        {uc.title}
                      </h4>
                      <div className="mt-5 grid gap-4 md:grid-cols-2">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                            {useCases.labels.problem}
                          </span>
                          <p className="mt-2 text-sm leading-relaxed text-gray-400">{uc.problem}</p>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                            {useCases.labels.solution}
                          </span>
                          <p className="mt-2 text-sm leading-relaxed text-gray-400">
                            {uc.solution}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between rounded-2xl border border-hunter-green/20 bg-hunter-green/10 p-5">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-hunter-green">
                        {useCases.labels.outcome}
                      </span>
                      <p className="mt-4 text-base font-semibold leading-relaxed text-white">
                        {uc.outcome}
                      </p>
                      <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-hunter-green">
                        Agent in production <ArrowRightIcon size={13} />
                      </div>
                    </div>
                  </div>
                </m.div>
              );
            })}
          </div>
        </div>
      )}

      {/* Repetitive bottleneck/advantage/ecosystem block intentionally commented out. */}
      {false && (
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative mb-32 overflow-hidden rounded-[40px] border border-white/5 bg-near-black/30 backdrop-blur-sm"
        >
          {/* Unified Background / Connector */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 via-transparent to-hunter-green/5" />
          <div className="absolute left-1/2 top-1/2 hidden h-full w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent md:block" />

          {/* Central "Transformation" Badge */}
          <div className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center md:flex">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-surface-dark shadow-xl">
              <ArrowRightIcon className="text-white/50" size={20} />
            </div>
          </div>

          <div className="relative z-10 grid md:grid-cols-2">
            {/* LEFT: THE BOTTLENECK */}
            <div className="relative overflow-hidden p-10 md:p-14">
              {/* Subtle Noise/Texture Overlay */}
              <div
                className="absolute inset-0 opacity-10 mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
              />

              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/10 bg-red-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-red-400">
                  <WarningOctagonIcon size={12} />
                  {t("bottleneck.badge")}
                </div>

                <h3 className="mb-2 text-3xl font-black text-white">{t("bottleneck.title")}</h3>
                <p className="mb-10 text-sm text-gray-500">{t("bottleneck.subtitle")}</p>

                <ul className="space-y-6">
                  {["0", "1", "2", "3"].map((key) => (
                    <li
                      key={`bottleneck-${key}`}
                      className="flex items-center gap-4 text-gray-400 transition-colors duration-300 group-hover:text-red-200/80"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-red-500/50" />
                      {t(`bottleneck.list.${key}`)}
                    </li>
                  ))}
                </ul>

                <div className="mt-12 rounded-xl border border-red-500/10 bg-red-500/5 p-4">
                  <div className="mb-1 font-mono text-[10px] uppercase tracking-widest text-red-500">
                    {t("bottleneck.resultLabel")}
                  </div>
                  <div className="font-bold tracking-tight text-white">
                    {t("bottleneck.resultValue")}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: THE AGENT ADVANTAGE */}
            <div className="relative overflow-hidden p-10 md:p-14">
              {/* Green Glow */}
              <div className="pointer-events-none absolute right-0 top-0 h-[300px] w-[300px] -translate-y-1/2 translate-x-1/2 rounded-full bg-hunter-green/5 blur-[80px]" />

              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-hunter-green/10 bg-hunter-green/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-hunter-green">
                  <SparkleIcon size={12} />
                  {t("advantage.badge")}
                </div>

                <h3 className="mb-2 text-3xl font-black text-white">{t("advantage.title")}</h3>
                <p className="mb-10 text-sm text-gray-500">{t("advantage.subtitle")}</p>

                <ul className="space-y-6">
                  {["0", "1", "2", "3"].map((key, i) => (
                    <li
                      key={`advantage-${key}`}
                      className="flex items-center gap-4 font-medium text-white"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-hunter-green/20">
                        <CheckCircleIcon size={12} className="text-hunter-green" />
                      </div>
                      {t(`advantage.list.${key}`)}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-12 overflow-hidden rounded-xl border border-hunter-green/20 bg-hunter-green/10 p-4">
                  <div className="absolute inset-0 animate-pulse bg-hunter-green/5" />
                  <div className="relative z-10">
                    <div className="mb-1 font-mono text-[10px] uppercase tracking-widest text-hunter-green">
                      {t("advantage.resultLabel")}
                    </div>
                    <div className="font-bold tracking-tight text-white">
                      {t("advantage.resultValue")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Workflow Diagram */}
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[40px] border border-white/5 bg-surface-dark/50 p-12 text-center backdrop-blur-sm lg:p-16"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-50" />
            <h3 className="relative z-10 mb-16 text-3xl font-black text-white">
              {t("diagram.title")}
            </h3>

            <div className="relative z-10 flex flex-col items-center justify-center gap-8 md:flex-row">
              {/* Live Data Stream Line (Background) */}
              <div className="absolute left-0 top-1/2 z-0 hidden h-0.5 w-full -translate-y-1/2 bg-white/5 md:block" />

              <div className="relative z-10 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 shadow-xl backdrop-blur-md">
                <div className="absolute -right-1 -top-1 h-3 w-3 animate-ping rounded-full bg-hunter-orange opacity-50" />
                <LightningIcon className="text-hunter-orange" size={24} />
                <span className="text-lg font-bold text-white">{t("diagram.capture")}</span>
              </div>

              <div className="relative z-10">
                <div className="flex gap-1">
                  <m.div
                    className="h-2 w-2 rounded-full bg-white opacity-20"
                    animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                  />
                  <m.div
                    className="h-2 w-2 rounded-full bg-white opacity-20"
                    animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                  />
                  <m.div
                    className="h-2 w-2 rounded-full bg-white opacity-20"
                    animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
                  />
                </div>
              </div>

              <div className="relative z-10 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 shadow-xl backdrop-blur-md">
                <PulseIcon className="text-blue-400" size={24} />
                <span className="text-lg font-bold text-white">{t("diagram.process")}</span>
              </div>

              <div className="relative z-10">
                <div className="flex gap-1">
                  <m.div
                    className="h-2 w-2 rounded-full bg-white opacity-20"
                    animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                  />
                  <m.div
                    className="h-2 w-2 rounded-full bg-white opacity-20"
                    animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                  />
                  <m.div
                    className="h-2 w-2 rounded-full bg-white opacity-20"
                    animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
                  />
                </div>
              </div>

              <div className="relative z-10 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 shadow-xl backdrop-blur-md">
                <div className="absolute -right-1 -top-1 h-3 w-3 animate-ping rounded-full bg-hunter-green opacity-50" />
                <ChartBarIcon className="text-hunter-green" size={24} />
                <span className="text-lg font-bold text-white">{t("diagram.optimize")}</span>
              </div>
            </div>

            <div className="mt-16 flex items-center justify-center gap-2 font-mono text-sm uppercase tracking-widest text-gray-500">
              <span>{t("diagram.worksWith")}</span>
              <TypingEffect words={["CRM", "EMAIL", "WHATSAPP", "SLACK", "INTERNAL TOOLS"]} />
            </div>
          </m.div>
        </m.div>
      )}
    </section>
  );
};

export default TopAgentsSection;
