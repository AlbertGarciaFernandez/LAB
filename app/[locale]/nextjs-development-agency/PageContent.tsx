"use client";

import { useLocale, useTranslations } from "next-intl";
import HeroBackgroundOrnaments from "@/components/HeroBackgroundOrnaments";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { Link } from "@/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import { m } from "framer-motion";
import Header from "@/components/layout/Header";
import {
  ArrowsClockwiseIcon,
  LightningIcon,
  GlobeIcon,
  CodeIcon,
  ClockIcon,
  CpuIcon,
} from "@phosphor-icons/react/dist/ssr";
import { localizedUrl } from "@/utils/metadata";
import { getCommonBreadcrumbLabels, getLocaleValue } from "../_shared/localeCopy";

export default function NextJsDevelopmentAgencyContent() {
  const t = useTranslations("NextJsAgency");
  const locale = useLocale();
  const labels = getCommonBreadcrumbLabels(locale);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: labels.home, item: localizedUrl(locale) },
      {
        "@type": "ListItem",
        position: 2,
        name: getLocaleValue(locale, {
          en: "Next.js Development",
          es: "Desarrollo Next.js",
          nl: "Next.js Ontwikkeling",
        }),
        item: localizedUrl(locale, "/nextjs-development-agency"),
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Next.js Development Agency",
    provider: {
      "@type": "Organization",
      name: "CodeHunter Lab",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Next.js Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Server-Side Rendering Implementation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pages to App Router Migration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full-Stack Next.js Development",
          },
        },
      ],
    },
  };

  const metrics = [
    { value: "95+", label: "Lighthouse average score" },
    { value: "3x", label: "faster than Client-Side Rendering" },
    { value: "<100ms", label: "TTFB achieved" },
    { value: "15+", label: "App Router projects delivered" },
  ];

  const renderingStrategies = [
    {
      name: "SSR",
      icon: LightningIcon,
      useCase: "Dynamic content, user-specific data",
      performance: "Real-time rendering, moderate TTFB",
      whenToUse: "Dashboards, personalized content",
    },
    {
      name: "SSG",
      icon: GlobeIcon,
      useCase: "Static content, blogs, documentation",
      performance: "Fastest load times, CDN-cached",
      whenToUse: "Marketing pages, articles",
    },
    {
      name: "ISR",
      icon: ClockIcon,
      useCase: "Content that changes occasionally",
      performance: "Static speed with dynamic updates",
      whenToUse: "E-commerce, news sites",
    },
    {
      name: "RSC",
      icon: CpuIcon,
      useCase: "Data fetching, reduced client bundle",
      performance: "Zero client JS for data fetching",
      whenToUse: "Complex data-heavy components",
    },
  ];

  const migrationSteps = [
    {
      step: "01",
      title: "Audit & Planning",
      desc: "Analyze current Pages Router structure and identify migration paths",
    },
    {
      step: "02",
      title: "Route Migration",
      desc: "Convert pages to App Router with proper file structure",
    },
    {
      step: "03",
      title: "Data Fetching",
      desc: "Replace getServerSideProps/getStaticProps with Server Components",
    },
    {
      step: "04",
      title: "Testing & Optimization",
      desc: "Ensure feature parity and optimize performance metrics",
    },
  ];

  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden bg-near-black text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />

        <div className="bg-noise" />
        <HeroBackgroundOrnaments />

        {/* Hero Section with App Router Diagram */}
        <section className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center md:py-32">
          {/* Animated App Router Diagram Background */}
          <div className="absolute inset-0 -z-10 opacity-20">
            <svg className="h-full w-full" viewBox="0 0 800 600" fill="none">
              <m.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {[
                  { x1: 200, y1: 150, x2: 400, y2: 300 },
                  { x1: 600, y1: 150, x2: 400, y2: 300 },
                  { x1: 400, y1: 300, x2: 200, y2: 450 },
                  { x1: 400, y1: 300, x2: 600, y2: 450 },
                ].map((line, idx) => (
                  <m.line
                    key={idx}
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x2}
                    y2={line.y2}
                    stroke="#00E6A2"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.8 + idx * 0.2 }}
                  />
                ))}
                {[
                  { cx: 200, cy: 150, label: "layout" },
                  { cx: 600, cy: 150, label: "page" },
                  { cx: 400, cy: 300, label: "app" },
                  { cx: 200, cy: 450, label: "route" },
                  { cx: 600, cy: 450, label: "api" },
                ].map((node, idx) => (
                  <m.g key={idx}>
                    <m.circle
                      cx={node.cx}
                      cy={node.cy}
                      r="8"
                      fill="#00E6A2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 1 + idx * 0.1 }}
                    />
                    <m.text
                      x={node.cx}
                      y={node.cy + 25}
                      textAnchor="middle"
                      fill="#00E6A2"
                      fontSize="12"
                      fontFamily="monospace"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 + idx * 0.1 }}
                    >
                      {node.label}
                    </m.text>
                  </m.g>
                ))}
              </m.g>
            </svg>
          </div>

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
              href="#contact"
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

        {/* Metrics Section */}
        <section className="relative z-10 border-y border-white/5 bg-surface-dark/30 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-4">
              {metrics.map((metric, idx) => (
                <m.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard hoverEffect glowColor="green" className="p-8 text-center">
                    <div className="mb-2 text-5xl font-black text-hunter-green md:text-6xl">
                      {metric.value}
                    </div>
                    <div className="text-sm uppercase tracking-wider text-gray-400">
                      {metric.label}
                    </div>
                  </GlassCard>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="relative z-10 py-32">
          <div className="mx-auto max-w-7xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl font-black uppercase tracking-tighter md:text-6xl">
                {t("Services.title")}
              </h2>
            </m.div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: LightningIcon,
                  title: t("Services.ssr.title"),
                  desc: t("Services.ssr.description"),
                },
                {
                  icon: ArrowsClockwiseIcon,
                  title: t("Services.migration.title"),
                  desc: t("Services.migration.description"),
                },
                {
                  icon: CodeIcon,
                  title: t("Services.fullstack.title"),
                  desc: t("Services.fullstack.description"),
                },
              ].map((service, idx) => (
                <m.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard hoverEffect glowColor="green" className="flex h-full flex-col p-10">
                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-hunter-green/20 bg-hunter-green/10">
                      <service.icon size={28} className="text-hunter-green" />
                    </div>
                    <h3 className="mb-4 text-3xl font-black uppercase tracking-tight text-white">
                      {service.title}
                    </h3>
                    <p className="flex-grow text-lg leading-relaxed text-gray-400">
                      {service.desc}
                    </p>
                  </GlassCard>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Rendering Strategy Comparison */}
        <section className="relative z-10 border-y border-white/5 bg-surface-dark/30 py-32">
          <div className="mx-auto max-w-7xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-4xl font-black uppercase tracking-tighter md:text-6xl">
                Rendering Strategies
              </h2>
              <p className="text-xl text-gray-400">Choose the right approach for your use case</p>
            </m.div>

            <div className="grid gap-6 md:grid-cols-4">
              {renderingStrategies.map((strategy, idx) => (
                <m.div
                  key={strategy.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard hoverEffect glowColor="green" className="h-full p-8">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-hunter-green/20 bg-hunter-green/10">
                      <strategy.icon size={24} className="text-hunter-green" />
                    </div>
                    <h3 className="mb-4 text-2xl font-black text-hunter-green">{strategy.name}</h3>
                    <div className="space-y-4 text-sm">
                      <div>
                        <div className="mb-1 font-bold uppercase tracking-wider text-gray-500">
                          Use Case
                        </div>
                        <div className="text-gray-300">{strategy.useCase}</div>
                      </div>
                      <div>
                        <div className="mb-1 font-bold uppercase tracking-wider text-gray-500">
                          Performance
                        </div>
                        <div className="text-gray-300">{strategy.performance}</div>
                      </div>
                      <div>
                        <div className="mb-1 font-bold uppercase tracking-wider text-gray-500">
                          When to Use
                        </div>
                        <div className="text-gray-300">{strategy.whenToUse}</div>
                      </div>
                    </div>
                  </GlassCard>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Migration Roadmap */}
        <section className="relative z-10 py-32">
          <div className="mx-auto max-w-4xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-4xl font-black uppercase tracking-tighter md:text-6xl">
                Migration Roadmap
              </h2>
              <p className="text-xl text-gray-400">Pages Router → App Router</p>
            </m.div>

            <div className="relative space-y-8">
              <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-hunter-green/50 via-hunter-green/20 to-transparent md:left-1/2" />

              {migrationSteps.map((step, idx) => (
                <m.div
                  key={step.step}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex items-center gap-8 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="absolute left-8 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:left-1/2">
                    <div className="h-4 w-4 rounded-full border-2 border-hunter-green bg-near-black" />
                  </div>

                  <div
                    className={`ml-16 flex-1 md:ml-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}
                  >
                    <GlassCard hoverEffect glowColor="green" className="p-6">
                      <div className="mb-2 font-mono text-sm text-hunter-green">{step.step}</div>
                      <h3 className="mb-2 text-xl font-black uppercase tracking-tight text-white">
                        {step.title}
                      </h3>
                      <p className="text-gray-400">{step.desc}</p>
                    </GlassCard>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
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

        {/* Process Section */}
        <section className="relative z-10 py-32">
          <div className="mx-auto max-w-4xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl font-black uppercase tracking-tighter md:text-6xl">
                {t("Process.title")}
              </h2>
            </m.div>

            <div className="space-y-6">
              {[0, 1, 2, 3].map((step, idx) => (
                <m.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard
                    className="group border-l-4 border-l-hunter-green p-8 transition-colors hover:bg-white/[0.02]"
                    hoverEffect
                    glowColor="green"
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
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - Accordion */}
        <section className="relative z-10 mx-auto max-w-4xl px-6 py-32">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-black uppercase tracking-tighter md:text-6xl">
              {t("FAQ.title")}
            </h2>
            <p className="text-xl text-gray-400">{t("FAQ.subtitle")}</p>
          </m.div>

          <div className="space-y-4">
            {(t.raw("FAQ.questions") as Array<{ q: string; a: string }>).map((item, idx) => (
              <m.div
                key={item.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard hoverEffect glowColor="green" className="overflow-hidden p-0">
                  <details className="group">
                    <summary className="flex cursor-pointer items-center justify-between p-8 text-left transition-colors hover:bg-white/[0.02]">
                      <h3 className="pr-4 text-xl font-bold text-white">{item.q}</h3>
                      <span className="flex-shrink-0 text-2xl text-hunter-green transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <div className="border-t border-white/10 px-8 pb-8 pt-6">
                      <p className="text-lg leading-relaxed text-gray-400">{item.a}</p>
                    </div>
                  </details>
                </GlassCard>
              </m.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <GlassCard
                className="border-hunter-green/20 bg-hunter-green/5 p-16"
                hoverEffect
                glowColor="green"
              >
                <p className="mb-6 font-mono text-sm uppercase tracking-widest text-hunter-green">
                  {t("CTA.badge")}
                </p>
                <h2 className="mb-6 text-4xl font-black uppercase tracking-tighter md:text-5xl">
                  {t("CTA.title")}
                </h2>
                <p className="mb-10 text-lg leading-relaxed text-gray-400">{t("CTA.subtitle")}</p>
                <Link
                  href="#contact"
                  className="inline-block rounded-full bg-hunter-green px-12 py-5 text-sm font-black uppercase tracking-widest text-black shadow-[0_0_30px_rgba(0,230,162,0.4)] transition-all hover:scale-105 hover:bg-white"
                >
                  {t("CTA.button")}
                </Link>
              </GlassCard>
            </m.div>
          </div>
        </section>

        {/* SEO Footer */}
        <footer className="relative z-10 overflow-hidden border-t border-white/5 bg-black/40 py-20">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="mx-auto max-w-4xl text-sm italic leading-relaxed text-gray-600">
              {t("SEO.extendedDesc")}
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
