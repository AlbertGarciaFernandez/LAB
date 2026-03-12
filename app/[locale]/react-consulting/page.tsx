import type { Metadata } from "next";
import ReactConsultingContent from "./PageContent";

const baseUrl = "https://www.codehunterlab.com";
const path = "/react-consulting";

export async function generateMetadata({
    params,
}: {
    params: { locale: string };
}): Promise<Metadata> {
    const { locale } = params;
    return {
        title: "React Consulting Netherlands — CodeHunter Lab",
        description: "Senior React consulting in the Netherlands. Codebase audits, architecture design, and React migrations. We join your team and fix the hard problems. Based in Leiden.",
        keywords: [
            "React consulting Netherlands",
            "React architecture consultant",
            "hire React developer Netherlands",
            "React codebase audit",
            "React refactoring services",
            "senior React developer Leiden",
            "React performance consulting",
            "frontend architecture Netherlands",
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
            title: "React Consulting Netherlands — CodeHunter Lab",
            description: "Senior React consulting in the Netherlands. Codebase audits, architecture design, and React migrations. We join your team and fix the hard problems. Based in Leiden.",
            url: `${baseUrl}/${locale}${path}`,
            siteName: "CodeHunter Lab",
            type: "website",
            locale: locale === "es" ? "es_ES" : "en_US",
        },
    };
}

export default function Page() {
    return <ReactConsultingContent />;
}
