import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import BreadcrumbSchema from "@/components/ui/BreadcrumbSchema";
import { caseStudyBySlug, caseStudies } from "@/content/case-studies";

const baseUrl = "https://www.codehunterlab.com";

type PageParams = {
  locale: string;
  slug: string;
};

export function generateStaticParams() {
  return caseStudies.flatMap((cs) => [
    { locale: "en", slug: cs.slug },
    { locale: "es", slug: cs.slug },
  ]);
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const study = caseStudyBySlug.get(params.slug);
  const isSpanish = params.locale === "es";

  if (!study) {
    return {};
  }

  const url = `${baseUrl}/${params.locale}/case-studies/${study.slug}`;

  return {
    title: `${study.industry} Case Study | CodeHunter Lab`,
    description: study.solution,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${study.industry} Case Study | CodeHunter Lab`,
      description: study.solution,
      url,
      siteName: "CodeHunter Lab",
      type: "article",
      locale: isSpanish ? "es_ES" : "en_US",
      publishedTime: study.publishedAt,
      modifiedTime: study.modifiedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.industry} Case Study | CodeHunter Lab`,
      description: study.solution,
    },
  };
}

export default function CaseStudyPage({ params }: { params: PageParams }) {
  const study = caseStudyBySlug.get(params.slug);
  const isSpanish = params.locale === "es";

  if (!study) {
    notFound();
  }

  const studyUrl = `${baseUrl}/${params.locale}/case-studies/${study.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${study.industry} Case Study`,
    description: study.solution,
    datePublished: study.publishedAt,
    dateModified: study.modifiedAt,
    mainEntityOfPage: studyUrl,
    articleSection: "Case Study",
    author: {
      "@type": "Person",
      name: "Albert Garcia",
      url: "https://www.linkedin.com/in/albertgarciafernandez/",
      worksFor: {
        "@type": "Organization",
        name: "CodeHunter Lab",
        url: baseUrl,
      },
    },
    publisher: {
      "@type": "Organization",
      name: "CodeHunter Lab",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo-hntr.svg`,
      },
    },
  };

  return (
    <div className="min-h-screen bg-near-black text-white">
      <Header />
      <main className="mx-auto max-w-4xl px-6 pb-24 pt-32 lg:px-8">
        <BreadcrumbSchema
          items={[
            { name: isSpanish ? "Inicio" : "Home", url: `${baseUrl}/${params.locale}` },
            {
              name: isSpanish ? "Casos de éxito" : "Case Studies",
              url: `${baseUrl}/${params.locale}/case-studies`,
            },
            { name: study.solution, url: studyUrl },
          ]}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />

        {isSpanish && (
          <div className="mb-8 rounded-lg border border-hunter-orange/30 bg-hunter-orange/10 p-4">
            <p className="text-sm font-medium text-hunter-orange">
              Este case study está disponible en inglés. Estamos trabajando en la traducción al
              español.
            </p>
          </div>
        )}

        <Link
          href={`/${params.locale}/case-studies`}
          className="mb-10 inline-block text-sm font-bold uppercase tracking-widest text-hunter-green hover:text-white"
        >
          {isSpanish ? "Volver a case studies" : "Back to case studies"}
        </Link>

        <article>
          <header className="mb-12 border-b border-white/10 pb-10">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-hunter-green">
              {study.industry} · {study.location}
            </p>
            <h1 className="mb-6 text-4xl font-black leading-none tracking-tighter md:text-6xl">
              {study.solution}
            </h1>
            <p className="mb-6 text-lg leading-relaxed text-gray-300 md:text-xl">{study.problem}</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <span>
                {isSpanish ? "Clientes" : "Client size"}: {study.clientSize}
              </span>
              <span>
                {isSpanish ? "Cronograma" : "Timeline"}: {study.timeline}
              </span>
              <span>
                {isSpanish ? "Año" : "Year"}: {study.year}
              </span>
              <span>
                {isSpanish ? "Publicado" : "Published"} {study.publishedAt}
              </span>
            </div>
          </header>

          {/* Metrics grid */}
          <section className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {study.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-hunter-green/20 bg-hunter-green/5 p-6 text-center"
              >
                <div className="text-3xl font-black text-hunter-orange md:text-4xl">
                  {metric.value}
                </div>
                <div className="mt-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                  {metric.label}
                </div>
              </div>
            ))}
          </section>

          {/* Problem statement */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-black tracking-tight">
              {isSpanish ? "El problema" : "The problem"}
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">{study.problem}</p>
          </section>

          {/* Solution description */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-black tracking-tight">
              {isSpanish ? "La solución" : "The solution"}
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">{study.solution}</p>
          </section>

          {/* Technologies used */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-black tracking-tight">
              {isSpanish ? "Tecnologías" : "Technologies"}
            </h2>
            <div className="flex flex-wrap gap-2">
              {study.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-bold text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Full content sections */}
          <div className="space-y-8">
            {study.sections.map((section, index) => {
              if (section.type === "heading") {
                return (
                  <h2
                    key={`${section.text}-${index}`}
                    className="pt-4 text-3xl font-black tracking-tight"
                  >
                    {section.text}
                  </h2>
                );
              }

              if (section.type === "list") {
                return (
                  <ul key={`${section.items[0]}-${index}`} className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3 text-gray-300">
                        <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-hunter-green" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }

              return (
                <p
                  key={`${section.text}-${index}`}
                  className="text-lg leading-relaxed text-gray-300"
                >
                  {section.text}
                </p>
              );
            })}
          </div>

          {/* CTA to contact */}
          <section className="mt-14 rounded-lg border border-hunter-orange/30 bg-hunter-orange/10 p-6">
            <h2 className="mb-3 text-2xl font-black tracking-tight">
              {isSpanish ? "¿Algo similar en tu negocio?" : "Something similar in your business?"}
            </h2>
            <p className="mb-6 text-gray-300">
              {isSpanish
                ? "Hablemos de cómo la automatización AI puede reducir costes operativos y recuperar horas semanales en tu equipo."
                : "Let's talk about how AI automation can reduce operational costs and reclaim weekly hours for your team."}
            </p>
            <Link
              href={`/${params.locale}/#contact`}
              className="inline-block rounded-lg bg-hunter-orange px-6 py-3 text-sm font-bold uppercase tracking-widest text-near-black transition-opacity hover:opacity-90"
            >
              {isSpanish ? "Contactar" : "Get in touch"}
            </Link>
          </section>
        </article>
      </main>
    </div>
  );
}
