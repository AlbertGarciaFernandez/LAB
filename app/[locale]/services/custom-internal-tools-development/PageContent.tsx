"use client";

import { useLocale, useTranslations } from "next-intl";
import HeroBackgroundOrnaments from "@/components/HeroBackgroundOrnaments";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { Link } from "@/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import { localizedUrl } from "@/utils/metadata";
import { m } from "framer-motion";
import Header from "@/components/layout/Header";
import { ChartBarIcon, LockKeyIcon, CalendarIcon } from "@phosphor-icons/react/dist/ssr";

export default function CustomInternalToolsContent() {
  const t = useTranslations("InternalTools");
  const locale = useLocale();
  const homeLabel = locale === "es" ? "Inicio" : locale === "nl" ? "Start" : "Home";
  const servicesLabel = locale === "es" ? "Servicios" : locale === "nl" ? "Diensten" : "Services";
  const breadcrumbLabel =
    locale === "es"
      ? "Herramientas Internas Personalizadas"
      : locale === "nl"
        ? "Maatwerk Interne Tools"
        : "Custom Internal Tools";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Internal Tools Development",
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
      "Expert developer of custom internal tools, admin panels, and operation dashboards. Scale your business without per-user fees in the Netherlands.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Internal Tools Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Admin Panels" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Operation Dashboards" } },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Workflow Automation Tools" },
        },
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
        name: servicesLabel,
        item: localizedUrl(locale, "/services"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: breadcrumbLabel,
        item: localizedUrl(locale, "/services/custom-internal-tools-development"),
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
        <section className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center md:py-32">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-block rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 font-mono text-xs text-purple-400 backdrop-blur-md md:text-sm"
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
            <span className="neon-glow-orange bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              {t("Hero.title.highlight")}
            </span>
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-2xl"
            dangerouslySetInnerHTML={{ __html: t.raw("Hero.description") }}
          />

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/#contact"
              className="rounded-full bg-purple-600 px-10 py-5 text-sm font-black uppercase tracking-widest text-white shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all hover:scale-105 hover:bg-purple-500"
            >
              {t("Hero.cta")}
            </Link>
          </m.div>
        </section>

        {/* Comparison Section (Custom vs Low Code) */}
        <section className="relative z-10 border-y border-white/5 bg-surface-dark/10 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-16 text-center text-4xl font-black uppercase tracking-tighter">
              {t("Comparison.title")}
            </h2>
            <div className="grid gap-12 md:grid-cols-2">
              {/* Low Code (Bad) */}
              <GlassCard
                className="border-red-500/20 bg-red-900/5 p-10 opacity-70 transition-all hover:bg-red-900/10"
                hoverEffect={false}
              >
                <h3 className="mb-8 text-3xl font-black uppercase italic text-red-500">
                  {t("Comparison.lowcode.title")}
                </h3>
                <ul className="space-y-6">
                  {(t.raw("Comparison.lowcode.points") as string[]).map((point) => (
                    <li key={point} className="flex gap-4 text-lg text-gray-400">
                      <span className="shrink-0 font-bold text-red-500">✕</span> {point}
                    </li>
                  )) || null}
                </ul>
              </GlassCard>

              {/* Custom (Good) */}
              <GlassCard
                className="relative overflow-hidden border-purple-500/30 bg-purple-900/10 p-10 ring-2 ring-purple-500/20"
                hoverEffect={true}
                glowColor="orange"
              >
                <div className="absolute right-0 top-0 bg-purple-500 px-6 py-2 text-xs font-black uppercase tracking-widest text-black">
                  {t("Comparison.recommended")}
                </div>
                <h3 className="mb-8 text-3xl font-black uppercase italic text-white">
                  {t("Comparison.custom.title")}
                </h3>
                <ul className="space-y-6">
                  {(t.raw("Comparison.custom.points") as string[]).map((point) => (
                    <li key={point} className="flex gap-4 text-lg font-medium text-white">
                      <span className="shrink-0 font-bold text-purple-400">✓</span> {point}
                    </li>
                  )) || null}
                </ul>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Tools We Build Grid */}
        <section className="relative z-10 py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-black uppercase tracking-tighter md:text-5xl">
                {t("Tools.title")}
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <GlassCard
                className="p-10 hover:bg-white/[0.02]"
                hoverEffect={true}
                glowColor="orange"
              >
                <div className="mb-8">
                  <ChartBarIcon size={48} className="text-purple-400" />
                </div>
                <h3 className="mb-4 text-3xl font-black uppercase tracking-tight">
                  {t("Tools.dashboards.title")}
                </h3>
                <p className="text-lg leading-relaxed text-gray-400">
                  {t("Tools.dashboards.desc")}
                </p>
              </GlassCard>
              <GlassCard
                className="border-purple-500/20 p-10"
                hoverEffect={true}
                glowColor="orange"
              >
                <div className="mb-8">
                  <LockKeyIcon size={48} className="text-purple-400" />
                </div>
                <h3 className="mb-4 text-3xl font-black uppercase tracking-tight">
                  {t("Tools.portals.title")}
                </h3>
                <p className="text-lg leading-relaxed text-gray-400">{t("Tools.portals.desc")}</p>
              </GlassCard>
              <GlassCard
                className="p-10 hover:bg-white/[0.02]"
                hoverEffect={true}
                glowColor="orange"
              >
                <div className="mb-8">
                  <CalendarIcon size={48} className="text-purple-400" />
                </div>
                <h3 className="mb-4 text-3xl font-black uppercase tracking-tight">
                  {t("Tools.resource.title")}
                </h3>
                <p className="text-lg leading-relaxed text-gray-400">{t("Tools.resource.desc")}</p>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="relative z-10 border-t border-white/5 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-black uppercase tracking-tighter md:text-5xl">
                {t("Process.title")}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-400">{t("Process.subtitle")}</p>
            </div>
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
                    className="bg-white/2 flex gap-6 rounded-2xl border border-white/5 p-8 transition-colors hover:border-purple-500/20"
                  >
                    <span className="shrink-0 font-mono text-4xl font-black text-purple-400/30">
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
              <GlassCard key={item.q} className="group p-8" hoverEffect={true} glowColor="orange">
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
        <section className="relative z-10 border-t border-white/5 bg-near-black/50 py-24 text-center">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="mb-6 text-3xl font-black uppercase tracking-tighter md:text-5xl">
              {t("CTA.title")}
            </h2>
            <p className="mb-10 text-lg text-gray-400">{t("CTA.subtitle")}</p>
            <Link
              href="/ai-consulting"
              className="inline-block rounded-full bg-purple-600 px-10 py-5 text-sm font-black uppercase tracking-widest text-white shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all hover:scale-105 hover:bg-purple-500"
            >
              {t("CTA.button")}
            </Link>
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
