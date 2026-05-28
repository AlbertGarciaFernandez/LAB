export function getLocaleValue<T>(
  locale: string,
  values: {
    en: T;
    es: T;
    nl: T;
  }
): T {
  if (locale === "es") return values.es;
  if (locale === "nl") return values.nl;
  return values.en;
}

export function getCommonBreadcrumbLabels(locale: string) {
  return getLocaleValue(locale, {
    en: {
      home: "Home",
      expertise: "Expertise",
    },
    es: {
      home: "Inicio",
      expertise: "Expertise",
    },
    nl: {
      home: "Start",
      expertise: "Expertise",
    },
  });
}

export function splitKeywords(keywords: string) {
  return keywords
    .split(",")
    .map((keyword) => keyword.trim())
    .filter(Boolean);
}

export function stripHtml(value: string) {
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
