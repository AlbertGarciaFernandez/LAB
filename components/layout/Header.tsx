// components/layout/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Link, usePathname } from "@/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

const ChevronDown: React.FC<{ open?: boolean }> = ({ open }) => (
  <motion.svg
    width="11"
    height="11"
    viewBox="0 0 12 12"
    fill="none"
    animate={{ rotate: open ? 180 : 0 }}
    transition={{ duration: 0.2 }}
    className="inline-block ml-0.5 opacity-60"
  >
    <path
      d="M2 4l4 4 4-4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
);

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const t = useTranslations("Header");

  // Dropdown groups with all pages
  const navGroups = [
    {
      name: t("nav.Services"),
      key: "services",
      items: [
        { name: t("nav.services.AIConsulting"), href: "/ai-consulting", icon: "⚡" },
        { name: t("nav.services.ReactConsulting"), href: "/react-consulting", icon: "⚛️" },
        { name: t("nav.services.NextJS"), href: "/nextjs-development-agency", icon: "▲" },
        { name: t("nav.services.ITIntegration"), href: "/it-system-integration", icon: "🔗" },
        { name: t("nav.services.CustomTools"), href: "/services/custom-internal-tools-development", icon: "🛠" },
      ],
    },
    {
      name: t("nav.Expertise"),
      key: "expertise",
      items: [
        { name: t("nav.expertise.AIAgents"), href: "/expertise/ai-agents-automation", icon: "🤖" },
        { name: t("nav.expertise.CustomLLM"), href: "/expertise/custom-llm-development", icon: "🧠" },
        { name: t("nav.expertise.SystemArch"), href: "/expertise/system-architecture-design", icon: "🏗" },
        { name: t("nav.expertise.N8nMigration"), href: "/expertise/n8n-migration-consulting", icon: "🔄" },
      ],
    },
    {
      name: t("nav.Industries"),
      key: "industries",
      items: [
        { name: t("nav.industries.AIConsultingNL"), href: "/ai-automation-consulting-netherlands", icon: "🇳🇱" },
        { name: t("nav.industries.DentalNL"), href: "/dental-clinic-automation-netherlands", icon: "🦷" },
        { name: t("nav.industries.AestheticNL"), href: "/aesthetic-clinic-automation-netherlands", icon: "✨" },
        { name: t("nav.industries.PhysiotherapyNL"), href: "/physiotherapy-clinic-automation-netherlands", icon: "💪" },
        { name: t("nav.industries.VeterinaryNL"), href: "/veterinary-clinic-automation-netherlands", icon: "🐾" },
        { name: t("nav.industries.AccountingNL"), href: "/accounting-firm-automation-netherlands", icon: "📊" },
        { name: t("nav.industries.RealEstateNL"), href: "/real-estate-automation-netherlands", icon: "🏠" },
      ],
    },
  ];

  // Simple section links (homepage anchors)
  const navLinks = [
    { name: t("nav.TheLab"), href: "/#work" },
    { name: t("nav.Bio"), href: "/#about" },
    { name: t("nav.Process"), href: "/#process-contact" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section[id], div[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  const isGroupActive = (items: { href: string }[]) =>
    items.some((item) => pathname === item.href || pathname?.startsWith(item.href + "/"));

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 z-50 w-full backdrop-blur-xl bg-near-black/60 transition-all duration-300 supports-[backdrop-filter]:bg-near-black/40"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center h-24 px-4 md:px-8">
          {/* Logo and Brand Name */}
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative h-11 w-11 rounded-xl bg-near-black border border-hunter-green/30 overflow-hidden flex items-center justify-center shadow-[0_0_15px_rgba(0,230,162,0.1)] group-hover:shadow-[0_0_25px_rgba(0,230,162,0.4)] group-hover:border-hunter-green/60 transition-all duration-500"
            >
              {/* Internal Glow Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-hunter-green/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Scanline Effect */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-y-[150%] group-hover:translate-y-[150%] transition-transform duration-700 ease-in-out" />

              <Image
                src="/logo-hntr.svg"
                alt="HNTR – CodeHunter Lab"
                width={28}
                height={28}
                className="relative z-10 w-7 h-7 object-contain drop-shadow-[0_0_8px_rgba(0,230,162,0.4)]"
                priority
              />
            </motion.div>

            <div className="flex flex-col justify-center">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-white leading-none mb-1 group-hover:text-hunter-green transition-colors duration-300">
                CodeHunter
              </span>
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-hunter-green/80 group-hover:text-white transition-colors duration-300 group-hover:tracking-[0.4em]">
                Lab
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            <ul className="flex items-center space-x-1 bg-surface-dark/50 rounded-full px-2 py-1 border border-white/5">
              {/* Dropdown Groups */}
              {navGroups.map((group) => (
                <li
                  key={group.key}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(group.key)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 flex items-center group ${
                      isGroupActive(group.items) || openDropdown === group.key
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {group.name}
                    <ChevronDown open={openDropdown === group.key} />
                    <span
                      className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-hunter-green rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(0,230,162,0.8)] ${
                        isGroupActive(group.items) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </button>

                  {/* Dropdown Panel */}
                  <AnimatePresence>
                    {openDropdown === group.key && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.97 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-60 bg-near-black/95 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] z-50"
                      >
                        {/* Top accent line */}
                        <div className="h-[1px] bg-gradient-to-r from-transparent via-hunter-green/60 to-transparent" />

                        <div className="py-1.5">
                          {group.items.map((item) => {
                            const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpenDropdown(null)}
                                className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-200 group/item ${
                                  isActive
                                    ? "text-hunter-green bg-hunter-green/8"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                                }`}
                              >
                                <span className="text-base leading-none w-5 text-center opacity-70 group-hover/item:opacity-100 transition-opacity">
                                  {item.icon}
                                </span>
                                <span className="group-hover/item:translate-x-0.5 transition-transform duration-200">
                                  {item.name}
                                </span>
                                {isActive && (
                                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-hunter-green shadow-[0_0_6px_rgba(0,230,162,0.8)]" />
                                )}
                              </Link>
                            );
                          })}
                        </div>

                        {/* Bottom accent line */}
                        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}

              {/* Simple anchor links */}
              {navLinks.map((item) => {
                const sectionId = item.href.replace("/#", "");
                const isActive = activeSection === sectionId && pathname === "/";
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 block group ${
                        isActive ? "text-white" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {item.name}
                      <span
                        className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-hunter-green rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(0,230,162,0.8)] ${
                          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* AI Consulting Button */}
            <Link
              href="/ai-consulting"
              className="relative inline-flex h-9 md:h-10 overflow-hidden rounded-full p-[1px] focus:outline-none group hover:scale-105 transition-transform duration-300"
            >
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00E6A2_0%,#0B0B0B_50%,#00E6A2_100%)] opacity-70" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-near-black px-4 md:px-6 py-1 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] md:tracking-[0.25em] text-white backdrop-blur-3xl transition-all group-hover:bg-near-black/80 group-hover:text-hunter-green">
                {t("cta.AIConsulting")}
              </span>
            </Link>

            {/* Let's Work Button */}
            <Link
              href="/#contact"
              className="hidden md:inline-flex relative h-10 overflow-hidden rounded-full p-[1px] focus:outline-none group hover:scale-105 transition-transform duration-300"
            >
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF7A3C_0%,#0B0B0B_50%,#FF7A3C_100%)] opacity-70" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-near-black px-6 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white backdrop-blur-3xl transition-all group-hover:bg-hunter-orange group-hover:text-near-black">
                {t("cta.LetsWork")}
              </span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white relative z-[60] p-2 ml-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <motion.span
                animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }}
                className="block w-6 h-0.5 bg-hunter-green origin-center transition-transform"
              />
              <motion.span
                animate={{ opacity: open ? 0 : 1 }}
                className="block w-6 h-0.5 bg-hunter-green transition-opacity"
              />
              <motion.span
                animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0, width: open ? "24px" : "16px" }}
                className="block w-4 ml-auto h-0.5 bg-hunter-green origin-center transition-transform"
              />
            </div>
          </button>
        </div>

        {/* Enchanted Bottom Border */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-white/10" />
          <motion.div
            className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-hunter-green to-transparent blur-[1px]"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-hunter-orange to-transparent blur-[1px]"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2 }}
          />
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-near-black overflow-y-auto md:hidden"
          >
            <div className="flex flex-col items-center justify-center min-h-full py-28 px-6 space-y-2">

              {/* Dropdown Groups (collapsible on mobile) */}
              {navGroups.map((group, gi) => (
                <motion.div
                  key={group.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + gi * 0.07 }}
                  className="w-full max-w-sm"
                >
                  <button
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === group.key ? null : group.key)
                    }
                    className={`w-full flex items-center justify-between px-5 py-3 rounded-xl font-bold text-xl transition-colors ${
                      isGroupActive(group.items)
                        ? "text-hunter-green"
                        : mobileExpanded === group.key
                        ? "text-white"
                        : "text-gray-400"
                    }`}
                  >
                    <span>{group.name}</span>
                    <ChevronDown open={mobileExpanded === group.key} />
                  </button>

                  <AnimatePresence>
                    {mobileExpanded === group.key && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-1 mb-2 border border-white/8 rounded-xl overflow-hidden">
                          {group.items.map((item) => {
                            const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className={`flex items-center gap-3 px-5 py-3 text-base border-b border-white/5 last:border-0 transition-colors ${
                                  isActive
                                    ? "text-hunter-green bg-hunter-green/8"
                                    : "text-gray-400 hover:text-white"
                                }`}
                              >
                                <span className="text-lg">{item.icon}</span>
                                {item.name}
                                {isActive && (
                                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-hunter-green" />
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}

              {/* Simple anchor links */}
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.31 + i * 0.07 }}
                  className="w-full max-w-sm"
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block w-full px-5 py-3 text-xl font-bold text-gray-400 hover:text-hunter-orange transition-colors rounded-xl"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* Divider */}
              <div className="w-full max-w-sm h-px bg-white/10 my-2" />

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="w-full max-w-sm"
              >
                <Link
                  href="/ai-consulting"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center px-8 py-3.5 text-hunter-green border border-hunter-green font-bold uppercase rounded-full tracking-[0.2em] text-sm hover:bg-hunter-green hover:text-near-black transition-all duration-300"
                >
                  {t("cta.AIConsulting")}
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.62 }}
                className="w-full max-w-sm"
              >
                <Link
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center px-8 py-3.5 bg-hunter-orange text-near-black font-bold uppercase rounded-full tracking-[0.15em] text-sm hover:opacity-90 transition-opacity"
                >
                  {t("cta.LetsWork")}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
