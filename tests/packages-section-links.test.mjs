import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const source = readFileSync("components/sections/PackagesSection.tsx", "utf8");
const messages = {
  en: JSON.parse(readFileSync("messages/en.json", "utf8")),
  es: JSON.parse(readFileSync("messages/es.json", "utf8")),
  nl: JSON.parse(readFileSync("messages/nl.json", "utf8")),
};

test("package card decorative overlay cannot intercept the details link", () => {
  assert.match(
    source,
    /className="[^"]*pointer-events-none[^"]*absolute inset-0 rounded-3xl bg-gradient-to-br/
  );
});

test("package details link is layered above decorative card elements", () => {
  assert.match(source, /className="[^"]*relative z-10[^"]*mt-7 inline-flex[^"]*"/);
});

test("home package cards link to the package explanation sections", () => {
  for (const locale of Object.keys(messages)) {
    const items = messages[locale].Packages.items;

    assert.equal(items[0].href, "/ai-consulting#pricing");
    assert.equal(items[1].href, "/ai-consulting#pricing");
    assert.equal(items[2].href, "/ai-consulting#migration");
  }
});

test("home package cards use package-specific CTA copy", () => {
  assert.deepEqual(
    messages.en.Packages.items.map((item) => item.cta),
    ["View sprint scope", "View implementation scope", "View partner model"]
  );
  assert.deepEqual(
    messages.es.Packages.items.map((item) => item.cta),
    ["Ver alcance del sprint", "Ver alcance de implementación", "Ver modelo de partner"]
  );
  assert.deepEqual(
    messages.nl.Packages.items.map((item) => item.cta),
    ["Bekijk sprintscope", "Bekijk implementatiescope", "Bekijk partnermodel"]
  );
});
