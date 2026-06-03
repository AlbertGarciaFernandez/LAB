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
import { m, useMotionValue, useSpring, useTransform } from "framer-motion";

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

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { damping: 18, stiffness: 180 };
  const rotateX = useSpring(useTransform(rawY, [-60, 60], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(rawX, [-60, 60], [-7, 7]), springConfig);

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
    <m.div
      ref={ref}
      variants={cardVariants}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.025, z: 20 }}
      transition={{ duration: 0.2 }}
      className="group relative flex cursor-default flex-col gap-4 overflow-hidden rounded-2xl border border-white/5 bg-surface-dark/60 p-6 transition-colors duration-300 hover:border-hunter-orange/35"
    >
      {/* Ambient inner glow on hover */}
      <div className="from-hunter-orange/6 pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Glowing bottom line */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-hunter-orange/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {children}
    </m.div>
  );
}

const QuickWinsSection: React.FC = () => {
  const t = useTranslations("QuickWins");
  const cardsRaw = t.raw("cards");
  const cards = Array.isArray(cardsRaw) ? (cardsRaw as { title: string; desc: string }[]) : [];
  const stats = [
    { value: "6", label: t("stats.liveAutomations") },
    { value: "24/7", label: t("stats.alwaysOn") },
    { value: "100%", label: t("stats.shipReady") },
  ];

  return (
    <section
      id="quick-wins"
      className="relative overflow-hidden border-y border-white/5 bg-near-black px-4 py-20 text-white md:px-8 md:py-28"
    >
      {/* Floating ambient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <m.div
          className="absolute -top-40 left-1/3 h-[700px] w-[700px] rounded-full bg-hunter-orange/[0.04] blur-[140px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6], x: [0, 50, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <m.div
          className="absolute -bottom-40 right-1/4 h-[550px] w-[550px] rounded-full bg-hunter-green/[0.04] blur-[120px]"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.9, 0.5], x: [0, -40, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <m.div
          className="absolute -right-20 top-1/2 h-[300px] w-[300px] rounded-full bg-hunter-orange/[0.03] blur-[80px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <m.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <m.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-hunter-orange/20 bg-hunter-orange/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-hunter-orange"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {t("badge")}
          </m.div>
          <h2 className="text-4xl font-black leading-[0.95] tracking-tighter text-white md:text-6xl">
            {t("title")} <span className="text-hunter-orange">{t("highlight")}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">{t("subtitle")}</p>
        </m.div>

        {/* Stats strip */}
        <m.div
          className="mb-12 flex items-center justify-center gap-10 md:gap-20"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
        >
          {stats.map((stat, i) => (
            <m.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
            >
              <div className="text-2xl font-black tabular-nums text-hunter-orange md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-0.5 text-[10px] uppercase tracking-widest text-gray-500">
                {stat.label}
              </div>
            </m.div>
          ))}
        </m.div>

        {/* Divider */}
        <m.div
          className="via-white/8 mb-12 h-px w-full bg-gradient-to-r from-transparent to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        />

        {/* Cards Grid */}
        <m.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          {cards.map((card, idx) => {
            const Icon = icons[idx];
            return (
              <TiltCard key={card.title}>
                <m.div
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-hunter-orange/20 bg-hunter-orange/10 text-hunter-orange"
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Icon size={22} />
                </m.div>
                <div>
                  <h3 className="mb-1 text-base font-bold tracking-tight text-white">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-400">{card.desc}</p>
                </div>
              </TiltCard>
            );
          })}
        </m.div>
      </div>
    </section>
  );
};

export default QuickWinsSection;
