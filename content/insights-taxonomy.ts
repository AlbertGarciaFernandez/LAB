import type { InsightArticle } from "@/content/insights";

export type InsightCluster =
  | "strategy"
  | "automation"
  | "integration"
  | "agents"
  | "engineering"
  | "industry";

export const strategicInsightSlugs = [
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
] as const;

export const homepageFeaturedInsightSlugs = [
  "ai-agent-consulting",
  "ai-system-integration",
  "n8n-vs-zapier-netherlands",
  "whatsapp-automation-netherlands",
  "lead-qualification-automation-netherlands",
] as const;

export const hubFeaturedInsightSlugs = [
  "automation-consultancy-netherlands",
  "ai-system-integration",
  "n8n-consultant-netherlands",
  "whatsapp-automation-for-business",
] as const;

export const insightClusterMeta: Record<
  InsightCluster,
  { title: string; description: string }
> = {
  strategy: {
    title: "AI consulting & strategy",
    description:
      "Decision guides for teams figuring out where AI, automation, and systems work should start.",
  },
  automation: {
    title: "Automation & workflows",
    description:
      "Operational guides on workflow design, tooling choices, and where automation creates measurable ROI.",
  },
  integration: {
    title: "System integration & CRM",
    description:
      "Content for businesses dealing with disconnected tools, messy handoffs, and fragile data flows.",
  },
  agents: {
    title: "AI agents, voice & WhatsApp",
    description:
      "Applied buyer education on lead handling, conversational systems, and communication workflows.",
  },
  engineering: {
    title: "Internal tools, React & Next.js",
    description:
      "Supporting content for teams that need product-grade internal software and maintainable delivery.",
  },
  industry: {
    title: "Industry notes",
    description:
      "Vertical reads for service-heavy sectors with recurring admin, follow-up, and workflow bottlenecks.",
  },
};

export const insightSlugToCluster: Record<string, InsightCluster> = {
  "workflow-automation-agency-netherlands": "automation",
  "conversational-ai-consultant-netherlands": "agents",
  "n8n-consultant-netherlands": "automation",
  "dental-clinic-whatsapp-automation-netherlands": "industry",
  "ai-consultants-netherlands": "strategy",
  "automation-consultancy-netherlands": "strategy",
  "system-integrator-netherlands": "integration",
  "crm-integration-services-netherlands": "integration",
  "app-developer-leiden": "engineering",
  "accounting-automation-software-netherlands": "industry",
  "react-consulting-services": "engineering",
  "nextjs-consultancy-europe": "engineering",
  "ai-agent-consulting": "agents",
  "whatsapp-automation-netherlands": "agents",
  "ai-voice-agent-netherlands": "agents",
  "n8n-vs-zapier-netherlands": "automation",
  "ai-system-integration": "integration",
  "whatsapp-automation-for-business": "agents",
  "lead-qualification-automation-netherlands": "agents",
  "make-vs-n8n-netherlands": "automation",
  "ai-automation-to-autonomous-ai-systems": "strategy",
};

export const relatedInsightSlugs: Record<string, string[]> = {
  "workflow-automation-agency-netherlands": [
    "automation-consultancy-netherlands",
    "n8n-consultant-netherlands",
    "lead-qualification-automation-netherlands",
  ],
  "conversational-ai-consultant-netherlands": [
    "ai-agent-consulting",
    "ai-voice-agent-netherlands",
    "whatsapp-automation-for-business",
  ],
  "n8n-consultant-netherlands": [
    "n8n-vs-zapier-netherlands",
    "make-vs-n8n-netherlands",
    "workflow-automation-agency-netherlands",
  ],
  "dental-clinic-whatsapp-automation-netherlands": [
    "whatsapp-automation-netherlands",
    "lead-qualification-automation-netherlands",
    "conversational-ai-consultant-netherlands",
  ],
  "ai-consultants-netherlands": [
    "automation-consultancy-netherlands",
    "ai-agent-consulting",
    "ai-system-integration",
  ],
  "automation-consultancy-netherlands": [
    "workflow-automation-agency-netherlands",
    "ai-system-integration",
    "n8n-consultant-netherlands",
  ],
  "system-integrator-netherlands": [
    "ai-system-integration",
    "crm-integration-services-netherlands",
    "automation-consultancy-netherlands",
  ],
  "crm-integration-services-netherlands": [
    "ai-system-integration",
    "system-integrator-netherlands",
    "lead-qualification-automation-netherlands",
  ],
  "app-developer-leiden": [
    "react-consulting-services",
    "nextjs-consultancy-europe",
    "ai-system-integration",
  ],
  "accounting-automation-software-netherlands": [
    "automation-consultancy-netherlands",
    "crm-integration-services-netherlands",
    "ai-system-integration",
  ],
  "react-consulting-services": [
    "nextjs-consultancy-europe",
    "app-developer-leiden",
    "ai-system-integration",
  ],
  "nextjs-consultancy-europe": [
    "react-consulting-services",
    "app-developer-leiden",
    "ai-system-integration",
  ],
  "ai-agent-consulting": [
    "conversational-ai-consultant-netherlands",
    "ai-voice-agent-netherlands",
    "lead-qualification-automation-netherlands",
  ],
  "whatsapp-automation-netherlands": [
    "whatsapp-automation-for-business",
    "lead-qualification-automation-netherlands",
    "dental-clinic-whatsapp-automation-netherlands",
  ],
  "ai-voice-agent-netherlands": [
    "ai-agent-consulting",
    "conversational-ai-consultant-netherlands",
    "lead-qualification-automation-netherlands",
  ],
  "n8n-vs-zapier-netherlands": [
    "n8n-consultant-netherlands",
    "make-vs-n8n-netherlands",
    "workflow-automation-agency-netherlands",
  ],
  "ai-system-integration": [
    "crm-integration-services-netherlands",
    "system-integrator-netherlands",
    "automation-consultancy-netherlands",
  ],
  "whatsapp-automation-for-business": [
    "whatsapp-automation-netherlands",
    "lead-qualification-automation-netherlands",
    "conversational-ai-consultant-netherlands",
  ],
  "lead-qualification-automation-netherlands": [
    "whatsapp-automation-for-business",
    "ai-agent-consulting",
    "whatsapp-automation-netherlands",
  ],
  "make-vs-n8n-netherlands": [
    "n8n-vs-zapier-netherlands",
    "n8n-consultant-netherlands",
    "workflow-automation-agency-netherlands",
  ],
  "ai-automation-to-autonomous-ai-systems": [
    "ai-agent-consulting",
    "ai-system-integration",
    "automation-consultancy-netherlands",
  ],
};

const strategicInsightSlugSet = new Set<string>(strategicInsightSlugs);
const homepageFeaturedInsightSlugSet = new Set<string>(homepageFeaturedInsightSlugs);
const hubFeaturedInsightSlugSet = new Set<string>(hubFeaturedInsightSlugs);

function sortByEditorialPriority(left: InsightArticle, right: InsightArticle) {
  const strategicDelta = Number(strategicInsightSlugSet.has(right.slug)) - Number(strategicInsightSlugSet.has(left.slug));
  if (strategicDelta !== 0) {
    return strategicDelta;
  }

  const modifiedDelta = right.modifiedAt.localeCompare(left.modifiedAt);
  if (modifiedDelta !== 0) {
    return modifiedDelta;
  }

  return left.title.localeCompare(right.title);
}

export function getOrderedInsights(articles: InsightArticle[]) {
  return [...articles].sort(sortByEditorialPriority);
}

export function getHomepageFeaturedInsights(articles: InsightArticle[]) {
  return getOrderedInsights(articles).filter((article) => homepageFeaturedInsightSlugSet.has(article.slug));
}

export function getHubFeaturedInsights(articles: InsightArticle[]) {
  return getOrderedInsights(articles).filter((article) => hubFeaturedInsightSlugSet.has(article.slug));
}

export function getStrategicInsights(articles: InsightArticle[]) {
  return getOrderedInsights(articles).filter((article) => strategicInsightSlugSet.has(article.slug));
}

export function getSupportingInsights(articles: InsightArticle[]) {
  return getOrderedInsights(articles).filter((article) => !strategicInsightSlugSet.has(article.slug));
}

export function getClusterForInsight(slug: string): InsightCluster {
  return insightSlugToCluster[slug] ?? "strategy";
}

export function getStrategicClusterGroups(articles: InsightArticle[]) {
  const grouped = new Map<InsightCluster, InsightArticle[]>();

  for (const article of getStrategicInsights(articles)) {
    const cluster = getClusterForInsight(article.slug);
    const existing = grouped.get(cluster) ?? [];
    existing.push(article);
    grouped.set(cluster, existing);
  }

  return Array.from(grouped.entries()).map(([cluster, clusterArticles]) => ({
    cluster,
    meta: insightClusterMeta[cluster],
    articles: clusterArticles,
  }));
}

export function getRelatedInsights(currentSlug: string, articles: InsightArticle[]) {
  const slugs = relatedInsightSlugs[currentSlug] ?? [];
  const articlesBySlug = new Map(articles.map((article) => [article.slug, article]));

  return slugs
    .map((slug) => articlesBySlug.get(slug))
    .filter((article): article is InsightArticle => Boolean(article));
}
