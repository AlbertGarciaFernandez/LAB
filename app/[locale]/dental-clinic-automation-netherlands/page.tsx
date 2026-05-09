import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import DentalClinicAutomationContent from "./PageContent";

const baseUrl = "https://www.codehunterlab.com";
const path = "/dental-clinic-automation-netherlands";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  return {
    title: "Dental Clinic Automation Netherlands | Reduce No-Shows",
    description:
      "Reduce dental no-shows with WhatsApp reminders, patient recall automation, and practice software integrations for clinics in the Netherlands.",
    keywords: [
      "dental clinic automation Netherlands",
      "tandartspraktijk automatisering",
      "dental appointment reminder system",
      "dental CRM integration Netherlands",
      "no-show reduction dental practice",
      "patient recall system Netherlands",
      "WhatsApp patient communication dental",
      "dental practice management software integration",
      "Exquise ISOS integration",
      "dental lead automation Netherlands",
    ],
    alternates: {
      canonical: `${baseUrl}/${locale}${path}`,
      languages: {
        en: `${baseUrl}/en${path}`,
        es: `${baseUrl}/es${path}`,
        "x-default": `${baseUrl}/en${path}`,
      },
    },
    openGraph: {
      title: "Dental Clinic Automation Netherlands | Reduce No-Shows",
      description:
        "Reduce dental no-shows with WhatsApp reminders, patient recall automation, and practice software integrations for clinics in the Netherlands.",
      url: `${baseUrl}/${locale}${path}`,
      siteName: "CodeHunter Lab",
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
    },
  };
}

export default async function Page() {
  const t = await getTranslations("DentalClinic");

  const hero = {
    badge: t("Hero.badge"),
    titlePart1: t("Hero.title.part1"),
    titleHighlight: t("Hero.title.highlight"),
    titlePart2: t("Hero.title.part2"),
    description: t("Hero.description"),
    ctaPrimary: t("Hero.cta.primary"),
    ctaSecondary: t("Hero.cta.secondary"),
  };

  const languageNote = t("LanguageNote");

  const painPoints = {
    title: t("PainPoints.title"),
    items: t.raw("PainPoints.items") as Array<{
      emoji: string;
      title: string;
      desc: string;
    }>,
  };

  const solutions = {
    title: t("Solutions.title"),
    subtitle: t("Solutions.subtitle"),
    items: t.raw("Solutions.items") as Array<{
      emoji: string;
      title: string;
      desc: string;
      result: string;
    }>,
  };

  const scenarios = {
    title: t("Scenarios.title"),
    items: t.raw("Scenarios.items") as Array<{
      num: string;
      title: string;
      desc: string;
    }>,
  };

  const whyUs = {
    title: t("WhyUs.title"),
    points: t.raw("WhyUs.points") as Array<{ title: string; desc: string }>,
  };

  const faq = {
    title: t("FAQ.title"),
    subtitle: t("FAQ.subtitle"),
    questions: t.raw("FAQ.questions") as Array<{ q: string; a: string }>,
  };

  const cta = {
    label: t("CTA.label"),
    title: t("CTA.title"),
    desc: t("CTA.desc"),
    button: t("CTA.button"),
    subtext: t("CTA.subtext"),
  };

  const seo = {
    keywords: t("SEO.keywords"),
    extendedDesc: t("SEO.extendedDesc"),
  };

  return (
    <DentalClinicAutomationContent
      hero={hero}
      languageNote={languageNote}
      painPoints={painPoints}
      solutions={solutions}
      scenarios={scenarios}
      whyUs={whyUs}
      faq={faq}
      cta={cta}
      seo={seo}
    />
  );
}
