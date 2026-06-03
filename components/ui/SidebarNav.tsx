"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { m, AnimatePresence } from "framer-motion";
import { usePathname } from "@/navigation";
import { useTranslations } from "next-intl";

type Section = {
  id: string;
  label: string;
};

export default function SidebarNav() {
  const t = useTranslations("AIConsulting.Navigation");
  const sections = useMemo<Section[]>(
    () => [
      { id: "hero", label: t("hero") },
      { id: "who-its-for", label: t("whoItsFor") },
      { id: "top-agents", label: t("topAgents") },
      { id: "what-we-build", label: t("whatWeBuild") },
      { id: "tech-credibility", label: t("techCredibility") },
      { id: "roi-calculator", label: t("roiCalculator") },
      { id: "pricing", label: t("pricing") },
      { id: "migration", label: t("engagementModels") },
      { id: "faq", label: t("faq") },
    ],
    [t]
  );

  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pathname.includes("ai-consulting")) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname, sections]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const activeIndex = sections.findIndex((s) => s.id === activeSection);

  return (
    <m.nav
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-0 left-4 top-0 z-40 hidden flex-col justify-center lg:flex"
      ref={containerRef}
    >
      <div className="relative flex h-full flex-col items-center justify-between py-24">
        {sections.map((section, index) => {
          const isActive = activeSection === section.id;
          const isHovered = hoveredSection === section.id;
          const isPast = index < activeIndex;

          return (
            <button
              key={section.id}
              onClick={() => handleClick(section.id)}
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
              className="group relative"
              aria-label={`Navigate to ${section.label}`}
            >
              <m.div
                className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-hunter-green/20 blur-xl"
                animate={{
                  opacity: isActive || isHovered ? 1 : 0,
                  scale: isActive || isHovered ? 1 : 0.5,
                }}
                transition={{ duration: 0.3 }}
              />

              <m.div
                className="relative flex items-center justify-center"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className={`h-3 w-3 rounded-full transition-all duration-500 ${
                    isPast
                      ? "bg-hunter-green shadow-[0_0_12px_rgba(0,230,162,0.8),0_0_24px_rgba(0,230,162,0.4)]"
                      : isActive
                        ? "bg-hunter-green shadow-[0_0_16px_rgba(0,230,162,1),0_0_32px_rgba(0,230,162,0.6)] ring-4 ring-hunter-green/20"
                        : "border-2 border-white/30 bg-transparent group-hover:border-hunter-green/60 group-hover:shadow-[0_0_12px_rgba(0,230,162,0.3)]"
                  }`}
                />

                <m.div
                  className="absolute w-1 bg-gradient-to-b from-hunter-green to-transparent"
                  animate={{
                    height: isActive ? "40px" : "0px",
                    opacity: isActive ? 1 : 0,
                  }}
                  style={{ top: "100%" }}
                  transition={{ duration: 0.4 }}
                />

                <m.div
                  className="absolute w-1 bg-gradient-to-t from-hunter-green/50 to-transparent"
                  animate={{
                    height: isActive ? "40px" : "0px",
                    opacity: isActive ? 1 : 0,
                  }}
                  style={{ bottom: "100%" }}
                  transition={{ duration: 0.4 }}
                />
              </m.div>

              <AnimatePresence>
                {isHovered && (
                  <m.div
                    initial={{ opacity: 0, x: -20, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -20, scale: 0.8 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-8 whitespace-nowrap"
                  >
                    <div className="relative">
                      <div className="absolute -left-2 top-1/2 h-0 w-0 -translate-y-1/2 border-b-4 border-l-8 border-t-4 border-b-transparent border-l-hunter-green/80 border-t-transparent" />
                      <div className="relative rounded-lg border border-hunter-green/30 bg-near-black/95 px-4 py-2 shadow-[0_0_20px_rgba(0,230,162,0.2)] backdrop-blur-md">
                        <span className="text-xs font-semibold tracking-wide text-white">
                          {section.label}
                        </span>
                      </div>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>

              {index < sections.length - 1 && (
                <div
                  className={`absolute left-1/2 top-full w-px -translate-x-1/2 transition-all duration-500 ${
                    isPast
                      ? "bg-gradient-to-b from-hunter-green/80 via-hunter-green/40 to-white/10"
                      : "bg-white/10"
                  }`}
                  style={{ height: "calc((100vh - 192px) / 8)" }}
                >
                  <m.div
                    className="absolute left-0 top-0 w-full bg-hunter-green"
                    animate={{
                      height: isPast ? "100%" : "0%",
                    }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ width: "2px", left: "-0.5px" }}
                  />
                </div>
              )}
            </button>
          );
        })}

        <m.div
          className="absolute bottom-24 left-1/2 top-24 w-px bg-white/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />

        <m.div
          className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-hunter-green/10"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <m.div
        className="absolute bottom-0 left-4 top-0 w-0.5 bg-gradient-to-b from-transparent via-white/5 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      />
    </m.nav>
  );
}
