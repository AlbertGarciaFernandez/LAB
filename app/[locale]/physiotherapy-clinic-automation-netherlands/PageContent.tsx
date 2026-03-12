"use client";

import { useTranslations } from "next-intl";
import HeroBackgroundOrnaments from "@/components/HeroBackgroundOrnaments";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { Link } from "@/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import { CheckIcon, FileTextIcon, PersonSimpleWalkIcon, PhoneIcon, ChartLineUpIcon, TargetIcon, FirstAidKitIcon, ClipboardTextIcon, ChatCircleDotsIcon, ArrowsClockwiseIcon, ChartBarIcon } from "@phosphor-icons/react/dist/ssr";

const painPointIcons = [FileTextIcon, PersonSimpleWalkIcon, PhoneIcon, ChartLineUpIcon, TargetIcon, FirstAidKitIcon];
const solutionIcons = [ClipboardTextIcon, ChatCircleDotsIcon, ArrowsClockwiseIcon, ChartBarIcon, ChartLineUpIcon, FirstAidKitIcon];
import { m } from "framer-motion";
import Header from "@/components/layout/Header";

const physioSystems = [
    "Intramed", "Physiosoftware", "FysioRoadmap", "Zorgdomein", "WhatsApp Business API",
    "n8n", "HubSpot", "Google Ads", "ActiveCampaign", "Calendly",
];

export default function PhysiotherapyClinicAutomationContent() {
    const t = useTranslations("PhysiotherapyClinic");

    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Physiotherapy Practice Automation Netherlands",
        "provider": {
            "@type": "Organization",
            "name": "CodeHunter Lab",
            "url": "https://www.codehunterlab.com",
        },
        "areaServed": ["Netherlands", "Leiden", "Amsterdam", "Rotterdam", "Den Haag", "Utrecht"],
        "description": "Custom automation and integration systems for physiotherapy practices in the Netherlands — referral intake automation, appointment reminders, patient drop-out detection, Zorgdomein integration, and practice analytics dashboards.",
        "serviceType": "Physiotherapy Practice Automation & Integration",
        "offers": {
            "@type": "Offer",
            "price": "0.00",
            "priceCurrency": "EUR",
            "description": "Free physiotherapy practice automation audit",
        },
    };

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `https://www.codehunterlab.com/en` },
            { "@type": "ListItem", "position": 2, "name": "Physiotherapy Practice Automation Netherlands", "item": `https://www.codehunterlab.com/en/physiotherapy-clinic-automation-netherlands` },
        ],
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

    return (
        <>
        <Header />
        <main className="relative min-h-screen bg-near-black text-white overflow-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            <div className="bg-noise" />
            <HeroBackgroundOrnaments />

            {/* Hero Section */}
            <section className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 inline-block rounded-full bg-hunter-green/10 px-4 py-1.5 text-xs md:text-sm font-mono text-hunter-green border border-hunter-green/20 backdrop-blur-md"
                >
                    <ScrambleText text={t("Hero.badge")} />
                </m.div>

                <m.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.95]"
                >
                    {t("Hero.title.part1")} <br />
                    <span className="text-gradient-enchanted neon-glow-green">{t("Hero.title.highlight")}</span>
                    <br />
                    {t("Hero.title.part2")}
                </m.h1>

                <m.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="max-w-2xl text-lg md:text-xl text-gray-300 mb-12 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: t.raw("Hero.description") as string }}
                />

                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-5"
                >
                    <Link
                        href="/#contact"
                        className="px-10 py-5 bg-hunter-green text-black font-black uppercase tracking-widest text-sm rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,230,162,0.4)]"
                    >
                        {t("Hero.cta.primary")}
                    </Link>
                    <Link
                        href="#solutions"
                        className="px-10 py-5 bg-white/5 border border-white/10 backdrop-blur-xl text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white/10 transition-all"
                    >
                        {t("Hero.cta.secondary")}
                    </Link>
                </m.div>
            </section>

            {/* Language Note */}
            <section className="relative z-10 px-6 pb-4 max-w-4xl mx-auto">
                <div className="flex items-start gap-3 bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-sm text-gray-400 leading-relaxed">
                    <span className="text-hunter-green mt-0.5 flex-shrink-0">ℹ</span>
                    <p>{t("LanguageNote")}</p>
                </div>
            </section>

            {/* Systems Marquee */}
            <section className="py-12 border-y border-white/5 bg-near-black/50 backdrop-blur-sm relative z-10 overflow-hidden mt-8">
                <div className="flex space-x-12 animate-marquee whitespace-nowrap opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                    {physioSystems.map((sys) => (
                        <span key={`a-${sys}`} className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase italic">{sys}</span>
                    ))}
                    {physioSystems.map((sys) => (
                        <span key={`b-${sys}`} className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase italic">{sys}</span>
                    ))}
                </div>
            </section>

            {/* Pain Points */}
            <section className="py-32 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter uppercase text-center">
                        {t("PainPoints.title")}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {(t.raw("PainPoints.items") as Array<{ emoji: string; title: string; desc: string }>).map((item, idx) => {
                            const Icon = painPointIcons[idx];
                            return (
                                <GlassCard key={item.title} hoverEffect={true} glowColor="none" className="p-8 flex flex-col gap-4">
                                    {Icon && <Icon size={28} className="text-white/60" />}
                                    <h3 className="text-lg font-black text-white uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed flex-grow">{item.desc}</p>
                                </GlassCard>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Solutions */}
            <section id="solutions" className="py-32 bg-surface-dark/30 border-y border-white/5 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase">{t("Solutions.title")}</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t("Solutions.subtitle")}</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {(t.raw("Solutions.items") as Array<{ emoji: string; title: string; desc: string; result: string }>).map((item, idx) => {
                            const Icon = solutionIcons[idx];
                            return (
                                <GlassCard key={item.title} hoverEffect={true} glowColor="green" className="p-8 flex flex-col gap-4 h-full">
                                    <div className="w-12 h-12 rounded-xl bg-hunter-green/10 border border-hunter-green/20 flex items-center justify-center flex-shrink-0">
                                        {Icon && <Icon size={24} className="text-hunter-green" />}
                                    </div>
                                    <h3 className="text-xl font-black text-white uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed flex-grow">{item.desc}</p>
                                    <div className="mt-auto pt-4 border-t border-white/5">
                                        <p className="text-hunter-green text-xs font-mono font-bold uppercase tracking-wider">→ {item.result}</p>
                                    </div>
                                </GlassCard>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Scenarios */}
            <section className="py-32 relative z-10">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter uppercase text-center">{t("Scenarios.title")}</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {(t.raw("Scenarios.items") as Array<{ num: string; title: string; desc: string }>).map((item) => (
                            <GlassCard key={item.title} className="p-8 border-l-4 border-l-hunter-green group hover:bg-white/[0.02] transition-colors" hoverEffect={false}>
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-lg font-black text-white uppercase tracking-tight pr-4">{item.title}</h3>
                                    <span className="text-hunter-green font-mono text-xl opacity-30 flex-shrink-0">{item.num}</span>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us */}
            <section className="py-24 bg-surface-dark/30 relative z-10 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter uppercase text-center">{t("WhyUs.title")}</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {(t.raw("WhyUs.points") as Array<{ title: string; desc: string }>).map((point) => (
                            <GlassCard key={point.title} className="p-8 flex gap-6" hoverEffect={true} glowColor="green">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-hunter-green/10 flex items-center justify-center border border-hunter-green/30">
                                    <CheckIcon className="w-5 h-5 text-hunter-green" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tight">{point.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm">{point.desc}</p>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-32 relative z-10 max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">{t("FAQ.title")}</h2>
                    <p className="text-gray-400 text-xl">{t("FAQ.subtitle")}</p>
                </div>
                <div className="space-y-6">
                    {(t.raw("FAQ.questions") as Array<{ q: string; a: string }>).map((item) => (
                        <GlassCard key={item.q} className="p-8 group cursor-default" hoverEffect={true} glowColor="green">
                            <h3 className="text-xl font-bold mb-4 text-white flex gap-4 items-start">
                                <span className="text-hunter-green group-hover:rotate-90 transition-transform flex-shrink-0 mt-0.5">→</span>
                                {item.q}
                            </h3>
                            <p className="text-gray-400 leading-relaxed pl-8 border-l border-white/10 text-sm">{item.a}</p>
                        </GlassCard>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative z-10">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <GlassCard className="p-12 md:p-16 border-hunter-green/20 bg-hunter-green/5" hoverEffect={false}>
                        <p className="text-sm font-mono text-hunter-green uppercase tracking-widest mb-6">{t("CTA.label")}</p>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase">{t("CTA.title")}</h2>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed">{t("CTA.desc")}</p>
                        <Link
                            href="/#contact"
                            className="inline-block px-12 py-5 bg-hunter-green text-black font-black uppercase tracking-widest text-sm rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,230,162,0.4)]"
                        >
                            {t("CTA.button")}
                        </Link>
                        <p className="text-gray-600 text-xs mt-6 font-mono">{t("CTA.subtext")}</p>
                    </GlassCard>
                </div>
            </section>

            {/* SEO Footer */}
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
