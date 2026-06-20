import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const servicePages = [
  "app/[locale]/react-consulting/PageContent.tsx",
  "app/[locale]/nextjs-development-agency/PageContent.tsx",
  "app/[locale]/it-system-integration/PageContent.tsx",
  "app/[locale]/software-development-leiden/PageContent.tsx",
  "app/[locale]/services/custom-internal-tools-development/PageContent.tsx",
  "app/[locale]/n8n-consultant-netherlands/PageContent.tsx",
  "app/[locale]/ai-voice-agents-netherlands/PageContent.tsx",
  "app/[locale]/whatsapp-automation-netherlands/PageContent.tsx",
];

function heroSource(path) {
  const source = readFileSync(path, "utf8");
  const start = source.indexOf("{/* Hero Section");
  const end = source.indexOf("</section>", start);

  assert.notEqual(start, -1, `Missing hero section marker in ${path}`);
  assert.notEqual(end, -1, `Missing hero section close in ${path}`);

  return source.slice(start, end);
}

test("service page heroes use the CodeHunter editorial hero system", () => {
  for (const path of servicePages) {
    const hero = heroSource(path);

    assert.match(hero, /grid items-center gap-12 lg:grid-cols/, path);
    assert.match(hero, /border border-hunter-green\/20 bg-hunter-green\/10/, path);
    assert.match(hero, /rounded-xl bg-hunter-green px-10 py-4/, path);
    assert.doesNotMatch(hero, /text-gradient-enchanted|neon-glow-green|bg-blue-/, path);
  }
});
