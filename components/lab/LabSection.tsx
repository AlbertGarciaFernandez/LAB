import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

type LabSectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export default function LabSection({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  contentClassName,
}: LabSectionProps) {
  return (
    <section id={id} className={cn("px-6 py-16 sm:py-20 lg:px-8", className)}>
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/45">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-black sm:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 text-base leading-7 text-black/65 sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        <div className={cn("mt-10", contentClassName)}>{children}</div>
      </div>
    </section>
  );
}
