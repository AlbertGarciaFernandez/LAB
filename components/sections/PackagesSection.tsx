"use client";

import { m } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

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

export default function PackagesSection() {
  const t = useTranslations("Packages");
  const packagesRaw = t.raw("items");
  const packages = Array.isArray(packagesRaw)
    ? (packagesRaw as Array<{
        name: string;
        price: string;
        timeline: string;
        desc: string;
        points: string[];
        href: string;
        cta?: string;
      }>)
    : [];

  return (
    <section className="relative bg-near-black px-6 py-24 text-white md:py-32 lg:px-8">
      {/* Top gradient separator */}
      <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {/* Bottom gradient separator */}
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Massive Background Text */}
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

      <div className="relative z-10 mx-auto max-w-7xl">
        <m.div
          className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-hunter-orange">
              {t("badge")}
            </p>
            <h2 className="text-4xl font-black leading-none tracking-tighter md:text-6xl">
              {t("title")}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-300">{t("subtitle")}</p>
          </div>
          <Link
            href="#contact"
            className="inline-flex w-fit rounded-lg bg-hunter-green px-5 py-3 text-xs font-black uppercase tracking-widest text-near-black transition-colors hover:bg-white"
          >
            {t("cta")}
          </Link>
        </m.div>

        {packages.length > 0 && (
          <m.div
            className="grid gap-5 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {packages.map((item) => (
              <m.article
                key={item.name}
                variants={slideUp}
                className="group/card relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.05] bg-near-black p-10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-hunter-green/40 hover:bg-[#0B0B0B] hover:shadow-[0_25px_50px_-12px_rgba(0,230,162,0.2)]"
              >
                {/* Subtle inner glow */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-shadow duration-500 group-hover/card:shadow-[inset_0_1px_0_0_rgba(0,230,162,0.2)]" />
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-hunter-green/5 to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
                <h3 className="relative z-10 text-2xl font-black tracking-tight text-white transition-all duration-500 group-hover/card:text-hunter-green group-hover/card:drop-shadow-[0_0_12px_rgba(0,230,162,0.5)]">
                  {item.name}
                </h3>
                <p className="mt-4 text-3xl font-black tracking-tighter text-hunter-green">
                  {item.price}
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                  {item.timeline}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-gray-300">{item.desc}</p>
                {Array.isArray(item.points) && (
                  <ul className="mt-6 space-y-3">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-gray-300">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-hunter-orange" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <Link
                  href={item.href}
                  className="relative z-10 mt-7 inline-flex items-center gap-2 pt-7 text-xs font-bold uppercase tracking-widest text-hunter-orange transition-colors hover:text-white"
                >
                  {item.cta ?? t("learnMore")}
                  <span
                    aria-hidden="true"
                    className="text-sm leading-none transition-transform group-hover/card:translate-x-0.5"
                  >
                    ↗
                  </span>
                </Link>
              </m.article>
            ))}
          </m.div>
        )}
      </div>
    </section>
  );
}
