"use client";

import React from 'react';
import { Bot, TrendingUp, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const AIBanner = () => {
  return (
    <section className="relative w-full py-24 bg-near-black overflow-hidden border-y border-white/5">
      {/* Background Decor - Subtle Grid with Hunter Green Glow */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hunter-green/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-16"
        >

          {/* Left Content */}
          <div className="lg:w-1/2 space-y-10">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-hunter-green/10 border border-hunter-green/20 text-hunter-green text-[10px] font-bold tracking-[0.2em] uppercase"
            >
              <Zap size={14} />
              AI & Process Automation
            </motion.div>

            <div className="space-y-6">
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.9]"
              >
                Stop Experimenting. <br />
                <span className="text-hunter-green">
                  Start Scaling.
                </span>
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl"
              >
                Most companies are just "playing" with AI. We architect autonomous systems that integrate seamlessly with your existing stack to slash overhead and drive pure profit margins.
              </motion.p>
            </div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="/ai-consulting" className="relative group px-10 py-5 text-near-black font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(0,230,162,0.3)] hover:shadow-[0_0_40px_rgba(0,230,162,0.5)] inline-flex items-center justify-center">
                <div className="absolute inset-0 bg-hunter-green w-full h-full transition-all duration-300 group-hover:bg-hunter-green-dark" />
                <span className="relative z-10 flex items-center">
                  Explore AI Audits
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </Link>
              <Link href="/ai-consulting#roi-calculator" className="group px-10 py-5 text-hunter-orange border border-hunter-orange/30 bg-transparent font-bold rounded-lg transition-all duration-300 hover:bg-hunter-orange/10 hover:border-hunter-orange hover:shadow-[0_0_20px_rgba(255,122,60,0.2)] inline-flex items-center justify-center">
                Calculate ROI
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Value Cards */}
          <div className="lg:w-5/12 w-full">
            <div className="relative z-10 grid gap-6">
              {[
                { title: "Autonomous Agents", desc: "Deploy 24/7 AI staff for Sales & Ops.", icon: Bot },
                { title: "Workflow Orchestration", desc: "Replace manual data entry with n8n.", icon: Zap },
                { title: "Value-Driven Architecture", desc: "We sell recurring efficiency, not hours.", icon: TrendingUp },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group flex items-start gap-5 p-6 rounded-2xl bg-surface-dark/50 border border-white/5 hover:border-hunter-green/30 transition-all duration-300"
                >
                  <div className="p-4 rounded-xl bg-near-black border border-white/5 text-hunter-green group-hover:text-white group-hover:bg-hunter-green/20 group-hover:border-hunter-green/30 transition-all duration-500">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl tracking-tight">{item.title}</h3>
                    <p className="text-gray-400 text-sm mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default AIBanner;