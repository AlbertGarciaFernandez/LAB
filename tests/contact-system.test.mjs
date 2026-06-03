import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { test } from "node:test";

function collectTsxFiles(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const path = `${dir}/${entry}`;
    if (statSync(path).isDirectory()) {
      return collectTsxFiles(path);
    }
    return path.endsWith(".tsx") ? [path] : [];
  });
}

test("contact form supports full and compact variants with full-form escape hatch", () => {
  const form = readFileSync("components/ui/ContactForm.tsx", "utf8");

  assert.match(form, /type ContactFormVariant = "full" \| "compact"/);
  assert.match(form, /interface ContactFormProps/);
  assert.match(form, /variant\?: ContactFormVariant/);
  assert.match(form, /onRequestFullForm\?: \(\) => void/);
  assert.match(form, /variant === "compact"/);
  assert.match(form, /onRequestFullForm/);
});

test("reusable contact section renders the full form", () => {
  const section = readFileSync("components/sections/ContactSection.tsx", "utf8");

  assert.match(section, /ContactForm/);
  assert.match(section, /variant="full"/);
  assert.match(section, /id="contact"/);
  assert.match(section, /Book a Call/);
});

test("home and ai-consulting both expose the full contact section", () => {
  const home = readFileSync("app/[locale]/page.tsx", "utf8");
  const aiConsulting = readFileSync("app/[locale]/ai-consulting/PageContent.tsx", "utf8");

  assert.match(home, /ContactSection/);
  assert.match(home, /ProcessSection/);
  assert.doesNotMatch(home, /ProcessContactSection/);
  assert.match(aiConsulting, /ContactSection/);
});

test("layout mounts a floating contact CTA using the compact form", () => {
  const layout = readFileSync("app/[locale]/layout.tsx", "utf8");
  const cta = readFileSync("components/ui/FloatingContactCta.tsx", "utf8");
  const cookie = readFileSync("components/ui/CookieConsent.tsx", "utf8");

  assert.match(layout, /FloatingContactCta/);
  assert.match(cta, /useTranslations\("FloatingContactCta"\)/);
  assert.match(cta, /fixed/);
  assert.match(cta, /variant="compact"/);
  assert.match(cta, /bottom-\d+/);
  assert.match(cookie, /fixed bottom-6 left-6/);
});

test("contact form visible copy is served from locale messages", () => {
  const form = readFileSync("components/ui/ContactForm.tsx", "utf8");

  assert.match(form, /useTranslations\("ContactForm"\)/);
  assert.doesNotMatch(form, />Book a Call</);
  assert.doesNotMatch(form, />Full name \*</);
  assert.doesNotMatch(form, />Send message</);
});

test("contact hash always resolves to a real form entrypoint", () => {
  const cta = readFileSync("components/ui/FloatingContactCta.tsx", "utf8");

  assert.match(cta, /window\.location\.hash === "#contact"/);
  assert.match(cta, /const target = document\.getElementById\("contact"\)/);
  assert.match(cta, /if \(!target\) \{/);
  assert.match(cta, /hashchange/);
});

test("contact links use local hash navigation instead of absolute homepage hashes", () => {
  const files = collectTsxFiles("app/[locale]")
    .concat(collectTsxFiles("components"))
    .map((file) => ({ file, source: readFileSync(file, "utf8") }));

  for (const { file, source } of files) {
    assert.doesNotMatch(source, /href="\/#contact"/, file);
    assert.doesNotMatch(source, /href=\{`\/\$\{params\.locale\}\/\#contact`\}/, file);
  }
});
