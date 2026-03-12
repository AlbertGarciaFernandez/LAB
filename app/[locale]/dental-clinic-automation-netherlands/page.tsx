import type { Metadata } from "next";
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
        title: "Dental Clinic Automation Netherlands — CodeHunter Lab",
        description: "Reduce no-shows, automate patient communication, and connect your practice software. Custom automation systems for dental clinics in the Netherlands. Based in Leiden.",
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
            title: "Dental Clinic Automation Netherlands — CodeHunter Lab",
            description: "Custom automation systems for dental clinics in the Netherlands — reducing no-shows, automating patient communication, and connecting your practice software.",
            url: `${baseUrl}/${locale}${path}`,
            siteName: "CodeHunter Lab",
            type: "website",
            locale: locale === "es" ? "es_ES" : "en_US",
        },
    };
}

export default function Page() {
    return <DentalClinicAutomationContent />;
}
