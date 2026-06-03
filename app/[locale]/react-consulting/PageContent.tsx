"use client";

import { useLocale, useTranslations } from "next-intl";
import HeroBackgroundOrnaments from "@/components/HeroBackgroundOrnaments";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { Link } from "@/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import { m } from "framer-motion";
import Header from "@/components/layout/Header";
import {
  MagnifyingGlassIcon,
  TreeStructureIcon,
  RocketIcon,
  ChartLineUpIcon,
  CodeIcon,
  LightningIcon,
} from "@phosphor-icons/react/dist/ssr";
import { localizedUrl } from "@/utils/metadata";
import { getCommonBreadcrumbLabels, getLocaleValue } from "../_shared/localeCopy";

const metrics = [
  { value: "40%", label: "faster LCP after audit" },
  { value: "12+", label: "codebases audited" },
  { value: "3.2s→0.8s", label: "avg load time improvement" },
  { value: "98", label: "Lighthouse score achieved" },
];

const techStack = [
  "React 18",
  "TypeScript",
  "Next.js",
  "Zustand",
  "TanStack Query",
  "Vite",
  "Vitest",
  "React Testing Library",
  "Storybook",
  "Tailwind CSS",
  "Framer Motion",
  "Redux Toolkit",
];

const lighthouseBefore = [
  { label: "Performance", score: 42 },
  { label: "Accessibility", score: 67 },
  { label: "Best Practices", score: 58 },
  { label: "SEO", score: 71 },
];

const lighthouseAfter = [
  { label: "Performance", score: 98 },
  { label: "Accessibility", score: 100 },
  { label: "Best Practices", score: 100 },
  { label: "SEO", score: 98 },
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ReactConsultingContent() {
  const locale = useLocale();
  const t = useTranslations("ReactConsulting");
  const labels = getCommonBreadcrumbLabels(locale);
  const breadcrumbLabel = getLocaleValue(locale, {
    en: "React Consulting",
    es: "Consultoría React",
    nl: "React Consulting",
  });

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "React Consulting Services",
    provider: {
      "@type": "Organization",
      name: "CodeHunter Lab",
      url: "https://www.codehunterlab.com",
    },
    areaServed: ["Netherlands", "Leiden", "Amsterdam", "Rotterdam", "Den Haag"],
    description:
      "Senior React consulting including codebase audits, architecture design, performance optimization, and React migration services.",
    serviceType: "React Frontend Consulting",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "React Consulting Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "React Codebase Audit",
            description:
              "Comprehensive audit of React codebase for performance, architecture, and best practices.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "React Architecture Design",
            description: "Scalable React architecture design and implementation guidance.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "React Performance Optimization",
            description:
              "Performance optimization for React applications including LCP, FCP, and Core Web Vitals.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "React Migration Services",
            description:
              "Migration from legacy React versions or other frameworks to modern React.",
          },
        },
      ],
    },
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
      { "@type": "ListItem", position: 1, name: labels.home, item: localizedUrl(locale) },
      {
        "@type": "ListItem",
        position: 2,
        name: breadcrumbLabel,
        item: localizedUrl(locale, "/react-consulting"),
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

        {/* Hero Section - Split Layout */}
        <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-[3fr_2fr]">
            <div>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 inline-block rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-1.5 font-mono text-xs text-blue-400 backdrop-blur-md md:text-sm"
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
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  {t("Hero.title.highlight")}
                </span>
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
                  className="rounded-full bg-blue-500 px-10 py-5 text-sm font-black uppercase tracking-widest text-white shadow-[0_0_30px_rgba(96,165,250,0.4)] transition-all hover:scale-105 hover:bg-blue-400"
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
            </div>

            <m.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden lg:block"
            >
              <div className="rounded-2xl border border-blue-400/20 bg-surface-dark p-6 shadow-[0_0_60px_rgba(96,165,250,0.15)]">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/60" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                  <div className="h-3 w-3 rounded-full bg-green-500/60" />
                  <span className="ml-2 font-mono text-xs text-gray-500">usePerformance.ts</span>
                </div>
                <pre className="overflow-x-auto font-mono text-sm leading-relaxed">
                  <code>
                    <span className="text-indigo-400">import</span>
                    <span className="text-gray-300"> {"{ "}</span>
                    <span className="text-blue-400">useCallback</span>
                    <span className="text-gray-300">{" } "}</span>
                    <span className="text-indigo-400">from</span>
                    <span className="text-green-400"> &apos;react&apos;</span>
                    {"\n\n"}
                    <span className="text-indigo-400">export const</span>
                    <span className="text-blue-400"> useOptimizedRender</span>
                    <span className="text-gray-300"> = () =&gt; {"{"}</span>
                    {"\n"}
                    <span className="text-gray-300"> </span>
                    <span className="text-indigo-400">const</span>
                    <span className="text-blue-400"> metrics</span>
                    <span className="text-gray-300"> = </span>
                    <span className="text-blue-400">useCallback</span>
                    <span className="text-gray-300">({"()"}</span>
                    <span className="text-indigo-400"> =&gt;</span>
                    <span className="text-gray-300"> {"{"}</span>
                    {"\n"}
                    <span className="text-gray-300"> </span>
                    <span className="text-indigo-400">return</span>
                    <span className="text-gray-300"> {"{"}</span>
                    {"\n"}
                    <span className="text-gray-300"> </span>
                    <span className="text-blue-300">lcp</span>
                    <span className="text-gray-300">: </span>
                    <span className="text-green-400">&apos;0.8s&apos;</span>
                    <span className="text-gray-300">,</span>
                    {"\n"}
                    <span className="text-gray-300"> </span>
                    <span className="text-blue-300">score</span>
                    <span className="text-gray-300">: </span>
                    <span className="text-orange-400">98</span>
                    <span className="text-gray-300">,</span>
                    {"\n"}
                    <span className="text-gray-300"> {"}"}</span>
                    {"\n"}
                    <span className="text-gray-300"> {"}"}), [])</span>
                    {"\n\n"}
                    <span className="text-gray-300"> </span>
                    <span className="text-indigo-400">return</span>
                    <span className="text-gray-300"> metrics</span>
                    {"\n"}
                    <span className="text-gray-300">{"}"}</span>
                  </code>
                </pre>
              </div>
            </m.div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="relative z-10 border-y border-white/5 bg-surface-dark/30 py-16">
          <m.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 md:grid-cols-4"
          >
            {metrics.map((metric) => (
              <m.div key={metric.label} variants={staggerItem}>
                <GlassCard hoverEffect glowColor="blue" className="text-center">
                  <p className="mb-2 text-4xl font-black text-blue-400 md:text-5xl">
                    {metric.value}
                  </p>
                  <p className="text-sm text-gray-400">{metric.label}</p>
                </GlassCard>
              </m.div>
            ))}
          </m.div>
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
                {t("Services.title", { defaultValue: "Our Services" })}
              </h2>
            </m.div>

            <m.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-8 md:grid-cols-3"
            >
              <m.div variants={staggerItem}>
                <GlassCard hoverEffect glowColor="blue" className="flex h-full flex-col p-10">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10">
                    <MagnifyingGlassIcon size={28} className="text-blue-400" />
                  </div>
                  <h3 className="mb-4 text-2xl font-black uppercase tracking-tight text-white">
                    {t("Services.audit.title")}
                  </h3>
                  <p className="flex-grow text-lg leading-relaxed text-gray-400">
                    {t("Services.audit.description")}
                  </p>
                </GlassCard>
              </m.div>

              <m.div variants={staggerItem}>
                <GlassCard
                  hoverEffect
                  glowColor="blue"
                  className="flex h-full flex-col border-blue-400/30 bg-blue-400/5 p-10 shadow-[0_0_50px_rgba(96,165,250,0.1)]"
                >
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/40 bg-blue-400/20">
                    <TreeStructureIcon size={28} className="text-blue-400" />
                  </div>
                  <h3 className="mb-4 text-2xl font-black uppercase tracking-tight text-white">
                    {t("Services.architecture.title")}
                  </h3>
                  <p className="flex-grow text-lg leading-relaxed text-gray-400">
                    {t("Services.architecture.description")}
                  </p>
                </GlassCard>
              </m.div>

              <m.div variants={staggerItem}>
                <GlassCard hoverEffect glowColor="blue" className="flex h-full flex-col p-10">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10">
                    <RocketIcon size={28} className="text-blue-400" />
                  </div>
                  <h3 className="mb-4 text-2xl font-black uppercase tracking-tight text-white">
                    {t("Services.migration.title")}
                  </h3>
                  <p className="flex-grow text-lg leading-relaxed text-gray-400">
                    {t("Services.migration.description")}
                  </p>
                </GlassCard>
              </m.div>
            </m.div>
          </div>
        </section>

        {/* Performance Audit Visual - Before/After */}
        <section className="relative z-10 border-y border-white/5 bg-surface-dark/30 py-32">
          <div className="mx-auto max-w-6xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16 text-center"
            >
              <p className="mb-4 font-mono text-sm uppercase tracking-widest text-blue-400">
                Real Results
              </p>
              <h2 className="text-4xl font-black uppercase tracking-tighter md:text-6xl">
                Lighthouse Scores
              </h2>
            </m.div>

            <div className="grid gap-8 md:grid-cols-2">
              <m.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <GlassCard hoverEffect={false} className="p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-red-500" />
                    <h3 className="text-xl font-bold uppercase text-white/70">
                      {getLocaleValue(locale, {
                        en: "Before Audit",
                        es: "Antes de la auditoría",
                        nl: "Voor de audit",
                      })}
                    </h3>
                  </div>
                  <div className="space-y-5">
                    {lighthouseBefore.map((item) => (
                      <div key={item.label}>
                        <div className="mb-2 flex justify-between text-sm">
                          <span className="text-gray-400">{item.label}</span>
                          <span className="font-mono text-red-400">{item.score}</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/5">
                          <m.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.score}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="h-full rounded-full bg-gradient-to-r from-red-500 to-orange-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </m.div>

              <m.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <GlassCard hoverEffect={false} className="border-blue-400/20 bg-blue-400/5 p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-green-500" />
                    <h3 className="text-xl font-bold uppercase text-white">
                      {getLocaleValue(locale, {
                        en: "After Audit",
                        es: "Después de la auditoría",
                        nl: "Na de audit",
                      })}
                    </h3>
                  </div>
                  <div className="space-y-5">
                    {lighthouseAfter.map((item) => (
                      <div key={item.label}>
                        <div className="mb-2 flex justify-between text-sm">
                          <span className="text-gray-400">{item.label}</span>
                          <span className="font-mono text-green-400">{item.score}</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/5">
                          <m.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.score}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full rounded-full bg-gradient-to-r from-blue-400 to-green-400"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </m.div>
            </div>
          </div>
        </section>

        {/* Tech Stack Compatibility */}
        <section className="relative z-10 py-32">
          <div className="mx-auto max-w-7xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16 text-center"
            >
              <p className="mb-4 font-mono text-sm uppercase tracking-widest text-blue-400">
                Compatibility
              </p>
              <h2 className="text-4xl font-black uppercase tracking-tighter md:text-6xl">
                Tech Stack
              </h2>
            </m.div>

            <m.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
            >
              {techStack.map((tech) => (
                <m.div key={tech} variants={staggerItem}>
                  <GlassCard hoverEffect glowColor="blue" className="p-4 text-center">
                    <CodeIcon size={24} className="mx-auto mb-2 text-blue-400" />
                    <p className="text-sm font-medium text-gray-300">{tech}</p>
                  </GlassCard>
                </m.div>
              ))}
            </m.div>
          </div>
        </section>

        {/* Process Section - Horizontal Timeline */}
        <section className="relative z-10 border-y border-white/5 bg-surface-dark/30 py-32">
          <div className="mx-auto max-w-7xl px-6">
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

            <div className="relative">
              <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-blue-400/20 via-blue-400/50 to-blue-400/20 md:block" />

              <m.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-8 md:grid-cols-4"
              >
                {[0, 1, 2, 3].map((step) => (
                  <m.div key={step} variants={staggerItem} className="relative">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-blue-400/30 bg-surface-dark">
                      <span className="font-mono text-lg font-black text-blue-400">
                        0{step + 1}
                      </span>
                    </div>
                    <GlassCard hoverEffect glowColor="blue" className="p-6">
                      <h3 className="mb-2 text-lg font-black uppercase tracking-tight text-white">
                        {t(`Process.steps.${step}.title`)}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-400">
                        {t(`Process.steps.${step}.desc`)}
                      </p>
                    </GlassCard>
                  </m.div>
                ))}
              </m.div>
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

          <m.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {(t.raw("FAQ.questions") as Array<{ q: string; a: string }>).map((item) => (
              <m.div key={item.q} variants={staggerItem}>
                <GlassCard hoverEffect glowColor="blue" className="p-0">
                  <details className="group">
                    <summary className="flex cursor-pointer items-center justify-between p-6 text-left">
                      <h3 className="pr-4 text-lg font-bold text-white transition-colors group-open:text-blue-400">
                        {item.q}
                      </h3>
                      <LightningIcon
                        size={20}
                        className="flex-shrink-0 text-blue-400 transition-transform group-open:rotate-180"
                      />
                    </summary>
                    <div className="border-t border-white/5 px-6 pb-6 pt-4">
                      <p className="leading-relaxed text-gray-400">{item.a}</p>
                    </div>
                  </details>
                </GlassCard>
              </m.div>
            ))}
          </m.div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-24">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl px-6 text-center"
          >
            <GlassCard className="border-blue-400/20 bg-blue-400/5 p-16" hoverEffect={false}>
              <ChartLineUpIcon size={48} className="mx-auto mb-6 text-blue-400" />
              <p className="mb-6 font-mono text-sm uppercase tracking-widest text-blue-400">
                {t("CTA.badge")}
              </p>
              <h2 className="mb-6 text-4xl font-black uppercase tracking-tighter md:text-5xl">
                {t("CTA.title")}
              </h2>
              <p className="mb-10 text-lg leading-relaxed text-gray-400">{t("CTA.subtitle")}</p>
              <Link
                href="#contact"
                className="inline-block rounded-full bg-blue-500 px-12 py-5 text-sm font-black uppercase tracking-widest text-white shadow-[0_0_30px_rgba(96,165,250,0.4)] transition-all hover:scale-105 hover:bg-blue-400"
              >
                {t("CTA.button")}
              </Link>
            </GlassCard>
          </m.div>
        </section>

        {/* SEO Footer */}
        <footer className="relative z-10 border-t border-white/5 bg-black/40 py-20">
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
