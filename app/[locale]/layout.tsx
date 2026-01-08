import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "@/app/globals.css";
import Footer from "@/components/layout/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = Space_Grotesk({ subsets: ["latin"], variable: "--font-mono" });

export const viewport = {
  themeColor: "#0B0B0B",
};

export const metadata: Metadata = {
  title: "CodeHunter Lab | Precision Engineering for Scalable Digital Products",
  description:
    "Senior Frontend Engineering, Product Strategy, and High-Performance Ecommerce Solutions. A technical consultancy specializing in Next.js, React, and SFCC Migrations.",
  keywords: [
    "Frontend Lead",
    "Next.js",
    "React",
    "TypeScript",
    "Framer Motion",
    "SFCC",
    "Ecommerce",
    "Product Owner",
    "CodeHunter Lab",
  ],
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale} className={`${sans.variable} ${mono.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="bg-near-black text-white min-h-screen font-sans">
            <div className="bg-noise" />
            {children}
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
