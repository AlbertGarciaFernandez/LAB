import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";

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
    title: "About Albert Garcia | CodeHunter Lab",
    description:
      "Meet Albert Garcia, founder of CodeHunter Lab in Leiden, Netherlands. Engineering-first AI consulting, automation, and product delivery for Europe and international clients.",
    alternates: {
      canonical: `${baseUrl}/en/about`,
    },
    openGraph: {
      title: "About Albert Garcia | CodeHunter Lab",
      description:
        "Meet Albert Garcia, founder of CodeHunter Lab in Leiden, Netherlands. Engineering-first AI consulting, automation, and product delivery for Europe and international clients.",
      url: `${baseUrl}/en/about`,
      siteName: "CodeHunter Lab",
      type: "profile",
      locale: "en_US",
    },
  };
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  if (params.locale !== "en") {
    notFound();
  }

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
    name: "About Albert Garcia",
    url: `${baseUrl}/en/about`,
    description:
      "About Albert Garcia, founder of CodeHunter Lab in Leiden, Netherlands.",
    mainEntity: {
      "@type": "Person",
      name: "Albert Garcia",
      jobTitle: "Founder",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
        />

        <section className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-hunter-green">
              Founder
            </p>
            <h1 className="mb-6 text-5xl font-black leading-none tracking-tighter md:text-7xl">
              Albert Garcia
            </h1>
            <p className="mb-6 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
              Based in Leiden, Netherlands. Working across Europe and
              internationally. I built CodeHunter Lab to help teams move from
              promising ideas to systems that actually run in production.
            </p>
            <p className="max-w-3xl text-lg leading-relaxed text-gray-400">
              The work sits at the intersection of AI automation, product
              delivery, and frontend architecture. That means scoping the right
              problem, designing the system around real operational constraints,
              and staying close enough to execution that the result is useful
              after launch instead of impressive only in a demo.
            </p>
          </div>

          <div className="rounded-2xl border border-hunter-green/20 bg-hunter-green/10 p-7">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-hunter-green">
              How I work
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
              Focus areas
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
              Why this matters
            </h2>
            <p className="mb-5 text-lg leading-relaxed text-gray-300">
              Many AI and software engagements fail because strategy, delivery,
              and operational reality are separated too early. The model might
              look good, the demo might work, and the roadmap might sound smart
              but the system still never becomes part of the business.
            </p>
            <p className="text-lg leading-relaxed text-gray-400">
              CodeHunter Lab is designed to close that gap. The goal is not just
              to propose what should happen next. The goal is to build the next
              useful system and leave the client with something they can actually
              run, extend, and own.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <h2 className="mb-4 text-3xl font-black tracking-tight">
            Start with the right problem
          </h2>
          <p className="mb-6 max-w-3xl text-lg leading-relaxed text-gray-300">
            The first step is usually not "build everything." It is choosing
            the bottleneck worth fixing, the system worth integrating, and the
            scope that can reach production without turning into internal drag.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/en/ai-consulting"
              className="rounded-lg bg-hunter-green px-5 py-3 text-sm font-bold text-near-black hover:bg-white"
            >
              Explore AI consulting
            </Link>
            <Link
              href="/en/#contact"
              className="rounded-lg border border-white/10 px-5 py-3 text-sm font-bold text-white hover:border-hunter-green hover:text-hunter-green"
            >
              Book a strategy call
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
