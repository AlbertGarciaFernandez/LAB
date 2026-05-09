// components/sections/HeroSection.tsx

"use client";

import React from "react";
import { Link } from "@/navigation";
import { m } from "framer-motion";
import Image from "next/image";
import HeroBackgroundOrnaments from "../HeroBackgroundOrnaments";
import { ScrambleText } from "../ui/ScrambleText";
import { useTranslations } from "next-intl";

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

const HeroSection: React.FC = () => {
  const t = useTranslations("Hero");

  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-near-black px-4 py-20 text-white">
      <HeroBackgroundOrnaments />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <m.div
          className="space-y-8 text-center"
          variants={containerVariants}
          initial="hidden"
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

          <m.h1
            className="text-5xl font-extrabold leading-none tracking-tighter md:text-8xl"
            variants={itemVariants}
          >
            {t("title.part1")}
            <span className="animate-shimmer bg-gradient-to-r from-hunter-green via-white to-hunter-green bg-[length:200%_100%] bg-clip-text text-transparent">
              {t("title.highlight1")}
            </span>
            <br className="hidden md:block" /> {t("title.part2")}{" "}
            <span
              className="animate-shimmer bg-gradient-to-r from-hunter-green via-white to-hunter-green bg-[length:200%_100%] bg-clip-text text-transparent"
              style={{ animationDelay: "1s" }}
            >
              {t("title.highlight2")}
            </span>
            .
          </m.h1>

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
              className="group relative inline-block overflow-hidden rounded-lg px-10 py-4 font-bold text-near-black shadow-[0_0_20px_rgba(0,230,162,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,230,162,0.6)]"
            >
              <div className="absolute inset-0 h-full w-full bg-hunter-green transition-all duration-300 group-hover:bg-hunter-green-dark" />
              <span className="relative z-10">{t("cta.initialize")}</span>
            </Link>

            <Link
              href="/ai-consulting"
              className="group inline-block rounded-lg border border-hunter-orange/50 bg-transparent px-10 py-4 font-semibold text-hunter-orange transition-all duration-300 hover:border-hunter-orange hover:bg-hunter-orange/10 hover:shadow-[0_0_20px_rgba(255,122,60,0.2)]"
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
