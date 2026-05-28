import Link from "next/link";
import { insights } from "@/content/insights";

export default function InsightsSection() {
  const featuredSlugs = new Set([
    "ai-agent-consulting",
    "whatsapp-automation-netherlands",
    "n8n-vs-zapier-netherlands",
    "ai-system-integration",
    "ai-automation-to-autonomous-ai-systems"
  ]);
  const featuredInsights = insights.filter((article) => featuredSlugs.has(article.slug));

  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-surface-dark/20 px-6 py-24 lg:px-8">
      {/* Massive Background Text */}
      <div className="pointer-events-none absolute left-0 top-10 w-full overflow-hidden opacity-[0.03] flex justify-center">
        <h2 className="whitespace-nowrap text-[12rem] font-black leading-none text-white md:text-[20rem]">
          INSIGHTS
        </h2>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-hunter-green">
              Insights
            </p>
            <h2 className="text-4xl font-black leading-none tracking-tighter text-white md:text-6xl">
              Practical AI automation field notes.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-300">
              Guides on AI agents, WhatsApp automation, n8n strategy, and operational systems for
              businesses deciding what to ship next.
            </p>
          </div>
          <Link
            href="/en/insights"
            className="inline-flex w-fit items-center justify-center rounded-lg border border-hunter-green/30 px-5 py-3 text-xs font-bold uppercase tracking-widest text-hunter-green transition-colors hover:bg-hunter-green hover:text-near-black"
          >
            View all insights
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {featuredInsights.map((article, idx) => {
            const bentoClass =
              idx < 2
                ? "lg:col-span-3 sm:col-span-2"
                : idx === 4
                  ? "lg:col-span-2 sm:col-span-2"
                  : "lg:col-span-2 sm:col-span-1";

            return (
              <article
                key={article.slug}
                className={`group/card relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.05] bg-near-black p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-hunter-green/40 hover:bg-[#0B0B0B] hover:shadow-[0_25px_50px_-12px_rgba(0,230,162,0.25)] ${bentoClass}`}
              >
                {/* Subtle inner glow */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-shadow duration-500 group-hover/card:shadow-[inset_0_1px_0_0_rgba(0,230,162,0.2)]" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-hunter-green/5 to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
                
                <p className="relative z-10 mb-4 text-[11px] font-bold uppercase tracking-widest text-hunter-green">
                  {article.category}
                </p>
                <h3 className="relative z-10 mb-4 text-2xl font-black leading-tight tracking-tight text-white transition-all duration-500 group-hover/card:text-hunter-green group-hover/card:drop-shadow-[0_0_12px_rgba(0,230,162,0.5)]">
                  <Link href={`/en/insights/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>
                <p className="relative z-10 mb-6 flex-1 text-sm leading-relaxed text-gray-400">
                  {article.description}
                </p>
                <Link
                  href={`/en/insights/${article.slug}`}
                  className="relative z-10 mt-auto text-xs font-bold uppercase tracking-widest text-hunter-orange hover:text-white"
                >
                  Read article
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
