import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const metadataSource = readFileSync("utils/metadata.ts", "utf8");

test("metadata helper consults centralized seo locale policy", () => {
  assert.match(metadataSource, /from "@\/utils\/seo-locale"/);
  assert.match(metadataSource, /getSeoLocalePolicy\(/);
});

test("localized alternates return undefined when seo policy disables them", () => {
  assert.match(metadataSource, /if \(!policy\.allowAlternates\) \{/);
  assert.match(metadataSource, /return undefined;/);
});

test("metadata helper omits languages when localized alternates are undefined", () => {
  assert.match(metadataSource, /const alternateLanguages = localizedAlternates\(path\);/);
  assert.match(metadataSource, /const alternates = alternateLanguages\s*\?/);
  assert.match(metadataSource, /languages: alternateLanguages/);
  assert.match(metadataSource, /:\s*\{\s*canonical: url,\s*\}/s);
  assert.match(metadataSource, /alternates,\s*robots:/s);
});

test("insight article metadata stops hardcoding en es nl alternates", () => {
  const source = readFileSync("app/[locale]/insights/[slug]/page.tsx", "utf8");

  assert.doesNotMatch(source, /languages:\s*\{[\s\S]*en:[\s\S]*es:[\s\S]*nl:/);
});

test("case study metadata stops hardcoding en es nl alternates", () => {
  const source = readFileSync("app/[locale]/case-studies/[slug]/page.tsx", "utf8");

  assert.doesNotMatch(source, /languages:\s*\{[\s\S]*en:[\s\S]*es:[\s\S]*nl:/);
});
