"use client";

import React from 'react';
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import {
    Cpu, FileCode2, ArrowRight, Zap, Check
} from 'lucide-react';
import Header from "@/components/layout/Header";
import ROICalculator from '@/components/sections/ROICalculator';
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import TopAgentsSection from "@/components/sections/TopAgentsSection";
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


const AIConsultingPage = () => {
    const t = useTranslations("AIConsulting");

    return (
        <div className="bg-near-black min-h-screen">
            <Header />
            <main>
                {/* 1. Hero Section */}
                <section className="relative pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
                    {/* Background Blobs */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-hunter-green/10 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-hunter-orange/5 rounded-full blur-[120px] pointer-events-none" />

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
                        {/* LEFT COLUMN: HERO CONTENT */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                        >
                            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-hunter-green/10 border border-hunter-green/20 text-hunter-green text-[10px] font-bold tracking-[0.2em] uppercase">
                                <div className="w-2 h-2 rounded-full bg-hunter-green animate-pulse"></div>
                                {t("Hero.badge")}
                            </motion.div>

                            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl xl:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
                                {t("Hero.title.part1")} <br /> {t("Hero.title.part2")} <br />
                                <span className="text-hunter-green">
                                    {t("Hero.title.highlight")}
                                </span>
                            </motion.h1>

                            <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-xl mb-10 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: t.raw("Hero.description") }}
                            />

                            <motion.div variants={itemVariants}>
                                <Link href="#roi-calculator" className="relative group px-10 py-4 text-near-black font-bold rounded-lg overflow-hidden inline-flex items-center gap-2">
                                    <div className="absolute inset-0 bg-hunter-green w-full h-full transition-all duration-300 group-hover:bg-hunter-green-dark" />
                                    <span className="relative z-10">{t("Hero.cta")}</span>
                                    <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* RIGHT COLUMN: WHY US CONTENT */}
                        <motion.div
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
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-white/90 font-medium">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-hunter-green/10 flex items-center justify-center border border-hunter-green/20">
                                            <Check className="text-hunter-green" size={14} />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {/* Mini System Status Visual (Simplified) */}
                            <div className="pt-6">
                                <motion.div
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
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 2. Top Agents Section */}
                <TopAgentsSection />


                {/* 3. ROI Calculator */}
                <ROICalculator />

                {/* 4. Migration Journey & CTA */}
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
                                <motion.div
                                    animate={{ width: ["0%", "100%"], opacity: [0, 1, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    className="h-full bg-gradient-to-r from-transparent via-hunter-green to-transparent w-1/2"
                                />
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
                                {/* STEP 1: LEGACY */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className="group relative p-8 rounded-3xl border border-white/5 bg-near-black/80 backdrop-blur-md flex flex-col items-center text-center hover:border-white/10 transition-colors"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />

                                    <div className="w-16 h-16 mb-6 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                                        <Zap className="text-orange-500" size={32} />
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-400 mb-2 group-hover:text-white transition-colors">{t("Migration.legacy.title")}</h3>
                                    <p className="text-sm text-gray-500 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw("Migration.legacy.desc") }} />

                                    <div className="mt-auto px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-bold uppercase tracking-widest">
                                        {t("Migration.legacy.tag")}
                                    </div>
                                </motion.div>


                                {/* STEP 2: OPTIMIZED (Highlight) */}
                                <motion.div
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
                                        <Cpu className="text-near-black" size={40} />
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
                                </motion.div>


                                {/* STEP 3: ACTION */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="group relative p-8 rounded-3xl border border-white/5 bg-near-black/80 backdrop-blur-md flex flex-col items-center text-center hover:border-hunter-orange/30 transition-colors"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-hunter-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />

                                    <div className="w-16 h-16 mb-6 rounded-2xl bg-hunter-orange/10 border border-hunter-orange/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <ArrowRight className="text-hunter-orange" size={32} />
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
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </main>


        </div>
    );
};

export default AIConsultingPage;
