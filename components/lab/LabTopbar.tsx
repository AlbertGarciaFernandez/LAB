import ProgressBadge from "@/components/lab/ProgressBadge";
import { getLabData } from "@/content/lab";

type LabTopbarProps = {
  locale: string;
};

export default function LabTopbar({ locale }: LabTopbarProps) {
  const data = getLabData(locale);
  const averageProgress = Math.round(
    data.systems.reduce((total, system) => total + system.progressPercent, 0) / data.systems.length,
  );

  return (
    <header className="flex flex-col gap-4 rounded-[30px] border border-black/8 bg-white/88 px-5 py-4 shadow-[0_18px_60px_rgba(17,24,39,0.08)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">Client portal</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-black">Welcome back, {data.user.name}</h1>
        <p className="mt-2 text-sm leading-6 text-black/60">{data.user.overallProgressSummary}</p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <ProgressBadge value={averageProgress} label="overall progress" />
        <div className="rounded-full border border-black/8 bg-[#faf7f2] px-4 py-2 text-sm text-black/68">
          Active system:{" "}
          <span className="font-medium text-black">
            {data.systems.find((system) => system.slug === data.user.activeSystemSlug)?.title ?? data.user.activeSystemSlug}
          </span>
        </div>
        <div className="rounded-full border border-black/8 bg-white px-4 py-2 text-sm text-black/68">
          Signed in as <span className="font-medium text-black">{data.user.role}</span>
        </div>
      </div>
    </header>
  );
}
