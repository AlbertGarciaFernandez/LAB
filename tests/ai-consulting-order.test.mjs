import assert from "node:assert/strict";
import { test } from "node:test";
import { assertInOrder, readSource } from "./helpers/source.mjs";

const page = readSource("app/[locale]/ai-consulting/PageContent.tsx");
const sidebar = readSource("components/ui/SidebarNav.tsx");

test("AI consulting page sections follow the safer conversion narrative", () => {
  assertInOrder(page, [
    'id="hero"',
    'id="who-its-for"',
    'id="top-agents"',
    'id="what-we-build"',
    'id="tech-credibility"',
    'id="roi-calculator"',
    'id="pricing"',
    'id="migration"',
    'id="faq"',
  ]);
});

test("AI consulting sidebar matches the page section order", () => {
  assert.doesNotMatch(sidebar, /id: "use-cases"/);
  assert.match(sidebar, /\{ id: "migration", label: t\("engagementModels"\) \}/);

  assertInOrder(sidebar, [
    'id: "hero"',
    'id: "who-its-for"',
    'id: "top-agents"',
    'id: "what-we-build"',
    'id: "tech-credibility"',
    'id: "roi-calculator"',
    'id: "pricing"',
    'id: "migration"',
    'id: "faq"',
  ]);
});

test("AI consulting hero links directly to the ROI calculator", () => {
  assert.match(page, /href="#roi-calculator"/);
  assert.match(page, /hero\.calculator\.title/);
  assert.match(page, /hero\.calculator\.heading/);
  assert.doesNotMatch(page, /xl:text-8xl/);
});

test("AI consulting page uses the approved conversion section components", () => {
  assert.match(page, /whatWeBuild\.services\.map/);
  assert.match(page, /pricing\.items\.map/);
  assert.match(page, /ContactSection/);
  assert.match(page, /id="tech-credibility"/);
  assert.match(page, /id="roi-calculator"/);
});

test("AI consulting copy explains when software architecture comes before AI", () => {
  const messages = readSource("messages/en.json");

  assert.match(messages, /Sometimes the first AI step is software architecture/);
  assert.match(messages, /custom ERP\/CRM/i);
});

test("agent use cases are mapped to LEO ATLAS and ORION", () => {
  const topAgents = readSource("components/sections/TopAgentsSection.tsx");

  assert.match(topAgents, /agentUseCaseMap/);
  assert.match(topAgents, /agentId: "leo"/);
  assert.match(topAgents, /agentId: "atlas"/);
  assert.match(topAgents, /agentId: "orion"/);
  assert.match(topAgents, /useCases\.items\.map/);
});
