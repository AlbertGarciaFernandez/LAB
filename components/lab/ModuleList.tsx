import Link from "next/link";
import LabCard from "@/components/lab/LabCard";
import ProgressBadge from "@/components/lab/ProgressBadge";
import type { LabModule } from "@/content/lab";

type ModuleListProps = {
  locale: string;
  systemSlug: string;
  modules: LabModule[];
};

export default function ModuleList({ locale, systemSlug, modules }: ModuleListProps) {
  return (
    <div className="space-y-4">
      {modules.map((module) => {
        const nextLesson = module.lessons[0];

        return (
          <LabCard
            key={module.slug}
            className="bg-[linear-gradient(180deg,#ffffff_0%,#fbf8f2_100%)]"
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-black">
                    {module.title}
                  </h3>
                  <ProgressBadge value={module.progressPercent} label="mapped" />
                </div>
                <p className="text-black/62 mt-3 text-sm leading-6">{module.summary}</p>
                <p className="text-black/38 mt-4 text-xs font-semibold uppercase tracking-[0.22em]">
                  {module.lessons.length} lesson{module.lessons.length === 1 ? "" : "s"}
                </p>
              </div>

              {nextLesson ? (
                <Link
                  href={`/${locale}/lab/app/system/${systemSlug}/lesson/${nextLesson.slug}`}
                  className="inline-flex items-center text-sm font-medium text-black transition-opacity hover:opacity-70"
                >
                  Open lesson
                </Link>
              ) : null}
            </div>
          </LabCard>
        );
      })}
    </div>
  );
}
