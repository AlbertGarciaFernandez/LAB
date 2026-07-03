import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

test("sitemap publishes only the prioritized english insights slugs", () => {
  const source = readFileSync("app/sitemap.ts", "utf8");

  assert.match(source, /const prioritizedInsightSlugs = new Set\(\[/);
  assert.match(source, /"automation-consultancy-netherlands"/);
  assert.match(source, /"ai-system-integration"/);
  assert.match(source, /"n8n-consultant-netherlands"/);
  assert.match(source, /"n8n-vs-zapier-netherlands"/);
  assert.match(source, /"whatsapp-automation-for-business"/);
  assert.match(source, /"whatsapp-automation-netherlands"/);
  assert.match(source, /"lead-qualification-automation-netherlands"/);
  assert.match(source, /"ai-agent-consulting"/);
  assert.match(source, /"react-consulting-services"/);
  assert.match(source, /"nextjs-consultancy-europe"/);
  assert.match(
    source,
    /insights\.filter\(\(article\) => prioritizedInsightSlugs\.has\(article\.slug\)\)\.forEach/
  );

  assert.doesNotMatch(
    source,
    /"workflow-automation-agency-netherlands"[\s\S]*prioritizedInsightSlugs/
  );
  assert.doesNotMatch(source, /"make-vs-n8n-netherlands"[\s\S]*prioritizedInsightSlugs/);
});
