"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/navigation";
import { m, AnimatePresence } from "framer-motion";
import { LOCALES, LOCALE_METADATA } from "@/utils/constants";

const locales = LOCALES.map((code) => ({ code, ...LOCALE_METADATA[code] }));

export default function LanguageSelector() {
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const t = useTranslations("Header.localeSwitcher");
  const normalizedPathname = pathname.replace(/^\/(en|es|nl)(?=\/|$)/, "") || "/";

  const current = locales.find((l) => l.code === locale) ?? locales[0];

  return (
    <div className="relative">
      {/* Desktop button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t("currentLanguage", { language: current.name })}
        className="group flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-gray-400 backdrop-blur-md transition-all hover:border-hunter-green/30 hover:text-white"
      >
        <span>{current.label}</span>
        <m.svg
          width="10"
          height="10"
          viewBox="0 0 12 12"
          fill="none"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="opacity-60"
        >
          <path
            d="M2 4l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </m.svg>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0, y: 4, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            role="listbox"
            aria-label={t("selectLanguage")}
            className="absolute right-0 top-[calc(100%+8px)] z-50 w-44 overflow-hidden rounded-xl border border-white/10 bg-near-black/95 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <div className="h-[1px] bg-gradient-to-r from-transparent via-hunter-green/60 to-transparent" />
            <div className="py-1.5">
              {locales.map((l) => {
                const isActive = l.code === locale;
                return (
                  <Link
                    key={l.code}
                    href={normalizedPathname}
                    locale={l.code}
                    role="option"
                    aria-selected={isActive}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-200 ${
                      isActive
                        ? "bg-hunter-green/8 text-hunter-green"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span className="font-medium">{l.name}</span>
                    <span className="ml-auto font-mono text-[10px] opacity-50">{l.label}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-hunter-green shadow-[0_0_6px_rgba(0,230,162,0.8)]" />
                    )}
                  </Link>
                );
              })}
            </div>
            <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
