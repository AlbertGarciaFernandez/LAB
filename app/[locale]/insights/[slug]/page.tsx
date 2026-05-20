import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import BreadcrumbSchema from "@/components/ui/BreadcrumbSchema";
import { insightBySlug, insights } from "@/content/insights";

const baseUrl = "https://www.codehunterlab.com";

type PageParams = {
  locale: string;
  slug: string;
};

export function generateStaticParams() {
  return insights.flatMap((article) => [
    { locale: "en", slug: article.slug },
    { locale: "es", slug: article.slug },
  ]);
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const article = insightBySlug.get(params.slug);
  const isSpanish = params.locale === "es";

  if (!article) {
    return {};
  }

  const url = `${baseUrl}/${params.locale}/insights/${article.slug}`;

  return {
    title: `${article.title} | CodeHunter Lab`,
    description: article.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      siteName: "CodeHunter Lab",
      type: "article",
      locale: isSpanish ? "es_ES" : "en_US",
      publishedTime: article.publishedAt,
      modifiedTime: article.modifiedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default function InsightArticlePage({ params }: { params: PageParams }) {
  const article = insightBySlug.get(params.slug);
  const isSpanish = params.locale === "es";

  if (!article) {
    notFound();
  }

  const articleUrl = `${baseUrl}/${params.locale}/insights/${article.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.modifiedAt,
    mainEntityOfPage: articleUrl,
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
    keywords: article.targetQueries,
  };

  return (
    <div className="min-h-screen bg-near-black text-white">
      <Header />
      <main className="mx-auto max-w-4xl px-6 pb-24 pt-32 lg:px-8">
        <BreadcrumbSchema
          items={[
            { name: isSpanish ? "Inicio" : "Home", url: `${baseUrl}/${params.locale}` },
            { name: "Insights", url: `${baseUrl}/${params.locale}/insights` },
            { name: article.title, url: articleUrl },
          ]}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />

        {isSpanish && (
          <div className="mb-8 rounded-lg border border-hunter-orange/30 bg-hunter-orange/10 p-4">
            <p className="text-sm font-medium text-hunter-orange">
              Este artículo está disponible en inglés. Estamos trabajando en la traducción al
              español.
            </p>
          </div>
        )}

        <Link
          href={`/${params.locale}/insights`}
          className="mb-10 inline-block text-sm font-bold uppercase tracking-widest text-hunter-green hover:text-white"
        >
          {isSpanish ? "Volver a insights" : "Back to insights"}
        </Link>

        <article>
          <header className="mb-12 border-b border-white/10 pb-10">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-hunter-green">
              {article.category}
            </p>
            <h1 className="mb-6 text-4xl font-black leading-none tracking-tighter md:text-6xl">
              {article.title}
            </h1>
            <p className="mb-6 text-lg leading-relaxed text-gray-300 md:text-xl">
              {article.description}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <span>
                {isSpanish ? "Publicado" : "Published"} {article.publishedAt}
              </span>
              <span>
                {isSpanish ? "Actualizado" : "Updated"} {article.modifiedAt}
              </span>
              <span>{article.readingTime}</span>
            </div>
          </header>

          <div className="space-y-8">
            {article.sections.map((section, index) => {
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

              if (section.type === "table") {
                return (
                  <div
                    key={`table-${index}`}
                    className="overflow-x-auto rounded-xl border border-white/10"
                  >
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b border-white/10 bg-hunter-green/10">
                          {section.headers.map((header, hIdx) => (
                            <th
                              key={hIdx}
                              className="px-4 py-3 font-bold uppercase tracking-wider text-hunter-green"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.rows.map((row, rIdx) => (
                          <tr
                            key={rIdx}
                            className="border-b border-white/5 last:border-b-0 hover:bg-white/5"
                          >
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`px-4 py-3 leading-relaxed text-gray-300 ${
                                  cIdx === 0 ? "font-semibold text-white" : ""
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
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

          <section className="mt-14 rounded-lg border border-hunter-green/30 bg-hunter-green/10 p-6">
            <h2 className="mb-4 text-2xl font-black tracking-tight">
              {isSpanish ? "Servicios relacionados" : "Related services"}
            </h2>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {article.relatedServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="rounded-lg border border-white/10 bg-near-black px-4 py-3 text-sm font-bold text-white hover:border-hunter-green hover:text-hunter-green"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
