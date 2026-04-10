import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const requiredSlugs = [
  "workflow-automation-agency-netherlands",
  "conversational-ai-consultant-netherlands",
  "n8n-consultant-netherlands",
  "dental-clinic-whatsapp-automation-netherlands",
  "ai-consultants-netherlands",
  "automation-consultancy-netherlands",
  "system-integrator-netherlands",
  "crm-integration-services-netherlands",
  "app-developer-leiden",
  "accounting-automation-software-netherlands",
  "react-consulting-services",
  "nextjs-consultancy-europe",
];

test("insight content includes the Search Console opportunity articles", () => {
  const source = readFileSync("content/insights.ts", "utf8");

  for (const slug of requiredSlugs) {
    assert.match(source, new RegExp(`slug:\\s*["']${slug}["']`));
  }

  assert.match(source, /targetQueries:/);
  assert.match(source, /relatedServices:/);
  assert.match(source, /publishedAt:/);
  assert.match(source, /modifiedAt:/);
  assert.match(source, /\/ai-automation-consulting-netherlands/);
  assert.match(source, /\/dental-clinic-automation-netherlands/);
  assert.match(source, /\/software-development-leiden/);
  assert.match(source, /\/react-consulting/);
  assert.match(source, /\/nextjs-development-agency/);
});

test("insight routes expose index and article metadata/schema", () => {
  const indexPage = readFileSync("app/[locale]/insights/page.tsx", "utf8");
  const articlePage = readFileSync("app/[locale]/insights/[slug]/page.tsx", "utf8");

  assert.match(indexPage, /generateMetadata/);
  assert.match(indexPage, /CollectionPage/);
  assert.match(articlePage, /generateStaticParams/);
  assert.match(articlePage, /Article/);
  assert.match(articlePage, /alternates:/);
});

test("sitemap includes the English insights hub and article URLs", () => {
  const sitemap = readFileSync("app/sitemap.ts", "utf8");

  assert.match(sitemap, /\/en\/insights/);
  for (const slug of requiredSlugs) {
    assert.match(sitemap, new RegExp(`/en/insights/${slug}`));
  }
});

test("locale layout sets metadataBase for absolute social metadata", () => {
  const layout = readFileSync("app/[locale]/layout.tsx", "utf8");

  assert.match(layout, /metadataBase:\s*new URL\(baseUrl\)/);
});

test("insights are discoverable from visible site navigation", () => {
  const header = readFileSync("components/layout/Header.tsx", "utf8");
  const footer = readFileSync("components/layout/Footer.tsx", "utf8");
  const home = readFileSync("app/[locale]/page.tsx", "utf8");

  assert.match(header, /href="\/en\/insights"/);
  assert.match(footer, /href="\/en\/insights"/);
  assert.match(home, /InsightsSection/);
});
