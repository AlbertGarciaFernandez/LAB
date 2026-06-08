import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";

export function readSource(path) {
  return readFileSync(path, "utf8");
}

export function readJson(path) {
  return JSON.parse(readSource(path));
}

export function collectFiles(dir, predicate) {
  return readdirSync(dir).flatMap((entry) => {
    const path = `${dir}/${entry}`;
    if (statSync(path).isDirectory()) {
      return collectFiles(path, predicate);
    }
    return predicate(path) ? [path] : [];
  });
}

export function collectTsxFiles(dir) {
  return collectFiles(dir, (path) => path.endsWith(".tsx"));
}

export function assertInOrder(source, markers) {
  let previous = -1;

  for (const marker of markers) {
    const current = source.indexOf(marker);
    assert.notEqual(current, -1, `Missing marker: ${marker}`);
    assert.ok(current > previous, `Expected ${marker} to appear after previous marker`);
    previous = current;
  }
}

export function localeMessages() {
  return {
    en: readJson("messages/en.json"),
    es: readJson("messages/es.json"),
    nl: readJson("messages/nl.json"),
  };
}
