// components/layout/Header.tsx
"use client";

import React, { useState, useReducer, useEffect } from "react";
import { Link, usePathname } from "@/navigation";
import Image from "next/image";
import { m, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import {
  LightningIcon,
  AtomIcon,
  StackIcon,
  PlugsConnectedIcon,
  WrenchIcon,
  RobotIcon,
  BrainIcon,
  TreeStructureIcon,
  ArrowsClockwiseIcon,
  GlobeIcon,
  SparkleIcon,
  HeartbeatIcon,
  ChartBarIcon,
  HouseIcon,
} from "@phosphor-icons/react/dist/ssr";
import LanguageSelector from "./LanguageSelector";
import { LOCALES, LOCALE_METADATA } from "@/utils/constants";

type NavState = {
  open: boolean;
  openDropdown: string | null;
  mobileExpanded: string | null;
  prevPathname: string;
};
type NavAction =
  | { type: "TOGGLE_MOBILE" }
  | { type: "CLOSE_MOBILE" }
  | { type: "SET_DROPDOWN"; key: string | null }
  | { type: "TOGGLE_MOBILE_GROUP"; key: string }
  | { type: "ROUTE_CHANGE"; pathname: string };

function navReducer(state: NavState, action: NavAction): NavState {
  switch (action.type) {
    case "TOGGLE_MOBILE":
      return { ...state, open: !state.open };
    case "CLOSE_MOBILE":
      return { ...state, open: false };
    case "SET_DROPDOWN":
      return { ...state, openDropdown: action.key };
    case "TOGGLE_MOBILE_GROUP":
      return { ...state, mobileExpanded: state.mobileExpanded === action.key ? null : action.key };
    case "ROUTE_CHANGE":
      return { ...state, open: false, mobileExpanded: null, prevPathname: action.pathname };
  }
}

const ChevronDown: React.FC<{ open?: boolean }> = ({ open }) => (
  <m.svg
    aria-hidden="true"
    width="11"
    height="11"
    viewBox="0 0 12 12"
    fill="none"
    animate={{ rotate: open ? 180 : 0 }}
    transition={{ duration: 0.2 }}
    className="ml-0.5 inline-block opacity-60"
  >
    <path
      d="M2 4l4 4 4-4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </m.svg>
);

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const locale = useLocale();
  const [nav, dispatch] = useReducer(navReducer, {
    open: false,
    openDropdown: null,
    mobileExpanded: null,
    prevPathname: pathname,
  });
  const { open, openDropdown, mobileExpanded } = nav;
  const t = useTranslations("Header");
  const normalizedPathname = pathname.replace(/^\/(en|es|nl)(?=\/|$)/, "") || "/";

  // Dropdown groups with all pages
  const navGroups = [
    {
      name: t("nav.Services"),
      key: "services",
      items: [
        {
          name: t("nav.services.AIConsulting"),
          href: "/ai-consulting",
          icon: <LightningIcon size={16} />,
        },
        {
          name: t("nav.services.ReactConsulting"),
          href: "/react-consulting",
          icon: <AtomIcon size={16} />,
        },
        {
          name: t("nav.services.NextJS"),
          href: "/nextjs-development-agency",
          icon: <StackIcon size={16} />,
        },
        {
          name: t("nav.services.ITIntegration"),
          href: "/it-system-integration",
          icon: <PlugsConnectedIcon size={16} />,
        },
        {
          name: t("nav.services.CustomTools"),
          href: "/services/custom-internal-tools-development",
          icon: <WrenchIcon size={16} />,
        },
      ],
    },
    {
      name: t("nav.Expertise"),
      key: "expertise",
      items: [
        {
          name: t("nav.expertise.AIAgents"),
          href: "/expertise/ai-agents-automation",
          icon: <RobotIcon size={16} />,
        },
        {
          name: t("nav.expertise.CustomLLM"),
          href: "/expertise/custom-llm-development",
          icon: <BrainIcon size={16} />,
        },
        {
          name: t("nav.expertise.SystemArch"),
          href: "/expertise/system-architecture-design",
          icon: <TreeStructureIcon size={16} />,
        },
        {
          name: t("nav.expertise.N8nMigration"),
          href: "/expertise/n8n-migration-consulting",
          icon: <ArrowsClockwiseIcon size={16} />,
        },
      ],
    },
    {
      name: t("nav.Industries"),
      key: "industries",
      items: [
        {
          name: t("nav.industries.AIConsultingNL"),
          href: "/ai-consulting",
          icon: <GlobeIcon size={16} />,
        },
        {
          name: t("nav.industries.HealthcareNL"),
          href: "/healthcare-automation-netherlands",
          icon: <HeartbeatIcon size={16} />,
        },
        {
          name: t("nav.industries.AestheticNL"),
          href: "/aesthetic-clinic-automation-netherlands",
          icon: <SparkleIcon size={16} />,
        },
        {
          name: t("nav.industries.ProfessionalServicesNL"),
          href: "/professional-services-automation-netherlands",
          icon: <ChartBarIcon size={16} />,
        },
        {
          name: t("nav.industries.RealEstateNL"),
          href: "/real-estate-automation-netherlands",
          icon: <HouseIcon size={16} />,
        },
      ],
    },
  ];

  // Simple section links (homepage anchors)
  const navLinks = [
    { name: t("nav.Bio"), href: "/#about" },
    { name: t("nav.Process"), href: "/#process-contact" },
  ];

  const locales = LOCALES.map((code) => ({ code, ...LOCALE_METADATA[code] }));

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

  useEffect(() => {
    if (nav.prevPathname !== pathname) {
      dispatch({ type: "ROUTE_CHANGE", pathname });
    }
  }, [pathname, nav.prevPathname]);

  const isGroupActive = (items: { href: string }[]) =>
    items.some((item) => pathname === item.href || pathname?.startsWith(item.href + "/"));

  const handleDropdownKeyDown = (event: React.KeyboardEvent, key: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      dispatch({ type: "SET_DROPDOWN", key: openDropdown === key ? null : key });
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      dispatch({ type: "SET_DROPDOWN", key });
      requestAnimationFrame(() => {
        const firstItem = document.querySelector<HTMLElement>(`#${key}-menu [role="menuitem"]`);
        firstItem?.focus();
      });
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      dispatch({ type: "SET_DROPDOWN", key });
      requestAnimationFrame(() => {
        const items = document.querySelectorAll<HTMLElement>(`#${key}-menu [role="menuitem"]`);
        items[items.length - 1]?.focus();
      });
    }

    if (event.key === "Escape") {
      dispatch({ type: "SET_DROPDOWN", key: null });
      (event.currentTarget as HTMLButtonElement).focus();
    }
  };

  const handleMenuItemKeyDown = (event: React.KeyboardEvent, key: string) => {
    const items = Array.from(
      document.querySelectorAll<HTMLElement>(`#${key}-menu [role="menuitem"]`)
    );
    const currentIndex = items.indexOf(event.currentTarget as HTMLElement);

    if (event.key === "ArrowDown") {
      event.preventDefault();
      items[(currentIndex + 1) % items.length]?.focus();
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      items[(currentIndex - 1 + items.length) % items.length]?.focus();
    }

    if (event.key === "Home") {
      event.preventDefault();
      items[0]?.focus();
    }

    if (event.key === "End") {
      event.preventDefault();
      items[items.length - 1]?.focus();
    }

    if (event.key === "Escape") {
      event.preventDefault();
      dispatch({ type: "SET_DROPDOWN", key: null });
      const trigger = document.querySelector<HTMLElement>(`[data-dropdown-trigger="${key}"]`);
      trigger?.focus();
    }
  };

  return (
    <>
      <m.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 z-50 w-full border-b border-white/[0.05] bg-near-black/70 backdrop-blur-xl transition-all duration-300 supports-[backdrop-filter]:bg-near-black/50"
      >
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 md:px-8">
          {/* Logo and Brand Name */}
          <Link href="/" className="group relative z-50 flex items-center gap-3">
            <m.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-white/[0.08] bg-[#0A0A0A] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-all duration-500 group-hover:border-hunter-green/40 group-hover:shadow-[0_0_20px_rgba(0,230,162,0.2)]"
            >
              {/* Internal Glow Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-hunter-green/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <Image
                src="/logo-hntr.svg"
                alt={t("brand.logoAlt")}
                width={32}
                height={32}
                className="relative z-10 h-7 w-7 object-contain drop-shadow-[0_0_8px_rgba(0,230,162,0.4)]"
                priority
              />
            </m.div>

            <div className="flex flex-col justify-center">
              <span className="mb-1 text-xs font-black uppercase leading-none tracking-[0.25em] text-white transition-colors duration-300 group-hover:text-hunter-green">
                {t("brand.name")}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-hunter-green/80 transition-colors duration-300 group-hover:tracking-[0.4em] group-hover:text-white">
                {t("brand.suffix")}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center space-x-1 lg:flex">
            <ul className="flex items-center space-x-1 rounded-full border border-white/[0.05] bg-white/[0.02] px-2 py-1 shadow-inner backdrop-blur-md">
              {/* Dropdown Groups */}
              {navGroups.map((group) => (
                <li
                  key={group.key}
                  className="relative"
                  onMouseEnter={() => dispatch({ type: "SET_DROPDOWN", key: group.key })}
                  onMouseLeave={() => dispatch({ type: "SET_DROPDOWN", key: null })}
                >
                  <button
                    type="button"
                    aria-expanded={openDropdown === group.key}
                    aria-haspopup="menu"
                    aria-controls={`${group.key}-menu`}
                    data-dropdown-trigger={group.key}
                    onFocus={() => dispatch({ type: "SET_DROPDOWN", key: group.key })}
                    onKeyDown={(event) => handleDropdownKeyDown(event, group.key)}
                    className={`group relative flex items-center px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      isGroupActive(group.items) || openDropdown === group.key
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {group.name}
                    <ChevronDown open={openDropdown === group.key} />
                    <span
                      className={`absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-hunter-green shadow-[0_0_8px_rgba(0,230,162,0.8)] transition-all duration-300 ${
                        isGroupActive(group.items)
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </button>

                  {/* Dropdown Panel */}
                  <AnimatePresence>
                    {openDropdown === group.key && (
                      <m.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        id={`${group.key}-menu`}
                        role="menu"
                        className="absolute left-1/2 top-[calc(100%+12px)] z-50 w-64 -translate-x-1/2 overflow-hidden rounded-3xl border border-white/[0.05] bg-[#0A0A0A]/95 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
                      >
                        {/* Top accent line */}
                        <div className="h-[1px] bg-gradient-to-r from-transparent via-hunter-green/40 to-transparent" />

                        <div className="py-1.5">
                          {group.items.map((item) => {
                            const isActive =
                              pathname === item.href || pathname?.startsWith(item.href + "/");
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                role="menuitem"
                                onClick={() => dispatch({ type: "SET_DROPDOWN", key: null })}
                                onKeyDown={(event) => {
                                  handleMenuItemKeyDown(event, group.key);
                                }}
                                className={`group/item flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-200 ${
                                  isActive
                                    ? "bg-hunter-green/8 text-hunter-green"
                                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                                }`}
                              >
                                <span className="w-5 text-center text-base leading-none opacity-70 transition-opacity group-hover/item:opacity-100">
                                  {item.icon}
                                </span>
                                <span className="transition-transform duration-200 group-hover/item:translate-x-0.5">
                                  {item.name}
                                </span>
                                {isActive && (
                                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-hunter-green shadow-[0_0_6px_rgba(0,230,162,0.8)]" />
                                )}
                              </Link>
                            );
                          })}
                        </div>

                        {/* Bottom accent line */}
                        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                      </m.div>
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
                      className={`group relative block px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                        isActive ? "text-white" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {item.name}
                      <span
                        className={`absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-hunter-green shadow-[0_0_8px_rgba(0,230,162,0.8)] transition-all duration-300 ${
                          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}

              <li>
                <Link
                  href="/insights"
                  locale="en"
                  className="group relative block px-4 py-2 text-sm font-medium text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  {t("nav.Insights")}
                  <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-hunter-green opacity-0 shadow-[0_0_8px_rgba(0,230,162,0.8)] transition-all duration-300 group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  locale="en"
                  className="group relative block px-4 py-2 text-sm font-medium text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  {t("nav.CaseStudies")}
                  <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-hunter-green opacity-0 shadow-[0_0_8px_rgba(0,230,162,0.8)] transition-all duration-300 group-hover:opacity-100" />
                </Link>
              </li>
            </ul>
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Language Selector */}
            <div className="hidden lg:block">
              <LanguageSelector />
            </div>
            {/* AI Consulting Button */}
            <Link
              href="/ai-consulting"
              className="group relative inline-flex h-9 overflow-hidden rounded-full p-[1px] transition-transform duration-300 hover:scale-105 focus:outline-none md:h-10"
            >
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00E6A2_0%,#0B0B0B_50%,#00E6A2_100%)] opacity-70" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-near-black px-4 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-3xl transition-all group-hover:bg-near-black/80 group-hover:text-hunter-green md:px-6 md:text-[10px] md:tracking-[0.25em]">
                {t("cta.AIConsulting")}
              </span>
            </Link>

            {/* Let's Work Button */}
            <Link
              href="#contact"
              className="group relative hidden h-10 overflow-hidden rounded-full p-[1px] transition-transform duration-300 hover:scale-105 focus:outline-none md:inline-flex"
            >
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF7A3C_0%,#0B0B0B_50%,#FF7A3C_100%)] opacity-70" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-near-black px-6 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white backdrop-blur-3xl transition-all group-hover:bg-hunter-orange group-hover:text-near-black">
                {t("cta.LetsWork")}
              </span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="relative z-[60] ml-2 p-2 text-white lg:hidden"
            onClick={() => dispatch({ type: "TOGGLE_MOBILE" })}
            aria-label={t("a11y.toggleMenu")}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <div className="space-y-1.5">
              <m.span
                animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }}
                className="block h-0.5 w-6 origin-center bg-hunter-green transition-transform"
              />
              <m.span
                animate={{ opacity: open ? 0 : 1 }}
                className="block h-0.5 w-6 bg-hunter-green transition-opacity"
              />
              <m.span
                animate={{
                  rotate: open ? -45 : 0,
                  y: open ? -8 : 0,
                  width: open ? "24px" : "16px",
                }}
                className="ml-auto block h-0.5 w-4 origin-center bg-hunter-green transition-transform"
              />
            </div>
          </button>
        </div>

        {/* Enchanted Bottom Border (Removed in favor of crisp border on header) */}
      </m.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label={t("a11y.mobileNavigation")}
            data-cta-suppress="true"
            className="fixed inset-0 z-40 overflow-y-auto bg-near-black md:hidden"
          >
            <div className="flex min-h-full flex-col items-center justify-center space-y-2 px-6 py-28">
              {/* Dropdown Groups (collapsible on mobile) */}
              {navGroups.map((group, gi) => (
                <m.div
                  key={group.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + gi * 0.07 }}
                  className="w-full max-w-sm"
                >
                  <button
                    type="button"
                    onClick={() => dispatch({ type: "TOGGLE_MOBILE_GROUP", key: group.key })}
                    aria-expanded={mobileExpanded === group.key}
                    aria-controls={`mobile-${group.key}-menu`}
                    className={`flex w-full items-center justify-between rounded-xl px-5 py-3 text-xl font-bold transition-colors ${
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
                      <m.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        id={`mobile-${group.key}-menu`}
                        className="overflow-hidden"
                      >
                        <div className="border-white/8 mb-2 mt-1 overflow-hidden rounded-xl border">
                          {group.items.map((item) => {
                            const isActive =
                              pathname === item.href || pathname?.startsWith(item.href + "/");
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => dispatch({ type: "CLOSE_MOBILE" })}
                                className={`flex items-center gap-3 border-b border-white/5 px-5 py-3 text-base transition-colors last:border-0 ${
                                  isActive
                                    ? "bg-hunter-green/8 text-hunter-green"
                                    : "text-gray-400 hover:text-white"
                                }`}
                              >
                                <span className="text-lg">{item.icon}</span>
                                {item.name}
                                {isActive && (
                                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-hunter-green" />
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      </m.div>
                    )}
                  </AnimatePresence>
                </m.div>
              ))}

              {/* Simple anchor links */}
              {navLinks.map((item, i) => (
                <m.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.31 + i * 0.07 }}
                  className="w-full max-w-sm"
                >
                  <Link
                    href={item.href}
                    onClick={() => dispatch({ type: "CLOSE_MOBILE" })}
                    className="block w-full rounded-xl px-5 py-3 text-xl font-bold text-gray-400 transition-colors hover:text-hunter-orange"
                  >
                    {item.name}
                  </Link>
                </m.div>
              ))}

              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.52 }}
                className="w-full max-w-sm"
              >
                <Link
                  href="/insights"
                  locale="en"
                  onClick={() => dispatch({ type: "CLOSE_MOBILE" })}
                  className="block w-full rounded-xl px-5 py-3 text-xl font-bold text-gray-400 transition-colors hover:text-hunter-orange"
                >
                  {t("nav.Insights")}
                </Link>
              </m.div>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.56 }}
                className="w-full max-w-sm"
              >
                <Link
                  href="/case-studies"
                  locale="en"
                  onClick={() => dispatch({ type: "CLOSE_MOBILE" })}
                  className="block w-full rounded-xl px-5 py-3 text-xl font-bold text-gray-400 transition-colors hover:text-hunter-orange"
                >
                  {t("nav.CaseStudies")}
                </Link>
              </m.div>

              {/* Divider */}
              <div className="my-2 h-px w-full max-w-sm bg-white/10" />

              {/* Language Selector (mobile) */}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="w-full max-w-sm"
              >
                <div className="flex items-center justify-center gap-3 px-5 py-3">
                  {locales.map((l) => {
                    const isActive = l.code === locale;
                    return (
                      <Link
                        key={l.code}
                        href={normalizedPathname}
                        locale={l.code}
                        onClick={() => dispatch({ type: "CLOSE_MOBILE" })}
                        className={`flex flex-col items-center gap-1 rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
                          isActive
                            ? "bg-hunter-green/10 text-hunter-green"
                            : "text-gray-500 hover:text-white"
                        }`}
                      >
                        <span className="text-xl leading-none">{l.flag}</span>
                        <span>{l.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </m.div>

              {/* CTAs */}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="w-full max-w-sm"
              >
                <Link
                  href="/ai-consulting"
                  onClick={() => dispatch({ type: "CLOSE_MOBILE" })}
                  className="group relative block w-full overflow-hidden rounded-full p-[1px] transition-transform duration-300 hover:scale-[1.02]"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00E6A2_0%,#0B0B0B_50%,#00E6A2_100%)] opacity-70" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-near-black px-8 py-3.5 text-center text-sm font-bold uppercase tracking-[0.2em] text-white backdrop-blur-3xl transition-all group-hover:bg-near-black/80 group-hover:text-hunter-green">
                    {t("cta.AIConsulting")}
                  </span>
                </Link>
              </m.div>

              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.62 }}
                className="w-full max-w-sm"
              >
                <Link
                  href="#contact"
                  onClick={() => dispatch({ type: "CLOSE_MOBILE" })}
                  className="group relative block w-full overflow-hidden rounded-full p-[1px] transition-transform duration-300 hover:scale-[1.02]"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF7A3C_0%,#0B0B0B_50%,#FF7A3C_100%)] opacity-70" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-near-black px-8 py-3.5 text-center text-sm font-bold uppercase tracking-[0.15em] text-white backdrop-blur-3xl transition-all group-hover:bg-hunter-orange group-hover:text-near-black">
                    {t("cta.LetsWork")}
                  </span>
                </Link>
              </m.div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
