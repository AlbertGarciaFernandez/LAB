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

test("react consulting metadata targets Dutch commercial search intent", () => {
  const source = readFileSync("app/[locale]/react-consulting/page.tsx", "utf8");

  assert.match(source, /Senior React consulting in the Netherlands/);
  assert.match(source, /Leiden, Amsterdam, Rotterdam/);
  assert.match(source, /React consultant Amsterdam/);
  assert.match(source, /React consultant Rotterdam/);
});

test("unindexed commercial pages target localized Dutch market search intent", () => {
  const aiConsulting = readFileSync("app/[locale]/ai-consulting/page.tsx", "utf8");
  const itIntegration = readFileSync("app/[locale]/it-system-integration/page.tsx", "utf8");

  for (const city of ["Leiden", "Amsterdam", "Rotterdam"]) {
    assert.match(aiConsulting, new RegExp(city));
    assert.match(itIntegration, new RegExp(city));
  }

  assert.match(aiConsulting, /consultoría de IA Netherlands/i);
  assert.match(aiConsulting, /AI consultancy Amsterdam/);
  assert.match(itIntegration, /integración de sistemas Netherlands/i);
  assert.match(itIntegration, /IT systeemintegratie Amsterdam/);
});

test("unindexed pages receive stronger internal discovery and fresh sitemap dates", () => {
  const homeLabSection = readFileSync("components/sections/03TheLabSection.tsx", "utf8");
  const footer = readFileSync("components/layout/Footer.tsx", "utf8");
  const sitemap = readFileSync("app/sitemap.ts", "utf8");

  assert.match(homeLabSection, /href="\/lab"/);
  assert.match(footer, /href: "\/lab"[\s\S]*locale: "en" as const/);
  assert.match(sitemap, /"": \{ lastModified: "2026-07-20"/);
  assert.match(sitemap, /"\/lab": \{ lastModified: "2026-07-20"/);
  assert.match(sitemap, /"\/ai-consulting": \{ lastModified: "2026-07-20"/);
  assert.match(sitemap, /"\/it-system-integration": \{[\s\S]*lastModified: "2026-07-20"/);
});
