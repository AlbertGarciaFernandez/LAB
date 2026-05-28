export const BASE_URL = "https://www.codehunterlab.com";
export const SITE_NAME = "CodeHunter Lab";
export const LOCALES = ["en", "es", "nl"] as const;

export type Locale = (typeof LOCALES)[number];

export const LOCALE_METADATA = {
  en: {
    label: "EN",
    name: "English",
    flag: "🇬🇧",
    openGraphLocale: "en_US",
    schemaLanguage: "English",
  },
  es: {
    label: "ES",
    name: "Español",
    flag: "🇪🇸",
    openGraphLocale: "es_ES",
    schemaLanguage: "Spanish",
  },
  nl: {
    label: "NL",
    name: "Nederlands",
    flag: "🇳🇱",
    openGraphLocale: "nl_NL",
    schemaLanguage: "Dutch",
  },
} as const satisfies Record<
  Locale,
  {
    label: string;
    name: string;
    flag: string;
    openGraphLocale: string;
    schemaLanguage: string;
  }
>;

export const SCHEMA_AVAILABLE_LANGUAGES = LOCALES.map(
  (locale) => LOCALE_METADATA[locale].schemaLanguage
);

export function normalizeLocale(locale: string): Locale {
  if (locale === "es") return "es";
  if (locale === "nl") return "nl";
  return "en";
}

export function getOpenGraphLocale(locale: string) {
  return LOCALE_METADATA[normalizeLocale(locale)].openGraphLocale;
}

export function getLocaleMetadata(locale: string) {
  return LOCALE_METADATA[normalizeLocale(locale)];
}
