"use client";

import { useTranslations } from "next-intl";
import { m } from "framer-motion";

const StarRating = () => (
  <div className="mb-4 flex gap-1">
    {["s1", "s2", "s3", "s4", "s5"].map((key) => (
      <svg key={key} className="h-4 w-4 fill-hunter-orange text-hunter-orange" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const QuoteMark = ({ color }: { color: "green" | "orange" }) => (
  <span
    className={`select-none text-6xl font-black leading-none ${color === "green" ? "text-hunter-green/20" : "text-hunter-orange/20"}`}
  >
    {'"'}
  </span>
);

export default function TestimonialsSection() {
  const t = useTranslations("Testimonials");
  const items = t.raw("items") as Array<{
    quote: string;
    name: string;
    role: string;
    company: string;
    initials: string;
    color: "green" | "orange";
  }>;

  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-near-black py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-hunter-green/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-block rounded-full border border-hunter-green/20 bg-hunter-green/10 px-4 py-1.5 font-mono text-xs tracking-widest text-hunter-green">
            {t("badge")}
          </div>
          <h2 className="mb-4 text-3xl font-black uppercase tracking-tighter text-white md:text-5xl">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-400">{t("subtitle")}</p>
        </m.div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item, idx) => (
            <m.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-white/3 group relative flex flex-col rounded-2xl border p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${
                item.color === "green"
                  ? "border-white/8 hover:border-hunter-green/30 hover:shadow-[0_8px_32px_rgba(0,230,162,0.08)]"
                  : "border-white/8 hover:border-hunter-orange/30 hover:shadow-[0_8px_32px_rgba(255,122,60,0.08)]"
              }`}
            >
              <QuoteMark color={item.color} />
              <StarRating />

              <p className="mb-8 flex-1 text-base leading-relaxed text-gray-200">{item.quote}</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-black ${
                    item.color === "green"
                      ? "border border-hunter-green/20 bg-hunter-green/15 text-hunter-green"
                      : "border border-hunter-orange/20 bg-hunter-orange/15 text-hunter-orange"
                  }`}
                >
                  {item.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    {item.role} · {item.company}
                  </p>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
