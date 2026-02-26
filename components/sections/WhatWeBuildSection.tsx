"use client";

import React from "react";
import { Link } from "@/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
    RobotIcon,
    ArrowsClockwiseIcon,
    ShareNetworkIcon,
    SquaresFourIcon,
    BrainIcon,
    ArrowRightIcon,
} from "@phosphor-icons/react/dist/ssr";

const serviceIcons = [
    RobotIcon,
    ArrowsClockwiseIcon,
    ShareNetworkIcon,
    SquaresFourIcon,
    BrainIcon,
];

const serviceHrefs = [
    "/expertise/ai-agents-automation",
    "/ai-automation-consulting-netherlands",
    "/it-system-integration",
    "/services/custom-internal-tools-development",
    "/expertise/custom-llm-development",
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 28, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
    },
};

const WhatWeBuildSection: React.FC = () => {
    const t = useTranslations("WhatWeBuild");
    const services = t.raw("services") as { title: string; desc: string; link: string }[];

    return (
        <section className="relative bg-near-black px-4 py-20 md:px-8 md:py-28 text-white border-b border-white/5 overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-hunter-green/[0.04] rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-hunter-green/10 border border-hunter-green/20 text-hunter-green text-[10px] font-bold tracking-[0.2em] uppercase mb-5">
                        {t("badge")}
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95]">
                        {t("title.part1")}{" "}
                        <span className="text-hunter-green">{t("title.highlight")}</span>
                    </h2>
                    <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
                        {t("subtitle")}
                    </p>
                </motion.div>

                {/* Service Cards */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                >
                    {services.map((service, idx) => {
                        const Icon = serviceIcons[idx];
                        const href = serviceHrefs[idx];
                        return (
                            <motion.div key={idx} variants={cardVariants} className="h-full">
                                <Link
                                    href={href}
                                    className="group flex flex-col gap-4 p-6 rounded-2xl bg-surface-dark/50 border border-white/5 hover:border-hunter-green/30 hover:bg-surface-dark/80 transition-all duration-300 h-full"
                                >
                                    {/* Hover glow */}
                                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-hunter-green/[0.04] via-transparent to-transparent" />

                                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-hunter-green/10 border border-hunter-green/20 flex items-center justify-center group-hover:bg-hunter-green/20 transition-colors duration-300">
                                        <Icon className="text-hunter-green" size={20} />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-white font-bold text-base mb-1.5 tracking-tight">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {service.desc}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-1.5 text-hunter-green text-xs font-semibold mt-auto pt-2 border-t border-white/5">
                                        <span>{service.link}</span>
                                        <ArrowRightIcon
                                            size={13}
                                            className="transition-transform duration-200 group-hover:translate-x-1"
                                        />
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Link
                        href="/ai-consulting"
                        className="relative group px-8 py-3 text-near-black font-bold rounded-lg overflow-hidden inline-flex items-center gap-2"
                    >
                        <div className="absolute inset-0 bg-hunter-green w-full h-full transition-all duration-300 group-hover:bg-hunter-green-dark" />
                        <span className="relative z-10">{t("cta")}</span>
                        <ArrowRightIcon className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default WhatWeBuildSection;
