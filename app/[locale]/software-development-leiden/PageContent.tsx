"use client";

import { useLocale, useTranslations } from "next-intl";
import HeroBackgroundOrnaments from "@/components/HeroBackgroundOrnaments";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { Link } from "@/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import { localizedUrl } from "@/utils/metadata";
import { m } from "framer-motion";
import Header from "@/components/layout/Header";

export default function SoftwareDevelopmentLeidenContent() {
  const t = useTranslations("SoftwareLeiden");
  const locale = useLocale();
  const breadcrumbLabel =
    locale === "es"
      ? "Desarrollo de Software Leiden"
      : locale === "nl"
        ? "Softwareontwikkeling Leiden"
        : "Software Development Leiden";
  const homeLabel = locale === "es" ? "Inicio" : locale === "nl" ? "Start" : "Home";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Software Development",
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
      "Your local software development partner in Leiden. We build custom web apps, scalable e-commerce solutions, and provide expert IT consulting in Zuid-Holland.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Custom Web Application Development" },
        },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-commerce Solutions" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Integration Services" } },
      ],
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: homeLabel, item: localizedUrl(locale) },
      {
        "@type": "ListItem",
        position: 2,
        name: breadcrumbLabel,
        item: localizedUrl(locale, "/software-development-leiden"),
      },
    ],
  };

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
                  {t("Hero.cta.coffee")}
                </Link>
                <Link
                  href="#services"
                  className="rounded-xl border border-white/10 bg-white/5 px-10 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-xl transition-all hover:bg-white/10"
                >
                  {t("Hero.cta.services")}
                </Link>
              </m.div>
            </div>

            <m.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            >
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-hunter-green">
                  Studio Stack
                </span>
                <span className="h-2 w-2 rounded-full bg-hunter-green shadow-[0_0_18px_rgba(0,230,162,0.8)]" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {["React", "Next.js", "TypeScript", "Node.js", "Supabase", "n8n"].map((tech) => (
                  <div
                    key={tech}
                    className="rounded-2xl border border-white/10 bg-near-black/70 p-4 font-mono text-sm text-gray-300"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </m.div>
          </div>
        </section>

        {/* Tech Stack Marquee (Visual Readability Boost) */}
        <section className="relative z-10 overflow-hidden border-y border-white/5 bg-near-black/50 py-12 backdrop-blur-sm">
          <div className="animate-marquee flex space-x-12 whitespace-nowrap opacity-40 grayscale transition-all duration-700 hover:grayscale-0">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Supabase",
              "OpenAI",
              "PostgreSQL",
              "TailwindCSS",
              "Framer Motion",
              "n8n",
            ].map((tech) => (
              <span
                key={tech}
                className="text-2xl font-black uppercase italic tracking-tighter text-white md:text-3xl"
              >
                {tech}
              </span>
            ))}
            {/* Repeat for continuous effect */}
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Supabase",
              "OpenAI",
              "PostgreSQL",
              "TailwindCSS",
              "Framer Motion",
              "n8n",
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
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-hunter-orange/20 bg-hunter-orange/10 text-3xl">
                  🚀
                </div>
                <h3 className="mb-4 text-3xl font-black uppercase tracking-tight text-white">
                  {t("Services.web.title")}
                </h3>
                <p className="flex-grow text-lg leading-relaxed text-gray-400">
                  {t("Services.web.description")}
                </p>
              </GlassCard>

              <GlassCard
                hoverEffect={true}
                glowColor="orange"
                className="flex h-full flex-col border-hunter-orange/30 bg-hunter-orange/5 p-10 shadow-[0_0_50px_rgba(255,122,60,0.1)]"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-hunter-orange/40 bg-hunter-orange/20 text-3xl">
                  🤖
                </div>
                <h3 className="mb-4 text-3xl font-black uppercase tracking-tight text-white">
                  {t("Services.ai.title")}
                </h3>
                <p
                  className="flex-grow text-lg leading-relaxed text-gray-400"
                  dangerouslySetInnerHTML={{ __html: t.raw("Services.ai.description") }}
                />
              </GlassCard>

              <GlassCard
                hoverEffect={true}
                glowColor="orange"
                className="flex h-full flex-col p-10"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-hunter-orange/20 bg-hunter-orange/10 text-3xl">
                  🛒
                </div>
                <h3 className="mb-4 text-3xl font-black uppercase tracking-tight text-white">
                  {t("Services.ecommerce.title")}
                </h3>
                <p className="flex-grow text-lg leading-relaxed text-gray-400">
                  {t("Services.ecommerce.description")}
                </p>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Advantage Section - Local Context */}
        <section className="relative z-10 border-y border-white/5 bg-surface-dark/30 py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
            <div>
              <h2 className="mb-10 text-4xl font-black uppercase tracking-tighter md:text-6xl">
                {t("Local.title")}
              </h2>
              <div className="space-y-8">
                {[
                  { icon: "🤝", key: "face" },
                  { icon: "🇳🇱", key: "market" },
                ].map((item) => (
                  <div key={item.key} className="group flex gap-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl transition-colors group-hover:border-hunter-orange/30 group-hover:bg-hunter-orange/20">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="mb-2 text-2xl font-bold uppercase tracking-tight text-hunter-orange">
                        {t(`Local.cards.${item.key}.title`)}
                      </h3>
                      <p
                        className="text-lg leading-relaxed text-gray-300"
                        dangerouslySetInnerHTML={{
                          __html: t.raw(`Local.cards.${item.key}.description`),
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <h2 className="mb-4 text-3xl font-black uppercase tracking-tight text-white/50">
                {t("Process.title")}
              </h2>
              {[0, 1, 2].map((step) => (
                <GlassCard
                  key={step}
                  className="group border-l-4 border-l-hunter-orange p-8 transition-colors hover:bg-white/[0.02]"
                  hoverEffect={false}
                >
                  <div className="mb-4 flex items-start justify-between">
                    <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                      {t(`Process.steps.${step}.title`)}
                    </h3>
                    <span className="font-mono text-xl text-hunter-orange opacity-30">
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

        {/* FAQ Section - SEO Goldmine */}
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
                glowColor="orange"
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

        {/* SEO Extended Content Footer (Hidden but crawlable) */}
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
