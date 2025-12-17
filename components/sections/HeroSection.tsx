// components/sections/HeroSection.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import HeroBackgroundOrnaments from "../HeroBackgroundOrnaments";
import { ScrambleText } from "../ui/ScrambleText";

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
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] bg-near-black text-white px-4 py-20 overflow-hidden">
      <HeroBackgroundOrnaments />
      <div className="mx-auto max-w-6xl px-6 py-16 relative z-10">
        <motion.div
          className="text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="text-sm md:text-base uppercase tracking-widest text-hunter-orange font-mono mb-4"
            variants={itemVariants}
          >
            <span className="opacity-80">[ </span>
            <ScrambleText
              text="AI Automation , Frontend Engineer , Product-mindset"
              delay={0.5}
              className="inline-block"
            />
            <span className="opacity-80"> ]</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-8xl font-extrabold leading-none tracking-tighter"
            variants={itemVariants}
          >
            Building High-
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-hunter-green via-white to-hunter-green animate-shimmer bg-[length:200%_100%]">
              Performance
            </span>
            <br className="hidden md:block" /> Digital Products that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-hunter-green via-white to-hunter-green animate-shimmer bg-[length:200%_100%]" style={{ animationDelay: "1s" }}>
              Scale
            </span>
            .
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto pt-6 leading-relaxed"
            variants={itemVariants}
          >
            CodeHunter Lab operates at the intersection of deep technical
            engineering, product strategy, and user-centric design to accelerate
            your digital roadmap.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-6 pt-10"
            variants={itemVariants}
          >
            <button className="relative group px-10 py-4 text-near-black font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(0,230,162,0.3)] hover:shadow-[0_0_40px_rgba(0,230,162,0.6)]">
              <div className="absolute inset-0 bg-hunter-green w-full h-full transition-all duration-300 group-hover:bg-hunter-green-dark" />
              <span className="relative z-10">Initialize Project</span>
            </button>

            <button className="group px-10 py-4 text-hunter-orange border border-hunter-orange/50 bg-transparent font-semibold rounded-lg transition-all duration-300 hover:bg-hunter-orange/10 hover:border-hunter-orange hover:shadow-[0_0_20px_rgba(255,122,60,0.2)]">
              View Case Studies
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
