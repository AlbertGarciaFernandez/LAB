"use client";

import { useLocale, useTranslations } from "next-intl";
import HeroBackgroundOrnaments from "@/components/HeroBackgroundOrnaments";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { Link } from "@/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import { m } from "framer-motion";
import Header from "@/components/layout/Header";
import {
  PlugIcon,
  BuildingsIcon,
  ArrowsClockwiseIcon,
  DatabaseIcon,
  CloudIcon,
  GearSixIcon,
  CheckIcon,
  XIcon,
  LightningIcon,
  FlowArrowIcon,
  TreeStructureIcon,
  QuestionIcon,
} from "@phosphor-icons/react/dist/ssr";
import { localizedUrl } from "@/utils/metadata";
import { getCommonBreadcrumbLabels, getLocaleValue } from "../_shared/localeCopy";

export default function ITSystemIntegrationContent() {
  const t = useTranslations("ITSystemIntegration");
  const locale = useLocale();
  const breadcrumbLabels = getCommonBreadcrumbLabels(locale);

  const pageLabel = getLocaleValue(locale, {
    en: "IT System Integration",
    es: "Integracion de Sistemas IT",
    nl: "IT Systeemintegratie",
  });

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: breadcrumbLabels.home, item: localizedUrl(locale) },
      {
        "@type": "ListItem",
        position: 2,
        name: pageLabel,
        item: localizedUrl(locale, "/it-system-integration"),
      },
    ],
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "IT System Integration",
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
      "Connecting disparate software systems (CRM, ERP, APIs) into a unified, automated workflow.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Integration Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "API Development & Integration" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Legacy System Modernization" },
        },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "n8n Workflow Automation" } },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Data Synchronization & ETL" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Event-Driven Architecture" },
        },
      ],
    },
  };

  const withoutPoints = t.raw("WhyUs.without.points") as string[];
  const withPoints = t.raw("WhyUs.with.points") as string[];

  const metrics = [
    { value: "50+", label: "APIs integrated successfully" },
    { value: "99.9%", label: "Uptime SLA maintained" },
    { value: "€180K", label: "Average annual savings per client" },
    { value: "12", label: "Systems average per project" },
  ];

  const integrationPatterns = [
    {
      icon: <CloudIcon size={32} className="text-hunter-orange" />,
      title: "API Gateway",
      description:
        "Centralized entry point managing authentication, rate limiting, and routing across all microservices.",
      diagram: "Client → Gateway → [Auth → Route → Service]",
    },
    {
      icon: <LightningIcon size={32} className="text-hunter-orange" />,
      title: "Event-Driven",
      description: "Real-time event propagation enabling decoupled, reactive system architectures.",
      diagram: "Producer → Event Bus → [Consumer A, Consumer B]",
    },
    {
      icon: <TreeStructureIcon size={32} className="text-hunter-orange" />,
      title: "ETL Pipeline",
      description:
        "Extract, transform, and load data across heterogeneous systems with validation.",
      diagram: "Source → Transform → Validate → Target",
    },
  ];

  const architectureNodes = [
    { id: "crm", label: "CRM", x: 18, y: 25, Icon: BuildingsIcon, tone: "text-orange-300" },
    { id: "erp", label: "ERP", x: 18, y: 75, Icon: TreeStructureIcon, tone: "text-orange-300" },
    { id: "apis", label: "APIs", x: 82, y: 25, Icon: PlugIcon, tone: "text-orange-300" },
    {
      id: "databases",
      label: "Databases",
      x: 82,
      y: 75,
      Icon: DatabaseIcon,
      tone: "text-orange-300",
    },
    {
      id: "webhooks",
      label: "Webhooks",
      x: 50,
      y: 92,
      Icon: ArrowsClockwiseIcon,
      tone: "text-orange-300",
    },
  ];

  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden bg-near-black text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        <div className="bg-noise" />
        <HeroBackgroundOrnaments />

        {/* Hero Section */}
        <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-[3fr_2fr]">
            <div>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 inline-block rounded-full border border-hunter-green/20 bg-hunter-green/10 px-4 py-1.5 font-mono text-xs text-hunter-green backdrop-blur-md md:text-sm"
              >
                <ScrambleText text={t("Hero.badge")} />
              </m.div>

              <m.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8 text-4xl font-black leading-[0.9] tracking-tighter md:text-7xl"
              >
                {t("Hero.title.part1")} <br />
                <span className="text-hunter-green">{t("Hero.title.highlight")}</span>
              </m.h1>

              <m.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-12 max-w-xl text-lg leading-relaxed text-gray-300 md:text-xl"
                dangerouslySetInnerHTML={{ __html: t.raw("Hero.description") }}
              />

              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col gap-5 sm:flex-row"
              >
                <Link
                  href="#contact"
                  className="rounded-xl bg-hunter-green px-10 py-4 text-sm font-black uppercase tracking-widest text-near-black shadow-[0_0_30px_rgba(0,230,162,0.18)] transition-all hover:-translate-y-1 hover:bg-hunter-orange"
                >
                  {t("Hero.cta.primary")}
                </Link>
                <Link
                  href="#services"
                  className="rounded-xl border border-white/10 bg-white/5 px-10 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-xl transition-all hover:bg-white/10"
                >
                  {t("Hero.cta.secondary")}
                </Link>
              </m.div>
            </div>

            {/* Workflow Diagram */}
            <m.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-full"
            >
              <div className="relative flex flex-col items-center justify-between gap-5">
                <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-hunter-green/30 to-transparent md:block" />

                <m.div whileHover={{ y: -5 }} className="relative z-10 w-full md:w-1/3">
                  <GlassCard
                    className="border-white/5 p-8 text-center transition-colors hover:border-hunter-green/30"
                    hoverEffect={true}
                    glowColor="green"
                  >
                    <DatabaseIcon size={40} className="mx-auto mb-4 text-gray-400" />
                    <h3 className="mb-2 text-xl font-black uppercase tracking-tight">
                      {t("Diagram.source.title")}
                    </h3>
                    <p className="text-sm font-medium text-gray-400">{t("Diagram.source.desc")}</p>
                  </GlassCard>
                </m.div>

                <m.div
                  animate={{ scale: [1, 1.03, 1], rotate: [0, 1, -1, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative z-20 w-full md:w-1/3"
                >
                  <GlassCard
                    className="border-hunter-green/30 bg-hunter-green/5 p-8 text-center shadow-[0_0_50px_rgba(0,230,162,0.12)]"
                    hoverEffect={true}
                    glowColor="green"
                  >
                    <GearSixIcon size={40} className="mx-auto mb-4 text-hunter-green" />
                    <h3 className="mb-2 text-xl font-black uppercase tracking-tight text-hunter-green">
                      {t("Diagram.engine.title")}
                    </h3>
                    <p className="font-mono text-xs text-emerald-200/60">
                      {t("Diagram.engine.desc")}
                    </p>
                  </GlassCard>
                </m.div>

                <m.div whileHover={{ y: -5 }} className="relative z-10 w-full md:w-1/3">
                  <GlassCard
                    className="border-white/5 p-8 text-center transition-colors hover:border-hunter-green/30"
                    hoverEffect={true}
                    glowColor="green"
                  >
                    <FlowArrowIcon size={40} className="mx-auto mb-4 text-gray-400" />
                    <h3 className="mb-2 text-xl font-black uppercase tracking-tight">
                      {t("Diagram.outcome.title")}
                    </h3>
                    <p className="text-sm font-medium text-gray-400">{t("Diagram.outcome.desc")}</p>
                  </GlassCard>
                </m.div>
              </div>
            </m.div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="relative z-10 border-y border-white/5 bg-surface-dark/30 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-4">
              {metrics.map((metric, idx) => (
                <m.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard className="p-8 text-center" hoverEffect={true} glowColor="orange">
                    <div className="mb-2 text-5xl font-black text-hunter-orange md:text-6xl">
                      {metric.value}
                    </div>
                    <p className="text-sm font-medium uppercase tracking-wide text-gray-400">
                      {metric.label}
                    </p>
                  </GlassCard>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Architecture Diagram */}
        <section className="relative z-10 py-32">
          <div className="mx-auto max-w-6xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-4xl font-black uppercase tracking-tighter md:text-6xl">
                Integration Architecture
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-400">
                Centralized orchestration connecting all your business systems through a unified
                integration engine.
              </p>
            </m.div>

            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto aspect-square max-w-2xl"
            >
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF7A3C" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#FF7A3C" stopOpacity="0.1" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <circle
                  cx="50"
                  cy="50"
                  r="27"
                  fill="none"
                  stroke="#FF7A3C"
                  strokeOpacity="0.12"
                  strokeWidth="0.25"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#FF7A3C"
                  strokeOpacity="0.08"
                  strokeWidth="0.2"
                />

                {architectureNodes.map((node, idx) => (
                  <m.line
                    key={`line-${node.id}`}
                    x1="50"
                    y1="50"
                    x2={node.x}
                    y2={node.y}
                    stroke="url(#lineGradient)"
                    strokeWidth="0.35"
                    strokeDasharray="2 1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.15 + idx * 0.08 }}
                  />
                ))}

                <m.circle
                  cx="50"
                  cy="50"
                  r="12"
                  fill="rgba(255,122,60,0.1)"
                  stroke="#FF7A3C"
                  strokeWidth="0.5"
                  filter="url(#glow)"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "50px 50px" }}
                />
                <circle
                  cx="50"
                  cy="50"
                  r="8"
                  fill="rgba(255,122,60,0.2)"
                  stroke="#FF7A3C"
                  strokeWidth="0.3"
                />
                <text
                  x="50"
                  y="51"
                  textAnchor="middle"
                  fill="#FF7A3C"
                  fontSize="3"
                  fontWeight="bold"
                >
                  ENGINE
                </text>
              </svg>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <m.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="h-24 w-24 rounded-full border border-hunter-orange/30"
                />
                <m.div
                  animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.65, 0.35] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full bg-hunter-orange/10 blur-md"
                />
              </div>

              {architectureNodes.map((node, idx) => (
                <m.div
                  key={node.id}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                  <GlassCard
                    className="min-w-[92px] cursor-pointer p-3 text-center"
                    hoverEffect={true}
                    glowColor="orange"
                  >
                    <node.Icon size={22} className={`mx-auto ${node.tone}`} weight="duotone" />
                    <div className="mt-1 text-xs font-bold uppercase tracking-wide text-white">
                      {node.label}
                    </div>
                  </GlassCard>
                </m.div>
              ))}

              <div className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 rounded-full border border-hunter-orange/20 bg-hunter-orange/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-orange-200/80">
                Event Bus + Routing
              </div>
            </m.div>
          </div>
        </section>

        {/* Core Services */}
        <section id="services" className="relative z-10 py-32">
          <div className="mx-auto max-w-7xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-4xl font-black uppercase tracking-tighter md:text-6xl">
                {t("Services.title") || "Core Services"}
              </h2>
            </m.div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: <PlugIcon size={28} className="text-hunter-orange" />,
                  titleKey: "Services.api.title",
                  descKey: "Services.api.desc",
                  borderColor: "border-hunter-orange/20",
                  bgColor: "bg-hunter-orange/10",
                },
                {
                  icon: <BuildingsIcon size={28} className="text-hunter-orange" />,
                  titleKey: "Services.legacy.title",
                  descKey: "Services.legacy.desc",
                  borderColor: "border-hunter-orange/30",
                  bgColor: "bg-hunter-orange/20",
                },
                {
                  icon: <ArrowsClockwiseIcon size={28} className="text-hunter-orange" />,
                  titleKey: "Services.sync.title",
                  descKey: "Services.sync.desc",
                  borderColor: "border-hunter-orange/20",
                  bgColor: "bg-hunter-orange/10",
                },
              ].map((service, idx) => (
                <m.div
                  key={service.titleKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard
                    className="flex h-full flex-col border-white/5 p-10 hover:bg-white/[0.02]"
                    hoverEffect={true}
                    glowColor="orange"
                  >
                    <div
                      className={`mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border ${service.borderColor} ${service.bgColor}`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="mb-4 text-3xl font-black uppercase tracking-tight">
                      {t(service.titleKey)}
                    </h3>
                    <p className="flex-grow text-lg leading-relaxed text-gray-400">
                      {t(service.descKey)}
                    </p>
                  </GlassCard>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Integration Patterns */}
        <section className="relative z-10 border-y border-white/5 bg-surface-dark/30 py-32">
          <div className="mx-auto max-w-7xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-4xl font-black uppercase tracking-tighter md:text-6xl">
                Integration Patterns
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-400">
                Proven architectural patterns for robust, scalable system integrations.
              </p>
            </m.div>

            <div className="grid gap-8 md:grid-cols-3">
              {integrationPatterns.map((pattern, idx) => (
                <m.div
                  key={pattern.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard
                    className="flex h-full flex-col p-8"
                    hoverEffect={true}
                    glowColor="orange"
                  >
                    <div className="mb-6">{pattern.icon}</div>
                    <h3 className="mb-3 text-2xl font-black uppercase tracking-tight">
                      {pattern.title}
                    </h3>
                    <p className="mb-6 flex-grow text-gray-400">{pattern.description}</p>
                    <div className="rounded-lg border border-hunter-orange/20 bg-hunter-orange/5 p-3">
                      <code className="font-mono text-xs text-hunter-orange">
                        {pattern.diagram}
                      </code>
                    </div>
                  </GlassCard>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Before vs After Comparison */}
        <section className="relative z-10 py-32">
          <div className="mx-auto max-w-5xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-16 text-center text-4xl font-black uppercase tracking-tighter md:text-6xl">
                {t("WhyUs.title")}
              </h2>
            </m.div>

            <div className="grid gap-8 md:grid-cols-2">
              <m.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <GlassCard className="bg-white/[0.02] p-10" hoverEffect={false} glowColor="orange">
                  <div className="mb-8 flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-gray-500" />
                    <h3 className="text-2xl font-black uppercase tracking-tight text-white/70">
                      {t("WhyUs.without.title")}
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {withoutPoints.map((point) => (
                      <li key={point} className="flex items-start gap-4">
                        <XIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-500" />
                        <span className="text-lg text-gray-400">{point}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </m.div>

              <m.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <GlassCard
                  className="border-hunter-orange/30 bg-hunter-orange/5 p-10"
                  hoverEffect={false}
                  glowColor="orange"
                >
                  <div className="mb-8 flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-hunter-orange" />
                    <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                      {t("WhyUs.with.title")}
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {withPoints.map((point) => (
                      <li key={point} className="flex items-start gap-4">
                        <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-hunter-orange" />
                        <span className="text-lg text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </m.div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="relative z-10 border-y border-white/5 bg-surface-dark/30 py-32">
          <div className="mx-auto max-w-7xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-16 text-center text-4xl font-black uppercase tracking-tighter md:text-6xl">
                {t("Process.title")}
              </h2>
            </m.div>

            <div className="grid gap-8 md:grid-cols-2">
              {(
                t.raw("Process.steps") as Array<{ number: string; title: string; desc: string }>
              ).map((step, idx) => (
                <m.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard className="flex gap-6 p-8" hoverEffect={true} glowColor="orange">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-hunter-orange/30 bg-hunter-orange/10">
                      <span className="font-mono text-sm font-black text-hunter-orange">
                        {step.number}
                      </span>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-black uppercase tracking-tight text-white">
                        {step.title}
                      </h3>
                      <p className="leading-relaxed text-gray-400">{step.desc}</p>
                    </div>
                  </GlassCard>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative z-10 mx-auto max-w-4xl px-6 py-32">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-black uppercase tracking-tighter md:text-6xl">
              {t("FAQ.title")}
            </h2>
            <p className="text-xl text-gray-400">{t("FAQ.subtitle")}</p>
          </m.div>

          <div className="space-y-4">
            {(t.raw("FAQ.questions") as Array<{ q: string; a: string }>).map((item, idx) => (
              <m.div
                key={item.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <details className="group rounded-3xl border border-white/[0.05] bg-near-black transition-all hover:border-hunter-orange/20">
                  <summary className="flex cursor-pointer items-center gap-4 p-8 text-2xl font-bold text-white [&::-webkit-details-marker]:hidden">
                    <QuestionIcon
                      size={24}
                      className="flex-shrink-0 text-hunter-orange transition-transform group-open:rotate-45"
                    />
                    <span className="flex-grow text-left">{item.q}</span>
                    <span className="text-hunter-orange transition-transform group-open:rotate-180">
                      ↓
                    </span>
                  </summary>
                  <div className="border-t border-white/5 px-8 pb-8 pt-6">
                    <p className="text-lg leading-relaxed text-gray-400">{item.a}</p>
                  </div>
                </details>
              </m.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative z-10 py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard
                className="border-hunter-orange/20 bg-hunter-orange/5 p-16"
                hoverEffect={false}
                glowColor="orange"
              >
                <p className="mb-6 font-mono text-sm uppercase tracking-widest text-hunter-orange">
                  {t("CTA.badge")}
                </p>
                <h2 className="mb-6 text-4xl font-black uppercase tracking-tighter md:text-5xl">
                  {t("CTA.title")}
                </h2>
                <p className="mb-10 text-lg leading-relaxed text-gray-400">{t("CTA.subtitle")}</p>
                <Link
                  href="#contact"
                  className="inline-block rounded-full bg-hunter-orange px-12 py-5 text-sm font-black uppercase tracking-widest text-white shadow-[0_0_30px_rgba(255,122,60,0.4)] transition-all hover:scale-105 hover:bg-orange-500"
                >
                  {t("CTA.button")}
                </Link>
              </GlassCard>
            </m.div>
          </div>
        </section>

        <footer className="relative z-10 border-t border-white/5 bg-black/40 py-12">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="mx-auto max-w-4xl text-sm italic leading-relaxed text-gray-600">
              {t("SEO.description")}
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
