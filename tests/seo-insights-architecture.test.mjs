import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

function read(path) {
  return readFileSync(path, "utf8");
}

test("insights taxonomy aligns homepage, hub, and sitemap priorities", () => {
  const taxonomy = read("content/insights-taxonomy.ts");
  const sitemap = read("app/sitemap.ts");

  assert.match(taxonomy, /export const strategicInsightSlugs = \[/);
  assert.match(taxonomy, /export const homepageFeaturedInsightSlugs = \[/);
  assert.match(taxonomy, /export const hubFeaturedInsightSlugs = \[/);

  for (const slug of [
    "automation-consultancy-netherlands",
    "ai-system-integration",
    "n8n-consultant-netherlands",
    "n8n-vs-zapier-netherlands",
    "whatsapp-automation-for-business",
    "whatsapp-automation-netherlands",
    "lead-qualification-automation-netherlands",
    "ai-agent-consulting",
    "react-consulting-services",
    "nextjs-consultancy-europe",
  ]) {
    assert.match(taxonomy, new RegExp(`"${slug}"`));
    assert.match(sitemap, new RegExp(`"${slug}"`));
  }
});

test("homepage insights section consumes taxonomy-driven featured insights", () => {
  const section = read("components/sections/InsightsSection.tsx");
  const enMessages = read("messages/en.json");

  assert.match(section, /getHomepageFeaturedInsights/);
  assert.match(section, /const featuredInsights = getHomepageFeaturedInsights\(insights\)/);
  assert.doesNotMatch(section, /const featuredSlugs = new Set/);

  assert.match(enMessages, /Buyer education for AI systems and operational automation\./);
  assert.match(
    enMessages,
    /Strategic reads on AI agents, WhatsApp workflows, system integration, and n8n decisions/
  );
});

test("insights hub exposes featured, strategic clusters, and supporting reads", () => {
  const hub = read("app/[locale]/insights/page.tsx");

  assert.match(hub, /getHubFeaturedInsights/);
  assert.match(hub, /getStrategicClusterGroups/);
  assert.match(hub, /getSupportingInsights/);
  assert.match(hub, /Start here/);
  assert.match(hub, /Strategic clusters/);
  assert.match(hub, /Supporting reads/);
  assert.match(hub, /Updated \{article\.modifiedAt\}/);
});

test("insight article pages render related insights and semantic time tags", () => {
  const articlePage = read("app/[locale]/insights/[slug]/page.tsx");
  const taxonomy = read("content/insights-taxonomy.ts");

  assert.match(articlePage, /getRelatedInsights\(currentArticle\.slug, insights\)/);
  assert.match(articlePage, /Related insights/);
  assert.match(
    articlePage,
    /<time dateTime=\{currentArticle\.publishedAt\}>[\s\S]*Published \{currentArticle\.publishedAt\}[\s\S]*<\/time>/
  );
  assert.match(
    articlePage,
    /<time dateTime=\{currentArticle\.modifiedAt\}>[\s\S]*Updated \{currentArticle\.modifiedAt\}[\s\S]*<\/time>/
  );

  assert.match(taxonomy, /export const relatedInsightSlugs: Record<string, string\[]> = \{/);
  assert.match(taxonomy, /"ai-system-integration": \[/);
  assert.match(taxonomy, /"whatsapp-automation-for-business": \[/);
});
