import type { Metadata } from "next";
import "@/app/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import CookieConsent from "@/components/ui/CookieConsent";
import GoogleAnalyticsConditional from "@/components/analytics/GoogleAnalyticsConditional";
import LocaleFooterGate from "@/components/layout/LocaleFooterGate";
import { MotionProvider } from "@/components/providers/MotionProvider";


//const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
//const mono = Space_Grotesk({ subsets: ["latin"], variable: "--font-mono" });

export const viewport = {
  themeColor: "#0B0B0B",
};

const baseUrl = "https://www.codehunterlab.com";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
    return {
        metadataBase: new URL(baseUrl),
        icons: {
          icon: "/codehunter.logo.png",
          shortcut: "/codehunter.logo.png",
          apple: "/codehunter.logo.png",
        },
        title: "AI Automation Agency Netherlands | CodeHunter Lab",
        description:
          "AI automation agency in the Netherlands for AI agents, n8n workflows, and custom integrations. Production systems, not demos. Based in Leiden.",
        keywords: [
          "AI automation agency Netherlands",
          "AI automation consulting Netherlands",
          "AI agents Netherlands",
          "n8n workflows Netherlands",
          "workflow automation agency Netherlands",
          "AI system integration",
          "custom AI integrations Netherlands",
          "AI automation Leiden",
          "WhatsApp automation Netherlands",
          "AI voice agents Netherlands",
        ],
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        es: `${baseUrl}/es`,
        "x-default": `${baseUrl}/en`,
      },
        },
        openGraph: {
          title: "AI Automation Agency Netherlands | CodeHunter Lab",
          description:
            "AI automation agency in the Netherlands for AI agents, n8n workflows, and custom integrations. Production systems, not demos. Based in Leiden.",
          url: `${baseUrl}/${locale}`,
          siteName: "CodeHunter Lab",
          type: "website",
          locale: locale === "es" ? "es_ES" : "en_US",
          images: [
            {
              url: `${baseUrl}/${locale}/opengraph-image`,
              width: 1200,
              height: 630,
              alt: "AI Automation Agency Netherlands | CodeHunter Lab",
            },
          ],
        },
        twitter: {
          card: "summary_large_image",
          title: "AI Automation Agency Netherlands | CodeHunter Lab",
          description:
            "AI automation agency in the Netherlands for AI agents, n8n workflows, and custom integrations. Production systems, not demos.",
          images: [`${baseUrl}/${locale}/opengraph-image`],
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
  return (
    <html lang={locale} className="sans mono">
      <body>
        <NextIntlClientProvider messages={messages}>
          <MotionProvider>
            <div className="bg-near-black text-white min-h-screen font-sans">
              <div className="bg-noise" />
              {children}
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
                    availableLanguage: ["English", "Spanish", "Dutch"],
                  },
                  knowsAbout: [
                    "AI automation",
                    "AI agents",
                    "n8n workflows",
                    "CRM integrations",
                    "Next.js development",
                  ],
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
              image: "https://www.codehunterlab.com/logo-hntr.png",
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
              jobTitle: "Founder",
              worksFor: {
                "@type": "Organization",
                name: "CodeHunter Lab",
                url: "https://www.codehunterlab.com",
              },
              sameAs: [
                "https://www.linkedin.com/in/albertgarciafernandez/",
                "https://github.com/codehunter-lab",
              ],
              knowsAbout: [
                "AI automation",
                "AI consulting",
                "Next.js",
                "React",
                "workflow automation",
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
              inLanguage: ["en", "es"],
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
