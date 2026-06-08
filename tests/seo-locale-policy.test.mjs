import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const source = readFileSync("utils/seo-locale.ts", "utf8");

test("central seo locale policy helper exists", () => {
  assert.match(source, /export type SeoLocalePolicy/);
  assert.match(source, /export function getSeoLocalePolicy\(path: string\)/);
});

test("seo locale policy disables alternates for english-canonical sections", () => {
  assert.match(source, /path\.startsWith\("\/insights"\)/);
  assert.match(source, /path\.startsWith\("\/case-studies"\)/);
  assert.match(source, /path\.startsWith\("\/lab"\)/);
  assert.match(
    source,
    /return \{ canonicalLocale: "en", indexableLocales: \["en"\], allowAlternates: false \}/
  );
});

test("seo locale policy keeps alternates enabled for commercial routes", () => {
  assert.match(source, /indexableLocales: \[\.\.\.LOCALES\]/);
  assert.match(source, /allowAlternates: true/);
});
