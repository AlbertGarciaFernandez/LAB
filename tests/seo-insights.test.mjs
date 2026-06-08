import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
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

function collectTsxFiles(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const path = `${dir}/${entry}`;
    if (statSync(path).isDirectory()) {
      return collectTsxFiles(path);
    }
    return path.endsWith(".tsx") ? [path] : [];
  });
}

test("insight content includes the Search Console opportunity articles", () => {
  const source = readFileSync("content/insights.ts", "utf8");

  for (const slug of requiredSlugs) {
    assert.match(source, new RegExp(`slug:\\s*["']${slug}["']`));
  }

  assert.match(source, /targetQueries:/);
  assert.match(source, /relatedServices:/);
  assert.match(source, /publishedAt:/);
  assert.match(source, /modifiedAt:/);
  assert.match(source, /\/ai-consulting/);
  assert.match(source, /\/healthcare-automation-netherlands/);
  assert.match(source, /\/professional-services-automation-netherlands/);
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
  assert.match(articlePage, /createPageMetadata/);
});

test("sitemap includes the English insights hub and article URLs", () => {
  const sitemap = readFileSync("app/sitemap.ts", "utf8");

  assert.match(sitemap, /from ['"]@\/content\/insights['"]/);
  assert.match(sitemap, /\/en\/insights/);
  assert.match(sitemap, /getSeoLocalePolicy\(`\/insights\/\$\{article\.slug\}`\)/);
});

test("legacy AI automation URL redirects to the AI consulting page", () => {
  const nextConfig = readFileSync("next.config.mjs", "utf8");
  const sitemap = readFileSync("app/sitemap.ts", "utf8");

  assert.match(nextConfig, /source:\s*["']\/ai-automation-consulting-netherlands["']/);
  assert.match(nextConfig, /source:\s*["']\/:locale\(en\|es\|nl\)\/ai-automation-consulting-netherlands["']/);
  assert.match(nextConfig, /destination:\s*["']\/ai-consulting["']/);
  assert.match(nextConfig, /destination:\s*["']\/:locale\/ai-consulting["']/);
  assert.doesNotMatch(sitemap, /"\/ai-automation-consulting-netherlands"/);
});

test("locale layout sets metadataBase for absolute social metadata", () => {
  const layout = readFileSync("app/[locale]/layout.tsx", "utf8");
  const helper = readFileSync("utils/metadata.ts", "utf8");

  assert.match(layout, /createPageMetadata/);
  assert.match(helper, /metadataBase:\s*new URL\(BASE_URL\)/);
  assert.match(layout, /"@type":\s*"Organization"/);
  assert.match(layout, /#founder/);
});

test("insights are discoverable from visible site navigation", () => {
  const header = readFileSync("components/layout/Header.tsx", "utf8");
  const footer = readFileSync("components/layout/Footer.tsx", "utf8");
  const home = readFileSync("app/[locale]/page.tsx", "utf8");

  assert.match(header, /href="\/insights"[\s\S]*locale="en"/);
  assert.match(footer, /href="\/insights"[\s\S]*locale="en"/);
  assert.match(home, /InsightsSection/);
});

test("homepage includes the commercial trust and packaging sections", () => {
  const home = readFileSync("app/[locale]/page.tsx", "utf8");

  assert.match(home, /TrustProofSection/);
  assert.match(home, /WhatWeBuildSection/);
  assert.match(home, /PackagesSection/);
  assert.match(home, /ProcessSection/);
  assert.match(home, /ContactSection/);
  assert.doesNotMatch(home, /ProcessContactSection/);
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
  const nextJsPage = readFileSync("app/[locale]/nextjs-development-agency/page.tsx", "utf8");

  assert.match(localeLayout, /AI Automation Agency Netherlands \| CodeHunter Lab/);
  assert.match(localeLayout, /AI agents, n8n workflows, and custom integrations/);

  assert.match(aiConsultingLayout, /AI Consulting Netherlands \| Strategy, Delivery & AI Agents/);
  assert.match(
    aiConsultingLayout,
    /AI consulting in the Netherlands for strategy, implementation, and AI systems that ship to production/
  );

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
  assert.match(sitemap, /getSeoLocalePolicy\("\/about"\)/);
  assert.doesNotMatch(footer, /\/case-studies/);
});

test("commercial pages no longer link to temporary case studies", () => {
  const aiConsultingPage = readFileSync("app/[locale]/ai-consulting/page.tsx", "utf8");
  const nextJsPage = readFileSync("app/[locale]/nextjs-development-agency/PageContent.tsx", "utf8");

  assert.doesNotMatch(aiConsultingPage, /\/case-studies/);
  assert.doesNotMatch(aiConsultingPage, /zapier-to-n8n-migration/);
  assert.doesNotMatch(nextJsPage, /nextjs-platform-architecture/);
});

test("service pages use reusable ServiceSchema and keep visible FAQ sections where expected", () => {
  const serviceSchemaPages = [
    {
      route: "app/[locale]/ai-consulting/page.tsx",
      serviceName: /AI Consulting Netherlands/,
    },
    {
      route: "app/[locale]/nextjs-development-agency/page.tsx",
      serviceName: /Next\.js Development Agency/,
    },
    {
      route: "app/[locale]/react-consulting/page.tsx",
      serviceName: /React Consulting Services Netherlands/,
    },
    {
      route: "app/[locale]/it-system-integration/page.tsx",
      serviceName: /IT System Integration Netherlands/,
    },
    {
      route: "app/[locale]/software-development-leiden/page.tsx",
      serviceName: /Software Development Company Leiden/,
    },
    {
      route: "app/[locale]/services/custom-internal-tools-development/page.tsx",
      serviceName: /Custom Internal Tools Development/,
    },
    {
      route: "app/[locale]/n8n-consultant-netherlands/page.tsx",
      serviceName: /n8n Consultant Netherlands/,
    },
    {
      route: "app/[locale]/ai-voice-agents-netherlands/page.tsx",
      serviceName: /AI Voice Agents Netherlands/,
    },
    {
      route: "app/[locale]/whatsapp-automation-netherlands/page.tsx",
      serviceName: /WhatsApp Business Automation Netherlands/,
    },
  ];

  for (const page of serviceSchemaPages) {
    const routeSource = readFileSync(page.route, "utf8");

    assert.match(routeSource, /ServiceSchema/);
    assert.match(routeSource, page.serviceName);
    assert.doesNotMatch(routeSource, /FAQPage/);
  }

  const faqVisiblePages = [
    "app/[locale]/ai-consulting/PageContent.tsx",
    "app/[locale]/nextjs-development-agency/PageContent.tsx",
    "app/[locale]/n8n-consultant-netherlands/PageContent.tsx",
    "app/[locale]/ai-voice-agents-netherlands/PageContent.tsx",
    "app/[locale]/whatsapp-automation-netherlands/PageContent.tsx",
  ];

  for (const contentPath of faqVisiblePages) {
    const contentSource = readFileSync(contentPath, "utf8");
    assert.match(contentSource, /FAQ/);
    assert.doesNotMatch(contentSource, /FAQPage/);
  }
});

test("NL locale is configured in routing, constants, and middleware", () => {
  const routing = readFileSync("i18n/routing.ts", "utf8");
  const constants = readFileSync("utils/constants.ts", "utf8");
  const middleware = readFileSync("middleware.ts", "utf8");

  assert.match(routing, /locales:\s*\[.*"nl".*\]/);
  assert.match(routing, /alternateLinks:\s*false/);
  assert.match(constants, /LOCALES\s*=\s*\[.*"nl".*\]/);
  assert.match(middleware, /\(en\|es\|nl\)/);
});

test("commercial pages do not ship restricted FAQPage structured data", () => {
  const pageSources = collectTsxFiles("app/[locale]")
    .filter((file) => !file.includes("/lab/"))
    .map((file) => ({ file, source: readFileSync(file, "utf8") }));

  for (const { file, source } of pageSources) {
    assert.doesNotMatch(source, /"@type":\s*"FAQPage"/, file);
    assert.doesNotMatch(source, /'@type':\s*'FAQPage'/, file);
  }
});
