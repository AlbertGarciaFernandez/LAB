"use client";

import { useLocale, useTranslations } from "next-intl";
import HeroBackgroundOrnaments from "@/components/HeroBackgroundOrnaments";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { Link } from "@/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  CheckIcon,
  ChartBarIcon,
  ClockIcon,
  ReceiptIcon,
  UsersIcon,
  BriefcaseIcon,
  CalendarIcon,
  EnvelopeIcon,
  LightningIcon,
  TrendUpIcon,
  PlugsConnectedIcon,
} from "@phosphor-icons/react/dist/ssr";
import { m } from "framer-motion";
import Header from "@/components/layout/Header";
import { localizedUrl } from "@/utils/metadata";
import { getCommonBreadcrumbLabels, getLocaleValue } from "../_shared/localeCopy";

const painPointIcons = [
  ClockIcon,
  ReceiptIcon,
  UsersIcon,
  ChartBarIcon,
  PlugsConnectedIcon,
  BriefcaseIcon,
];
const solutionIcons = [
  ClockIcon,
  ReceiptIcon,
  TrendUpIcon,
  ChartBarIcon,
  LightningIcon,
  BriefcaseIcon,
];

export default function ProfessionalServicesAutomationContent() {
  const t = useTranslations("ProfessionalServices");
  const locale = useLocale();
  const labels = getCommonBreadcrumbLabels(locale);
  const industryMetricsRaw = t.raw("IndustryMetrics");
  const industryMetrics = Array.isArray(industryMetricsRaw)
    ? (industryMetricsRaw as Array<{ value: string; label: string }>)
    : [];
  const dashboardTitle = getLocaleValue(locale, {
    en: "Real-Time Utilization Dashboard",
    es: "Panel de utilizacion en tiempo real",
    nl: "Realtime bezettingsdashboard",
  });
  const dashboardMetrics = [
    {
      label: getLocaleValue(locale, {
        en: "Utilization Rate",
        es: "Tasa de utilizacion",
        nl: "Bezettingsgraad",
      }),
      value: 85,
      suffix: "%",
    },
    {
      label: getLocaleValue(locale, {
        en: "Billable Hours",
        es: "Horas facturables",
        nl: "Declarabele uren",
      }),
      value: 92,
      suffix: "%",
    },
    {
      label: getLocaleValue(locale, {
        en: "Invoice Cycle",
        es: "Ciclo de facturacion",
        nl: "Facturatiecyclus",
      }),
      value: 40,
      suffix: "%↓",
    },
    {
      label: getLocaleValue(locale, {
        en: "Client Satisfaction",
        es: "Satisfaccion del cliente",
        nl: "Klanttevredenheid",
      }),
      value: 4.8,
      suffix: "★",
      max: 5,
    },
  ];
  const integrationNodes = [
    {
      name: getLocaleValue(locale, {
        en: "Time Tracking",
        es: "Control horario",
        nl: "Urenregistratie",
      }),
      icon: ClockIcon,
      position: "top",
    },
    { name: "CRM", icon: UsersIcon, position: "top-right" },
    {
      name: getLocaleValue(locale, { en: "Accounting", es: "Contabilidad", nl: "Boekhouding" }),
      icon: ReceiptIcon,
      position: "bottom-right",
    },
    {
      name: getLocaleValue(locale, {
        en: "Project Mgmt",
        es: "Gestion de proyectos",
        nl: "Projectbeheer",
      }),
      icon: BriefcaseIcon,
      position: "bottom",
    },
    {
      name: getLocaleValue(locale, { en: "Email", es: "Email", nl: "E-mail" }),
      icon: EnvelopeIcon,
      position: "bottom-left",
    },
    {
      name: getLocaleValue(locale, { en: "Calendar", es: "Calendario", nl: "Agenda" }),
      icon: CalendarIcon,
      position: "top-left",
    },
  ];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Professional Services Automation Netherlands",
    provider: {
      "@type": "Organization",
      name: "CodeHunter Lab",
      url: "https://www.codehunterlab.com",
    },
    areaServed: ["Netherlands", "Leiden", "Amsterdam", "Rotterdam", "Den Haag", "Utrecht"],
    description:
      "Custom automation and CRM integration systems for professional services in the Netherlands — accounting firms, consultancies, legal practices, and agencies. Invoice processing, deadline tracking, client onboarding automation, and document management.",
    serviceType: "Professional Services Automation & Integration",
    offers: {
      "@type": "Offer",
      price: "0.00",
      priceCurrency: "EUR",
      description: "Free professional services automation audit",
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
          en: "Professional Services Automation Netherlands",
          es: "Automatización para Servicios Profesionales en Países Bajos",
          nl: "Automatisering voor Professionele Diensten in Nederland",
        }),
        item: localizedUrl(locale, "/professional-services-automation-netherlands"),
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
            </span>
            <br />
            {t("Hero.title.part2")}
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl"
          >
            {t("Hero.description")}
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-5 sm:flex-row"
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
        </section>

        {/* Metrics Section */}
        <section className="relative z-10 py-16">
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-7xl px-6"
          >
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {industryMetrics.map((metric, idx) => (
                <m.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard hoverEffect glowColor="green" className="p-8 text-center">
                    <div className="mb-2 text-5xl font-black text-hunter-green md:text-6xl">
                      {metric.value}
                    </div>
                    <p className="text-sm text-gray-400">{metric.label}</p>
                  </GlassCard>
                </m.div>
              ))}
            </div>
          </m.div>
        </section>

        {/* Utilization Dashboard Visual */}
        <section className="relative z-10 py-24">
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl px-6"
          >
            <GlassCard hoverEffect={false} glowColor="green" className="p-8 md:p-12">
              <h3 className="mb-8 text-center text-2xl font-black uppercase tracking-tight text-white md:text-3xl">
                {dashboardTitle}
              </h3>
              <div className="space-y-6">
                {dashboardMetrics.map((metric, idx) => (
                  <m.div
                    key={metric.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-gray-300">{metric.label}</span>
                      <span className="font-mono text-lg font-black text-hunter-green">
                        {metric.value}
                        {metric.suffix}
                      </span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-white/5">
                      <m.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${(metric.value / (metric.max || 100)) * 100}%`,
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + idx * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-hunter-green/60 to-hunter-green"
                      />
                    </div>
                  </m.div>
                ))}
              </div>
            </GlassCard>
          </m.div>
        </section>

        {/* Pain Points */}
        <section className="relative z-10 py-32">
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-7xl px-6"
          >
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
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
                  <m.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <GlassCard
                      hoverEffect
                      glowColor="green"
                      className="flex h-full flex-col gap-4 p-8"
                    >
                      {Icon && <Icon size={28} className="text-hunter-green" />}
                      <h3 className="text-lg font-black uppercase tracking-tight text-white">
                        {item.title}
                      </h3>
                      <p className="flex-grow text-sm leading-relaxed text-gray-400">{item.desc}</p>
                    </GlassCard>
                  </m.div>
                );
              })}
            </div>
          </m.div>
        </section>

        {/* Solutions */}
        <section
          id="solutions"
          className="relative z-10 border-y border-white/5 bg-surface-dark/30 py-32"
        >
          <div className="mx-auto max-w-7xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
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
                  <m.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <GlassCard
                      hoverEffect
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
        </section>

        {/* Integration Map */}
        <section className="relative z-10 py-32">
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-5xl px-6"
          >
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center text-4xl font-black uppercase tracking-tighter md:text-6xl"
            >
              Complete Integration Ecosystem
            </m.h2>
            <div className="relative mx-auto aspect-square max-w-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <GlassCard
                  hoverEffect
                  glowColor="green"
                  className="flex h-32 w-32 items-center justify-center rounded-full p-4 text-center md:h-40 md:w-40"
                >
                  <div>
                    <BriefcaseIcon size={32} className="mx-auto mb-2 text-hunter-green" />
                    <span className="text-xs font-black uppercase text-white">Your Firm</span>
                  </div>
                </GlassCard>
              </div>
              {integrationNodes.map((node, idx) => {
                const Icon = node.icon;
                const angle = (idx * 60 - 90) * (Math.PI / 180);
                const radius = 42;
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);
                return (
                  <m.div
                    key={node.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="absolute"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="absolute inset-0 -z-10 h-px w-px origin-center bg-gradient-to-r from-hunter-green/40 to-transparent" />
                    <GlassCard
                      hoverEffect
                      glowColor="green"
                      className="flex h-20 w-20 flex-col items-center justify-center gap-1 p-2 text-center md:h-24 md:w-24"
                    >
                      {Icon && <Icon size={20} className="text-hunter-green" />}
                      <span className="text-[10px] font-bold uppercase text-gray-300">
                        {node.name}
                      </span>
                    </GlassCard>
                  </m.div>
                );
              })}
              <svg className="absolute inset-0 -z-10 h-full w-full" viewBox="0 0 100 100">
                {integrationNodes.map((_, idx) => {
                  const angle = (idx * 60 - 90) * (Math.PI / 180);
                  const radius = 42;
                  const x = 50 + radius * Math.cos(angle);
                  const y = 50 + radius * Math.sin(angle);
                  return (
                    <line
                      key={idx}
                      x1="50"
                      y1="50"
                      x2={x}
                      y2={y}
                      stroke="rgba(0, 230, 162, 0.2)"
                      strokeWidth="0.5"
                      strokeDasharray="2 2"
                    />
                  );
                })}
              </svg>
            </div>
          </m.div>
        </section>

        {/* Scenarios */}
        <section className="relative z-10 py-32">
          <div className="mx-auto max-w-5xl px-6">
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center text-4xl font-black uppercase tracking-tighter md:text-6xl"
            >
              {t("Scenarios.title")}
            </m.h2>
            <div className="grid gap-6 md:grid-cols-2">
              {(
                t.raw("Scenarios.items") as Array<{ num: string; title: string; desc: string }>
              ).map((item, idx) => (
                <m.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard
                    className="group h-full border-l-4 border-l-hunter-green p-8 transition-colors hover:bg-white/[0.02]"
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
        </section>

        {/* Why Us */}
        <section className="relative z-10 border-y border-white/5 bg-surface-dark/30 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center text-4xl font-black uppercase tracking-tighter md:text-6xl"
            >
              {t("WhyUs.title")}
            </m.h2>
            <div className="grid gap-8 md:grid-cols-2">
              {(t.raw("WhyUs.points") as Array<{ title: string; desc: string }>).map(
                (point, idx) => (
                  <m.div
                    key={point.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <GlassCard className="flex h-full gap-6 p-8" hoverEffect glowColor="green">
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
                )
              )}
            </div>
          </div>
        </section>

        {/* FAQ */}
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
                <GlassCard hoverEffect glowColor="green" className="p-0">
                  <details className="group">
                    <summary className="flex cursor-pointer items-center justify-between p-8 text-xl font-bold text-white marker:content-none [&::-webkit-details-marker]:hidden">
                      <span className="flex items-start gap-4">
                        <span className="mt-1 flex-shrink-0 text-hunter-green transition-transform group-open:rotate-90">
                          →
                        </span>
                        {item.q}
                      </span>
                      <span className="ml-4 flex-shrink-0 text-2xl text-hunter-green transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <div className="border-t border-white/5 px-8 pb-8 pt-6">
                      <p className="text-sm leading-relaxed text-gray-400">{item.a}</p>
                    </div>
                  </details>
                </GlassCard>
              </m.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-24">
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl px-6 text-center"
          >
            <GlassCard
              className="border-hunter-green/20 bg-hunter-green/5 p-12 md:p-16"
              hoverEffect
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
          </m.div>
        </section>

        {/* SEO Footer */}
        <footer className="relative z-10 overflow-hidden border-t border-white/5 bg-black/40 py-20">
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-7xl px-6 text-center"
          >
            <p className="mx-auto max-w-4xl text-sm italic leading-relaxed text-gray-600">
              {t("SEO.extendedDesc")}
            </p>
          </m.div>
        </footer>
      </main>
    </>
  );
}
