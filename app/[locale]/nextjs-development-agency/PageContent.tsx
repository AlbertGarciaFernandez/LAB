"use client";

import { useTranslations } from "next-intl";
import HeroBackgroundOrnaments from "@/components/HeroBackgroundOrnaments";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { Link } from "@/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  CheckIcon,
  LightningIcon,
  ArrowsClockwiseIcon,
  StackIcon,
} from "@phosphor-icons/react/dist/ssr";
import { m } from "framer-motion";
import Header from "@/components/layout/Header";

export default function NextJsDevelopmentAgencyContent() {
  const t = useTranslations("NextJsAgency");

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `https://www.codehunterlab.com/en` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Next.js Development Agency",
        item: `https://www.codehunterlab.com/en/nextjs-development-agency`,
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden bg-near-black text-white">
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
            className="mb-8 text-4xl font-black leading-[0.9] tracking-tighter md:text-8xl"
          >
            {t("Hero.title.part1")} <br />
            <span className="text-gradient-enchanted neon-glow-green">
              {t("Hero.title.highlight")}
            </span>
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-2xl"
            dangerouslySetInnerHTML={{ __html: t.raw("Hero.description") }}
          />

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
              "Next.js 15",
              "App Router",
              "React 18",
              "TypeScript",
              "Supabase",
              "Vercel",
              "Tailwind CSS",
              "Prisma",
              "tRPC",
              "NextAuth",
            ].map((tech) => (
              <span
                key={tech}
                className="text-2xl font-black uppercase italic tracking-tighter text-white md:text-3xl"
              >
                {tech}
              </span>
            ))}
            {[
              "Next.js 15",
              "App Router",
              "React 18",
              "TypeScript",
              "Supabase",
              "Vercel",
              "Tailwind CSS",
              "Prisma",
              "tRPC",
              "NextAuth",
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
              <GlassCard hoverEffect={true} glowColor="green" className="flex h-full flex-col p-10">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-hunter-green/20 bg-hunter-green/10">
                  <LightningIcon size={28} className="text-hunter-green" />
                </div>
                <h3 className="mb-4 text-3xl font-black uppercase tracking-tight text-white">
                  {t("Services.ssr.title")}
                </h3>
                <p className="flex-grow text-lg leading-relaxed text-gray-400">
                  {t("Services.ssr.description")}
                </p>
              </GlassCard>

              <GlassCard
                hoverEffect={true}
                glowColor="green"
                className="flex h-full flex-col border-hunter-green/30 bg-hunter-green/5 p-10 shadow-[0_0_50px_rgba(0,230,162,0.1)]"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-hunter-green/40 bg-hunter-green/20">
                  <ArrowsClockwiseIcon size={28} className="text-hunter-green" />
                </div>
                <h3 className="mb-4 text-3xl font-black uppercase tracking-tight text-white">
                  {t("Services.migration.title")}
                </h3>
                <p className="flex-grow text-lg leading-relaxed text-gray-400">
                  {t("Services.migration.description")}
                </p>
              </GlassCard>

              <GlassCard hoverEffect={true} glowColor="green" className="flex h-full flex-col p-10">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-hunter-green/20 bg-hunter-green/10">
                  <StackIcon size={28} className="text-hunter-green" />
                </div>
                <h3 className="mb-4 text-3xl font-black uppercase tracking-tight text-white">
                  {t("Services.fullstack.title")}
                </h3>
                <p className="flex-grow text-lg leading-relaxed text-gray-400">
                  {t("Services.fullstack.description")}
                </p>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
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
                    <p className="leading-relaxed text-gray-400">{point.desc}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="relative z-10 py-32">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-16 text-center text-4xl font-black uppercase tracking-tighter md:text-6xl">
              {t("Process.title")}
            </h2>
            <div className="space-y-6">
              {[0, 1, 2, 3].map((step) => (
                <GlassCard
                  key={step}
                  className="group border-l-4 border-l-hunter-green p-8 transition-colors hover:bg-white/[0.02]"
                  hoverEffect={false}
                >
                  <div className="mb-4 flex items-start justify-between">
                    <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                      {t(`Process.steps.${step}.title`)}
                    </h3>
                    <span className="font-mono text-xl text-hunter-green opacity-30">
                      0{step + 1}
                    </span>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-400">
                    {t(`Process.steps.${step}.desc`)}
                  </p>
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

        {/* CTA Section */}
        <section className="relative z-10 py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <GlassCard
              className="border-hunter-green/20 bg-hunter-green/5 p-16"
              hoverEffect={false}
            >
              <p className="mb-6 font-mono text-sm uppercase tracking-widest text-hunter-green">
                {t("CTA.badge")}
              </p>
              <h2 className="mb-6 text-4xl font-black uppercase tracking-tighter md:text-5xl">
                {t("CTA.title")}
              </h2>
              <p className="mb-10 text-lg leading-relaxed text-gray-400">{t("CTA.subtitle")}</p>
              <Link
                href="/ai-consulting"
                className="inline-block rounded-full bg-hunter-green px-12 py-5 text-sm font-black uppercase tracking-widest text-black shadow-[0_0_30px_rgba(0,230,162,0.4)] transition-all hover:scale-105 hover:bg-white"
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
