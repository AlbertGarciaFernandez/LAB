"use client";

import React, { useRef } from "react";
import { useTranslations } from "next-intl";
import {
  CalendarCheckIcon,
  WhatsappLogoIcon,
  ClockClockwiseIcon,
  FunnelIcon,
  ArrowsClockwiseIcon,
  ChartLineUpIcon,
} from "@phosphor-icons/react/dist/ssr";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const icons = [
  CalendarCheckIcon,
  WhatsappLogoIcon,
  ClockClockwiseIcon,
  FunnelIcon,
  ArrowsClockwiseIcon,
  ChartLineUpIcon,
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

const stats = [
  { value: "6", label: "Live Automations" },
  { value: "24/7", label: "Always On" },
  { value: "100%", label: "Ship-Ready" },
];

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { damping: 18, stiffness: 180 };
  const rotateX = useSpring(
    useTransform(rawY, [-60, 60], [7, -7]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(rawX, [-60, 60], [-7, 7]),
    springConfig
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rawX.set(e.clientX - rect.left - rect.width / 2);
    rawY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.025, z: 20 }}
      transition={{ duration: 0.2 }}
      className="group relative flex flex-col gap-4 p-6 rounded-2xl bg-surface-dark/60 border border-white/5 hover:border-hunter-orange/35 transition-colors duration-300 cursor-default overflow-hidden"
    >
      {/* Ambient inner glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-hunter-orange/6 via-transparent to-transparent" />

      {/* Glowing bottom line */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-hunter-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {children}
    </motion.div>
  );
}

const QuickWinsSection: React.FC = () => {
  const t = useTranslations("QuickWins");
  const cards = t.raw("cards") as { title: string; desc: string }[];

  return (
    <section
      id="quick-wins"
      className="relative bg-near-black px-4 py-20 text-white md:px-8 md:py-28 border-y border-white/5 overflow-hidden"
    >
      {/* Floating ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-40 left-1/3 w-[700px] h-[700px] rounded-full bg-hunter-orange/[0.04] blur-[140px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6], x: [0, 50, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 right-1/4 w-[550px] h-[550px] rounded-full bg-hunter-green/[0.04] blur-[120px]"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.9, 0.5], x: [0, -40, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <motion.div
          className="absolute top-1/2 -right-20 w-[300px] h-[300px] rounded-full bg-hunter-orange/[0.03] blur-[80px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-hunter-orange/10 border border-hunter-orange/20 text-hunter-orange text-[10px] font-bold tracking-widest uppercase mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {t("badge")}
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-[0.95]">
            {t("title")}{" "}
            <span className="text-hunter-orange">{t("highlight")}</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="flex items-center justify-center gap-10 md:gap-20 mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
            >
              <div className="text-2xl md:text-3xl font-black text-hunter-orange tabular-nums">
                {stat.value}
              </div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-12"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        />

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          {cards.map((card, idx) => {
            const Icon = icons[idx];
            return (
              <TiltCard key={idx}>
                <motion.div
                  className="flex-shrink-0 w-11 h-11 rounded-xl bg-hunter-orange/10 border border-hunter-orange/20 flex items-center justify-center text-hunter-orange"
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Icon size={22} />
                </motion.div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </TiltCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default QuickWinsSection;
