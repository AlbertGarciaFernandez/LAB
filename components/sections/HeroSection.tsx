// components/sections/HeroSection.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import HeroBackgroundOrnaments from "../HeroBackgroundOrnaments";

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
    //<section className="relative flex flex-col items-center justify-center min-h-[90vh] bg-near-black text-white px-4 py-20">
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] bg-near-black text-white px-4 py-20">
      <HeroBackgroundOrnaments />
      <div className="mx-auto max-w-6xl px-6 py-16">
        <motion.div
          className="z-10 max-w-6xl text-center space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="text-sm uppercase tracking-widest text-hunter-orange font-mono"
            variants={itemVariants}
          >
            [ Frontend Tech Lead, Product-Oriented Engineer ]
          </motion.p>

          <motion.h1
            className="text-5xl md:text-8xl font-extrabold leading-none tracking-tighter"
            variants={itemVariants}
          >
            Building High-
            <span className="text-hunter-green">Performance</span>
            Digital Products that{" "}
            <span className="text-hunter-green">Scale</span>.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto pt-6"
            variants={itemVariants}
          >
            CodeHunter Lab operates at the intersection of deep technical
            engineering, product strategy, and user-centric design to accelerate
            your digital roadmap.
          </motion.p>

          <motion.div
            className="flex justify-center space-x-6 pt-10"
            variants={itemVariants}
          >
            <button className="px-10 py-4 text-near-black bg-hunter-green font-bold rounded-lg transition duration-300 hover:bg-hunter-green/90 shadow-xl shadow-hunter-green/30">
              Initialize Project
            </button>
            <button className="px-10 py-4 text-hunter-orange border-2 border-hunter-orange bg-transparent font-semibold rounded-lg transition duration-300 hover:bg-hunter-orange/10">
              View Case Studies
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
