import assert from "node:assert/strict";
import { test } from "node:test";
import { collectTsxFiles, localeMessages, readSource } from "./helpers/source.mjs";

test("contact form supports full and compact variants with full-form escape hatch", () => {
  const form = readSource("components/ui/ContactForm.tsx");

  assert.match(form, /type ContactFormVariant = "full" \| "compact"/);
  assert.match(form, /interface ContactFormProps/);
  assert.match(form, /variant\?: ContactFormVariant/);
  assert.match(form, /onRequestFullForm\?: \(\) => void/);
  assert.match(form, /variant === "compact"/);
  assert.match(form, /onRequestFullForm/);
});

test("reusable contact section renders the translated full form", () => {
  const section = readSource("components/sections/ContactSection.tsx");
  const messages = localeMessages();

  assert.match(section, /useTranslations\("Process"\)/);
  assert.match(section, /ContactForm/);
  assert.match(section, /variant="full"/);
  assert.match(section, /id="contact"/);
  assert.match(section, /t\("contactBadge"\)/);

  for (const locale of Object.keys(messages)) {
    assert.equal(typeof messages[locale].Process.contactBadge, "string");
    assert.ok(messages[locale].Process.contactBadge.length > 0);
  }
});

test("home and ai-consulting both expose the full contact section", () => {
  const home = readSource("app/[locale]/page.tsx");
  const aiConsulting = readSource("app/[locale]/ai-consulting/PageContent.tsx");

  assert.match(home, /ContactSection/);
  assert.match(home, /ProcessSection/);
  assert.doesNotMatch(home, /ProcessContactSection/);
  assert.match(aiConsulting, /ContactSection/);
});

test("layout mounts a floating contact CTA using the compact form", () => {
  const layout = readSource("app/[locale]/layout.tsx");
  const cta = readSource("components/ui/FloatingContactCta.tsx");
  const cookie = readSource("components/ui/CookieConsent.tsx");

  assert.match(layout, /FloatingContactCta/);
  assert.match(cta, /useTranslations\("FloatingContactCta"\)/);
  assert.match(cta, /fixed/);
  assert.match(cta, /variant="compact"/);
  assert.match(cta, /bottom-\d+/);
  assert.match(cookie, /fixed bottom-6 left-6/);
});

test("floating contact CTA starts expanded then cycles back to icon-only", () => {
  const cta = readSource("components/ui/FloatingContactCta.tsx");

  assert.match(cta, /const \[isExpanded, setIsExpanded\] = useState\(true\)/);
  assert.match(cta, /COLLAPSE_AFTER_MS/);
  assert.match(cta, /REEXPAND_EVERY_MS/);
  assert.match(cta, /aria-label=\{t\("button"\)\}/);
});

test("floating contact CTA hides while other modal dialogs are open", () => {
  const cta = readSource("components/ui/FloatingContactCta.tsx");
  const header = readSource("components/layout/Header.tsx");
  const expertise = readSource("components/sections/02ExpertiseSection.tsx");

  assert.match(cta, /querySelector\('\[data-cta-suppress="true"\]'\)/);
  assert.match(cta, /MutationObserver/);
  assert.match(header, /data-cta-suppress="true"/);
  assert.match(expertise, /data-cta-suppress="true"/);
});

test("compact floating contact form uses unique field ids", () => {
  const form = readSource("components/ui/ContactForm.tsx");

  assert.match(form, /const idPrefix = compact \? "floating-contact" : "contact-form"/);
  assert.match(form, /function fieldId\(id: string\)/);
  assert.match(form, /scrollToFirstError\(validationErrors, idPrefix\)/);
  assert.match(form, /htmlFor=\{fieldId\("name"\)\}/);
  assert.match(form, /id=\{fieldId\("name"\)\}/);
});

test("contact form visible copy is served from locale messages", () => {
  const form = readSource("components/ui/ContactForm.tsx");

  assert.match(form, /useTranslations\("ContactForm"\)/);
  assert.doesNotMatch(form, />Book a Call</);
  assert.doesNotMatch(form, />Full name \*</);
  assert.doesNotMatch(form, />Send message</);
});

test("contact hash always resolves to a real form entrypoint", () => {
  const cta = readSource("components/ui/FloatingContactCta.tsx");

  assert.match(cta, /window\.location\.hash === "#contact"/);
  assert.match(cta, /const target = document\.getElementById\("contact"\)/);
  assert.match(cta, /if \(!target\) \{/);
  assert.match(cta, /hashchange/);
});

test("contact links use local hash navigation instead of absolute homepage hashes", () => {
  const files = collectTsxFiles("app/[locale]")
    .concat(collectTsxFiles("components"))
    .map((file) => ({ file, source: readSource(file) }));

  for (const { file, source } of files) {
    assert.doesNotMatch(source, /href="\/#contact"/, file);
    assert.doesNotMatch(source, /href=\{`\/\$\{params\.locale\}\/\#contact`\}/, file);
  }
});
