import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

test("lab content defines three systems and five resource categories", () => {
  const source = readFileSync("content/lab.ts", "utf8");

  assert.match(source, /System 01 — Foundations/);
  assert.match(source, /System 02 — Operations/);
  assert.match(source, /System 03 — Architecture/);
  assert.match(source, /Acquisition/);
  assert.match(source, /Content/);
  assert.match(source, /Reporting/);
  assert.match(source, /Operations/);
  assert.match(source, /Security/);
  assert.match(source, /View Systems/);
  assert.match(source, /Preview Platform/);
});

test("package test script runs the full mjs test suite", () => {
  const pkg = readFileSync("package.json", "utf8");
  assert.match(pkg, /"test": "node --test tests\/\*\.test\.mjs"/);
});
