"use client";

import React from "react";
import { Link } from "@/navigation";
import { m } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  RobotIcon,
  ArrowsClockwiseIcon,
  ShareNetworkIcon,
  SquaresFourIcon,
  BrainIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react/dist/ssr";

const serviceIcons = [RobotIcon, ArrowsClockwiseIcon, ShareNetworkIcon, SquaresFourIcon, BrainIcon];

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
  const servicesRaw = t.raw("services");
  const services = Array.isArray(servicesRaw)
    ? (servicesRaw as { title: string; desc: string; link: string }[])
    : [];

  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-near-black px-4 py-20 text-white md:px-8 md:py-28">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-hunter-green/[0.04] blur-[140px]" />

      {/* Massive Background Text */}
      <div className="pointer-events-none absolute left-0 top-10 flex w-full justify-center overflow-hidden opacity-[0.03]">
        <h2 className="whitespace-nowrap text-[12rem] font-black leading-none text-white md:text-[20rem]">
          SERVICES
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
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-hunter-green/20 bg-hunter-green/10 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-hunter-green">
            {t("badge")}
          </div>
          <h2 className="text-4xl font-black leading-[0.95] tracking-tighter md:text-6xl">
            {t("title.part1")} <span className="text-hunter-green">{t("title.highlight")}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">{t("subtitle")}</p>
        </m.div>

        {/* Service Cards */}
        <m.div
          className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {services.map((service, idx) => {
            const Icon = serviceIcons[idx];
            const href = serviceHrefs[idx];
            // Bento Box logic: Top 2 span 3 cols (half), Bottom 3 span 2 cols (thirds)
            const bentoClass =
              idx < 2
                ? "lg:col-span-3 sm:col-span-2"
                : idx === 4
                  ? "lg:col-span-2 sm:col-span-2"
                  : "lg:col-span-2 sm:col-span-1";

            return (
              <m.div key={service.title} variants={cardVariants} className={`h-full ${bentoClass}`}>
                <Link
                  href={href}
                  className="group relative flex h-full flex-col gap-6 rounded-3xl border border-white/[0.05] bg-near-black p-10 shadow-lg shadow-black/50 transition-all duration-500 hover:-translate-y-2 hover:border-hunter-orange/40 hover:bg-[#0B0B0B] hover:shadow-[0_25px_50px_-12px_rgba(255,122,60,0.25)]"
                >
                  {/* Subtle hover background sweep */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-shadow duration-500 group-hover:shadow-[inset_0_1px_0_0_rgba(255,122,60,0.2)]" />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-hunter-orange/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Hover background radial glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_top_left,rgba(255,122,60,0.08)_0%,transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-hunter-green/20 bg-hunter-green/10 transition-colors duration-300 group-hover:border-hunter-orange/20 group-hover:bg-hunter-orange/10">
                    <Icon
                      className="text-hunter-green transition-colors duration-300 group-hover:text-hunter-orange drop-shadow-[0_0_10px_rgba(255,122,60,0.5)]"
                      size={24}
                      weight="duotone"
                    />
                  </div>

                  <div className="relative z-10 flex-1">
                    <h3 className="mb-2 text-lg font-black tracking-tight text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-400">{service.desc}</p>
                  </div>

                  <div className="relative z-10 mt-auto flex items-center justify-between border-t border-white/[0.05] pt-5 text-xs font-bold uppercase tracking-wider text-gray-500 transition-all duration-500 group-hover:border-hunter-orange/20 group-hover:text-hunter-orange">
                    <span>{service.link}</span>
                    <ArrowUpRightIcon
                      size={18}
                      weight="bold"
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              </m.div>
            );
          })}
        </m.div>

        {/* Bottom CTA */}
        <m.div
          className="text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/ai-consulting"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg px-8 py-3 font-bold text-near-black"
          >
            <div className="absolute inset-0 h-full w-full bg-hunter-green transition-all duration-300 group-hover:bg-hunter-orange" />
            <span className="relative z-10">{t("cta")}</span>
            <ArrowRightIcon className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </m.div>
      </div>
    </section>
  );
};

export default WhatWeBuildSection;
