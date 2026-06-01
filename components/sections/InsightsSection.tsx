"use client";

import { Link } from "@/navigation";
import { m } from "framer-motion";
import { insights } from "@/content/insights";

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function InsightsSection() {
  const featuredSlugs = new Set([
    "ai-agent-consulting",
    "whatsapp-automation-netherlands",
    "n8n-vs-zapier-netherlands",
    "ai-system-integration",
    "ai-automation-to-autonomous-ai-systems",
  ]);
  const featuredInsights = insights.filter((article) => featuredSlugs.has(article.slug));

  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-surface-dark/20 px-6 py-24 lg:px-8">
      <div className="pointer-events-none absolute left-0 top-10 flex w-full justify-center overflow-hidden opacity-[0.03]">
        <h2 className="whitespace-nowrap text-[12rem] font-black leading-none text-white md:text-[20rem]">
          INSIGHTS
        </h2>
      </div>

      <m.div className="relative z-10 mx-auto max-w-7xl">
        <m.div
          className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
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
            href="/insights"
            locale="en"
            className="inline-flex w-fit items-center justify-center rounded-lg border border-hunter-green/30 px-5 py-3 text-xs font-bold uppercase tracking-widest text-hunter-green transition-colors hover:bg-hunter-green hover:text-near-black"
          >
            View all insights
          </Link>
        </m.div>

        <m.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredInsights.map((article, idx) => {
            const bentoClass =
              idx < 2
                ? "lg:col-span-3 sm:col-span-2"
                : idx === 4
                  ? "lg:col-span-2 sm:col-span-2"
                  : "lg:col-span-2 sm:col-span-1";

            return (
              <m.article
                key={article.slug}
                variants={slideUp}
                className={`group/card relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.05] bg-near-black p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-hunter-green/40 hover:bg-[#0B0B0B] hover:shadow-[0_25px_50px_-12px_rgba(0,230,162,0.25)] ${bentoClass}`}
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-shadow duration-500 group-hover/card:shadow-[inset_0_1px_0_0_rgba(0,230,162,0.2)]" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-hunter-green/5 to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />

                <p className="relative z-10 mb-4 text-[11px] font-bold uppercase tracking-widest text-hunter-green">
                  {article.category}
                </p>
                <h3 className="relative z-10 mb-4 text-2xl font-black leading-tight tracking-tight text-white transition-all duration-500 group-hover/card:text-hunter-green group-hover/card:drop-shadow-[0_0_12px_rgba(0,230,162,0.5)]">
                  <Link href={`/insights/${article.slug}`} locale="en">
                    {article.title}
                  </Link>
                </h3>
                <p className="relative z-10 mb-6 flex-1 text-sm leading-relaxed text-gray-400">
                  {article.description}
                </p>
                <Link
                  href={`/insights/${article.slug}`}
                  locale="en"
                  className="relative z-10 mt-auto text-xs font-bold uppercase tracking-widest text-hunter-orange hover:text-white"
                >
                  Read article
                </Link>
              </m.article>
            );
          })}
        </m.div>
      </m.div>
    </section>
  );
}
