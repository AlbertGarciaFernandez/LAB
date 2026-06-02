"use client";

import { useLocale, useTranslations } from "next-intl";
import HeroBackgroundOrnaments from "@/components/HeroBackgroundOrnaments";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { Link } from "@/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  CheckIcon,
  LightningIcon,
  CalendarXIcon,
  ChatCircleDotsIcon,
  ChartBarIcon,
  ArrowsClockwiseIcon,
  UsersIcon,
  CalendarCheckIcon,
  EnvelopeIcon,
  RobotIcon,
  TrendUpIcon,
  FunnelIcon,
} from "@phosphor-icons/react/dist/ssr";
import { m } from "framer-motion";
import Header from "@/components/layout/Header";
import { localizedUrl } from "@/utils/metadata";
import { getCommonBreadcrumbLabels, getLocaleValue } from "../_shared/localeCopy";

const path = "/aesthetic-clinic-automation-netherlands";

const aestheticSystems = [
  "WhatsApp Business API",
  "Instagram API",
  "n8n",
  "HubSpot",
  "Google Ads",
  "Meta Ads",
  "Planfy",
  "Timely",
  "Jane App",
  "ActiveCampaign",
  "Mollie",
  "Zapier",
];

const painPointIcons = [
  LightningIcon,
  CalendarXIcon,
  ChatCircleDotsIcon,
  ChartBarIcon,
  ArrowsClockwiseIcon,
  UsersIcon,
];

const solutionIcons = [
  LightningIcon,
  CalendarCheckIcon,
  EnvelopeIcon,
  ChartBarIcon,
  ArrowsClockwiseIcon,
  RobotIcon,
];

const funnelStages = [
  { label: "Ad Click", sublabel: "Instagram / Google", count: 1000, width: 100, color: "#00E6A2" },
  { label: "Lead Capture", sublabel: "WhatsApp / Form", count: 350, width: 78, color: "#00E6A2" },
  { label: "Consultation", sublabel: "Booking Confirmed", count: 120, width: 56, color: "#00E6A2" },
  { label: "Treatment", sublabel: "Completed", count: 95, width: 38, color: "#F9A8D4" },
  { label: "Retention", sublabel: "Referral Loop", count: 72, width: 24, color: "#F9A8D4" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function AestheticClinicAutomationContent() {
  const t = useTranslations("AestheticClinic");
  const locale = useLocale();
  const labels = getCommonBreadcrumbLabels(locale);
  const industryMetricsRaw = t.raw("IndustryMetrics");
  const industryMetrics = Array.isArray(industryMetricsRaw)
    ? (industryMetricsRaw as Array<{ value: string; label: string }>)
    : [];
  const previewTitle = getLocaleValue(locale, {
    en: "Revenue Funnel Preview",
    es: "Vista previa del embudo de ingresos",
    nl: "Voorbeeld van omzetfunnel",
  });
  const journeyLabel = getLocaleValue(locale, {
    en: "Client Journey",
    es: "Recorrido del cliente",
    nl: "Klantreis",
  });
  const funnelWord = getLocaleValue(locale, {
    en: "Funnel",
    es: "Embudo",
    nl: "Funnel",
  });
  const stepLabels = [
    getLocaleValue(locale, { en: "Ad", es: "Anuncio", nl: "Advertentie" }),
    getLocaleValue(locale, { en: "Lead", es: "Lead", nl: "Lead" }),
    getLocaleValue(locale, { en: "Consult", es: "Consulta", nl: "Consult" }),
    getLocaleValue(locale, { en: "Book", es: "Reserva", nl: "Boeking" }),
    getLocaleValue(locale, { en: "Retain", es: "Retención", nl: "Retentie" }),
  ];
  const resultsLabel = getLocaleValue(locale, {
    en: "Results",
    es: "Resultados",
    nl: "Resultaten",
  });
  const beforeWord = getLocaleValue(locale, { en: "Before", es: "Antes", nl: "Voor" });
  const afterWord = getLocaleValue(locale, { en: "After", es: "Despues", nl: "Na" });
  const beforeLabel = getLocaleValue(locale, {
    en: "Before Automation",
    es: "Antes de automatizar",
    nl: "Voor automatisering",
  });
  const afterLabel = getLocaleValue(locale, {
    en: "After Automation",
    es: "Despues de automatizar",
    nl: "Na automatisering",
  });
  const beforeRows = [
    {
      metric: getLocaleValue(locale, {
        en: "Lead Response Time",
        es: "Tiempo de respuesta del lead",
        nl: "Responstijd op leads",
      }),
      value: "4+ hours",
    },
    {
      metric: getLocaleValue(locale, {
        en: "Booking Conversion",
        es: "Conversion a reserva",
        nl: "Boekingsconversie",
      }),
      value: "12%",
    },
    {
      metric: getLocaleValue(locale, {
        en: "Client Retention (6mo)",
        es: "Retencion de clientes (6m)",
        nl: "Klantretentie (6m)",
      }),
      value: "38%",
    },
    {
      metric: getLocaleValue(locale, {
        en: "Revenue Attribution",
        es: "Atribucion de ingresos",
        nl: "Omzetattributie",
      }),
      value: getLocaleValue(locale, { en: "Unknown", es: "Desconocida", nl: "Onbekend" }),
    },
    {
      metric: getLocaleValue(locale, {
        en: "Follow-up Consistency",
        es: "Consistencia de seguimiento",
        nl: "Consistentie van opvolging",
      }),
      value: getLocaleValue(locale, {
        en: "Manual / Missed",
        es: "Manual / Inconsistente",
        nl: "Handmatig / Gemist",
      }),
    },
  ];
  const afterRows = [
    {
      metric: getLocaleValue(locale, {
        en: "Lead Response Time",
        es: "Tiempo de respuesta del lead",
        nl: "Responstijd op leads",
      }),
      value: "< 2 min",
    },
    {
      metric: getLocaleValue(locale, {
        en: "Booking Conversion",
        es: "Conversion a reserva",
        nl: "Boekingsconversie",
      }),
      value: "45%",
    },
    {
      metric: getLocaleValue(locale, {
        en: "Client Retention (6mo)",
        es: "Retencion de clientes (6m)",
        nl: "Klantretentie (6m)",
      }),
      value: "66%",
    },
    {
      metric: getLocaleValue(locale, {
        en: "Revenue Attribution",
        es: "Atribucion de ingresos",
        nl: "Omzetattributie",
      }),
      value: getLocaleValue(locale, {
        en: "Full Funnel",
        es: "Embudo completo",
        nl: "Volledige funnel",
      }),
    },
    {
      metric: getLocaleValue(locale, {
        en: "Follow-up Consistency",
        es: "Consistencia de seguimiento",
        nl: "Consistentie van opvolging",
      }),
      value: getLocaleValue(locale, {
        en: "100% Automated",
        es: "100% automatizado",
        nl: "100% geautomatiseerd",
      }),
    },
  ];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Aesthetic & Cosmetic Clinic Automation Netherlands",
    provider: {
      "@type": "Organization",
      name: "CodeHunter Lab",
      url: "https://www.codehunterlab.com",
    },
    areaServed: ["Netherlands", "Leiden", "Amsterdam", "Rotterdam", "Den Haag", "Utrecht"],
    description:
      "Custom CRM, lead nurturing, and booking automation systems for aesthetic, cosmetic, and dermatology clinics in the Netherlands — instant lead response, post-consult nurture sequences, full funnel attribution, and patient retention automation.",
    serviceType: "Aesthetic Clinic CRM & Automation",
    offers: {
      "@type": "Offer",
      price: "0.00",
      priceCurrency: "EUR",
      description: "Free aesthetic clinic growth audit",
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
        name: getLocaleValue(locale, {
          en: "Aesthetic Clinic Automation Netherlands",
          es: "Automatización para Clínicas Estéticas en Países Bajos",
          nl: "Automatisering voor Esthetische Klinieken in Nederland",
        }),
        item: localizedUrl(locale, path),
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden bg-near-black text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <div className="bg-noise" />
        <HeroBackgroundOrnaments />

        {/* ─── HERO ─── */}
        <section className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center md:py-36">
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
            className="mb-8 text-4xl font-black leading-[0.95] tracking-tighter md:text-7xl"
          >
            {t("Hero.title.part1")} <br />
            <span className="text-gradient-enchanted neon-glow-green">
              {t("Hero.title.highlight")}
            </span>{" "}
            {t("Hero.title.part2")}
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl"
          >
            {t.rich("Hero.description", {
              strong: (chunks) => <strong className="text-white">{chunks}</strong>,
            })}
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16 flex flex-col gap-5 sm:flex-row"
          >
            <Link
              href="#contact"
              className="rounded-full bg-hunter-green px-10 py-5 text-sm font-black uppercase tracking-widest text-black shadow-[0_0_30px_rgba(0,230,162,0.4)] transition-all hover:scale-105 hover:bg-white"
            >
              {t("Hero.cta.primary")}
            </Link>
            <Link
              href="#solutions"
              className="rounded-full border border-white/10 bg-white/5 px-10 py-5 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-xl transition-all hover:bg-white/10"
            >
              {t("Hero.cta.secondary")}
            </Link>
          </m.div>

          {/* Revenue Funnel Preview */}
          <m.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full max-w-3xl"
          >
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-sm md:p-8">
              <p className="mb-6 font-mono text-xs uppercase tracking-widest text-gray-500">
                {previewTitle}
              </p>
              <div className="flex items-center justify-between gap-2 text-xs md:text-sm">
                {stepLabels.map((step, i) => (
                  <div key={step} className="flex flex-col items-center gap-2">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full border md:h-12 md:w-12"
                      style={{
                        borderColor: i < 3 ? "#00E6A2" : "#F9A8D4",
                        backgroundColor: i < 3 ? "rgba(0,230,162,0.1)" : "rgba(249,168,212,0.1)",
                      }}
                    >
                      <span
                        className="font-mono text-xs font-bold"
                        style={{ color: i < 3 ? "#00E6A2" : "#F9A8D4" }}
                      >
                        {i + 1}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-gray-400 md:text-xs">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between px-4">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-px flex-1"
                    style={{
                      background: `linear-gradient(to right, ${i < 2 ? "#00E6A2" : "#F9A8D4"}40, ${i < 3 ? "#00E6A2" : "#F9A8D4"}20)`,
                    }}
                  />
                ))}
              </div>
            </div>
          </m.div>
        </section>

        {/* ─── METRICS ─── */}
        <m.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10 border-y border-white/5 bg-surface-dark/30 py-20"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 md:grid-cols-4 md:gap-8">
            {industryMetrics.map((metric) => (
              <m.div key={metric.label} variants={fadeInUp} className="text-center">
                <p className="mb-2 text-4xl font-black tracking-tight text-hunter-green md:text-5xl">
                  {metric.value}
                </p>
                <p className="font-mono text-xs uppercase tracking-wider text-gray-400">
                  {metric.label}
                </p>
              </m.div>
            ))}
          </div>
        </m.section>

        {/* ─── CLIENT JOURNEY FUNNEL ─── */}
        <m.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10 py-32"
        >
          <div className="mx-auto max-w-5xl px-6">
            <m.div variants={fadeInUp} className="mb-16 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-pink-300/5 px-4 py-1.5 font-mono text-xs text-pink-300">
                <FunnelIcon size={14} />
                {journeyLabel}
              </div>
              <h2 className="text-4xl font-black uppercase tracking-tighter md:text-6xl">
                {t("Hero.title.part1")} <span className="text-hunter-green">{funnelWord}</span>
              </h2>
            </m.div>

            <div className="flex flex-col items-center gap-3">
              {funnelStages.map((stage, i) => {
                const prevCount = i > 0 ? funnelStages[i - 1].count : stage.count;
                const convRate = i > 0 ? Math.round((stage.count / prevCount) * 100) : 100;
                return (
                  <m.div
                    key={stage.label}
                    variants={fadeInUp}
                    className="relative flex items-center justify-center"
                    style={{ width: `${stage.width}%`, minWidth: "200px" }}
                  >
                    <div
                      className="group relative w-full rounded-xl border px-6 py-5 text-center transition-all duration-300 hover:scale-[1.02]"
                      style={{
                        borderColor: `${stage.color}30`,
                        backgroundColor: `${stage.color}08`,
                      }}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="text-left">
                          <p className="text-sm font-black uppercase tracking-tight text-white md:text-base">
                            {stage.label}
                          </p>
                          <p className="font-mono text-[10px] uppercase tracking-wider text-gray-500">
                            {stage.sublabel}
                          </p>
                        </div>
                        <div className="text-right">
                          <p
                            className="text-xl font-black md:text-2xl"
                            style={{ color: stage.color }}
                          >
                            {stage.count}
                          </p>
                          {i > 0 && (
                            <p className="font-mono text-[10px] text-gray-500">{convRate}% conv.</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </m.div>
                );
              })}
            </div>
          </div>
        </m.section>

        {/* ─── SYSTEMS MARQUEE ─── */}
        <m.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 overflow-hidden border-y border-white/5 bg-near-black/50 py-12 backdrop-blur-sm"
        >
          <div className="animate-marquee flex space-x-12 whitespace-nowrap opacity-40 grayscale transition-all duration-700 hover:grayscale-0">
            {aestheticSystems.map((sys) => (
              <span
                key={`a-${sys}`}
                className="text-xl font-black uppercase italic tracking-tighter text-white md:text-2xl"
              >
                {sys}
              </span>
            ))}
            {aestheticSystems.map((sys) => (
              <span
                key={`b-${sys}`}
                className="text-xl font-black uppercase italic tracking-tighter text-white md:text-2xl"
              >
                {sys}
              </span>
            ))}
          </div>
        </m.section>

        {/* ─── PAIN POINTS ─── */}
        <m.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10 py-32"
        >
          <div className="mx-auto max-w-7xl px-6">
            <m.h2
              variants={fadeInUp}
              className="mb-16 text-center text-4xl font-black uppercase tracking-tighter md:text-6xl"
            >
              {t("PainPoints.title")}
            </m.h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {(
                t.raw("PainPoints.items") as Array<{ emoji: string; title: string; desc: string }>
              ).map((item, idx) => {
                const Icon = painPointIcons[idx];
                return (
                  <m.div key={item.title} variants={fadeInUp}>
                    <GlassCard
                      hoverEffect={true}
                      glowColor="green"
                      className="flex flex-col gap-4 p-8"
                    >
                      {Icon && <Icon size={28} className="text-white/60" />}
                      <h3 className="text-lg font-black uppercase tracking-tight text-white">
                        {item.title}
                      </h3>
                      <p className="flex-grow text-sm leading-relaxed text-gray-400">{item.desc}</p>
                    </GlassCard>
                  </m.div>
                );
              })}
            </div>
          </div>
        </m.section>

        {/* ─── SOLUTIONS ─── */}
        <m.section
          id="solutions"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10 border-y border-white/5 bg-surface-dark/30 py-32"
        >
          <div className="mx-auto max-w-7xl px-6">
            <m.div variants={fadeInUp} className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-black uppercase tracking-tighter md:text-6xl">
                {t("Solutions.title")}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-400">{t("Solutions.subtitle")}</p>
            </m.div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {(
                t.raw("Solutions.items") as Array<{
                  emoji: string;
                  title: string;
                  desc: string;
                  result: string;
                }>
              ).map((item, idx) => {
                const Icon = solutionIcons[idx];
                return (
                  <m.div key={item.title} variants={fadeInUp}>
                    <GlassCard
                      hoverEffect={true}
                      glowColor="green"
                      className="flex h-full flex-col gap-4 p-8"
                    >
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-hunter-green/20 bg-hunter-green/10">
                        {Icon && <Icon size={24} className="text-hunter-green" />}
                      </div>
                      <h3 className="text-xl font-black uppercase tracking-tight text-white">
                        {item.title}
                      </h3>
                      <p className="flex-grow text-sm leading-relaxed text-gray-400">{item.desc}</p>
                      <div className="mt-auto border-t border-white/5 pt-4">
                        <p className="font-mono text-xs font-bold uppercase tracking-wider text-hunter-green">
                          → {item.result}
                        </p>
                      </div>
                    </GlassCard>
                  </m.div>
                );
              })}
            </div>
          </div>
        </m.section>

        {/* ─── BEFORE / AFTER RESULTS ─── */}
        <m.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10 py-32"
        >
          <div className="mx-auto max-w-6xl px-6">
            <m.div variants={fadeInUp} className="mb-16 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-hunter-green/20 bg-hunter-green/5 px-4 py-1.5 font-mono text-xs text-hunter-green">
                <TrendUpIcon size={14} />
                {resultsLabel}
              </div>
              <h2 className="text-4xl font-black uppercase tracking-tighter md:text-6xl">
                {beforeWord} <span className="text-hunter-green">&</span> {afterWord}
              </h2>
            </m.div>

            <div className="grid gap-8 md:grid-cols-2">
              <m.div variants={fadeInUp}>
                <GlassCard hoverEffect={false} glowColor="none" className="p-8 md:p-10">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-red-500/60" />
                    <p className="font-mono text-sm font-bold uppercase tracking-widest text-red-400">
                      {beforeLabel}
                    </p>
                  </div>
                  <ul className="space-y-5">
                    {beforeRows.map((item) => (
                      <li
                        key={item.metric}
                        className="flex items-center justify-between border-b border-white/5 pb-4"
                      >
                        <span className="text-sm text-gray-400">{item.metric}</span>
                        <span className="font-mono text-sm font-bold text-red-400">
                          {item.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </m.div>

              <m.div variants={fadeInUp}>
                <GlassCard
                  hoverEffect={false}
                  glowColor="green"
                  className="border-hunter-green/20 bg-hunter-green/[0.03] p-8 md:p-10"
                >
                  <div className="mb-6 flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-hunter-green" />
                    <p className="font-mono text-sm font-bold uppercase tracking-widest text-hunter-green">
                      {afterLabel}
                    </p>
                  </div>
                  <ul className="space-y-5">
                    {afterRows.map((item) => (
                      <li
                        key={item.metric}
                        className="flex items-center justify-between border-b border-white/5 pb-4"
                      >
                        <span className="text-sm text-gray-400">{item.metric}</span>
                        <span className="font-mono text-sm font-bold text-hunter-green">
                          {item.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </m.div>
            </div>
          </div>
        </m.section>

        {/* ─── SCENARIOS ─── */}
        <m.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10 border-y border-white/5 bg-surface-dark/30 py-32"
        >
          <div className="mx-auto max-w-5xl px-6">
            <m.h2
              variants={fadeInUp}
              className="mb-16 text-center text-4xl font-black uppercase tracking-tighter md:text-6xl"
            >
              {t("Scenarios.title")}
            </m.h2>
            <div className="grid gap-6 md:grid-cols-2">
              {(
                t.raw("Scenarios.items") as Array<{ num: string; title: string; desc: string }>
              ).map((item) => (
                <m.div key={item.title} variants={fadeInUp}>
                  <GlassCard
                    className="group border-l-4 border-l-hunter-green p-8 transition-colors hover:bg-white/[0.02]"
                    hoverEffect={false}
                    glowColor="green"
                  >
                    <div className="mb-3 flex items-start justify-between">
                      <h3 className="pr-4 text-lg font-black uppercase tracking-tight text-white">
                        {item.title}
                      </h3>
                      <span className="flex-shrink-0 font-mono text-xl text-hunter-green opacity-30">
                        {item.num}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400">{item.desc}</p>
                  </GlassCard>
                </m.div>
              ))}
            </div>
          </div>
        </m.section>

        {/* ─── WHY US ─── */}
        <m.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10 py-32"
        >
          <div className="mx-auto max-w-7xl px-6">
            <m.h2
              variants={fadeInUp}
              className="mb-16 text-center text-4xl font-black uppercase tracking-tighter md:text-6xl"
            >
              {t("WhyUs.title")}
            </m.h2>
            <div className="grid gap-8 md:grid-cols-2">
              {(t.raw("WhyUs.points") as Array<{ title: string; desc: string }>).map((point) => (
                <m.div key={point.title} variants={fadeInUp}>
                  <GlassCard className="flex gap-6 p-8" hoverEffect={true} glowColor="green">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-hunter-green/30 bg-hunter-green/10">
                      <CheckIcon className="h-5 w-5 text-hunter-green" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-black uppercase tracking-tight text-white">
                        {point.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-400">{point.desc}</p>
                    </div>
                  </GlassCard>
                </m.div>
              ))}
            </div>
          </div>
        </m.section>

        {/* ─── FAQ ─── */}
        <m.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10 mx-auto max-w-4xl px-6 py-32"
        >
          <m.div variants={fadeInUp} className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-tighter md:text-6xl">
              {t("FAQ.title")}
            </h2>
            <p className="text-xl text-gray-400">{t("FAQ.subtitle")}</p>
          </m.div>
          <div className="space-y-4">
            {(t.raw("FAQ.questions") as Array<{ q: string; a: string }>).map((item) => (
              <m.div key={item.q} variants={fadeInUp}>
                <GlassCard
                  className="p-0 [&>details>summary::-webkit-details-marker]:hidden"
                  hoverEffect={true}
                  glowColor="green"
                >
                  <details className="group">
                    <summary className="flex cursor-pointer items-center gap-4 p-8 text-xl font-bold text-white transition-colors hover:text-hunter-green">
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-hunter-green/30 bg-hunter-green/10 text-sm text-hunter-green transition-transform group-open:rotate-45">
                        +
                      </span>
                      {item.q}
                    </summary>
                    <div className="border-t border-white/5 px-8 pb-8 pt-6">
                      <p className="pl-12 text-sm leading-relaxed text-gray-400">{item.a}</p>
                    </div>
                  </details>
                </GlassCard>
              </m.div>
            ))}
          </div>
        </m.section>

        {/* ─── CTA ─── */}
        <m.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 py-24"
        >
          <div className="mx-auto max-w-3xl px-6 text-center">
            <GlassCard
              className="border-hunter-green/20 bg-hunter-green/5 p-12 md:p-16"
              hoverEffect={false}
              glowColor="green"
            >
              <p className="mb-6 font-mono text-sm uppercase tracking-widest text-hunter-green">
                {t("CTA.label")}
              </p>
              <h2 className="mb-6 text-4xl font-black uppercase tracking-tighter md:text-5xl">
                {t("CTA.title")}
              </h2>
              <p className="mb-10 text-lg leading-relaxed text-gray-400">{t("CTA.desc")}</p>
              <Link
                href="#contact"
                className="inline-block rounded-full bg-hunter-green px-12 py-5 text-sm font-black uppercase tracking-widest text-black shadow-[0_0_30px_rgba(0,230,162,0.4)] transition-all hover:scale-105 hover:bg-white"
              >
                {t("CTA.button")}
              </Link>
              <p className="mt-6 font-mono text-xs text-gray-600">{t("CTA.subtext")}</p>
            </GlassCard>
          </div>
        </m.section>

        {/* ─── SEO FOOTER ─── */}
        <footer className="relative z-10 overflow-hidden border-t border-white/5 bg-black/40 py-20">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="mx-auto max-w-4xl text-sm italic leading-relaxed text-gray-600">
              {t("SEO.extendedDesc")}
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
