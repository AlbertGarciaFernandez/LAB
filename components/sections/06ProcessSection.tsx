"use client";

import React from "react";
import { m } from "framer-motion";
import { useTranslations } from "next-intl";

interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
  outcome: string;
}

const ProcessSection: React.FC = () => {
  const t = useTranslations("Process");

  const processSteps: ProcessStepProps[] = [
    {
      step: "01",
      title: t("steps.0.title"),
      description: t("steps.0.description"),
      outcome: t("outcomes.0"),
    },
    {
      step: "02",
      title: t("steps.1.title"),
      description: t("steps.1.description"),
      outcome: t("outcomes.1"),
    },
    {
      step: "03",
      title: t("steps.2.title"),
      description: t("steps.2.description"),
      outcome: t("outcomes.2"),
    },
    {
      step: "04",
      title: t("steps.3.title"),
      description: t("steps.3.description"),
      outcome: t("outcomes.3"),
    },
  ];

  return (
    <section
      id="process-contact"
      className="relative scroll-mt-32 bg-near-black px-4 py-24 text-white md:px-8 md:py-32"
    >
      <div className="pointer-events-none absolute -left-8 top-10 w-full overflow-hidden opacity-[0.05] md:-left-12">
        <h2 className="whitespace-nowrap text-[12rem] font-black leading-none text-white md:text-[20rem]">
          {t("bgText")}
        </h2>
      </div>

      <div className="pointer-events-none absolute -right-4 bottom-4 overflow-hidden opacity-[0.05] md:-right-8 md:bottom-6">
        <h2 className="whitespace-nowrap text-[12rem] font-black leading-none text-white md:text-[20rem]">
          {t("bgNumber")}
        </h2>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-8 text-center text-5xl font-black uppercase tracking-tighter md:text-7xl">
            <span className="bg-gradient-to-r from-white to-hunter-orange bg-clip-text text-transparent">
              {t("title.text")}
            </span>
          </h2>
          <p className="mx-auto mb-20 max-w-3xl text-center text-xl leading-relaxed text-gray-400">
            {t("subtitle.part1")}{" "}
            <span className="font-semibold text-white">{t("subtitle.highlight")}</span>{" "}
            {t("subtitle.part2")}
          </p>
        </m.div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute bottom-0 left-[27px] top-0 hidden w-[2px] bg-gradient-to-b from-hunter-green/40 via-hunter-orange/20 to-transparent md:block" />

          <div className="space-y-10 md:space-y-16">
            {processSteps.map((item) => (
              <m.div
                key={item.step}
                initial={{ opacity: 0, x: -20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="group relative flex flex-col items-start gap-6 md:flex-row md:gap-12"
              >
                <div className="relative z-10 flex shrink-0 items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-hunter-green/30 bg-near-black shadow-[0_0_15px_rgba(0,230,162,0.1)] transition-all duration-500 group-hover:border-hunter-orange/50 group-hover:shadow-[0_0_25px_rgba(255,122,60,0.25)]">
                    <span className="font-mono text-lg font-bold text-hunter-green transition-colors group-hover:text-hunter-orange">
                      {item.step}
                    </span>
                  </div>
                </div>

                <div className="group/card relative flex-1 overflow-hidden rounded-3xl border border-white/[0.05] bg-near-black p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-hunter-orange/30 hover:bg-[#0B0B0B] hover:shadow-[0_25px_50px_-12px_rgba(255,122,60,0.2)] md:p-12">
                  <div className="absolute inset-0 bg-gradient-to-br from-hunter-orange/5 to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />

                  <div className="pointer-events-none absolute -right-6 -top-10 text-[14rem] font-black leading-none text-white/[0.02] transition-colors duration-500 group-hover/card:text-white/[0.04]">
                    {item.step}
                  </div>

                  <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center">
                    <div className="lg:w-2/3">
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-400 transition-all duration-500 group-hover/card:border-hunter-orange/30 group-hover/card:text-hunter-orange">
                        {t("phaseLabel", { step: item.step })}
                      </div>
                      <h4 className="mb-4 text-3xl font-black tracking-tight text-white transition-all duration-500 group-hover/card:text-hunter-orange group-hover/card:drop-shadow-[0_0_12px_rgba(255,122,60,0.4)]">
                        {item.title}
                      </h4>
                      <p className="text-lg leading-relaxed text-gray-400 transition-colors group-hover/card:text-gray-300">
                        {item.description}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/[0.05] bg-[#0A0A0A] p-6 shadow-inner lg:w-1/3">
                      <div className="mb-3 text-xs font-bold uppercase tracking-widest text-hunter-green">
                        {t("outcomeLabel")}
                      </div>
                      <div className="mb-4 h-1 w-8 rounded-full bg-hunter-green/30" />
                      <p className="text-sm leading-relaxed text-gray-400">{item.outcome}</p>
                    </div>
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
