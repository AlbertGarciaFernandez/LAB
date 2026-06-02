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
  RobotIcon,
  LightningIcon,
  CheckIcon,
  WhatsappLogoIcon,
  FlowArrowIcon,
  BrainIcon,
  DatabaseIcon,
  PaperPlaneTiltIcon,
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

const metrics = [
  { value: "78%", label: "Leads respond within 5 minutes" },
  { value: "24/7", label: "Availability without staffing costs" },
  { value: "65%", label: "Cost reduction vs human agents" },
  { value: "3x", label: "Higher conversion on instant response" },
];

const agentTypes = [
  {
    name: "Support Agent",
    capabilities: [
      "FAQ Automation",
      "Troubleshooting",
      "Ticket Routing",
      "Knowledge Base",
      "Multi-language",
    ],
  },
  {
    name: "Sales Agent",
    capabilities: [
      "Lead Qualification",
      "Booking Meetings",
      "Product Recommendations",
      "Follow-ups",
      "CRM Integration",
    ],
  },
  {
    name: "Scheduling Agent",
    capabilities: [
      "Appointment Booking",
      "Calendar Sync",
      "Reminders",
      "Rescheduling",
      "Time Zone Handling",
    ],
  },
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
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "CRM Integration" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom AI Workflows" } },
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

        {/* Hero Section - Agent Conversation Flow */}
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
            className="mb-16"
          >
            <Link
              href="#contact"
              className="rounded-full bg-hunter-green px-10 py-5 text-sm font-black uppercase tracking-widest text-black shadow-[0_0_30px_rgba(0,230,162,0.4)] transition-all hover:scale-105 hover:bg-white"
            >
              {t("Hero.cta")}
            </Link>
          </m.div>

          {/* Animated Chat Flow */}
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full max-w-2xl"
          >
            <div className="rounded-2xl border border-white/10 bg-surface-dark/80 p-6 backdrop-blur-xl">
              <div className="space-y-4">
                <m.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/20">
                    <WhatsappLogoIcon size={16} className="text-blue-400" />
                  </div>
                  <div className="rounded-2xl rounded-tl-none bg-white/5 px-4 py-2 text-left">
                    <p className="text-sm text-gray-300">Hi, I need help with my order #12345</p>
                  </div>
                </m.div>

                <m.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  className="flex items-start justify-end gap-3"
                >
                  <div className="rounded-2xl rounded-tr-none bg-hunter-green/20 px-4 py-2 text-right">
                    <p className="text-sm text-white">
                      I found your order! It&apos;s currently in transit. Expected delivery:
                      tomorrow by 5pm.
                    </p>
                  </div>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-hunter-green/20">
                    <RobotIcon size={16} className="text-hunter-green" />
                  </div>
                </m.div>

                <m.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/20">
                    <WhatsappLogoIcon size={16} className="text-blue-400" />
                  </div>
                  <div className="rounded-2xl rounded-tl-none bg-white/5 px-4 py-2 text-left">
                    <p className="text-sm text-gray-300">Perfect, thanks!</p>
                  </div>
                </m.div>
              </div>
            </div>
          </m.div>
        </section>

        {/* Metrics Section */}
        <section className="relative z-10 border-t border-white/5 bg-near-black/50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {metrics.map((metric, idx) => (
                <m.div
                  key={metric.value}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard hoverEffect glowColor="green" className="p-8 text-center">
                    <div className="mb-2 text-5xl font-black text-hunter-green md:text-6xl">
                      {metric.value}
                    </div>
                    <p className="text-sm leading-tight text-gray-400">{metric.label}</p>
                  </GlassCard>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Agent Architecture Diagram */}
        <section className="relative z-10 border-t border-white/5 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-3xl font-black uppercase tracking-tighter md:text-5xl">
                {t("Features.title")}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-400">
                How our AI agents work behind the scenes
              </p>
            </m.div>

            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
                {/* WhatsApp Node */}
                <div className="flex flex-col items-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-surface-dark shadow-lg">
                    <WhatsappLogoIcon size={32} className="text-blue-400" />
                  </div>
                  <span className="mt-3 text-xs font-medium text-gray-400">WhatsApp</span>
                </div>

                {/* Connector */}
                <div className="hidden h-0.5 w-16 bg-gradient-to-r from-blue-400/50 to-hunter-green/50 md:block" />
                <div className="h-8 w-0.5 bg-gradient-to-b from-blue-400/50 to-hunter-green/50 md:hidden" />

                {/* n8n Engine - Central Node with Pulse */}
                <div className="relative flex flex-col items-center">
                  <div className="absolute inset-0 animate-pulse rounded-2xl bg-hunter-green/20 blur-xl" />
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-hunter-green/50 bg-surface-dark shadow-[0_0_40px_rgba(0,230,162,0.3)]">
                    <FlowArrowIcon size={36} className="text-hunter-green" />
                  </div>
                  <span className="relative mt-3 text-sm font-bold text-hunter-green">
                    n8n Engine
                  </span>
                </div>

                {/* Connector */}
                <div className="hidden h-0.5 w-16 bg-gradient-to-r from-hunter-green/50 to-purple-400/50 md:block" />
                <div className="h-8 w-0.5 bg-gradient-to-b from-hunter-green/50 to-purple-400/50 md:hidden" />

                {/* AI/LLM Node */}
                <div className="flex flex-col items-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-surface-dark shadow-lg">
                    <BrainIcon size={32} className="text-purple-400" />
                  </div>
                  <span className="mt-3 text-xs font-medium text-gray-400">AI / LLM</span>
                </div>

                {/* Connector */}
                <div className="hidden h-0.5 w-16 bg-gradient-to-r from-purple-400/50 to-orange-400/50 md:block" />
                <div className="h-8 w-0.5 bg-gradient-to-b from-purple-400/50 to-orange-400/50 md:hidden" />

                {/* CRM Node */}
                <div className="flex flex-col items-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-surface-dark shadow-lg">
                    <DatabaseIcon size={32} className="text-orange-400" />
                  </div>
                  <span className="mt-3 text-xs font-medium text-gray-400">CRM Update</span>
                </div>

                {/* Connector */}
                <div className="hidden h-0.5 w-16 bg-gradient-to-r from-orange-400/50 to-hunter-green/50 md:block" />
                <div className="h-8 w-0.5 bg-gradient-to-b from-orange-400/50 to-hunter-green/50 md:hidden" />

                {/* Response Node */}
                <div className="flex flex-col items-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-hunter-green/30 bg-surface-dark shadow-lg">
                    <PaperPlaneTiltIcon size={32} className="text-hunter-green" />
                  </div>
                  <span className="mt-3 text-xs font-medium text-hunter-green">Auto Response</span>
                </div>
              </div>
            </m.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="relative z-10 border-t border-white/5 bg-near-black/50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-3xl font-black uppercase tracking-tighter md:text-5xl">
                Core Capabilities
              </h2>
            </m.div>

            <div className="grid gap-8 md:grid-cols-3">
              {t.raw("Features.cards").map((card: { title: string; desc: string }, idx: number) => (
                <m.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard hoverEffect glowColor="green" className="flex h-full flex-col p-10">
                    <h3 className="mb-4 text-2xl font-bold uppercase tracking-tight text-white">
                      {card.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-400">{card.desc}</p>
                  </GlassCard>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Agent Types Comparison */}
        <section className="relative z-10 border-t border-white/5 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-3xl font-black uppercase tracking-tighter md:text-5xl">
                Agent Types
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-400">
                Choose the right AI agent for your business needs
              </p>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-x-auto"
            >
              <div className="grid gap-6 md:grid-cols-3">
                {agentTypes.map((agent) => (
                  <GlassCard
                    key={agent.name}
                    hoverEffect
                    glowColor="green"
                    className="flex flex-col p-8"
                  >
                    <h3 className="mb-6 text-xl font-bold text-hunter-green">{agent.name}</h3>
                    <ul className="space-y-3">
                      {agent.capabilities.map((cap) => (
                        <li key={cap} className="flex items-center gap-3">
                          <CheckIcon
                            size={18}
                            className="shrink-0 text-hunter-green"
                            weight="bold"
                          />
                          <span className="text-sm text-gray-300">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                ))}
              </div>
            </m.div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="relative z-10 border-t border-white/5 bg-near-black/50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-3xl font-black uppercase tracking-tighter md:text-5xl">
                {t("UseCases.title")}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-400">{t("UseCases.subtitle")}</p>
            </m.div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {t.raw("UseCases.cases").map((c: { title: string; desc: string }, idx: number) => {
                const Icon = useCaseIcons[idx];
                return (
                  <m.div
                    key={c.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <GlassCard hoverEffect glowColor="green" className="h-full p-8">
                      {Icon && <Icon size={32} className="mb-4 text-hunter-green" />}
                      <h3 className="mb-2 text-lg font-bold text-white">{c.title}</h3>
                      <p className="text-sm leading-relaxed text-gray-400">{c.desc}</p>
                    </GlassCard>
                  </m.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="relative z-10 border-t border-white/5 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-3xl font-black uppercase tracking-tighter md:text-5xl">
                {t("Process.title")}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-400">{t("Process.subtitle")}</p>
            </m.div>
            <div className="grid gap-8 md:grid-cols-2">
              {t
                .raw("Process.steps")
                .map((step: { number: string; title: string; desc: string }, idx: number) => (
                  <m.div
                    key={step.number}
                    initial={{ opacity: 0, y: 30 }}
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

        {/* FAQ - Accordion */}
        <section className="relative z-10 border-t border-white/5 bg-near-black/50 py-24">
          <div className="mx-auto max-w-3xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-3xl font-black uppercase tracking-tighter md:text-5xl">
                {t("FAQ.title")}
              </h2>
            </m.div>
            <div className="space-y-4">
              {t.raw("FAQ.items").map((item: { q: string; a: string }, idx: number) => (
                <m.details
                  key={item.q}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group rounded-2xl border border-white/5 bg-surface-dark/50 transition-colors open:border-hunter-green/30"
                >
                  <summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-bold text-white marker:hidden [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <LightningIcon
                      size={20}
                      className="shrink-0 text-hunter-green transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="leading-relaxed text-gray-400">{item.a}</p>
                  </div>
                </m.details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative z-10 border-t border-white/5 py-24 text-center">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl px-6"
          >
            <h2 className="mb-6 text-3xl font-black uppercase tracking-tighter md:text-5xl">
              {t("CTA.title")}
            </h2>
            <p className="mb-10 text-lg text-gray-400">{t("CTA.subtitle")}</p>
            <Link
              href="#contact"
              className="inline-block rounded-full bg-hunter-green px-10 py-5 text-sm font-black uppercase tracking-widest text-black shadow-[0_0_30px_rgba(0,230,162,0.4)] transition-all hover:scale-105 hover:bg-white"
            >
              {t("CTA.button")}
            </Link>
          </m.div>
        </section>

        {/* SEO Footer */}
        <footer className="relative z-10 overflow-hidden border-t border-white/5 bg-black/40 py-12">
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-7xl px-6 text-center"
          >
            <p className="mx-auto max-w-4xl text-sm italic leading-relaxed text-gray-600">
              {t("SEO.description")}
            </p>
          </m.div>
        </footer>
      </main>
    </>
  );
}
