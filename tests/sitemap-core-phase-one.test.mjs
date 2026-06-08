import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

test("phase-one sitemap reduction experiment is not active", () => {
  const source = readFileSync("app/sitemap.ts", "utf8");

  assert.match(source, /from "@\/content\/insights"/);
  assert.match(source, /from "@\/content\/case-studies"/);
  assert.match(source, /getSeoLocalePolicy\(/);
});
