"use client";

import { useTranslations } from "next-intl";
import HeroBackgroundOrnaments from "@/components/HeroBackgroundOrnaments";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { Link } from "@/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr";
import { m } from "framer-motion";
import Header from "@/components/layout/Header";

export default function SoftwareDevelopmentLeidenContent() {
    const t = useTranslations("SoftwareLeiden");

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "CodeHunter Lab - Software Development Leiden",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "author": {
            "@type": "Organization",
            "name": "CodeHunter Lab",
            "url": "https://www.codehunterlab.com"
        },
        "description": "Premium software development services in Leiden, specialized in React, Next.js and AI integration.",
        "offers": {
            "@type": "Offer",
            "price": "0.00",
            "priceCurrency": "EUR",
            "description": "Free initial architecture consultation"
        },
        "areaServed": ["Leiden", "Zuid-Holland", "Netherlands"],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "12"
        }
    };

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `https://www.codehunterlab.com/en` },
            { "@type": "ListItem", "position": 2, "name": "Software Development Leiden", "item": `https://www.codehunterlab.com/en/software-development-leiden` }
        ]
    };

    return (
        <>
        <Header />
        <main className="relative min-h-screen bg-near-black text-white overflow-hidden">
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
            <section className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 inline-block rounded-full bg-hunter-orange/10 px-4 py-1.5 text-xs md:text-sm font-mono text-hunter-orange border border-hunter-orange/20 backdrop-blur-md"
                >
                    <ScrambleText text={t("Hero.badge")} />
                </m.div>

                <m.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]"
                >
                    {t("Hero.title.part1")} <br />
                    <span className="text-gradient-fire neon-glow-orange">{t("Hero.title.highlight")}</span>
                </m.h1>

                <m.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="max-w-2xl text-lg md:text-2xl text-gray-300 mb-12 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: t.raw("Hero.description") }}
                />

                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-5"
                >
                    <Link
                        href="/#contact"
                        className="px-10 py-5 bg-hunter-orange text-black font-black uppercase tracking-widest text-sm rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,122,60,0.4)]"
                    >
                        {t("Hero.cta.coffee")}
                    </Link>
                    <Link
                        href="#services"
                        className="px-10 py-5 bg-white/5 border border-white/10 backdrop-blur-xl text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white/10 transition-all"
                    >
                        {t("Hero.cta.services")}
                    </Link>
                </m.div>
            </section>

            {/* Tech Stack Marquee (Visual Readability Boost) */}
            <section className="py-12 border-y border-white/5 bg-near-black/50 backdrop-blur-sm relative z-10 overflow-hidden">
                <div className="flex space-x-12 animate-marquee whitespace-nowrap opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                    {["React", "Next.js", "TypeScript", "Node.js", "Supabase", "OpenAI", "PostgreSQL", "TailwindCSS", "Framer Motion", "n8n"].map((tech) => (
                        <span key={tech} className="text-2xl md:text-3xl font-black tracking-tighter text-white uppercase italic">
                            {tech}
                        </span>
                    ))}
                    {/* Repeat for continuous effect */}
                    {["React", "Next.js", "TypeScript", "Node.js", "Supabase", "OpenAI", "PostgreSQL", "TailwindCSS", "Framer Motion", "n8n"].map((tech) => (
                        <span key={`${tech}-2`} className="text-2xl md:text-3xl font-black tracking-tighter text-white uppercase italic">
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

            {/* Services Grid */}
            <section id="services" className="py-32 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        <GlassCard hoverEffect={true} glowColor="orange" className="p-10 flex flex-col h-full">
                            <div className="w-14 h-14 rounded-2xl bg-hunter-orange/10 flex items-center justify-center text-3xl mb-8 border border-hunter-orange/20">🚀</div>
                            <h3 className="text-3xl font-black mb-4 text-white uppercase tracking-tight">{t("Services.web.title")}</h3>
                            <p className="text-gray-400 text-lg leading-relaxed flex-grow">
                                {t("Services.web.description")}
                            </p>
                        </GlassCard>

                        <GlassCard hoverEffect={true} glowColor="orange" className="p-10 border-hunter-orange/30 bg-hunter-orange/5 flex flex-col h-full shadow-[0_0_50px_rgba(255,122,60,0.1)]">
                            <div className="w-14 h-14 rounded-2xl bg-hunter-orange/20 flex items-center justify-center text-3xl mb-8 border border-hunter-orange/40">🤖</div>
                            <h3 className="text-3xl font-black mb-4 text-white uppercase tracking-tight">{t("Services.ai.title")}</h3>
                            <p className="text-gray-400 text-lg leading-relaxed flex-grow" dangerouslySetInnerHTML={{ __html: t.raw("Services.ai.description") }} />
                        </GlassCard>

                        <GlassCard hoverEffect={true} glowColor="orange" className="p-10 flex flex-col h-full">
                            <div className="w-14 h-14 rounded-2xl bg-hunter-orange/10 flex items-center justify-center text-3xl mb-8 border border-hunter-orange/20">🛒</div>
                            <h3 className="text-3xl font-black mb-4 text-white uppercase tracking-tight">{t("Services.ecommerce.title")}</h3>
                            <p className="text-gray-400 text-lg leading-relaxed flex-grow">
                                {t("Services.ecommerce.description")}
                            </p>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* Advantage Section - Local Context */}
            <section className="py-24 bg-surface-dark/30 relative z-10 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase">{t("Local.title")}</h2>
                        <div className="space-y-8">
                            {[
                                { icon: "🤝", key: "face" },
                                { icon: "🇳🇱", key: "market" }
                            ].map((item) => (
                                <div key={item.key} className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-2xl group-hover:bg-hunter-orange/20 transition-colors border border-white/10 group-hover:border-hunter-orange/30">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2 text-hunter-orange uppercase tracking-tight">{t(`Local.cards.${item.key}.title`)}</h3>
                                        <p className="text-gray-300 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw(`Local.cards.${item.key}.description`) }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <h2 className="text-3xl font-black mb-4 tracking-tight uppercase text-white/50">{t("Process.title")}</h2>
                        {[0, 1, 2].map((step) => (
                            <GlassCard key={step} className="p-8 border-l-4 border-l-hunter-orange group hover:bg-white/[0.02] transition-colors" hoverEffect={false}>
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">{t(`Process.steps.${step}.title`)}</h3>
                                    <span className="text-hunter-orange font-mono text-xl opacity-30">0{step + 1}</span>
                                </div>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    {t(`Process.steps.${step}.desc`)}
                                </p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section - SEO Goldmine */}
            <section className="py-32 relative z-10 max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">{t("FAQ.title")}</h2>
                    <p className="text-gray-400 text-xl">{t("FAQ.subtitle")}</p>
                </div>

                <div className="space-y-6">
                    {t.raw("FAQ.questions").map((item: any) => (
                        <GlassCard key={item.q} className="p-8 group cursor-default" hoverEffect={true} glowColor="orange">
                            <h3 className="text-2xl font-bold mb-4 text-white flex gap-4 items-center">
                                <span className="text-hunter-orange group-hover:rotate-90 transition-transform">→</span>
                                {item.q}
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed pl-10 border-l border-white/10">
                                {item.a}
                            </p>
                        </GlassCard>
                    ))}
                </div>
            </section>

            {/* SEO Extended Content Footer (Hidden but crawlable) */}
            <footer className="py-20 bg-black/40 border-t border-white/5 relative z-10 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-gray-600 text-sm max-w-4xl mx-auto leading-relaxed italic">
                        {t("SEO.extendedDesc")}
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4 opacity-20 text-[10px] font-mono uppercase tracking-widest text-gray-400">
                        {t("SEO.keywords").split(",").map((kw: string) => (
                            <span key={kw}>{kw.trim()}</span>
                        ))}
                    </div>
                </div>
            </footer>
        </main>
        </>
    );
}
