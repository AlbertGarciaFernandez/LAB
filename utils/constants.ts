export const BASE_URL = "https://www.codehunterlab.com";
export const SITE_NAME = "CodeHunter Lab";
export const LOCALES = ["en", "es", "nl"] as const;

export type Locale = (typeof LOCALES)[number];

export function normalizeLocale(locale: string): Locale {
  if (locale === "es") return "es";
  if (locale === "nl") return "nl";
  return "en";
}

export function getOpenGraphLocale(locale: string) {
  const normalized = normalizeLocale(locale);
  if (normalized === "es") return "es_ES";
  if (normalized === "nl") return "nl_NL";
  return "en_US";
}
