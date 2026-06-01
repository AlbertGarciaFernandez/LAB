"use client";

import HeroBackgroundOrnaments from "@/components/HeroBackgroundOrnaments";
import { useLocale, useTranslations } from "next-intl";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { Link } from "@/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  CheckIcon,
  CalendarXIcon,
  PhoneIcon,
  ChartBarIcon,
  ArrowsClockwiseIcon,
  PlugsConnectedIcon,
  ChatCircleDotsIcon,
  TargetIcon,
  LightningIcon,
  StarIcon,
  ShieldCheckIcon,
  LockKeyIcon,
  KeyIcon,
  FlagIcon,
  MagnifyingGlassIcon,
  ChatTeardropTextIcon,
  CalendarCheckIcon,
  ClipboardTextIcon,
  CaretDownIcon,
} from "@phosphor-icons/react/dist/ssr";
import { m } from "framer-motion";
import Header from "@/components/layout/Header";
import PatientJourneyTimeline from "@/components/industry/PatientJourneyTimeline";
import { localizedUrl } from "@/utils/metadata";
import { getCommonBreadcrumbLabels, getLocaleValue } from "../_shared/localeCopy";

const painPointIcons = [
  CalendarXIcon,
  PhoneIcon,
  ChartBarIcon,
  ArrowsClockwiseIcon,
  PlugsConnectedIcon,
  ChatCircleDotsIcon,
];
const solutionIcons = [
  ChatCircleDotsIcon,
  TargetIcon,
  LightningIcon,
  ArrowsClockwiseIcon,
  ChartBarIcon,
  StarIcon,
];

const complianceBadges = [
  { icon: ShieldCheckIcon, label: "GDPR Compliant" },
  { icon: LockKeyIcon, label: "HIPAA-Ready" },
  { icon: KeyIcon, label: "End-to-End Encryption" },
  { icon: FlagIcon, label: "EU Data Residency" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function HealthcareAutomationContent() {
  const locale = useLocale();
  const t = useTranslations("Healthcare");
  const painPointsItems = t.raw("PainPoints.items") as Array<{
    emoji: string;
    title: string;
    desc: string;
  }>;
  const solutionsItems = t.raw("Solutions.items") as Array<{
    emoji: string;
    title: string;
    desc: string;
    result: string;
  }>;
  const scenariosItems = t.raw("Scenarios.items") as Array<{
    num: string;
    title: string;
    desc: string;
  }>;
  const whyUsPoints = t.raw("WhyUs.points") as Array<{ title: string; desc: string }>;
  const faqQuestions = t.raw("FAQ.questions") as Array<{ q: string; a: string }>;
  const industryMetrics = t.raw("IndustryMetrics") as Array<{ value: string; label: string }>;
  const labels = getCommonBreadcrumbLabels(locale);
  const patientJourneyPreviewLabel = getLocaleValue(locale, {
    en: "Patient Journey - 5 Automated Steps",
    es: "Recorrido del paciente - 5 pasos automatizados",
    nl: "Patientreis - 5 geautomatiseerde stappen",
  });
  const heroJourneySteps = [
    {
      icon: MagnifyingGlassIcon,
      label: getLocaleValue(locale, { en: "Discovery", es: "Descubrimiento", nl: "Ontdekking" }),
      time: "0 min",
    },
    {
      icon: ChatTeardropTextIcon,
      label: getLocaleValue(locale, { en: "Contact", es: "Contacto", nl: "Contact" }),
      time: "< 2 min",
    },
    {
      icon: CalendarCheckIcon,
      label: getLocaleValue(locale, { en: "Booking", es: "Reserva", nl: "Boeking" }),
      time: "3-5 min",
    },
    {
      icon: ClipboardTextIcon,
      label: getLocaleValue(locale, { en: "Pre-Visit", es: "Previsita", nl: "Voorbezoek" }),
      time: "48h",
    },
    {
      icon: StarIcon,
      label: getLocaleValue(locale, { en: "Follow-Up", es: "Seguimiento", nl: "Opvolging" }),
      time: getLocaleValue(locale, { en: "Same day", es: "Mismo dia", nl: "Zelfde dag" }),
    },
  ];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Healthcare & Medical Automation Netherlands",
    provider: {
      "@type": "Organization",
      name: "CodeHunter Lab",
      url: "https://www.codehunterlab.com",
    },
    areaServed: ["Netherlands", "Leiden", "Amsterdam", "Rotterdam", "Den Haag", "Utrecht"],
    description:
      "Custom automation and CRM integration systems for healthcare providers in the Netherlands — dental clinics, physiotherapy practices, veterinary clinics, and medical practices. Appointment reminders, patient reactivation, lead-to-booking automation, and practice dashboards.",
    serviceType: "Healthcare Practice Automation & Integration",
    offers: {
      "@type": "Offer",
      price: "0.00",
      priceCurrency: "EUR",
      description: "Free healthcare practice automation audit",
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
          en: "Healthcare Automation Netherlands",
          es: "Automatización para Clínicas Médicas en Países Bajos",
          nl: "Automatisering voor Gezondheidszorg in Nederland",
        }),
        item: localizedUrl(locale, "/healthcare-automation-netherlands"),
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

        {/* ── Hero ── */}
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
            className="mb-16 flex flex-col gap-5 sm:flex-row"
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

          {/* Patient Journey Preview */}
          <m.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full max-w-4xl"
          >
            <div className="relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm md:p-8">
              <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.25em] text-hunter-green">
                {patientJourneyPreviewLabel}
              </p>
              <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-0">
                {heroJourneySteps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.label} className="flex items-center gap-4 md:flex-col md:gap-2">
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-hunter-green/20 bg-hunter-green/10 md:h-14 md:w-14">
                        <Icon size={22} className="text-hunter-green" />
                        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-hunter-green text-[9px] font-black text-black">
                          {idx + 1}
                        </span>
                      </div>
                      <div className="text-left md:text-center">
                        <p className="text-xs font-bold text-white">{step.label}</p>
                        <p className="font-mono text-[10px] text-gray-500">{step.time}</p>
                      </div>
                      {idx < heroJourneySteps.length - 1 && (
                        <div className="hidden h-px w-8 bg-gradient-to-r from-hunter-green/40 to-hunter-green/10 md:block" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </m.div>
        </section>

        {/* ── Metrics ── */}
        <section className="relative z-10 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <m.div
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {industryMetrics.map((metric, idx) => (
                <m.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard hoverEffect glowColor="green" className="p-8 text-center">
                    <p className="mb-2 text-4xl font-black tracking-tight text-hunter-green md:text-5xl">
                      {metric.value}
                    </p>
                    <p className="text-sm leading-relaxed text-gray-400">{metric.label}</p>
                  </GlassCard>
                </m.div>
              ))}
            </m.div>
          </div>
        </section>

        {/* ── Language Note ── */}
        <m.section
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="relative z-10 mx-auto max-w-4xl px-6 pb-4"
        >
          <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm leading-relaxed text-gray-400">
            <span className="mt-0.5 flex-shrink-0 text-hunter-green">ℹ</span>
            <p>{t("LanguageNote")}</p>
          </div>
        </m.section>

        {/* ── Patient Journey Timeline ── */}
        <PatientJourneyTimeline />

        {/* ── Pain Points ── */}
        <section className="relative z-10 py-32">
          <div className="mx-auto max-w-7xl px-6">
            <m.h2
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center text-4xl font-black uppercase tracking-tighter md:text-6xl"
            >
              {t("PainPoints.title")}
            </m.h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {painPointsItems.map((item, idx) => {
                const Icon = painPointIcons[idx];
                return (
                  <m.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                  >
                    <GlassCard
                      hoverEffect
                      glowColor="green"
                      className="flex h-full flex-col gap-4 p-8"
                    >
                      {Icon && (
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                          <Icon size={22} className="text-white/60" />
                        </div>
                      )}
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

        {/* ── Solutions ── */}
        <section
          id="solutions"
          className="relative z-10 border-y border-white/5 bg-surface-dark/30 py-32"
        >
          <div className="mx-auto max-w-7xl px-6">
            <m.div {...fadeUp} transition={{ duration: 0.6 }} className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-black uppercase tracking-tighter md:text-6xl">
                {t("Solutions.title")}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-400">{t("Solutions.subtitle")}</p>
            </m.div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {solutionsItems.map((item, idx) => {
                const Icon = solutionIcons[idx];
                return (
                  <m.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
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

        {/* ── Compliance & Security Badges ── */}
        <section className="relative z-10 py-24">
          <div className="mx-auto max-w-5xl px-6">
            <m.div {...fadeUp} transition={{ duration: 0.6 }} className="mb-12 text-center">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-hunter-green">
                Security & Compliance
              </p>
              <h2 className="text-3xl font-black uppercase tracking-tighter text-white md:text-4xl">
                Built for Healthcare Standards
              </h2>
            </m.div>
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
            >
              {complianceBadges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <m.div
                    key={badge.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-center gap-3 rounded-xl border border-hunter-green/15 bg-hunter-green/5 px-5 py-4 backdrop-blur-sm"
                  >
                    <Icon size={22} className="text-hunter-green" weight="duotone" />
                    <span className="text-sm font-bold text-white">{badge.label}</span>
                  </m.div>
                );
              })}
            </m.div>
          </div>
        </section>

        {/* ── Scenarios ── */}
        <section className="relative z-10 py-32">
          <div className="mx-auto max-w-5xl px-6">
            <m.h2
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center text-4xl font-black uppercase tracking-tighter md:text-6xl"
            >
              {t("Scenarios.title")}
            </m.h2>
            <div className="grid gap-6 md:grid-cols-2">
              {scenariosItems.map((item, idx) => (
                <m.div
                  key={item.title}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard
                    className="group h-full border-l-4 border-l-hunter-green p-8 transition-colors hover:bg-white/[0.02]"
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

        {/* ── Why Us ── */}
        <section className="relative z-10 border-y border-white/5 bg-surface-dark/30 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <m.h2
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center text-4xl font-black uppercase tracking-tighter md:text-6xl"
            >
              {t("WhyUs.title")}
            </m.h2>
            <div className="grid gap-8 md:grid-cols-2">
              {whyUsPoints.map((point, idx) => (
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
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="relative z-10 mx-auto max-w-4xl px-6 py-32">
          <m.div {...fadeUp} transition={{ duration: 0.6 }} className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-tighter md:text-6xl">
              {t("FAQ.title")}
            </h2>
            <p className="text-xl text-gray-400">{t("FAQ.subtitle")}</p>
          </m.div>
          <div className="space-y-4">
            {faqQuestions.map((item, idx) => (
              <m.div
                key={item.q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
              >
                <GlassCard className="overflow-hidden p-0" hoverEffect={false} glowColor="green">
                  <details className="group peer">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 px-8 py-6 text-left text-lg font-bold text-white transition-colors hover:text-hunter-green [&::-webkit-details-marker]:hidden">
                      <span>{item.q}</span>
                      <CaretDownIcon
                        size={20}
                        className="flex-shrink-0 text-hunter-green transition-transform duration-300 group-open:rotate-180"
                      />
                    </summary>
                    <div className="border-t border-white/5 px-8 pb-6 pt-4">
                      <p className="text-sm leading-relaxed text-gray-400">{item.a}</p>
                    </div>
                  </details>
                </GlassCard>
              </m.div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative z-10 py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <m.div {...fadeUp} transition={{ duration: 0.6 }}>
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

        {/* ── SEO Footer ── */}
        <footer className="relative z-10 overflow-hidden border-t border-white/5 bg-black/40 py-20">
          <m.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
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
