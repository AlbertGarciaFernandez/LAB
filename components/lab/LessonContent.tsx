import type { ComponentType } from "react";
import LabCard from "@/components/lab/LabCard";
import type { LabLesson } from "@/content/lab";
import LessonExampleBlock from "@/components/lab/LessonExampleBlock";

type LessonExampleBlockComponent = ComponentType<{
  title: string;
  summary: string;
  bullets: string[];
}>;

type LessonContentProps = {
  lesson: LabLesson;
  ExampleBlockComponent?: LessonExampleBlockComponent;
};

export default function LessonContent({
  lesson,
  ExampleBlockComponent = LessonExampleBlock,
}: LessonContentProps) {
  return (
    <div className="space-y-6">
      <LabCard>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">Problem</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-black">
          {lesson.problem}
        </h2>
      </LabCard>

      <LabCard>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">
          Explanation
        </p>
        <div className="text-black/66 mt-4 space-y-4 text-sm leading-7">
          {lesson.explanation.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </LabCard>

      <LabCard>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">
          Step-by-step
        </p>
        <ol className="mt-4 space-y-3">
          {lesson.steps.map((step, index) => (
            <li key={step.title} className="border-black/8 rounded-[22px] border bg-[#faf7f2] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/40">
                Step {index + 1}
              </p>
              <p className="mt-2 text-base font-semibold text-black">{step.title}</p>
              <p className="text-black/62 mt-2 text-sm leading-6">{step.body}</p>
            </li>
          ))}
        </ol>
      </LabCard>

      <ExampleBlockComponent
        title={lesson.example.title}
        summary={lesson.example.summary}
        bullets={lesson.example.bullets}
      />

      <LabCard>
        <h3 className="text-xl font-semibold tracking-[-0.03em] text-black">
          Downloadable resources
        </h3>
        <p className="mt-2 text-sm leading-6 text-black/60">
          These placeholders keep the lesson implementation-oriented and point to the assets that
          support execution.
        </p>
        <div className="mt-5 grid gap-3">
          {lesson.downloads.map((download) => (
            <div
              key={download}
              className="border-black/8 text-black/68 rounded-[22px] border bg-[#faf7f2] px-4 py-4 text-sm"
            >
              <p className="font-medium text-black">{download}</p>
              <p className="text-black/56 mt-1 text-sm">Supporting asset for {lesson.title}.</p>
            </div>
          ))}
        </div>
      </LabCard>
    </div>
  );
}
