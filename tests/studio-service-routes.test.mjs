import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { test } from "node:test";
import { localeMessages, readSource } from "./helpers/source.mjs";

const studioRoutes = [
  "/product-design-development",
  "/frontend-audit-product-review",
  "/training-enablement",
  "/technical-leadership",
];

const messages = localeMessages();

test("studio service routes have localized pages", () => {
  for (const route of studioRoutes) {
    assert.ok(
      existsSync(`app/[locale]${route}/page.tsx`),
      `Expected app/[locale]${route}/page.tsx to exist`
    );
    assert.ok(
      existsSync(`app/[locale]${route}/PageContent.tsx`),
      `Expected app/[locale]${route}/PageContent.tsx to exist`
    );
  }
});

test("studio service pages use differentiated CodeHunter layouts", () => {
  const expectedMarkers = {
    "/product-design-development": ["ProductCanvas", "IdentityLayer", "LaunchBoard"],
    "/frontend-audit-product-review": ["AuditScorecard", "SignalStack", "FindingRail"],
    "/training-enablement": ["WorkshopPath", "EnablementManual", "PracticeLoop"],
    "/technical-leadership": ["LeadershipRadar", "DecisionMatrix", "RiskBoard"],
  };

  for (const [route, markers] of Object.entries(expectedMarkers)) {
    const source = readSource(`app/[locale]${route}/PageContent.tsx`);

    for (const marker of markers) {
      assert.match(source, new RegExp(marker), `${route} should include ${marker}`);
    }
  }
});

test("studio service pages include enough decision-making content", () => {
  const requiredSections = ["AudienceFit", "EngagementScope", "DeliveryDetail", "DecisionFaq"];

  for (const route of studioRoutes) {
    const source = readSource(`app/[locale]${route}/PageContent.tsx`);

    for (const section of requiredSections) {
      assert.match(source, new RegExp(section), `${route} should include ${section}`);
    }
  }
});

test("home studio cards point to their own service pages", () => {
  const expectedHrefs = [
    "/product-design-development",
    "/ai-consulting",
    "/frontend-audit-product-review",
    "/training-enablement",
    "/technical-leadership",
  ];

  for (const [locale, localeMessages] of Object.entries(messages)) {
    const studioServices = localeMessages.WhatWeBuild.modes.studio.services;
    assert.deepEqual(
      studioServices.map((service) => service.href),
      expectedHrefs,
      `${locale} studio service hrefs should be specific service routes`
    );
    assert.equal(localeMessages.WhatWeBuild.modes.studio.ctaHref, "/services");
  }
});

test("expertise cards expose related service destinations", () => {
  const source = readSource("components/sections/02ExpertiseSection.tsx");

  for (const route of [
    "/expertise/ai-agents-automation",
    "/react-consulting",
    "/product-design-development",
    "/training-enablement",
    "/technical-leadership",
    "/it-system-integration",
  ]) {
    assert.match(source, new RegExp(route.replaceAll("/", "\\/")));
  }
});

test("new studio service routes are included in sitemap metadata", () => {
  const source = readSource("app/sitemap.ts");

  for (const route of studioRoutes) {
    assert.match(source, new RegExp(`"${route}"`));
  }
});

test("process navigation anchor exists on the process section", () => {
  const source = readSource("components/sections/06ProcessSection.tsx");

  assert.match(source, /id="process-contact"/);
});

test("custom internal tools page presents ERP CRM operations platforms with AI layer", () => {
  const source = readSource(
    "app/[locale]/services/custom-internal-tools-development/PageContent.tsx"
  );
  const page = readSource("app/[locale]/services/custom-internal-tools-development/page.tsx");
  const servicesHub = readSource("app/[locale]/services/page.tsx");
  const en = messages.en.InternalTools;

  assert.match(source, /OperatingSystemSection/);
  assert.match(page, /ERP\/CRM/i);
  assert.match(servicesHub, /custom ERP\/CRM/i);
  assert.match(en.Hero.description, /ERP\/CRM/i);
  assert.match(en.Hero.description, /AI layer/i);
  assert.match(en.OperatingSystem.title, /operating system/i);
  assert.match(en.OperatingSystem.items.join(" "), /client records/i);
  assert.match(en.OperatingSystem.items.join(" "), /staff/i);
  assert.match(en.OperatingSystem.items.join(" "), /mobile/i);
  assert.match(en.OperatingSystem.items.join(" "), /quotes/i);
  assert.match(en.OperatingSystem.aiLayer.desc, /ask/i);
  assert.match(en.SEO.description, /ERP\/CRM/i);
});

test("custom internal tools operating system section uses the CodeHunter UX system map", () => {
  const source = readSource(
    "app/[locale]/services/custom-internal-tools-development/PageContent.tsx"
  );

  assert.match(source, /SystemMapVisual/);
  assert.match(source, /OPERATING LAYER/);
  assert.match(source, /AI COMMAND LAYER/);
  assert.match(source, /data-erp-crm-capability/);
  assert.match(source, /border-hunter-green\/20/);
  assert.match(source, /shadow-\[0_30px_90px_-60px_rgba\(0,230,162,0\.85\)\]/);
});

test("custom internal tools page has complete locale copy for rendered sections", () => {
  for (const [locale, localeMessages] of Object.entries(messages)) {
    const internalTools = localeMessages.InternalTools;

    assert.ok(internalTools.Metrics, `${locale} should define InternalTools.Metrics`);
    assert.ok(internalTools.Transformation, `${locale} should define InternalTools.Transformation`);
    assert.ok(internalTools.Categories, `${locale} should define InternalTools.Categories`);
    assert.equal(typeof internalTools.Transformation.title, "string");
    assert.equal(typeof internalTools.Transformation.subtitle, "string");
  }
});

test("custom internal tools page uses hunter green and orange instead of purple accents", () => {
  const source = readSource(
    "app/[locale]/services/custom-internal-tools-development/PageContent.tsx"
  );

  assert.doesNotMatch(source, /purple/);
  assert.match(source, /hunter-green/);
  assert.match(source, /hunter-orange/);
});
