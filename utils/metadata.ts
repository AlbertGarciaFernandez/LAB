import type { Metadata } from "next";
import { BASE_URL, LOCALES, SITE_NAME, getOpenGraphLocale, normalizeLocale } from "@/utils/constants";

type CreatePageMetadataInput = {
  title: string;
  description: string;
  path: string;
  locale: string;
  keywords?: string[];
  type?: "website" | "article" | "profile";
  imagePath?: string;
};

export function localizedUrl(locale: string, path = "") {
  const normalizedLocale = normalizeLocale(locale);
  return `${BASE_URL}/${normalizedLocale}${path}`;
}

export function localizedAlternates(path = "") {
  return {
    ...Object.fromEntries(LOCALES.map((locale) => [locale, `${BASE_URL}/${locale}${path}`])),
    "x-default": `${BASE_URL}/en${path}`,
  };
}

export function createPageMetadata({
  title,
  description,
  path,
  locale,
  keywords,
  type = "website",
  imagePath,
}: CreatePageMetadataInput): Metadata {
  const normalizedLocale = normalizeLocale(locale);
  const url = localizedUrl(normalizedLocale, path);
  const image = imagePath ?? `/${normalizedLocale}/opengraph-image`;

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: localizedAlternates(path),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type,
      locale: getOpenGraphLocale(normalizedLocale),
      images: [
        {
          url: `${BASE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}${image}`],
    },
  };
}
