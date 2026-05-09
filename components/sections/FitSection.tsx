import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export default function FitSection() {
  const t = useTranslations("Fit");
  const good = t.raw("good.items") as string[];
  const bad = t.raw("bad.items") as string[];

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

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-lg border border-hunter-green/30 bg-hunter-green/10 p-7">
            <h3 className="text-2xl font-black tracking-tight text-white">{t("good.title")}</h3>
            <ul className="mt-6 space-y-4">
              {good.map((item) => (
                <li key={item} className="flex gap-3 text-gray-200">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-hunter-green" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-white/10 bg-near-black/70 p-7">
            <h3 className="text-2xl font-black tracking-tight text-white">{t("bad.title")}</h3>
            <ul className="mt-6 space-y-4">
              {bad.map((item) => (
                <li key={item} className="flex gap-3 text-gray-300">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-hunter-orange" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-lg border border-white/10 bg-near-black p-6 md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <h3 className="text-2xl font-black tracking-tight text-white">{t("cta.title")}</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-400">{t("cta.desc")}</p>
          </div>
          <Link
            href="/#contact"
            className="mt-6 inline-flex rounded-lg bg-hunter-orange px-5 py-3 text-xs font-black uppercase tracking-widest text-near-black transition-colors hover:bg-white md:mt-0"
          >
            {t("cta.button")}
          </Link>
        </div>
      </div>
    </section>
  );
}
