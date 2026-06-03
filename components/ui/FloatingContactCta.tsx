"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ChatCircleDotsIcon, XIcon } from "@phosphor-icons/react/dist/ssr";
import { useLocale, useTranslations } from "next-intl";
import { ContactForm } from "@/components/ui/ContactForm";

const COLLAPSE_AFTER_MS = 4000;
const REEXPAND_EVERY_MS = 25000;

function hasCtaSuppressingModal(): boolean {
  if (typeof document === "undefined") return false;
  return document.querySelector('[data-cta-suppress="true"]') !== null;
}

export default function FloatingContactCta() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [isExternallyHidden, setIsExternallyHidden] = useState(false);
  const locale = useLocale();
  const t = useTranslations("FloatingContactCta");
  const collapseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reexpandTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncWithHash = () => {
      if (typeof window === "undefined") return;
      if (window.location.hash === "#contact") {
        const target = document.getElementById("contact");
        if (!target) {
          setIsOpen(true);
        }
      }
    };

    syncWithHash();
    window.addEventListener("hashchange", syncWithHash);
    return () => window.removeEventListener("hashchange", syncWithHash);
  }, []);

  useEffect(() => {
    if (isExternallyHidden) return;

    const checkExternalModals = () => setIsExternallyHidden(hasCtaSuppressingModal());
    checkExternalModals();

    const observer = new MutationObserver(checkExternalModals);
    observer.observe(document.body, { childList: true, subtree: true, attributes: true });
    return () => observer.disconnect();
  }, [isExternallyHidden]);

  useEffect(() => {
    if (isOpen) return;
    if (isExternallyHidden) return;

    collapseTimer.current = setTimeout(() => setIsExpanded(false), COLLAPSE_AFTER_MS);
    return () => {
      if (collapseTimer.current) clearTimeout(collapseTimer.current);
    };
  }, [isOpen, isExternallyHidden, isExpanded]);

  useEffect(() => {
    if (isOpen) {
      if (reexpandTimer.current) {
        clearInterval(reexpandTimer.current);
        reexpandTimer.current = null;
      }
      setIsExpanded(true);
      return;
    }

    if (isExternallyHidden) return;

    reexpandTimer.current = setInterval(() => {
      setIsExpanded(true);
      collapseTimer.current = setTimeout(() => setIsExpanded(false), COLLAPSE_AFTER_MS);
    }, REEXPAND_EVERY_MS);

    return () => {
      if (reexpandTimer.current) clearInterval(reexpandTimer.current);
    };
  }, [isOpen, isExternallyHidden]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }
      if (event.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && panelRef.current) {
      const closeButton = panelRef.current.querySelector<HTMLButtonElement>("button[aria-label]");
      closeButton?.focus();
    }
  }, [isOpen]);

  const handleRequestFullForm = () => {
    setIsOpen(false);

    const target = document.getElementById("contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.location.href = `/${locale}/#contact`;
  };

  const handleOpen = () => {
    setIsOpen(true);
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsExpanded(false);
  };

  if (isExternallyHidden && !isOpen) return null;

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-[110] flex max-w-[calc(100vw-2rem)] flex-col items-end gap-3 md:bottom-8 md:right-8 md:max-w-md">
      <AnimatePresence>
        {isOpen ? (
          <>
            <m.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[109] bg-near-black/70 backdrop-blur-sm md:hidden"
              onClick={handleClose}
              aria-hidden="true"
            />
            <m.div
              key="panel"
              ref={panelRef}
              id="floating-contact-panel"
              role="dialog"
              aria-modal="true"
              aria-label={t("title")}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="pointer-events-auto relative z-[110] max-h-[calc(100vh-6rem)] w-full overflow-y-auto rounded-3xl border border-white/10 bg-near-black/95 p-4 shadow-[0_32px_100px_-45px_rgba(0,0,0,0.8)] backdrop-blur-xl md:max-h-[85vh] md:w-[28rem] md:rounded-[2rem] md:p-5"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-hunter-green md:text-xs md:tracking-[0.22em]">
                    {t("eyebrow")}
                  </p>
                  <h3 className="mt-2 text-lg font-black tracking-tight text-white md:text-xl">
                    {t("title")}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-400 md:text-sm">
                    {t("description")}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleClose}
                  className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] p-2 text-white transition-colors hover:bg-white/10"
                  aria-label={t("closeLabel")}
                >
                  <XIcon size={18} />
                </button>
              </div>

              <ContactForm variant="compact" onRequestFullForm={handleRequestFullForm} />
            </m.div>
          </>
        ) : null}
      </AnimatePresence>

      {!isOpen ? (
        <button
          type="button"
          onClick={handleOpen}
          aria-expanded={isOpen}
          aria-controls="floating-contact-panel"
          aria-label={t("button")}
          onMouseEnter={() => setIsExpanded(true)}
          onFocus={() => setIsExpanded(true)}
          onMouseLeave={() => {
            if (!isOpen) setIsExpanded(false);
          }}
          onBlur={() => {
            if (!isOpen) setIsExpanded(false);
          }}
          className={`pointer-events-auto inline-flex items-center overflow-hidden rounded-full border border-hunter-green/20 bg-near-black/90 text-white shadow-[0_20px_60px_-35px_rgba(0,230,162,0.8)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-hunter-orange/40 hover:bg-near-black ${
            isExpanded ? "gap-2 px-3 py-3 md:gap-3 md:px-5 md:py-4" : "gap-0 p-3 md:p-3.5"
          }`}
        >
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-hunter-green text-near-black md:size-10">
            <ChatCircleDotsIcon size={18} weight="bold" />
          </span>
          <span
            className={`whitespace-nowrap text-xs font-black uppercase tracking-[0.14em] transition-all duration-300 md:text-sm md:tracking-[0.18em] ${
              isExpanded ? "max-w-[12rem] opacity-100" : "max-w-0 opacity-0"
            }`}
            aria-hidden={!isExpanded}
          >
            {t("button")}
          </span>
        </button>
      ) : null}
    </div>
  );
}
