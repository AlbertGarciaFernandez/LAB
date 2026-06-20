import type { Metadata } from "next";
import ServiceSchema from "@/components/ui/ServiceSchema";
import { createPageMetadata, localizedUrl } from "@/utils/metadata";
import { getLocaleValue } from "../_shared/localeCopy";
import FrontendAuditProductReviewContent from "./PageContent";

const path = "/frontend-audit-product-review";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return createPageMetadata({
    locale: params.locale,
    path,
    title: getLocaleValue(params.locale, {
      en: "Frontend Audit & Product Review | React and Next.js",
      es: "Auditoría frontend y revisión de producto | React y Next.js",
      nl: "Frontend audit en productreview | React en Next.js",
    }),
    description: getLocaleValue(params.locale, {
      en: "Senior frontend audits for React and Next.js products: UX clarity, performance, accessibility, maintainability, and product recommendations.",
      es: "Auditorías frontend senior para productos React y Next.js: UX, rendimiento, accesibilidad, mantenibilidad y recomendaciones de producto.",
      nl: "Senior frontend audits voor React- en Next.js-producten: UX, performance, toegankelijkheid, onderhoudbaarheid en productadvies.",
    }),
    keywords: getLocaleValue(params.locale, {
      en: ["frontend audit", "React product review", "Next.js audit", "UX technical audit"],
      es: ["auditoría frontend", "revisión producto React", "auditoría Next.js"],
      nl: ["frontend audit", "React productreview", "Next.js audit"],
    }),
  });
}

export default function Page({ params }: { params: { locale: string } }) {
  const name = getLocaleValue(params.locale, {
    en: "Frontend Audit & Product Review",
    es: "Auditoría frontend y revisión de producto",
    nl: "Frontend audit en productreview",
  });

  return (
    <>
      <ServiceSchema
        name={name}
        description={getLocaleValue(params.locale, {
          en: "Frontend and product audit for React and Next.js applications.",
          es: "Auditoría frontend y de producto para aplicaciones React y Next.js.",
          nl: "Frontend- en productaudit voor React- en Next.js-applicaties.",
        })}
        url={localizedUrl(params.locale, path)}
        serviceType={name}
      />
      <FrontendAuditProductReviewContent locale={params.locale} />
    </>
  );
}
