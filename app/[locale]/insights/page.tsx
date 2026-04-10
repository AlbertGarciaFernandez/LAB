import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import { insights } from "@/content/insights";

const baseUrl = "https://www.codehunterlab.com";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (params.locale !== "en") {
    return {};
  }

  return {
    title: "AI Automation Insights Netherlands | CodeHunter Lab",
    description:
      "Practical field notes on AI automation, n8n workflows, conversational AI, and clinic automation for Dutch businesses.",
    alternates: {
      canonical: `${baseUrl}/en/insights`,
    },
    openGraph: {
      title: "AI Automation Insights Netherlands | CodeHunter Lab",
      description:
        "Practical field notes on AI automation, n8n workflows, conversational AI, and clinic automation for Dutch businesses.",
      url: `${baseUrl}/en/insights`,
      siteName: "CodeHunter Lab",
      type: "website",
      locale: "en_US",
    },
  };
}

export default function InsightsPage({ params }: { params: { locale: string } }) {
  if (params.locale !== "en") {
    notFound();
  }

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
        />
        <section className="max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-hunter-green">
            Field notes
          </p>
          <h1 className="mb-6 text-5xl font-black leading-none tracking-tighter md:text-7xl">
            AI automation insights for Dutch businesses.
          </h1>
          <p className="text-lg leading-relaxed text-gray-300 md:text-xl">
            Practical guides on the exact topics Google is already testing for
            CodeHunter Lab: workflow automation, conversational AI, n8n, and
            clinic operations.
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
                <Link href={`/en/insights/${article.slug}`} className="hover:text-hunter-green">
                  {article.title}
                </Link>
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-gray-300">
                {article.description}
              </p>
              <Link
                href={`/en/insights/${article.slug}`}
                className="text-sm font-bold uppercase tracking-widest text-hunter-orange hover:text-white"
              >
                Read insight
              </Link>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

