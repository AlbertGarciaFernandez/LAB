import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

test("central seo locale policy helper exists", () => {
  const source = readFileSync("utils/seo-locale.ts", "utf8");

  assert.match(source, /export type SeoLocalePolicy/);
  assert.match(source, /export function getSeoLocalePolicy\(path: string\)/);
});

test("seo locale policy treats editorial and lab sections as english-canonical", () => {
  const source = readFileSync("utils/seo-locale.ts", "utf8");

  assert.match(source, /path\.startsWith\("\/insights"\)/);
  assert.match(source, /path\.startsWith\("\/case-studies"\)/);
  assert.match(source, /path\.startsWith\("\/lab"\)/);
  assert.match(source, /canonicalLocale:\s*"en"/);
});
