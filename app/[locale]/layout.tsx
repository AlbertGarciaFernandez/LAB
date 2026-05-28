import type { Metadata } from "next";
import "@/app/globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import CookieConsent from "@/components/ui/CookieConsent";
import GoogleAnalyticsConditional from "@/components/analytics/GoogleAnalyticsConditional";
import LocaleFooterGate from "@/components/layout/LocaleFooterGate";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { LOCALES, SCHEMA_AVAILABLE_LANGUAGES, normalizeLocale } from "@/utils/constants";
import { createPageMetadata } from "@/utils/metadata";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = Space_Grotesk({ subsets: ["latin"], variable: "--font-mono" });

export const viewport = {
  themeColor: "#0B0B0B",
};

const defaultTitle = "AI Automation Agency Netherlands | CodeHunter Lab";
const defaultDescription =
  "AI automation agency in the Netherlands for AI agents, n8n workflows, and custom integrations. Production systems, not demos. Based in Leiden.";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = normalizeLocale(params.locale);
  const t = await getTranslations({ locale, namespace: "metadata" });
  const metadata = createPageMetadata({
    locale,
    path: "",
    title: locale === "en" ? defaultTitle : t("title"),
    description: locale === "en" ? defaultDescription : t("description"),
    keywords: t.raw("keywords") as string[],
  });
  const metadataRobots =
    typeof metadata.robots === "object" && metadata.robots ? metadata.robots : {};

  return {
    ...metadata,
    icons: {
      icon: "/logo-hntr.svg",
      shortcut: "/logo-hntr.svg",
      apple: "/apple-touch-icon.png",
    },
    robots: {
      index: metadataRobots.index ?? true,
      follow: metadataRobots.follow ?? true,
      "max-snippet": 150,
      "max-image-preview": "large",
    },
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  const normalizedLocale = normalizeLocale(locale);

  return (
    <html lang={normalizedLocale} className={`${sans.variable} ${mono.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://formsubmit.co" />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-hunter-green focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-near-black focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        <NextIntlClientProvider messages={messages}>
          <MotionProvider>
            <div className="min-h-screen bg-near-black font-sans text-white">
              <div className="bg-noise" />
              <div id="main-content">{children}</div>
              <LocaleFooterGate />
              <CookieConsent />
              <GoogleAnalyticsConditional />
            </div>
          </MotionProvider>
        </NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.codehunterlab.com/#organization",
              name: "CodeHunter Lab",
              url: "https://www.codehunterlab.com",
              logo: "https://www.codehunterlab.com/logo-hntr.svg",
              foundingDate: "2024",
              sameAs: [
                "https://www.linkedin.com/company/codehunter-lab",
                "https://github.com/codehunter-lab",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+31-6-2940-5122",
                contactType: "customer service",
                areaServed: "NL",
                availableLanguage: SCHEMA_AVAILABLE_LANGUAGES,
              },
              knowsAbout: [
                "AI automation",
                "AI agents",
                "n8n workflows",
                "CRM integrations",
                "Next.js development",
              ],
              founder: {
                "@id": "https://www.codehunterlab.com/#founder",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.codehunterlab.com/#localbusiness",
              name: "CodeHunter Lab",
              description:
                "AI automation consultancy and software development studio in Leiden, Netherlands. Specializing in AI agents, n8n workflows, and custom web applications.",
              url: "https://www.codehunterlab.com",
              telephone: "+31-6-2940-5122",
              email: "hello@codehunterlab.com",
              logo: "https://www.codehunterlab.com/logo-hntr.svg",
              image: "https://www.codehunterlab.com/logo-hntr.webp",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Leiden",
                addressRegion: "Zuid-Holland",
                addressCountry: "NL",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 52.1601,
                longitude: 4.497,
              },
              areaServed: [
                { "@type": "City", name: "Leiden" },
                { "@type": "City", name: "Amsterdam" },
                { "@type": "City", name: "Rotterdam" },
                { "@type": "Country", name: "Netherlands" },
              ],
              priceRange: "€€€",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00",
              },
              sameAs: [
                "https://www.linkedin.com/company/codehunter-lab",
                "https://github.com/codehunter-lab",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://www.codehunterlab.com/#founder",
              name: "Albert Garcia",
              url: "https://www.linkedin.com/in/albertgarciafernandez/",
              image: "https://www.codehunterlab.com/logo-hntr.svg",
              jobTitle: "Founder",
              description:
                "Founder of CodeHunter Lab, an AI automation consultancy based in Leiden, Netherlands. Specializes in AI agents, n8n workflows, and Next.js development for European businesses.",
              worksFor: {
                "@id": "https://www.codehunterlab.com/#organization",
              },
              alumniOf: [
                {
                  "@type": "EducationalOrganization",
                  name: "Technical University",
                  url: "https://www.tudelft.nl",
                },
              ],
              sameAs: [
                "https://www.linkedin.com/in/albertgarciafernandez/",
                "https://github.com/codehunter-lab",
                "https://www.codehunterlab.com",
              ],
              knowsAbout: [
                "AI automation",
                "AI consulting",
                "n8n workflow automation",
                "conversational AI",
                "WhatsApp Business API",
                "Next.js development",
                "React",
                "system integration",
                "CRM automation",
                "AI agent development",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.codehunterlab.com/#website",
              name: "CodeHunter Lab",
              url: "https://www.codehunterlab.com",
              publisher: {
                "@type": "Organization",
                name: "CodeHunter Lab",
                logo: "https://www.codehunterlab.com/logo-hntr.svg",
              },
              inLanguage: LOCALES,
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://www.codehunterlab.com/en?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
