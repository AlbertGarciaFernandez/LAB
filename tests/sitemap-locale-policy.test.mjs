import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

test("sitemap consults seo locale policy helper", () => {
  const source = readFileSync("app/sitemap.ts", "utf8");

  assert.match(source, /from "@\/utils\/seo-locale"/);
  assert.match(source, /getSeoLocalePolicy\(/);
});

test("sitemap no longer publishes spanish and dutch insights variants by default", () => {
  const source = readFileSync("app/sitemap.ts", "utf8");

  assert.match(source, /getSeoLocalePolicy\(`\/insights\/\$\{article\.slug\}`\)/);
  assert.doesNotMatch(source, /routing\.locales[\s\S]*\/insights/);
});

test("sitemap applies seo locale policy to core, about, and case study routes", () => {
  const source = readFileSync("app/sitemap.ts", "utf8");

  assert.match(source, /Object\.entries\(routeMeta\)[\s\S]*getSeoLocalePolicy\(route\)\.indexableLocales/);
  assert.match(source, /getSeoLocalePolicy\("\/about"\)\.indexableLocales/);
  assert.match(source, /getSeoLocalePolicy\("\/case-studies"\)\.indexableLocales/);
  assert.match(source, /getSeoLocalePolicy\(`\/case-studies\/\$\{study\.slug\}`\)\.indexableLocales/);
});

test("case studies index lastModified matches the latest collection update", () => {
  const source = readFileSync("app/sitemap.ts", "utf8");

  assert.match(source, /const caseStudiesIndexMeta = \{[\s\S]*lastModified: "2026-06-02"/);
});
