import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import HeroBackgroundOrnaments from "@/components/HeroBackgroundOrnaments";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { Link } from "@/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import * as motion from "framer-motion/client";
import Header from "@/components/layout/Header";

const baseUrl = "https://www.codehunterlab.com";
const path = "/expertise/n8n-migration-consulting";

export async function generateMetadata({
    params,
}: {
    params: { locale: string };
}): Promise<Metadata> {
    const { locale } = params;
    return {
        title: "n8n Consulting & Migration Services | Zapier Alternative",
        description: "Expert n8n consultants in the Netherlands. We migrate tailored workflows from Zapier and Make to n8n for better performance and lower costs.",
        keywords: ["n8n consultant netherlands", "migrate from zapier to n8n", "workflow automation expert", "self-hosted automation"],
        alternates: {
            canonical: `${baseUrl}/${locale}${path}`,
            languages: {
                en: `${baseUrl}/en${path}`,
                es: `${baseUrl}/es${path}`,
                "x-default": `${baseUrl}/en${path}`,
            },
        },
        openGraph: {
            title: "n8n Consulting & Migration Services | Zapier Alternative",
            description: "Expert n8n consultants in the Netherlands. We migrate tailored workflows from Zapier and Make to n8n for better performance and lower costs.",
            url: `${baseUrl}/${locale}${path}`,
            siteName: "CodeHunter Lab",
            type: "website",
            locale: locale === "es" ? "es_ES" : "en_US",
        },
    };
}

export default function n8nMigrationPage({ params: { locale } }: { params: { locale: string } }) {
    const t = useTranslations("ExpertisePages.n8nMigration");

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How long does a migration take?",
                "acceptedAnswer": { "@type": "Answer", "text": "Most migrations take 1-3 weeks depending on the number and complexity of workflows. Simple setups (under 10 workflows) can be live in 5 days." }
            },
            {
                "@type": "Question",
                "name": "Do I need my own server to run n8n?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. We recommend a VPS (like Hetzner or DigitalOcean) for €5-15/month. We handle the full server setup, SSL, backups, and monitoring as part of the migration." }
            },
            {
                "@type": "Question",
                "name": "What happens to my existing Zapier workflows during migration?",
                "acceptedAnswer": { "@type": "Answer", "text": "Nothing. We build the n8n version in parallel and only switch over after full testing. Your Zapier workflows keep running until you approve the cutover." }
            },
            {
                "@type": "Question",
                "name": "Can you add new logic that Zapier could not handle?",
                "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. n8n supports full JavaScript/Python code nodes, complex branching, sub-workflows, and API calls that Zapier simply cannot execute. We often improve workflows significantly during migration." }
            }
        ]
    };

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `https://www.codehunterlab.com/${locale}` },
            { "@type": "ListItem", "position": 2, "name": "Expertise", "item": `https://www.codehunterlab.com/${locale}/expertise` },
            { "@type": "ListItem", "position": 3, "name": "n8n Migration Consulting", "item": `https://www.codehunterlab.com/${locale}/expertise/n8n-migration-consulting` }
        ]
    };

    return (
        <>
        <Header />
        <main className="relative min-h-screen bg-near-black text-white overflow-hidden">
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
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 inline-block rounded-full bg-hunter-orange/10 px-4 py-1.5 text-xs md:text-sm font-mono text-hunter-orange border border-hunter-orange/20 backdrop-blur-md"
                >
                    <ScrambleText text={t("Hero.badge")} />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]"
                >
                    {t("Hero.title.part1")} <br />
                    <span className="text-gradient-fire neon-glow-orange">{t("Hero.title.highlight")}</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="max-w-2xl text-lg md:text-2xl text-gray-300 mb-12 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: t.raw("Hero.description") }}
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Link
                        href="/ai-consulting"
                        className="px-10 py-5 bg-hunter-orange text-black font-black uppercase tracking-widest text-sm rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,122,60,0.4)]"
                    >
                        {t("Hero.cta")}
                    </Link>
                </motion.div>
            </section>

            {/* Features Grid */}
            <section className="py-24 relative z-10 border-t border-white/5 bg-near-black/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">{t("Features.title")}</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {t.raw("Features.cards").map((card: any, idx: number) => (
                            <GlassCard key={idx} hoverEffect={true} glowColor="orange" className="p-10 flex flex-col h-full">
                                <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-tight">{card.title}</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">{card.desc}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Migration Process */}
            <section className="py-24 relative z-10 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">{t("Process.title")}</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t("Process.subtitle")}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {t.raw("Process.steps").map((step: any, idx: number) => (
                            <motion.div
                                key={idx}
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
                            </motion.div>
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
                        {t.raw("UseCases.cases").map((c: any, idx: number) => (
                            <GlassCard key={idx} hoverEffect={true} glowColor="orange" className="p-8">
                                <span className="text-3xl mb-4 block">{c.icon}</span>
                                <h3 className="text-lg font-bold mb-2 text-white">{c.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{c.desc}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison */}
            <section className="py-24 relative z-10 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">{t("Comparison.title")}</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { key: "zapier", negative: true },
                            { key: "make", negative: true },
                            { key: "n8n", negative: false },
                        ].map(({ key, negative }) => {
                            const col = t.raw(`Comparison.${key}`) as any;
                            return (
                                <GlassCard key={key} glowColor={negative ? undefined : "orange"} className={`p-8 ${!negative ? "border-hunter-orange/30" : ""}`}>
                                    <h3 className={`text-xl font-bold mb-6 ${!negative ? "text-hunter-orange" : "text-gray-400"}`}>{col.name}</h3>
                                    <ul className="space-y-3">
                                        {(col.cons || col.pros).map((item: string, i: number) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                                <span className={`mt-0.5 shrink-0 ${negative ? "text-red-400" : "text-hunter-green"}`}>{negative ? "✕" : "✓"}</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </GlassCard>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 relative z-10 border-t border-white/5 bg-near-black/50">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">{t("FAQ.title")}</h2>
                    </div>
                    <div className="space-y-6">
                        {t.raw("FAQ.items").map((item: any, idx: number) => (
                            <div key={idx} className="p-8 rounded-2xl border border-white/5 bg-white/2">
                                <h3 className="text-lg font-bold mb-3 text-white">{item.q}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
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
