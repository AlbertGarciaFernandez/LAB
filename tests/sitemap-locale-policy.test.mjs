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
