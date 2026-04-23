import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export default function PackagesSection() {
    const t = useTranslations("Packages");
    const packages = t.raw("items") as Array<{
        name: string;
        price: string;
        timeline: string;
        desc: string;
        points: string[];
        href: string;
    }>;

    return (
        <section className="border-y border-white/5 bg-near-black px-6 py-24 text-white lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-3xl">
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-hunter-orange">
                            {t("badge")}
                        </p>
                        <h2 className="text-4xl font-black leading-none tracking-tighter md:text-6xl">
                            {t("title")}
                        </h2>
                        <p className="mt-5 text-lg leading-relaxed text-gray-300">
                            {t("subtitle")}
                        </p>
                    </div>
                    <Link
                        href="/#contact"
                        className="inline-flex w-fit rounded-lg bg-hunter-green px-5 py-3 text-xs font-black uppercase tracking-widest text-near-black transition-colors hover:bg-white"
                    >
                        {t("cta")}
                    </Link>
                </div>

                <div className="grid gap-5 lg:grid-cols-3">
                    {packages.map((item) => (
                        <article key={item.name} className="rounded-lg border border-white/10 bg-white/[0.03] p-7">
                            <h3 className="text-2xl font-black tracking-tight text-white">
                                {item.name}
                            </h3>
                            <p className="mt-4 text-3xl font-black tracking-tighter text-hunter-green">
                                {item.price}
                            </p>
                            <p className="mt-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                                {item.timeline}
                            </p>
                            <p className="mt-5 text-sm leading-relaxed text-gray-300">
                                {item.desc}
                            </p>
                            <ul className="mt-6 space-y-3">
                                {item.points.map((point) => (
                                    <li key={point} className="flex gap-3 text-sm text-gray-300">
                                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-hunter-orange" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href={item.href}
                                className="mt-7 inline-flex text-xs font-bold uppercase tracking-widest text-hunter-orange hover:text-white"
                            >
                                {t("learnMore")}
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

