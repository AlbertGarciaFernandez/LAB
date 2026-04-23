import Link from "next/link";
import { insights } from "@/content/insights";

export default function InsightsSection() {
    const featuredSlugs = new Set([
        "ai-agent-consulting",
        "whatsapp-automation-netherlands",
        "n8n-vs-zapier-netherlands",
    ]);
    const featuredInsights = insights.filter((article) => featuredSlugs.has(article.slug));

    return (
        <section className="relative overflow-hidden border-y border-white/5 bg-surface-dark/20 px-6 py-24 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-3xl">
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-hunter-green">
                            Insights
                        </p>
                        <h2 className="text-4xl font-black leading-none tracking-tighter text-white md:text-6xl">
                            Practical AI automation field notes.
                        </h2>
                        <p className="mt-5 text-lg leading-relaxed text-gray-300">
                            Guides on AI agents, WhatsApp automation, n8n strategy, and operational systems for businesses deciding what to ship next.
                        </p>
                    </div>
                    <Link
                        href="/en/insights"
                        className="inline-flex w-fit items-center justify-center rounded-lg border border-hunter-green/30 px-5 py-3 text-xs font-bold uppercase tracking-widest text-hunter-green transition-colors hover:bg-hunter-green hover:text-near-black"
                    >
                        View all insights
                    </Link>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                    {featuredInsights.map((article) => (
                        <article
                            key={article.slug}
                            className="rounded-lg border border-white/10 bg-near-black/60 p-6 transition-colors hover:border-hunter-green/40"
                        >
                            <p className="mb-4 text-[11px] font-bold uppercase tracking-widest text-hunter-green">
                                {article.category}
                            </p>
                            <h3 className="mb-4 text-2xl font-black leading-tight tracking-tight text-white">
                                <Link href={`/en/insights/${article.slug}`} className="hover:text-hunter-green">
                                    {article.title}
                                </Link>
                            </h3>
                            <p className="mb-6 text-sm leading-relaxed text-gray-400">
                                {article.description}
                            </p>
                            <Link
                                href={`/en/insights/${article.slug}`}
                                className="text-xs font-bold uppercase tracking-widest text-hunter-orange hover:text-white"
                            >
                                Read article
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
