"use client";

import { motion } from "framer-motion";

export default function HeroBackgroundOrnaments() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-near-black">
      {/* Refined Radial Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-hunter-green/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-hunter-orange/5 rounded-full blur-[140px] mix-blend-screen" />

      {/* Modern Technical Grid */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)'
        }}
      />

      {/* Animated Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[15%] h-[1px] w-[300px] bg-gradient-to-r from-transparent via-hunter-green/40 to-transparent"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[30%] right-[10%] h-[1px] w-[400px] bg-gradient-to-r from-transparent via-hunter-orange/30 to-transparent"
        />
      </div>

      {/* Technical SVG Symbols */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5 }}
        className="absolute left-10 top-20 h-64 w-64 text-hunter-green/20"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
        <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1" />
        <path d="M100 20 V180 M20 100 H180" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      </motion.svg>

      {/* Ambient Floating Particles (Geometric) */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute border border-white/10 rounded-sm"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 20}%`,
            width: `${10 + i * 5}px`,
            height: `${10 + i * 5}px`,
          }}
        />
      ))}
    </div>
  );
}
