export const BASE_URL = "https://www.codehunterlab.com";
export const SITE_NAME = "CodeHunter Lab";
export const LOCALES = ["en", "es"] as const;

export type Locale = (typeof LOCALES)[number];

export function normalizeLocale(locale: string): Locale {
  return locale === "es" ? "es" : "en";
}

export function getOpenGraphLocale(locale: string) {
  return normalizeLocale(locale) === "es" ? "es_ES" : "en_US";
}
