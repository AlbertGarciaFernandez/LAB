"use client";

import { useLocale, useTranslations } from "next-intl";
import HeroBackgroundOrnaments from "@/components/HeroBackgroundOrnaments";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { Link } from "@/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import { m } from "framer-motion";
import Header from "@/components/layout/Header";
import ContactSection from "@/components/sections/ContactSection";
import {
  ChartBarIcon,
  LockKeyIcon,
  CalendarIcon,
  FileTextIcon,
  DatabaseIcon,
  ArrowsClockwiseIcon,
} from "@phosphor-icons/react/dist/ssr";
import { localizedUrl } from "@/utils/metadata";
import { getCommonBreadcrumbLabels, getLocaleValue } from "../../_shared/localeCopy";

export default function CustomInternalToolsContent() {
  const t = useTranslations("InternalTools");
  const locale = useLocale();
  const labels = getCommonBreadcrumbLabels(locale);
  const servicesLabel = getLocaleValue(locale, {
    en: "Services",
    es: "Servicios",
    nl: "Diensten",
  });
  const breadcrumbLabel = getLocaleValue(locale, {
    en: "Custom Internal Tools",
    es: "Herramientas Internas Personalizadas",
    nl: "Maatwerk Interne Tools",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: getLocaleValue(locale, {
      en: "Custom Internal Tools Development",
      es: "Desarrollo de herramientas internas a medida",
      nl: "Ontwikkeling van maatwerk interne tools",
    }),
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
    description: getLocaleValue(locale, {
      en: "Custom ERP/CRM platforms, internal tools, admin panels, mobile workflows, and AI-ready operations dashboards for companies replacing manual work and disconnected SaaS.",
      es: "Plataformas ERP/CRM a medida, herramientas internas, paneles, flujos móviles y dashboards preparados para IA para empresas que sustituyen trabajo manual y SaaS desconectado.",
      nl: "Maatwerk ERP/CRM-platforms, interne tools, adminpanelen, mobiele workflows en AI-ready dashboards voor bedrijven die handwerk en losse SaaS vervangen.",
    }),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: getLocaleValue(locale, {
        en: "Internal Tools Services",
        es: "Servicios de herramientas internas",
        nl: "Interne-toolsdiensten",
      }),
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: getLocaleValue(locale, {
              en: "Custom ERP/CRM Platforms",
              es: "Plataformas ERP/CRM a medida",
              nl: "Maatwerk ERP/CRM-platforms",
            }),
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: getLocaleValue(locale, {
              en: "Operations Dashboards",
              es: "Cuadros de mando operativos",
              nl: "Operationele dashboards",
            }),
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: getLocaleValue(locale, {
              en: "Workflow Automation Tools",
              es: "Herramientas de automatización de flujos",
              nl: "Workflow-automatiseringstools",
            }),
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: getLocaleValue(locale, {
              en: "Resource Management Systems",
              es: "Sistemas de gestión de recursos",
              nl: "Resource-managementsystemen",
            }),
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: getLocaleValue(locale, {
              en: "Client Portals",
              es: "Portales de cliente",
              nl: "Klantportalen",
            }),
          },
        },
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

  const metrics = [
    { value: "12h", label: t("Metrics.timeSaved"), suffix: "/week" },
    { value: "€45K", label: t("Metrics.costReduction"), suffix: "/year" },
    { value: "€0", label: t("Metrics.licensingFees"), suffix: "" },
    { value: "30", label: t("Metrics.deliveryTime"), suffix: " days" },
  ];

  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Redis",
    "Docker",
    "AWS",
    "TailwindCSS",
    "Prisma",
  ];

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
              >
                <Link
                  href="#contact"
                  className="rounded-xl bg-hunter-green px-10 py-4 text-sm font-black uppercase tracking-widest text-near-black shadow-[0_0_30px_rgba(0,230,162,0.18)] transition-all hover:-translate-y-1 hover:bg-hunter-orange"
                >
                  {t("Hero.cta")}
                </Link>
              </m.div>
            </div>

            {/* Dashboard Mockup Preview */}
            <m.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-full"
            >
              <div className="rounded-2xl border border-hunter-green/20 bg-surface-dark/80 p-4 shadow-[0_0_60px_-15px_rgba(0,230,162,0.22)] backdrop-blur-xl">
                <div className="flex items-center gap-2 border-b border-white/5 pb-3">
                  <div className="h-3 w-3 rounded-full bg-red-500/60" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                  <div className="h-3 w-3 rounded-full bg-green-500/60" />
                  <span className="ml-4 font-mono text-xs text-gray-500">dashboard.internal</span>
                </div>
                <div className="grid grid-cols-4 gap-3 p-4">
                  <div className="col-span-1 rounded-lg bg-hunter-green/10 p-3">
                    <div className="mb-2 h-2 w-12 rounded bg-hunter-green/40" />
                    <div className="h-8 w-16 rounded bg-hunter-green/60" />
                  </div>
                  <div className="col-span-1 rounded-lg bg-hunter-orange/10 p-3">
                    <div className="mb-2 h-2 w-12 rounded bg-hunter-orange/40" />
                    <div className="h-8 w-16 rounded bg-hunter-orange/60" />
                  </div>
                  <div className="col-span-1 rounded-lg bg-white/10 p-3">
                    <div className="mb-2 h-2 w-12 rounded bg-white/30" />
                    <div className="h-8 w-16 rounded bg-white/40" />
                  </div>
                  <div className="col-span-1 rounded-lg bg-green-500/10 p-3">
                    <div className="mb-2 h-2 w-12 rounded bg-green-400/40" />
                    <div className="h-8 w-16 rounded bg-green-400/60" />
                  </div>
                  <div className="col-span-3 rounded-lg bg-white/5 p-4">
                    <div className="mb-3 h-2 w-24 rounded bg-white/20" />
                    <div className="flex h-24 items-end gap-2">
                      {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((h, i) => (
                        <m.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 0.5, delay: 0.8 + i * 0.05 }}
                          className="flex-1 rounded-t bg-gradient-to-t from-hunter-green/60 to-hunter-orange/60"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="col-span-1 space-y-2 rounded-lg bg-white/5 p-4">
                    <div className="h-2 w-full rounded bg-white/20" />
                    <div className="h-2 w-3/4 rounded bg-white/15" />
                    <div className="h-2 w-1/2 rounded bg-white/10" />
                    <div className="mt-4 h-16 w-16 rounded-full border-4 border-hunter-green/40" />
                  </div>
                </div>
              </div>
            </m.div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="relative z-10 border-y border-white/5 bg-surface-dark/10 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-4">
              {metrics.map((metric, idx) => (
                <m.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-2 text-4xl font-black text-hunter-green md:text-5xl">
                    {metric.value}
                    <span className="text-lg font-normal text-gray-500">{metric.suffix}</span>
                  </div>
                  <p className="text-sm text-gray-400">{metric.label}</p>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        <OperatingSystemSection
          title={t("OperatingSystem.title")}
          subtitle={t("OperatingSystem.subtitle")}
          items={t.raw("OperatingSystem.items") as string[]}
          aiLayer={{
            title: t("OperatingSystem.aiLayer.title"),
            desc: t("OperatingSystem.aiLayer.desc"),
          }}
        />

        {/* Excel → App Transformation Visual */}
        <section className="relative z-10 py-32">
          <div className="mx-auto max-w-7xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-3xl font-black uppercase tracking-tighter md:text-5xl">
                {t("Transformation.title")}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-400">
                {t("Transformation.subtitle")}
              </p>
            </m.div>

            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
              {/* Before - Spreadsheet */}
              <m.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <GlassCard
                  hoverEffect={false}
                  glowColor="none"
                  className="border-red-500/20 bg-red-900/5 p-6"
                >
                  <div className="mb-4 flex items-center gap-2">
                    <FileTextIcon size={24} className="text-red-400" />
                    <span className="font-mono text-sm text-red-400">
                      Before: Spreadsheet Chaos
                    </span>
                  </div>
                  <div className="space-y-1 font-mono text-xs">
                    <div className="grid grid-cols-4 gap-1">
                      <div className="rounded bg-gray-700/50 p-2 text-gray-400">A</div>
                      <div className="rounded bg-gray-700/50 p-2 text-gray-400">B</div>
                      <div className="rounded bg-gray-700/50 p-2 text-gray-400">C</div>
                      <div className="rounded bg-gray-700/50 p-2 text-gray-400">D</div>
                    </div>
                    {[1, 2, 3, 4, 5].map((row) => (
                      <div key={row} className="grid grid-cols-4 gap-1">
                        <div className="rounded bg-white/5 p-2 text-gray-500">{row}</div>
                        <div className="rounded bg-white/5 p-2 text-gray-500">Data_{row}</div>
                        <div
                          className={`rounded p-2 ${row === 3 ? "bg-red-500/20 text-red-400" : "bg-white/5 text-gray-500"}`}
                        >
                          {row === 3 ? "#REF!" : `=${row}*2`}
                        </div>
                        <div className="rounded bg-white/5 p-2 text-gray-500">{row * 100}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs text-red-400">
                    <span className="inline-block h-2 w-2 rounded-full bg-red-400" />
                    Version conflicts • Broken formulas • No access control
                  </div>
                </GlassCard>
              </m.div>

              {/* Arrow */}
              <m.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="hidden md:block"
              >
                <div className="flex flex-col items-center gap-2">
                  <ArrowsClockwiseIcon size={48} className="animate-spin-slow text-hunter-orange" />
                  <span className="font-mono text-xs text-hunter-orange">Transform</span>
                </div>
              </m.div>

              {/* After - Modern Dashboard */}
              <m.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <GlassCard
                  hoverEffect
                  glowColor="none"
                  className="border-hunter-green/30 bg-hunter-green/[0.06] p-6 hover:shadow-[0_25px_50px_-12px_rgba(0,230,162,0.25)]"
                >
                  <div className="mb-4 flex items-center gap-2">
                    <ChartBarIcon size={24} className="text-hunter-green" />
                    <span className="font-mono text-sm text-hunter-green">
                      After: Modern Dashboard
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-lg bg-hunter-green/10 p-3">
                      <div className="text-xs text-gray-400">Revenue</div>
                      <div className="text-lg font-bold text-white">€124K</div>
                    </div>
                    <div className="rounded-lg bg-hunter-orange/10 p-3">
                      <div className="text-xs text-gray-400">Growth</div>
                      <div className="text-lg font-bold text-white">+23%</div>
                    </div>
                  </div>
                  <div className="mt-3 flex h-16 items-end gap-1">
                    {[30, 50, 40, 70, 60, 80, 90].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-hunter-green to-hunter-orange"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs text-green-400">
                    <span className="inline-block h-2 w-2 rounded-full bg-green-400" />
                    Real-time • Secure • Scalable
                  </div>
                </GlassCard>
              </m.div>
            </div>

            {/* Improvement Metrics */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 grid gap-4 md:grid-cols-3"
            >
              {[
                { label: "Time Saved", value: "85%" },
                { label: "Error Reduction", value: "99%" },
                { label: "Team Adoption", value: "3x" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-hunter-green/20 bg-hunter-green/[0.04] p-4 text-center"
                >
                  <div className="text-2xl font-black text-hunter-green">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </m.div>
          </div>
        </section>

        {/* Tools We Build Grid */}
        <section className="relative z-10 border-t border-white/5 py-32">
          <div className="mx-auto max-w-7xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-3xl font-black uppercase tracking-tighter md:text-5xl">
                {t("Tools.title")}
              </h2>
            </m.div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: ChartBarIcon,
                  title: t("Tools.dashboards.title"),
                  desc: t("Tools.dashboards.desc"),
                },
                {
                  icon: LockKeyIcon,
                  title: t("Tools.portals.title"),
                  desc: t("Tools.portals.desc"),
                },
                {
                  icon: CalendarIcon,
                  title: t("Tools.resource.title"),
                  desc: t("Tools.resource.desc"),
                },
              ].map((tool, idx) => (
                <m.div
                  key={tool.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard
                    hoverEffect
                    glowColor="none"
                    className="h-full p-10 hover:shadow-[0_25px_50px_-12px_rgba(0,230,162,0.22)]"
                  >
                    <div className="mb-8">
                      <tool.icon size={48} className="text-hunter-green" />
                    </div>
                    <h3 className="mb-4 text-3xl font-black uppercase tracking-tight">
                      {tool.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-400">{tool.desc}</p>
                  </GlassCard>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tool Categories Showcase */}
        <section className="relative z-10 border-t border-white/5 bg-surface-dark/10 py-32">
          <div className="mx-auto max-w-7xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-3xl font-black uppercase tracking-tighter md:text-5xl">
                {t("Categories.title")}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-400">{t("Categories.subtitle")}</p>
            </m.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: DatabaseIcon, name: t("Categories.inventory") },
                { icon: CalendarIcon, name: t("Categories.scheduling") },
                { icon: ChartBarIcon, name: t("Categories.reporting") },
                { icon: LockKeyIcon, name: t("Categories.access") },
                { icon: FileTextIcon, name: t("Categories.documents") },
                { icon: ArrowsClockwiseIcon, name: t("Categories.workflows") },
              ].map((cat, idx) => (
                <m.div
                  key={cat.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard
                    hoverEffect
                    glowColor="none"
                    className="group p-6 hover:shadow-[0_25px_50px_-12px_rgba(255,122,60,0.18)]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-hunter-green/10 transition-colors group-hover:bg-hunter-orange/10">
                        <cat.icon size={24} className="text-hunter-green" />
                      </div>
                      <span className="text-lg font-bold text-white">{cat.name}</span>
                    </div>
                  </GlassCard>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Marquee */}
        <section className="relative z-10 overflow-hidden border-y border-white/5 py-8">
          <div className="animate-marquee flex gap-8 whitespace-nowrap">
            {[...techStack, ...techStack].map((tech, idx) => (
              <span key={idx} className="font-mono text-sm text-gray-500">
                {tech}
                <span className="ml-8 text-hunter-orange">•</span>
              </span>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="relative z-10 py-32">
          <div className="mx-auto max-w-7xl px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
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
                    className="flex gap-6 rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-colors hover:border-hunter-orange/20"
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

        {/* FAQ Section */}
        <section className="relative z-10 border-t border-white/5 py-32">
          <div className="mx-auto max-w-4xl px-6">
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
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                  <details className="group rounded-2xl border border-white/5 bg-white/[0.02] transition-colors hover:border-hunter-orange/20">
                    <summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-bold text-white [&::-webkit-details-marker]:hidden">
                      <span className="flex items-center gap-4">
                        <span className="text-hunter-green transition-transform group-open:rotate-90">
                          →
                        </span>
                        {item.q}
                      </span>
                      <span className="text-2xl text-hunter-orange transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <div className="border-t border-white/5 px-6 pb-6 pt-4">
                      <p className="text-lg leading-relaxed text-gray-400">{item.a}</p>
                    </div>
                  </details>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative z-10 border-t border-white/5 bg-near-black/50 py-24 text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl px-6"
          >
            <h2 className="mb-6 text-3xl font-black uppercase tracking-tighter md:text-5xl">
              {t("CTA.title")}
            </h2>
            <p className="mb-10 text-lg text-gray-400">{t("CTA.subtitle")}</p>
            <Link
              href="#contact"
              className="inline-block rounded-full bg-hunter-green px-10 py-5 text-sm font-black uppercase tracking-widest text-near-black shadow-[0_0_30px_rgba(0,230,162,0.22)] transition-all hover:scale-105 hover:bg-hunter-orange"
            >
              {t("CTA.button")}
            </Link>
          </m.div>
        </section>

        <ContactSection className="border-t border-white/5 bg-surface-dark/10" />

        {/* SEO Footer */}
        <footer className="relative z-10 border-t border-white/5 bg-black/40 py-12">
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

function OperatingSystemSection({
  title,
  subtitle,
  items,
  aiLayer,
}: {
  title: string;
  subtitle: string;
  items: string[];
  aiLayer: { title: string; desc: string };
}) {
  return (
    <section className="relative z-10 overflow-hidden border-b border-white/5 bg-near-black py-28">
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-hunter-green/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-16 h-80 w-80 rounded-full bg-hunter-orange/[0.05] blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:sticky lg:top-28"
        >
          <p className="mb-4 font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-green">
            ERP / CRM / AI
          </p>
          <h2 className="text-4xl font-black uppercase leading-none tracking-tighter md:text-6xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-400">{subtitle}</p>
          <SystemMapVisual />
        </m.div>

        <div className="space-y-5">
          <div className="grid gap-4 md:grid-cols-2">
            {items.map((item, index) => (
              <m.div
                key={item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                data-erp-crm-capability
              >
                <GlassCard
                  hoverEffect
                  glowColor="none"
                  className="group h-full border-hunter-green/10 bg-white/[0.025] p-6 transition-colors hover:border-hunter-orange/25"
                >
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="font-mono text-xs font-black text-hunter-green/70 transition-colors group-hover:text-hunter-orange">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-hunter-green/40 to-transparent opacity-60 transition-colors group-hover:from-hunter-orange/50" />
                  </div>
                  <p className="text-sm leading-relaxed text-gray-300">{item}</p>
                </GlassCard>
              </m.div>
            ))}
          </div>

          <m.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="relative overflow-hidden rounded-3xl border border-hunter-orange/25 bg-hunter-orange/[0.06] p-8 shadow-[0_30px_90px_-60px_rgba(0,230,162,0.85)]"
          >
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-hunter-orange/70 to-transparent" />
            <div className="mb-3 font-mono text-xs font-black uppercase tracking-[0.22em] text-hunter-orange">
              {aiLayer.title}
            </div>
            <p className="text-lg leading-relaxed text-gray-300">{aiLayer.desc}</p>
          </m.div>
        </div>
      </div>
    </section>
  );
}

function SystemMapVisual() {
  const nodes = ["CRM", "Docs", "Calendar", "Staff", "Invoices"];

  return (
    <div
      aria-hidden="true"
      className="mt-10 rounded-3xl border border-hunter-green/20 bg-surface-dark/50 p-5 shadow-[0_30px_90px_-60px_rgba(0,230,162,0.85)]"
    >
      <div className="mb-4 flex items-center justify-between border-b border-white/5 pb-4">
        <span className="font-mono text-[10px] font-black uppercase tracking-[0.24em] text-hunter-green">
          OPERATING LAYER
        </span>
        <span className="rounded-full border border-hunter-green/20 px-2 py-1 font-mono text-[10px] text-hunter-green/70">
          LIVE
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {nodes.map((node, index) => (
          <div
            key={node}
            className={`rounded-2xl border border-white/[0.06] bg-white/[0.035] p-3 ${index === 0 ? "sm:col-span-2" : ""}`}
          >
            <div className="mb-2 h-1.5 w-10 rounded-full bg-hunter-green/50" />
            <div className="font-mono text-xs font-black text-white">{node}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-2xl border border-hunter-orange/25 bg-hunter-orange/[0.07] p-4">
        <div className="mb-2 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-hunter-orange">
          AI COMMAND LAYER
        </div>
        <div className="h-1.5 rounded-full bg-gradient-to-r from-hunter-orange via-hunter-green to-transparent" />
      </div>
    </div>
  );
}
