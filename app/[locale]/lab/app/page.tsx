// NOTE: This Lab workspace page is intentionally a mockup for marketing/demo purposes.
// Auth state, progress, and user data are static placeholders from content/lab.ts.
// See content/lab.ts for full context.

import Link from "next/link";
import LabCard from "@/components/lab/LabCard";
import ProgressBadge from "@/components/lab/ProgressBadge";
import { getLabData } from "@/content/lab";

export default function LabWorkspaceHome({ params: { locale } }: { params: { locale: string } }) {
  const data = getLabData(locale);
  const activeSystem =
    data.systems.find((system) => system.slug === data.user.activeSystemSlug) ?? data.systems[0];
  const activeLesson = activeSystem.modules[0]?.lessons[0];

  return (
    <div className="space-y-6">
      <section className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <LabCard className="bg-[linear-gradient(135deg,#fffefb_0%,#f4efe6_100%)]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">
            Workspace home
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.05em] text-black">
            A calmer place to review the systems, keep context, and move the next decision forward.
          </h2>
          <p className="text-black/62 mt-4 max-w-2xl text-base leading-7">
            This mocked workspace gives Task 2’s CTAs a real destination and frames the Lab like a
            client portal: clear entry points, clear progress, and one obvious next move.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <ProgressBadge value={activeSystem.progressPercent} label="active system" />
            <span className="border-black/8 rounded-full border bg-white px-4 py-2 text-sm text-black/65">
              {activeSystem.modules.length} module{activeSystem.modules.length === 1 ? "" : "s"}{" "}
              mapped
            </span>
            <span className="border-black/8 rounded-full border bg-white px-4 py-2 text-sm text-black/65">
              {data.resources.length} resources ready
            </span>
          </div>
        </LabCard>

        <LabCard>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">
            Welcome state
          </p>
          <p className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-black">
            {data.user.overallProgressSummary}
          </p>
          <p className="text-black/62 mt-4 text-sm leading-6">
            Use this surface to orient the team, review the current system, and keep implementation
            choices tied to the product structure.
          </p>
          <div className="border-black/8 mt-6 rounded-[24px] border bg-[#faf7f2] p-4">
            <p className="text-sm font-medium text-black">Current focus</p>
            <p className="mt-2 text-lg font-semibold tracking-[-0.02em] text-black">
              {activeSystem.title}
            </p>
            <p className="mt-2 text-sm leading-6 text-black/60">{activeSystem.overview}</p>
          </div>
        </LabCard>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">
              Systems overview
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-black">
              Three systems, one clear map
            </h2>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {data.systems.map((system) => (
            <LabCard key={system.slug} className="flex h-full flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-black/58 text-sm font-medium">{system.label}</p>
                  <ProgressBadge value={system.progressPercent} label="mapped" />
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-black">
                  {system.title}
                </h3>
                <p className="text-black/62 mt-4 text-sm leading-6">{system.shortDescription}</p>
                <p className="text-black/54 mt-4 text-sm leading-6">{system.overview}</p>
              </div>

              <Link
                href={`/${locale}/lab/app/system/${system.slug}`}
                className="mt-8 inline-flex items-center text-sm font-medium text-black transition-opacity hover:opacity-70"
              >
                Open system
              </Link>
            </LabCard>
          ))}
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1fr_0.9fr]">
        <LabCard>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">
            Next recommended step
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-black">
            Continue with {activeLesson?.title ?? "the active lesson"} in {activeSystem.title}.
          </h2>
          <p className="text-black/62 mt-4 text-sm leading-6">
            {activeLesson?.problem ??
              "Start with the active system and confirm the next concrete outcome."}
          </p>
          <ol className="mt-6 space-y-3">
            {(activeLesson?.steps ?? []).slice(0, 3).map((step, index) => (
              <li
                key={step.title}
                className="border-black/8 rounded-[22px] border bg-[#faf7f2] p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/40">
                  Step {index + 1}
                </p>
                <p className="mt-2 text-base font-semibold text-black">{step.title}</p>
                <p className="mt-2 text-sm leading-6 text-black/60">{step.body}</p>
              </li>
            ))}
          </ol>
        </LabCard>

        <div id="resources">
          <LabCard className="h-full">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">
              Resources
            </p>
            <div className="mt-4 space-y-3">
              {data.resources.slice(0, 3).map((resource) => (
                <div
                  key={resource.slug}
                  className="border-black/8 rounded-[22px] border bg-white p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-medium text-black">{resource.title}</p>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-black/40">
                      {resource.category}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-black/60">{resource.description}</p>
                </div>
              ))}
            </div>
            <div
              id="settings"
              className="mt-6 rounded-[24px] border border-dashed border-black/10 bg-[#faf7f2] p-4"
            >
              <p className="text-sm font-medium text-black">Settings</p>
              <p className="mt-2 text-sm leading-6 text-black/60">
                Mocked auth state is intentional for this route. Identity and progress are present
                so the workspace shell feels real without introducing a full account system yet.
              </p>
            </div>
          </LabCard>
        </div>
      </section>
    </div>
  );
}
