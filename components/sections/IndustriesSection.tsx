"use client";

import React from "react";
import { Link } from "@/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
    CurrencyCircleDollarIcon,
    BuildingsIcon,
    HeartbeatIcon,
    ArrowRightIcon,
} from "@phosphor-icons/react/dist/ssr";

const industryIcons = [CurrencyCircleDollarIcon, BuildingsIcon, HeartbeatIcon];

const industryHrefs = [
    "/accounting-firm-automation-netherlands",
    "/real-estate-automation-netherlands",
    "/dental-clinic-automation-netherlands",
];

const accentColors = [
    { bg: "bg-hunter-orange/10", border: "border-hunter-orange/20", text: "text-hunter-orange", hover: "hover:border-hunter-orange/30" },
    { bg: "bg-hunter-green/10", border: "border-hunter-green/20", text: "text-hunter-green", hover: "hover:border-hunter-green/30" },
    { bg: "bg-hunter-orange/10", border: "border-hunter-orange/20", text: "text-hunter-orange", hover: "hover:border-hunter-orange/30" },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
    },
};

const IndustriesSection: React.FC = () => {
    const t = useTranslations("IndustriesSection");
    const industries = t.raw("industries") as { title: string; desc: string; link: string }[];

    return (
        <section className="relative bg-near-black px-4 py-20 md:px-8 md:py-28 text-white border-t border-white/5 overflow-hidden">
            {/* Background ambience */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-hunter-orange/[0.03] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-0 left-0 w-[500px] h-[300px] bg-hunter-green/[0.03] rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-hunter-orange/10 border border-hunter-orange/20 text-hunter-orange text-[10px] font-bold tracking-[0.2em] uppercase mb-5">
                        {t("badge")}
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95]">
                        {t("title.part1")}{" "}
                        <span className="text-hunter-orange">{t("title.highlight")}</span>
                    </h2>
                    <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
                        {t("subtitle")}
                    </p>
                </motion.div>

                {/* Industry Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {industries.map((industry, idx) => {
                        const Icon = industryIcons[idx];
                        const href = industryHrefs[idx];
                        const accent = accentColors[idx];
                        return (
                            <motion.div key={idx} variants={cardVariants}>
                                <Link
                                    href={href}
                                    className={`group relative flex flex-col gap-5 p-8 rounded-2xl bg-surface-dark/40 border border-white/5 ${accent.hover} hover:bg-surface-dark/70 transition-all duration-300 h-full overflow-hidden`}
                                >
                                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-white/[0.02] via-transparent to-transparent" />

                                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${accent.bg} border ${accent.border} flex items-center justify-center`}>
                                        <Icon className={accent.text} size={24} />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-white font-bold text-lg mb-2 tracking-tight">
                                            {industry.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {industry.desc}
                                        </p>
                                    </div>

                                    <div className={`flex items-center gap-2 ${accent.text} text-sm font-semibold mt-auto`}>
                                        <span>{industry.link}</span>
                                        <ArrowRightIcon
                                            size={15}
                                            className="transition-transform duration-200 group-hover:translate-x-1"
                                        />
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* View all */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Link
                        href="/ai-automation-consulting-netherlands"
                        className="inline-flex items-center gap-2 px-6 py-2.5 border border-white/10 text-white/70 text-sm font-semibold rounded-lg hover:border-white/20 hover:text-white transition-all duration-300"
                    >
                        {t("viewAll")}
                        <ArrowRightIcon size={14} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default IndustriesSection;
