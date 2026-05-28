import { LOCALES, type Locale, normalizeLocale } from "@/utils/constants";

export type SeoLocalePolicy = {
  canonicalLocale: Locale;
  indexableLocales: Locale[];
  allowAlternates: boolean;
};

export function getSeoLocalePolicy(path: string): SeoLocalePolicy {
  if (path.startsWith("/insights")) {
    return { canonicalLocale: "en", indexableLocales: ["en"], allowAlternates: false };
  }

  if (path.startsWith("/case-studies")) {
    return { canonicalLocale: "en", indexableLocales: ["en"], allowAlternates: false };
  }

  if (path.startsWith("/lab")) {
    return { canonicalLocale: "en", indexableLocales: ["en"], allowAlternates: false };
  }

  return {
    canonicalLocale: "en",
    indexableLocales: [...LOCALES],
    allowAlternates: true,
  };
}

export function isLocaleIndexable(locale: string, path: string) {
  const normalizedLocale = normalizeLocale(locale);
  return getSeoLocalePolicy(path).indexableLocales.includes(normalizedLocale);
}

export function getCanonicalLocale(locale: string, path: string): Locale {
  const normalizedLocale = normalizeLocale(locale);
  const policy = getSeoLocalePolicy(path);

  return policy.indexableLocales.includes(normalizedLocale)
    ? normalizedLocale
    : policy.canonicalLocale;
}
