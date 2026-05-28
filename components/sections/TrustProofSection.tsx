import { useTranslations } from "next-intl";

export default function TrustProofSection() {
  const t = useTranslations("TrustProof");
  const metricsRaw = t.raw("metrics");
  const proofRaw = t.raw("proof");

  const metrics = Array.isArray(metricsRaw)
    ? (metricsRaw as Array<{ value: string; label: string; note: string }>)
    : [];
  const proof = Array.isArray(proofRaw) ? (proofRaw as Array<{ title: string; desc: string }>) : [];

  return (
    <section className="relative bg-near-black px-6 py-24 text-white lg:px-8 md:py-32">
      {/* Top gradient separator */}
      <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Massive Background Text */}
      <div className="pointer-events-none absolute left-0 top-10 w-full overflow-hidden opacity-[0.03] flex justify-center">
        <h2 className="whitespace-nowrap text-[12rem] font-black leading-none text-white md:text-[20rem]">
          TRUST
        </h2>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-hunter-orange">
              {t("badge")}
            </p>
            <h2 className="text-4xl font-black leading-none tracking-tighter md:text-6xl">
              {t("title")}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-300">{t("subtitle")}</p>
          </div>

          {metrics.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="group/card relative overflow-hidden rounded-3xl border border-white/[0.05] bg-near-black p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-hunter-green/40 hover:bg-[#0B0B0B] hover:shadow-[0_25px_50px_-12px_rgba(0,230,162,0.2)]"
                >
                  {/* Subtle inner glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-shadow duration-500 group-hover/card:shadow-[inset_0_1px_0_0_rgba(0,230,162,0.2)]" />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-hunter-green/5 to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
                  <div className="relative z-10 text-3xl font-black tracking-tighter text-hunter-green transition-all duration-500 group-hover/card:drop-shadow-[0_0_12px_rgba(0,230,162,0.5)]">
                    {metric.value}
                  </div>
                  <div className="relative z-10 mt-2 text-sm font-bold text-white transition-colors duration-500 group-hover/card:text-hunter-green">{metric.label}</div>
                  <p className="relative z-10 mt-2 text-xs leading-relaxed text-gray-400">{metric.note}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {proof.length > 0 && (
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {proof.map((item) => (
              <article
                key={item.title}
                className="group/card relative overflow-hidden rounded-3xl border border-white/[0.05] bg-near-black p-10 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-hunter-green/40 hover:bg-[#0B0B0B] hover:shadow-[0_25px_50px_-12px_rgba(0,230,162,0.2)]"
              >
                {/* Subtle inner glow */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-shadow duration-500 group-hover/card:shadow-[inset_0_1px_0_0_rgba(0,230,162,0.2)]" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-hunter-green/5 to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
                <h3 className="relative z-10 text-lg font-black tracking-tight text-white transition-all duration-500 group-hover/card:text-hunter-green group-hover/card:drop-shadow-[0_0_12px_rgba(0,230,162,0.5)]">{item.title}</h3>
                <p className="relative z-10 mt-3 text-sm leading-relaxed text-gray-400">{item.desc}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
