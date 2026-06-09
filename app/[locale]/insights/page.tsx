import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import BreadcrumbSchema from "@/components/ui/BreadcrumbSchema";
import { insights } from "@/content/insights";
import {
  getHubFeaturedInsights,
  getStrategicClusterGroups,
  getSupportingInsights,
} from "@/content/insights-taxonomy";
import { createPageMetadata } from "@/utils/metadata";

const baseUrl = "https://www.codehunterlab.com";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (params.locale !== "en") {
    return {};
  }

  return createPageMetadata({
    locale: "en",
    path: "/insights",
    title: "AI Automation Insights Netherlands | CodeHunter Lab",
    description:
      "Practical field notes on AI automation, n8n workflows, conversational AI, and clinic automation for Dutch businesses.",
    keywords: [
      "AI automation insights Netherlands",
      "n8n workflows Netherlands",
      "workflow automation agency Netherlands",
    ],
  });
}

export default function InsightsPage({ params }: { params: { locale: string } }) {
  if (params.locale !== "en") {
    notFound();
  }

  const featuredInsights = getHubFeaturedInsights(insights);
  const strategicClusters = getStrategicClusterGroups(insights);
  const supportingInsights = getSupportingInsights(insights);

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AI Automation Insights Netherlands",
    description:
      "Practical field notes on AI automation, n8n workflows, conversational AI, and clinic automation for Dutch businesses.",
    url: `${baseUrl}/en/insights`,
    publisher: {
      "@type": "Organization",
      name: "CodeHunter Lab",
      url: baseUrl,
    },
    hasPart: insights.map((article) => ({
      "@type": "Article",
      headline: article.title,
      url: `${baseUrl}/en/insights/${article.slug}`,
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
            { name: "Home", url: `${baseUrl}/en` },
            { name: "Insights", url: `${baseUrl}/en/insights` },
          ]}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
        />

        <section className="max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-hunter-green">
            Field notes
          </p>
          <h1 className="mb-6 text-5xl font-black leading-none tracking-tighter md:text-7xl">
            Buyer education for AI systems, workflows, and operational automation.
          </h1>
          <p className="text-lg leading-relaxed text-gray-300 md:text-xl">
            This library is designed to help operators, founders, and technical buyers understand
            what to automate first, where AI creates real operational leverage, and how to avoid
            fragile systems.
          </p>
        </section>

        <section className="mt-16 rounded-3xl border border-hunter-green/30 bg-hunter-green/10 p-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-hunter-green">
              Start here
            </p>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Strategic reads tied to CodeHunter Lab’s core service clusters.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-200">
              These are the insights most closely aligned with consulting, automation,
              integration, n8n migration, WhatsApp workflows, and production-ready delivery.
            </p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {featuredInsights.map((article) => (
              <article
                key={article.slug}
                className="rounded-2xl border border-white/10 bg-near-black/80 p-7"
              >
                <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-400">
                  <span className="text-hunter-green">{article.category}</span>
                  <time dateTime={article.modifiedAt}>Updated {article.modifiedAt}</time>
                  <span>{article.readingTime}</span>
                </div>
                <h2 className="mb-4 text-2xl font-black leading-tight tracking-tight">
                  <Link href={`/en/insights/${article.slug}`} className="hover:text-hunter-green">
                    {article.title}
                  </Link>
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-gray-300">{article.description}</p>
                <Link
                  href={`/en/insights/${article.slug}`}
                  className="text-sm font-bold uppercase tracking-widest text-hunter-orange hover:text-white"
                >
                  Read insight
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 space-y-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-hunter-green">
              Strategic clusters
            </p>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Explore the topics that map directly to the commercial offer.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {strategicClusters.map(({ cluster, meta, articles }) => (
              <section
                key={cluster}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
              >
                <h3 className="text-2xl font-black tracking-tight text-white">{meta.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-300">{meta.description}</p>
                <div className="mt-6 space-y-4">
                  {articles.map((article) => (
                    <article key={article.slug} className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                      <div className="mb-2 flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-gray-400">
                        <span className="text-hunter-green">{article.category}</span>
                        <time dateTime={article.modifiedAt}>Updated {article.modifiedAt}</time>
                      </div>
                      <h4 className="text-lg font-black leading-tight tracking-tight">
                        <Link href={`/en/insights/${article.slug}`} className="hover:text-hunter-green">
                          {article.title}
                        </Link>
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-gray-300">{article.description}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-hunter-green">
              Supporting reads
            </p>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Additional notes that support cluster depth and internal linking.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-300 md:text-base">
              These articles stay useful for topical authority and buyer education, even when they
              are not the first pieces we push hardest in the sitemap.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {supportingInsights.map((article) => (
              <article
                key={article.slug}
                className="rounded-lg border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-hunter-green/40"
              >
                <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-400">
                  <span className="text-hunter-green">{article.category}</span>
                  <time dateTime={article.modifiedAt}>Updated {article.modifiedAt}</time>
                  <span>{article.readingTime}</span>
                </div>
                <h2 className="mb-4 text-2xl font-black leading-tight tracking-tight">
                  <Link href={`/en/insights/${article.slug}`} className="hover:text-hunter-green">
                    {article.title}
                  </Link>
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-gray-300">{article.description}</p>
                <Link
                  href={`/en/insights/${article.slug}`}
                  className="text-sm font-bold uppercase tracking-widest text-hunter-orange hover:text-white"
                >
                  Read insight
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
