"use client";

import { useTranslations } from "next-intl";
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
} from "@phosphor-icons/react/dist/ssr";

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
import { m } from "framer-motion";
import Header from "@/components/layout/Header";

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
      { "@type": "ListItem", position: 1, name: "Home", item: `https://www.codehunterlab.com/en` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Real Estate Agency Automation Netherlands",
        item: `https://www.codehunterlab.com/en/real-estate-automation-netherlands`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (t.raw("FAQ.questions") as Array<{ q: string; a: string }>).map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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

        {/* Language Note */}
        <section className="relative z-10 mx-auto max-w-4xl px-6 pb-4">
          <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm leading-relaxed text-gray-400">
            <span className="mt-0.5 flex-shrink-0 text-hunter-green">ℹ</span>
            <p>{t("LanguageNote")}</p>
          </div>
        </section>

        {/* Systems Marquee */}
        <section className="relative z-10 mt-8 overflow-hidden border-y border-white/5 bg-near-black/50 py-12 backdrop-blur-sm">
          <div className="animate-marquee flex space-x-12 whitespace-nowrap opacity-40 grayscale transition-all duration-700 hover:grayscale-0">
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
          </div>
        </section>

        {/* Pain Points */}
        <section className="relative z-10 py-32">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-16 text-center text-4xl font-black uppercase tracking-tighter md:text-6xl">
              {t("PainPoints.title")}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {(
                t.raw("PainPoints.items") as Array<{ emoji: string; title: string; desc: string }>
              ).map((item, idx) => {
                const Icon = painPointIcons[idx];
                return (
                  <GlassCard
                    key={item.title}
                    hoverEffect={true}
                    glowColor="none"
                    className="flex flex-col gap-4 p-8"
                  >
                    {Icon && <Icon size={28} className="text-white/60" />}
                    <h3 className="text-lg font-black uppercase tracking-tight text-white">
                      {item.title}
                    </h3>
                    <p className="flex-grow text-sm leading-relaxed text-gray-400">{item.desc}</p>
                  </GlassCard>
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
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-black uppercase tracking-tighter md:text-6xl">
                {t("Solutions.title")}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-400">{t("Solutions.subtitle")}</p>
            </div>
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
                  <GlassCard
                    key={item.title}
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
                );
              })}
            </div>
          </div>
        </section>

        {/* Scenarios */}
        <section className="relative z-10 py-32">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-16 text-center text-4xl font-black uppercase tracking-tighter md:text-6xl">
              {t("Scenarios.title")}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {(
                t.raw("Scenarios.items") as Array<{ num: string; title: string; desc: string }>
              ).map((item) => (
                <GlassCard
                  key={item.title}
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
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="relative z-10 border-y border-white/5 bg-surface-dark/30 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-16 text-center text-4xl font-black uppercase tracking-tighter md:text-6xl">
              {t("WhyUs.title")}
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {(t.raw("WhyUs.points") as Array<{ title: string; desc: string }>).map((point) => (
                <GlassCard
                  key={point.title}
                  className="flex gap-6 p-8"
                  hoverEffect={true}
                  glowColor="green"
                >
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
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative z-10 mx-auto max-w-4xl px-6 py-32">
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
                <h3 className="mb-4 flex items-start gap-4 text-xl font-bold text-white">
                  <span className="mt-0.5 flex-shrink-0 text-hunter-green transition-transform group-hover:rotate-90">
                    →
                  </span>
                  {item.q}
                </h3>
                <p className="border-l border-white/10 pl-8 text-sm leading-relaxed text-gray-400">
                  {item.a}
                </p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <GlassCard
              className="border-hunter-green/20 bg-hunter-green/5 p-12 md:p-16"
              hoverEffect={false}
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
          </div>
        </section>

        {/* SEO Footer */}
        <footer className="relative z-10 overflow-hidden border-t border-white/5 bg-black/40 py-20">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="mx-auto max-w-4xl text-sm italic leading-relaxed text-gray-600">
              {t("SEO.extendedDesc")}
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
