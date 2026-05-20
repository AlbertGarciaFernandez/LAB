import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import BreadcrumbSchema from "@/components/ui/BreadcrumbSchema";
import { insights } from "@/content/insights";
import { createPageMetadata } from "@/utils/metadata";

const baseUrl = "https://www.codehunterlab.com";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isSpanish = params.locale === "es";

  const title = isSpanish
    ? "Insights de Automatización AI | CodeHunter Lab"
    : "AI Automation Insights Netherlands | CodeHunter Lab";
  const description = isSpanish
    ? "Notas prácticas sobre automatización AI, flujos n8n, IA conversacional y automatización de clínicas para negocios holandeses."
    : "Practical field notes on AI automation, n8n workflows, conversational AI, and clinic automation for Dutch businesses.";
  return createPageMetadata({
    locale: params.locale,
    path: "/insights",
    title,
    description,
    keywords: [
      "AI automation insights Netherlands",
      "n8n workflows Netherlands",
      "workflow automation agency Netherlands",
    ],
  });
}

export default function InsightsPage({ params }: { params: { locale: string } }) {
  const isSpanish = params.locale === "es";

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: isSpanish ? "Insights de Automatización AI" : "AI Automation Insights Netherlands",
    description: isSpanish
      ? "Notas prácticas sobre automatización AI, flujos n8n, IA conversacional y automatización de clínicas para negocios holandeses."
      : "Practical field notes on AI automation, n8n workflows, conversational AI, and clinic automation for Dutch businesses.",
    url: `${baseUrl}/${params.locale}/insights`,
    publisher: {
      "@type": "Organization",
      name: "CodeHunter Lab",
      url: baseUrl,
    },
    hasPart: insights.map((article) => ({
      "@type": "Article",
      headline: article.title,
      url: `${baseUrl}/${params.locale}/insights/${article.slug}`,
      datePublished: article.publishedAt,
      dateModified: article.modifiedAt,
    })),
  };

  return (
    <div className="min-h-screen bg-near-black text-white">
      <Header />
      <main className="mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-8">
        <BreadcrumbSchema
          items={[
            { name: isSpanish ? "Inicio" : "Home", url: `${baseUrl}/${params.locale}` },
            { name: "Insights", url: `${baseUrl}/${params.locale}/insights` },
          ]}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
        />

        {isSpanish && (
          <div className="mb-8 rounded-lg border border-hunter-orange/30 bg-hunter-orange/10 p-4">
            <p className="text-sm font-medium text-hunter-orange">
              Estos artículos están disponibles en inglés. Estamos trabajando en la traducción al
              español.
            </p>
          </div>
        )}

        <section className="max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-hunter-green">
            {isSpanish ? "Notas de campo" : "Field notes"}
          </p>
          <h1 className="mb-6 text-5xl font-black leading-none tracking-tighter md:text-7xl">
            {isSpanish
              ? "Insights de automatización AI para negocios holandeses."
              : "AI automation insights for Dutch businesses."}
          </h1>
          <p className="text-lg leading-relaxed text-gray-300 md:text-xl">
            {isSpanish
              ? "Guías prácticas sobre los temas exactos que Google ya está probando para CodeHunter Lab: automatización de flujos, IA conversacional, n8n y operaciones de clínicas."
              : "Practical guides on the exact topics Google is already testing for CodeHunter Lab: workflow automation, conversational AI, n8n, and clinic operations."}
          </p>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-2">
          {insights.map((article) => (
            <article
              key={article.slug}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-hunter-green/40"
            >
              <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-400">
                <span className="text-hunter-green">{article.category}</span>
                <span>{article.readingTime}</span>
              </div>
              <h2 className="mb-4 text-2xl font-black leading-tight tracking-tight">
                <Link
                  href={`/${params.locale}/insights/${article.slug}`}
                  className="hover:text-hunter-green"
                >
                  {article.title}
                </Link>
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-gray-300">{article.description}</p>
              <Link
                href={`/${params.locale}/insights/${article.slug}`}
                className="text-sm font-bold uppercase tracking-widest text-hunter-orange hover:text-white"
              >
                {isSpanish ? "Leer insight" : "Read insight"}
              </Link>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
