import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const page = readFileSync("app/[locale]/ai-consulting/PageContent.tsx", "utf8");
const sidebar = readFileSync("components/ui/SidebarNav.tsx", "utf8");

function assertInOrder(source, markers) {
  let previous = -1;

  for (const marker of markers) {
    const current = source.indexOf(marker);
    assert.notEqual(current, -1, `Missing marker: ${marker}`);
    assert.ok(current > previous, `Expected ${marker} to appear after previous marker`);
    previous = current;
  }
}

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
  assert.match(sidebar, /\{ id: "migration", label: "Engagement Models" \}/);

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
  assert.match(page, /Estimate ROI first/);
  assert.doesNotMatch(page, /xl:text-8xl/);
});

test("AI consulting page uses the approved refreshed section treatments", () => {
  assert.match(page, /past the AI toy phase/);
  assert.match(page, /what we build editorial bento/i);
  assert.match(page, /production standards strip/i);
});

test("agent use cases are vertical and mapped to LEO ATLAS and ORION", () => {
  const topAgents = readFileSync("components/sections/TopAgentsSection.tsx", "utf8");

  assert.match(topAgents, /agentUseCaseMap/);
  assert.match(topAgents, /agentId: "leo"/);
  assert.match(topAgents, /agentId: "atlas"/);
  assert.match(topAgents, /agentId: "orion"/);
  assert.match(topAgents, /Vertical agent use case transfer/);
  assert.match(
    topAgents,
    /Repetitive bottleneck\/advantage\/ecosystem block intentionally commented out/
  );
  assert.match(topAgents, /\{false && \(/);
});
