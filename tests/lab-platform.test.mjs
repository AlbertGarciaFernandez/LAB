import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

test("lab content defines three systems and five resource categories", () => {
  const source = readFileSync("content/lab.ts", "utf8");

  assert.match(source, /System 01 — Foundations/);
  assert.match(source, /System 02 — Operations/);
  assert.match(source, /System 03 — Architecture/);
  assert.match(source, /problem:/);
  assert.match(source, /explanation:/);
  assert.match(source, /steps:/);
  assert.match(source, /example:/);
  assert.match(source, /downloads:/);
  assert.match(source, /summary:/);
  assert.match(source, /progressPercent:/);
  assert.match(source, /label:/);
  assert.match(source, /shortDescription:/);
  assert.match(source, /overview:/);
  assert.match(source, /Acquisition/);
  assert.match(source, /Content/);
  assert.match(source, /Reporting/);
  assert.match(source, /Operations/);
  assert.match(source, /Security/);
  assert.match(source, /View Systems/);
  assert.match(source, /Preview Platform/);
  assert.match(source, /downloadLabel:/);
  assert.match(source, /activeSystemSlug:/);
  assert.match(source, /overallProgressSummary:/);
  assert.match(source, /getLabData\(locale: string\)/);
  assert.match(source, /locale === "es"/);
  assert.match(source, /es:\s*sharedLabLocaleData/);
});

test("package test script runs the full mjs test suite", () => {
  const pkg = readFileSync("package.json", "utf8");
  assert.match(pkg, /"test": "node --test tests\/\*\.test\.mjs"/);
});
