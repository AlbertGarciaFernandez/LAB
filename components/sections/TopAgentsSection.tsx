"use client";

import React from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { Zap, Activity, BarChart3, ArrowRight, CheckCircle2, Sparkles, ChevronRight, AlertOctagon } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const TypingEffect = ({ words }: { words: string[] }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typeSpeed = isDeleting ? 50 : 100;
        const word = words[currentWordIndex];

        const timer = setTimeout(() => {
            if (!isDeleting && currentText === word) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && currentText === "") {
                setIsDeleting(false);
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
            } else {
                setCurrentText(
                    word.substring(0, currentText.length + (isDeleting ? -1 : 1))
                );
            }
        }, typeSpeed);

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex, words]);

    return (
        <span className="font-mono text-hunter-green">
            {currentText}
            <span className="animate-pulse">|</span>
        </span>
    );
};

const TopAgentsSection: React.FC = () => {
    const t = useTranslations("AIConsulting.TopAgents");

    // Agent Data
    const agents = [
        {
            id: "leo",
            name: "LEO",
            role: t("agents.leo.role"),
            icon: Zap,
            description: t("agents.leo.description"),
            capabilities: [
                t("agents.leo.capabilities.0"),
                t("agents.leo.capabilities.1"),
                t("agents.leo.capabilities.2"),
                t("agents.leo.capabilities.3"),
                t("agents.leo.capabilities.4")
            ],
            benefit: t("agents.leo.benefit"),
            cta: t("agents.leo.cta"),
            color: "text-hunter-orange",
            bg: "bg-hunter-orange/10",
            border: "border-hunter-orange/20",
            glow: "shadow-[0_0_50px_rgba(255,122,60,0.15)]",
            hoverGlow: "group-hover:shadow-[0_0_80px_rgba(255,122,60,0.3)]",
            btnGradient: "from-hunter-orange to-[#FF9A70]"
        },
        {
            id: "atlas",
            name: "ATLAS",
            role: t("agents.atlas.role"),
            icon: Activity,
            description: t("agents.atlas.description"),
            capabilities: [
                t("agents.atlas.capabilities.0"),
                t("agents.atlas.capabilities.1"),
                t("agents.atlas.capabilities.2"),
                t("agents.atlas.capabilities.3"),
                t("agents.atlas.capabilities.4")
            ],
            benefit: t("agents.atlas.benefit"),
            cta: t("agents.atlas.cta"),
            color: "text-blue-400",
            bg: "bg-blue-400/10",
            border: "border-blue-400/20",
            glow: "shadow-[0_0_50px_rgba(96,165,250,0.15)]",
            hoverGlow: "group-hover:shadow-[0_0_80px_rgba(96,165,250,0.3)]",
            btnGradient: "from-blue-400 to-blue-300"
        },
        {
            id: "orion",
            name: "ORION",
            role: t("agents.orion.role"),
            icon: BarChart3,
            description: t("agents.orion.description"),
            capabilities: [
                t("agents.orion.capabilities.0"),
                t("agents.orion.capabilities.1"),
                t("agents.orion.capabilities.2"),
                t("agents.orion.capabilities.3"),
                t("agents.orion.capabilities.4")
            ],
            benefit: t("agents.orion.benefit"),
            cta: t("agents.orion.cta"),
            color: "text-hunter-green",
            bg: "bg-hunter-green/10",
            border: "border-hunter-green/20",
            glow: "shadow-[0_0_50px_rgba(0,230,162,0.15)]",
            hoverGlow: "group-hover:shadow-[0_0_80px_rgba(0,230,162,0.3)]",
            btnGradient: "from-hunter-green to-[#33FFBC]"
        }
    ];

    return (
        <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto relative cursor-default">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-hunter-green/5 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-hunter-orange/5 rounded-full blur-[100px] pointer-events-none -z-10" />

            {/* Header */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="text-center mb-24 max-w-4xl mx-auto"
            >
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-[10px] font-bold tracking-[0.2em] uppercase backdrop-blur-md">
                    <Sparkles size={12} className="text-hunter-green" />
                    {t("badge")}
                </motion.div>

                <motion.h2 variants={itemVariants} className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
                    {t("title")} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-hunter-green via-white to-hunter-orange">
                        {t("highlight")}
                    </span>
                </motion.h2>

                <motion.p variants={itemVariants} className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                    {t("description")}
                </motion.p>
            </motion.div>

            {/* Agents Showcase */}
            <div className="grid lg:grid-cols-3 gap-8 mb-32">
                {agents.map((agent, i) => (
                    <motion.div
                        key={agent.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className={`group relative p-1 rounded-[40px] transition-all duration-500 hover:-translate-y-2`}
                    >
                        {/* Glow Effect */}
                        <div className={`absolute inset-0 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${agent.bg}`} />

                        {/* Card Content */}
                        <div className={`relative h-full bg-surface-dark/60 backdrop-blur-xl border border-white/10 rounded-[38px] p-8 flex flex-col overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-2xl ${agent.hoverGlow}`}>

                            {/* Header: Icon & Role */}
                            <div className="flex justify-between items-start mb-8">
                                <div className={`w-16 h-16 rounded-2xl ${agent.bg} ${agent.border} flex items-center justify-center ${agent.color} group-hover:scale-110 transition-transform duration-300 relative`}>
                                    <div className={`absolute inset-0 rounded-2xl ${agent.bg} animate-ping opacity-20`} />
                                    <agent.icon size={28} className="relative z-10" />
                                </div>
                                <div className={`px-3 py-1 rounded-full border ${agent.border} ${agent.bg} backdrop-blur-md`}>
                                    <motion.span
                                        className={`text-[10px] font-bold tracking-widest uppercase ${agent.color} block`}
                                        animate={{ opacity: [0.7, 1, 0.7] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        {agent.role}
                                    </motion.span>
                                </div>
                            </div>

                            {/* Title & Description */}
                            <h3 className="text-4xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors duration-300">
                                {agent.name}
                            </h3>
                            <p className="text-gray-400 leading-relaxed mb-8 text-sm font-medium">
                                {agent.description}
                            </p>

                            {/* Capabilities List */}
                            <div className="space-y-3 mb-8 flex-grow">
                                {agent.capabilities.map((cap, idx) => (
                                    <div key={idx} className="flex items-center gap-3 group/item">
                                        <CheckCircle2 size={16} className={`shrink-0 ${agent.color} opacity-50 group-hover/item:opacity-100 transition-opacity`} />
                                        <span className="text-sm text-gray-400 group-hover/item:text-white transition-colors">{cap}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA & Benefit */}
                            <div className="mt-auto pt-6 border-t border-white/5 space-y-4">
                                <p className={`font-bold text-sm ${agent.color}`}>
                                    👉 {agent.benefit}
                                </p>
                                <Link href="/#contact" className="block transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <div className={`w-full py-3 rounded-xl bg-gradient-to-r ${agent.btnGradient} text-near-black font-bold text-center flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-lg`}>
                                        {agent.cta} <ChevronRight size={16} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Problem / Solution Unified Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-32 relative rounded-[40px] border border-white/5 bg-near-black/30 overflow-hidden backdrop-blur-sm group"
            >
                {/* Unified Background / Connector */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 via-transparent to-hunter-green/5" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />

                {/* Central "Transformation" Badge */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-surface-dark border border-white/10 flex items-center justify-center shadow-xl">
                        <ArrowRight className="text-white/50" size={20} />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 relative z-10">
                    {/* LEFT: THE BOTTLENECK */}
                    <div className="p-10 md:p-14 relative overflow-hidden">
                        {/* Subtle Noise/Texture Overlay */}
                        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/10 text-red-400 text-[10px] font-bold tracking-widest uppercase mb-6">
                                <AlertOctagon size={12} />
                                {t("bottleneck.badge")}
                            </div>

                            <h3 className="text-3xl font-black text-white mb-2">{t("bottleneck.title")}</h3>
                            <p className="text-gray-500 text-sm mb-10">{t("bottleneck.subtitle")}</p>

                            <ul className="space-y-6">
                                {["0", "1", "2", "3"].map((key, i) => (
                                    <li key={i} className="flex items-center gap-4 text-gray-400 group-hover:text-red-200/80 transition-colors duration-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                                        {t(`bottleneck.list.${key}`)}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-12 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                                <div className="text-red-500 text-[10px] font-mono uppercase tracking-widest mb-1">{t("bottleneck.resultLabel")}</div>
                                <div className="text-white font-bold tracking-tight">{t("bottleneck.resultValue")}</div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: THE AGENT ADVANTAGE */}
                    <div className="p-10 md:p-14 relative overflow-hidden">
                        {/* Green Glow */}
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-hunter-green/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-hunter-green/10 border border-hunter-green/10 text-hunter-green text-[10px] font-bold tracking-widest uppercase mb-6">
                                <Sparkles size={12} />
                                {t("advantage.badge")}
                            </div>

                            <h3 className="text-3xl font-black text-white mb-2">{t("advantage.title")}</h3>
                            <p className="text-gray-500 text-sm mb-10">{t("advantage.subtitle")}</p>

                            <ul className="space-y-6">
                                {["0", "1", "2", "3"].map((key, i) => (
                                    <li key={i} className="flex items-center gap-4 text-white font-medium" style={{ transitionDelay: `${i * 50}ms` }}>
                                        <div className="w-5 h-5 rounded-full bg-hunter-green/20 flex items-center justify-center">
                                            <CheckCircle2 size={12} className="text-hunter-green" />
                                        </div>
                                        {t(`advantage.list.${key}`)}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-12 p-4 rounded-xl bg-hunter-green/10 border border-hunter-green/20 relative overflow-hidden">
                                <div className="absolute inset-0 bg-hunter-green/5 animate-pulse" />
                                <div className="relative z-10">
                                    <div className="text-hunter-green text-[10px] font-mono uppercase tracking-widest mb-1">{t("advantage.resultLabel")}</div>
                                    <div className="text-white font-bold tracking-tight">{t("advantage.resultValue")}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Workflow Diagram */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative p-12 lg:p-16 rounded-[40px] border border-white/5 bg-surface-dark/50 overflow-hidden text-center backdrop-blur-sm"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-50 pointer-events-none" />
                    <h3 className="text-3xl font-black text-white mb-16 relative z-10">{t("diagram.title")}</h3>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative z-10">
                        {/* Live Data Stream Line (Background) */}
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 hidden md:block -translate-y-1/2 z-0" />

                        <div className="flex items-center gap-4 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md relative z-10 shadow-xl">
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-hunter-orange rounded-full animate-ping opacity-50" />
                            <Zap className="text-hunter-orange" size={24} />
                            <span className="text-white font-bold text-lg">{t("diagram.capture")}</span>
                        </div>

                        <div className="relative z-10">
                            <div className="flex gap-1">
                                <motion.div
                                    className="w-2 h-2 rounded-full bg-white opacity-20"
                                    animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.2, 1] }}
                                    transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                                />
                                <motion.div
                                    className="w-2 h-2 rounded-full bg-white opacity-20"
                                    animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.2, 1] }}
                                    transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                                />
                                <motion.div
                                    className="w-2 h-2 rounded-full bg-white opacity-20"
                                    animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.2, 1] }}
                                    transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-4 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md relative z-10 shadow-xl">
                            <Activity className="text-blue-400" size={24} />
                            <span className="text-white font-bold text-lg">{t("diagram.process")}</span>
                        </div>

                        <div className="relative z-10">
                            <div className="flex gap-1">
                                <motion.div
                                    className="w-2 h-2 rounded-full bg-white opacity-20"
                                    animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.2, 1] }}
                                    transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                                />
                                <motion.div
                                    className="w-2 h-2 rounded-full bg-white opacity-20"
                                    animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.2, 1] }}
                                    transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                                />
                                <motion.div
                                    className="w-2 h-2 rounded-full bg-white opacity-20"
                                    animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.2, 1] }}
                                    transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-4 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md relative z-10 shadow-xl">
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-hunter-green rounded-full animate-ping opacity-50" />
                            <BarChart3 className="text-hunter-green" size={24} />
                            <span className="text-white font-bold text-lg">{t("diagram.optimize")}</span>
                        </div>
                    </div>

                    <div className="mt-16 text-gray-500 text-sm font-mono uppercase tracking-widest flex items-center justify-center gap-2">
                        <span>{t("diagram.worksWith")}</span>
                        <TypingEffect words={["CRM", "EMAIL", "WHATSAPP", "SLACK", "INTERNAL TOOLS"]} />
                    </div>
                </motion.div>
            </motion.div>



        </section>
    );
};

export default TopAgentsSection;
