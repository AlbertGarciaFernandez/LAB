"use client";

import { m } from "framer-motion";
import { useTranslations } from "next-intl";

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function TrustProofSection() {
  const t = useTranslations("TrustProof");
  const metricsRaw = t.raw("metrics");
  const proofRaw = t.raw("proof");

  const metrics = Array.isArray(metricsRaw)
    ? (metricsRaw as Array<{ value: string; label: string; note: string }>)
    : [];
  const proof = Array.isArray(proofRaw) ? (proofRaw as Array<{ title: string; desc: string }>) : [];

  return (
    <section className="relative bg-near-black px-6 py-24 text-white md:py-32 lg:px-8">
      <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="pointer-events-none absolute left-0 top-10 flex w-full justify-center overflow-hidden opacity-[0.03]">
        <h2 className="whitespace-nowrap text-[12rem] font-black leading-none text-white md:text-[20rem]">
          TRUST
        </h2>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <m.div
          className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-hunter-green">
              {t("badge")}
            </p>
            <h2 className="text-4xl font-black leading-none tracking-tighter md:text-6xl">
              {t("title")}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-300">{t("subtitle")}</p>
          </div>

          {metrics.length > 0 && (
            <m.div
              className="grid gap-4 sm:grid-cols-3"
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {metrics.map((metric) => (
                <m.div
                  key={metric.label}
                  variants={slideUp}
                  className="group/card relative overflow-hidden rounded-3xl border border-white/[0.05] bg-near-black p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-hunter-orange/40 hover:bg-[#0B0B0B] hover:shadow-[0_25px_50px_-12px_rgba(255,122,60,0.2)]"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-shadow duration-500 group-hover/card:shadow-[inset_0_1px_0_0_rgba(255,122,60,0.2)]" />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-hunter-orange/5 to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
                  <div className="relative z-10 text-3xl font-black tracking-tighter text-hunter-green transition-all duration-500 group-hover/card:text-hunter-orange group-hover/card:drop-shadow-[0_0_12px_rgba(255,122,60,0.5)]">
                    {metric.value}
                  </div>
                  <div className="relative z-10 mt-2 text-sm font-bold text-white transition-colors duration-500 group-hover/card:text-hunter-orange">
                    {metric.label}
                  </div>
                  <p className="relative z-10 mt-2 text-xs leading-relaxed text-gray-400">
                    {metric.note}
                  </p>
                </m.div>
              ))}
            </m.div>
          )}
        </m.div>

        {proof.length > 0 && (
          <m.div
            className="mt-10 grid gap-4 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {proof.map((item) => (
              <m.article
                key={item.title}
                variants={slideUp}
                className="group/card relative overflow-hidden rounded-3xl border border-white/[0.05] bg-near-black p-10 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-hunter-orange/40 hover:bg-[#0B0B0B] hover:shadow-[0_25px_50px_-12px_rgba(255,122,60,0.2)]"
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-shadow duration-500 group-hover/card:shadow-[inset_0_1px_0_0_rgba(255,122,60,0.2)]" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-hunter-orange/5 to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
                <h3 className="relative z-10 text-lg font-black tracking-tight text-hunter-green transition-all duration-500 group-hover/card:text-hunter-orange group-hover/card:drop-shadow-[0_0_12px_rgba(255,122,60,0.5)]">
                  {item.title}
                </h3>
                <p className="relative z-10 mt-3 text-sm leading-relaxed text-gray-400">
                  {item.desc}
                </p>
              </m.article>
            ))}
          </m.div>
        )}
      </div>
    </section>
  );
}
