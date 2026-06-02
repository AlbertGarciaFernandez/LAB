"use client";

import HeroBackgroundOrnaments from "@/components/HeroBackgroundOrnaments";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { Link } from "@/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  CheckIcon,
  LightningIcon,
  DatabaseIcon,
  ArrowRightIcon,
  CodeIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  PlugsConnectedIcon,
  TargetIcon,
  StarIcon,
} from "@phosphor-icons/react/dist/ssr";

import { m } from "framer-motion";
import Header from "@/components/layout/Header";
import { getCommonBreadcrumbLabels } from "../_shared/localeCopy";

const painPointIcons = [
  LightningIcon,
  DatabaseIcon,
  ChartBarIcon,
  ArrowRightIcon,
  CodeIcon,
  ShieldCheckIcon,
];
const solutionIcons = [
  PlugsConnectedIcon,
  TargetIcon,
  LightningIcon,
  ArrowRightIcon,
  ChartBarIcon,
  StarIcon,
];

const n8nIntegrations = [
  "n8n",
  "Zapier",
  "Make",
  "HubSpot",
  "Salesforce",
  "Slack",
  "PostgreSQL",
  "Stripe",
  "Google Sheets",
  "WhatsApp API",
  "OpenAI",
  "Webhooks",
];

type HeroProps = {
  badge: string;
  titlePart1: string;
  titleHighlight: string;
  titlePart2: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

type PainPointItem = {
  emoji: string;
  title: string;
  desc: string;
};

type SolutionItem = {
  emoji: string;
  title: string;
  desc: string;
  result: string;
};

type MigrationStep = {
  num: string;
  title: string;
  desc: string;
};

type WhyN8nPoint = {
  title: string;
  desc: string;
};

type FAQItem = {
  q: string;
  a: string;
};

type CTAProps = {
  label: string;
  title: string;
  desc: string;
  button: string;
  subtext: string;
};

type SEOProps = {
  keywords: string;
  extendedDesc: string;
};

type PageProps = {
  locale: string;
  hero: HeroProps;
  languageNote: string;
  painPoints: { title: string; items: PainPointItem[] };
  solutions: { title: string; subtitle: string; items: SolutionItem[] };
  migrationSteps: { title: string; subtitle: string; steps: MigrationStep[] };
  whyN8n: { title: string; points: WhyN8nPoint[] };
  faq: { title: string; subtitle: string; questions: FAQItem[] };
  cta: CTAProps;
  seo: SEOProps;
};

export default function N8nConsultantContent({
  locale,
  hero,
  languageNote,
  painPoints,
  solutions,
  migrationSteps,
  whyN8n,
  faq,
  cta,
  seo,
}: PageProps) {
  const breadcrumbLabels = getCommonBreadcrumbLabels(locale);
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "n8n Consulting & Migration Services Netherlands",
    provider: {
      "@type": "Organization",
      name: "CodeHunter Lab",
      url: "https://www.codehunterlab.com",
    },
    areaServed: [
      "Netherlands",
      "Amsterdam",
      "Rotterdam",
      "Den Haag",
      "Utrecht",
      "Leiden",
      "Eindhoven",
    ],
    description:
      "Expert n8n consulting, workflow automation design, and migration services from Zapier and Make to self-hosted n8n for businesses in the Netherlands.",
    serviceType: "Workflow Automation Consulting & Migration",
    offers: {
      "@type": "Offer",
      price: "0.00",
      priceCurrency: "EUR",
      description: "Free n8n workflow audit",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: breadcrumbLabels.home,
        item: `https://www.codehunterlab.com/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "n8n Consultant Netherlands",
        item: `https://www.codehunterlab.com/${locale}/n8n-consultant-netherlands`,
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
            <ScrambleText text={hero.badge} />
          </m.div>

          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-4xl font-black leading-[0.95] tracking-tighter md:text-7xl"
          >
            {hero.titlePart1} <br />
            <span className="text-gradient-enchanted neon-glow-green">{hero.titleHighlight}</span>
            <br />
            {hero.titlePart2}
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl"
            dangerouslySetInnerHTML={{ __html: hero.description }}
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
              {hero.ctaPrimary}
            </Link>
            <Link
              href="#solutions"
              className="rounded-full border border-white/10 bg-white/5 px-10 py-5 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-xl transition-all hover:bg-white/10"
            >
              {hero.ctaSecondary}
            </Link>
          </m.div>
        </section>

        {/* Language Note */}
        <section className="relative z-10 mx-auto max-w-4xl px-6 pb-4">
          <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm leading-relaxed text-gray-400">
            <span className="mt-0.5 flex-shrink-0 text-hunter-green">ℹ</span>
            <p>{languageNote}</p>
          </div>
        </section>

        {/* Integrations Marquee */}
        <section className="relative z-10 mt-8 overflow-hidden border-y border-white/5 bg-near-black/50 py-12 backdrop-blur-sm">
          <div className="animate-marquee flex space-x-12 whitespace-nowrap opacity-40 grayscale transition-all duration-700 hover:grayscale-0">
            {n8nIntegrations.map((sys) => (
              <span
                key={`a-${sys}`}
                className="text-xl font-black uppercase italic tracking-tighter text-white md:text-2xl"
              >
                {sys}
              </span>
            ))}
            {n8nIntegrations.map((sys) => (
              <span
                key={`b-${sys}`}
                className="text-xl font-black uppercase italic tracking-tighter text-white md:text-2xl"
              >
                {sys}
              </span>
            ))}
          </div>
        </section>

        {/* Pain Points */}
        <section className="relative z-10 py-32">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-16 text-center text-4xl font-black uppercase tracking-tighter md:text-6xl">
              {painPoints.title}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {painPoints.items.map((item, idx) => {
                const Icon = painPointIcons[idx];
                return (
                  <GlassCard
                    key={item.title}
                    hoverEffect={true}
                    glowColor="none"
                    className="flex flex-col gap-4 p-8"
                  >
                    {Icon && <Icon size={28} className="text-white/60" />}
                    <h3 className="text-lg font-black uppercase tracking-tight text-white">
                      {item.title}
                    </h3>
                    <p className="flex-grow text-sm leading-relaxed text-gray-400">{item.desc}</p>
                  </GlassCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section
          id="solutions"
          className="relative z-10 border-y border-white/5 bg-surface-dark/30 py-32"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-black uppercase tracking-tighter md:text-6xl">
                {solutions.title}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-400">{solutions.subtitle}</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {solutions.items.map((item, idx) => {
                const Icon = solutionIcons[idx];
                return (
                  <GlassCard
                    key={item.title}
                    hoverEffect={true}
                    glowColor="green"
                    className="flex h-full flex-col gap-4 p-8"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-hunter-green/20 bg-hunter-green/10">
                      {Icon && <Icon size={24} className="text-hunter-green" />}
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-tight text-white">
                      {item.title}
                    </h3>
                    <p
                      className="flex-grow text-sm leading-relaxed text-gray-400"
                      dangerouslySetInnerHTML={{ __html: item.desc }}
                    />
                    <div className="mt-auto border-t border-white/5 pt-4">
                      <p className="font-mono text-xs font-bold uppercase tracking-wider text-hunter-green">
                        → {item.result}
                      </p>
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* Migration Steps */}
        <section className="relative z-10 py-32">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-black uppercase tracking-tighter md:text-6xl">
                {migrationSteps.title}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-400">{migrationSteps.subtitle}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {migrationSteps.steps.map((item) => (
                <GlassCard
                  key={item.title}
                  className="group border-l-4 border-l-hunter-green p-8 transition-colors hover:bg-white/[0.02]"
                  hoverEffect={false}
                >
                  <div className="mb-3 flex items-start justify-between">
                    <h3 className="pr-4 text-lg font-black uppercase tracking-tight text-white">
                      {item.title}
                    </h3>
                    <span className="flex-shrink-0 font-mono text-xl text-hunter-green opacity-30">
                      {item.num}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-400">{item.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Why n8n */}
        <section className="relative z-10 border-y border-white/5 bg-surface-dark/30 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-16 text-center text-4xl font-black uppercase tracking-tighter md:text-6xl">
              {whyN8n.title}
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {whyN8n.points.map((point) => (
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
                    <p
                      className="text-sm leading-relaxed text-gray-400"
                      dangerouslySetInnerHTML={{ __html: point.desc }}
                    />
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative z-10 mx-auto max-w-4xl px-6 py-32">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-tighter md:text-6xl">
              {faq.title}
            </h2>
            <p className="text-xl text-gray-400">{faq.subtitle}</p>
          </div>
          <div className="space-y-6">
            {faq.questions.map((item) => (
              <GlassCard
                key={item.q}
                className="group cursor-default p-8"
                hoverEffect={true}
                glowColor="green"
              >
                <h3 className="mb-4 flex items-start gap-4 text-xl font-bold text-white">
                  <span className="mt-0.5 flex-shrink-0 text-hunter-green transition-transform group-hover:rotate-90">
                    →
                  </span>
                  {item.q}
                </h3>
                <p className="border-l border-white/10 pl-8 text-sm leading-relaxed text-gray-400">
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
              className="border-hunter-green/20 bg-hunter-green/5 p-12 md:p-16"
              hoverEffect={false}
            >
              <p className="mb-6 font-mono text-sm uppercase tracking-widest text-hunter-green">
                {cta.label}
              </p>
              <h2 className="mb-6 text-4xl font-black uppercase tracking-tighter md:text-5xl">
                {cta.title}
              </h2>
              <p className="mb-10 text-lg leading-relaxed text-gray-400">{cta.desc}</p>
              <Link
                href="#contact"
                className="inline-block rounded-full bg-hunter-green px-12 py-5 text-sm font-black uppercase tracking-widest text-black shadow-[0_0_30px_rgba(0,230,162,0.4)] transition-all hover:scale-105 hover:bg-white"
              >
                {cta.button}
              </Link>
              <p className="mt-6 font-mono text-xs text-gray-600">{cta.subtext}</p>
            </GlassCard>
          </div>
        </section>

        {/* SEO Footer */}
        <footer className="relative z-10 overflow-hidden border-t border-white/5 bg-black/40 py-20">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="mx-auto max-w-4xl text-sm italic leading-relaxed text-gray-600">
              {seo.extendedDesc}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 font-mono text-[10px] uppercase tracking-widest text-gray-400 opacity-20">
              {seo.keywords.split(",").map((kw: string) => (
                <span key={kw}>{kw.trim()}</span>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
