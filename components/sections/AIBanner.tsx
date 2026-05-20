import {
  RobotIcon,
  TrendUpIcon,
  LightningIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

const AIBanner = () => {
  const t = useTranslations("AIConsulting.Banner");

  return (
    <section className="relative w-full overflow-hidden border-y border-white/5 bg-[#0a0a0a] py-24">
      {/* Background Decor - Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      {/* Background Glows (Subtle) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-hunter-green/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-16 lg:flex-row">
          {/* Left Content */}
          <div className="relative z-10 space-y-8 lg:w-1/2">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2D4A3E] bg-[#1A2E26] px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#00E6A0] shadow-[0_0_10px_rgba(0,230,160,0.1)]">
              <LightningIcon size={12} weight="fill" />
              <span>{t("badge")}</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-6xl font-black leading-[0.9] tracking-tighter text-white md:text-8xl">
                {t("title")} <br />
                <span className="text-[#00E6A0]">{t("highlight")}</span>
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-gray-400">{t("description")}</p>
            </div>

            <div className="flex flex-col gap-5 sm:flex-row">
              <Link
                href="/ai-consulting"
                className="group inline-flex items-center justify-center rounded-lg bg-[#00E6A0] px-8 py-4 text-sm font-bold text-black transition-all duration-300 hover:bg-[#00cc8e] hover:shadow-[0_0_30px_rgba(0,230,160,0.3)]"
              >
                {t("cta1")}
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/ai-consulting#roi-calculator"
                className="inline-flex items-center justify-center rounded-lg border border-[#FF7A3C]/30 bg-transparent px-8 py-4 text-sm font-bold text-[#FF7A3C] transition-all duration-300 hover:border-[#FF7A3C] hover:bg-[#FF7A3C]/10 hover:text-[#FF7A3C]"
              >
                {t("cta2")}
              </Link>
            </div>
          </div>

          {/* Right Content - Value Cards */}
          <div className="relative z-10 w-full lg:w-5/12">
            <div className="grid gap-4">
              {[
                { title: t("cards.0.title"), desc: t("cards.0.desc"), icon: RobotIcon },
                { title: t("cards.1.title"), desc: t("cards.1.desc"), icon: LightningIcon },
                { title: t("cards.2.title"), desc: t("cards.2.desc"), icon: TrendUpIcon },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group flex items-center gap-5 rounded-2xl border border-white/5 bg-[#0F0F0F] p-6 transition-all duration-300 hover:border-[#00E6A0]/30"
                >
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border border-white/5 bg-[#131313] text-[#00E6A0] transition-all duration-300 group-hover:border-[#00E6A0]/20 group-hover:bg-[#00E6A0]/10">
                    <item.icon size={26} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBanner;
