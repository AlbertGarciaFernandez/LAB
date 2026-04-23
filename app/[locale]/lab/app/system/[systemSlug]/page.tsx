import { notFound } from "next/navigation";
import LabButton from "@/components/lab/LabButton";
import LabCard from "@/components/lab/LabCard";
import ModuleList from "@/components/lab/ModuleList";
import ProgressBadge from "@/components/lab/ProgressBadge";
import { getSystemBySlug } from "@/content/lab";

export default function LabSystemPage({
  params,
}: {
  params: { locale: string; systemSlug: string };
}) {
  const system = getSystemBySlug(params.systemSlug, params.locale);

  if (!system) {
    notFound();
  }

  const nextLesson = system.modules.flatMap((module) => module.lessons)[0];

  return (
    <div className="space-y-6">
      <section className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <LabCard className="bg-[linear-gradient(135deg,#fffefb_0%,#f4efe6_100%)]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">{system.label}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-black">{system.title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-black/62">{system.shortDescription}</p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-black/58">{system.overview}</p>
        </LabCard>

        <LabCard>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">Progress</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <ProgressBadge value={system.progressPercent} label="complete" />
            <span className="rounded-full border border-black/8 bg-[#faf7f2] px-4 py-2 text-sm text-black/62">
              {system.modules.length} module{system.modules.length === 1 ? "" : "s"}
            </span>
          </div>
          <p className="mt-5 text-sm leading-6 text-black/60">
            This view is meant to help the team locate the next concrete implementation step, not turn the system into
            a generic course outline.
          </p>
        </LabCard>
      </section>

      <section>
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">Modules</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-black">The work is broken into focused modules.</h2>
        </div>
        <ModuleList locale={params.locale} systemSlug={system.slug} modules={system.modules} />
      </section>

      {nextLesson ? (
        <LabCard className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">Next move</p>
            <p className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-black">{nextLesson.title}</p>
            <p className="mt-2 text-sm leading-6 text-black/60">{nextLesson.problem}</p>
          </div>
          <LabButton href={`/${params.locale}/lab/app/system/${system.slug}/lesson/${nextLesson.slug}`}>
            Continue to next lesson
          </LabButton>
        </LabCard>
      ) : null}
    </div>
  );
}
