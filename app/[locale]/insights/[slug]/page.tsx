import type { Metadata } from "next";
import { Link } from "@/navigation";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import BreadcrumbSchema from "@/components/ui/BreadcrumbSchema";
import { insightBySlug, insights } from "@/content/insights";
import { getRelatedInsights } from "@/content/insights-taxonomy";
import { canonicalUrl, createPageMetadata } from "@/utils/metadata";

const baseUrl = "https://www.codehunterlab.com";

type PageParams = {
  locale: string;
  slug: string;
};

export function generateStaticParams() {
  return insights.map((article) => ({ locale: "en", slug: article.slug }));
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  if (params.locale !== "en") {
    return {};
  }

  const article = insightBySlug.get(params.slug);

  if (!article) {
    return {};
  }

  const currentArticle = article!;
  const path = `/insights/${currentArticle.slug}`;
  const metadata = createPageMetadata({
    locale: params.locale,
    path,
    title: `${currentArticle.title} | CodeHunter Lab`,
    description: currentArticle.description,
    type: "article",
  });

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      title: `${currentArticle.title} | CodeHunter Lab`,
      description: currentArticle.description,
      url: canonicalUrl(params.locale, path),
      siteName: "CodeHunter Lab",
      type: "article",
      publishedTime: currentArticle.publishedAt,
      modifiedTime: currentArticle.modifiedAt,
    },
  };
}

export default function InsightArticlePage({ params }: { params: PageParams }) {
  if (params.locale !== "en") {
    notFound();
  }

  const article = insightBySlug.get(params.slug);

  if (!article) {
    notFound();
  }

  const currentArticle = article!;
  const articleUrl = canonicalUrl("en", `/insights/${currentArticle.slug}`);
  const relatedInsights = getRelatedInsights(currentArticle.slug, insights);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: currentArticle.title,
    description: currentArticle.description,
    datePublished: currentArticle.publishedAt,
    dateModified: currentArticle.modifiedAt,
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
    keywords: currentArticle.targetQueries,
  };

  return (
    <div className="min-h-screen bg-near-black text-white">
      <Header />
      <main className="mx-auto max-w-4xl px-6 pb-24 pt-32 lg:px-8">
        <BreadcrumbSchema
          items={[
            { name: "Home", url: `${baseUrl}/en` },
            { name: "Insights", url: `${baseUrl}/en/insights` },
            { name: currentArticle.title, url: articleUrl },
          ]}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />

        <Link
          href="/insights"
          locale="en"
          className="mb-10 inline-block text-sm font-bold uppercase tracking-widest text-hunter-green hover:text-white"
        >
          Back to insights
        </Link>

        <article>
          <header className="mb-12 border-b border-white/10 pb-10">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-hunter-green">
              {currentArticle.category}
            </p>
            <h1 className="mb-6 text-4xl font-black leading-none tracking-tighter md:text-6xl">
              {currentArticle.title}
            </h1>
            <p className="mb-6 text-lg leading-relaxed text-gray-300 md:text-xl">
              {currentArticle.description}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <time dateTime={currentArticle.publishedAt}>
                Published {currentArticle.publishedAt}
              </time>
              <time dateTime={currentArticle.modifiedAt}>
                Updated {currentArticle.modifiedAt}
              </time>
              <span>{currentArticle.readingTime}</span>
            </div>
          </header>

          <div className="space-y-8">
            {currentArticle.sections.map((section, index) => {
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
            <h2 className="mb-4 text-2xl font-black tracking-tight">Related services</h2>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {currentArticle.relatedServices.map((service) => (
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

          {relatedInsights.length > 0 ? (
            <section className="mt-8 rounded-lg border border-white/10 bg-white/[0.03] p-6">
              <h2 className="mb-4 text-2xl font-black tracking-tight">Related insights</h2>
              <div className="grid gap-4 md:grid-cols-3">
                {relatedInsights.map((relatedArticle) => (
                  <article
                    key={relatedArticle.slug}
                    className="rounded-lg border border-white/10 bg-near-black px-4 py-5"
                  >
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-hunter-green">
                      {relatedArticle.category}
                    </p>
                    <h3 className="text-lg font-black leading-tight tracking-tight">
                      <Link
                        href={`/insights/${relatedArticle.slug}`}
                        locale="en"
                        className="hover:text-hunter-green"
                      >
                        {relatedArticle.title}
                      </Link>
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-300">
                      {relatedArticle.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}
        </article>
      </main>
    </div>
  );
}
