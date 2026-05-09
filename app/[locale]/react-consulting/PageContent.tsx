"use client";

import { useTranslations } from "next-intl";
import HeroBackgroundOrnaments from "@/components/HeroBackgroundOrnaments";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { Link } from "@/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  CheckIcon,
  XIcon,
  MagnifyingGlassIcon,
  TreeStructureIcon,
  ArrowsClockwiseIcon,
} from "@phosphor-icons/react/dist/ssr";
import { m } from "framer-motion";
import Header from "@/components/layout/Header";

export default function ReactConsultingContent() {
  const t = useTranslations("ReactConsulting");

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "React Consulting Services Netherlands",
    provider: {
      "@type": "Organization",
      name: "CodeHunter Lab",
      url: "https://www.codehunterlab.com",
    },
    areaServed: ["Netherlands", "Leiden", "Amsterdam", "Rotterdam", "Den Haag"],
    description:
      "Senior React consulting including codebase audits, architecture design, performance optimization, and React migration services.",
    serviceType: "React Frontend Consulting",
    offers: {
      "@type": "Offer",
      price: "0.00",
      priceCurrency: "EUR",
      description: "Free 1-hour discovery call",
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
        name: "React Consulting",
        item: `https://www.codehunterlab.com/en/react-consulting`,
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

  const consultingPoints = t.raw("Comparison.consulting.points") as string[];
  const hiringPoints = t.raw("Comparison.hiring.points") as string[];

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

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-5 sm:flex-row"
          >
            <Link
              href="/#contact"
              className="rounded-full bg-hunter-orange px-10 py-5 text-sm font-black uppercase tracking-widest text-black shadow-[0_0_30px_rgba(255,122,60,0.4)] transition-all hover:scale-105 hover:bg-white"
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
              "React 18",
              "TypeScript",
              "Zustand",
              "TanStack Query",
              "Vite",
              "Vitest",
              "React Testing Library",
              "Storybook",
              "Tailwind CSS",
              "Framer Motion",
            ].map((tech) => (
              <span
                key={tech}
                className="text-2xl font-black uppercase italic tracking-tighter text-white md:text-3xl"
              >
                {tech}
              </span>
            ))}
            {[
              "React 18",
              "TypeScript",
              "Zustand",
              "TanStack Query",
              "Vite",
              "Vitest",
              "React Testing Library",
              "Storybook",
              "Tailwind CSS",
              "Framer Motion",
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

        {/* Services Grid */}
        <section id="services" className="relative z-10 py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-3">
              <GlassCard
                hoverEffect={true}
                glowColor="orange"
                className="flex h-full flex-col p-10"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-hunter-orange/20 bg-hunter-orange/10">
                  <MagnifyingGlassIcon size={28} className="text-hunter-orange" />
                </div>
                <h3 className="mb-4 text-3xl font-black uppercase tracking-tight text-white">
                  {t("Services.audit.title")}
                </h3>
                <p className="flex-grow text-lg leading-relaxed text-gray-400">
                  {t("Services.audit.description")}
                </p>
              </GlassCard>

              <GlassCard
                hoverEffect={true}
                glowColor="orange"
                className="flex h-full flex-col border-hunter-orange/30 bg-hunter-orange/5 p-10 shadow-[0_0_50px_rgba(255,122,60,0.1)]"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-hunter-orange/40 bg-hunter-orange/20">
                  <TreeStructureIcon size={28} className="text-hunter-orange" />
                </div>
                <h3 className="mb-4 text-3xl font-black uppercase tracking-tight text-white">
                  {t("Services.architecture.title")}
                </h3>
                <p className="flex-grow text-lg leading-relaxed text-gray-400">
                  {t("Services.architecture.description")}
                </p>
              </GlassCard>

              <GlassCard
                hoverEffect={true}
                glowColor="orange"
                className="flex h-full flex-col p-10"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-hunter-orange/20 bg-hunter-orange/10">
                  <ArrowsClockwiseIcon size={28} className="text-hunter-orange" />
                </div>
                <h3 className="mb-4 text-3xl font-black uppercase tracking-tight text-white">
                  {t("Services.migration.title")}
                </h3>
                <p className="flex-grow text-lg leading-relaxed text-gray-400">
                  {t("Services.migration.description")}
                </p>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Consultancy vs Hiring Comparison */}
        <section className="relative z-10 border-y border-white/5 bg-surface-dark/30 py-24">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-16 text-center text-4xl font-black uppercase tracking-tighter md:text-6xl">
              {t("Comparison.title")}
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <GlassCard
                className="border-hunter-orange/30 bg-hunter-orange/5 p-10"
                hoverEffect={false}
              >
                <div className="mb-8 flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-hunter-orange" />
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                    {t("Comparison.consulting.title")}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {consultingPoints.map((point) => (
                    <li key={point} className="flex items-start gap-4">
                      <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-hunter-orange" />
                      <span className="text-lg text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>

              <GlassCard className="bg-white/[0.02] p-10" hoverEffect={false}>
                <div className="mb-8 flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-gray-500" />
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white/70">
                    {t("Comparison.hiring.title")}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {hiringPoints.map((point) => (
                    <li key={point} className="flex items-start gap-4">
                      <XIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-500" />
                      <span className="text-lg text-gray-400">{point}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="relative z-10 py-32">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-16 text-center text-4xl font-black uppercase tracking-tighter md:text-6xl">
              {t("Process.title")}
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[0, 1, 2, 3].map((step) => (
                <GlassCard
                  key={step}
                  className="flex gap-6 p-8"
                  hoverEffect={true}
                  glowColor="orange"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-hunter-orange/30 bg-hunter-orange/10">
                    <span className="font-mono text-sm font-black text-hunter-orange">
                      0{step + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-black uppercase tracking-tight text-white">
                      {t(`Process.steps.${step}.title`)}
                    </h3>
                    <p className="leading-relaxed text-gray-400">
                      {t(`Process.steps.${step}.desc`)}
                    </p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
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
                glowColor="orange"
              >
                <h3 className="mb-4 flex items-center gap-4 text-2xl font-bold text-white">
                  <span className="text-hunter-orange transition-transform group-hover:rotate-90">
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

        {/* CTA Section */}
        <section className="relative z-10 py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <GlassCard
              className="border-hunter-orange/20 bg-hunter-orange/5 p-16"
              hoverEffect={false}
            >
              <p className="mb-6 font-mono text-sm uppercase tracking-widest text-hunter-orange">
                {t("CTA.badge")}
              </p>
              <h2 className="mb-6 text-4xl font-black uppercase tracking-tighter md:text-5xl">
                {t("CTA.title")}
              </h2>
              <p className="mb-10 text-lg leading-relaxed text-gray-400">{t("CTA.subtitle")}</p>
              <Link
                href="/ai-consulting"
                className="inline-block rounded-full bg-hunter-orange px-12 py-5 text-sm font-black uppercase tracking-widest text-black shadow-[0_0_30px_rgba(255,122,60,0.4)] transition-all hover:scale-105 hover:bg-white"
              >
                {t("CTA.button")}
              </Link>
            </GlassCard>
          </div>
        </section>

        {/* SEO Extended Content Footer */}
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
