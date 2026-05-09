import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import { caseStudies } from "@/content/case-studies";

const baseUrl = "https://www.codehunterlab.com";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isSpanish = params.locale === "es";

  const title = isSpanish ? "Case Studies | CodeHunter Lab" : "Case Studies | CodeHunter Lab";
  const description = isSpanish
    ? "Ejemplos reales de automatización AI y flujos de trabajo para clínicas, despachos de contabilidad y negocios holandeses."
    : "Real-world automation and AI workflow case studies for Dutch dental clinics, accounting firms, and SMEs.";
  const canonical = `${baseUrl}/${params.locale}/case-studies`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "CodeHunter Lab",
      type: "website",
      locale: isSpanish ? "es_ES" : "en_US",
    },
  };
}

export default function CaseStudiesPage({ params }: { params: { locale: string } }) {
  const isSpanish = params.locale === "es";

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: isSpanish ? "Case Studies | CodeHunter Lab" : "Case Studies | CodeHunter Lab",
    description: isSpanish
      ? "Ejemplos reales de automatización AI y flujos de trabajo para clínicas, despachos de contabilidad y negocios holandeses."
      : "Real-world automation and AI workflow case studies for Dutch dental clinics, accounting firms, and SMEs.",
    url: `${baseUrl}/${params.locale}/case-studies`,
    publisher: {
      "@type": "Organization",
      name: "CodeHunter Lab",
      url: baseUrl,
    },
    hasPart: caseStudies.map((cs) => ({
      "@type": "Article",
      headline: `${cs.industry} — ${cs.solution}`,
      url: `${baseUrl}/${params.locale}/case-studies/${cs.slug}`,
      datePublished: cs.publishedAt,
      dateModified: cs.modifiedAt,
    })),
  };

  return (
    <div className="min-h-screen bg-near-black text-white">
      <Header />
      <main className="mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
        />

        {isSpanish && (
          <div className="mb-8 rounded-lg border border-hunter-orange/30 bg-hunter-orange/10 p-4">
            <p className="text-sm font-medium text-hunter-orange">
              Estos case studies están disponibles en inglés. Estamos trabajando en la traducción al
              español.
            </p>
          </div>
        )}

        <section className="max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-hunter-green">
            {isSpanish ? "Trabajo de clientes" : "Client work"}
          </p>
          <h1 className="mb-6 text-5xl font-black leading-none tracking-tighter md:text-7xl">
            {isSpanish ? "Case studies." : "Case studies."}
          </h1>
          <p className="text-lg leading-relaxed text-gray-300 md:text-xl">
            {isSpanish
              ? "Resultados reales de automatización AI, integración de sistemas y flujos de trabajo n8n para negocios en los Países Bajos."
              : "Real results from AI automation, system integration, and n8n workflow projects for Dutch businesses."}
          </p>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-2">
          {caseStudies.map((cs) => (
            <article
              key={cs.slug}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-hunter-green/40"
            >
              <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-400">
                <span className="text-hunter-green">{cs.industry}</span>
                <span>{cs.location}</span>
                <span>{cs.clientSize}</span>
              </div>

              <h2 className="mb-3 text-2xl font-black leading-tight tracking-tight">
                <Link
                  href={`/${params.locale}/case-studies/${cs.slug}`}
                  className="hover:text-hunter-green"
                >
                  {cs.solution}
                </Link>
              </h2>

              <p className="mb-6 text-sm leading-relaxed text-gray-300">{cs.problem}</p>

              <div className="mb-6 grid grid-cols-3 gap-3">
                {cs.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-lg border border-white/5 bg-white/[0.02] p-3 text-center"
                  >
                    <div className="text-xl font-black text-hunter-orange">{metric.value}</div>
                    <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-gray-500">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href={`/${params.locale}/case-studies/${cs.slug}`}
                className="text-sm font-bold uppercase tracking-widest text-hunter-orange hover:text-white"
              >
                {isSpanish ? "Ver case study" : "Read case study"}
              </Link>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
