"use client";

import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { ContactForm } from "@/components/ui/ContactForm";

interface ContactSectionProps {
  title?: ReactNode;
  description?: ReactNode;
  className?: string;
}

export default function ContactSection({
  title,
  description,
  className = "",
}: ContactSectionProps) {
  const t = useTranslations("Process");

  return (
    <div id="contact" className={`relative scroll-mt-32 ${className}`.trim()}>
      <div className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-hunter-green/20 bg-hunter-green/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-hunter-green">
          Book a Call
        </div>
        <h2 className="mb-8 text-5xl font-black uppercase tracking-tighter text-white md:text-7xl">
          {title ?? (
            <>
              {t("cta.title.text")}{" "}
              <span className="text-hunter-orange">{t("cta.title.highlight")}</span>
            </>
          )}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-gray-400">
          {description ?? (
            <>
              {t("cta.description.part1")}{" "}
              <span className="font-semibold text-white">{t("cta.description.highlight")}</span>{" "}
              {t("cta.description.part2")}
            </>
          )}
        </p>
      </div>

      <ContactForm variant="full" />
    </div>
  );
}
