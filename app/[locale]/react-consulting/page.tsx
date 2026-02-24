import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import HeroBackgroundOrnaments from "@/components/HeroBackgroundOrnaments";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { Link } from "@/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import { CheckIcon, XIcon } from "@phosphor-icons/react/dist/ssr";
import * as motion from "framer-motion/client";
import Header from "@/components/layout/Header";

const baseUrl = "https://www.codehunterlab.com";
const path = "/react-consulting";

export async function generateMetadata({
    params,
}: {
    params: { locale: string };
}): Promise<Metadata> {
    const { locale } = params;
    return {
        title: "React Consulting Services Netherlands | Architecture & Audit | CodeHunter Lab",
        description: "Senior React consulting in the Netherlands. Codebase audits, architecture design, and React migrations. We join your team and fix the hard problems. Based in Leiden.",
        keywords: [
            "React consulting Netherlands",
            "React architecture consultant",
            "hire React developer Netherlands",
            "React codebase audit",
            "React refactoring services",
            "senior React developer Leiden",
            "React performance consulting",
            "frontend architecture Netherlands",
        ],
        alternates: {
            canonical: `${baseUrl}/${locale}${path}`,
            languages: {
                en: `${baseUrl}/en${path}`,
                es: `${baseUrl}/es${path}`,
                "x-default": `${baseUrl}/en${path}`,
            },
        },
        openGraph: {
            title: "React Consulting Services Netherlands | Architecture & Audit | CodeHunter Lab",
            description: "Senior React consulting in the Netherlands. Codebase audits, architecture design, and React migrations. We join your team and fix the hard problems. Based in Leiden.",
            url: `${baseUrl}/${locale}${path}`,
            siteName: "CodeHunter Lab",
            type: "website",
            locale: locale === "es" ? "es_ES" : "en_US",
        },
    };
}

export default function ReactConsulting({ params: { locale } }: { params: { locale: string } }) {
    const t = useTranslations("ReactConsulting");

    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "React Consulting Services Netherlands",
        "provider": {
            "@type": "Organization",
            "name": "CodeHunter Lab",
            "url": "https://www.codehunterlab.com",
        },
        "areaServed": ["Netherlands", "Leiden", "Amsterdam", "Rotterdam", "Den Haag"],
        "description": "Senior React consulting including codebase audits, architecture design, performance optimization, and React migration services.",
        "serviceType": "React Frontend Consulting",
        "offers": {
            "@type": "Offer",
            "price": "0.00",
            "priceCurrency": "EUR",
            "description": "Free 1-hour discovery call",
        },
    };

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `https://www.codehunterlab.com/${locale}` },
            { "@type": "ListItem", "position": 2, "name": "React Consulting", "item": `https://www.codehunterlab.com/${locale}/react-consulting` },
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

    const consultingPoints = t.raw("Comparison.consulting.points") as string[];
    const hiringPoints = t.raw("Comparison.hiring.points") as string[];

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
                    dangerouslySetInnerHTML={{ __html: t.raw("Hero.description") as string }}
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-5"
                >
                    <Link
                        href="/#contact"
                        className="px-10 py-5 bg-hunter-orange text-black font-black uppercase tracking-widest text-sm rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,122,60,0.4)]"
                    >
                        {t("Hero.cta.primary")}
                    </Link>
                    <Link
                        href="#services"
                        className="px-10 py-5 bg-white/5 border border-white/10 backdrop-blur-xl text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white/10 transition-all"
                    >
                        {t("Hero.cta.secondary")}
                    </Link>
                </motion.div>
            </section>

            {/* Tech Stack Marquee */}
            <section className="py-12 border-y border-white/5 bg-near-black/50 backdrop-blur-sm relative z-10 overflow-hidden">
                <div className="flex space-x-12 animate-marquee whitespace-nowrap opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                    {["React 18", "TypeScript", "Zustand", "TanStack Query", "Vite", "Vitest", "React Testing Library", "Storybook", "Tailwind CSS", "Framer Motion"].map((tech) => (
                        <span key={tech} className="text-2xl md:text-3xl font-black tracking-tighter text-white uppercase italic">{tech}</span>
                    ))}
                    {["React 18", "TypeScript", "Zustand", "TanStack Query", "Vite", "Vitest", "React Testing Library", "Storybook", "Tailwind CSS", "Framer Motion"].map((tech) => (
                        <span key={`${tech}-2`} className="text-2xl md:text-3xl font-black tracking-tighter text-white uppercase italic">{tech}</span>
                    ))}
                </div>
            </section>

            {/* Services Grid */}
            <section id="services" className="py-32 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        <GlassCard hoverEffect={true} glowColor="orange" className="p-10 flex flex-col h-full">
                            <div className="w-14 h-14 rounded-2xl bg-hunter-orange/10 flex items-center justify-center text-3xl mb-8 border border-hunter-orange/20">🔍</div>
                            <h3 className="text-3xl font-black mb-4 text-white uppercase tracking-tight">{t("Services.audit.title")}</h3>
                            <p className="text-gray-400 text-lg leading-relaxed flex-grow">{t("Services.audit.description")}</p>
                        </GlassCard>

                        <GlassCard hoverEffect={true} glowColor="orange" className="p-10 border-hunter-orange/30 bg-hunter-orange/5 flex flex-col h-full shadow-[0_0_50px_rgba(255,122,60,0.1)]">
                            <div className="w-14 h-14 rounded-2xl bg-hunter-orange/20 flex items-center justify-center text-3xl mb-8 border border-hunter-orange/40">🏗️</div>
                            <h3 className="text-3xl font-black mb-4 text-white uppercase tracking-tight">{t("Services.architecture.title")}</h3>
                            <p className="text-gray-400 text-lg leading-relaxed flex-grow">{t("Services.architecture.description")}</p>
                        </GlassCard>

                        <GlassCard hoverEffect={true} glowColor="orange" className="p-10 flex flex-col h-full">
                            <div className="w-14 h-14 rounded-2xl bg-hunter-orange/10 flex items-center justify-center text-3xl mb-8 border border-hunter-orange/20">🔄</div>
                            <h3 className="text-3xl font-black mb-4 text-white uppercase tracking-tight">{t("Services.migration.title")}</h3>
                            <p className="text-gray-400 text-lg leading-relaxed flex-grow">{t("Services.migration.description")}</p>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* Consultancy vs Hiring Comparison */}
            <section className="py-24 bg-surface-dark/30 relative z-10 border-y border-white/5">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter uppercase text-center">{t("Comparison.title")}</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <GlassCard className="p-10 border-hunter-orange/30 bg-hunter-orange/5" hoverEffect={false}>
                            <div className="flex items-center gap-3 mb-8">
                                <span className="w-3 h-3 rounded-full bg-hunter-orange" />
                                <h3 className="text-2xl font-black text-white uppercase tracking-tight">{t("Comparison.consulting.title")}</h3>
                            </div>
                            <ul className="space-y-4">
                                {consultingPoints.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <CheckIcon className="w-5 h-5 text-hunter-orange mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-300 text-lg">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </GlassCard>

                        <GlassCard className="p-10 bg-white/[0.02]" hoverEffect={false}>
                            <div className="flex items-center gap-3 mb-8">
                                <span className="w-3 h-3 rounded-full bg-gray-500" />
                                <h3 className="text-2xl font-black text-white/70 uppercase tracking-tight">{t("Comparison.hiring.title")}</h3>
                            </div>
                            <ul className="space-y-4">
                                {hiringPoints.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <XIcon className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-400 text-lg">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-32 relative z-10">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter uppercase text-center">{t("Process.title")}</h2>
                    <div className="space-y-6">
                        {[0, 1, 2, 3].map((step) => (
                            <GlassCard key={step} className="p-8 border-l-4 border-l-hunter-orange group hover:bg-white/[0.02] transition-colors" hoverEffect={false}>
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">{t(`Process.steps.${step}.title`)}</h3>
                                    <span className="text-hunter-orange font-mono text-xl opacity-30">0{step + 1}</span>
                                </div>
                                <p className="text-gray-400 text-lg leading-relaxed">{t(`Process.steps.${step}.desc`)}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-32 relative z-10 max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">{t("FAQ.title")}</h2>
                    <p className="text-gray-400 text-xl">{t("FAQ.subtitle")}</p>
                </div>
                <div className="space-y-6">
                    {(t.raw("FAQ.questions") as Array<{ q: string; a: string }>).map((item, idx) => (
                        <GlassCard key={idx} className="p-8 group cursor-default" hoverEffect={true} glowColor="orange">
                            <h3 className="text-2xl font-bold mb-4 text-white flex gap-4 items-center">
                                <span className="text-hunter-orange group-hover:rotate-90 transition-transform">→</span>
                                {item.q}
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed pl-10 border-l border-white/10">{item.a}</p>
                        </GlassCard>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative z-10">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <GlassCard className="p-16 border-hunter-orange/20 bg-hunter-orange/5" hoverEffect={false}>
                        <p className="text-sm font-mono text-hunter-orange uppercase tracking-widest mb-6">Free 1-hour session</p>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase">Book Your Audit</h2>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                            We review your codebase, identify the top 3 issues, and give you a clear action plan — even if we never work together.
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-block px-12 py-5 bg-hunter-orange text-black font-black uppercase tracking-widest text-sm rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,122,60,0.4)]"
                        >
                            Book Free Audit
                        </Link>
                    </GlassCard>
                </div>
            </section>

            {/* SEO Extended Content Footer */}
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
