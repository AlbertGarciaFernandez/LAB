import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

function collectLeafPaths(value, prefix = "") {
  if (Array.isArray(value)) {
    return value.flatMap((item, index) => collectLeafPaths(item, `${prefix}.${index}`));
  }

  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([key, child]) =>
      collectLeafPaths(child, prefix ? `${prefix}.${key}` : key)
    );
  }

  return [prefix];
}

test("message locale files expose the same leaf key paths", () => {
  const locales = ["en", "es", "nl"];
  const messages = Object.fromEntries(
    locales.map((locale) => [locale, JSON.parse(readFileSync(`messages/${locale}.json`, "utf8"))])
  );
  const enPaths = new Set(collectLeafPaths(messages.en));

  for (const locale of ["es", "nl"]) {
    const localePaths = new Set(collectLeafPaths(messages[locale]));
    const missing = [...enPaths].filter((path) => !localePaths.has(path));
    const extra = [...localePaths].filter((path) => !enPaths.has(path));

    assert.deepEqual({ missing, extra }, { missing: [], extra: [] }, locale);
  }
});

test("home and about pages support dutch copy instead of spanish-only branching", () => {
  const home = readFileSync("app/[locale]/page.tsx", "utf8");
  const about = readFileSync("app/[locale]/about/page.tsx", "utf8");

  assert.match(home, /const isDutch = params\.locale === "nl";/);
  assert.match(about, /const isDutch = params\.locale === "nl";/);
});

test("ai consulting layout supports dutch locale metadata", () => {
  const layout = readFileSync("app/[locale]/ai-consulting/layout.tsx", "utf8");

  assert.match(layout, /createPageMetadata\(/);
  assert.match(layout, /locale:\s*params\.locale/);
});

test("insights and case studies are restricted to english routes only", () => {
  const insights = readFileSync("app/[locale]/insights/page.tsx", "utf8");
  const caseStudies = readFileSync("app/[locale]/case-studies/page.tsx", "utf8");

  assert.match(insights, /if \(params\.locale !== "en"\)/);
  assert.match(caseStudies, /if \(params\.locale !== "en"\)/);
  assert.doesNotMatch(insights, /Dutch translation is not planned/);
  assert.doesNotMatch(caseStudies, /Dutch translation is not planned/);
});

test("lab remains outside full nl translation scope", () => {
  const lab = readFileSync("app/[locale]/lab/page.tsx", "utf8");

  assert.match(lab, /params\.locale === "es" \? "es" : "en"/);
});
