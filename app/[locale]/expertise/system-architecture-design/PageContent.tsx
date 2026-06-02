"use client";

import { useLocale, useTranslations } from "next-intl";
import HeroBackgroundOrnaments from "@/components/HeroBackgroundOrnaments";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { Link } from "@/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import { m } from "framer-motion";
import Header from "@/components/layout/Header";
import {
  TreeStructureIcon,
  TrendUpIcon,
  NetworkIcon,
  LightningIcon,
  CloudIcon,
  RobotIcon,
  ArrowsClockwiseIcon,
  CheckIcon,
  XIcon,
} from "@phosphor-icons/react/dist/ssr";
import { localizedUrl } from "@/utils/metadata";
import { getCommonBreadcrumbLabels, getLocaleValue } from "../../_shared/localeCopy";

const useCaseIcons = [
  TreeStructureIcon,
  TrendUpIcon,
  NetworkIcon,
  LightningIcon,
  CloudIcon,
  RobotIcon,
];

const metrics = [
  { value: "10x", label: "Traffic spikes handled without degradation" },
  { value: "99.99%", label: "Uptime designed for" },
  { value: "<50ms", label: "P99 latency target" },
  { value: "40%", label: "Infrastructure cost reduction via optimization" },
];

const architecturePatterns = [
  {
    name: "Microservices",
    bestFor: "Large teams, independent scaling",
    pros: ["Independent deployment", "Technology flexibility", "Fault isolation"],
    cons: ["Network complexity", "Distributed tracing needed"],
  },
  {
    name: "Event-Driven",
    bestFor: "Real-time systems, async workflows",
    pros: ["Loose coupling", "Natural scalability", "Audit trail"],
    cons: ["Eventual consistency", "Debugging complexity"],
  },
  {
    name: "Serverless",
    bestFor: "Variable traffic, rapid prototyping",
    pros: ["Zero idle cost", "Auto-scaling", "Fast time-to-market"],
    cons: ["Cold starts", "Vendor lock-in"],
  },
  {
    name: "Modular Monolith",
    bestFor: "Startups, tight teams",
    pros: ["Simple deployment", "Easy debugging", "Fast local dev"],
    cons: ["Shared scaling", "Tight coupling risk"],
  },
];

const techStack = [
  { tech: "Next.js App Router", useCase: "Full-stack web apps" },
  { tech: "Node.js Microservices", useCase: "High-throughput APIs" },
  { tech: "PostgreSQL", useCase: "Relational data" },
  { tech: "Redis", useCase: "Caching & sessions" },
  { tech: "Docker", useCase: "Containerization" },
];

export default function SystemArchitecturePageContent() {
  const t = useTranslations("ExpertisePages.SystemArchitecture");
  const locale = useLocale();
  const labels = getCommonBreadcrumbLabels(locale);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "System Architecture Design",
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
      "Senior system architects in Leiden. We design scalable Next.js and cloud architectures for ambitious tech companies.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Architecture Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Scalable Next.js Architecture" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Cloud Infrastructure Design" },
        },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Technical Debt Audits" } },
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
          en: "System Architecture Design",
          es: "Diseño de Arquitectura de Sistemas",
          nl: "Systeemarchitectuur Ontwerp",
        }),
        item: localizedUrl(locale, "/expertise/system-architecture-design"),
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden bg-near-black text-white">
        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
        <div className="bg-noise" />
        <HeroBackgroundOrnaments />

        <section className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center md:py-32">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                  linear-gradient(rgba(255,122,60,0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,122,60,0.3) 1px, transparent 1px)
                `,
                  backgroundSize: "60px 60px",
                }}
              />
              <m.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[60px] top-[120px] h-3 w-3 rounded-full bg-hunter-orange"
              />
              <m.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute right-[180px] top-[60px] h-3 w-3 rounded-full bg-hunter-orange"
              />
              <m.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[120px] left-[240px] h-3 w-3 rounded-full bg-hunter-orange"
              />
              <m.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-[60px] right-[120px] h-3 w-3 rounded-full bg-hunter-orange"
              />
            </div>
          </div>

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
          >
            <Link
              href="#contact"
              className="rounded-full bg-hunter-orange px-10 py-5 text-sm font-black uppercase tracking-widest text-black shadow-[0_0_30px_rgba(255,122,60,0.4)] transition-all hover:scale-105 hover:bg-white"
            >
              {t("Hero.cta")}
            </Link>
          </m.div>
        </section>

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
                Performance Targets
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-400">
                Industry benchmarks we design for
              </p>
            </m.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {metrics.map((metric, idx) => (
                <m.div
                  key={metric.value}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard hoverEffect={true} glowColor="orange" className="p-8 text-center">
                    <div className="mb-3 text-4xl font-black text-hunter-orange md:text-5xl">
                      {metric.value}
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400">{metric.label}</p>
                  </GlassCard>
                </m.div>
              ))}
            </div>
          </div>
        </section>

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
                Architecture Patterns
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-400">
                Choose the right pattern for your system
              </p>
            </m.div>

            <div className="grid gap-8 md:grid-cols-2">
              {architecturePatterns.map((pattern, idx) => (
                <m.div
                  key={pattern.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard
                    hoverEffect={true}
                    glowColor="orange"
                    className="flex h-full flex-col p-8"
                  >
                    <div className="mb-6 flex h-32 items-center justify-center rounded-xl border border-white/5 bg-surface-dark p-4">
                      {pattern.name === "Microservices" && (
                        <div className="flex items-center gap-2">
                          <div className="flex flex-col gap-2">
                            <div className="h-8 w-12 rounded border border-hunter-orange/40 bg-hunter-orange/10" />
                            <div className="h-8 w-12 rounded border border-hunter-orange/40 bg-hunter-orange/10" />
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="h-px w-6 bg-hunter-orange/60" />
                            <div className="h-px w-6 bg-hunter-orange/60" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className="h-8 w-12 rounded border border-hunter-orange/40 bg-hunter-orange/10" />
                            <div className="h-8 w-12 rounded border border-hunter-orange/40 bg-hunter-orange/10" />
                          </div>
                        </div>
                      )}
                      {pattern.name === "Event-Driven" && (
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full border border-hunter-orange/40 bg-hunter-orange/10" />
                          <div className="flex flex-col gap-1">
                            <div className="h-px w-12 bg-hunter-orange/60" />
                            <div className="h-px w-16 bg-hunter-orange/40" />
                            <div className="h-px w-12 bg-hunter-orange/60" />
                          </div>
                          <div className="h-10 w-16 rounded border border-hunter-orange/40 bg-hunter-orange/10 px-2 py-1">
                            <div className="text-center text-[8px] text-hunter-orange">BUS</div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="h-px w-12 bg-hunter-orange/60" />
                            <div className="h-px w-16 bg-hunter-orange/40" />
                            <div className="h-px w-12 bg-hunter-orange/60" />
                          </div>
                          <div className="h-10 w-10 rounded-full border border-hunter-orange/40 bg-hunter-orange/10" />
                        </div>
                      )}
                      {pattern.name === "Serverless" && (
                        <div className="flex flex-col items-center gap-2">
                          <CloudIcon size={32} className="text-hunter-orange/60" />
                          <div className="flex gap-2">
                            <div className="h-6 w-8 rounded border border-hunter-orange/40 bg-hunter-orange/10" />
                            <div className="h-6 w-8 rounded border border-hunter-orange/40 bg-hunter-orange/10" />
                            <div className="h-6 w-8 rounded border border-hunter-orange/40 bg-hunter-orange/10" />
                          </div>
                        </div>
                      )}
                      {pattern.name === "Modular Monolith" && (
                        <div className="rounded-lg border-2 border-hunter-orange/40 p-2">
                          <div className="grid grid-cols-3 gap-1">
                            <div className="h-6 w-6 rounded bg-hunter-orange/20" />
                            <div className="h-6 w-6 rounded bg-hunter-orange/20" />
                            <div className="h-6 w-6 rounded bg-hunter-orange/20" />
                            <div className="h-6 w-6 rounded bg-hunter-orange/20" />
                            <div className="h-6 w-6 rounded bg-hunter-orange/20" />
                            <div className="h-6 w-6 rounded bg-hunter-orange/20" />
                          </div>
                        </div>
                      )}
                    </div>

                    <h3 className="mb-2 text-2xl font-bold text-white">{pattern.name}</h3>
                    <p className="mb-4 text-sm font-medium text-hunter-orange">
                      Best for: {pattern.bestFor}
                    </p>

                    <div className="mb-3 space-y-1">
                      {pattern.pros.map((pro) => (
                        <div key={pro} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckIcon size={14} className="shrink-0 text-green-400" />
                          {pro}
                        </div>
                      ))}
                    </div>
                    <div className="space-y-1">
                      {pattern.cons.map((con) => (
                        <div key={con} className="flex items-center gap-2 text-sm text-gray-400">
                          <XIcon size={14} className="shrink-0 text-red-400" />
                          {con}
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </m.div>
              ))}
            </div>
          </div>
        </section>

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
            </m.div>

            <div className="grid gap-8 md:grid-cols-3">
              {t.raw("Features.cards").map((card: { title: string; desc: string }, idx: number) => (
                <m.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard
                    hoverEffect={true}
                    glowColor="orange"
                    className="flex h-full flex-col p-10"
                  >
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
                Tech Stack Decision Matrix
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-400">When to use what</p>
            </m.div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {techStack.map((item, idx) => (
                <m.div
                  key={item.tech}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard hoverEffect={true} glowColor="orange" className="p-6">
                    <div className="mb-2 font-mono text-lg font-bold text-hunter-orange">
                      {item.tech}
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <ArrowsClockwiseIcon size={16} className="text-hunter-orange/60" />
                      <span className="text-sm">{item.useCase}</span>
                    </div>
                  </GlassCard>
                </m.div>
              ))}
            </div>
          </div>
        </section>

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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <GlassCard hoverEffect={true} glowColor="orange" className="p-8">
                      {Icon && <Icon size={32} className="mb-4 text-hunter-orange" />}
                      <h3 className="mb-2 text-lg font-bold text-white">{c.title}</h3>
                      <p className="text-sm leading-relaxed text-gray-400">{c.desc}</p>
                    </GlassCard>
                  </m.div>
                );
              })}
            </div>
          </div>
        </section>

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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white/2 flex gap-6 rounded-2xl border border-white/5 p-8 transition-colors hover:border-hunter-orange/20"
                  >
                    <span className="shrink-0 font-mono text-4xl font-black text-hunter-orange/30">
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

        <section className="relative z-10 border-t border-white/5 py-24">
          <div className="mx-auto max-w-4xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-3xl font-black uppercase tracking-tighter md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-400">
                Common questions about system architecture design
              </p>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <details className="group rounded-2xl border border-white/5 bg-surface-dark p-6 transition-all hover:border-hunter-orange/20">
                <summary className="flex cursor-pointer items-center justify-between text-lg font-bold text-white">
                  What is system architecture design?
                  <span className="ml-4 text-hunter-orange transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-gray-400">
                  System architecture design is the process of defining the structure, behavior, and
                  organization of a software system. It involves making high-level decisions about
                  technology selection, component interaction, scalability patterns, and deployment
                  strategies to ensure the system meets performance, reliability, and business
                  requirements.
                </p>
              </details>

              <details className="group rounded-2xl border border-white/5 bg-surface-dark p-6 transition-all hover:border-hunter-orange/20">
                <summary className="flex cursor-pointer items-center justify-between text-lg font-bold text-white">
                  When should I invest in architecture design?
                  <span className="ml-4 text-hunter-orange transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-gray-400">
                  Invest in architecture design early in your project lifecycle, especially when
                  building systems that need to scale, handle high traffic, or integrate with
                  multiple services. Proper architecture from the start prevents costly rewrites and
                  technical debt accumulation.
                </p>
              </details>

              <details className="group rounded-2xl border border-white/5 bg-surface-dark p-6 transition-all hover:border-hunter-orange/20">
                <summary className="flex cursor-pointer items-center justify-between text-lg font-bold text-white">
                  Microservices vs Monolith: which should I choose?
                  <span className="ml-4 text-hunter-orange transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-gray-400">
                  The choice depends on your team size, scaling needs, and deployment requirements.
                  Monoliths are simpler for small teams and startups. Microservices suit larger
                  organizations with independent teams that need to scale services separately and
                  deploy independently.
                </p>
              </details>

              <details className="group rounded-2xl border border-white/5 bg-surface-dark p-6 transition-all hover:border-hunter-orange/20">
                <summary className="flex cursor-pointer items-center justify-between text-lg font-bold text-white">
                  How do you ensure system reliability?
                  <span className="ml-4 text-hunter-orange transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-gray-400">
                  We design for reliability through redundancy, circuit breakers, health checks,
                  automated failover, comprehensive monitoring, and chaos engineering practices. Our
                  architectures target 99.99% uptime with graceful degradation under failure
                  conditions.
                </p>
              </details>

              <details className="group rounded-2xl border border-white/5 bg-surface-dark p-6 transition-all hover:border-hunter-orange/20">
                <summary className="flex cursor-pointer items-center justify-between text-lg font-bold text-white">
                  What technologies do you recommend?
                  <span className="ml-4 text-hunter-orange transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-gray-400">
                  Technology choices depend on your specific requirements. We commonly recommend
                  Next.js for full-stack applications, Node.js for APIs, PostgreSQL for relational
                  data, Redis for caching, and Docker for containerization. We always choose tools
                  based on your team expertise and system requirements.
                </p>
              </details>
            </m.div>
          </div>
        </section>

        <section className="relative z-10 border-t border-white/5 py-24 text-center">
          <div className="mx-auto max-w-3xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-3xl font-black uppercase tracking-tighter md:text-5xl">
                {t("CTA.title")}
              </h2>
              <p className="mb-10 text-lg text-gray-400">{t("CTA.subtitle")}</p>
              <Link
                href="#contact"
                className="rounded-full bg-hunter-orange px-10 py-5 text-sm font-black uppercase tracking-widest text-black shadow-[0_0_30px_rgba(255,122,60,0.4)] transition-all hover:scale-105 hover:bg-white"
              >
                {t("CTA.button")}
              </Link>
            </m.div>
          </div>
        </section>

        <footer className="relative z-10 overflow-hidden border-t border-white/5 bg-black/40 py-12">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="mx-auto max-w-4xl text-sm italic leading-relaxed text-gray-600">
              {t("SEO.description")}
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
