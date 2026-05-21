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
  "/accounting-firm-automation-netherlands",
  "/real-estate-automation-netherlands",
  "/dental-clinic-automation-netherlands",
];

const accentColors = [
  {
    bg: "bg-hunter-orange/10",
    border: "border-hunter-orange/20",
    text: "text-hunter-orange",
    hover: "hover:border-hunter-orange/30",
  },
  {
    bg: "bg-hunter-green/10",
    border: "border-hunter-green/20",
    text: "text-hunter-green",
    hover: "hover:border-hunter-green/30",
  },
  {
    bg: "bg-hunter-orange/10",
    border: "border-hunter-orange/20",
    text: "text-hunter-orange",
    hover: "hover:border-hunter-orange/30",
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
                  className={`group relative flex flex-col gap-5 rounded-2xl border border-white/5 bg-surface-dark/40 p-8 ${accent.hover} h-full overflow-hidden transition-all duration-300 hover:bg-surface-dark/70`}
                >
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.02] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div
                    className={`h-12 w-12 flex-shrink-0 rounded-xl ${accent.bg} border ${accent.border} flex items-center justify-center`}
                  >
                    <Icon className={accent.text} size={24} />
                  </div>

                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-bold tracking-tight text-white">
                      {industry.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-400">{industry.desc}</p>
                  </div>

                  <div
                    className={`flex items-center gap-2 ${accent.text} mt-auto text-sm font-semibold`}
                  >
                    <span>{industry.link}</span>
                    <ArrowRightIcon
                      size={15}
                      className="transition-transform duration-200 group-hover:translate-x-1"
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
