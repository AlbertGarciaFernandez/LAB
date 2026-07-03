import assert from "node:assert/strict";
import { test } from "node:test";
import { localeMessages, readSource } from "./helpers/source.mjs";

const source = readSource("components/sections/PackagesSection.tsx");
const messages = localeMessages();

test("package card decorative overlays cannot intercept the details link", () => {
  const overlays =
    source.match(/className="[^"]*pointer-events-none[^"]*absolute inset-0[^"]*"/g) ?? [];

  assert.ok(overlays.length >= 2, "Expected decorative overlays to opt out of pointer events");
});

test("package details link is layered above decorative card elements", () => {
  const linkMatch = source.match(/<Link\s+href=\{item\.href\}\s+className="([^"]+)"/);
  assert.ok(linkMatch, "Expected package details Link with href={item.href}");

  const className = linkMatch[1];
  for (const requiredClass of ["relative", "z-10", "inline-flex"]) {
    assert.match(className, new RegExp(`(^|\\s)${requiredClass}(\\s|$)`));
  }
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
    ["View sprint scope", "View build scope", "View partner model"]
  );
  assert.deepEqual(
    messages.es.Packages.items.map((item) => item.cta),
    ["Ver alcance del sprint", "Ver alcance de construcción", "Ver modelo de partner"]
  );
  assert.deepEqual(
    messages.nl.Packages.items.map((item) => item.cta),
    ["Bekijk sprintscope", "Bekijk buildscope", "Bekijk partnermodel"]
  );
});
