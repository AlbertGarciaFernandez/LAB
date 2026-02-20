import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import HeroBackgroundOrnaments from "@/components/HeroBackgroundOrnaments";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { Link } from "@/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import * as motion from "framer-motion/client";

const baseUrl = "https://www.codehunterlab.com";
const path = "/it-system-integration";

export async function generateMetadata({
    params,
}: {
    params: { locale: string };
}): Promise<Metadata> {
    const { locale } = params;
    return {
        title: "IT System Integration Services Netherlands | API & CRM Connection",
        description: "Expert IT integration consultant in the Netherlands. We connect APIs, CRMs, ERPs, and build internal tools to streamline operations in Leiden, Amsterdam and Rotterdam.",
        keywords: ["IT consultant Netherlands", "software integration company", "API integration services", "CRM integration", "ERP consulting", "n8n automation netherlands", "system architect nl"],
        alternates: {
            canonical: `${baseUrl}/${locale}${path}`,
            languages: {
                en: `${baseUrl}/en${path}`,
                es: `${baseUrl}/es${path}`,
                "x-default": `${baseUrl}/en${path}`,
            },
        },
        openGraph: {
            title: "IT System Integration Services Netherlands | API & CRM Connection",
            description: "Expert IT integration consultant in the Netherlands. We connect APIs, CRMs, ERPs, and build internal tools to streamline operations in Leiden, Amsterdam and Rotterdam.",
            url: `${baseUrl}/${locale}${path}`,
            siteName: "CodeHunter Lab",
            type: "website",
            locale: locale === "es" ? "es_ES" : "en_US",
        },
    };
}

export default function ITSystemIntegration({ params: { locale } }: { params: { locale: string } }) {
    const t = useTranslations("ITSystemIntegration");

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `https://www.codehunterlab.com/${locale}` },
            { "@type": "ListItem", "position": 2, "name": "IT System Integration", "item": `https://www.codehunterlab.com/${locale}/it-system-integration` }
        ]
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is system integration?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It's the process of connecting different sub-systems (like your CRM, ERP, and payment gateways) into a single, cohesive unit where data flows automatically."
                }
            },
            {
                "@type": "Question",
                "name": "Do you use automation tools like n8n or Make.com?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We are experts in n8n and Make, but we also build custom API bridges when 'off-the-shelf' tools hit their limits."
                }
            },
            {
                "@type": "Question",
                "name": "How do you handle data security during integration?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We prioritize data sovereignty. We often deploy self-hosted integration engines so your sensitive business data never leaves your infrastructure."
                }
            }
        ]
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

    return (
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
                    className="mb-8 inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-xs md:text-sm font-mono text-blue-400 border border-blue-500/20 backdrop-blur-md"
                >
                    <ScrambleText text={t("Hero.badge")} />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]"
                >
                    {t("Hero.title.part1")} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 neon-glow-green">
                        {t("Hero.title.highlight")}
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-2xl text-lg md:text-2xl text-gray-400 mb-12 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: t.raw("Hero.description") }}
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Link
                        href="/#contact"
                        className="px-10 py-5 bg-blue-600 text-white font-black uppercase tracking-widest text-sm rounded-full hover:bg-blue-500 hover:scale-105 transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                    >
                        {t("Hero.cta")}
                    </Link>
                </motion.div>
            </section>

            {/* Visual Workflow Section */}
            <section className="py-24 relative z-10">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent hidden md:block -translate-y-1/2" />

                        {/* Box 1 */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="relative z-10 w-full md:w-1/3"
                        >
                            <GlassCard className="p-10 text-center border-white/5 hover:border-blue-500/30 transition-colors" hoverEffect={true} glowColor="green">
                                <div className="text-5xl mb-6">📊</div>
                                <h3 className="text-2xl font-black mb-3 uppercase tracking-tight">{t("Diagram.source.title")}</h3>
                                <p className="text-gray-400 font-medium">{t("Diagram.source.desc")}</p>
                            </GlassCard>
                        </motion.div>

                        {/* Engine Hook */}
                        <motion.div
                            animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="relative z-20 w-full md:w-1/3"
                        >
                            <GlassCard className="p-10 text-center border-blue-500/30 bg-blue-500/5 shadow-[0_0_50px_rgba(59,130,246,0.1)]" hoverEffect={true} glowColor="green">
                                <div className="text-5xl mb-6">⚙️</div>
                                <h3 className="text-2xl font-black mb-3 uppercase tracking-tight text-blue-400">{t("Diagram.engine.title")}</h3>
                                <p className="text-blue-200/60 font-mono text-sm">{t("Diagram.engine.desc")}</p>
                            </GlassCard>
                        </motion.div>

                        {/* Box 3 */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="relative z-10 w-full md:w-1/3"
                        >
                            <GlassCard className="p-10 text-center border-white/5 hover:border-purple-500/30 transition-colors" hoverEffect={true} glowColor="green">
                                <div className="text-5xl mb-6">🚀</div>
                                <h3 className="text-2xl font-black mb-3 uppercase tracking-tight">{t("Diagram.outcome.title")}</h3>
                                <p className="text-gray-400 font-medium">{t("Diagram.outcome.desc")}</p>
                            </GlassCard>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Services */}
            <section className="py-32 max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    <GlassCard className="p-10 border-white/5 hover:bg-white/[0.02]" hoverEffect={true} glowColor="green">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-3xl mb-8 border border-blue-500/20">🔌</div>
                        <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{t("Services.api.title")}</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">{t("Services.api.desc")}</p>
                    </GlassCard>

                    <GlassCard className="p-10 border-white/5 hover:bg-white/[0.02]" hoverEffect={true} glowColor="green">
                        <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-3xl mb-8 border border-indigo-500/20">🏗️</div>
                        <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{t("Services.legacy.title")}</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">{t("Services.legacy.desc")}</p>
                    </GlassCard>

                    <GlassCard className="p-10 border-white/5 hover:bg-white/[0.02]" hoverEffect={true} glowColor="green">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-3xl mb-8 border border-purple-500/20">🔄</div>
                        <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{t("Services.sync.title")}</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">{t("Services.sync.desc")}</p>
                    </GlassCard>
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
                        <GlassCard key={idx} className="p-8 group" hoverEffect={true} glowColor="green">
                            <h3 className="text-2xl font-bold mb-4 text-white flex gap-4 items-center">
                                <span className="text-blue-500 group-hover:translate-x-1 transition-transform">→</span>
                                {item.q}
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed pl-10 border-l border-white/10">
                                {item.a}
                            </p>
                        </GlassCard>
                    ))}
                </div>
            </section>

            <footer className="py-20 bg-black/40 border-t border-white/5 relative z-10">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="flex flex-wrap justify-center gap-6 opacity-30 text-[10px] font-mono uppercase tracking-[0.3em] text-gray-400">
                        <span>Hubspot</span>
                        <span>Salesforce</span>
                        <span>SAP</span>
                        <span>Airtable</span>
                        <span>SQL</span>
                        <span>n8n</span>
                        <span>Make.com</span>
                    </div>
                </div>
            </footer>
        </main>
    );
}

