import type { Metadata } from "next";
import AIAutomationNetherlandsContent from "./PageContent";

const baseUrl = "https://www.codehunterlab.com";
const path = "/ai-automation-consulting-netherlands";

export async function generateMetadata({
    params,
}: {
    params: { locale: string };
}): Promise<Metadata> {
    const { locale } = params;
    return {
        title: "AI Automation Consultancy Netherlands | ROI-Driven AI Agents",
        description: "Premier AI automation agency in Leiden & Netherlands. We build WhatsApp Bots, AI Voice Agents, and custom n8n workflows that save money and increase revenue.",
        keywords: ["AI agency Leiden", "AI automation consultancy Netherlands", "WhatsApp Bot Business", "AI Voice Agent Netherlands", "n8n automation consultant"],
        alternates: {
            canonical: `${baseUrl}/${locale}${path}`,
            languages: {
                en: `${baseUrl}/en${path}`,
                es: `${baseUrl}/es${path}`,
                "x-default": `${baseUrl}/en${path}`,
            },
        },
        openGraph: {
            title: "AI Automation Consultancy Netherlands | ROI-Driven AI Agents",
            description: "Premier AI automation agency in Leiden & Netherlands. We build WhatsApp Bots, AI Voice Agents, and custom n8n workflows that save money and increase revenue.",
            url: `${baseUrl}/${locale}${path}`,
            siteName: "CodeHunter Lab",
            type: "website",
            locale: locale === "es" ? "es_ES" : "en_US",
        },
    };
}

export default function Page() {
    return <AIAutomationNetherlandsContent />;
}
