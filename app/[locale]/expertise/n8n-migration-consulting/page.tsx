import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import HeroBackgroundOrnaments from "@/components/HeroBackgroundOrnaments";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { Link } from "@/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import * as motion from "framer-motion/client";

export const metadata: Metadata = {
    title: "n8n Consulting & Migration Services | Zapier Alternative",
    description: "Expert n8n consultants in the Netherlands. We migrate tailored workflows from Zapier and Make to n8n for better performance and lower costs.",
    keywords: ["n8n consultant netherlands", "migrate from zapier to n8n", "workflow automation expert", "self-hosted automation"],
};

export default function n8nMigrationPage() {
    const t = useTranslations("ExpertisePages.n8nMigration");

    return (
        <main className="relative min-h-screen bg-near-black text-white overflow-hidden">
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
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    {card.desc}
                                </p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <footer className="py-20 bg-black/40 border-t border-white/5 relative z-10 overflow-hidden">
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
    );
}
