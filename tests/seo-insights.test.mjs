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
  "ai-agent-consulting",
  "whatsapp-automation-netherlands",
  "ai-voice-agent-netherlands",
  "n8n-vs-zapier-netherlands",
  "ai-system-integration",
  "whatsapp-automation-for-business",
  "lead-qualification-automation-netherlands",
  "make-vs-n8n-netherlands",
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

  assert.match(sitemap, /from ['"]@\/content\/insights['"]/);
  assert.match(sitemap, /\/en\/insights/);
  assert.match(sitemap, /\/en\/insights\/\$\{article\.slug\}/);
});

test("locale layout sets metadataBase for absolute social metadata", () => {
  const layout = readFileSync("app/[locale]/layout.tsx", "utf8");

  assert.match(layout, /metadataBase:\s*new URL\(baseUrl\)/);
  assert.match(layout, /"@type":\s*"Person"/);
  assert.match(layout, /albertgarciafernandez/);
});

test("insights are discoverable from visible site navigation", () => {
  const header = readFileSync("components/layout/Header.tsx", "utf8");
  const footer = readFileSync("components/layout/Footer.tsx", "utf8");
  const home = readFileSync("app/[locale]/page.tsx", "utf8");

  assert.match(header, /href="\/en\/insights"/);
  assert.match(footer, /href="\/en\/insights"/);
  assert.match(home, /InsightsSection/);
});

test("homepage includes the commercial trust and packaging sections", () => {
  const home = readFileSync("app/[locale]/page.tsx", "utf8");

  assert.match(home, /TrustProofSection/);
  assert.match(home, /WhatWeBuildSection/);
  assert.match(home, /PackagesSection/);
  assert.match(home, /ProcessContactSection/);
});

test("AI consulting page makes pricing and positioning visible", () => {
  const aiConsultingPage = readFileSync("app/[locale]/ai-consulting/page.tsx", "utf8");
  const enMessages = readFileSync("messages/en.json", "utf8");
  const esMessages = readFileSync("messages/es.json", "utf8");

  assert.match(aiConsultingPage, /AIConsultingPricingSection/);
  assert.match(enMessages, /"Pricing"/);
  assert.match(enMessages, /"€2\.5k–€5k"/);
  assert.match(enMessages, /"From €8k"/);
  assert.match(esMessages, /"Pricing"/);
  assert.match(esMessages, /"€2\.5k–€5k"/);
  assert.match(esMessages, /"Desde €8k"/);
});

test("core commercial pages ship distinct CTR-focused metadata", () => {
  const localeLayout = readFileSync("app/[locale]/layout.tsx", "utf8");
  const aiConsultingLayout = readFileSync("app/[locale]/ai-consulting/layout.tsx", "utf8");
  const aiAutomationPage = readFileSync(
    "app/[locale]/ai-automation-consulting-netherlands/page.tsx",
    "utf8",
  );
  const nextJsPage = readFileSync("app/[locale]/nextjs-development-agency/page.tsx", "utf8");

  assert.match(localeLayout, /AI Automation Agency Netherlands \| CodeHunter Lab/);
  assert.match(localeLayout, /AI agents, n8n workflows, and custom integrations/);

  assert.match(aiConsultingLayout, /AI Consulting Netherlands \| Strategy, Delivery & AI Agents/);
  assert.match(aiConsultingLayout, /AI consulting in the Netherlands for strategy, implementation, and AI systems that ship to production/);

  assert.match(aiAutomationPage, /AI Automation Agency Netherlands \| n8n, WhatsApp & AI Agents/);
  assert.match(aiAutomationPage, /WhatsApp agents, AI voice bots, n8n workflows, and CRM integrations/);

  assert.match(nextJsPage, /Next\.js Agency Europe \| App Router, Migration & Performance/);
  assert.match(nextJsPage, /App Router, React Server Components, migrations, and performance work/);
});

test("url architecture map documents local, europe, and generic content strategy", () => {
  const map = readFileSync("docs/SEO-URL-ARCHITECTURE.md", "utf8");

  assert.match(map, /Keep as Netherlands/);
  assert.match(map, /Expand to Europe \/ international/);
  assert.match(map, /Hybrid pages/);
  assert.match(map, /Create next/);
  assert.match(map, /Do not build yet/);
  assert.match(map, /Based in Leiden, Netherlands/);
  assert.match(map, /Working across Europe and internationally/);
});

test("about page content asset exists", () => {
  const aboutPage = readFileSync("app/[locale]/about/page.tsx", "utf8");

  assert.match(aboutPage, /AboutPage/);
  assert.match(aboutPage, /Albert Garcia/);
  assert.match(aboutPage, /Based in Leiden, Netherlands/);
});

test("footer and sitemap expose about without case study urls", () => {
  const footer = readFileSync("components/layout/Footer.tsx", "utf8");
  const sitemap = readFileSync("app/sitemap.ts", "utf8");

  assert.match(footer, /\/about/);
  assert.match(sitemap, /\/en\/about/);
  assert.doesNotMatch(footer, /\/case-studies/);
  assert.doesNotMatch(sitemap, /\/en\/case-studies/);
});

test("commercial pages no longer link to temporary case studies", () => {
  const aiConsultingPage = readFileSync("app/[locale]/ai-consulting/page.tsx", "utf8");
  const aiAutomationPage = readFileSync(
    "app/[locale]/ai-automation-consulting-netherlands/PageContent.tsx",
    "utf8",
  );
  const nextJsPage = readFileSync(
    "app/[locale]/nextjs-development-agency/PageContent.tsx",
    "utf8",
  );

  assert.doesNotMatch(aiConsultingPage, /\/case-studies/);
  assert.doesNotMatch(aiConsultingPage, /zapier-to-n8n-migration/);
  assert.doesNotMatch(aiAutomationPage, /zapier-to-n8n-migration/);
  assert.doesNotMatch(nextJsPage, /nextjs-platform-architecture/);
});
