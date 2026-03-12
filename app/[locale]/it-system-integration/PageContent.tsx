"use client";

import { useTranslations } from "next-intl";
import HeroBackgroundOrnaments from "@/components/HeroBackgroundOrnaments";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { Link } from "@/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import { m } from "framer-motion";
import Header from "@/components/layout/Header";
import {
    DatabaseIcon,
    GearSixIcon,
    RocketIcon,
    PlugIcon,
    BuildingsIcon,
    ArrowsClockwiseIcon,
    CheckIcon,
    XIcon,
} from "@phosphor-icons/react/dist/ssr";

export default function ITSystemIntegrationContent() {
    const t = useTranslations("ITSystemIntegration");

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `https://www.codehunterlab.com/en` },
            { "@type": "ListItem", "position": 2, "name": "IT System Integration", "item": `https://www.codehunterlab.com/en/it-system-integration` }
        ]
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": (t.raw("FAQ.questions") as Array<{ q: string; a: string }>).map((item) => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": { "@type": "Answer", "text": item.a },
        })),
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "IT System Integration",
        "provider": {
            "@type": "Organization",
            "name": "CodeHunter Lab",
            "url": "https://www.codehunterlab.com"
        },
        "areaServed": ["Netherlands", "Leiden", "Amsterdam", "Rotterdam"],
        "description": "Connecting disparate software systems (CRM, ERP, APIs) into a unified, automated workflow.",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Integration Services",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "API Development & Integration" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Legacy System Modernization" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "n8n Workflow Automation" } }
            ]
        }
    };

    const withoutPoints = t.raw("WhyUs.without.points") as string[];
    const withPoints = t.raw("WhyUs.with.points") as string[];

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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
                    className="mb-8 inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-xs md:text-sm font-mono text-blue-400 border border-blue-500/20 backdrop-blur-md"
                >
                    <ScrambleText text={t("Hero.badge")} />
                </m.div>

                <m.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]"
                >
                    {t("Hero.title.part1")} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 neon-glow-green">
                        {t("Hero.title.highlight")}
                    </span>
                </m.h1>

                <m.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-2xl text-lg md:text-2xl text-gray-300 mb-12 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: t.raw("Hero.description") as string }}
                />

                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-5"
                >
                    <Link
                        href="/#contact"
                        className="px-10 py-5 bg-blue-600 text-white font-black uppercase tracking-widest text-sm rounded-full hover:bg-blue-500 hover:scale-105 transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                    >
                        {t("Hero.cta.primary")}
                    </Link>
                    <Link
                        href="#services"
                        className="px-10 py-5 bg-white/5 border border-white/10 backdrop-blur-xl text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white/10 transition-all"
                    >
                        {t("Hero.cta.secondary")}
                    </Link>
                </m.div>
            </section>

            {/* Tech Stack Marquee */}
            <section className="py-12 border-y border-white/5 bg-near-black/50 backdrop-blur-sm relative z-10 overflow-hidden">
                <div className="flex space-x-12 animate-marquee whitespace-nowrap opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                    {["n8n", "REST APIs", "GraphQL", "Webhooks", "HubSpot", "Salesforce", "PostgreSQL", "Airtable", "Node.js", "Python"].map((tech) => (
                        <span key={tech} className="text-2xl md:text-3xl font-black tracking-tighter text-white uppercase italic">{tech}</span>
                    ))}
                    {["n8n", "REST APIs", "GraphQL", "Webhooks", "HubSpot", "Salesforce", "PostgreSQL", "Airtable", "Node.js", "Python"].map((tech) => (
                        <span key={`${tech}-2`} className="text-2xl md:text-3xl font-black tracking-tighter text-white uppercase italic">{tech}</span>
                    ))}
                </div>
            </section>

            {/* Visual Workflow Section */}
            <section className="py-24 relative z-10">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent hidden md:block -translate-y-1/2" />

                        {/* Box 1 */}
                        <m.div
                            whileHover={{ y: -5 }}
                            className="relative z-10 w-full md:w-1/3"
                        >
                            <GlassCard className="p-10 text-center border-white/5 hover:border-blue-500/30 transition-colors" hoverEffect={true} glowColor="green">
                                <div className="mb-6"><DatabaseIcon size={48} className="text-white/60" /></div>
                                <h3 className="text-2xl font-black mb-3 uppercase tracking-tight">{t("Diagram.source.title")}</h3>
                                <p className="text-gray-400 font-medium">{t("Diagram.source.desc")}</p>
                            </GlassCard>
                        </m.div>

                        {/* Engine */}
                        <m.div
                            animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="relative z-20 w-full md:w-1/3"
                        >
                            <GlassCard className="p-10 text-center border-blue-500/30 bg-blue-500/5 shadow-[0_0_50px_rgba(59,130,246,0.1)]" hoverEffect={true} glowColor="green">
                                <div className="mb-6"><GearSixIcon size={48} className="text-blue-400" /></div>
                                <h3 className="text-2xl font-black mb-3 uppercase tracking-tight text-blue-400">{t("Diagram.engine.title")}</h3>
                                <p className="text-blue-200/60 font-mono text-sm">{t("Diagram.engine.desc")}</p>
                            </GlassCard>
                        </m.div>

                        {/* Box 3 */}
                        <m.div
                            whileHover={{ y: -5 }}
                            className="relative z-10 w-full md:w-1/3"
                        >
                            <GlassCard className="p-10 text-center border-white/5 hover:border-purple-500/30 transition-colors" hoverEffect={true} glowColor="green">
                                <div className="mb-6"><RocketIcon size={48} className="text-white/60" /></div>
                                <h3 className="text-2xl font-black mb-3 uppercase tracking-tight">{t("Diagram.outcome.title")}</h3>
                                <p className="text-gray-400 font-medium">{t("Diagram.outcome.desc")}</p>
                            </GlassCard>
                        </m.div>
                    </div>
                </div>
            </section>

            {/* Core Services */}
            <section id="services" className="py-32 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        <GlassCard className="p-10 flex flex-col h-full border-white/5 hover:bg-white/[0.02]" hoverEffect={true} glowColor="green">
                            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 border border-blue-500/20"><PlugIcon size={28} className="text-blue-400" /></div>
                            <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">{t("Services.api.title")}</h3>
                            <p className="text-gray-400 text-lg leading-relaxed flex-grow">{t("Services.api.desc")}</p>
                        </GlassCard>

                        <GlassCard className="p-10 flex flex-col h-full border-blue-500/30 bg-blue-500/5 shadow-[0_0_50px_rgba(59,130,246,0.1)]" hoverEffect={true} glowColor="green">
                            <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-8 border border-indigo-500/40"><BuildingsIcon size={28} className="text-indigo-400" /></div>
                            <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">{t("Services.legacy.title")}</h3>
                            <p className="text-gray-400 text-lg leading-relaxed flex-grow">{t("Services.legacy.desc")}</p>
                        </GlassCard>

                        <GlassCard className="p-10 flex flex-col h-full border-white/5 hover:bg-white/[0.02]" hoverEffect={true} glowColor="green">
                            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-8 border border-purple-500/20"><ArrowsClockwiseIcon size={28} className="text-purple-400" /></div>
                            <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">{t("Services.sync.title")}</h3>
                            <p className="text-gray-400 text-lg leading-relaxed flex-grow">{t("Services.sync.desc")}</p>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* Why Us — Before vs After */}
            <section className="py-24 bg-surface-dark/30 relative z-10 border-y border-white/5">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter uppercase text-center">{t("WhyUs.title")}</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <GlassCard className="p-10 bg-white/[0.02]" hoverEffect={false}>
                            <div className="flex items-center gap-3 mb-8">
                                <span className="w-3 h-3 rounded-full bg-gray-500" />
                                <h3 className="text-2xl font-black text-white/70 uppercase tracking-tight">{t("WhyUs.without.title")}</h3>
                            </div>
                            <ul className="space-y-4">
                                {withoutPoints.map((point) => (
                                    <li key={point} className="flex items-start gap-4">
                                        <XIcon className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-400 text-lg">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </GlassCard>

                        <GlassCard className="p-10 border-blue-500/30 bg-blue-500/5" hoverEffect={false}>
                            <div className="flex items-center gap-3 mb-8">
                                <span className="w-3 h-3 rounded-full bg-blue-400" />
                                <h3 className="text-2xl font-black text-white uppercase tracking-tight">{t("WhyUs.with.title")}</h3>
                            </div>
                            <ul className="space-y-4">
                                {withPoints.map((point) => (
                                    <li key={point} className="flex items-start gap-4">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-300 text-lg">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-32 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter uppercase text-center">{t("Process.title")}</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {(t.raw("Process.steps") as Array<{ number: string; title: string; desc: string }>).map((step, idx) => {
                            return (
                                <m.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                >
                                    <GlassCard className="p-8 flex gap-6" hoverEffect={true} glowColor="green">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/30">
                                            <span className="text-blue-400 font-mono text-sm font-black">{step.number}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tight">{step.title}</h3>
                                            <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                                        </div>
                                    </GlassCard>
                                </m.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-32 relative z-10 max-w-4xl mx-auto px-6 border-t border-white/5">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">{t("FAQ.title")}</h2>
                    <p className="text-gray-400 text-xl">{t("FAQ.subtitle")}</p>
                </div>

                <div className="space-y-6">
                    {(t.raw("FAQ.questions") as Array<{ q: string; a: string }>).map((item) => (
                        <GlassCard key={item.q} className="p-8 group cursor-default" hoverEffect={true} glowColor="green">
                            <h3 className="text-2xl font-bold mb-4 text-white flex gap-4 items-center">
                                <span className="text-blue-400 group-hover:rotate-90 transition-transform">→</span>
                                {item.q}
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed pl-10 border-l border-white/10">
                                {item.a}
                            </p>
                        </GlassCard>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 relative z-10">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <GlassCard className="p-16 border-blue-500/20 bg-blue-500/5" hoverEffect={false}>
                        <p className="text-sm font-mono text-blue-400 uppercase tracking-widest mb-6">{t("CTA.badge")}</p>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase">{t("CTA.title")}</h2>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed">{t("CTA.subtitle")}</p>
                        <Link
                            href="/#contact"
                            className="inline-block px-12 py-5 bg-blue-600 text-white font-black uppercase tracking-widest text-sm rounded-full hover:bg-blue-500 hover:scale-105 transition-all shadow-[0_0_30px_rgba(59,130,246,0.4)]"
                        >
                            {t("CTA.button")}
                        </Link>
                    </GlassCard>
                </div>
            </section>

            <footer className="py-12 bg-black/40 border-t border-white/5 relative z-10">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-gray-600 text-sm max-w-4xl mx-auto leading-relaxed italic">
                        {t("SEO.description")}
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
