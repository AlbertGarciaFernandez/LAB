import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

test("metadata helper consults centralized seo locale policy", () => {
  const source = readFileSync("utils/metadata.ts", "utf8");

  assert.match(source, /from "@\/utils\/seo-locale"/);
  assert.match(source, /getSeoLocalePolicy\(/);
});

test("insight article metadata stops hardcoding en es nl alternates", () => {
  const source = readFileSync("app/[locale]/insights/[slug]/page.tsx", "utf8");

  assert.doesNotMatch(source, /languages:\s*\{[\s\S]*en:[\s\S]*es:[\s\S]*nl:/);
});

test("case study metadata stops hardcoding en es nl alternates", () => {
  const source = readFileSync("app/[locale]/case-studies/[slug]/page.tsx", "utf8");

  assert.doesNotMatch(source, /languages:\s*\{[\s\S]*en:[\s\S]*es:[\s\S]*nl:/);
});
