import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import BreadcrumbSchema from "@/components/ui/BreadcrumbSchema";
import { caseStudies } from "@/content/case-studies";
import { createPageMetadata } from "@/utils/metadata";

const baseUrl = "https://www.codehunterlab.com";
const caseStudiesTitle = "Case Studies: AI Automation, Product Engineering, Migrations, and Systems Integration";
const caseStudiesDescription =
  "Delivery stories across AI products, internal platforms, ecommerce migrations, and integration-heavy systems work.";
const caseStudiesKeywords = [
  "AI automation case studies",
  "product engineering case studies",
  "software migration case studies",
  "systems integration projects",
];

const trustProofMetrics = [
  {
    value: "4+",
    label: "Years shipping",
    note: "Web apps, automations, integrations and AI systems in production.",
  },
  {
    value: "15+",
    label: "Companies served",
    note: "From local operators to SaaS and ecommerce teams.",
  },
  {
    value: "30d",
    label: "Support included",
    note: "Implementation projects include post-launch support and handoff.",
  },
];

const trustProofItems = [
  {
    title: "No black boxes",
    desc: "The code, workflows, credential docs and deployment notes stay in your hands.",
  },
  {
    title: "Real systems, not demos",
    desc: "We connect with the stack your team already uses: CRM, calendar, WhatsApp, databases, APIs and reports.",
  },
  {
    title: "Scope before build",
    desc: "Every project starts with deliverables, integration requirements, timeline and acceptance criteria.",
  },
];

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
    path: "/case-studies",
    title: `${caseStudiesTitle} | CodeHunter Lab`,
    description: caseStudiesDescription,
    keywords: caseStudiesKeywords,
  });
}

export default function CaseStudiesPage({ params }: { params: { locale: string } }) {
  if (params.locale !== "en") {
    notFound();
  }

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: caseStudiesTitle,
    description: caseStudiesDescription,
    url: `${baseUrl}/en/case-studies`,
    publisher: {
      "@type": "Organization",
      name: "CodeHunter Lab",
      url: baseUrl,
    },
    hasPart: caseStudies.map((cs) => ({
      "@type": "Article",
      headline: `${cs.industry} — ${cs.solution}`,
      url: `${baseUrl}/en/case-studies/${cs.slug}`,
      datePublished: cs.publishedAt,
      dateModified: cs.modifiedAt,
    })),
  };

  return (
    <div className="min-h-screen bg-near-black text-white">
      <Header />
      <main className="mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-8">
        <BreadcrumbSchema
          items={[
            { name: "Home", url: `${baseUrl}/en` },
            { name: "Case Studies", url: `${baseUrl}/en/case-studies` },
          ]}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
        />

        <section className="max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-hunter-green">
            Client work
          </p>
          <h1 className="mb-6 text-5xl font-black leading-none tracking-tighter md:text-7xl">
            AI automation, product engineering, migrations, and systems integration.
          </h1>
          <p className="text-lg leading-relaxed text-gray-300 md:text-xl">
            Delivery stories across AI products, internal platforms, ecommerce migrations, and
            integration-heavy systems work.
          </p>
        </section>

        <section className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-hunter-green">
                Proof, not theatre
              </p>
              <h2 className="text-3xl font-black leading-tight tracking-tighter md:text-4xl">
                We build like a product team, not a slide factory.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-300">
                Fixed scope, ownable code, production handoff, and senior engineering from discovery
                to deployment.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {trustProofMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/5 bg-near-black p-5"
                >
                  <div className="text-3xl font-black tracking-tighter text-hunter-green">
                    {metric.value}
                  </div>
                  <div className="mt-2 text-sm font-bold text-white">{metric.label}</div>
                  <p className="mt-2 text-xs leading-relaxed text-gray-400">{metric.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {trustProofItems.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/5 bg-near-black p-5"
              >
                <h3 className="text-sm font-black tracking-tight text-hunter-green">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{item.desc}</p>
              </article>
            ))}
          </div>
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
                <Link href={`/en/case-studies/${cs.slug}`} className="hover:text-hunter-green">
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
                href={`/en/case-studies/${cs.slug}`}
                className="text-sm font-bold uppercase tracking-widest text-hunter-orange hover:text-white"
              >
                Read case study
              </Link>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
