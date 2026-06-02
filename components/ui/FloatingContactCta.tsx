"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ChatCircleDotsIcon, XIcon } from "@phosphor-icons/react/dist/ssr";
import { useLocale, useTranslations } from "next-intl";
import { ContactForm } from "@/components/ui/ContactForm";

export default function FloatingContactCta() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations("FloatingContactCta");

  useEffect(() => {
    const syncWithHash = () => {
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
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
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

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-[95] flex max-w-[calc(100vw-3rem)] flex-col items-end gap-3 md:bottom-8 md:right-8 md:max-w-md">
      <AnimatePresence>
        {isOpen ? (
          <m.div
            id="floating-contact-panel"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="pointer-events-auto w-full overflow-hidden rounded-[2rem] border border-white/10 bg-near-black/95 p-4 shadow-[0_32px_100px_-45px_rgba(0,0,0,0.8)] backdrop-blur-xl md:w-[28rem]"
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-hunter-green">
                  {t("eyebrow")}
                </p>
                <h3 className="mt-2 text-xl font-black tracking-tight text-white">{t("title")}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{t("description")}</p>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-white/10 bg-white/[0.04] p-2 text-white transition-colors hover:bg-white/10"
                aria-label={t("closeLabel")}
              >
                <XIcon size={18} />
              </button>
            </div>

            <ContactForm variant="compact" onRequestFullForm={handleRequestFullForm} />
          </m.div>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="pointer-events-auto inline-flex items-center gap-3 rounded-full border border-hunter-green/20 bg-near-black/90 px-5 py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_20px_60px_-35px_rgba(0,230,162,0.8)] transition-all hover:-translate-y-0.5 hover:border-hunter-orange/40 hover:bg-near-black"
        aria-expanded={isOpen}
        aria-controls="floating-contact-panel"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-hunter-green text-near-black">
          <ChatCircleDotsIcon size={20} weight="bold" />
        </span>
        <span>{t("button")}</span>
      </button>
    </div>
  );
}
