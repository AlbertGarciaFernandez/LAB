import type { Metadata } from "next";
import { BASE_URL, SITE_NAME, getOpenGraphLocale, normalizeLocale } from "@/utils/constants";
import { getCanonicalLocale, getSeoLocalePolicy, isLocaleIndexable } from "@/utils/seo-locale";

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
  const policy = getSeoLocalePolicy(path);

  if (!policy.allowAlternates) {
    return undefined;
  }

  return {
    ...Object.fromEntries(
      policy.indexableLocales.map((locale) => [locale, localizedUrl(locale, path)])
    ),
    "x-default": localizedUrl(policy.canonicalLocale, path),
  };
}

export function canonicalUrl(locale: string, path = "") {
  return localizedUrl(getCanonicalLocale(locale, path), path);
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
  const indexable = isLocaleIndexable(normalizedLocale, path);
  const effectiveLocale = getCanonicalLocale(normalizedLocale, path);
  const url = canonicalUrl(normalizedLocale, path);
  const image = imagePath ?? `/${effectiveLocale}/opengraph-image`;
  const alternateLanguages = localizedAlternates(path);
  const alternates = alternateLanguages
    ? {
        canonical: url,
        languages: alternateLanguages,
      }
    : {
        canonical: url,
      };

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    keywords,
    alternates,
    robots: {
      index: indexable,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type,
      locale: getOpenGraphLocale(effectiveLocale),
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
