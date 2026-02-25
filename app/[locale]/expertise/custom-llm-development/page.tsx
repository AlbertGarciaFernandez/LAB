import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import HeroBackgroundOrnaments from "@/components/HeroBackgroundOrnaments";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { Link } from "@/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import * as motion from "framer-motion/client";
import Header from "@/components/layout/Header";

const baseUrl = "https://www.codehunterlab.com";
const path = "/expertise/custom-llm-development";

export async function generateMetadata({
    params,
}: {
    params: { locale: string };
}): Promise<Metadata> {
    const { locale } = params;
    return {
        title: "Custom LLM Development & Fine-Tuning Netherlands",
        description: "Build private AI models for your enterprise. We fine-tune Llama and Mistral models for specific business use cases in the Netherlands.",
        keywords: ["custom llm development", "fine-tuning ai models", "private ai server", "llama 3 business implementation"],
        alternates: {
            canonical: `${baseUrl}/${locale}${path}`,
            languages: {
                en: `${baseUrl}/en${path}`,
                es: `${baseUrl}/es${path}`,
                "x-default": `${baseUrl}/en${path}`,
            },
        },
        openGraph: {
            title: "Custom LLM Development & Fine-Tuning Netherlands",
            description: "Build private AI models for your enterprise. We fine-tune Llama and Mistral models for specific business use cases in the Netherlands.",
            url: `${baseUrl}/${locale}${path}`,
            siteName: "CodeHunter Lab",
            type: "website",
            locale: locale === "es" ? "es_ES" : "en_US",
        },
    };
}

export default function CustomLLMPage({ params: { locale } }: { params: { locale: string } }) {
    const t = useTranslations("ExpertisePages.CustomLLMs");

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `https://www.codehunterlab.com/${locale}` },
            { "@type": "ListItem", "position": 2, "name": "Expertise", "item": `https://www.codehunterlab.com/${locale}/expertise` },
            { "@type": "ListItem", "position": 3, "name": "Custom LLM Development", "item": `https://www.codehunterlab.com/${locale}/expertise/custom-llm-development` }
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
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 inline-block rounded-full bg-hunter-green/10 px-4 py-1.5 text-xs md:text-sm font-mono text-hunter-green border border-hunter-green/20 backdrop-blur-md"
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
                    <span className="text-gradient-green neon-glow-green">{t("Hero.title.highlight")}</span>
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
                        className="px-10 py-5 bg-hunter-green text-black font-black uppercase tracking-widest text-sm rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,230,162,0.4)]"
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
                            <GlassCard key={idx} hoverEffect={true} glowColor="green" className="p-10 flex flex-col h-full">
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
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="flex gap-6 p-8 rounded-2xl border border-white/5 bg-white/2 hover:border-hunter-green/20 transition-colors"
                            >
                                <span className="text-4xl font-black text-hunter-green/30 font-mono shrink-0">{step.number}</span>
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
                            <GlassCard key={idx} hoverEffect={true} glowColor="green" className="p-8">
                                <span className="text-3xl mb-4 block">{c.icon}</span>
                                <h3 className="text-lg font-bold mb-2 text-white">{c.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{c.desc}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 relative z-10 border-t border-white/5">
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
            <section className="py-24 relative z-10 border-t border-white/5 bg-near-black/50 text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">{t("CTA.title")}</h2>
                    <p className="text-gray-400 text-lg mb-10">{t("CTA.subtitle")}</p>
                    <Link
                        href="/ai-consulting"
                        className="px-10 py-5 bg-hunter-green text-black font-black uppercase tracking-widest text-sm rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,230,162,0.4)]"
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
