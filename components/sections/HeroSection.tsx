// components/sections/HeroSection.tsx

"use client";

import React from "react";
import { Link } from "@/navigation";
import { m } from "framer-motion";
import Image from "next/image";
import HeroBackgroundOrnaments from "../HeroBackgroundOrnaments";
import { ScrambleText } from "../ui/ScrambleText";
import { useTranslations } from "next-intl";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

const slideLeftVariants = {
  hidden: { x: -80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const slideRightVariants = {
  hidden: { x: 80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const HeroSection: React.FC = () => {
  const t = useTranslations("Hero");

  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-near-black px-4 py-20 text-white">
      <HeroBackgroundOrnaments />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <m.div
          className="space-y-8 text-center"
          variants={containerVariants}
          initial={false}
          animate="visible"
        >
          {/* Logo */}
          <m.div className="mb-2 flex justify-center" variants={itemVariants}>
            <m.div
              className="relative"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 3.5, ease: "easeInOut", repeat: Infinity }}
            >
              <m.div
                className="absolute -inset-3 rounded-full bg-hunter-green/10 blur-xl"
                animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.15, 1] }}
                transition={{ duration: 3.5, ease: "easeInOut", repeat: Infinity }}
              />
              <Image
                src="/logo-hntr.svg"
                alt="CodeHunter Lab Logo"
                width={80}
                height={80}
                className="relative z-10 h-16 w-16 object-contain drop-shadow-[0_0_20px_rgba(0,230,162,0.5)] md:h-20 md:w-20"
                priority
              />
            </m.div>
          </m.div>

          <m.div
            className="mb-4 font-mono text-sm uppercase tracking-widest text-hunter-orange md:text-base"
            variants={itemVariants}
          >
            <span className="opacity-80">{"["}&nbsp;</span>
            <ScrambleText text={t("subHeader")} delay={0.85} className="inline" />
            <span className="opacity-80">&nbsp;{"]"}</span>
          </m.div>

          <h1 className="flex flex-col gap-1 text-5xl font-black leading-[0.95] tracking-tighter md:gap-4 md:text-8xl">
            <m.span variants={slideLeftVariants} className="block">
              {t("title.part1")}
              <span className="text-hunter-green">{t("title.highlight1")}</span>
            </m.span>
            <m.span variants={slideRightVariants} className="block">
              {t("title.part2")} <span className="text-hunter-green">{t("title.highlight2")}</span>.
            </m.span>
          </h1>

          <m.p
            className="mx-auto max-w-3xl pt-6 text-lg leading-relaxed text-gray-400 md:text-xl"
            variants={itemVariants}
          >
            {t("description")}
          </m.p>

          <m.div
            className="flex flex-col items-center justify-center gap-6 pt-10 md:flex-row"
            variants={itemVariants}
          >
            <Link
              href="#contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl px-12 py-5 font-bold text-near-black shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_0_20px_rgba(0,230,162,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_15px_30px_-10px_rgba(0,230,162,0.4)]"
            >
              <div className="absolute inset-0 h-full w-full bg-hunter-green transition-colors duration-300 group-hover:bg-[#00C086]" />
              <span className="relative z-10 flex items-center gap-2 drop-shadow-sm">
                {t("cta.initialize")}
                <ArrowRightIcon
                  weight="bold"
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </Link>

            <Link
              href="/ai-consulting"
              className="group inline-flex items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] px-12 py-5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-hunter-orange/30 hover:bg-hunter-orange/5 hover:text-hunter-orange hover:shadow-[0_15px_30px_-10px_rgba(255,122,60,0.15)]"
            >
              {t("cta.caseStudies")}
            </Link>
          </m.div>
        </m.div>
      </div>
    </section>
  );
};

export default HeroSection;
