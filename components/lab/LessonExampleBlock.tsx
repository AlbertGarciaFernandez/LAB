import LabCard from "@/components/lab/LabCard";

type LessonExampleBlockProps = {
  title: string;
  summary: string;
  bullets: string[];
};

export default function LessonExampleBlock({ title, summary, bullets }: LessonExampleBlockProps) {
  return (
    <LabCard className="bg-[linear-gradient(180deg,#f8f4eb_0%,#fffdfa_100%)]">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">Example block</p>
      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-black">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-black/62">{summary}</p>
      <ul className="mt-5 space-y-3">
        {bullets.map((bullet) => (
          <li key={bullet} className="rounded-[20px] border border-black/8 bg-white/75 px-4 py-3 text-sm text-black/68">
            {bullet}
          </li>
        ))}
      </ul>
    </LabCard>
  );
}
