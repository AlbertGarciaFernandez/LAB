"use client";

import { useLocale, useTranslations } from "next-intl";
import HeroBackgroundOrnaments from "@/components/HeroBackgroundOrnaments";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { Link } from "@/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import { m } from "framer-motion";
import Header from "@/components/layout/Header";
import {
  FileTextIcon,
  BrainIcon,
  HeadsetIcon,
  ScalesIcon,
  FirstAidKitIcon,
  CodeIcon,
  ShieldCheckIcon,
  CloudIcon,
  DatabaseIcon,
  CheckIcon,
  XIcon,
} from "@phosphor-icons/react/dist/ssr";
import { localizedUrl } from "@/utils/metadata";
import { getCommonBreadcrumbLabels, getLocaleValue } from "../../_shared/localeCopy";
import ExpertiseHeroProof from "../_components/ExpertiseHeroProof";

const useCaseIcons = [FileTextIcon, BrainIcon, HeadsetIcon, ScalesIcon, FirstAidKitIcon, CodeIcon];

const metrics = [
  { value: "92%", label: "domain-specific accuracy achieved" },
  { value: "40%", label: "smaller models via fine-tuning vs general LLMs" },
  { value: "<200ms", label: "average inference time" },
  { value: "100%", label: "data privacy with on-premise deployment" },
];

const benchmarkData = [
  {
    name: "GPT-4 General",
    accuracy: 85,
    cost: 4,
    speed: "Slow",
    latency: "~480ms",
    monthly: "~€3,800",
    privacy: 55,
    color: "from-gray-500 to-gray-400",
    barColor: "bg-gray-400",
  },
  {
    name: "Llama 3 Fine-tuned",
    accuracy: 92,
    cost: 2,
    speed: "Fast",
    latency: "~190ms",
    monthly: "~€1,450",
    privacy: 92,
    color: "from-cyan-500 to-cyan-400",
    barColor: "bg-cyan-400",
  },
  {
    name: "Mistral Fine-tuned",
    accuracy: 90,
    cost: 1,
    speed: "Fastest",
    latency: "~160ms",
    monthly: "~€980",
    privacy: 90,
    color: "from-emerald-500 to-emerald-400",
    barColor: "bg-emerald-400",
  },
];

const deploymentOptions = [
  {
    icon: DatabaseIcon,
    name: "On-Premise",
    description: "Full control within your infrastructure",
    pros: ["Complete data privacy", "No external API calls", "Custom hardware optimization"],
    cons: ["Higher upfront cost", "Requires IT maintenance"],
  },
  {
    icon: CloudIcon,
    name: "Private Cloud",
    description: "Dedicated cloud environment",
    pros: ["Scalable resources", "Managed infrastructure", "Quick deployment"],
    cons: ["Monthly operational cost", "Vendor dependency"],
  },
  {
    icon: ShieldCheckIcon,
    name: "Hybrid",
    description: "Best of both worlds",
    pros: ["Flexible scaling", "Sensitive data on-premise", "Cost optimized"],
    cons: ["Complex architecture", "Requires orchestration"],
  },
];

function NeuralNetworkViz() {
  const nodes = [
    { x: 50, y: 20, delay: 0 },
    { x: 20, y: 50, delay: 0.2 },
    { x: 50, y: 50, delay: 0.4 },
    { x: 80, y: 50, delay: 0.6 },
    { x: 35, y: 80, delay: 0.8 },
    { x: 65, y: 80, delay: 1.0 },
  ];

  const connections = [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 2],
    [1, 4],
    [2, 3],
    [2, 4],
    [2, 5],
    [3, 5],
    [4, 5],
  ];

  return (
    <div className="relative mx-auto mt-12 h-48 w-full max-w-md md:h-64">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" fill="none">
        {connections.map(([from, to], idx) => (
          <m.line
            key={idx}
            x1={nodes[from].x}
            y1={nodes[from].y}
            x2={nodes[to].x}
            y2={nodes[to].y}
            stroke="url(#lineGradient)"
            strokeWidth="0.3"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: [0.2, 0.8, 0.2], pathLength: 1 }}
            transition={{
              opacity: { duration: 2, repeat: Infinity, delay: idx * 0.3 },
              pathLength: { duration: 1, delay: idx * 0.1 },
            }}
          />
        ))}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="100%" stopColor="#34D399" />
          </linearGradient>
        </defs>
      </svg>
      {nodes.map((node, idx) => (
        <m.div
          key={idx}
          className="absolute h-4 w-4 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 shadow-[0_0_20px_rgba(34,211,238,0.6)] md:h-5 md:w-5"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1, 1.3, 1], opacity: 1 }}
          transition={{
            scale: { duration: 2, repeat: Infinity, delay: node.delay },
            opacity: { duration: 0.5, delay: node.delay },
          }}
        />
      ))}
    </div>
  );
}

function CostIndicator({ level }: { level: number }) {
  return (
    <span className="font-mono text-sm">
      {Array.from({ length: 4 }, (_, i) => (
        <span key={i} className={i < level ? "text-cyan-400" : "text-gray-700"}>
          $
        </span>
      ))}
    </span>
  );
}

export default function CustomLLMPageContent() {
  const t = useTranslations("ExpertisePages.CustomLLMs");
  const locale = useLocale();
  const labels = getCommonBreadcrumbLabels(locale);
  const heroProof = getLocaleValue(locale, {
    en: ["Use-case fit first", "Private deployment options", "Cost + latency model"],
    es: ["Encaje de caso primero", "Opciones de despliegue privado", "Modelo coste + latencia"],
    nl: ["Eerst use-case fit", "Private deployment-opties", "Kosten + latency-model"],
  });

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom LLM Development",
    provider: {
      "@type": "Organization",
      name: "CodeHunter Lab",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 52.1601,
        longitude: 4.497,
      },
      geoRadius: "50000",
    },
    description:
      "Build private AI models for your enterprise. We fine-tune Llama and Mistral models for specific business use cases in the Netherlands.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "LLM Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "LLM Fine-Tuning (Llama/Mistral)" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Private AI Server Deployment" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Domain-Specific Model Training" },
        },
      ],
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: labels.home, item: localizedUrl(locale) },
      {
        "@type": "ListItem",
        position: 2,
        name: labels.expertise,
        item: localizedUrl(locale, "/expertise"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: getLocaleValue(locale, {
          en: "Custom LLM Development",
          es: "Desarrollo de LLMs a Medida",
          nl: "Custom LLM Ontwikkeling",
        }),
        item: localizedUrl(locale, "/expertise/custom-llm-development"),
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden bg-near-black text-white">
        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify(serviceJsonLd)}
        </script>
        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify(breadcrumbJsonLd)}
        </script>
        <div className="bg-noise" />
        <HeroBackgroundOrnaments />

        {/* Hero Section */}
        <section className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center md:py-32">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 font-mono text-xs text-cyan-400 backdrop-blur-md md:text-sm"
          >
            <ScrambleText text={t("Hero.badge")} />
          </m.div>

          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-4xl font-black leading-[0.9] tracking-tighter md:text-8xl"
          >
            {t("Hero.title.part1")} <br />
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              {t("Hero.title.highlight")}
            </span>
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-2xl"
          >
            {t("Hero.description")}
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="#contact"
              className="rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-10 py-5 text-sm font-black uppercase tracking-widest text-black shadow-[0_0_40px_rgba(34,211,238,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(34,211,238,0.6)]"
            >
              {t("Hero.cta")}
            </Link>
          </m.div>

          <ExpertiseHeroProof items={heroProof} tone="cyan" />

          <NeuralNetworkViz />
        </section>

        {/* Metrics Section */}
        <section className="relative z-10 border-t border-white/5 bg-near-black/50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {metrics.map((metric, idx) => (
                <m.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard hoverEffect={true} glowColor="green" className="!p-8 text-center">
                    <div className="mb-3 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-4xl font-black text-transparent md:text-5xl">
                      {metric.value}
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400">{metric.label}</p>
                  </GlassCard>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Model Performance Benchmark */}
        <section className="relative z-10 border-t border-white/5 py-24">
          <div className="mx-auto max-w-5xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-3xl font-black uppercase tracking-tighter md:text-5xl">
                Model Performance Benchmark
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-400">
                Fine-tuned models outperform general-purpose LLMs in domain-specific tasks
              </p>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 grid gap-4 md:grid-cols-4"
            >
              {[
                { k: "Accuracy", v: "92%", n: "Top domain fit" },
                { k: "Latency", v: "<200ms", n: "Realtime responses" },
                { k: "Model Size", v: "-40%", n: "Optimized footprint" },
                { k: "Privacy", v: "100%", n: "On-prem deployment" },
              ].map((item) => (
                <GlassCard key={item.k} hoverEffect glowColor="green" className="p-4 text-center">
                  <p className="text-xs uppercase tracking-wider text-gray-500">{item.k}</p>
                  <p className="mt-1 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-2xl font-black text-transparent">
                    {item.v}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">{item.n}</p>
                </GlassCard>
              ))}
            </m.div>

            <div className="space-y-8">
              {benchmarkData.map((model, idx) => (
                <m.div
                  key={model.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="rounded-2xl border border-white/5 bg-white/[0.02] p-6"
                >
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-4">
                    <h3 className="text-lg font-bold text-white">{model.name}</h3>
                    <div className="flex items-center gap-4">
                      <CostIndicator level={model.cost} />
                      <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-300">
                        {model.speed}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-4 flex-1 overflow-hidden rounded-full bg-white/5">
                      <m.div
                        className={`h-full rounded-full bg-gradient-to-r ${model.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${model.accuracy}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 + idx * 0.15, ease: "easeOut" }}
                      />
                    </div>
                    <span className="min-w-[4rem] text-right font-mono text-lg font-bold text-cyan-400">
                      {model.accuracy}%
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">Accuracy on domain-specific tasks</p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                      <p className="text-[10px] uppercase tracking-wider text-gray-500">Latency</p>
                      <p className="mt-1 font-mono text-sm text-cyan-300">{model.latency}</p>
                    </div>
                    <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                      <p className="text-[10px] uppercase tracking-wider text-gray-500">
                        Est. Monthly Cost
                      </p>
                      <p className="mt-1 font-mono text-sm text-emerald-300">{model.monthly}</p>
                    </div>
                    <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                      <p className="text-[10px] uppercase tracking-wider text-gray-500">
                        Privacy Control
                      </p>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                        <m.div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${model.privacy}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.45 + idx * 0.1 }}
                        />
                      </div>
                    </div>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="relative z-10 border-t border-white/5 bg-near-black/50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-3xl font-black uppercase tracking-tighter md:text-5xl">
                {t("Features.title")}
              </h2>
            </m.div>

            <div className="grid gap-8 md:grid-cols-3">
              {t.raw("Features.cards").map((card: { title: string; desc: string }, idx: number) => (
                <m.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard
                    hoverEffect={true}
                    glowColor="green"
                    className="flex h-full flex-col !p-10"
                  >
                    <h3 className="mb-4 text-2xl font-bold uppercase tracking-tight text-white">
                      {card.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-400">{card.desc}</p>
                  </GlassCard>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deployment Options */}
        <section className="relative z-10 border-t border-white/5 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-3xl font-black uppercase tracking-tighter md:text-5xl">
                Deployment Options
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-400">
                Choose the infrastructure model that fits your security and budget requirements
              </p>
            </m.div>

            <div className="grid gap-8 md:grid-cols-3">
              {deploymentOptions.map((option, idx) => {
                const Icon = option.icon;
                return (
                  <m.div
                    key={option.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                  >
                    <GlassCard
                      hoverEffect={true}
                      glowColor="green"
                      className="flex h-full flex-col !p-8"
                    >
                      <Icon size={36} className="mb-4 text-cyan-400" weight="duotone" />
                      <h3 className="mb-2 text-xl font-bold text-white">{option.name}</h3>
                      <p className="mb-6 text-sm text-gray-400">{option.description}</p>

                      <div className="mb-4">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                          Advantages
                        </p>
                        <ul className="space-y-2">
                          {option.pros.map((pro) => (
                            <li key={pro} className="flex items-start gap-2 text-sm text-gray-300">
                              <CheckIcon size={16} className="mt-0.5 shrink-0 text-emerald-400" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                          Considerations
                        </p>
                        <ul className="space-y-2">
                          {option.cons.map((con) => (
                            <li key={con} className="flex items-start gap-2 text-sm text-gray-500">
                              <XIcon size={16} className="mt-0.5 shrink-0" />
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </GlassCard>
                  </m.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="relative z-10 border-t border-white/5 bg-near-black/50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-3xl font-black uppercase tracking-tighter md:text-5xl">
                {t("UseCases.title")}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-400">{t("UseCases.subtitle")}</p>
            </m.div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {t.raw("UseCases.cases").map((c: { title: string; desc: string }, idx: number) => {
                const Icon = useCaseIcons[idx];
                return (
                  <m.div
                    key={c.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                  >
                    <GlassCard hoverEffect={true} glowColor="green" className="!p-8">
                      {Icon && <Icon size={32} className="mb-4 text-cyan-400" />}
                      <h3 className="mb-2 text-lg font-bold text-white">{c.title}</h3>
                      <p className="text-sm leading-relaxed text-gray-400">{c.desc}</p>
                    </GlassCard>
                  </m.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="relative z-10 border-t border-white/5 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-3xl font-black uppercase tracking-tighter md:text-5xl">
                {t("Process.title")}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-400">{t("Process.subtitle")}</p>
            </m.div>
            <div className="grid gap-8 md:grid-cols-2">
              {t
                .raw("Process.steps")
                .map((step: { number: string; title: string; desc: string }, idx: number) => (
                  <m.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex gap-6 rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-colors hover:border-cyan-400/20"
                  >
                    <span className="shrink-0 bg-gradient-to-b from-cyan-400 to-emerald-400 bg-clip-text font-mono text-4xl font-black text-transparent">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-white">{step.title}</h3>
                      <p className="leading-relaxed text-gray-400">{step.desc}</p>
                    </div>
                  </m.div>
                ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative z-10 border-t border-white/5 bg-near-black/50 py-24">
          <div className="mx-auto max-w-3xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-3xl font-black uppercase tracking-tighter md:text-5xl">
                {t("FAQ.title")}
              </h2>
            </m.div>
            <div className="space-y-4">
              {t.raw("FAQ.items").map((item: { q: string; a: string }, idx: number) => (
                <m.div
                  key={item.q}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <details className="group rounded-2xl border border-white/5 bg-white/[0.02] transition-colors open:border-cyan-400/20">
                    <summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-bold text-white [&::-webkit-details-marker]:hidden">
                      {item.q}
                      <span className="ml-4 shrink-0 text-cyan-400 transition-transform duration-300 group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="leading-relaxed text-gray-400">{item.a}</p>
                    </div>
                  </details>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative z-10 border-t border-white/5 py-24 text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl px-6"
          >
            <h2 className="mb-6 text-3xl font-black uppercase tracking-tighter md:text-5xl">
              {t("CTA.title")}
            </h2>
            <p className="mb-10 text-lg text-gray-400">{t("CTA.subtitle")}</p>
            <Link
              href="#contact"
              className="inline-block rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-10 py-5 text-sm font-black uppercase tracking-widest text-black shadow-[0_0_40px_rgba(34,211,238,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(34,211,238,0.6)]"
            >
              {t("CTA.button")}
            </Link>
          </m.div>
        </section>

        {/* SEO Footer */}
        <footer className="relative z-10 border-t border-white/5 bg-black/40 py-12">
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-7xl px-6 text-center"
          >
            <p className="mx-auto max-w-4xl text-sm italic leading-relaxed text-gray-600">
              {t("SEO.description")}
            </p>
          </m.div>
        </footer>
      </main>
    </>
  );
}
