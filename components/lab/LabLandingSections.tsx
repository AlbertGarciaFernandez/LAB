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
            {data.landing.hero.eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-black sm:text-7xl">
            {data.landing.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">
            {data.landing.hero.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LabButton href={`/${locale}/lab/app`}>{data.copy.ctaPrimary}</LabButton>
            <LabButton href={`/${locale}/lab/app`} variant="secondary">
              {data.copy.ctaSecondary}
            </LabButton>
          </div>
        </div>

        <LabCard className="bg-[linear-gradient(180deg,#ffffff_0%,#f6f6f3_100%)]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/45">
            {data.landing.snapshotLabel}
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

export function LabProblemSection({ locale }: LabLandingSectionProps) {
  const { landing } = getLabData(locale);

  return (
    <LabSection
      id="problem"
      eyebrow={landing.problem.eyebrow}
      title={landing.problem.title}
      description={landing.problem.description}
      className="border-t border-black/8"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {landing.problem.items.map((item) => (
          <LabCard key={item}>
            <p className="text-lg leading-7 text-black/72">{item}</p>
          </LabCard>
        ))}
      </div>
    </LabSection>
  );
}

export function LabSolutionSection({ locale }: LabLandingSectionProps) {
  const { landing } = getLabData(locale);

  return (
    <LabSection
      eyebrow={landing.solution.eyebrow}
      title={landing.solution.title}
      description={landing.solution.description}
      className="bg-[#faf9f6]"
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <LabCard>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-black/45">
            {landing.solution.framingEyebrow}
          </p>
          <p className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-black">
            {landing.solution.framingTitle}
          </p>
          <p className="mt-4 text-base leading-7 text-black/65">
            {landing.solution.framingDescription}
          </p>
        </LabCard>
        <LabCard>
          <div className="space-y-5">
            {landing.solution.benefits.map((item) => (
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

export function LabHowItWorksSection({ locale }: LabLandingSectionProps) {
  const { landing } = getLabData(locale);

  return (
    <LabSection
      id="how-it-works"
      eyebrow={landing.howItWorks.eyebrow}
      title={landing.howItWorks.title}
      description={landing.howItWorks.description}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {landing.howItWorks.steps.map((item) => (
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
      eyebrow={data.landing.systems.eyebrow}
      title={data.landing.systems.title}
      description={data.landing.systems.description}
      className="bg-[#faf9f6]"
      contentClassName="grid gap-6 lg:grid-cols-3"
    >
      {data.systems.map((system) => (
        <SystemCard key={system.slug} locale={locale} system={system} />
      ))}
    </LabSection>
  );
}

export function LabDifferentiationSection({ locale }: LabLandingSectionProps) {
  const { landing } = getLabData(locale);

  return (
    <LabSection
      id="differentiation"
      eyebrow={landing.differentiation.eyebrow}
      title={landing.differentiation.title}
      description={landing.differentiation.description}
    >
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <LabCard>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/45">
            {landing.differentiation.cardEyebrow}
          </p>
          <p className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-black">
            {landing.differentiation.cardTitle}
          </p>
          <p className="mt-4 text-base leading-7 text-black/65">
            {landing.differentiation.cardDescription}
          </p>
        </LabCard>
        <div className="grid gap-6 sm:grid-cols-2">
          {landing.differentiation.points.map((item) => (
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
  const data = getLabData(locale);

  return (
    <LabSection
      id="preview"
      eyebrow={data.landing.cta.eyebrow}
      title={data.landing.cta.title}
      description={data.landing.cta.description}
      className="border-t border-black/8"
    >
      <LabCard className="flex flex-col items-start justify-between gap-6 bg-black text-white sm:flex-row sm:items-center">
        <div className="max-w-2xl">
          <p className="text-3xl font-semibold tracking-[-0.04em]">
            {data.landing.cta.cardTitle}
          </p>
          <p className="mt-4 text-base leading-7 text-white/72">
            {data.landing.cta.cardDescription}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:min-w-[220px]">
          <LabButton href={`/${locale}/lab/app`} className="bg-white text-black hover:bg-white/90">
            {data.copy.ctaPrimary}
          </LabButton>
          <LabButton
            href={`/${locale}/lab/app`}
            variant="secondary"
            className="border-white/15 bg-transparent text-white hover:border-white/30 hover:bg-white/10"
          >
            {data.copy.ctaSecondary}
          </LabButton>
        </div>
      </LabCard>
    </LabSection>
  );
}
