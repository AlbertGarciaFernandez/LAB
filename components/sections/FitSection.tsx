import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export default function FitSection() {
  const t = useTranslations("Fit");
  const goodRaw = t.raw("good.items");
  const badRaw = t.raw("bad.items");
  const good = Array.isArray(goodRaw) ? (goodRaw as string[]) : [];
  const bad = Array.isArray(badRaw) ? (badRaw as string[]) : [];

  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#080A09] px-6 py-24 text-white lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,rgba(0,230,162,0.08),transparent_28%,transparent_72%,rgba(255,122,60,0.08))]" />
      <div className="pointer-events-none absolute left-0 top-10 w-full overflow-hidden opacity-[0.05]">
        <h2 className="whitespace-nowrap text-[12rem] font-black leading-none text-white md:text-[20rem]">
          {t("bgText")}
        </h2>
      </div>

      <div className="pointer-events-none absolute bottom-4 right-2 overflow-hidden opacity-[0.05] md:bottom-6 md:right-4">
        <h2 className="whitespace-nowrap text-[12rem] font-black leading-none text-white md:text-[20rem]">
          {t("bgNumber")}
        </h2>
      </div>
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[82vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-hunter-green/40 to-transparent" />
      <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full border border-hunter-orange/10" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 rounded-full border border-hunter-green/10" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-hunter-orange">
              {t("badge")}
            </p>
            <h2 className="max-w-3xl text-4xl font-black leading-[0.92] tracking-tighter md:text-6xl">
              {t("title")}
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-300 lg:justify-self-end lg:border-l lg:border-white/10 lg:pl-8">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <div className="group relative overflow-hidden rounded-[2rem] border border-hunter-green/25 bg-hunter-green/[0.07] p-7 shadow-[0_30px_80px_-48px_rgba(0,230,162,0.8)] md:p-9">
            <div className="pointer-events-none absolute -right-10 -top-12 text-[10rem] font-black leading-none text-hunter-green/[0.04] transition-colors group-hover:text-hunter-green/[0.08]">
              YES
            </div>
            <div className="relative z-10 flex items-start justify-between gap-6 border-b border-hunter-green/15 pb-6">
              <h3 className="text-2xl font-black tracking-tight text-white">{t("good.title")}</h3>
              <span className="rounded-full border border-hunter-green/25 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-hunter-green">
                Fit
              </span>
            </div>
            {good.length > 0 && (
              <ul className="relative z-10 mt-7 divide-y divide-hunter-green/10">
                {good.map((item, index) => (
                  <li
                    key={item}
                    className="grid grid-cols-[2.75rem_1fr] gap-4 py-4 text-gray-200 first:pt-0 last:pb-0"
                  >
                    <span className="font-mono text-xs font-black text-hunter-green">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-near-black/80 p-7 shadow-[0_30px_80px_-52px_rgba(255,122,60,0.7)] md:p-9">
            <div className="pointer-events-none absolute -right-10 -top-12 text-[10rem] font-black leading-none text-hunter-orange/[0.04] transition-colors group-hover:text-hunter-orange/[0.08]">
              NO
            </div>
            <div className="relative z-10 flex items-start justify-between gap-6 border-b border-white/10 pb-6">
              <h3 className="text-2xl font-black tracking-tight text-white">{t("bad.title")}</h3>
              <span className="rounded-full border border-hunter-orange/25 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-hunter-orange">
                Filter
              </span>
            </div>
            {bad.length > 0 && (
              <ul className="relative z-10 mt-7 divide-y divide-white/10">
                {bad.map((item, index) => (
                  <li
                    key={item}
                    className="grid grid-cols-[2.75rem_1fr] gap-4 py-4 text-gray-300 first:pt-0 last:pb-0"
                  >
                    <span className="font-mono text-xs font-black text-hunter-orange">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:flex md:items-center md:justify-between md:gap-8 md:p-8">
          <div>
            <h3 className="text-2xl font-black tracking-tight text-white">{t("cta.title")}</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-400">{t("cta.desc")}</p>
          </div>
          <Link
            href="#contact"
            className="mt-6 inline-flex rounded-lg bg-hunter-orange px-5 py-3 text-xs font-black uppercase tracking-widest text-near-black transition-colors hover:bg-white md:mt-0"
          >
            {t("cta.button")}
          </Link>
        </div>
      </div>
    </section>
  );
}
