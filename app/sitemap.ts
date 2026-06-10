import { MetadataRoute } from "next";
import { insights } from "@/content/insights";
import { caseStudies } from "@/content/case-studies";
import { getSeoLocalePolicy } from "@/utils/seo-locale";

// Last modified dates per route — update when page content changes
const routeMeta: Record<
  string,
  {
    lastModified: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }
> = {
  "": { lastModified: "2026-05-09", priority: 1.0, changeFrequency: "weekly" },
  "/lab": { lastModified: "2026-05-09", priority: 0.8, changeFrequency: "weekly" },
  "/ai-consulting": { lastModified: "2026-05-09", priority: 0.9, changeFrequency: "weekly" },
  "/it-system-integration": {
    lastModified: "2026-05-09",
    priority: 0.8,
    changeFrequency: "weekly",
  },
  "/software-development-leiden": {
    lastModified: "2026-05-09",
    priority: 0.8,
    changeFrequency: "weekly",
  },
  "/services/custom-internal-tools-development": {
    lastModified: "2026-05-09",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  "/expertise/ai-agents-automation": {
    lastModified: "2026-05-09",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  "/expertise/n8n-migration-consulting": {
    lastModified: "2026-05-09",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  "/expertise/system-architecture-design": {
    lastModified: "2026-05-09",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  "/expertise/custom-llm-development": {
    lastModified: "2026-05-09",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  "/nextjs-development-agency": {
    lastModified: "2026-05-09",
    priority: 0.9,
    changeFrequency: "weekly",
  },
  "/react-consulting": { lastModified: "2026-05-09", priority: 0.9, changeFrequency: "weekly" },
  "/healthcare-automation-netherlands": {
    lastModified: "2026-06-01",
    priority: 0.9,
    changeFrequency: "weekly",
  },
  "/aesthetic-clinic-automation-netherlands": {
    lastModified: "2026-05-09",
    priority: 0.9,
    changeFrequency: "weekly",
  },
  "/professional-services-automation-netherlands": {
    lastModified: "2026-06-01",
    priority: 0.9,
    changeFrequency: "weekly",
  },
  "/real-estate-automation-netherlands": {
    lastModified: "2026-05-09",
    priority: 0.9,
    changeFrequency: "weekly",
  },
  "/n8n-consultant-netherlands": {
    lastModified: "2026-05-20",
    priority: 0.9,
    changeFrequency: "weekly",
  },
  "/ai-voice-agents-netherlands": {
    lastModified: "2026-05-20",
    priority: 0.9,
    changeFrequency: "weekly",
  },
  "/whatsapp-automation-netherlands": {
    lastModified: "2026-05-20",
    priority: 0.9,
    changeFrequency: "weekly",
  },
};

const insightsIndexMeta = {
  lastModified: "2026-05-09",
  priority: 0.7,
  changeFrequency: "weekly" as const,
};
const insightArticleMeta = { priority: 0.7, changeFrequency: "monthly" as const };

const prioritizedInsightSlugs = new Set([
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
]);

const caseStudiesIndexMeta = {
  lastModified: "2026-06-02",
  priority: 0.7,
  changeFrequency: "monthly" as const,
};
const caseStudyArticleMeta = { priority: 0.6, changeFrequency: "monthly" as const };

const aboutPageMeta = {
  lastModified: "2026-05-09",
  priority: 0.6,
  changeFrequency: "monthly" as const,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.codehunterlab.com";
  const sitemapEntries: MetadataRoute.Sitemap = [];

  Object.entries(routeMeta).forEach(([route, meta]) => {
    getSeoLocalePolicy(route).indexableLocales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(meta.lastModified),
        changeFrequency: meta.changeFrequency,
        priority: meta.priority,
      });
    });
  });

  sitemapEntries.push({
    url: `${baseUrl}/en/insights`,
    lastModified: new Date(insightsIndexMeta.lastModified),
    changeFrequency: insightsIndexMeta.changeFrequency,
    priority: insightsIndexMeta.priority,
  });

  getSeoLocalePolicy("/about").indexableLocales.forEach((locale) => {
    sitemapEntries.push({
      url: `${baseUrl}/${locale}/about`,
      lastModified: new Date(aboutPageMeta.lastModified),
      changeFrequency: aboutPageMeta.changeFrequency,
      priority: aboutPageMeta.priority,
    });
  });

  insights.filter((article) => prioritizedInsightSlugs.has(article.slug)).forEach((article) => {
    getSeoLocalePolicy(`/insights/${article.slug}`).indexableLocales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/insights/${article.slug}`,
        lastModified: new Date(article.modifiedAt),
        changeFrequency: insightArticleMeta.changeFrequency,
        priority: insightArticleMeta.priority,
      });
    });
  });

  getSeoLocalePolicy("/case-studies").indexableLocales.forEach((locale) => {
    sitemapEntries.push({
      url: `${baseUrl}/${locale}/case-studies`,
      lastModified: new Date(caseStudiesIndexMeta.lastModified),
      changeFrequency: caseStudiesIndexMeta.changeFrequency,
      priority: caseStudiesIndexMeta.priority,
    });
  });

  caseStudies.forEach((study) => {
    getSeoLocalePolicy(`/case-studies/${study.slug}`).indexableLocales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/case-studies/${study.slug}`,
        lastModified: new Date(study.modifiedAt),
        changeFrequency: caseStudyArticleMeta.changeFrequency,
        priority: caseStudyArticleMeta.priority,
      });
    });
  });

  return sitemapEntries;
}
