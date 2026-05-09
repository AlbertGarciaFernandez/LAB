import Link from "next/link";
import type { LabSystem } from "@/content/lab";
import LabCard from "@/components/lab/LabCard";

type SystemCardProps = {
  locale: string;
  system: LabSystem;
};

export default function SystemCard({ locale, system }: SystemCardProps) {
  return (
    <LabCard className="flex h-full flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/45">
              {system.label}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-black">
              {system.title}
            </h3>
          </div>
          <span className="rounded-full bg-black/[0.04] px-3 py-1 text-xs font-medium text-black/60">
            {system.progressPercent}% mapped
          </span>
        </div>

        <p className="mt-4 text-sm leading-6 text-black/65">{system.shortDescription}</p>
        <p className="mt-5 text-sm leading-6 text-black/55">{system.overview}</p>

        <dl className="border-black/8 mt-6 grid grid-cols-2 gap-4 border-t pt-6 text-sm">
          <div>
            <dt className="text-black/45">Modules</dt>
            <dd className="mt-1 text-lg font-semibold text-black">{system.modules.length}</dd>
          </div>
          <div>
            <dt className="text-black/45">Lessons</dt>
            <dd className="mt-1 text-lg font-semibold text-black">
              {system.modules.reduce((count, module) => count + module.lessons.length, 0)}
            </dd>
          </div>
        </dl>
      </div>

      <Link
        href={`/${locale}/lab/app/system/${system.slug}`}
        className="mt-8 inline-flex items-center text-sm font-medium text-black transition-opacity hover:opacity-70"
      >
        Explore system
      </Link>
    </LabCard>
  );
}
