"use client";

import React from "react";
import { motion } from "framer-motion";

const BioSection: React.FC = () => {
  const experienceStats = [
    {
      label: "Years Exp.",
      value: "4+",
    },
    {
      label: "Focus",
      value: "Product / FE",
    },
    {
      label: "Impact",
      value: "15+ Companies",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 md:py-40 bg-near-black text-white px-4 md:px-8 relative overflow-hidden"
    >
      {/* Background massive text decoration */}
      <div className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03]">
        <h2 className="text-[12rem] md:text-[20rem] font-black text-white leading-none whitespace-nowrap">
          THE ENGINEER
        </h2>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-start gap-16 md:gap-24">
        {/* Left: The "Statement" */}
        <div className="md:w-3/5">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-r from-hunter-green to-emerald-600">
              THE <br /> ENGINEER
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-2xl md:text-3xl font-medium leading-relaxed text-gray-200">
              I love being able to <span className="text-hunter-orange">help</span> and improve people&apos;s lives.
            </p>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
              Using my experience to make life <span className="text-hunter-green font-semibold">easier</span>, creating tools, and contributing my <span className="text-white font-serif italic">art & ideas</span> to meaningful projects.
            </p>

            <div className="pt-8 flex flex-wrap gap-8">
              {experienceStats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-4xl font-bold text-white">{stat.value}</span>
                  <span className="text-xs uppercase tracking-widest text-hunter-green">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: The "Visual" or Abstract representation (Optional or kept simple) */}
        {/* Replacing the old stats card with something more minimal/integrated or just removing the right col if the left is massive. */}
        {/* Let's keep the right side for a visual element or just centered if we want. 
            Actually, let's make the right side a decorative code block or abstract shape to balance.
        */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="md:w-2/5 relative"
        >
          <div className="w-full aspect-square rounded-full border border-hunter-green/20 relative flex items-center justify-center">
            <div className="absolute inset-4 border border-hunter-orange/20 rounded-full animate-spin-slow-reverse" style={{ animationDuration: '20s' }}></div>
            <div className="absolute inset-12 border border-white/5 rounded-full animate-spin-slow" style={{ animationDuration: '15s' }}></div>

            <div className="text-center p-8 backdrop-blur-sm bg-near-black/50 rounded-2xl border border-white/10">
              <p className="font-mono text-sm text-hunter-green mb-2">&lt;Passion /&gt;</p>
              <p className="italic text-gray-400">"Code is just the medium. Impact is the goal."</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BioSection;
