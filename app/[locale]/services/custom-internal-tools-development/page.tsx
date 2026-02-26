import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import HeroBackgroundOrnaments from "@/components/HeroBackgroundOrnaments";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { Link } from "@/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import * as motion from "framer-motion/client";
import Header from "@/components/layout/Header";
import { ChartBarIcon, LockKeyIcon, CalendarIcon } from "@phosphor-icons/react/dist/ssr";

const baseUrl = "https://www.codehunterlab.com";
const path = "/services/custom-internal-tools-development";

export async function generateMetadata({
    params,
}: {
    params: { locale: string };
}): Promise<Metadata> {
    const { locale } = params;
    return {
        title: "Custom Internal Tools Development — CodeHunter Lab",
        description: "Expert developer of custom internal tools, admin panels, and operation dashboards. Scale your business without per-user fees in the Netherlands.",
        keywords: ["build internal tools for business", "custom admin panel development", "workflow automation consulting", "replace excel with app", "internal software developer nl", "maatwerk software ontwikkeling"],
        alternates: {
            canonical: `${baseUrl}/${locale}${path}`,
            languages: {
                en: `${baseUrl}/en${path}`,
                es: `${baseUrl}/es${path}`,
                "x-default": `${baseUrl}/en${path}`,
            },
        },
        openGraph: {
            title: "Custom Internal Tools Development — CodeHunter Lab",
            description: "Expert developer of custom internal tools, admin panels, and operation dashboards. Scale your business without per-user fees in the Netherlands.",
            url: `${baseUrl}/${locale}${path}`,
            siteName: "CodeHunter Lab",
            type: "website",
            locale: locale === "es" ? "es_ES" : "en_US",
        },
    };
}

export default function CustomInternalTools({ params: { locale } }: { params: { locale: string } }) {
    const t = useTranslations("InternalTools");

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Why build a custom internal tool instead of using Retool or Appsmith?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For many businesses, low-code per-user fees become a massive hidden cost as you grow. Our custom-built tools have zero monthly user fees and 100% flexibility."
                }
            },
            {
                "@type": "Question",
                "name": "Can my internal tool sync with Excel or Google Sheets?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We usually help businesses graduate from sheets to a real database (like Supabase or PostgreSQL) while keeping the sheets as a backup or input method if needed."
                }
            }
        ]
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Custom Software Development",
        "provider": {
            "@type": "Organization",
            "name": "CodeHunter Lab",
            "url": "https://www.codehunterlab.com"
        },
        "description": "Designing and building custom software to solve internal operational bottlenecks without vendor lock-in.",
        "areaServed": "Netherlands",
        "offers": {
            "@type": "Offer",
            "description": "Fixed-price MVP development for internal tools"
        }
    };

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `https://www.codehunterlab.com/${locale}` },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": `https://www.codehunterlab.com/${locale}/services` },
            { "@type": "ListItem", "position": 3, "name": "Custom Internal Tools", "item": `https://www.codehunterlab.com/${locale}/services/custom-internal-tools-development` }
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
                    className="mb-8 inline-block rounded-full bg-purple-500/10 px-4 py-1.5 text-xs md:text-sm font-mono text-purple-400 border border-purple-500/20 backdrop-blur-md"
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
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 neon-glow-orange">
                        {t("Hero.title.highlight")}
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="max-w-2xl text-lg md:text-2xl text-gray-400 mb-12 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: t.raw("Hero.description") }}
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Link
                        href="/#contact"
                        className="px-10 py-5 bg-purple-600 text-white font-black uppercase tracking-widest text-sm rounded-full hover:bg-purple-500 hover:scale-105 transition-all shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                    >
                        {t("Hero.cta")}
                    </Link>
                </motion.div>
            </section>

            {/* Comparison Section (Custom vs Low Code) */}
            <section className="py-24 relative z-10 border-y border-white/5 bg-surface-dark/10">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-black mb-16 text-center uppercase tracking-tighter">{t("Comparison.title")}</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Low Code (Bad) */}
                        <GlassCard className="p-10 border-red-500/20 bg-red-900/5 hover:bg-red-900/10 opacity-70 transition-all" hoverEffect={false}>
                            <h3 className="text-3xl font-black mb-8 text-red-500 uppercase italic">{t("Comparison.lowcode.title")}</h3>
                            <ul className="space-y-6">
                                {(t.raw("Comparison.lowcode.points") as string[]).map((point, i) => (
                                    <li key={i} className="flex gap-4 text-gray-400 text-lg">
                                        <span className="text-red-500 font-bold shrink-0">✕</span> {point}
                                    </li>
                                )) || null}
                            </ul>
                        </GlassCard>

                        {/* Custom (Good) */}
                        <GlassCard className="p-10 border-purple-500/30 bg-purple-900/10 relative overflow-hidden ring-2 ring-purple-500/20" hoverEffect={true} glowColor="orange">
                            <div className="absolute top-0 right-0 px-6 py-2 bg-purple-500 text-black text-xs font-black uppercase tracking-widest">Recommended</div>
                            <h3 className="text-3xl font-black mb-8 text-white uppercase italic">{t("Comparison.custom.title")}</h3>
                            <ul className="space-y-6">
                                {(t.raw("Comparison.custom.points") as string[]).map((point, i) => (
                                    <li key={i} className="flex gap-4 text-white text-lg font-medium">
                                        <span className="text-purple-400 font-bold shrink-0">✓</span> {point}
                                    </li>
                                )) || null}
                            </ul>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* Tools We Build Grid */}
            <section className="py-32 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">{t("Tools.title")}</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <GlassCard className="p-10 hover:bg-white/[0.02]" hoverEffect={true} glowColor="orange">
                            <div className="mb-8"><ChartBarIcon size={48} className="text-purple-400" /></div>
                            <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">{t("Tools.dashboards.title")}</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">{t("Tools.dashboards.desc")}</p>
                        </GlassCard>
                        <GlassCard className="p-10 border-purple-500/20" hoverEffect={true} glowColor="orange">
                            <div className="mb-8"><LockKeyIcon size={48} className="text-purple-400" /></div>
                            <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">{t("Tools.portals.title")}</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">{t("Tools.portals.desc")}</p>
                        </GlassCard>
                        <GlassCard className="p-10 hover:bg-white/[0.02]" hoverEffect={true} glowColor="orange">
                            <div className="mb-8"><CalendarIcon size={48} className="text-purple-400" /></div>
                            <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">{t("Tools.resource.title")}</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">{t("Tools.resource.desc")}</p>
                        </GlassCard>
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
                                className="flex gap-6 p-8 rounded-2xl border border-white/5 bg-white/2 hover:border-purple-500/20 transition-colors"
                            >
                                <span className="text-4xl font-black text-purple-400/30 font-mono shrink-0">{step.number}</span>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
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
                    {t.raw("FAQ.questions").map((item: any, idx: number) => (
                        <GlassCard key={idx} className="p-8 group" hoverEffect={true} glowColor="orange">
                            <h3 className="text-2xl font-bold mb-4 text-white flex gap-4 items-center">
                                <span className="text-purple-500 group-hover:rotate-90 transition-transform">→</span>
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
            <section className="py-24 relative z-10 border-t border-white/5 bg-near-black/50 text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">{t("CTA.title")}</h2>
                    <p className="text-gray-400 text-lg mb-10">{t("CTA.subtitle")}</p>
                    <Link
                        href="/ai-consulting"
                        className="inline-block px-10 py-5 bg-purple-600 text-white font-black uppercase tracking-widest text-sm rounded-full hover:bg-purple-500 hover:scale-105 transition-all shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                    >
                        {t("CTA.button")}
                    </Link>
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
