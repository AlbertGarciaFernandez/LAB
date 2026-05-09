// components/sections/ProcessContactSection.tsx

"use client";

import React from "react";
import { m } from "framer-motion";
import { ContactForm } from "../ui/ContactForm";
import { useTranslations } from "next-intl";

interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
}

const ProcessContactSection: React.FC = () => {
  const t = useTranslations("Process");

  const processSteps: ProcessStepProps[] = [
    {
      step: "01",
      title: t("steps.0.title"),
      description: t("steps.0.description"),
    },
    {
      step: "02",
      title: t("steps.1.title"),
      description: t("steps.1.description"),
    },
    {
      step: "03",
      title: t("steps.2.title"),
      description: t("steps.2.description"),
    },
    {
      step: "04",
      title: t("steps.3.title"),
      description: t("steps.3.description"),
    },
  ];

  return (
    <section
      id="process-contact"
      className="relative overflow-hidden bg-near-black px-4 py-24 text-white md:px-8 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* 06.1 Process Section */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-8 text-center text-5xl font-black uppercase tracking-tighter text-white md:text-7xl">
            <span className="text-hunter-green">{t("title.prefix")}</span> {t("title.text")}
          </h2>
          <p className="mx-auto mb-20 max-w-3xl text-center text-xl leading-relaxed text-gray-400">
            {t("subtitle.part1")}{" "}
            <span className="font-semibold text-white">{t("subtitle.highlight")}</span>{" "}
            {t("subtitle.part2")}
          </p>
        </m.div>

        {/* Process Steps Grid - Now 4 Columns */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item, i) => (
            <m.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-surface-dark/40 p-8 transition-all duration-300 hover:border-hunter-orange/30 hover:shadow-[0_10px_40px_-10px_rgba(255,122,60,0.15)]"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-hunter-green/5 to-hunter-orange/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <h3 className="mb-6 bg-gradient-to-br from-hunter-green/40 to-hunter-orange/40 bg-clip-text font-mono text-5xl font-black text-transparent transition-all duration-500 group-hover:from-hunter-green group-hover:to-hunter-orange md:text-6xl">
                  {item.step}
                </h3>
                <h4 className="mb-4 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-hunter-orange">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed text-gray-400 transition-colors group-hover:text-gray-300 md:text-base">
                  {item.description}
                </p>
              </div>
            </m.div>
          ))}
        </div>

        {/* Separator / Break */}
        <div className="mx-auto my-20 h-1 w-1/2 rounded-full bg-surface-dark"></div>

        {/* 06.2 Contact / CTA Section (Final Call to Action) */}
        <div id="contact" className="relative scroll-mt-32">
          <div className="mb-12 text-center">
            <h2 className="mb-8 text-5xl font-black uppercase tracking-tighter text-white md:text-7xl">
              {t("cta.title.text")}{" "}
              <span className="text-hunter-orange">{t("cta.title.highlight")}</span>
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-gray-400">
              {t("cta.description.part1")}{" "}
              <span className="font-semibold text-white">{t("cta.description.highlight")}</span>{" "}
              {t("cta.description.part2")}
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ProcessContactSection;
