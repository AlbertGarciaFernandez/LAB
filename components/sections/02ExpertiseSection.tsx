// components/sections/ExpertiseSection.tsx

"use client";

import React, { useState } from "react";
import AnimatedSection from "../layout/AnimatedSection";
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from "framer-motion";
import { useTranslations } from "next-intl";

type PillarId =
  | "frontend"
  | "ecommerce"
  | "product"
  | "automation"
  | "leadership"
  | "delivery";

type Pillar = {
  id: PillarId;
  title: string;
  micro: string;
  icon: string;
  indexLabel: string;
  heading: string;
  paragraphs: string[];
  bullets: string[];
};

const ExpertiseSection: React.FC = () => {
  const t = useTranslations("Expertise");
  const [activeId, setActiveId] = useState<PillarId>("frontend");

  const pillars: Pillar[] = [
    {
      id: "frontend",
      indexLabel: t("ui.indexLabel", { number: "01", title: t("pillars.frontend.title") }),
      title: t("pillars.frontend.title"),
      micro: t("pillars.frontend.micro"),
      icon: "{01}",
      heading: t("pillars.frontend.heading"),
      paragraphs: [
        t("pillars.frontend.paragraphs.0"),
        t("pillars.frontend.paragraphs.1"),
      ],
      bullets: [
        t("pillars.frontend.bullets.0"),
        t("pillars.frontend.bullets.1"),
        t("pillars.frontend.bullets.2"),
        t("pillars.frontend.bullets.3"),
      ],
    },
    {
      id: "ecommerce",
      indexLabel: t("ui.indexLabel", { number: "02", title: t("pillars.ecommerce.title") }),
      title: t("pillars.ecommerce.title"),
      micro: t("pillars.ecommerce.micro"),
      icon: "{02}",
      heading: t("pillars.ecommerce.heading"),
      paragraphs: [
        t("pillars.ecommerce.paragraphs.0"),
        t("pillars.ecommerce.paragraphs.1"),
      ],
      bullets: [
        t("pillars.ecommerce.bullets.0"),
        t("pillars.ecommerce.bullets.1"),
        t("pillars.ecommerce.bullets.2"),
        t("pillars.ecommerce.bullets.3"),
        t("pillars.ecommerce.bullets.4"),
      ],
    },
    {
      id: "product",
      indexLabel: t("ui.indexLabel", { number: "03", title: t("pillars.product.title") }),
      title: t("pillars.product.title"),
      micro: t("pillars.product.micro"),
      icon: "{03}",
      heading: t("pillars.product.heading"),
      paragraphs: [
        t("pillars.product.paragraphs.0"),
        t("pillars.product.paragraphs.1"),
      ],
      bullets: [
        t("pillars.product.bullets.0"),
        t("pillars.product.bullets.1"),
        t("pillars.product.bullets.2"),
        t("pillars.product.bullets.3"),
      ],
    },
    {
      id: "automation",
      indexLabel: t("ui.indexLabel", { number: "04", title: t("pillars.automation.title") }),
      title: t("pillars.automation.title"),
      micro: t("pillars.automation.micro"),
      icon: "{04}",
      heading: t("pillars.automation.heading"),
      paragraphs: [
        t("pillars.automation.paragraphs.0"),
        t("pillars.automation.paragraphs.1"),
      ],
      bullets: [
        t("pillars.automation.bullets.0"),
        t("pillars.automation.bullets.1"),
        t("pillars.automation.bullets.2"),
        t("pillars.automation.bullets.3"),
        t("pillars.automation.bullets.4"),
      ],
    },
    {
      id: "leadership",
      indexLabel: t("ui.indexLabel", { number: "05", title: t("pillars.leadership.title") }),
      title: t("pillars.leadership.title"),
      micro: t("pillars.leadership.micro"),
      icon: "{05}",
      heading: t("pillars.leadership.heading"),
      paragraphs: [
        t("pillars.leadership.paragraphs.0"),
      ],
      bullets: [
        t("pillars.leadership.bullets.0"),
        t("pillars.leadership.bullets.1"),
        t("pillars.leadership.bullets.2"),
        t("pillars.leadership.bullets.3"),
      ],
    },
    {
      id: "delivery",
      indexLabel: t("ui.indexLabel", { number: "06", title: t("pillars.delivery.title") }),
      title: t("pillars.delivery.title"),
      micro: t("pillars.delivery.micro"),
      icon: "{06}",
      heading: t("pillars.delivery.heading"),
      paragraphs: [
        t("pillars.delivery.paragraphs.0"),
        t("pillars.delivery.paragraphs.1"),
      ],
      bullets: [
        t("pillars.delivery.bullets.0"),
        t("pillars.delivery.bullets.1"),
        t("pillars.delivery.bullets.2"),
        t("pillars.delivery.bullets.3"),
        t("pillars.delivery.bullets.4"),
      ],
    },
  ];

  const activePillar = pillars.find((p) => p.id === activeId) ?? pillars[0];

  return (
    <AnimatedSection
      id="expertise"
      className="bg-near-black px-4 py-20 text-white md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
          <span className="text-hunter-green">02.</span> {t("title.part1")}
          <br className="hidden md:block" /> {t("title.part2")}
        </h2>
        <p className="mx-auto mb-6 max-w-3xl text-center text-xl text-gray-400">
          {t("subtitle")}
        </p>

        {/* Layout principal: izquierda grid, derecha detalle */}
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {/* GRID DE 6 PILLARS */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            {pillars.map((pillar, i) => {
              const isFirst = i === 0;
              const isActive = pillar.id === activeId;

              return (
                <SpotlightCard
                  key={pillar.id}
                  pillar={pillar}
                  activeId={activeId}
                  isFirst={isFirst}
                  onClick={() => setActiveId(pillar.id)}
                  index={i}
                  t={t}
                />
              );
            })}
          </div>

          {/* ACCORDION DETALLE DEL PILLAR ACTIVO */}
          <div className="mt-4 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="rounded-2xl border border-white/5 bg-surface-dark/80 p-6 md:p-8"
              >
                <p className="text-xs font-display font-semibold uppercase tracking-[0.25em] text-hunter-green">
                  {activePillar.indexLabel}
                </p>
                <h3 className="mt-2 text-xl font-display font-semibold text-hunter-orange md:text-2xl">
                  {activePillar.heading}
                </h3>

                {activePillar.paragraphs.map((p, idx) => (
                  <p key={idx} className="mt-3 text-sm text-gray-300">
                    {p}
                  </p>
                ))}

                <ul className="mt-4 space-y-1 text-sm text-gray-300">
                  {activePillar.bullets.map((b) => (
                    <li key={b}>· {b}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

function SpotlightCard({
  pillar,
  activeId,
  isFirst,
  onClick,
  index,
  t,
}: {
  pillar: Pillar;
  activeId: PillarId;
  isFirst: boolean;
  onClick: () => void;
  index: number;
  t: any;
}) {
  const isActive = pillar.id === activeId;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      whileHover={{ y: -4 }}
      className={`group relative flex h-full flex-col rounded-2xl border bg-surface-dark/70 p-6 text-left transition duration-300 ${isActive ? "border-hunter-green/60" : "border-white/5"
        }`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 230, 162, 0.15) 0%,
              rgba(255, 122, 60, 0.15) 40%,
              transparent 80%
            )
          `,
        }}
      />

      {/* watermark HNTR */}
      <div className="pointer-events-none absolute right-4 top-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-hunter-green/0 transition-colors group-hover:text-hunter-green/40">
        HNTR
      </div>

      {/* badge HNTR Mode solo en la primera card */}
      {isFirst && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="pointer-events-none absolute -left-1 -top-3 rounded-full border border-hunter-green/60 bg-near-black/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-hunter-green shadow-[0_0_24px_rgba(0,230,162,0.35)]"
        >
          HNTR Mode
        </motion.div>
      )}

      <div className="relative flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-3">
        <span className="text-3xl md:text-4xl text-hunter-green font-mono mb-1 md:mb-0">
          {pillar.icon}
        </span>
        <h3 className="text-sm font-display font-bold md:text-lg leading-tight text-white/90">
          {pillar.title}
        </h3>
      </div>

      <p className="relative mt-3 text-sm text-gray-400">
        {pillar.micro}
      </p>

      <span
        className={`relative mt-4 inline-flex items-center text-[11px] font-medium transition-colors ${isActive ? "text-hunter-orange" : "text-hunter-green/80 group-hover:text-hunter-green"
          }`}
      >
        {isActive ? t("ui.selected") : t("ui.readMore")}
        <span className="ml-1 translate-y-[1px] text-xs">
          {isActive ? "●" : "↗"}
        </span>
      </span>
    </motion.button>
  );
}

export default ExpertiseSection;
