import Header from "@/components/layout/Header";
import ContactSection from "@/components/sections/ContactSection";
import BreadcrumbSchema from "@/components/ui/BreadcrumbSchema";
import { Link } from "@/navigation";
import type { ReactNode } from "react";

const baseUrl = "https://www.codehunterlab.com";

function getNeutralContactCopy(locale: string) {
  const isSpanish = locale === "es";
  const isDutch = locale === "nl";

  return {
    title: isSpanish
      ? "¿Listo para construir lo que viene?"
      : isDutch
        ? "Klaar om te bouwen wat nu nodig is?"
        : "Ready to Build What Comes Next?",
    description: isSpanish
      ? "Reserva una llamada de 30 minutos. Entenderemos qué necesitas, identificaremos el camino más rápido y te diremos qué merece la pena construir después."
      : isDutch
        ? "Plan een gesprek van 30 minuten. We begrijpen wat je nodig hebt, bepalen de snelste route vooruit en vertellen wat het waard is om daarna te bouwen."
        : "Book a 30-minute call. We'll understand what you need, identify the fastest path forward, and tell you what is worth building next.",
  };
}

export type StudioServicePageCopy = {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  outcomesTitle: string;
  outcomes: string[];
  processTitle: string;
  process: Array<{ title: string; desc: string }>;
  proof: Array<{ value: string; label: string }>;
  related: Array<{ label: string; href: string }>;
};

type StudioServicePageProps = {
  locale: string;
  path: string;
  breadcrumbName: string;
  copy: StudioServicePageCopy;
};

export function StudioServiceShell({
  locale,
  path,
  breadcrumbName,
  children,
}: {
  locale: string;
  path: string;
  breadcrumbName: string;
  children: ReactNode;
}) {
  const contactCopy = getNeutralContactCopy(locale);

  return (
    <div className="min-h-screen overflow-hidden bg-near-black text-white">
      <Header />
      <main className="overflow-hidden pt-24">
        <BreadcrumbSchema
          items={[
            {
              name: locale === "es" ? "Inicio" : locale === "nl" ? "Start" : "Home",
              url: `${baseUrl}/${locale}`,
            },
            { name: breadcrumbName, url: `${baseUrl}/${locale}${path}` },
          ]}
        />
        {children}
        <ContactSection title={contactCopy.title} description={contactCopy.description} />
      </main>
    </div>
  );
}

export default function StudioServicePage({
  locale,
  path,
  breadcrumbName,
  copy,
}: StudioServicePageProps) {
  const contactCopy = getNeutralContactCopy(locale);

  return (
    <div className="min-h-screen overflow-hidden bg-near-black text-white">
      <Header />
      <main className="overflow-hidden pt-24">
        <BreadcrumbSchema
          items={[
            {
              name: locale === "es" ? "Inicio" : locale === "nl" ? "Start" : "Home",
              url: `${baseUrl}/${locale}`,
            },
            { name: breadcrumbName, url: `${baseUrl}/${locale}${path}` },
          ]}
        />

        <section className="relative px-6 py-20 lg:px-8 lg:py-28">
          <div className="pointer-events-none absolute left-1/2 top-20 h-[460px] w-[720px] -translate-x-1/2 rounded-full bg-hunter-green/[0.06] blur-[130px]" />
          <div className="pointer-events-none absolute -right-28 bottom-0 h-[360px] w-[520px] rounded-full bg-hunter-orange/[0.06] blur-[120px]" />

          <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-hunter-green/20 bg-hunter-green/10 px-4 py-1 text-[10px] font-black uppercase tracking-[0.24em] text-hunter-green">
                {copy.eyebrow}
              </p>
              <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-tighter md:text-7xl">
                {copy.title} <span className="text-hunter-orange">{copy.accent}</span>
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
                {copy.description}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-hunter-green px-8 py-4 text-sm font-black uppercase tracking-widest text-near-black transition-colors hover:bg-white"
                >
                  {copy.primaryCta}
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-8 py-4 text-sm font-bold text-white transition-colors hover:border-hunter-orange/40 hover:text-hunter-orange"
                >
                  {copy.secondaryCta}
                </Link>
              </div>
            </div>

            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/40 backdrop-blur-md">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-hunter-green/[0.08] via-transparent to-hunter-orange/[0.08]" />
              <div className="relative grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {copy.proof.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-near-black/80 p-5"
                  >
                    <div className="font-mono text-3xl font-black tracking-tighter text-hunter-green">
                      {item.value}
                    </div>
                    <p className="mt-2 text-sm font-bold leading-snug text-white">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-surface-dark/30 px-6 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-hunter-orange">
                Outcomes
              </p>
              <h2 className="mt-4 text-4xl font-black leading-none tracking-tighter md:text-5xl">
                {copy.outcomesTitle}
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {copy.outcomes.map((outcome) => (
                <div key={outcome} className="rounded-3xl border border-white/10 bg-near-black p-6">
                  <div className="mb-5 h-1 w-10 rounded-full bg-hunter-green" />
                  <p className="text-sm leading-relaxed text-gray-300">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl font-black leading-none tracking-tighter md:text-5xl">
              {copy.processTitle}
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {copy.process.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
                >
                  <p className="font-mono text-sm font-black text-hunter-orange">0{index + 1}</p>
                  <h3 className="mt-5 text-2xl font-black tracking-tight text-white">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-gray-400">{step.desc}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {copy.related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/70 transition-colors hover:border-hunter-green/50 hover:text-hunter-green"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ContactSection title={contactCopy.title} description={contactCopy.description} />
      </main>
    </div>
  );
}
