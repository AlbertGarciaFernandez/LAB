import LabButton from "@/components/lab/LabButton";
import LabCard from "@/components/lab/LabCard";
import LabSection from "@/components/lab/LabSection";
import SystemCard from "@/components/lab/SystemCard";
import { getLabData } from "@/content/lab";

type LabLandingSectionProps = {
  locale: string;
};

export function LabHeroSection({ locale }: LabLandingSectionProps) {
  const data = getLabData(locale);

  return (
    <section className="px-6 pb-14 pt-16 sm:pb-16 sm:pt-20 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/45">
            Paid Social Landing Surface
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-black sm:text-7xl">
            Product systems for teams that need a clearer path from traffic to launch.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">
            CodeHunter Lab packages the product strategy, operating structure, and system map
            into one premium learning surface so teams can move from interest to execution
            without losing momentum.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LabButton href={`/${locale}/lab#systems`}>View Systems</LabButton>
            <LabButton href={`/${locale}/lab#preview`} variant="secondary">
              Preview Platform
            </LabButton>
          </div>
        </div>

        <LabCard className="bg-[linear-gradient(180deg,#ffffff_0%,#f6f6f3_100%)]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/45">
            Current Lab Snapshot
          </p>
          <p className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-black">
            {data.user.overallProgressSummary}
          </p>
          <div className="mt-8 space-y-4">
            {data.systems.map((system) => (
              <div key={system.slug} className="rounded-2xl border border-black/8 bg-white/80 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45">
                      {system.label}
                    </p>
                    <p className="mt-2 text-base font-medium text-black">{system.title}</p>
                  </div>
                  <span className="text-sm text-black/55">{system.progressPercent}%</span>
                </div>
              </div>
            ))}
          </div>
        </LabCard>
      </div>
    </section>
  );
}

export function LabProblemSection() {
  return (
    <LabSection
      id="problem"
      eyebrow="The Problem"
      title="Most teams do not need more ideas. They need a product surface that organizes what matters."
      description="Paid social traffic drops into disconnected promises far too often. Lab is built to tighten the handoff between positioning, systems, and what a buyer can actually preview next."
      className="border-t border-black/8"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {[
          "Traffic lands on generic consulting pages instead of a product narrative.",
          "Internal knowledge is scattered across notes, docs, and unfinished workflows.",
          "Buyers struggle to see how strategy becomes an operational system they can adopt.",
        ].map((item) => (
          <LabCard key={item}>
            <p className="text-lg leading-7 text-black/72">{item}</p>
          </LabCard>
        ))}
      </div>
    </LabSection>
  );
}

export function LabSolutionSection() {
  return (
    <LabSection
      eyebrow="The Solution"
      title="Lab presents the platform as a product, not a vague services menu."
      description="The landing page introduces the structure, shows the systems, and makes the next step obvious. The result is a clearer story for premium buyers and a reusable frame for future public surfaces."
      className="bg-[#faf9f6]"
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <LabCard>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-black/45">
            Product Framing
          </p>
          <p className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-black">
            One page to understand the operating model, the systems, and the next action.
          </p>
          <p className="mt-4 text-base leading-7 text-black/65">
            The public surface stays intentionally sparse: strong hierarchy, high-contrast
            typography, and selective proof instead of crowded claims.
          </p>
        </LabCard>
        <LabCard>
          <div className="space-y-5">
            {[
              "Dedicated product navigation from day one",
              "Clear CTA hierarchy for paid acquisition",
              "Reusable section and card primitives for future growth",
            ].map((item) => (
              <div key={item} className="flex gap-3 text-sm leading-6 text-black/68">
                <span className="mt-2 h-2 w-2 rounded-full bg-black" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </LabCard>
      </div>
    </LabSection>
  );
}

export function LabHowItWorksSection() {
  return (
    <LabSection
      id="how-it-works"
      eyebrow="How It Works"
      title="A simple path from first click to system-level understanding."
      description="Each section carries a specific job: frame the problem, explain the product logic, surface the systems, and create a confident next click."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            step: "01",
            title: "Frame the outcome",
            body: "Lead with the promise of a guided platform instead of open-ended service exploration.",
          },
          {
            step: "02",
            title: "Show the systems",
            body: "Use structured summaries from the Lab data source so the public surface reflects the product model.",
          },
          {
            step: "03",
            title: "Drive the next action",
            body: "Keep the CTA hierarchy stable: View Systems first, Preview Platform second.",
          },
        ].map((item) => (
          <LabCard key={item.step}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/45">
              Step {item.step}
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-black">
              {item.title}
            </h3>
            <p className="mt-4 text-sm leading-6 text-black/65">{item.body}</p>
          </LabCard>
        ))}
      </div>
    </LabSection>
  );
}

export function LabSystemsSection({ locale }: LabLandingSectionProps) {
  const data = getLabData(locale);

  return (
    <LabSection
      id="systems"
      eyebrow="Systems"
      title="The first three Lab systems are already mapped."
      description="These summaries come directly from the Lab content contract so the marketing surface stays aligned with the product structure."
      className="bg-[#faf9f6]"
      contentClassName="grid gap-6 lg:grid-cols-3"
    >
      {data.systems.map((system) => (
        <SystemCard key={system.slug} locale={locale} system={system} />
      ))}
    </LabSection>
  );
}

export function LabDifferentiationSection() {
  return (
    <LabSection
      id="differentiation"
      eyebrow="Why It Converts"
      title="Clean enough for premium traffic. Structured enough to feel credible."
      description="Lab differentiates itself by showing a real operating model instead of relying on broad AI agency language."
    >
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <LabCard>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/45">
            What buyers feel
          </p>
          <p className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-black">
            The product feels intentional, premium, and already in motion.
          </p>
          <p className="mt-4 text-base leading-7 text-black/65">
            That matters for paid social traffic, where signal is weak and the first page has
            to establish taste, confidence, and direction very quickly.
          </p>
        </LabCard>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            "White-first surface with restrained contrast",
            "Dedicated Lab navigation rather than the broad site menu",
            "CTA hierarchy that matches the product journey",
            "Reusable components for future campaign pages",
          ].map((item) => (
            <LabCard key={item} className="flex items-center">
              <p className="text-base leading-7 text-black/72">{item}</p>
            </LabCard>
          ))}
        </div>
      </div>
    </LabSection>
  );
}

export function LabCtaSection({ locale }: LabLandingSectionProps) {
  return (
    <LabSection
      id="preview"
      eyebrow="Next Step"
      title="Explore the systems now, then preview the broader platform."
      description="The landing stack is designed to keep the action clear without overwhelming the page."
      className="border-t border-black/8"
    >
      <LabCard className="flex flex-col items-start justify-between gap-6 bg-black text-white sm:flex-row sm:items-center">
        <div className="max-w-2xl">
          <p className="text-3xl font-semibold tracking-[-0.04em]">
            Start with the system map, then move deeper once the product logic clicks.
          </p>
          <p className="mt-4 text-base leading-7 text-white/72">
            This keeps the first conversion lightweight while preserving a second path for
            visitors who want more context before committing.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:min-w-[220px]">
          <LabButton href={`/${locale}/lab#systems`} className="bg-white text-black hover:bg-white/90">
            View Systems
          </LabButton>
          <LabButton
            href={`/${locale}/lab#preview`}
            variant="secondary"
            className="border-white/15 bg-transparent text-white hover:border-white/30 hover:bg-white/10"
          >
            Preview Platform
          </LabButton>
        </div>
      </LabCard>
    </LabSection>
  );
}
