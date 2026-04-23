import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import ts from "typescript";
import { test } from "node:test";

async function loadLabModule() {
  const source = readFileSync("content/lab.ts", "utf8");
  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2020,
    },
  }).outputText;

  const moduleUrl = `data:text/javascript;charset=utf-8,${encodeURIComponent(transpiled)}`;
  return import(moduleUrl);
}

test("lab data helpers return localized content and rich runtime shapes", async () => {
  const lab = await loadLabModule();

  const en = lab.getLabData("en");
  const es = lab.getLabData("es");
  const fallback = lab.getLabData("pt-BR");

  assert.ok(en.systems.length > 0);
  assert.ok(en.resources.length > 0);
  assert.ok(es.systems.length > 0);
  assert.ok(es.resources.length > 0);
  assert.deepEqual(es.systems, en.systems);
  assert.deepEqual(es.resources, en.resources);
  assert.deepEqual(fallback.systems, en.systems);
  assert.deepEqual(fallback.resources, en.resources);

  const system = lab.getSystemBySlug("foundations", "es");
  assert.equal(system?.slug, "foundations");
  assert.equal(system?.progressPercent, 33);
  assert.equal(system?.modules[0]?.summary, "Understand the platform, scope, and learning path.");

  const lesson = lab.getLessonBySlug("foundations", "map-client-intake", "es");
  assert.equal(lesson?.slug, "map-client-intake");
  assert.equal(lesson?.problem, "The team needs a clear starting point.");
  assert.ok(Array.isArray(lesson?.steps));
  assert.ok(lesson?.downloads?.length);

  assert.equal(en.copy.ctaPrimary, "View Systems");
  assert.equal(en.copy.ctaSecondary, "Preview Platform");
  assert.equal(en.user.activeSystemSlug, "foundations");
  assert.equal(en.user.overallProgressSummary, "3 systems, 5 resources, 1 path to launch.");
  assert.equal(en.resources[0].downloadLabel, "Download acquisition stack");
  assert.equal(en.systems[0].label, "Foundation layer");
  assert.equal(en.systems[0].overview, "Start here to orient the lab and define the base strategy.");
  assert.equal(en.systems[0].modules[0].progressPercent, 100);
  assert.equal(en.systems[0].modules[0].lessons[0].example, "Use the overview to decide where to begin.");
});

test("package test script runs the full mjs test suite", () => {
  const pkg = readFileSync("package.json", "utf8");
  assert.match(pkg, /"test": "node --test tests\/\*\.test\.mjs"/);
});
