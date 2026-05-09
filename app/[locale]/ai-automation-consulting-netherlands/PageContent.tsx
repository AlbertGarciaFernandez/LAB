"use client";

import HeroBackgroundOrnaments from "@/components/HeroBackgroundOrnaments";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { Link } from "@/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import Header from "@/components/layout/Header";
import { m } from "framer-motion";
import { WhatsappLogoIcon, MicrophoneIcon, LightningIcon } from "@phosphor-icons/react/dist/ssr";

type HeroProps = {
  badge: string;
  titlePart1: string;
  titleHighlight: string;
  titleSub: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

type AgentCardProps = {
  title: string;
  desc: string;
  points: string[];
};

type AgentsProps = {
  titlePart1: string;
  titleHighlight: string;
  labelCapabilities: string;
  labelPopular: string;
  whatsapp: AgentCardProps;
  voice: AgentCardProps;
  automation: AgentCardProps;
};

type ROICardProps = {
  label: string;
  value: string;
  desc: string;
};

type ROIProps = {
  titlePart1: string;
  titlePart2: string;
  titleHighlight: string;
  description: string;
  cards: ROICardProps[];
};

type TrustSectionProps = {
  dont: {
    titlePart1: string;
    titleHighlight: string;
    titlePart2: string;
    points: string[];
  };
  do: {
    titlePart1: string;
    titleHighlight: string;
    points: string[];
  };
};

type IndustryItem = {
  emoji: string;
  title: string;
  desc: string;
  href: string;
};

type IndustriesProps = {
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  cta: string;
  items: IndustryItem[];
};

type SEOProps = {
  faqTitle: string;
  faqQuestions: Array<{ q: string; a: string }>;
  footer: string;
  keywords: string;
};

type PageProps = {
  hero: HeroProps;
  agents: AgentsProps;
  roi: ROIProps;
  trust: TrustSectionProps;
  industries: IndustriesProps;
  seo: SEOProps;
};

export default function AIAutomationNetherlandsContent({
  hero,
  agents,
  roi,
  trust,
  industries,
  seo,
}: PageProps) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: seo.faqQuestions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI Automation Consulting",
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
    description: "We specialize in ROI-driven AI automation for businesses in the Netherlands.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "WhatsApp AI Agents" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Voice Calling Bots" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "n8n Workflow Automation" } },
      ],
    },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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

          <h1 className="mb-8 text-4xl font-black leading-[0.95] tracking-tighter md:text-7xl">
            {hero.titlePart1} <br />
            <span className="text-gradient-enchanted neon-glow-green">
              {hero.titleHighlight}
            </span>{" "}
            <br />
            <span className="text-2xl font-light text-gray-300 md:text-5xl">{hero.titleSub}</span>
          </h1>

          <p
            className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl"
            dangerouslySetInnerHTML={{ __html: hero.description }}
          />

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/#contact"
              className="rounded-lg bg-hunter-green px-8 py-4 font-bold text-black shadow-[0_0_20px_rgba(0,230,162,0.3)] transition-all hover:bg-green-400 hover:shadow-[0_0_35px_rgba(0,230,162,0.6)]"
            >
              {hero.ctaPrimary}
            </Link>
            <Link
              href="#agents"
              className="rounded-lg border border-white/10 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-md transition-all hover:bg-white/10"
            >
              {hero.ctaSecondary}
            </Link>
          </div>
        </section>

        {/* AI Agents Showcase */}
        <section id="agents" className="relative z-10 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">
              {agents.titlePart1}{" "}
              <span className="text-gradient-enchanted">{agents.titleHighlight}</span>
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              {/* WhatsApp Bot */}
              <GlassCard hoverEffect={true} glowColor="green" className="p-8">
                <WhatsappLogoIcon size={48} className="mb-6 text-hunter-green" />
                <h3 className="mb-4 text-2xl font-bold text-white">{agents.whatsapp.title}</h3>
                <p
                  className="mb-6 font-light leading-relaxed text-gray-400"
                  dangerouslySetInnerHTML={{ __html: agents.whatsapp.desc }}
                />
                <div className="border-t border-white/10 pt-4">
                  <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-hunter-green">
                    {agents.labelCapabilities}
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {agents.whatsapp.points.map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <span className="text-hunter-green">●</span> {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>

              {/* Voice AI */}
              <GlassCard
                hoverEffect={true}
                glowColor="green"
                className="relative overflow-hidden border-hunter-green/30 bg-hunter-green/5 p-8"
              >
                <div className="absolute right-0 top-0 rounded-bl-lg bg-hunter-green p-2 text-xs font-bold text-black">
                  {agents.labelPopular}
                </div>
                <MicrophoneIcon size={48} className="mb-6 text-hunter-green" />
                <h3 className="mb-4 text-2xl font-bold text-white">{agents.voice.title}</h3>
                <p
                  className="mb-6 font-light leading-relaxed text-gray-400"
                  dangerouslySetInnerHTML={{ __html: agents.voice.desc }}
                />
                <div className="border-t border-white/10 pt-4">
                  <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-hunter-green">
                    {agents.labelCapabilities}
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {agents.voice.points.map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <span className="text-hunter-green">●</span> {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>

              {/* n8n Automation */}
              <GlassCard hoverEffect={true} glowColor="green" className="p-8">
                <LightningIcon size={48} className="mb-6 text-hunter-green" />
                <h3 className="mb-4 text-2xl font-bold text-white">{agents.automation.title}</h3>
                <p
                  className="mb-6 font-light leading-relaxed text-gray-400"
                  dangerouslySetInnerHTML={{ __html: agents.automation.desc }}
                />
                <div className="border-t border-white/10 pt-4">
                  <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-hunter-green">
                    {agents.labelCapabilities}
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {agents.automation.points.map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <span className="text-hunter-green">●</span> {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* ROI / Business Impact Section */}
        <section className="relative z-10 overflow-hidden py-24">
          {/* Background Glow */}
          <div className="absolute left-1/2 top-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-hunter-green/5 blur-[100px]" />

          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              {roi.titlePart1} <br />
              <span className="text-white">{roi.titlePart2}</span>{" "}
              <span className="neon-glow-orange text-hunter-orange">{roi.titleHighlight}</span>
            </h2>
            <p className="mx-auto mb-12 max-w-3xl text-xl font-light text-gray-400">
              {roi.description}
            </p>

            <div className="grid gap-6 text-left md:grid-cols-2">
              <GlassCard
                className="flex flex-col justify-center border-hunter-orange/20 bg-gradient-to-br from-white/5 to-hunter-orange/5 p-10"
                glowColor="orange"
              >
                <div className="mb-2 flex items-center gap-2 font-mono text-xl text-hunter-orange">
                  <span>📉</span> {roi.cards[0].label}
                </div>
                <div className="mb-4 text-5xl font-bold tracking-tighter text-white md:text-7xl">
                  {roi.cards[0].value}
                </div>
                <p className="text-lg font-light text-gray-300">{roi.cards[0].desc}</p>
              </GlassCard>
              <GlassCard
                className="flex flex-col justify-center border-hunter-green/20 bg-gradient-to-br from-white/5 to-hunter-green/5 p-10"
                glowColor="green"
              >
                <div className="mb-2 flex items-center gap-2 font-mono text-xl text-hunter-green">
                  <span>📈</span> {roi.cards[1].label}
                </div>
                <div className="mb-4 text-5xl font-bold tracking-tighter text-white md:text-7xl">
                  {roi.cards[1].value}
                </div>
                <p className="text-lg font-light text-gray-300">{roi.cards[1].desc}</p>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* "What we don't do" Trust Section - Refined */}
        <section className="relative z-10 border-y border-white/5 bg-black/20 py-20 backdrop-blur-sm">
          <div className="mx-auto grid max-w-5xl gap-12 px-6 text-left md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">
                {trust.dont.titlePart1}{" "}
                <span className="neon-glow-orange text-red-500">{trust.dont.titleHighlight}</span>{" "}
                {trust.dont.titlePart2}
              </h2>
              <ul className="space-y-6 text-gray-400">
                {trust.dont.points.map((point, idx) => (
                  <li
                    key={`dont-${idx}`}
                    className="flex items-start gap-4 rounded-xl border border-red-500/10 bg-red-500/5 p-4"
                  >
                    <span className="text-2xl font-bold text-red-500">✕</span>
                    <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: point }} />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold">
                {trust.do.titlePart1}{" "}
                <span className="neon-glow-green text-hunter-green">{trust.do.titleHighlight}</span>
              </h2>
              <ul className="space-y-6 text-gray-300">
                {trust.do.points.map((point, idx) => (
                  <li
                    key={`do-${idx}`}
                    className="flex items-start gap-4 rounded-xl border border-hunter-green/10 bg-hunter-green/5 p-4"
                  >
                    <span className="text-2xl font-bold text-hunter-green">✓</span>
                    <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: point }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="relative z-10 border-t border-white/5 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-hunter-green/20 bg-hunter-green/10 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-hunter-green">
                {industries.badge}
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tighter md:text-5xl">
                {industries.title}{" "}
                <span className="text-gradient-enchanted">{industries.highlight}</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-400">
                {industries.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {industries.items.map((item, i) => (
                <m.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <Link
                    href={item.href}
                    className="group flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-hunter-green/30 hover:bg-white/[0.07]"
                  >
                    <div className="text-3xl">{item.emoji}</div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-base font-bold tracking-tight text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-400">{item.desc}</p>
                    </div>
                    <div className="flex items-center gap-1.5 border-t border-white/5 pt-3 text-xs font-semibold text-hunter-green">
                      <span>{industries.cta}</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </Link>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative z-10 mx-auto max-w-4xl border-t border-white/5 px-6 py-32">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-tighter md:text-6xl">
              {seo.faqTitle}
            </h2>
          </div>

          <div className="space-y-6">
            {seo.faqQuestions.map((item) => (
              <GlassCard key={item.q} className="group p-8" hoverEffect={true} glowColor="green">
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

        {/* SEO Text Block */}
        <section className="relative z-10 overflow-hidden border-t border-white/5 bg-black/40 py-20">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="mx-auto max-w-4xl text-sm italic leading-relaxed text-gray-600">
              {seo.footer}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 font-mono text-[10px] uppercase tracking-widest text-gray-400 opacity-20">
              {seo.keywords.split(",").map((kw: string) => (
                <span key={kw}>{kw.trim()}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
