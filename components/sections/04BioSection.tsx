// components/sections/BioSection.tsx

"use client";

import React from "react";
import { m } from "framer-motion";
import { useTranslations } from "next-intl";

const BioSection: React.FC = () => {
  const t = useTranslations("Bio");

  const experienceStats = [
    {
      label: t("stats.years"),
      value: t("stats.yearsValue"),
    },
    {
      label: t("stats.focus"),
      value: t("stats.focusValue"),
    },
    {
      label: t("stats.impact"),
      value: t("stats.impactValue"),
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-near-black px-4 py-24 text-white md:px-8 md:py-40"
    >
      {/* Background massive text decoration */}
      <div className="pointer-events-none absolute left-0 top-10 w-full overflow-hidden opacity-[0.05]">
        <h2 className="whitespace-nowrap text-[12rem] font-black leading-none text-white md:text-[20rem]">
          {t("bgText")}
        </h2>
      </div>

      <div className="pointer-events-none absolute bottom-4 right-2 overflow-hidden opacity-[0.05] md:bottom-6 md:right-4">
        <h2 className="whitespace-nowrap text-[12rem] font-black leading-none text-white md:text-[20rem]">
          {t("bgNumber")}
        </h2>
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-16 md:flex-row md:gap-24">
        {/* Left: The "Statement" */}
        <div className="md:w-3/5">
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 bg-gradient-to-r from-hunter-green to-emerald-600 bg-clip-text text-6xl font-black tracking-tighter text-transparent md:text-8xl">
              {t("title.part1")} <br /> {t("title.part2")}
            </h2>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-2xl font-medium leading-relaxed text-gray-200 md:text-3xl">
              {t("description.p1.part1")}{" "}
              <span className="text-hunter-orange">{t("description.p1.highlight")}</span>{" "}
              {t("description.p1.part2")}
            </p>
            <p className="text-xl font-light leading-relaxed text-gray-400 md:text-2xl">
              {t("description.p2.part1")}{" "}
              <span className="font-semibold text-hunter-green">
                {t("description.p2.highlight1")}
              </span>
              {t("description.p2.part2")}{" "}
              <span className="font-serif italic text-white">{t("description.p2.highlight2")}</span>{" "}
              {t("description.p2.part3")}
            </p>

            <div className="flex flex-wrap gap-8 pt-8">
              {experienceStats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-4xl font-bold text-white">{stat.value}</span>
                  <span className="text-xs uppercase tracking-widest text-hunter-green">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </m.div>
        </div>

        {/* Right: The "Visual" or Abstract representation (Optional or kept simple) */}
        <m.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative md:w-2/5"
        >
          <div className="relative flex aspect-square w-full items-center justify-center rounded-full border border-hunter-green/20">
            <div
              className="animate-spin-slow-reverse absolute inset-4 rounded-full border border-hunter-orange/20"
              style={{ animationDuration: "20s" }}
            ></div>
            <div
              className="animate-spin-slow absolute inset-12 rounded-full border border-white/5"
              style={{ animationDuration: "15s" }}
            ></div>

            <div className="rounded-2xl border border-white/10 bg-near-black/50 p-8 text-center backdrop-blur-sm">
              <p className="mb-2 font-mono text-sm text-hunter-green">
                &lt;{t("passionCard.label")} /&gt;
              </p>
              <p className="italic text-gray-400">{t("passionCard.quote")}</p>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default BioSection;
