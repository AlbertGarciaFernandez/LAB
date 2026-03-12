import type { Metadata } from "next";
import AestheticClinicAutomationContent from "./PageContent";

const baseUrl = "https://www.codehunterlab.com";
const path = "/aesthetic-clinic-automation-netherlands";

export async function generateMetadata({
    params,
}: {
    params: { locale: string };
}): Promise<Metadata> {
    const { locale } = params;
    return {
        title: "Aesthetic Clinic Automation Netherlands — CodeHunter Lab",
        description: "Convert more aesthetic clinic inquiries into booked treatments. Custom CRM, lead nurturing, and booking automation for cosmetic and dermatology clinics in the Netherlands.",
        keywords: [
            "aesthetic clinic automation Netherlands",
            "cosmetic clinic CRM Netherlands",
            "lead nurturing aesthetic clinic",
            "dermatology clinic booking automation",
            "cosmetic clinic marketing ROI",
            "beauty clinic WhatsApp automation",
            "patient retention aesthetic clinic",
            "kliniek automatisering Nederland",
            "aesthetic clinic lead response system",
            "cosmetic clinic funnel automation Netherlands",
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
            title: "Aesthetic Clinic Automation Netherlands — CodeHunter Lab",
            description: "Turn more aesthetic clinic inquiries into booked treatments with custom CRM, lead nurturing, and booking automation systems. Built for cosmetic and dermatology clinics in the Netherlands.",
            url: `${baseUrl}/${locale}${path}`,
            siteName: "CodeHunter Lab",
            type: "website",
            locale: locale === "es" ? "es_ES" : "en_US",
        },
    };
}

export default function Page() {
    return <AestheticClinicAutomationContent />;
}
