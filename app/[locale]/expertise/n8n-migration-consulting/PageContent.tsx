"use client";

import { useLocale, useTranslations } from "next-intl";
import HeroBackgroundOrnaments from "@/components/HeroBackgroundOrnaments";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { Link } from "@/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import { m } from "framer-motion";
import Header from "@/components/layout/Header";
import {
  UsersIcon,
  EnvelopeIcon,
  ChartBarIcon,
  ShoppingCartIcon,
  ReceiptIcon,
  PlugsConnectedIcon,
  CheckIcon,
  XIcon,
  ArrowRightIcon,
  ClockIcon,
} from "@phosphor-icons/react/dist/ssr";
import { localizedUrl } from "@/utils/metadata";
import { getCommonBreadcrumbLabels, getLocaleValue } from "../../_shared/localeCopy";

const useCaseIcons = [
  UsersIcon,
  EnvelopeIcon,
  ChartBarIcon,
  ShoppingCartIcon,
  ReceiptIcon,
  PlugsConnectedIcon,
];

const metrics = [
  { value: "73%", label: "Cost reduction vs Zapier at scale" },
  { value: "10x", label: "More workflow executions for same price" },
  { value: "100%", label: "Data ownership with self-hosted n8n" },
  { value: "<2wk", label: "Average migration time" },
];

const costComparison = [
  {
    name: "Zapier",
    price: "$299",
    unit: "/mo",
    tasks: "2,500 tasks",
    width: "92%",
    color: "bg-red-400",
  },
  {
    name: "Make",
    price: "$199",
    unit: "/mo",
    tasks: "10,000 ops",
    width: "64%",
    color: "bg-yellow-400",
  },
  {
    name: "n8n",
    price: "$29",
    unit: "/mo",
    tasks: "unlimited",
    width: "28%",
    color: "bg-hunter-orange",
  },
];

const comparisonRows = [
  {
    feature: "Pricing Model",
    zapier: "Per task, expensive at scale",
    make: "Per operation, moderate",
    n8n: "Self-hosted flat fee",
    zapierGood: false,
    makeGood: false,
    n8nGood: true,
  },
  {
    feature: "Self-Hosting",
    zapier: "Not available",
    make: "Enterprise only",
    n8n: "Full self-hosted option",
    zapierGood: false,
    makeGood: false,
    n8nGood: true,
  },
  {
    feature: "Data Privacy",
    zapier: "US servers only",
    make: "EU/US choice",
    n8n: "Your infrastructure",
    zapierGood: false,
    makeGood: false,
    n8nGood: true,
  },
  {
    feature: "Custom Code",
    zapier: "Limited (Python/JS)",
    make: "Limited functions",
    n8n: "Full JS/Python nodes",
    zapierGood: false,
    makeGood: false,
    n8nGood: true,
  },
  {
    feature: "Error Handling",
    zapier: "Basic retry only",
    make: "Error handlers",
    n8n: "Advanced error workflows",
    zapierGood: false,
    makeGood: false,
    n8nGood: true,
  },
  {
    feature: "API Limits",
    zapier: "Strict per-plan limits",
    make: "Operation-based limits",
    n8n: "No artificial limits",
    zapierGood: false,
    makeGood: false,
    n8nGood: true,
  },
];

const timelineWeeks = [
  {
    week: "Week 1",
    title: "Audit & Planning",
    desc: "Inventory existing workflows, map dependencies, define migration scope and priorities.",
  },
  {
    week: "Week 2",
    title: "Workflow Mapping",
    desc: "Translate Zapier/Make logic to n8n nodes, design error handling, plan data schemas.",
  },
  {
    week: "Week 3",
    title: "Migration & Testing",
    desc: "Build n8n workflows, run parallel tests, validate outputs against source platform.",
  },
  {
    week: "Week 4",
    title: "Go-Live & Monitoring",
    desc: "Cutover traffic, set up monitoring dashboards, train team on n8n interface.",
  },
];

export default function N8nMigrationPageContent() {
  const t = useTranslations("ExpertisePages.n8nMigration");
  const locale = useLocale();
  const labels = getCommonBreadcrumbLabels(locale);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "n8n Migration Consulting",
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
      "Expert n8n migration consulting. Move from Zapier or Make to self-hosted n8n with 73% cost reduction and full data ownership.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "n8n Migration Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Zapier to n8n Migration" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Make to n8n Migration" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "n8n Self-Hosting Setup" } },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Workflow Optimization & Audit" },
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
          en: "n8n Migration Consulting",
          es: "Consultoría de Migración n8n",
          nl: "n8n Migratie Consulting",
        }),
        item: localizedUrl(locale, "/expertise/n8n-migration-consulting"),
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

        {/* Hero Section */}
        <section className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center md:py-32">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-block rounded-full border border-hunter-orange/20 bg-hunter-orange/10 px-4 py-1.5 font-mono text-xs text-hunter-orange backdrop-blur-md md:text-sm"
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
            <span className="text-gradient-fire neon-glow-orange">{t("Hero.title.highlight")}</span>
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-2xl"
          >
            {t("Hero.description")}
          </m.p>

          {/* Platform comparison animation */}
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12 flex items-center gap-6 rounded-2xl border border-white/5 bg-white/[0.02] px-8 py-6 backdrop-blur-sm"
          >
            <m.span
              animate={{ opacity: [1, 0.3, 0.1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="font-mono text-lg font-bold text-red-400 line-through md:text-2xl"
            >
              Zapier
            </m.span>
            <m.div animate={{ x: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ArrowRightIcon size={28} className="text-hunter-orange" weight="bold" />
            </m.div>
            <m.span
              animate={{ opacity: [0.1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="font-mono text-lg font-bold text-hunter-orange md:text-2xl"
            >
              n8n
            </m.span>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link
              href="#contact"
              className="rounded-full bg-hunter-orange px-10 py-5 text-sm font-black uppercase tracking-widest text-black shadow-[0_0_30px_rgba(255,122,60,0.4)] transition-all hover:scale-105 hover:bg-white"
            >
              {t("Hero.cta")}
            </Link>
          </m.div>
        </section>

        {/* Metrics Section */}
        <section className="relative z-10 border-t border-white/5 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {metrics.map((metric, idx) => (
                <m.div
                  key={metric.value}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard hoverEffect glowColor="orange" className="p-8 text-center">
                    <span className="mb-2 block font-mono text-5xl font-black text-hunter-orange md:text-6xl">
                      {metric.value}
                    </span>
                    <span className="text-sm leading-snug text-gray-400">{metric.label}</span>
                  </GlassCard>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Calculator Visual */}
        <section className="relative z-10 border-t border-white/5 bg-near-black/50 py-24">
          <div className="mx-auto max-w-4xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-3xl font-black uppercase tracking-tighter md:text-5xl">
                {t("Comparison.title")}
              </h2>
            </m.div>

            <div className="space-y-8">
              {costComparison.map((item, idx) => (
                <m.div
                  key={item.name}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="flex items-center gap-6"
                >
                  <span className="w-20 shrink-0 text-right font-mono text-sm font-bold text-gray-300 md:w-24 md:text-base">
                    {item.name}
                  </span>
                  <div className="relative flex-1">
                    <div className="h-10 overflow-hidden rounded-lg bg-white/[0.03] md:h-12">
                      <m.div
                        initial={{ width: 0 }}
                        whileInView={{ width: item.width }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + idx * 0.2, ease: "easeOut" }}
                        className={`h-full rounded-lg ${item.color} flex items-center justify-end pr-4`}
                      >
                        <span className="text-xs font-black text-black md:text-sm">
                          {item.price}
                          {item.unit}
                        </span>
                      </m.div>
                    </div>
                  </div>
                  <span className="w-28 shrink-0 text-right font-mono text-xs text-gray-500 md:w-36 md:text-sm">
                    ({item.tasks})
                  </span>
                </m.div>
              ))}
            </div>

            <m.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-8 text-center font-mono text-xs text-gray-600"
            >
              Based on typical mid-scale automation workloads (~10k operations/month)
            </m.p>
          </div>
        </section>

        {/* Features Grid */}
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
                  <GlassCard hoverEffect glowColor="orange" className="flex h-full flex-col p-10">
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

        {/* Platform Comparison Table */}
        <section className="relative z-10 border-t border-white/5 bg-near-black/50 py-24">
          <div className="mx-auto max-w-5xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-3xl font-black uppercase tracking-tighter md:text-5xl">
                Platform Breakdown
              </h2>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="overflow-x-auto"
            >
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="pb-4 pr-6 text-left text-sm font-bold uppercase tracking-wider text-gray-500">
                      Feature
                    </th>
                    <th className="pb-4 pr-6 text-left text-sm font-bold uppercase tracking-wider text-red-400">
                      Zapier
                    </th>
                    <th className="pb-4 pr-6 text-left text-sm font-bold uppercase tracking-wider text-yellow-400">
                      Make
                    </th>
                    <th className="pb-4 text-left text-sm font-bold uppercase tracking-wider text-hunter-orange">
                      n8n
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, idx) => (
                    <m.tr
                      key={row.feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      className="border-b border-white/[0.03]"
                    >
                      <td className="py-4 pr-6 text-sm font-semibold text-white">{row.feature}</td>
                      <td className="py-4 pr-6 text-sm text-gray-400">
                        <span className="flex items-center gap-2">
                          <XIcon size={14} className="shrink-0 text-red-400" weight="bold" />
                          {row.zapier}
                        </span>
                      </td>
                      <td className="py-4 pr-6 text-sm text-gray-400">
                        <span className="flex items-center gap-2">
                          <XIcon size={14} className="shrink-0 text-yellow-400" weight="bold" />
                          {row.make}
                        </span>
                      </td>
                      <td className="py-4 text-sm text-gray-200">
                        <span className="flex items-center gap-2">
                          <CheckIcon
                            size={14}
                            className="shrink-0 text-hunter-orange"
                            weight="bold"
                          />
                          {row.n8n}
                        </span>
                      </td>
                    </m.tr>
                  ))}
                </tbody>
              </table>
            </m.div>
          </div>
        </section>

        {/* Migration Timeline */}
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
                Migration Timeline
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-400">
                From legacy platform to n8n in 4 weeks
              </p>
            </m.div>

            {/* Horizontal timeline connector */}
            <div className="relative">
              <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-hunter-orange/30 to-transparent md:block" />

              <div className="grid gap-6 md:grid-cols-4">
                {timelineWeeks.map((week, idx) => (
                  <m.div
                    key={week.week}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-hunter-orange/40 bg-near-black">
                        <ClockIcon size={24} className="text-hunter-orange" weight="bold" />
                      </div>
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-hunter-orange">
                        {week.week}
                      </span>
                    </div>

                    <GlassCard hoverEffect glowColor="orange" className="p-6">
                      <h3 className="mb-2 text-lg font-bold text-white">{week.title}</h3>
                      <p className="text-sm leading-relaxed text-gray-400">{week.desc}</p>
                    </GlassCard>
                  </m.div>
                ))}
              </div>
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
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <GlassCard hoverEffect glowColor="orange" className="h-full p-8">
                      {Icon && <Icon size={32} className="mb-4 text-hunter-orange" />}
                      <h3 className="mb-2 text-lg font-bold text-white">{c.title}</h3>
                      <p className="text-sm leading-relaxed text-gray-400">{c.desc}</p>
                    </GlassCard>
                  </m.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Migration Process */}
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
                    className="flex gap-6 rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-colors hover:border-hunter-orange/20"
                  >
                    <span className="shrink-0 font-mono text-4xl font-black text-hunter-orange/30">
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

        {/* FAQ Accordion */}
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
                <m.details
                  key={item.q}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="group rounded-2xl border border-white/5 bg-white/[0.02] transition-colors open:border-hunter-orange/20"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-bold text-white transition-colors group-open:text-hunter-orange [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <ArrowRightIcon
                      size={18}
                      className="shrink-0 text-gray-500 transition-transform duration-300 group-open:rotate-90 group-open:text-hunter-orange"
                      weight="bold"
                    />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="leading-relaxed text-gray-400">{item.a}</p>
                  </div>
                </m.details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative z-10 border-t border-white/5 py-24 text-center">
          <div className="mx-auto max-w-3xl px-6">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-3xl font-black uppercase tracking-tighter md:text-5xl">
                {t("CTA.title")}
              </h2>
              <p className="mb-10 text-lg text-gray-400">{t("CTA.subtitle")}</p>
              <Link
                href="#contact"
                className="inline-block rounded-full bg-hunter-orange px-10 py-5 text-sm font-black uppercase tracking-widest text-black shadow-[0_0_30px_rgba(255,122,60,0.4)] transition-all hover:scale-105 hover:bg-white"
              >
                {t("CTA.button")}
              </Link>
            </m.div>
          </div>
        </section>

        {/* SEO Footer */}
        <footer className="relative z-10 overflow-hidden border-t border-white/5 bg-black/40 py-12">
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
