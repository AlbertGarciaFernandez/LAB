"use client";

import { useLocale, useTranslations } from "next-intl";
import HeroBackgroundOrnaments from "@/components/HeroBackgroundOrnaments";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { Link } from "@/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  CheckIcon,
  PhoneIcon,
  HouseIcon,
  ChartBarIcon,
  ArrowsClockwiseIcon,
  PlugsConnectedIcon,
  ChatCircleDotsIcon,
  LightningIcon,
  CalendarCheckIcon,
  StarIcon,
  UserIcon,
  EnvelopeIcon,
} from "@phosphor-icons/react/dist/ssr";
import { m } from "framer-motion";
import Header from "@/components/layout/Header";
import ResponseSpeedChart from "@/components/industry/ResponseSpeedChart";
import { localizedUrl } from "@/utils/metadata";
import { getCommonBreadcrumbLabels, getLocaleValue } from "../_shared/localeCopy";

const painPointIcons = [
  PhoneIcon,
  HouseIcon,
  ChartBarIcon,
  ArrowsClockwiseIcon,
  PlugsConnectedIcon,
  ChatCircleDotsIcon,
];

const solutionIcons = [
  LightningIcon,
  CalendarCheckIcon,
  HouseIcon,
  ChartBarIcon,
  ArrowsClockwiseIcon,
  StarIcon,
];

const realEstateSystems = [
  "Funda",
  "HubSpot",
  "WhatsApp Business API",
  "n8n",
  "Brevo",
  "Google Ads",
  "Meta Ads",
  "Zapier",
  "Calendly",
  "ActiveCampaign",
];

export default function RealEstateAutomationContent() {
  const t = useTranslations("RealEstateAgency");
  const locale = useLocale();
  const labels = getCommonBreadcrumbLabels(locale);
  const industryMetrics = t.raw("IndustryMetrics") as Array<{ value: string; label: string }>;
  const pipelineBadge = getLocaleValue(locale, {
    en: "Automated Pipeline",
    es: "Pipeline automatizado",
    nl: "Geautomatiseerde pipeline",
  });
  const workflowTitle = getLocaleValue(locale, {
    en: "Agent Workflow Visual",
    es: "Flujo visual del agente",
    nl: "Visuele workflow van de makelaar",
  });
  const workflowSubtitle = getLocaleValue(locale, {
    en: "From lead capture to viewing booking - fully automated in minutes, not hours.",
    es: "Desde la captacion del lead hasta la reserva de visita: totalmente automatizado en minutos, no horas.",
    nl: "Van leadcaptatie tot bezichtigingsboeking: volledig geautomatiseerd in minuten, niet uren.",
  });
  const workflowNodes = [
    {
      icon: HouseIcon,
      label: getLocaleValue(locale, { en: "Funda Lead", es: "Lead de Funda", nl: "Funda-lead" }),
      desc: getLocaleValue(locale, {
        en: "New inquiry arrives",
        es: "Llega una nueva consulta",
        nl: "Nieuwe aanvraag komt binnen",
      }),
    },
    {
      icon: UserIcon,
      label: getLocaleValue(locale, {
        en: "AI Qualification",
        es: "Calificacion con IA",
        nl: "AI-kwalificatie",
      }),
      desc: getLocaleValue(locale, {
        en: "Auto-score and filter",
        es: "Puntuacion y filtro automatico",
        nl: "Automatisch scoren en filteren",
      }),
    },
    {
      icon: ChatCircleDotsIcon,
      label: getLocaleValue(locale, {
        en: "WhatsApp Response",
        es: "Respuesta por WhatsApp",
        nl: "WhatsApp-reactie",
      }),
      desc: getLocaleValue(locale, {
        en: "Instant reply < 2 min",
        es: "Respuesta inmediata < 2 min",
        nl: "Direct antwoord < 2 min",
      }),
    },
    {
      icon: CalendarCheckIcon,
      label: getLocaleValue(locale, {
        en: "Calendar Booking",
        es: "Reserva en calendario",
        nl: "Boeking in agenda",
      }),
      desc: getLocaleValue(locale, {
        en: "Viewing scheduled",
        es: "Visita agendada",
        nl: "Bezichtiging ingepland",
      }),
    },
    {
      icon: EnvelopeIcon,
      label: getLocaleValue(locale, { en: "Follow-up", es: "Seguimiento", nl: "Opvolging" }),
      desc: getLocaleValue(locale, {
        en: "Email/SMS sequence",
        es: "Secuencia de email/SMS",
        nl: "E-mail/SMS-sequentie",
      }),
    },
  ];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Real Estate Agency Automation Netherlands",
    provider: {
      "@type": "Organization",
      name: "CodeHunter Lab",
      url: "https://www.codehunterlab.com",
    },
    areaServed: ["Netherlands", "Leiden", "Amsterdam", "Rotterdam", "Den Haag", "Utrecht"],
    description:
      "Custom automation and CRM integration systems for real estate agencies in the Netherlands — lead follow-up, property listing automation, viewing scheduling, and client dashboards.",
    serviceType: "Real Estate Agency Automation & Integration",
    offers: {
      "@type": "Offer",
      price: "0.00",
      priceCurrency: "EUR",
      description: "Free real estate agency automation audit",
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
          en: "Real Estate Agency Automation Netherlands",
          es: "Automatización para Agencias Inmobiliarias en Países Bajos",
          nl: "Automatisering voor Makelaars in Nederland",
        }),
        item: localizedUrl(locale, "/real-estate-automation-netherlands"),
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
            {t.rich("Hero.description", {
              strong: (chunks) => <strong className="text-white">{chunks}</strong>,
            })}
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-5 sm:flex-row"
          >
            <Link
              href="/#contact"
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

        {/* Industry Metrics */}
        <section className="relative z-10 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            >
              {industryMetrics.map((metric, idx) => (
                <m.div
                  key={metric.value}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard hoverEffect glowColor="green" className="p-8 text-center">
                    <div className="mb-3 text-5xl font-black text-hunter-green md:text-6xl">
                      {metric.value}
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400">{metric.label}</p>
                  </GlassCard>
                </m.div>
              ))}
            </m.div>
          </div>
        </section>

        {/* Response Speed Chart */}
        <ResponseSpeedChart />

        {/* Agent Workflow Visual */}
        <section className="relative z-10 py-32">
          <div className="mx-auto max-w-5xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-hunter-green">
                {pipelineBadge}
              </p>
              <h2 className="text-4xl font-black uppercase tracking-tighter text-white md:text-5xl">
                {workflowTitle}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">{workflowSubtitle}</p>
            </m.div>

            <div className="relative flex flex-col items-center gap-8 md:gap-12">
              {workflowNodes.map((node, idx) => {
                const Icon = node.icon;
                return (
                  <m.div
                    key={node.label}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="relative flex w-full max-w-md flex-col items-center"
                  >
                    {idx < workflowNodes.length - 1 && (
                      <div className="absolute left-1/2 top-full h-8 w-0.5 -translate-x-1/2 bg-gradient-to-b from-hunter-green/60 to-hunter-green/20 md:h-12" />
                    )}
                    <div className="flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all hover:border-hunter-green/30 hover:bg-white/[0.05]">
                      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border border-hunter-green/30 bg-hunter-green/10">
                        <Icon size={28} className="text-hunter-green" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-black uppercase tracking-tight text-white">
                          {node.label}
                        </h3>
                        <p className="text-sm text-gray-400">{node.desc}</p>
                      </div>
                      <div className="flex-shrink-0 font-mono text-2xl font-black text-hunter-green/30">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </m.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="relative z-10 py-32">
          <div className="mx-auto max-w-7xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl font-black uppercase tracking-tighter text-white md:text-6xl">
                {t("PainPoints.title")}
              </h2>
            </m.div>
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
              <h2 className="mb-4 text-4xl font-black uppercase tracking-tighter text-white md:text-6xl">
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

        {/* Systems Marquee */}
        <section className="relative z-10 mt-8 overflow-hidden border-y border-white/5 bg-near-black/50 py-12 backdrop-blur-sm">
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="animate-marquee flex space-x-12 whitespace-nowrap opacity-40 grayscale transition-all duration-700 hover:grayscale-0"
          >
            {realEstateSystems.map((sys) => (
              <span
                key={`a-${sys}`}
                className="text-xl font-black uppercase italic tracking-tighter text-white md:text-2xl"
              >
                {sys}
              </span>
            ))}
            {realEstateSystems.map((sys) => (
              <span
                key={`b-${sys}`}
                className="text-xl font-black uppercase italic tracking-tighter text-white md:text-2xl"
              >
                {sys}
              </span>
            ))}
          </m.div>
        </section>

        {/* Scenarios */}
        <section className="relative z-10 py-32">
          <div className="mx-auto max-w-5xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl font-black uppercase tracking-tighter text-white md:text-6xl">
                {t("Scenarios.title")}
              </h2>
            </m.div>
            <div className="grid gap-6 md:grid-cols-2">
              {(
                t.raw("Scenarios.items") as Array<{ num: string; title: string; desc: string }>
              ).map((item, idx) => (
                <m.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard
                    className="group border-l-4 border-l-hunter-green p-8 transition-colors hover:bg-white/[0.02]"
                    hoverEffect={false}
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
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl font-black uppercase tracking-tighter text-white md:text-6xl">
                {t("WhyUs.title")}
              </h2>
            </m.div>
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
                    <GlassCard className="flex gap-6 p-8" hoverEffect glowColor="green">
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
            <h2 className="mb-4 text-4xl font-black uppercase tracking-tighter text-white md:text-6xl">
              {t("FAQ.title")}
            </h2>
            <p className="text-xl text-gray-400">{t("FAQ.subtitle")}</p>
          </m.div>
          <div className="space-y-4">
            {(t.raw("FAQ.questions") as Array<{ q: string; a: string }>).map((item, idx) => (
              <m.div
                key={item.q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <details className="group rounded-3xl border border-white/[0.05] bg-near-black p-6 transition-all hover:border-hunter-green/20">
                  <summary className="flex cursor-pointer items-center justify-between text-lg font-bold text-white">
                    <span>{item.q}</span>
                    <span className="ml-4 flex-shrink-0 text-hunter-green transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 border-l-2 border-hunter-green/30 pl-6">
                    <p className="text-sm leading-relaxed text-gray-400">{item.a}</p>
                  </div>
                </details>
              </m.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard
                className="border-hunter-green/20 bg-hunter-green/5 p-12 md:p-16"
                hoverEffect={false}
              >
                <p className="mb-6 font-mono text-sm uppercase tracking-widest text-hunter-green">
                  {t("CTA.label")}
                </p>
                <h2 className="mb-6 text-4xl font-black uppercase tracking-tighter text-white md:text-5xl">
                  {t("CTA.title")}
                </h2>
                <p className="mb-10 text-lg leading-relaxed text-gray-400">{t("CTA.desc")}</p>
                <Link
                  href="/#contact"
                  className="inline-block rounded-full bg-hunter-green px-12 py-5 text-sm font-black uppercase tracking-widest text-black shadow-[0_0_30px_rgba(0,230,162,0.4)] transition-all hover:scale-105 hover:bg-white"
                >
                  {t("CTA.button")}
                </Link>
                <p className="mt-6 font-mono text-xs text-gray-600">{t("CTA.subtext")}</p>
              </GlassCard>
            </m.div>
          </div>
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
