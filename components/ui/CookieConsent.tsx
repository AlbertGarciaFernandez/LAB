"use client";

import { useEffect, useRef, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { CookieIcon, XIcon } from "@phosphor-icons/react/dist/ssr";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay for better UX on initial load
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (!isVisible) {
      restoreFocusRef.current?.focus();
      restoreFocusRef.current = null;
      return;
    }

    restoreFocusRef.current = document.activeElement as HTMLElement | null;

    const root = containerRef.current;
    if (!root) return;

    const focusable = root.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        handleDecline();
      }

      if (event.key !== "Tab" || !first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
        return;
      }
      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isVisible]);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    window.dispatchEvent(new Event("cookie-consent-update"));
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <m.div
          ref={containerRef}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-consent-title"
          className="fixed bottom-6 left-6 z-[100] max-w-[calc(100vw-3rem)] md:max-w-md"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-near-black/80 p-6 shadow-2xl backdrop-blur-xl">
            {/* Enchanted background glow */}
            <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    <CookieIcon aria-hidden="true" className="h-5 w-5 text-purple-400" />
                  </div>
                  <h3
                    id="cookie-consent-title"
                    className="font-display text-lg font-bold text-white"
                  >
                    Cookies & Magic
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={handleDecline}
                  className="rounded-full p-1 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <XIcon aria-hidden="true" className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </button>
              </div>

              <p className="text-sm leading-relaxed text-gray-300">
                We use cookies to enhance your experience and analyze our traffic. Just enough to
                make the magic work, no creepy tracking.
              </p>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleAccept}
                  className="flex-1 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-black shadow-lg shadow-white/10 transition-colors hover:bg-gray-200"
                >
                  Accept All
                </button>
                <button
                  type="button"
                  onClick={handleDecline}
                  className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  Necessary Only
                </button>
              </div>
            </div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
