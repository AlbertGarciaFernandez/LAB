import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const sections = [
  ["components/sections/04BioSection.tsx", /t\("bgText"\)/, /t\("bgNumber"\)/],
  ["components/sections/TrustProofSection.tsx", /t\("bgText"\)/, /t\("bgNumber"\)/],
  ["components/sections/02ExpertiseSection.tsx", /t\("bgText"\)/, /t\("bgNumber"\)/],
  ["components/sections/WhatWeBuildSection.tsx", /t\("bgText"\)/, /t\("bgNumber"\)/],
  ["components/sections/PackagesSection.tsx", /t\("bgText"\)/, /t\("bgNumber"\)/],
  ["components/sections/InsightsSection.tsx", /t\("bgText"\)/, /t\("bgNumber"\)/],
  ["components/sections/06ProcessSection.tsx", /t\("bgText"\)/, /t\("bgNumber"\)/],
  ["components/sections/ContactSection.tsx", /t\("contactBgText"\)/, /t\("contactBgNumber"\)/],
];

test("home sections use left wordmarks and bottom-right numbers as decorative backgrounds", () => {
  for (const [file, wordPattern, numberPattern] of sections) {
    const source = readFileSync(file, "utf8");

    assert.match(source, wordPattern, file);
    assert.match(source, numberPattern, file);
    assert.match(source, /top-10 w-full overflow-hidden opacity-\[0\.05\]/, file);
    assert.match(source, /bottom-4/, file);
    assert.match(source, /overflow-hidden opacity-\[0\.05\]/, file);
  }
});

test("locale messages expose the home background words and numbers", () => {
  for (const file of ["messages/en.json", "messages/es.json", "messages/nl.json"]) {
    const source = readFileSync(file, "utf8");

    for (const key of [
      '"Bio"',
      '"TrustProof"',
      '"Expertise"',
      '"WhatWeBuild"',
      '"Packages"',
      '"InsightsHome"',
      '"Process"',
    ]) {
      assert.match(source, new RegExp(`${key}[\\s\\S]*"bgText"`), `${file}:${key}`);
      assert.match(source, new RegExp(`${key}[\\s\\S]*"bgNumber"`), `${file}:${key}`);
    }

    assert.match(source, /"contactBgText"/, file);
    assert.match(source, /"contactBgNumber"/, file);
    assert.match(source, /^  "InsightsHome": \{/m, file);
  }
});

test("process section defines a single decorative background number", () => {
  const source = readFileSync("components/sections/06ProcessSection.tsx", "utf8");
  const matches = source.match(/t\("bgNumber"\)/g) ?? [];

  assert.equal(matches.length, 1);
});

test("process section defines a single decorative background word inside its own block", () => {
  const source = readFileSync("components/sections/06ProcessSection.tsx", "utf8");
  const matches = source.match(/t\("bgText"\)/g) ?? [];

  assert.equal(matches.length, 1);
});

test("process and contact backgrounds are not clipped by overflow-hidden containers", () => {
  const processSource = readFileSync("components/sections/06ProcessSection.tsx", "utf8");
  const contactSource = readFileSync("components/sections/ContactSection.tsx", "utf8");

  assert.doesNotMatch(processSource, /section className="[^"]*overflow-hidden/);
  assert.doesNotMatch(contactSource, /className={`relative scroll-mt-32 overflow-hidden \$\{className\}`\.trim\(\)}/);
});

test("process and contact push decorative backgrounds to the edges", () => {
  const processSource = readFileSync("components/sections/06ProcessSection.tsx", "utf8");
  const contactSource = readFileSync("components/sections/ContactSection.tsx", "utf8");

  assert.match(processSource, /-left-8/);
  assert.match(processSource, /md:-left-12/);
  assert.match(processSource, /-right-4/);
  assert.match(processSource, /md:-right-8/);
  assert.match(contactSource, /-left-8/);
  assert.match(contactSource, /md:-left-12/);
  assert.match(contactSource, /-right-4/);
  assert.match(contactSource, /md:-right-8/);
  assert.match(contactSource, /relative z-10 mx-auto max-w-7xl/);
});

test("studio, process, and contact use the approved background numbering", () => {
  for (const file of ["messages/en.json", "messages/es.json", "messages/nl.json"]) {
    const source = readFileSync(file, "utf8");

    assert.match(source, /"Bio"[\s\S]*"bgNumber": "06"/, file);
    assert.match(source, /"Process"[\s\S]*"bgNumber": "07"/, file);
    assert.match(source, /"Process"[\s\S]*"contactBgNumber": "08"/, file);
  }
});
