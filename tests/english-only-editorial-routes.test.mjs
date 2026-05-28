import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

test("insight and case study static params generate english routes only", () => {
  const insightsArticle = readFileSync("app/[locale]/insights/[slug]/page.tsx", "utf8");
  const caseStudyArticle = readFileSync("app/[locale]/case-studies/[slug]/page.tsx", "utf8");

  assert.doesNotMatch(insightsArticle, /locale: "es"/);
  assert.doesNotMatch(insightsArticle, /locale: "nl"/);
  assert.doesNotMatch(caseStudyArticle, /locale: "es"/);
  assert.doesNotMatch(caseStudyArticle, /locale: "nl"/);
});

test("public navigation links editorial sections to english routes only", () => {
  const header = readFileSync("components/layout/Header.tsx", "utf8");
  const footer = readFileSync("components/layout/Footer.tsx", "utf8");
  const insightsSection = readFileSync("components/sections/InsightsSection.tsx", "utf8");

  assert.match(header, /href="\/insights"[\s\S]*locale="en"/);
  assert.match(header, /href="\/case-studies"[\s\S]*locale="en"/);
  assert.match(footer, /href="\/insights"[\s\S]*locale="en"/);
  assert.doesNotMatch(header, /href="\/en\/(insights|case-studies)"/);
  assert.doesNotMatch(footer, /href="\/en\/insights"|href: "\/en\/insights"/);
  assert.match(insightsSection, /href="\/en\/insights"|href=\{`\/en\/insights/);
  assert.doesNotMatch(insightsSection, /normalizedLocale\}\/insights/);
});

test("article metadata keeps shared social image and locale fields", () => {
  const insightsArticle = readFileSync("app/[locale]/insights/[slug]/page.tsx", "utf8");
  const caseStudyArticle = readFileSync("app/[locale]/case-studies/[slug]/page.tsx", "utf8");

  assert.match(insightsArticle, /openGraph:\s*\{\s*\.\.\.metadata\.openGraph,/);
  assert.match(caseStudyArticle, /openGraph:\s*\{\s*\.\.\.metadata\.openGraph,/);
});

test("locale layout preserves local business and founder schema", () => {
  const layout = readFileSync("app/[locale]/layout.tsx", "utf8");

  assert.match(layout, /"@type": "LocalBusiness"/);
  assert.match(layout, /"@type": "Person"/);
  assert.match(layout, /"@id": "https:\/\/www\.codehunterlab\.com\/#founder"/);
});

test("editorial listing pages link to english article routes only", () => {
  const insightsIndex = readFileSync("app/[locale]/insights/page.tsx", "utf8");
  const caseStudiesIndex = readFileSync("app/[locale]/case-studies/page.tsx", "utf8");

  assert.doesNotMatch(insightsIndex, /href=\{`\/\$\{params\.locale\}\/insights\/\$\{article\.slug\}`\}/);
  assert.doesNotMatch(caseStudiesIndex, /href=\{`\/\$\{params\.locale\}\/case-studies\/\$\{cs\.slug\}`\}/);
  assert.match(insightsIndex, /href=\{`\/en\/insights\/\$\{article\.slug\}`\}/);
  assert.match(caseStudiesIndex, /href=\{`\/en\/case-studies\/\$\{cs\.slug\}`\}/);
});
