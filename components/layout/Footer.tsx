import React from "react";
import { Link } from "@/navigation";
import { LinkedinLogoIcon, EnvelopeIcon, ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { useLocale, useTranslations } from "next-intl";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const locale = useLocale();
  const t = useTranslations("Footer");

  return (
    <footer className="relative overflow-hidden bg-near-black px-6 pb-12 pt-24">
      {/* Background Glows */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-hunter-green/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-hunter-orange/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="group inline-block">
              <h3 className="text-3xl font-black uppercase tracking-tighter text-white transition-transform duration-300 group-hover:scale-105">
                CodeHunter <span className="text-hunter-green">Lab</span>
              </h3>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-gray-400">
              {t("brandDescription")}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/albertgarciafernandez/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Albert Garcia on LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:border-hunter-green hover:bg-hunter-green/10 hover:text-white"
              >
                <LinkedinLogoIcon aria-hidden="true" size={20} />
              </a>
              <a
                href="mailto:albert@codehunterlab.com"
                aria-label="Email CodeHunter Lab"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:border-hunter-orange hover:bg-hunter-orange/10 hover:text-white"
              >
                <EnvelopeIcon aria-hidden="true" size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-8 text-xs font-bold uppercase tracking-widest text-white">
              {t("Services.title")}
            </h4>
            <ul className="space-y-4">
              {[
                { key: "AIConsulting", href: "/ai-consulting" },
                { key: "ReactConsulting", href: "/react-consulting" },
                { key: "NextJS", href: "/nextjs-development-agency" },
                { key: "ITIntegration", href: "/it-system-integration" },
                { key: "InternalTools", href: "/services/custom-internal-tools-development" },
              ].map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white"
                  >
                    {t(`Services.items.${item.key}`)}
                    <ArrowUpRightIcon
                      size={12}
                      className="-translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h4 className="mb-8 text-xs font-bold uppercase tracking-widest text-white">
              {t("Expertise.title")}
            </h4>
            <ul className="space-y-4">
              {[
                { key: "AIAgents", href: "/expertise/ai-agents-automation" },
                { key: "n8nMigration", href: "/expertise/n8n-migration-consulting" },
                { key: "SystemArchitecture", href: "/expertise/system-architecture-design" },
                { key: "CustomLLMs", href: "/expertise/custom-llm-development" },
              ].map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white"
                  >
                    {t(`Expertise.items.${item.key}`)}
                    <ArrowUpRightIcon
                      size={12}
                      className="-translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="mb-8 text-xs font-bold uppercase tracking-widest text-white">
              {t("Industries.title")}
            </h4>
            <ul className="space-y-4">
              {[
                { key: "AIAutomationNL", href: "/ai-automation-consulting-netherlands" },
                { key: "DentalNL", href: "/dental-clinic-automation-netherlands" },
                { key: "AestheticNL", href: "/aesthetic-clinic-automation-netherlands" },
                { key: "PhysiotherapyNL", href: "/physiotherapy-clinic-automation-netherlands" },
                { key: "VeterinaryNL", href: "/veterinary-clinic-automation-netherlands" },
                { key: "AccountingNL", href: "/accounting-firm-automation-netherlands" },
                { key: "RealEstateNL", href: "/real-estate-automation-netherlands" },
              ].map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white"
                  >
                    {t(`Industries.items.${item.key}`)}
                    <ArrowUpRightIcon
                      size={12}
                      className="-translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Insights */}
          <div>
            <h4 className="mb-8 text-xs font-bold uppercase tracking-widest text-white">
              {t("Insights.title")}
            </h4>
            <ul className="space-y-4">
              {[
                {
                  label: t("Insights.items.automation"),
                  href: `/${locale}/insights`,
                },
                {
                  label: t("Insights.items.n8n"),
                  href: "/n8n-consultant-netherlands",
                },
                {
                  label: t("Insights.items.voice"),
                  href: "/ai-voice-agents-netherlands",
                },
                {
                  label: t("Insights.items.whatsapp"),
                  href: "/whatsapp-automation-netherlands",
                },
                {
                  label: t("Insights.items.about"),
                  href: "/about",
                },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white"
                  >
                    {item.label}
                    <ArrowUpRightIcon
                      aria-hidden="true"
                      size={12}
                      className="-translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Availability */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-hunter-green" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-hunter-green">
                {t("Availability.nextOpening", { date: "Q1 2026" })}
              </span>
            </div>
            <h4 className="mb-2 text-lg font-bold text-white">{t("Availability.title")}</h4>
            <p className="mb-6 text-xs text-gray-400">{t("Availability.subtitle")}</p>
            <a
              href="mailto:albert@codehunterlab.com"
              className="block w-full rounded-lg border border-hunter-orange/20 bg-hunter-orange/10 py-3 text-center text-xs font-bold uppercase tracking-widest text-hunter-orange transition-all hover:bg-hunter-orange hover:text-near-black"
            >
              {t("Availability.button")}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-12 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-8">
            <p className="text-[11px] font-medium uppercase tracking-widest text-gray-500">
              &copy; {currentYear} {t("Copyright.rights")}
            </p>
            <div className="flex items-center gap-3">
              <Link
                href={`/${locale}/insights`}
                className="text-[11px] font-bold uppercase tracking-widest text-hunter-green/80 transition-colors hover:text-hunter-green"
              >
                {t("Copyright.insights")}
              </Link>
              <span className="text-gray-600">·</span>
              <Link
                href="/about"
                className="text-[11px] font-bold uppercase tracking-widest text-hunter-green/80 transition-colors hover:text-hunter-green"
              >
                {t("Copyright.about")}
              </Link>
              <span className="text-gray-600">·</span>
              <Link
                href="/software-development-leiden"
                className="text-[11px] font-bold uppercase tracking-widest text-hunter-green/80 transition-colors hover:text-hunter-green"
              >
                {t("Copyright.locationLeiden")}
              </Link>
              <span className="text-gray-600">·</span>
              <Link
                href="/#contact"
                className="text-[11px] font-bold uppercase tracking-widest text-hunter-green/80 transition-colors hover:text-hunter-green"
              >
                {t("Copyright.locationSpain")}
              </Link>
            </div>
          </div>

          <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-500">
            {t("Copyright.developedBy")}{" "}
            <span className="cursor-default font-bold text-gray-300 transition-colors hover:text-hunter-orange">
              Albert Garcia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
