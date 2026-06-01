"use client";

import React from "react";
import { Link } from "@/navigation";
import { m } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  CurrencyCircleDollarIcon,
  BuildingsIcon,
  HeartbeatIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react/dist/ssr";

const industryIcons = [CurrencyCircleDollarIcon, BuildingsIcon, HeartbeatIcon];

const industryHrefs = [
  "/professional-services-automation-netherlands",
  "/real-estate-automation-netherlands",
  "/healthcare-automation-netherlands",
];

const accentColors = [
  {
    bg: "bg-hunter-orange/10",
    border: "border-hunter-orange/20",
    text: "text-hunter-orange",
    hover: "hover:border-hunter-orange/40",
    glow: "hover:shadow-[0_25px_50px_-12px_rgba(255,122,60,0.2)]",
    sweep: "from-hunter-orange/5",
    dropShadow: "group-hover:drop-shadow-[0_0_12px_rgba(255,122,60,0.5)]",
  },
  {
    bg: "bg-hunter-green/10",
    border: "border-hunter-green/20",
    text: "text-hunter-green",
    hover: "hover:border-hunter-green/40",
    glow: "hover:shadow-[0_25px_50px_-12px_rgba(0,230,162,0.25)]",
    sweep: "from-hunter-green/5",
    dropShadow: "group-hover:drop-shadow-[0_0_12px_rgba(0,230,162,0.5)]",
  },
  {
    bg: "bg-hunter-orange/10",
    border: "border-hunter-orange/20",
    text: "text-hunter-orange",
    hover: "hover:border-hunter-orange/40",
    glow: "hover:shadow-[0_25px_50px_-12px_rgba(255,122,60,0.2)]",
    sweep: "from-hunter-orange/5",
    dropShadow: "group-hover:drop-shadow-[0_0_12px_rgba(255,122,60,0.5)]",
  },
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
  const industriesRaw = t.raw("industries");
  const industries = Array.isArray(industriesRaw)
    ? (industriesRaw as { title: string; desc: string; link: string }[])
    : [];

  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-near-black px-4 py-20 text-white md:px-8 md:py-28">
      {/* Background ambience */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[600px] rounded-full bg-hunter-orange/[0.03] blur-[120px]" />
      <div className="pointer-events-none absolute left-0 top-0 h-[300px] w-[500px] rounded-full bg-hunter-green/[0.03] blur-[100px]" />

      {/* Massive Background Text */}
      <div className="pointer-events-none absolute left-0 top-10 w-full overflow-hidden opacity-[0.03] flex justify-center">
        <h2 className="whitespace-nowrap text-[12rem] font-black leading-none text-white md:text-[20rem]">
          INDUSTRIES
        </h2>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <m.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-hunter-orange/20 bg-hunter-orange/10 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-hunter-orange">
            {t("badge")}
          </div>
          <h2 className="text-4xl font-black leading-[0.95] tracking-tighter md:text-6xl">
            {t("title.part1")} <span className="text-hunter-orange">{t("title.highlight")}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">{t("subtitle")}</p>
        </m.div>

        {/* Industry Cards */}
        <m.div
          className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3"
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
              <m.div key={industry.title} variants={cardVariants}>
                <Link
                  href={href}
                  className={`group relative flex flex-col gap-5 rounded-3xl border border-white/[0.05] bg-near-black p-10 h-full overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-[#0B0B0B] ${accent.hover} ${accent.glow} shadow-lg [&>*]:relative [&>*]:z-10`}
                >
                  {/* Subtle inner glow sweep */}
                  <div className="pointer-events-none absolute inset-0 !z-0 rounded-3xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-shadow duration-500 group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]" />
                  
                  {/* Glow gradient background */}
                  <div className={`absolute inset-0 !z-0 rounded-3xl bg-gradient-to-br ${accent.sweep} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                  <div
                    className={`h-12 w-12 flex-shrink-0 rounded-xl ${accent.bg} border ${accent.border} flex items-center justify-center transition-all duration-500 group-hover:scale-110`}
                  >
                    <Icon className={`${accent.text} ${accent.dropShadow} transition-all duration-500`} size={24} />
                  </div>

                  <div className="flex-1">
                    <h3 className={`mb-2 text-xl font-black tracking-tight text-white transition-all duration-500 group-hover:${accent.text} ${accent.dropShadow}`}>
                      {industry.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-400">{industry.desc}</p>
                  </div>

                  <div
                    className={`flex items-center gap-2 ${accent.text} mt-auto text-xs font-bold uppercase tracking-widest`}
                  >
                    <span>{industry.link}</span>
                    <ArrowRightIcon
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              </m.div>
            );
          })}
        </m.div>

        {/* View all */}
        <m.div
          className="text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/ai-automation-consulting-netherlands"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-6 py-2.5 text-sm font-semibold text-white/70 transition-all duration-300 hover:border-white/20 hover:text-white"
          >
            {t("viewAll")}
            <ArrowRightIcon size={14} />
          </Link>
        </m.div>
      </div>
    </section>
  );
};

export default IndustriesSection;
