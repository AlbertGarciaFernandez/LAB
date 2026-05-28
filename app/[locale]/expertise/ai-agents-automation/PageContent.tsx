"use client";

import { useLocale, useTranslations } from "next-intl";
import HeroBackgroundOrnaments from "@/components/HeroBackgroundOrnaments";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { Link } from "@/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import { m } from "framer-motion";
import Header from "@/components/layout/Header";
import {
  TargetIcon,
  ChatCircleDotsIcon,
  CalendarCheckIcon,
  FunnelIcon,
  HandshakeIcon,
  ChartBarIcon,
} from "@phosphor-icons/react/dist/ssr";
import { localizedUrl } from "@/utils/metadata";
import { getCommonBreadcrumbLabels, getLocaleValue } from "../../_shared/localeCopy";

const useCaseIcons = [
  TargetIcon,
  ChatCircleDotsIcon,
  CalendarCheckIcon,
  FunnelIcon,
  HandshakeIcon,
  ChartBarIcon,
];

export default function AIAgentsPageContent() {
  const t = useTranslations("ExpertisePages.AIAgents");
  const locale = useLocale();
  const labels = getCommonBreadcrumbLabels(locale);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI Agent Development",
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
      "Deploy custom AI agents for customer support and sales. Top AI agency in the Netherlands for WhatsApp and Voice bots.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Agent Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "WhatsApp AI Agents" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Voice Calling Bots" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "n8n Workflow Automation" } },
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
          en: "AI Agents Automation",
          es: "Automatización de Agentes IA",
          nl: "AI-agents Automatisering",
        }),
        item: localizedUrl(locale, "/expertise/ai-agents-automation"),
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
            className="mb-8 text-4xl font-black leading-[0.9] tracking-tighter md:text-8xl"
          >
            {t("Hero.title.part1")} <br />
            <span className="text-gradient-green neon-glow-green">{t("Hero.title.highlight")}</span>
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
          >
            <Link
              href="/ai-consulting"
              className="rounded-full bg-hunter-green px-10 py-5 text-sm font-black uppercase tracking-widest text-black shadow-[0_0_30px_rgba(0,230,162,0.4)] transition-all hover:scale-105 hover:bg-white"
            >
              {t("Hero.cta")}
            </Link>
          </m.div>
        </section>

        {/* Features Grid */}
        <section className="relative z-10 border-t border-white/5 bg-near-black/50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-black uppercase tracking-tighter md:text-5xl">
                {t("Features.title")}
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {t.raw("Features.cards").map((card: { title: string; desc: string }) => (
                <GlassCard
                  key={card.title}
                  hoverEffect={true}
                  glowColor="green"
                  className="flex h-full flex-col p-10"
                >
                  <h3 className="mb-4 text-2xl font-bold uppercase tracking-tight text-white">
                    {card.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-400">{card.desc}</p>
                </GlassCard>
              ))}
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
                    className="bg-white/2 flex gap-6 rounded-2xl border border-white/5 p-8 transition-colors hover:border-hunter-green/20"
                  >
                    <span className="shrink-0 font-mono text-4xl font-black text-hunter-green/30">
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

        {/* Use Cases */}
        <section className="relative z-10 border-t border-white/5 bg-near-black/50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-black uppercase tracking-tighter md:text-5xl">
                {t("UseCases.title")}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-400">{t("UseCases.subtitle")}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {t.raw("UseCases.cases").map((c: { title: string; desc: string }, idx: number) => {
                const Icon = useCaseIcons[idx];
                return (
                  <GlassCard key={c.title} hoverEffect={true} glowColor="green" className="p-8">
                    {Icon && <Icon size={32} className="mb-4 text-hunter-green" />}
                    <h3 className="mb-2 text-lg font-bold text-white">{c.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-400">{c.desc}</p>
                  </GlassCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative z-10 border-t border-white/5 py-24">
          <div className="mx-auto max-w-3xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-black uppercase tracking-tighter md:text-5xl">
                {t("FAQ.title")}
              </h2>
            </div>
            <div className="space-y-6">
              {t.raw("FAQ.items").map((item: { q: string; a: string }) => (
                <div key={item.q} className="bg-white/2 rounded-2xl border border-white/5 p-8">
                  <h3 className="mb-3 text-lg font-bold text-white">{item.q}</h3>
                  <p className="leading-relaxed text-gray-400">{item.a}</p>
                </div>
              ))}
            </div>
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
              className="rounded-full bg-hunter-green px-10 py-5 text-sm font-black uppercase tracking-widest text-black shadow-[0_0_30px_rgba(0,230,162,0.4)] transition-all hover:scale-105 hover:bg-white"
            >
              {t("CTA.button")}
            </Link>
          </div>
        </section>

        {/* SEO Footer */}
        <footer className="relative z-10 overflow-hidden border-t border-white/5 bg-black/40 py-12">
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
