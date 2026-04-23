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

  const enA = lab.getLabData("en");
  const enB = lab.getLabData("en");
  const originalTitle = enB.systems[0].title;
  const originalStepTitle = enB.systems[0].modules[0].lessons[0].steps[0].title;
  const originalBullet = enB.systems[0].modules[0].lessons[0].example.bullets[0];
  enA.systems[0].title = "Mutated title";
  enA.systems[0].modules[0].lessons[0].steps[0].title = "Mutated step";
  enA.systems[0].modules[0].lessons[0].example.bullets[0] = "Mutated bullet";

  assert.equal(enB.systems[0].title, originalTitle);
  assert.equal(enB.systems[0].modules[0].lessons[0].steps[0].title, originalStepTitle);
  assert.equal(enB.systems[0].modules[0].lessons[0].example.bullets[0], originalBullet);

  const en = lab.getLabData("en");
  const es = lab.getLabData("es");
  const esEs = lab.getLabData("es-ES");
  const esMx = lab.getLabData("es_MX");
  const fallback = lab.getLabData("pt-BR");

  assert.equal(en.locale, "en");
  assert.equal(es.locale, "es");
  assert.equal(esEs.locale, "es");
  assert.equal(fallback.locale, "en");

  assert.equal(en.systems.length, 3);
  assert.equal(en.resources.length, 5);
  assert.equal(es.systems.length, 3);
  assert.equal(es.resources.length, 5);
  assert.equal(esEs.systems.length, 3);
  assert.equal(esMx.systems.length, 3);
  assert.notStrictEqual(en, es);
  assert.notStrictEqual(en.systems, es.systems);
  assert.notStrictEqual(en.resources, es.resources);
  assert.notStrictEqual(en.systems[0].modules, es.systems[0].modules);
  assert.notStrictEqual(en.systems[0].modules[0].lessons, es.systems[0].modules[0].lessons);
  assert.deepEqual(en.systems.map((system) => system.slug), es.systems.map((system) => system.slug));
  assert.deepEqual(en.resources.map((resource) => resource.slug), es.resources.map((resource) => resource.slug));
  assert.deepEqual(
    en.systems.flatMap((system) => system.modules.map((module) => module.slug)),
    es.systems.flatMap((system) => system.modules.map((module) => module.slug)),
  );
  assert.deepEqual(
    en.systems.flatMap((system) => system.modules.flatMap((module) => module.lessons.map((lesson) => lesson.slug))),
    es.systems.flatMap((system) => system.modules.flatMap((module) => module.lessons.map((lesson) => lesson.slug))),
  );
  assert.deepEqual(fallback.systems.map((system) => system.slug), en.systems.map((system) => system.slug));
  assert.deepEqual(esEs.systems.map((system) => system.slug), en.systems.map((system) => system.slug));
  assert.deepEqual(esMx.resources.map((resource) => resource.slug), en.resources.map((resource) => resource.slug));

  for (const locale of ["en", "es"]) {
    const data = lab.getLabData(locale);
    const systemSlugs = data.systems.map((system) => system.slug);
    const resourceSlugs = data.resources.map((resource) => resource.slug);

    assert.equal(new Set(systemSlugs).size, systemSlugs.length);
    assert.equal(new Set(resourceSlugs).size, resourceSlugs.length);
    assert.ok(data.systems.every((system) => system.modules.length > 0));
    assert.ok(data.systems.every((system) => system.modules.every((module) => module.lessons.length > 0)));
    assert.ok(data.user.activeSystemSlug);
    assert.ok(systemSlugs.includes(data.user.activeSystemSlug));

    for (const system of data.systems) {
      const moduleSlugs = system.modules.map((module) => module.slug);
      const lessonSlugs = system.modules.flatMap((module) => module.lessons.map((lesson) => lesson.slug));

      assert.equal(new Set(moduleSlugs).size, moduleSlugs.length);
      assert.equal(new Set(lessonSlugs).size, lessonSlugs.length);
      assert.ok(moduleSlugs.length > 0);
      assert.ok(lessonSlugs.length > 0);

      const resolvedSystem = lab.getSystemBySlug(system.slug, locale);
      assert.equal(resolvedSystem?.slug, system.slug);

      for (const lessonSlug of lessonSlugs) {
        const resolvedLesson = lab.getLessonBySlug(system.slug, lessonSlug, locale);
        assert.equal(resolvedLesson?.slug, lessonSlug);
      }
    }
  }

  const system = lab.getSystemBySlug("foundations", "es-ES");
  assert.equal(system?.slug, "foundations");
  assert.equal(system?.label, "System 01");
  assert.equal(system?.progressPercent, 33);
  assert.equal(system?.modules[0]?.summary, "Understand the platform, scope, and learning path.");

  const lesson = lab.getLessonBySlug("foundations", "map-client-intake", "es_MX");
  assert.equal(lesson?.slug, "map-client-intake");
  assert.equal(lesson?.problem, "The team needs a clear starting point.");
  assert.ok(Array.isArray(lesson?.explanation));
  assert.equal(typeof lesson?.steps?.[0]?.title, "string");
  assert.equal(typeof lesson?.steps?.[0]?.body, "string");
  assert.ok(Array.isArray(lesson?.example?.bullets));
  assert.ok(lesson?.downloads?.length);
  assert.equal(en.user.activeSystemSlug, "foundations");
  assert.ok(en.systems.some((item) => item.slug === en.user.activeSystemSlug));

  assert.equal(en.copy.ctaPrimary, "View Systems");
  assert.equal(en.copy.ctaSecondary, "Preview Platform");
  assert.equal(en.landing.hero.eyebrow, "Paid Social Landing Surface");
  assert.equal(en.landing.navItems[0].label, "Why Lab");
  assert.equal(en.user.overallProgressSummary, "3 systems, 5 resources, 1 path to launch.");
  assert.equal(en.resources[0].downloadLabel, "Download acquisition stack");
  assert.equal(en.systems[0].overview, "Start here to orient the lab and define the base strategy.");
  assert.equal(en.systems[0].modules[0].progressPercent, 100);
  assert.equal(en.systems[0].modules[0].lessons[0].example.summary, "Use the overview to decide where to begin.");
  assert.equal(en.systems[0].modules[0].lessons[0].example.title, "Example use");
  assert.ok(Array.isArray(en.systems[0].modules[0].lessons[0].steps));
  assert.equal(en.systems[0].modules[0].lessons[0].steps[0].title, "Review the platform overview");
  assert.equal(en.systems[0].modules[0].lessons[0].steps[0].body, "Confirm the systems and how they fit together.");
});

test("package test script runs the full mjs test suite", () => {
  const pkg = readFileSync("package.json", "utf8");
  assert.match(pkg, /"test": "node --test tests\/\*\.test\.mjs"/);
});

test("lab landing page uses the dedicated public marketing stack", () => {
  const labLayout = readFileSync("app/[locale]/lab/layout.tsx", "utf8");
  const labPage = readFileSync("app/[locale]/lab/page.tsx", "utf8");
  const landingSections = readFileSync("components/lab/LabLandingSections.tsx", "utf8");
  const labHeader = readFileSync("components/lab/LabHeader.tsx", "utf8");
  const systemCard = readFileSync("components/lab/SystemCard.tsx", "utf8");
  const labContent = readFileSync("content/lab.ts", "utf8");
  const localeLayout = readFileSync("app/[locale]/layout.tsx", "utf8");
  const footerGate = readFileSync("components/layout/LocaleFooterGate.tsx", "utf8");

  assert.match(labLayout, /LabHeader/);
  assert.doesNotMatch(labLayout, /components\/layout\/Header/);
  assert.match(localeLayout, /LocaleFooterGate/);
  assert.doesNotMatch(localeLayout, /[^A-Za-z]Footer\s*\/>/);
  assert.match(footerGate, /useSelectedLayoutSegment/);
  assert.match(footerGate, /segment === "lab"/);

  assert.match(labPage, /generateMetadata/);
  assert.match(labContent, /landing:/);
  assert.match(labHeader, /getLabData/);
  assert.match(landingSections, /getLabData/);

  for (const sectionName of [
    "LabHeroSection",
    "LabProblemSection",
    "LabSolutionSection",
    "LabHowItWorksSection",
    "LabSystemsSection",
    "LabDifferentiationSection",
    "LabCtaSection",
  ]) {
    assert.match(labPage, new RegExp(sectionName));
  }

  assert.match(labHeader, /\/\$\{locale\}\/lab\/app/);
  assert.match(landingSections, /\/\$\{locale\}\/lab\/app/);
  assert.match(systemCard, /\/\$\{locale\}\/lab\/app\/system\/\$\{system\.slug\}/);
});

test("lab workspace shell is noindex and exposes the core navigation", () => {
  const appLayout = readFileSync("app/[locale]/lab/app/layout.tsx", "utf8");
  const appPage = readFileSync("app/[locale]/lab/app/page.tsx", "utf8");
  const sidebar = readFileSync("components/lab/LabSidebar.tsx", "utf8");

  assert.match(appLayout, /robots:\s*\{\s*index:\s*false,\s*follow:\s*false\s*\}/);

  for (const item of [
    "System 01 (Foundations)",
    "System 02 (Operations)",
    "System 03 (Architecture)",
    "Resources",
    "Settings",
  ]) {
    assert.match(sidebar, new RegExp(item.replace(/[()]/g, "\\$&")));
  }

  assert.match(appPage, /Next recommended step/);
});

test("lab system and lesson templates wire the content helpers into the app routes", () => {
  const systemPage = readFileSync("app/[locale]/lab/app/system/[systemSlug]/page.tsx", "utf8");
  const lessonPage = readFileSync("app/[locale]/lab/app/system/[systemSlug]/lesson/[lessonSlug]/page.tsx", "utf8");

  assert.match(systemPage, /getSystemBySlug/);
  assert.match(systemPage, /ModuleList/);
  assert.match(systemPage, /Continue to next lesson/);

  assert.match(lessonPage, /getLessonBySlug/);
  assert.match(lessonPage, /LessonContent/);
  assert.match(lessonPage, /LessonExampleBlock/);
  assert.match(lessonPage, /Downloadable resources/);
});
