import { useTranslations } from "next-intl";

export default function TrustProofSection() {
    const t = useTranslations("TrustProof");
    const metrics = t.raw("metrics") as Array<{ value: string; label: string; note: string }>;
    const proof = t.raw("proof") as Array<{ title: string; desc: string }>;

    return (
        <section className="border-y border-white/5 bg-near-black px-6 py-20 text-white lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    <div>
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-hunter-orange">
                            {t("badge")}
                        </p>
                        <h2 className="text-4xl font-black leading-none tracking-tighter md:text-6xl">
                            {t("title")}
                        </h2>
                        <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-300">
                            {t("subtitle")}
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                        {metrics.map((metric) => (
                            <div key={metric.label} className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
                                <div className="text-3xl font-black tracking-tighter text-hunter-green">
                                    {metric.value}
                                </div>
                                <div className="mt-2 text-sm font-bold text-white">
                                    {metric.label}
                                </div>
                                <p className="mt-2 text-xs leading-relaxed text-gray-400">
                                    {metric.note}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                    {proof.map((item) => (
                        <article key={item.title} className="rounded-lg border border-white/10 bg-surface-dark/30 p-6">
                            <h3 className="text-lg font-black tracking-tight text-white">
                                {item.title}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-gray-400">
                                {item.desc}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

