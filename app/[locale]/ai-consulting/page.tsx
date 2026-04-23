"use client";

import React from 'react';
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import {
    CpuIcon, ArrowRightIcon, LightningIcon, CheckIcon, CaretDownIcon,
    RobotIcon, ArrowsClockwiseIcon, ShareNetworkIcon, SquaresFourIcon, BrainIcon,
    ShieldCheckIcon, PlugsConnectedIcon,
} from '@phosphor-icons/react/dist/ssr';
import Header from "@/components/layout/Header";
import ROICalculator from '@/components/sections/ROICalculator';
import { m } from "framer-motion";
import AnimatedSection from "@/components/layout/AnimatedSection";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
};


const faqs = [
    {
        q: "What does an AI consulting engagement cost?",
        a: "Scope varies significantly, so we don't publish fixed rates. AI Strategy Sprints typically range from €2,500–€5,000. Implementation Projects start at €8,000 and scale with integration complexity. Ongoing Partner engagements start from €5,000/month and are scoped around the amount of engineering capacity required. We provide a detailed estimate after the initial strategy call — before you commit to anything.",
    },
    {
        q: "How long does a typical project take?",
        a: "AI Strategy Sprint: 1–2 weeks. Implementation Projects: 4–8 weeks from scoping to deployment, depending on how many systems are involved and their integration complexity. We set realistic timelines at scoping and don't revise them unless requirements change materially.",
    },
    {
        q: "What do you need from us to get started?",
        a: "A clear description of the problem you want to solve and access to the relevant systems — CRM credentials, API documentation, or similar. We don't require weeks of onboarding. A focused discovery call is usually enough to scope accurately.",
    },
    {
        q: "How do you handle our data and privacy?",
        a: "GDPR compliance is a baseline, not an option. We define data handling at scoping: what data flows through the system, where it's stored, and who has access. For sensitive industries or regulated data, we can work with on-premise or private cloud deployments.",
    },
    {
        q: "Does the AI integrate with our existing tools?",
        a: "Yes — integration with your existing stack is a core requirement, not a feature. We have experience integrating with HubSpot, Salesforce, Pipedrive, WhatsApp Business API, Slack, common ERPs, and custom APIs. If you use it, we've likely connected to it or can.",
    },
    {
        q: "Do you work with companies outside the Netherlands?",
        a: "Yes. We're based in Leiden but work with clients across Europe and internationally. All engagements can run fully remotely.",
    },
    {
        q: "What happens after deployment?",
        a: "Implementation Projects include 30 days of post-deployment support. Ongoing Partner engagements cover continuous maintenance and development. For completed one-time projects, we provide full documentation and a handover session so your team can operate the system independently.",
    },
    {
        q: "Can you build on top of tools we already use, like Make or Zapier?",
        a: "Yes. We frequently migrate clients from Zapier or Make to more robust, cost-effective stacks — or extend automations they've already started. We recommend based on your volume, budget, and maintenance capacity, not on what's convenient for us.",
    },
    {
        q: "What if we're not sure which AI use case to start with?",
        a: "That's exactly what the AI Strategy Sprint is for. We map your operations, rank automation opportunities by ROI, and hand you a prioritized roadmap. You leave with a clear implementation plan — whether you work with us to build it or take it in-house.",
    },
];

type PricingItem = {
    name: string;
    price: string;
    timeline: string;
    desc: string;
    href: string;
    cta: string;
    recommended?: boolean;
    points: string[];
};

const AIConsultingPricingSection = () => {
    const t = useTranslations("AIConsulting");
    const items = t.raw("Pricing.items") as PricingItem[];
    const comparisonPoints = t.raw("Pricing.comparison.points") as string[];

    return (
        <AnimatedSection id="ai-consulting-pricing" className="py-20 px-6 lg:px-8 border-b border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start mb-10">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-hunter-orange/10 border border-hunter-orange/20 text-hunter-orange text-[10px] font-bold tracking-[0.2em] uppercase mb-5">
                            {t("Pricing.badge")}
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                            {t("Pricing.title")} <span className="text-hunter-green">{t("Pricing.highlight")}</span>
                        </h2>
                    </div>
                    <div className="lg:pt-9">
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                            {t("Pricing.subtitle")}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                    {items.map((item, i) => (
                        <m.div
                            key={item.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: i * 0.07 }}
                            className={`relative flex h-full flex-col rounded-lg border p-6 transition-colors ${
                                item.recommended
                                    ? "border-hunter-green/40 bg-hunter-green/10"
                                    : "border-white/5 bg-surface-dark/35 hover:border-white/10"
                            }`}
                        >
                            {item.recommended ? (
                                <div className="absolute right-4 top-4 rounded bg-hunter-green px-2 py-1 text-[10px] font-black uppercase tracking-widest text-near-black">
                                    {t("Pricing.recommended")}
                                </div>
                            ) : null}
                            <div className="mb-6 pr-16">
                                <h3 className="text-lg font-black text-white">{item.name}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-gray-400">{item.desc}</p>
                            </div>
                            <div className="mb-5">
                                <div className="text-2xl font-black text-white">{item.price}</div>
                                <div className="mt-1 text-xs font-bold uppercase tracking-widest text-gray-500">{item.timeline}</div>
                            </div>
                            <ul className="mb-6 space-y-3">
                                {item.points.map((point) => (
                                    <li key={point} className="flex items-start gap-2 text-sm leading-relaxed text-gray-300">
                                        <CheckIcon className="mt-0.5 flex-shrink-0 text-hunter-green" size={15} />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href={item.href}
                                className={`mt-auto inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold transition-colors ${
                                    item.recommended
                                        ? "bg-hunter-green text-near-black hover:bg-white"
                                        : "border border-white/10 text-white hover:bg-white/5"
                                }`}
                            >
                                {item.cta}
                                <ArrowRightIcon className="h-4 w-4" />
                            </Link>
                        </m.div>
                    ))}
                </div>

                <div className="mt-8 grid gap-6 rounded-lg border border-hunter-orange/20 bg-hunter-orange/10 p-6 lg:grid-cols-[0.7fr_1.3fr] lg:p-8">
                    <div>
                        <h3 className="text-xl font-black text-white">{t("Pricing.comparison.title")}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-gray-400">{t("Pricing.comparison.desc")}</p>
                    </div>
                    <ul className="space-y-3">
                        {comparisonPoints.map((point) => (
                            <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                                <CheckIcon className="mt-0.5 flex-shrink-0 text-hunter-orange" size={15} />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </AnimatedSection>
    );
};

const AIConsultingPage = () => {
    const t = useTranslations("AIConsulting");
    const [openFaq, setOpenFaq] = React.useState<number | null>(null);

    return (
        <div className="bg-near-black min-h-screen overflow-x-hidden">
            <Header />
            <main>
                {/* 1. Hero Section */}
                <section className="relative pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
                    {/* Background Blobs */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-hunter-green/10 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-hunter-orange/5 rounded-full blur-[120px] pointer-events-none" />

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
                        {/* LEFT COLUMN: HERO CONTENT */}
                        <m.div
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                        >
                            <m.div variants={itemVariants} className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-hunter-green/10 border border-hunter-green/20 text-hunter-green text-[10px] font-bold tracking-[0.2em] uppercase">
                                <div className="w-2 h-2 rounded-full bg-hunter-green animate-pulse"></div>
                                {t("Hero.badge")}
                            </m.div>

                            <m.h1 variants={itemVariants} className="text-5xl md:text-7xl xl:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
                                {t("Hero.title.part1")} <br /> {t("Hero.title.part2")} <br />
                                <span className="text-hunter-green">
                                    {t("Hero.title.highlight")}
                                </span>
                            </m.h1>

                            <m.p variants={itemVariants} className="text-xl text-gray-400 max-w-xl mb-10 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: t.raw("Hero.description") }}
                            />

                            <m.div variants={itemVariants}>
                                <Link href="/#contact" className="relative group px-10 py-4 text-near-black font-bold rounded-lg overflow-hidden inline-flex items-center gap-2">
                                    <div className="absolute inset-0 bg-hunter-green w-full h-full transition-all duration-300 group-hover:bg-hunter-green-dark" />
                                    <span className="relative z-10">{t("Hero.cta")}</span>
                                    <ArrowRightIcon className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </m.div>
                        </m.div>

                        {/* RIGHT COLUMN: WHY US CONTENT */}
                        <m.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-8 lg:pl-10 relative"
                        >
                            {/* Decorative line/connector */}
                            <div className="hidden lg:block absolute left-0 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight">
                                {t("Hero.whyUs.title.part1")} <br />
                                <span className="text-hunter-orange">{t("Hero.whyUs.title.highlight")}</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                {t("Hero.whyUs.description")}
                            </p>
                            <ul className="space-y-4">
                                {[
                                    t("Hero.whyUs.list.0"),
                                    t("Hero.whyUs.list.1"),
                                    t("Hero.whyUs.list.2")
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-4 text-white/90 font-medium">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-hunter-green/10 flex items-center justify-center border border-hunter-green/20">
                                            <CheckIcon className="text-hunter-green" size={14} />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {/* Mini System Status Visual (Simplified) */}
                            <div className="pt-6">
                                <m.div
                                    className="group relative p-6 bg-surface-dark/40 border border-white/5 rounded-xl flex items-center justify-between overflow-hidden cursor-default transition-colors hover:bg-surface-dark/60"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Scanning Beam Animation */}
                                    <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-hunter-green/10 to-transparent skew-x-[-20deg] animate-[scan_3s_ease-in-out_infinite] group-hover:animate-[scan_1.5s_ease-in-out_infinite]" />

                                    {/* Interactive Tooltip (Top Right) */}
                                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                        <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-black/80 border border-hunter-green/30 backdrop-blur-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-hunter-green animate-ping" />
                                            <span className="text-[9px] font-mono text-hunter-green whitespace-nowrap">{t("Hero.whyUs.systemStatus.tooltip")}</span>
                                        </div>
                                    </div>

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-hunter-green animate-pulse shadow-[0_0_8px_#00E6A2]"></div>
                                            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 group-hover:text-gray-300 transition-colors">{t("Hero.whyUs.systemStatus.label")}</span>
                                        </div>
                                        <div className="text-xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">{t("Hero.whyUs.systemStatus.value")}</div>
                                    </div>
                                    <div className="text-right relative z-10">
                                        <div className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-1 group-hover:text-gray-300 transition-colors">{t("Hero.whyUs.systemStatus.efficiencyLabel")}</div>
                                        <div className="text-xl font-black text-hunter-green group-hover:shadow-[0_0_20px_rgba(0,230,162,0.4)] transition-all">{t("Hero.whyUs.systemStatus.efficiencyValue")}</div>
                                    </div>
                                </m.div>
                            </div>
                        </m.div>
                    </div>
                </section>

                {/* 2. Who This Is For */}
                <AnimatedSection className="py-16 px-6 lg:px-8 border-b border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-hunter-green/10 border border-hunter-green/20 text-hunter-green text-[10px] font-bold tracking-[0.2em] uppercase mb-5">
                                    {t("WhoItsFor.badge")}
                                </div>
                                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight">
                                    {t("WhoItsFor.title")} <span className="text-hunter-green">{t("WhoItsFor.highlight")}</span>
                                </h2>
                                <p className="mt-4 text-gray-400 text-base leading-relaxed max-w-md">
                                    {t("WhoItsFor.description")}
                                </p>
                            </div>
                            <ul className="space-y-3 lg:pt-4">
                                {(t.raw("WhoItsFor.items") as string[]).map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-hunter-green/10 border border-hunter-green/20 flex items-center justify-center mt-0.5">
                                            <CheckIcon className="text-hunter-green" size={11} />
                                        </div>
                                        <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </AnimatedSection>

                {/* 3. Pricing */}
                <AIConsultingPricingSection />

                {/* 4. What We Build */}
                <AnimatedSection className="py-20 px-6 lg:px-8 border-b border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-hunter-green/10 border border-hunter-green/20 text-hunter-green text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                                {t("WhatWeBuildInline.badge")}
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                                {t("WhatWeBuildInline.title")}{" "}
                                <span className="text-hunter-green">{t("WhatWeBuildInline.highlight")}</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {(t.raw("WhatWeBuildInline.services") as { title: string; desc: string; label: string; href: string }[]).map(({ title, desc, label, href }, i) => {
                                const icons = [RobotIcon, ArrowsClockwiseIcon, ShareNetworkIcon, SquaresFourIcon, BrainIcon];
                                const Icon = icons[i];
                                return (
                                <m.div
                                    key={title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: i * 0.07 }}
                                >
                                    <Link
                                        href={href}
                                        className="group flex flex-col gap-4 p-6 rounded-2xl bg-surface-dark/40 border border-white/5 hover:border-hunter-green/30 hover:bg-surface-dark/70 transition-all duration-300 h-full"
                                    >
                                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-hunter-green/10 border border-hunter-green/20 flex items-center justify-center group-hover:bg-hunter-green/20 transition-colors">
                                            <Icon className="text-hunter-green" size={20} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-white font-bold text-sm mb-1.5 tracking-tight">{title}</h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-hunter-green text-xs font-semibold mt-auto pt-2 border-t border-white/5">
                                            <span>{label}</span>
                                            <ArrowRightIcon size={12} className="transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </Link>
                                </m.div>
                                );
                            })}
                        </div>
                    </div>
                </AnimatedSection>

                {/* 5. ROI Calculator */}
                <ROICalculator />

                {/* 6. Use Cases */}
                <AnimatedSection className="py-20 px-6 lg:px-8 border-t border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-hunter-orange/10 border border-hunter-orange/20 text-hunter-orange text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                                {t("UseCases.badge")}
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                                {t("UseCases.title")}{" "}
                                <span className="text-hunter-orange">{t("UseCases.highlight")}</span>
                            </h2>
                            <p className="mt-4 text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
                                {t("UseCases.subtitle")}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {(t.raw("UseCases.items") as { number: string; title: string; problem: string; solution: string; outcome: string }[]).map((uc, i) => (
                                <m.div
                                    key={uc.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: i * 0.1 }}
                                    className="flex flex-col gap-5 p-7 rounded-2xl bg-surface-dark/40 border border-white/5 hover:border-hunter-orange/20 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-hunter-orange font-black text-xs font-mono">{uc.number}</span>
                                        <h3 className="text-white font-bold text-base tracking-tight leading-snug">{uc.title}</h3>
                                    </div>
                                    <div className="space-y-3 flex-1">
                                        <div>
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{t("UseCases.labels.problem")}</span>
                                            <p className="mt-1 text-gray-400 text-sm leading-relaxed">{uc.problem}</p>
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{t("UseCases.labels.solution")}</span>
                                            <p className="mt-1 text-gray-400 text-sm leading-relaxed">{uc.solution}</p>
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-white/5">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-hunter-orange">{t("UseCases.labels.outcome")}</span>
                                        <p className="mt-1 text-white text-sm font-medium leading-relaxed">{uc.outcome}</p>
                                    </div>
                                </m.div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                {/* 7. Migration Journey & CTA */}
                <AnimatedSection className="py-24 relative overflow-hidden">
                    {/* Background Ambience */}
                    <div className="absolute inset-0 bg-surface-dark/10" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-hunter-green/5 blur-[100px] rounded-full -z-10" />

                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-hunter-green/10 border border-hunter-green/20 text-hunter-green text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                                {t("Migration.badge")}
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                                {t("Migration.title")} <span className="text-hunter-green">{t("Migration.highlight")}</span>
                            </h2>
                        </div>

                        {/* 3-STEP HORIZONTAL FLOW */}
                        <div className="relative">
                            {/* Connector Line (Desktop) */}
                            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0">
                                <m.div
                                    animate={{ width: ["0%", "100%"], opacity: [0, 1, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    className="h-full bg-gradient-to-r from-transparent via-hunter-green to-transparent w-1/2"
                                />
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
                                {/* STEP 1: LEGACY */}
                                <m.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className="group relative p-8 rounded-3xl border border-white/5 bg-near-black/80 backdrop-blur-md flex flex-col items-center text-center hover:border-white/10 transition-colors"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />

                                    <div className="w-16 h-16 mb-6 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                                        <LightningIcon className="text-orange-500" size={32} />
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-400 mb-2 group-hover:text-white transition-colors">{t("Migration.legacy.title")}</h3>
                                    <p className="text-sm text-gray-500 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw("Migration.legacy.desc") }} />

                                    <div className="mt-auto px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-bold uppercase tracking-widest">
                                        {t("Migration.legacy.tag")}
                                    </div>
                                </m.div>


                                {/* STEP 2: OPTIMIZED (Highlight) */}
                                <m.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="relative p-10 rounded-3xl border border-hunter-green/30 bg-near-black/90 shadow-[0_0_50px_rgba(0,230,162,0.1)] flex flex-col items-center text-center lg:-mt-4 lg:mb-4 lg:scale-110 z-20"
                                >
                                    <div className="absolute inset-0 bg-hunter-green/5 rounded-3xl animate-pulse pointer-events-none" />
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-hunter-green text-near-black font-black text-[10px] uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(0,230,162,0.4)]">
                                        {t("Migration.optimized.tag")}
                                    </div>

                                    <div className="w-20 h-20 mb-6 rounded-2xl bg-hunter-green flex items-center justify-center shadow-[0_0_30px_rgba(0,230,162,0.3)]">
                                        <CpuIcon className="text-near-black" size={40} />
                                    </div>

                                    <h3 className="text-2xl font-black text-white mb-2">{t("Migration.optimized.title")}</h3>
                                    <p className="text-sm text-gray-400 mb-6 leading-relaxed max-w-[200px]" dangerouslySetInnerHTML={{ __html: t.raw("Migration.optimized.desc") }} />

                                    <div className="mt-auto flex flex-col gap-2 w-full">
                                        <div className="w-full flex justify-between text-[10px] font-mono text-hunter-green/70 border-b border-hunter-green/20 pb-2">
                                            <span>{t("Migration.optimized.latencyLabel")}</span>
                                            <span>{t("Migration.optimized.latencyValue")}</span>
                                        </div>
                                        <div className="w-full flex justify-between text-[10px] font-mono text-hunter-green/70 pt-1">
                                            <span>{t("Migration.optimized.costLabel")}</span>
                                            <span>{t("Migration.optimized.costValue")}</span>
                                        </div>
                                    </div>
                                </m.div>


                                {/* STEP 3: ACTION */}
                                <m.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="group relative p-8 rounded-3xl border border-white/5 bg-near-black/80 backdrop-blur-md flex flex-col items-center text-center hover:border-hunter-orange/30 transition-colors"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-hunter-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />

                                    <div className="w-16 h-16 mb-6 rounded-2xl bg-hunter-orange/10 border border-hunter-orange/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <ArrowRightIcon className="text-hunter-orange" size={32} />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2">{t("Migration.action.title")}</h3>
                                    <p className="text-sm text-gray-400 mb-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw("Migration.action.desc") }} />

                                    <div className="mt-auto w-full space-y-3 relative z-10">
                                        <Link href="/#contact" className="block w-full py-3 bg-hunter-orange text-near-black font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-white transition-colors duration-300">
                                            {t("Migration.action.cta1")}
                                        </Link>
                                        <a href="mailto:albert@codehunterlab.com" className="block w-full py-3 bg-transparent border border-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-white/5 transition-colors">
                                            {t("Migration.action.cta2")}
                                        </a>
                                    </div>
                                </m.div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* 8. Technical Credibility */}
                <AnimatedSection className="py-20 px-6 lg:px-8 border-t border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-hunter-green/10 border border-hunter-green/20 text-hunter-green text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                                {t("TechCredibility.badge")}
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                                {t("TechCredibility.title")}{" "}
                                <span className="text-hunter-green">{t("TechCredibility.highlight")}</span>
                            </h2>
                            <p className="mt-4 text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
                                {t("TechCredibility.subtitle")}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {(t.raw("TechCredibility.items") as { title: string; desc: string }[]).map(({ title, desc }, i) => {
                                const icons = [PlugsConnectedIcon, CheckIcon, LightningIcon, ShieldCheckIcon, ArrowsClockwiseIcon, BrainIcon];
                                const Icon = icons[i];
                                return (
                                <m.div
                                    key={title}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.07 }}
                                    className="flex gap-4 p-6 rounded-xl bg-surface-dark/30 border border-white/5 hover:border-hunter-green/20 hover:bg-surface-dark/50 transition-all duration-300"
                                >
                                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-hunter-green/10 border border-hunter-green/20 flex items-center justify-center mt-0.5">
                                        <Icon className="text-hunter-green" size={18} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-sm mb-1.5">{title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                                    </div>
                                </m.div>
                                );
                            })}
                        </div>
                    </div>
                </AnimatedSection>

                {/* 9. FAQ */}
                <AnimatedSection className="py-24 px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-14">
                            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-hunter-green/10 border border-hunter-green/20 text-hunter-green text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                                AI CONSULTING FAQ
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                                AI Consulting <span className="text-hunter-green">FAQ — Netherlands</span>
                            </h2>
                        </div>

                        <div className="space-y-2">
                            {faqs.map((faq, i) => (
                                <div
                                    key={faq.q}
                                    className="border border-white/5 rounded-xl overflow-hidden bg-near-black/60 hover:border-white/10 transition-colors"
                                >
                                    <button
                                        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        aria-expanded={openFaq === i}
                                    >
                                        <span className="text-white font-semibold text-sm md:text-base leading-snug">
                                            {faq.q}
                                        </span>
                                        <CaretDownIcon
                                            className={`flex-shrink-0 text-hunter-green transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                                            size={18}
                                        />
                                    </button>
                                    <m.div
                                        initial={false}
                                        animate={openFaq === i ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                                        transition={{ duration: 0.25, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </m.div>
                                </div>
                            ))}
                        </div>

                        {/* Final CTA */}
                        <div className="mt-16 text-center space-y-4">
                            <h2 className="text-2xl md:text-4xl font-black text-white tracking-tighter">
                                Book a Free <span className="text-hunter-green">AI Strategy Call</span>
                            </h2>
                            <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
                                Talk to a senior engineer — not a sales rep. In 30 minutes, we&apos;ll map your highest-impact automation opportunity and tell you honestly whether it&apos;s worth building.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
                                <Link
                                    href="/#contact"
                                    className="relative group px-8 py-3 text-near-black font-bold rounded-lg overflow-hidden inline-flex items-center justify-center gap-2"
                                >
                                    <div className="absolute inset-0 bg-hunter-green w-full h-full transition-all duration-300 group-hover:bg-hunter-green-dark" />
                                    <span className="relative z-10">Book AI Strategy Call</span>
                                    <ArrowRightIcon className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                                <a
                                    href="mailto:albert@codehunterlab.com"
                                    className="px-8 py-3 bg-transparent border border-white/10 text-white font-semibold text-sm rounded-lg hover:bg-white/5 transition-colors inline-flex items-center justify-center"
                                >
                                    Email Us Directly
                                </a>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

            </main>


        </div>
    );
};

export default AIConsultingPage;
