import type { Metadata } from "next";
import NextJsDevelopmentAgencyContent from "./PageContent";

const baseUrl = "https://www.codehunterlab.com";
const path = "/nextjs-development-agency";

export async function generateMetadata({
    params,
}: {
    params: { locale: string };
}): Promise<Metadata> {
    const { locale } = params;
    return {
        title: "Next.js Agency Europe | App Router, Migration & Performance",
        description: "Hire a Next.js agency in Europe for App Router, React Server Components, migrations, and performance work on production web apps.",
        keywords: [
            "Next.js development agency",
            "hire Next.js developer Netherlands",
            "Next.js consulting Netherlands",
            "React Next.js agency Leiden",
            "Next.js App Router specialist",
            "server components consulting",
            "Next.js migration service",
            "TypeScript agency Netherlands",
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
            title: "Next.js Agency Europe | App Router, Migration & Performance",
            description: "Hire a Next.js agency in Europe for App Router, React Server Components, migrations, and performance work on production web apps.",
            url: `${baseUrl}/${locale}${path}`,
            siteName: "CodeHunter Lab",
            type: "website",
            locale: locale === "es" ? "es_ES" : "en_US",
        },
    };
}

export default function Page() {
    return <NextJsDevelopmentAgencyContent />;
}
