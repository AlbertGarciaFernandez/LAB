import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import BreadcrumbSchema from "@/components/ui/BreadcrumbSchema";
import { createPageMetadata } from "@/utils/metadata";

const baseUrl = "https://www.codehunterlab.com";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isSpanish = params.locale === "es";

  const title = isSpanish
    ? "Sobre Albert Garcia | CodeHunter Lab"
    : "About Albert Garcia | CodeHunter Lab";
  const description = isSpanish
    ? "Conoce a Albert Garcia, fundador de CodeHunter Lab en Leiden, Países Bajos. Consultoría AI, automatización y entrega de productos para Europa y clientes internacionales."
    : "Meet Albert Garcia, founder of CodeHunter Lab in Leiden, Netherlands. Engineering-first AI consulting, automation, and product delivery for Europe and international clients.";
  return createPageMetadata({
    locale: params.locale,
    path: "/about",
    title,
    description,
    type: "profile",
    keywords: ["Albert Garcia", "CodeHunter Lab", "AI automation consultant Netherlands"],
  });
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  const isSpanish = params.locale === "es";

  const strengths = [
    "AI automation systems that connect to real business workflows",
    "n8n migrations and operational workflow architecture",
    "Next.js and React product architecture for long-term maintainability",
    "Founder-level technical thinking with hands-on delivery",
  ];

  const workingStyle = [
    "Start with the bottleneck that has the clearest ROI.",
    "Scope delivery around real systems, not sandbox demos.",
    "Keep architecture understandable so teams can own it after handover.",
    "Stay close to business outcomes instead of hiding behind jargon.",
  ];

  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: isSpanish ? "Sobre Albert Garcia" : "About Albert Garcia",
    url: `${baseUrl}/${params.locale}/about`,
    description: isSpanish
      ? "Sobre Albert Garcia, fundador de CodeHunter Lab en Leiden, Países Bajos."
      : "About Albert Garcia, founder of CodeHunter Lab in Leiden, Netherlands.",
    mainEntity: {
      "@type": "Person",
      name: "Albert Garcia",
      jobTitle: isSpanish ? "Fundador" : "Founder",
      url: "https://www.linkedin.com/in/albertgarciafernandez/",
      worksFor: {
        "@type": "Organization",
        name: "CodeHunter Lab",
        url: baseUrl,
      },
      knowsAbout: [
        "AI automation",
        "AI consulting",
        "n8n workflows",
        "Next.js",
        "React",
        "system integration",
      ],
    },
  };

  return (
    <div className="min-h-screen bg-near-black text-white">
      <Header />
      <main className="mx-auto max-w-6xl px-6 pb-24 pt-32 lg:px-8">
        <BreadcrumbSchema
          items={[
            { name: isSpanish ? "Inicio" : "Home", url: `${baseUrl}/${params.locale}` },
            { name: isSpanish ? "About" : "About", url: `${baseUrl}/${params.locale}/about` },
          ]}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
        />

        <section className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-hunter-green">
              {isSpanish ? "Fundador" : "Founder"}
            </p>
            <h1 className="mb-6 text-5xl font-black leading-none tracking-tighter md:text-7xl">
              Albert Garcia
            </h1>
            <p className="mb-6 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
              Based in Leiden, Netherlands. Working across Europe and internationally. I built
              CodeHunter Lab to help teams move from promising ideas to systems that actually run in
              production.
            </p>
            <p className="max-w-3xl text-lg leading-relaxed text-gray-400">
              The work sits at the intersection of AI automation, product delivery, and frontend
              architecture. That means scoping the right problem, designing the system around real
              operational constraints, and staying close enough to execution that the result is
              useful after launch instead of impressive only in a demo.
            </p>
          </div>

          <div className="rounded-2xl border border-hunter-green/20 bg-hunter-green/10 p-7">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-hunter-green">
              {isSpanish ? "Cómo trabajo" : "How I work"}
            </p>
            <ul className="mt-5 space-y-4">
              {workingStyle.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-gray-200">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-hunter-green" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid gap-10 py-14 lg:grid-cols-2">
          <div>
            <h2 className="mb-5 text-3xl font-black tracking-tight">
              {isSpanish ? "Áreas de enfoque" : "Focus areas"}
            </h2>
            <ul className="space-y-4">
              {strengths.map((item) => (
                <li key={item} className="flex gap-3 text-gray-300">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-hunter-orange" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-5 text-3xl font-black tracking-tight">
              {isSpanish ? "Por qué importa" : "Why this matters"}
            </h2>
            <p className="mb-5 text-lg leading-relaxed text-gray-300">
              Many AI and software engagements fail because strategy, delivery, and operational
              reality are separated too early. The model might look good, the demo might work, and
              the roadmap might sound smart but the system still never becomes part of the business.
            </p>
            <p className="text-lg leading-relaxed text-gray-400">
              CodeHunter Lab is designed to close that gap. The goal is not just to propose what
              should happen next. The goal is to build the next useful system and leave the client
              with something they can actually run, extend, and own.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <h2 className="mb-4 text-3xl font-black tracking-tight">
            {isSpanish ? "Empieza con el problema correcto" : "Start with the right problem"}
          </h2>
          <p className="mb-6 max-w-3xl text-lg leading-relaxed text-gray-300">
            The first step is usually not &ldquo;build everything.&rdquo; It is choosing the
            bottleneck worth fixing, the system worth integrating, and the scope that can reach
            production without turning into internal drag.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={`/${params.locale}/ai-consulting`}
              className="rounded-lg bg-hunter-green px-5 py-3 text-sm font-bold text-near-black hover:bg-white"
            >
              {isSpanish ? "Explora consultoría AI" : "Explore AI consulting"}
            </Link>
            <Link
              href={`/${params.locale}/#contact`}
              className="rounded-lg border border-white/10 px-5 py-3 text-sm font-bold text-white hover:border-hunter-green hover:text-hunter-green"
            >
              {isSpanish ? "Reserva una llamada estratégica" : "Book a strategy call"}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
