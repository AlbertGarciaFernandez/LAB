import type { Metadata } from "next";
import PhysiotherapyClinicAutomationContent from "./PageContent";

const baseUrl = "https://www.codehunterlab.com";
const path = "/physiotherapy-clinic-automation-netherlands";

export async function generateMetadata({
    params,
}: {
    params: { locale: string };
}): Promise<Metadata> {
    const { locale } = params;
    return {
        title: "Physiotherapy Automation Netherlands — CodeHunter Lab",
        description: "Automate referral intake, appointment scheduling, patient drop-out detection, and reporting for your physiotherapy practice in the Netherlands. Custom integrations built in Leiden.",
        keywords: [
            "physiotherapy clinic automation Netherlands",
            "fysiotherapie praktijk automatisering",
            "Zorgdomein integration automation",
            "physiotherapy appointment reminder system",
            "patient drop-out prevention physiotherapy",
            "fysiotherapie CRM Nederland",
            "physiotherapy referral intake automation",
            "Intramed integration Netherlands",
            "Physiosoftware automation",
            "fysiotherapie software integratie",
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
            title: "Physiotherapy Automation Netherlands — CodeHunter Lab",
            description: "Custom automation and integration systems for physiotherapy practices in the Netherlands — referral intake, appointment reminders, drop-out detection, and practice analytics.",
            url: `${baseUrl}/${locale}${path}`,
            siteName: "CodeHunter Lab",
            type: "website",
            locale: locale === "es" ? "es_ES" : "en_US",
        },
    };
}

export default function Page() {
    return <PhysiotherapyClinicAutomationContent />;
}
