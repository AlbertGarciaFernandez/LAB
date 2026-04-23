import { notFound } from "next/navigation";
import LessonContent from "@/components/lab/LessonContent";
import LessonExampleBlock from "@/components/lab/LessonExampleBlock";
import LabCard from "@/components/lab/LabCard";
import { getLessonBySlug, getSystemBySlug } from "@/content/lab";

export default function LabLessonPage({
  params,
}: {
  params: { locale: string; systemSlug: string; lessonSlug: string };
}) {
  const system = getSystemBySlug(params.systemSlug, params.locale);
  const lesson = getLessonBySlug(params.systemSlug, params.lessonSlug, params.locale);

  if (!system || !lesson) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <LabCard className="bg-[linear-gradient(135deg,#fffefb_0%,#f4efe6_100%)]">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">{system.title}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-black">{lesson.title}</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-black/60">
          Downloadable resources, examples, and step-by-step guidance stay close to the implementation details for this
          lesson.
        </p>
      </LabCard>

      <LessonContent lesson={lesson} ExampleBlockComponent={LessonExampleBlock} />
    </div>
  );
}
