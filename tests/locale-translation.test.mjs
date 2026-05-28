import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

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
