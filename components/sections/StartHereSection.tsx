import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export default function StartHereSection() {
  const t = useTranslations("StartHere");
  const paths = t.raw("paths") as Array<{
    situation: string;
    title: string;
    desc: string;
    href: string;
    cta: string;
  }>;

  return (
    <section className="bg-surface-dark/20 px-6 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-hunter-green">
            {t("badge")}
          </p>
          <h2 className="text-4xl font-black leading-none tracking-tighter md:text-6xl">
            {t("title")}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-300">{t("subtitle")}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {paths.map((path) => (
            <Link
              key={path.title}
              href={path.href}
              className="group rounded-lg border border-white/10 bg-near-black/70 p-6 transition-colors hover:border-hunter-green/50"
            >
              <p className="mb-4 text-[11px] font-bold uppercase tracking-widest text-hunter-orange">
                {path.situation}
              </p>
              <h3 className="text-2xl font-black leading-tight tracking-tight text-white group-hover:text-hunter-green">
                {path.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">{path.desc}</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-hunter-green">
                {path.cta}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
