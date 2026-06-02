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
  const isDutch = params.locale === "nl";

  const title = isSpanish
    ? "Sobre Albert Garcia | CodeHunter Lab"
    : isDutch
      ? "Over Albert Garcia | CodeHunter Lab"
      : "About Albert Garcia | CodeHunter Lab";
  const description = isSpanish
    ? "Conoce a Albert Garcia, fundador de CodeHunter Lab en Leiden, Países Bajos. Consultoría AI, automatización y entrega de productos para Europa y clientes internacionales."
    : isDutch
      ? "Maak kennis met Albert Garcia, oprichter van CodeHunter Lab in Leiden, Nederland. Engineering-first AI consulting, automatisering en product delivery voor Europa en internationale klanten."
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
  const isDutch = params.locale === "nl";

  const strengths = isSpanish
    ? [
        "Sistemas de automatización AI conectados a flujos reales de negocio",
        "Migraciones de n8n y arquitectura operativa de workflows",
        "Arquitectura de producto con Next.js y React pensada para el largo plazo",
        "Pensamiento técnico de fundador con ejecución práctica",
      ]
    : isDutch
      ? [
          "AI-automatiseringssystemen die echte bedrijfsworkflows verbinden",
          "n8n-migraties en operationele workflowarchitectuur",
          "Next.js- en React-productarchitectuur voor langetermijnonderhoud",
          "Technical founder-denken met hands-on uitvoering",
        ]
      : [
          "AI automation systems that connect to real business workflows",
          "n8n migrations and operational workflow architecture",
          "Next.js and React product architecture for long-term maintainability",
          "Founder-level technical thinking with hands-on delivery",
        ];

  const workingStyle = isSpanish
    ? [
        "Empezar por el cuello de botella con ROI más claro.",
        "Definir el alcance alrededor de sistemas reales, no demos de sandbox.",
        "Mantener la arquitectura entendible para que el equipo pueda operarla después.",
        "Mantenerse cerca del resultado de negocio en lugar de esconderse detrás del jargon.",
      ]
    : isDutch
      ? [
          "Begin met de bottleneck met de duidelijkste ROI.",
          "Scope delivery rond echte systemen, niet rond sandbox-demo's.",
          "Houd de architectuur begrijpelijk zodat teams die na overdracht zelf kunnen beheren.",
          "Blijf dicht bij business outcomes in plaats van je achter jargon te verschuilen.",
        ]
      : [
          "Start with the bottleneck that has the clearest ROI.",
          "Scope delivery around real systems, not sandbox demos.",
          "Keep architecture understandable so teams can own it after handover.",
          "Stay close to business outcomes instead of hiding behind jargon.",
        ];

  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: isSpanish
      ? "Sobre Albert Garcia"
      : isDutch
        ? "Over Albert Garcia"
        : "About Albert Garcia",
    url: `${baseUrl}/${params.locale}/about`,
    description: isSpanish
      ? "Sobre Albert Garcia, fundador de CodeHunter Lab en Leiden, Países Bajos."
      : isDutch
        ? "Over Albert Garcia, oprichter van CodeHunter Lab in Leiden, Nederland."
        : "About Albert Garcia, founder of CodeHunter Lab in Leiden, Netherlands.",
    mainEntity: {
      "@type": "Person",
      name: "Albert Garcia",
      jobTitle: isSpanish ? "Fundador" : isDutch ? "Oprichter" : "Founder",
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
            {
              name: isSpanish ? "Inicio" : isDutch ? "Start" : "Home",
              url: `${baseUrl}/${params.locale}`,
            },
            {
              name: isSpanish ? "Sobre" : isDutch ? "Over" : "About",
              url: `${baseUrl}/${params.locale}/about`,
            },
          ]}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
        />

        <section className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-hunter-green">
              {isSpanish ? "Fundador" : isDutch ? "Oprichter" : "Founder"}
            </p>
            <h1 className="mb-6 text-5xl font-black leading-none tracking-tighter md:text-7xl">
              Albert Garcia
            </h1>
            <p className="mb-6 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
              {isSpanish
                ? "Con base en Leiden, Países Bajos. Trabajo en toda Europa y con clientes internacionales. Creé CodeHunter Lab para ayudar a los equipos a pasar de ideas prometedoras a sistemas que realmente funcionan en producción."
                : isDutch
                  ? "Gevestigd in Leiden, Nederland. Werkzaam in heel Europa en internationaal. Ik heb CodeHunter Lab gebouwd om teams te helpen van veelbelovende ideeën naar systemen te gaan die echt in productie draaien."
                  : "Based in Leiden, Netherlands. Working across Europe and internationally. I built CodeHunter Lab to help teams move from promising ideas to systems that actually run in production."}
            </p>
            <p className="max-w-3xl text-lg leading-relaxed text-gray-400">
              {isSpanish
                ? "El trabajo se sitúa en la intersección entre automatización AI, entrega de producto y arquitectura frontend. Eso significa acotar el problema correcto, diseñar el sistema alrededor de restricciones operativas reales y mantenerse lo bastante cerca de la ejecución para que el resultado sea útil después del lanzamiento y no solo impresionante en una demo."
                : isDutch
                  ? "Het werk ligt op het snijvlak van AI-automatisering, product delivery en frontendarchitectuur. Dat betekent het juiste probleem afbakenen, het systeem ontwerpen rond echte operationele beperkingen en dicht genoeg bij de uitvoering blijven zodat het resultaat na livegang bruikbaar is, niet alleen indrukwekkend in een demo."
                  : "The work sits at the intersection of AI automation, product delivery, and frontend architecture. That means scoping the right problem, designing the system around real operational constraints, and staying close enough to execution that the result is useful after launch instead of impressive only in a demo."}
            </p>
          </div>

          <div className="rounded-2xl border border-hunter-green/20 bg-hunter-green/10 p-7">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-hunter-green">
              {isSpanish ? "Cómo trabajo" : isDutch ? "Hoe ik werk" : "How I work"}
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
              {isSpanish ? "Áreas de enfoque" : isDutch ? "Focusgebieden" : "Focus areas"}
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
              {isSpanish
                ? "Por qué importa"
                : isDutch
                  ? "Waarom dit ertoe doet"
                  : "Why this matters"}
            </h2>
            <p className="mb-5 text-lg leading-relaxed text-gray-300">
              {isSpanish
                ? "Muchos proyectos de AI y software fallan porque estrategia, entrega y realidad operativa se separan demasiado pronto. El modelo puede parecer bueno, la demo puede funcionar y el roadmap puede sonar inteligente, pero el sistema nunca llega a formar parte real del negocio."
                : isDutch
                  ? "Veel AI- en softwaretrajecten mislukken omdat strategie, delivery en operationele realiteit te vroeg van elkaar worden losgekoppeld. Het model kan er goed uitzien, de demo kan werken en de roadmap kan slim klinken, maar het systeem wordt nog steeds geen echt onderdeel van het bedrijf."
                  : "Many AI and software engagements fail because strategy, delivery, and operational reality are separated too early. The model might look good, the demo might work, and the roadmap might sound smart but the system still never becomes part of the business."}
            </p>
            <p className="text-lg leading-relaxed text-gray-400">
              {isSpanish
                ? "CodeHunter Lab está diseñado para cerrar esa brecha. El objetivo no es solo proponer qué debería pasar después. El objetivo es construir el siguiente sistema útil y dejar al cliente con algo que realmente pueda operar, extender y hacer suyo."
                : isDutch
                  ? "CodeHunter Lab is ontworpen om dat gat te dichten. Het doel is niet alleen voorstellen wat de volgende stap zou moeten zijn. Het doel is het volgende nuttige systeem bouwen en de klant achterlaten met iets dat ze echt kunnen draaien, uitbreiden en bezitten."
                  : "CodeHunter Lab is designed to close that gap. The goal is not just to propose what should happen next. The goal is to build the next useful system and leave the client with something they can actually run, extend, and own."}
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <h2 className="mb-4 text-3xl font-black tracking-tight">
            {isSpanish
              ? "Empieza con el problema correcto"
              : isDutch
                ? "Begin met het juiste probleem"
                : "Start with the right problem"}
          </h2>
          <p className="mb-6 max-w-3xl text-lg leading-relaxed text-gray-300">
            {isSpanish
              ? 'El primer paso normalmente no es "construirlo todo". Es elegir el cuello de botella que merece la pena resolver, el sistema que merece integrarse y el alcance que puede llegar a producción sin convertirse en fricción interna.'
              : isDutch
                ? 'De eerste stap is meestal niet "alles bouwen". Het is kiezen welke bottleneck het waard is om op te lossen, welk systeem het waard is om te integreren en welke scope productie kan halen zonder interne frictie te worden.'
                : 'The first step is usually not "build everything." It is choosing the bottleneck worth fixing, the system worth integrating, and the scope that can reach production without turning into internal drag.'}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={`/${params.locale}/ai-consulting`}
              className="rounded-lg bg-hunter-green px-5 py-3 text-sm font-bold text-near-black hover:bg-white"
            >
              {isSpanish
                ? "Explora consultoría AI"
                : isDutch
                  ? "Verken AI consulting"
                  : "Explore AI consulting"}
            </Link>
            <Link
              href="#contact"
              className="rounded-lg border border-white/10 px-5 py-3 text-sm font-bold text-white hover:border-hunter-green hover:text-hunter-green"
            >
              {isSpanish
                ? "Reserva una llamada estratégica"
                : isDutch
                  ? "Boek een strategiesessie"
                  : "Book a strategy call"}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
