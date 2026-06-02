import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { test } from "node:test";
import vm from "node:vm";

const require = createRequire(import.meta.url);
const ts = require("typescript");

function loadCaseStudies() {
  const caseStudiesSource = readFileSync("content/case-studies.ts", "utf8");
  const { outputText } = ts.transpileModule(caseStudiesSource, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  });
  const module = { exports: {} };

  vm.runInNewContext(outputText, {
    exports: module.exports,
    module,
    require,
  });

  return module.exports.caseStudies;
}

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
  assert.match(insightsSection, /href="\/insights"[\s\S]*locale="en"|href=\{`\/en\/insights/);
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

  assert.doesNotMatch(
    insightsIndex,
    /href=\{`\/\$\{params\.locale\}\/insights\/\$\{article\.slug\}`\}/
  );
  assert.doesNotMatch(
    caseStudiesIndex,
    /href=\{`\/\$\{params\.locale\}\/case-studies\/\$\{cs\.slug\}`\}/
  );
  assert.match(insightsIndex, /href=\{`\/en\/insights\/\$\{article\.slug\}`\}/);
  assert.match(caseStudiesIndex, /href=\{`\/en\/case-studies\/\$\{cs\.slug\}`\}/);
});

test("case studies collection includes the new product and migration case studies", () => {
  const caseStudies = loadCaseStudies();
  const slugs = caseStudies.map((caseStudy) => caseStudy.slug);

  assert.ok(slugs.includes("ai-productivity-app-accelerator"));
  assert.ok(slugs.includes("basic-fit-sfcc-migration"));
});

test("case studies page includes trust proof metrics and delivery guarantees", () => {
  const caseStudiesIndex = readFileSync("app/[locale]/case-studies/page.tsx", "utf8");

  assert.match(caseStudiesIndex, /4\+/);
  assert.match(caseStudiesIndex, /Years shipping/);
  assert.match(caseStudiesIndex, /15\+/);
  assert.match(caseStudiesIndex, /Companies served/);
  assert.match(caseStudiesIndex, /30d/);
  assert.match(caseStudiesIndex, /Support included/);
  assert.match(caseStudiesIndex, /No black boxes/);
  assert.match(caseStudiesIndex, /Real systems, not demos/);
  assert.match(caseStudiesIndex, /Scope before build/);
});

test("case studies page copy reflects the broader mix of work on the index", () => {
  const caseStudiesIndex = readFileSync("app/[locale]/case-studies/page.tsx", "utf8");

  assert.match(caseStudiesIndex, /AI automation, product engineering, migrations, and systems integration/);
  assert.match(caseStudiesIndex, /Delivery stories across AI products, internal platforms, ecommerce migrations, and integration-heavy systems work/);
  assert.match(caseStudiesIndex, /AI automation case studies/);
  assert.match(caseStudiesIndex, /software migration case studies/);
  assert.match(caseStudiesIndex, /systems integration projects/);
});
