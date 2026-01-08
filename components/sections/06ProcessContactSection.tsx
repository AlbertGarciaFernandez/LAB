
// components/sections/ProcessContactSection.tsx

"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
      className="py-24 md:py-32 bg-near-black text-white px-4 md:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* 06.1 Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-center mb-8 text-white">
            <span className="text-hunter-green">{t("title.prefix")}</span> {t("title.text")}
          </h2>
          <p className="text-center text-xl text-gray-400 mb-20 max-w-3xl mx-auto leading-relaxed">
            {t("subtitle.part1")} <span className="text-white font-semibold">{t("subtitle.highlight")}</span> {t("subtitle.part2")}
          </p>
        </motion.div>

        {/* Process Steps Grid - Now 4 Columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="group relative p-8 bg-surface-dark/40 rounded-3xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-hunter-orange/30 hover:shadow-[0_10px_40px_-10px_rgba(255,122,60,0.15)]"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-hunter-green/5 to-hunter-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <h3 className="text-5xl md:text-6xl font-black mb-6 font-mono text-transparent bg-clip-text bg-gradient-to-br from-hunter-green/40 to-hunter-orange/40 group-hover:from-hunter-green group-hover:to-hunter-orange transition-all duration-500">
                  {item.step}
                </h3>
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-hunter-orange transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Separator / Break */}
        <div className="h-1 bg-surface-dark w-1/2 mx-auto my-20 rounded-full"></div>

        {/* 06.2 Contact / CTA Section (Final Call to Action) */}
        <div id="contact" className="relative scroll-mt-32">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 text-white">
              {t("cta.title.text")} <span className="text-hunter-orange">{t("cta.title.highlight")}</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t("cta.description.part1")} <span className="text-white font-semibold">{t("cta.description.highlight")}</span> {t("cta.description.part2")}
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ProcessContactSection;
