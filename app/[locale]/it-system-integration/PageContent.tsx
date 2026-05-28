"use client";

import { useLocale, useTranslations } from "next-intl";
import HeroBackgroundOrnaments from "@/components/HeroBackgroundOrnaments";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { Link } from "@/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import { localizedUrl } from "@/utils/metadata";
import { m } from "framer-motion";
import Header from "@/components/layout/Header";
import {
  DatabaseIcon,
  GearSixIcon,
  RocketIcon,
  PlugIcon,
  BuildingsIcon,
  ArrowsClockwiseIcon,
  CheckIcon,
  XIcon,
} from "@phosphor-icons/react/dist/ssr";

export default function ITSystemIntegrationContent() {
  const t = useTranslations("ITSystemIntegration");
  const locale = useLocale();
  const breadcrumbLabel =
    locale === "es"
      ? "Integracion de Sistemas IT"
      : locale === "nl"
        ? "IT Systeemintegratie"
        : "IT System Integration";
  const homeLabel = locale === "es" ? "Inicio" : locale === "nl" ? "Start" : "Home";

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: homeLabel, item: localizedUrl(locale) },
      {
        "@type": "ListItem",
        position: 2,
        name: breadcrumbLabel,
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
      ],
    },
  };

  const withoutPoints = t.raw("WhyUs.without.points") as string[];
  const withPoints = t.raw("WhyUs.with.points") as string[];

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
        <section className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center md:py-32">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 font-mono text-xs text-blue-400 backdrop-blur-md md:text-sm"
          >
            <ScrambleText text={t("Hero.badge")} />
          </m.div>

          <m.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 text-4xl font-black leading-[0.9] tracking-tighter md:text-8xl"
          >
            {t("Hero.title.part1")} <br />
            <span className="neon-glow-green bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              {t("Hero.title.highlight")}
            </span>
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-2xl"
            dangerouslySetInnerHTML={{ __html: t.raw("Hero.description") }}
          />

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-5 sm:flex-row"
          >
            <Link
              href="/#contact"
              className="rounded-full bg-blue-600 px-10 py-5 text-sm font-black uppercase tracking-widest text-white shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all hover:scale-105 hover:bg-blue-500"
            >
              {t("Hero.cta.primary")}
            </Link>
            <Link
              href="#services"
              className="rounded-full border border-white/10 bg-white/5 px-10 py-5 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-xl transition-all hover:bg-white/10"
            >
              {t("Hero.cta.secondary")}
            </Link>
          </m.div>
        </section>

        {/* Tech Stack Marquee */}
        <section className="relative z-10 overflow-hidden border-y border-white/5 bg-near-black/50 py-12 backdrop-blur-sm">
          <div className="animate-marquee flex space-x-12 whitespace-nowrap opacity-40 grayscale transition-all duration-700 hover:grayscale-0">
            {[
              "n8n",
              "REST APIs",
              "GraphQL",
              "Webhooks",
              "HubSpot",
              "Salesforce",
              "PostgreSQL",
              "Airtable",
              "Node.js",
              "Python",
            ].map((tech) => (
              <span
                key={tech}
                className="text-2xl font-black uppercase italic tracking-tighter text-white md:text-3xl"
              >
                {tech}
              </span>
            ))}
            {[
              "n8n",
              "REST APIs",
              "GraphQL",
              "Webhooks",
              "HubSpot",
              "Salesforce",
              "PostgreSQL",
              "Airtable",
              "Node.js",
              "Python",
            ].map((tech) => (
              <span
                key={`${tech}-2`}
                className="text-2xl font-black uppercase italic tracking-tighter text-white md:text-3xl"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Visual Workflow Section */}
        <section className="relative z-10 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="relative flex flex-col items-center justify-between gap-12 md:flex-row">
              {/* Connecting Line (Desktop) */}
              <div className="absolute left-0 top-1/2 hidden h-[2px] w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent md:block" />

              {/* Box 1 */}
              <m.div whileHover={{ y: -5 }} className="relative z-10 w-full md:w-1/3">
                <GlassCard
                  className="border-white/5 p-10 text-center transition-colors hover:border-blue-500/30"
                  hoverEffect={true}
                  glowColor="green"
                >
                  <div className="mb-6">
                    <DatabaseIcon size={48} className="text-white/60" />
                  </div>
                  <h3 className="mb-3 text-2xl font-black uppercase tracking-tight">
                    {t("Diagram.source.title")}
                  </h3>
                  <p className="font-medium text-gray-400">{t("Diagram.source.desc")}</p>
                </GlassCard>
              </m.div>

              {/* Engine */}
              <m.div
                animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative z-20 w-full md:w-1/3"
              >
                <GlassCard
                  className="border-blue-500/30 bg-blue-500/5 p-10 text-center shadow-[0_0_50px_rgba(59,130,246,0.1)]"
                  hoverEffect={true}
                  glowColor="green"
                >
                  <div className="mb-6">
                    <GearSixIcon size={48} className="text-blue-400" />
                  </div>
                  <h3 className="mb-3 text-2xl font-black uppercase tracking-tight text-blue-400">
                    {t("Diagram.engine.title")}
                  </h3>
                  <p className="font-mono text-sm text-blue-200/60">{t("Diagram.engine.desc")}</p>
                </GlassCard>
              </m.div>

              {/* Box 3 */}
              <m.div whileHover={{ y: -5 }} className="relative z-10 w-full md:w-1/3">
                <GlassCard
                  className="border-white/5 p-10 text-center transition-colors hover:border-purple-500/30"
                  hoverEffect={true}
                  glowColor="green"
                >
                  <div className="mb-6">
                    <RocketIcon size={48} className="text-white/60" />
                  </div>
                  <h3 className="mb-3 text-2xl font-black uppercase tracking-tight">
                    {t("Diagram.outcome.title")}
                  </h3>
                  <p className="font-medium text-gray-400">{t("Diagram.outcome.desc")}</p>
                </GlassCard>
              </m.div>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section id="services" className="relative z-10 py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-3">
              <GlassCard
                className="flex h-full flex-col border-white/5 p-10 hover:bg-white/[0.02]"
                hoverEffect={true}
                glowColor="green"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">
                  <PlugIcon size={28} className="text-blue-400" />
                </div>
                <h3 className="mb-4 text-3xl font-black uppercase tracking-tight">
                  {t("Services.api.title")}
                </h3>
                <p className="flex-grow text-lg leading-relaxed text-gray-400">
                  {t("Services.api.desc")}
                </p>
              </GlassCard>

              <GlassCard
                className="flex h-full flex-col border-blue-500/30 bg-blue-500/5 p-10 shadow-[0_0_50px_rgba(59,130,246,0.1)]"
                hoverEffect={true}
                glowColor="green"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-500/40 bg-indigo-500/20">
                  <BuildingsIcon size={28} className="text-indigo-400" />
                </div>
                <h3 className="mb-4 text-3xl font-black uppercase tracking-tight">
                  {t("Services.legacy.title")}
                </h3>
                <p className="flex-grow text-lg leading-relaxed text-gray-400">
                  {t("Services.legacy.desc")}
                </p>
              </GlassCard>

              <GlassCard
                className="flex h-full flex-col border-white/5 p-10 hover:bg-white/[0.02]"
                hoverEffect={true}
                glowColor="green"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10">
                  <ArrowsClockwiseIcon size={28} className="text-purple-400" />
                </div>
                <h3 className="mb-4 text-3xl font-black uppercase tracking-tight">
                  {t("Services.sync.title")}
                </h3>
                <p className="flex-grow text-lg leading-relaxed text-gray-400">
                  {t("Services.sync.desc")}
                </p>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Why Us — Before vs After */}
        <section className="relative z-10 border-y border-white/5 bg-surface-dark/30 py-24">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-16 text-center text-4xl font-black uppercase tracking-tighter md:text-6xl">
              {t("WhyUs.title")}
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <GlassCard className="bg-white/[0.02] p-10" hoverEffect={false}>
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

              <GlassCard className="border-blue-500/30 bg-blue-500/5 p-10" hoverEffect={false}>
                <div className="mb-8 flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-blue-400" />
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                    {t("WhyUs.with.title")}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {withPoints.map((point) => (
                    <li key={point} className="flex items-start gap-4">
                      <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" />
                      <span className="text-lg text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="relative z-10 py-32">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-16 text-center text-4xl font-black uppercase tracking-tighter md:text-6xl">
              {t("Process.title")}
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {(
                t.raw("Process.steps") as Array<{ number: string; title: string; desc: string }>
              ).map((step, idx) => {
                return (
                  <m.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <GlassCard className="flex gap-6 p-8" hoverEffect={true} glowColor="green">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10">
                        <span className="font-mono text-sm font-black text-blue-400">
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
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative z-10 mx-auto max-w-4xl border-t border-white/5 px-6 py-32">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-tighter md:text-6xl">
              {t("FAQ.title")}
            </h2>
            <p className="text-xl text-gray-400">{t("FAQ.subtitle")}</p>
          </div>

          <div className="space-y-6">
            {(t.raw("FAQ.questions") as Array<{ q: string; a: string }>).map((item) => (
              <GlassCard
                key={item.q}
                className="group cursor-default p-8"
                hoverEffect={true}
                glowColor="green"
              >
                <h3 className="mb-4 flex items-center gap-4 text-2xl font-bold text-white">
                  <span className="text-hunter-green transition-transform group-hover:rotate-90">
                    →
                  </span>
                  {item.q}
                </h3>
                <p className="border-l border-white/10 pl-10 text-lg leading-relaxed text-gray-400">
                  {item.a}
                </p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative z-10 py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <GlassCard className="border-blue-500/20 bg-blue-500/5 p-16" hoverEffect={false}>
              <p className="mb-6 font-mono text-sm uppercase tracking-widest text-blue-400">
                {t("CTA.badge")}
              </p>
              <h2 className="mb-6 text-4xl font-black uppercase tracking-tighter md:text-5xl">
                {t("CTA.title")}
              </h2>
              <p className="mb-10 text-lg leading-relaxed text-gray-400">{t("CTA.subtitle")}</p>
              <Link
                href="/#contact"
                className="inline-block rounded-full bg-blue-600 px-12 py-5 text-sm font-black uppercase tracking-widest text-white shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all hover:scale-105 hover:bg-blue-500"
              >
                {t("CTA.button")}
              </Link>
            </GlassCard>
          </div>
        </section>

        <footer className="relative z-10 border-t border-white/5 bg-black/40 py-12">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="mx-auto max-w-4xl text-sm italic leading-relaxed text-gray-600">
              {t("SEO.description")}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 font-mono text-[10px] uppercase tracking-widest text-gray-400 opacity-20">
              {t("SEO.keywords")
                .split(",")
                .map((kw: string) => (
                  <span key={kw}>{kw.trim()}</span>
                ))}
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
