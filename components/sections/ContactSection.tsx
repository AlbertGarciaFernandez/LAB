"use client";

import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { ContactForm } from "@/components/ui/ContactForm";

interface ContactSectionProps {
  badge?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  className?: string;
}

export default function ContactSection({
  badge,
  title,
  description,
  className = "",
}: ContactSectionProps) {
  const t = useTranslations("Process");

  return (
    <section id="contact" className={`relative scroll-mt-32 ${className}`.trim()}>
      <div className="pointer-events-none absolute -left-8 top-10 w-full overflow-hidden opacity-[0.05] md:-left-12">
        <h2 className="whitespace-nowrap text-[12rem] font-black leading-none text-white md:text-[20rem]">
          {t("contactBgText")}
        </h2>
      </div>

      <div className="pointer-events-none absolute -right-4 bottom-4 overflow-hidden opacity-[0.05] md:-right-8 md:bottom-6">
        <h2 className="whitespace-nowrap text-[12rem] font-black leading-none text-white md:text-[20rem]">
          {t("contactBgNumber")}
        </h2>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-hunter-green/20 bg-hunter-green/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-hunter-green">
            {badge ?? t("contactBadge")}
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
    </section>
  );
}
