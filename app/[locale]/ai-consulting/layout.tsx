import type { Metadata } from "next";

const baseUrl = "https://www.codehunterlab.com";
const path = "/ai-consulting";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  return {
    title: "AI Consulting Netherlands | Strategy, Delivery & AI Agents",
    description:
      "AI consulting in the Netherlands for strategy, implementation, and AI systems that ship to production. AI agents, workflow automation, and integration work for teams beyond pilots.",
    keywords: [
      "AI consulting Netherlands",
      "AI consulting services",
      "AI automation consulting",
      "deploy AI agents",
      "AI workflow automation",
      "custom AI integration",
      "AI consulting Leiden",
      "AI implementation project",
      "AI strategy consulting",
      "production AI systems",
    ],
    alternates: {
      canonical: `${baseUrl}/${locale}${path}`,
      languages: {
        en: `${baseUrl}/en${path}`,
        es: `${baseUrl}/es${path}`,
        "x-default": `${baseUrl}/en${path}`,
      },
    },
    openGraph: {
      title: "AI Consulting Netherlands | Strategy, Delivery & AI Agents",
      description:
        "AI consulting in the Netherlands for strategy, implementation, and AI systems that ship to production. AI agents, workflow automation, and integration work for teams beyond pilots.",
      url: `${baseUrl}/${locale}${path}`,
      siteName: "CodeHunter Lab",
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
      images: [
        {
          url: `${baseUrl}/${locale}${path}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: "AI Consulting Netherlands | Strategy, Delivery & AI Agents",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "AI Consulting Netherlands | Strategy, Delivery & AI Agents",
      description:
        "AI consulting in the Netherlands for strategy, implementation, and AI systems that ship to production. AI agents, workflow automation, and integration work for teams beyond pilots.",
      images: [`${baseUrl}/${locale}${path}/opengraph-image`],
    },
  };
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does an AI consulting engagement cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scope varies significantly, so we don't publish fixed rates. AI Strategy Sprints typically range from €2,500–€5,000. Implementation Projects start at €8,000 and scale with integration complexity. Ongoing Partner engagements start from €5,000/month and are scoped around the amount of engineering capacity required. We provide a detailed estimate after the initial strategy call — before you commit to anything.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI Strategy Sprint: 1–2 weeks. Implementation Projects: 4–8 weeks from scoping to deployment, depending on how many systems are involved and their integration complexity. We set realistic timelines at scoping and don't revise them unless requirements change materially.",
      },
    },
    {
      "@type": "Question",
      name: "What do you need from us to get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A clear description of the problem you want to solve and access to the relevant systems — CRM credentials, API documentation, or similar. We don't require weeks of onboarding. A focused discovery call is usually enough to scope accurately.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle our data and privacy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GDPR compliance is a baseline, not an option. We define data handling at scoping: what data flows through the system, where it's stored, and who has access. For sensitive industries or regulated data, we can work with on-premise or private cloud deployments.",
      },
    },
    {
      "@type": "Question",
      name: "Does the AI integrate with our existing tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — integration with your existing stack is a core requirement, not a feature. We have experience integrating with HubSpot, Salesforce, Pipedrive, WhatsApp Business API, Slack, common ERPs, and custom APIs. If you use it, we've likely connected to it or can.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with companies outside the Netherlands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We're based in Leiden but work with clients across Europe and internationally. All engagements can run fully remotely.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after deployment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Implementation Projects include 30 days of post-deployment support. Ongoing Partner engagements cover continuous maintenance and development. For completed one-time projects, we provide full documentation and a handover session so your team can operate the system independently.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build on top of tools we already use, like Make or Zapier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We frequently migrate clients from Zapier or Make to more robust, cost-effective stacks — or extend automations they've already started. We recommend based on your volume, budget, and maintenance capacity, not on what's convenient for us.",
      },
    },
    {
      "@type": "Question",
      name: "What if we're not sure which AI use case to start with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's exactly what the AI Strategy Sprint is for. We map your operations, rank automation opportunities by ROI, and hand you a prioritized roadmap. You leave with a clear implementation plan — whether you work with us to build it or take it in-house.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${baseUrl}/en${path}`,
  name: "AI Consulting Netherlands — CodeHunter Lab",
  description:
    "AI consulting services in the Netherlands. We design and deploy AI agents, workflow automation, and system integrations. Production systems, not demos.",
  url: `${baseUrl}/en${path}`,
  priceRange:
    "Free fit check; AI Strategy Sprint €2,500–€5,000; implementation from €8,000; ongoing partner from €5,000/month",
  provider: {
    "@type": "Organization",
    name: "CodeHunter Lab",
    url: baseUrl,
  },
  areaServed: [
    { "@type": "Country", name: "Netherlands" },
    { "@type": "Continent", name: "Europe" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Consulting Engagements",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Strategy Sprint",
          description:
            "Workflow audit, automation opportunity map prioritized by ROI, technical architecture proposal, budget and timeline estimate. Fixed scope, 1–2 weeks.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Implementation Project",
          description:
            "One live AI system deployed to your infrastructure. Full stack integration, documentation, and 30-day post-deployment support. Fixed scope, fixed price. You own the code.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ongoing AI Partner",
          description:
            "Embedded AI engineering team. New automations, maintenance, and continuous scaling. Senior engineers, direct access. Monthly engagement.",
        },
      },
    ],
  },
};

export default function AIConsultingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
