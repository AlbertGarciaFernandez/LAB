"use client";

import { useTranslations } from "next-intl";
import HeroBackgroundOrnaments from "@/components/HeroBackgroundOrnaments";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { Link } from "@/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import { m } from "framer-motion";
import Header from "@/components/layout/Header";
import { TreeStructureIcon, TrendUpIcon, NetworkIcon, LightningIcon, CloudIcon, RobotIcon } from "@phosphor-icons/react/dist/ssr";

const useCaseIcons = [TreeStructureIcon, TrendUpIcon, NetworkIcon, LightningIcon, CloudIcon, RobotIcon];

export default function SystemArchitecturePageContent() {
    const t = useTranslations("ExpertisePages.SystemArchitecture");

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `https://www.codehunterlab.com/en` },
            { "@type": "ListItem", "position": 2, "name": "Expertise", "item": `https://www.codehunterlab.com/en/expertise` },
            { "@type": "ListItem", "position": 3, "name": "System Architecture Design", "item": `https://www.codehunterlab.com/en/expertise/system-architecture-design` }
        ]
    };

    return (
        <>
        <Header />
        <main className="relative min-h-screen bg-near-black text-white overflow-hidden">
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
                >
                    <Link
                        href="/#contact"
                        className="px-10 py-5 bg-hunter-orange text-black font-black uppercase tracking-widest text-sm rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,122,60,0.4)]"
                    >
                        {t("Hero.cta")}
                    </Link>
                </m.div>
            </section>

            {/* Features Grid */}
            <section className="py-24 relative z-10 border-t border-white/5 bg-near-black/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">{t("Features.title")}</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {t.raw("Features.cards").map((card: any) => (
                            <GlassCard key={card.title} hoverEffect={true} glowColor="orange" className="p-10 flex flex-col h-full">
                                <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-tight">{card.title}</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    {card.desc}
                                </p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-24 relative z-10 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">{t("Process.title")}</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t("Process.subtitle")}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {t.raw("Process.steps").map((step: any, idx: number) => (
                            <m.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="flex gap-6 p-8 rounded-2xl border border-white/5 bg-white/2 hover:border-hunter-orange/20 transition-colors"
                            >
                                <span className="text-4xl font-black text-hunter-orange/30 font-mono shrink-0">{step.number}</span>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                                </div>
                            </m.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-24 relative z-10 border-t border-white/5 bg-near-black/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">{t("UseCases.title")}</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t("UseCases.subtitle")}</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {t.raw("UseCases.cases").map((c: any, idx: number) => {
                            const Icon = useCaseIcons[idx];
                            return (
                                <GlassCard key={c.title} hoverEffect={true} glowColor="orange" className="p-8">
                                    {Icon && <Icon size={32} className="mb-4 text-hunter-orange" />}
                                    <h3 className="text-lg font-bold mb-2 text-white">{c.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{c.desc}</p>
                                </GlassCard>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 relative z-10 border-t border-white/5 text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">{t("CTA.title")}</h2>
                    <p className="text-gray-400 text-lg mb-10">{t("CTA.subtitle")}</p>
                    <Link
                        href="/ai-consulting"
                        className="px-10 py-5 bg-hunter-orange text-black font-black uppercase tracking-widest text-sm rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,122,60,0.4)]"
                    >
                        {t("CTA.button")}
                    </Link>
                </div>
            </section>

            {/* SEO Footer */}
            <footer className="py-12 bg-black/40 border-t border-white/5 relative z-10 overflow-hidden">
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
