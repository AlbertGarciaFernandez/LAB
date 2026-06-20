// components/sections/ExpertiseSection.tsx

"use client";

import React, { useEffect, useState } from "react";
import AnimatedSection from "../layout/AnimatedSection";
import { Link } from "@/navigation";
import { m, AnimatePresence, useMotionTemplate, useMotionValue } from "framer-motion";
import { useTranslations } from "next-intl";

type PillarId = "frontend" | "training" | "product" | "automation" | "leadership" | "delivery";

type Pillar = {
  id: PillarId;
  title: string;
  micro: string;
  icon: string;
  indexLabel: string;
  heading: string;
  paragraphs: string[];
  bullets: string[];
  href: string;
};

const ExpertiseSection: React.FC = () => {
  const t = useTranslations("Expertise");
  const [activeId, setActiveId] = useState<PillarId>("automation");
  const [isMobileDetailOpen, setIsMobileDetailOpen] = useState(false);

  const pillars: Pillar[] = [
    {
      id: "automation",
      indexLabel: t("ui.indexLabel", { number: "01", title: t("pillars.automation.title") }),
      title: t("pillars.automation.title"),
      micro: t("pillars.automation.micro"),
      icon: "{01}",
      heading: t("pillars.automation.heading"),
      paragraphs: [t("pillars.automation.paragraphs.0"), t("pillars.automation.paragraphs.1")],
      href: "/expertise/ai-agents-automation",
      bullets: [
        t("pillars.automation.bullets.0"),
        t("pillars.automation.bullets.1"),
        t("pillars.automation.bullets.2"),
        t("pillars.automation.bullets.3"),
        t("pillars.automation.bullets.4"),
      ],
    },
    {
      id: "frontend",
      indexLabel: t("ui.indexLabel", { number: "02", title: t("pillars.frontend.title") }),
      title: t("pillars.frontend.title"),
      micro: t("pillars.frontend.micro"),
      icon: "{02}",
      heading: t("pillars.frontend.heading"),
      paragraphs: [t("pillars.frontend.paragraphs.0"), t("pillars.frontend.paragraphs.1")],
      href: "/react-consulting",
      bullets: [
        t("pillars.frontend.bullets.0"),
        t("pillars.frontend.bullets.1"),
        t("pillars.frontend.bullets.2"),
        t("pillars.frontend.bullets.3"),
      ],
    },
    {
      id: "product",
      indexLabel: t("ui.indexLabel", { number: "03", title: t("pillars.product.title") }),
      title: t("pillars.product.title"),
      micro: t("pillars.product.micro"),
      icon: "{03}",
      heading: t("pillars.product.heading"),
      paragraphs: [t("pillars.product.paragraphs.0"), t("pillars.product.paragraphs.1")],
      href: "/product-design-development",
      bullets: [
        t("pillars.product.bullets.0"),
        t("pillars.product.bullets.1"),
        t("pillars.product.bullets.2"),
        t("pillars.product.bullets.3"),
      ],
    },
    {
      id: "training",
      indexLabel: t("ui.indexLabel", { number: "04", title: t("pillars.training.title") }),
      title: t("pillars.training.title"),
      micro: t("pillars.training.micro"),
      icon: "{04}",
      heading: t("pillars.training.heading"),
      paragraphs: [t("pillars.training.paragraphs.0"), t("pillars.training.paragraphs.1")],
      href: "/training-enablement",
      bullets: [
        t("pillars.training.bullets.0"),
        t("pillars.training.bullets.1"),
        t("pillars.training.bullets.2"),
        t("pillars.training.bullets.3"),
        t("pillars.training.bullets.4"),
      ],
    },
    {
      id: "leadership",
      indexLabel: t("ui.indexLabel", { number: "05", title: t("pillars.leadership.title") }),
      title: t("pillars.leadership.title"),
      micro: t("pillars.leadership.micro"),
      icon: "{05}",
      heading: t("pillars.leadership.heading"),
      paragraphs: [t("pillars.leadership.paragraphs.0")],
      href: "/technical-leadership",
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
      paragraphs: [t("pillars.delivery.paragraphs.0"), t("pillars.delivery.paragraphs.1")],
      href: "/it-system-integration",
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

  useEffect(() => {
    if (!isMobileDetailOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileDetailOpen(false);
      }
    };

    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileDetailOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [isMobileDetailOpen]);

  const handlePillarSelect = (pillarId: PillarId) => {
    setActiveId(pillarId);

    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setIsMobileDetailOpen(true);
    }
  };

  return (
    <AnimatedSection
      id="expertise"
      className="relative overflow-hidden bg-near-black px-4 py-20 text-white md:px-8 md:py-32"
    >
      <div className="pointer-events-none absolute left-0 top-10 w-full overflow-hidden opacity-[0.05]">
        <h2 className="whitespace-nowrap text-[12rem] font-black leading-none text-white md:text-[20rem]">
          {t("bgText")}
        </h2>
      </div>

      <div className="pointer-events-none absolute bottom-4 right-2 overflow-hidden opacity-[0.05] md:bottom-6 md:right-4">
        <h2 className="whitespace-nowrap text-[12rem] font-black leading-none text-white md:text-[20rem]">
          {t("bgNumber")}
        </h2>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <h2 className="mb-4 text-center text-5xl font-black uppercase tracking-tighter md:text-7xl">
          <span className="text-white">{t("title.part1")}</span>
          <br className="hidden md:block" />{" "}
          <span className="text-hunter-green">{t("title.part2")}</span>
        </h2>
        <p className="mx-auto mb-6 max-w-3xl text-center text-xl text-gray-400">{t("subtitle")}</p>

        {/* Layout principal: izquierda grid, derecha detalle */}
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {/* GRID DE 6 PILLARS */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            {pillars.map((pillar, i) => {
              const isFirst = i === 0;

              return (
                <SpotlightCard
                  key={pillar.id}
                  pillar={pillar}
                  activeId={activeId}
                  isFirst={isFirst}
                  onClick={() => handlePillarSelect(pillar.id)}
                  index={i}
                  t={t}
                />
              );
            })}
          </div>

          {/* ACCORDION DETALLE DEL PILLAR ACTIVO */}
          <div className="mt-4 hidden lg:mt-0 lg:flex">
            <AnimatePresence mode="wait">
              <m.div
                key={activePillar.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="flex h-full w-full flex-col rounded-2xl border border-white/5 bg-surface-dark/80 p-7 md:p-10 lg:p-12"
              >
                <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-hunter-green">
                  {activePillar.indexLabel}
                </p>
                <h3 className="font-display mt-3 text-2xl font-semibold text-hunter-orange md:text-3xl">
                  {activePillar.heading}
                </h3>

                {activePillar.paragraphs.map((p) => (
                  <p key={p} className="mt-4 text-base leading-7 text-gray-300">
                    {p}
                  </p>
                ))}

                <ul className="mt-6 space-y-2 text-base leading-7 text-gray-300">
                  {activePillar.bullets.map((b) => (
                    <li key={b}>· {b}</li>
                  ))}
                </ul>
                <Link
                  href={activePillar.href}
                  className="mt-8 inline-flex w-fit items-center rounded-lg border border-hunter-green/30 bg-hunter-green/10 px-5 py-3 text-xs font-black uppercase tracking-widest text-hunter-green transition-colors hover:bg-hunter-green hover:text-near-black"
                >
                  {t("ui.viewService")}
                </Link>
              </m.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileDetailOpen ? (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-near-black/80 px-4 py-6 backdrop-blur-sm lg:hidden"
            role="dialog"
            aria-modal="true"
            data-cta-suppress="true"
            aria-label={activePillar.heading}
            onClick={() => setIsMobileDetailOpen(false)}
          >
            <m.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mx-auto flex max-h-[calc(100vh-3rem)] w-full max-w-xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-surface-dark/95 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 border-b border-white/5 px-5 py-4">
                <div>
                  <p className="font-display text-[11px] font-semibold uppercase tracking-[0.25em] text-hunter-green">
                    {activePillar.indexLabel}
                  </p>
                  <h3 className="font-display mt-2 text-2xl font-semibold text-hunter-orange">
                    {activePillar.heading}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setIsMobileDetailOpen(false)}
                  className="rounded-full border border-white/10 bg-white/5 p-2 text-white transition-colors hover:bg-white/10"
                  aria-label={t("ui.closeDetail")}
                >
                  <span aria-hidden="true" className="block text-lg leading-none">
                    x
                  </span>
                </button>
              </div>

              <div className="overflow-y-auto px-5 py-5">
                {activePillar.paragraphs.map((p) => (
                  <p key={p} className="mt-4 text-base leading-7 text-gray-300 first:mt-0">
                    {p}
                  </p>
                ))}

                <ul className="mt-6 space-y-3 text-base leading-7 text-gray-300">
                  {activePillar.bullets.map((b) => (
                    <li key={b}>· {b}</li>
                  ))}
                </ul>
                <Link
                  href={activePillar.href}
                  className="mt-7 inline-flex w-fit items-center rounded-lg border border-hunter-green/30 bg-hunter-green/10 px-5 py-3 text-xs font-black uppercase tracking-widest text-hunter-green transition-colors hover:bg-hunter-green hover:text-near-black"
                  onClick={() => setIsMobileDetailOpen(false)}
                >
                  {t("ui.viewService")}
                </Link>
              </div>
            </m.div>
          </m.div>
        ) : null}
      </AnimatePresence>
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
  t: ReturnType<typeof useTranslations>;
}) {
  const isActive = pillar.id === activeId;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <m.button
      type="button"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      whileHover={{ y: -4 }}
      className={`group relative flex h-full flex-col rounded-2xl border bg-surface-dark/70 p-6 text-left transition duration-300 ${
        isActive ? "border-hunter-green/60" : "border-white/5"
      }`}
    >
      <m.div
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
        <m.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="pointer-events-none absolute -left-1 -top-3 rounded-full border border-hunter-green/60 bg-near-black/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-hunter-green shadow-[0_0_24px_rgba(0,230,162,0.35)]"
        >
          HNTR Mode
        </m.div>
      )}

      <div className="relative flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-3">
        <span className="mb-1 font-mono text-3xl text-hunter-green md:mb-0 md:text-4xl">
          {pillar.icon}
        </span>
        <h3 className="font-display text-sm font-bold leading-tight text-white/90 md:text-lg">
          {pillar.title}
        </h3>
      </div>

      <p className="relative mt-3 text-sm text-gray-400">{pillar.micro}</p>

      <span
        className={`relative mt-4 inline-flex items-center text-[11px] font-medium transition-colors ${
          isActive ? "text-hunter-orange" : "text-hunter-green/80 group-hover:text-hunter-green"
        }`}
      >
        {isActive ? t("ui.selected") : t("ui.readMore")}
        <span className="ml-1 translate-y-[1px] text-xs">{isActive ? "●" : "↗"}</span>
      </span>
    </m.button>
  );
}

export default ExpertiseSection;
