import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import HeroBackgroundOrnaments from "@/components/HeroBackgroundOrnaments";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { Link } from "@/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import Header from "@/components/layout/Header";

const baseUrl = "https://www.codehunterlab.com";
const path = "/ai-automation-consulting-netherlands";

export async function generateMetadata({
    params,
}: {
    params: { locale: string };
}): Promise<Metadata> {
    const { locale } = params;
    return {
        title: "AI Automation Consultancy Netherlands | ROI-Driven AI Agents",
        description: "Premier AI automation agency in Leiden & Netherlands. We build WhatsApp Bots, AI Voice Agents, and custom n8n workflows that save money and increase revenue.",
        keywords: ["AI agency Leiden", "AI automation consultancy Netherlands", "WhatsApp Bot Business", "AI Voice Agent Netherlands", "n8n automation consultant"],
        alternates: {
            canonical: `${baseUrl}/${locale}${path}`,
            languages: {
                en: `${baseUrl}/en${path}`,
                es: `${baseUrl}/es${path}`,
                "x-default": `${baseUrl}/en${path}`,
            },
        },
        openGraph: {
            title: "AI Automation Consultancy Netherlands | ROI-Driven AI Agents",
            description: "Premier AI automation agency in Leiden & Netherlands. We build WhatsApp Bots, AI Voice Agents, and custom n8n workflows that save money and increase revenue.",
            url: `${baseUrl}/${locale}${path}`,
            siteName: "CodeHunter Lab",
            type: "website",
            locale: locale === "es" ? "es_ES" : "en_US",
        },
    };
}

export default function AIAutomationNetherlands({ params: { locale } }: { params: { locale: string } }) {
    const t = useTranslations("AIAutomationNL");

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `https://www.codehunterlab.com/${locale}` },
            { "@type": "ListItem", "position": 2, "name": "AI Automation Netherlands", "item": `https://www.codehunterlab.com/${locale}/ai-automation-consulting-netherlands` }
        ]
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is an AI Agent?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "An AI Agent is a piece of software that can perceive its environment, reason about it, and take actions to achieve a goal. Unlike a simple chatbot, it can execute tasks like booking appointments or updating your CRM."
                }
            },
            {
                "@type": "Question",
                "name": "How much can AI automation save my business?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "On average, our clients see a 40% reduction in customer support costs and a significant boost in lead response times, often leading to a 20%+ increase in top-line revenue."
                }
            }
        ]
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "AI Automation Consulting",
        "provider": {
            "@type": "Organization",
            "name": "CodeHunter Lab"
        },
        "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 52.1601,
                "longitude": 4.4970 // Leiden coordinates
            },
            "geoRadius": "50000"
        },
        "description": "We specialize in ROI-driven AI automation for businesses in the Netherlands.",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "AI Services",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "WhatsApp AI Agents" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Voice Calling Bots" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "n8n Workflow Automation" } }
            ]
        }
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
                <div className="mb-6 inline-block rounded-full bg-hunter-green/10 px-4 py-1.5 text-sm font-mono text-hunter-green border border-hunter-green/20 backdrop-blur-md animate-pulse-slow">
                    <ScrambleText text={t("Hero.badge")} />
                </div>

                <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8">
                    {t("Hero.title.part1")} <span className="text-gradient-enchanted neon-glow-green">{t("Hero.title.highlight")}</span> <br />
                    <span className="text-2xl md:text-5xl font-light text-gray-300">{t("Hero.title.sub")}</span>
                </h1>

                <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw("Hero.description") }} />

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="/#contact"
                        className="px-8 py-4 bg-hunter-green text-black font-bold rounded-lg hover:bg-green-400 transition-all shadow-[0_0_20px_rgba(0,230,162,0.3)] hover:shadow-[0_0_35px_rgba(0,230,162,0.6)]"
                    >
                        {t("Hero.cta.primary")}
                    </Link>
                    <Link
                        href="#agents"
                        className="px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md text-white font-medium rounded-lg hover:bg-white/10 transition-all"
                    >
                        {t("Hero.cta.secondary")}
                    </Link>
                </div>
            </section>

            {/* AI Agents Showcase */}
            <section id="agents" className="py-20 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                        {t("Agents.title.part1")} <span className="text-gradient-enchanted">{t("Agents.title.highlight")}</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* WhatsApp Bot */}
                        <GlassCard hoverEffect={true} glowColor="green" className="p-8">
                            <div className="text-5xl mb-6">💬</div>
                            <h3 className="text-2xl font-bold mb-4 text-white">{t("Agents.whatsapp.title")}</h3>
                            <p className="text-gray-400 mb-6 font-light leading-relaxed">
                                {t("Agents.whatsapp.desc")}
                            </p>
                            <div className="border-t border-white/10 pt-4">
                                <h4 className="text-sm font-bold text-hunter-green mb-2 uppercase tracking-wider">{t("Agents.label.capabilities")}</h4>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    {(t.raw("Agents.whatsapp.points") as string[]).map((point, i) => (
                                        <li key={i} className="flex gap-2 items-center"><span className="text-hunter-green">●</span> {point}</li>
                                    ))}
                                </ul>
                            </div>
                        </GlassCard>

                        {/* Voice AI */}
                        <GlassCard hoverEffect={true} glowColor="green" className="p-8 bg-hunter-green/5 border-hunter-green/30 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-2 bg-hunter-green text-black text-xs font-bold rounded-bl-lg">{t("Agents.label.popular")}</div>
                            <div className="text-5xl mb-6">🎙️</div>
                            <h3 className="text-2xl font-bold mb-4 text-white">{t("Agents.voice.title")}</h3>
                            <p className="text-gray-400 mb-6 font-light leading-relaxed">
                                {t("Agents.voice.desc")}
                            </p>
                            <div className="border-t border-white/10 pt-4">
                                <h4 className="text-sm font-bold text-hunter-green mb-2 uppercase tracking-wider">{t("Agents.label.capabilities")}</h4>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    {(t.raw("Agents.voice.points") as string[]).map((point, i) => (
                                        <li key={i} className="flex gap-2 items-center"><span className="text-hunter-green">●</span> {point}</li>
                                    ))}
                                </ul>
                            </div>
                        </GlassCard>

                        {/* n8n Automation */}
                        <GlassCard hoverEffect={true} glowColor="green" className="p-8">
                            <div className="text-5xl mb-6">⚡</div>
                            <h3 className="text-2xl font-bold mb-4 text-white">{t("Agents.automation.title")}</h3>
                            <p className="text-gray-400 mb-6 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw("Agents.automation.desc") }} />
                            <div className="border-t border-white/10 pt-4">
                                <h4 className="text-sm font-bold text-hunter-green mb-2 uppercase tracking-wider">{t("Agents.label.capabilities")}</h4>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    {(t.raw("Agents.automation.points") as string[]).map((point, i) => (
                                        <li key={i} className="flex gap-2 items-center"><span className="text-hunter-green">●</span> {point}</li>
                                    ))}
                                </ul>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* ROI / Business Impact Section */}
            <section className="py-24 relative z-10 overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-hunter-green/5 rounded-full blur-[100px] -z-10" />

                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        {t("ROI.title.part1")} <br />
                        <span className="text-white">{t("ROI.title.part2")}</span> <span className="text-hunter-orange neon-glow-orange">{t("ROI.title.highlight")}</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto font-light">
                        {t("ROI.description")}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 text-left">
                        <GlassCard className="flex flex-col justify-center p-10 bg-gradient-to-br from-white/5 to-hunter-orange/5 border-hunter-orange/20" glowColor="orange">
                            <div className="text-hunter-orange font-mono text-xl mb-2 flex items-center gap-2">
                                <span>📉</span> {t("ROI.cards.0.label")}
                            </div>
                            <div className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
                                {t("ROI.cards.0.value")}
                            </div>
                            <p className="text-gray-300 text-lg font-light">
                                {t("ROI.cards.0.desc")}
                            </p>
                        </GlassCard>
                        <GlassCard className="flex flex-col justify-center p-10 bg-gradient-to-br from-white/5 to-hunter-green/5 border-hunter-green/20" glowColor="green">
                            <div className="text-hunter-green font-mono text-xl mb-2 flex items-center gap-2">
                                <span>📈</span> {t("ROI.cards.1.label")}
                            </div>
                            <div className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
                                {t("ROI.cards.1.value")}
                            </div>
                            <p className="text-gray-300 text-lg font-light">
                                {t("ROI.cards.1.desc")}
                            </p>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* "What we don't do" Trust Section - Refined */}
            <section className="py-20 border-y border-white/5 relative z-10 bg-black/20 backdrop-blur-sm">
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 text-left">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">{t("Trust.dont.title.part1")} <span className="text-red-500 neon-glow-orange">{t("Trust.dont.title.highlight")}</span> {t("Trust.dont.title.part2")}</h2>
                        <ul className="space-y-6 text-gray-400">
                            {[0, 1].map((i) => (
                                <li key={i} className="flex items-start gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                                    <span className="text-red-500 text-2xl font-bold">✕</span>
                                    <span className="leading-relaxed">{t(`Trust.dont.points.${i}`)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-6">{t("Trust.do.title.part1")} <span className="text-hunter-green neon-glow-green">{t("Trust.do.title.highlight")}</span></h2>
                        <ul className="space-y-6 text-gray-300">
                            {[0, 1].map((i) => (
                                <li key={i} className="flex items-start gap-4 p-4 rounded-xl bg-hunter-green/5 border border-hunter-green/10">
                                    <span className="text-hunter-green text-2xl font-bold">✓</span>
                                    <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw(`Trust.do.points.${i}`) }} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-32 relative z-10 max-w-4xl mx-auto px-6 border-t border-white/5">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">{t("SEO.faq.title")}</h2>
                </div>

                <div className="space-y-6">
                    {t.raw("SEO.faq.questions").map((item: any, idx: number) => (
                        <GlassCard key={idx} className="p-8 group" hoverEffect={true} glowColor="green">
                            <h3 className="text-2xl font-bold mb-4 text-white flex gap-4 items-center">
                                <span className="text-hunter-green group-hover:rotate-90 transition-transform">→</span>
                                {item.q}
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed pl-10 border-l border-white/10">
                                {item.a}
                            </p>
                        </GlassCard>
                    ))}
                </div>
            </section>

            {/* SEO Text Block */}
            <section className="py-20 bg-black/40 border-t border-white/5 relative z-10 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-gray-600 text-sm max-w-4xl mx-auto leading-relaxed italic">
                        {t("SEO.footer")}
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4 opacity-20 text-[10px] font-mono uppercase tracking-widest text-gray-400">
                        {t("SEO.keywords").split(",").map((kw: string) => (
                            <span key={kw}>{kw.trim()}</span>
                        ))}
                    </div>
                </div>
            </section>

        </main>
        </>
    );
}
