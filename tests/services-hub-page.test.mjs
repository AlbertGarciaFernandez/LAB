import assert from "node:assert/strict";
import { test } from "node:test";
import { readSource } from "./helpers/source.mjs";

const source = readSource("app/[locale]/services/page.tsx");

test("services page is structured as a decision hub", () => {
  assert.match(
    source,
    /const entryPoints = \[/,
    "Expected entry-point cards for visitor situations"
  );
  assert.match(source, /const capabilities = \[/, "Expected capabilities section data");
  assert.match(source, /const industries = \[/, "Expected industries section data");

  assert.match(source, /id="entry-points"/, "Expected entry-point section anchor");
  assert.match(source, /id="services-list"/, "Expected services section anchor");
  assert.match(source, /id="capabilities"/, "Expected capabilities section anchor");
  assert.match(source, /id="industries"/, "Expected industries section anchor");
});

test("services page separates buyable services from technical capabilities", () => {
  assert.match(source, /AI Automation & Agents|Automatización IA \/ Agentes/);
  assert.match(source, /Custom LLMs|LLMs personalizados/);
  assert.match(source, /n8n \/ workflows|n8n \/ workflows/);
  assert.match(source, /Healthcare|Salud/);
  assert.match(source, /SaaS \/ digital product|SaaS \/ producto digital/);
});
