// Imports the Jitendex dictionary and, when present, BCCWJ frequency data
// into Convex. Mirrors Yomitan's IndexedDB structure for consistency with
// the browser extension.
//
// Usage: nub run seed:dictionary
//
// Data sources (extracted Yomitan zips):
// - Jitendex: ~/Downloads/jitendex-yomitan/  (required)
// - BCCWJ:    ~/Downloads/BCCWJ_SUW_LUW_combined/  (optional frequency data)
import { existsSync, unlinkSync } from "node:fs";
import * as path from "node:path";

import { importToConvex, readJson, writeJsonl } from "./lib";

const JITENDEX_PATH = `${process.env.HOME}/Downloads/jitendex-yomitan`;
const BCCWJ_PATH = `${process.env.HOME}/Downloads/BCCWJ_SUW_LUW_combined`;

// Yomitan index.json structure
interface DictionaryIndex {
  title: string;
  revision: string;
  format?: number;
  sequenced?: boolean;
  author?: string;
  url?: string;
  description?: string;
  attribution?: string;
  sourceLanguage?: string;
  targetLanguage?: string;
}

interface DictionaryRow {
  title: string;
  revision: string;
  format: number;
  sequenced: boolean;
  author?: string;
  url?: string;
  description?: string;
  attribution?: string;
  sourceLanguage?: string;
  targetLanguage?: string;
}

interface TermRow {
  dictionary: string;
  expression: string;
  reading: string;
  definitionTags?: string;
  rules?: string;
  score: number;
  glossary: string; // Stringified JSON to avoid Convex's 16-level nesting limit
  sequence: number;
  termTags?: string;
}

interface TermMetaRow {
  dictionary: string;
  expression: string;
  mode: string;
  data: unknown;
}

interface TagMetaRow {
  dictionary: string;
  name: string;
  category?: string;
  sortOrder: number;
  description?: string;
  score: number;
}

function transformDictionary(index: DictionaryIndex): DictionaryRow {
  return {
    title: index.title,
    revision: index.revision,
    format: index.format ?? 3,
    sequenced: index.sequenced ?? false,
    author: index.author,
    url: index.url,
    description: index.description,
    attribution: index.attribution,
    sourceLanguage: index.sourceLanguage ?? "ja",
    targetLanguage: index.targetLanguage ?? "en",
  };
}

// Input format: [[name, category, sortOrder, description, score], ...]
function transformTags(
  dictionary: string,
  tags: [string, string, number, string, number][],
): TagMetaRow[] {
  return tags.map((t) => ({
    dictionary,
    name: t[0],
    category: t[1] || undefined,
    sortOrder: t[2],
    description: t[3] || undefined,
    score: t[4],
  }));
}

// Input format: [[expression, reading, defTags, rules, score, glossary, sequence, termTags], ...]
function transformTerms(
  dictionary: string,
  terms: [string, string, string, string, number, unknown, number, string][],
): TermRow[] {
  return terms.map((t) => ({
    dictionary,
    expression: t[0],
    reading: t[1],
    definitionTags: t[2] || undefined,
    rules: t[3] || undefined,
    score: t[4],
    glossary: JSON.stringify(t[5]),
    sequence: t[6],
    termTags: t[7] || undefined,
  }));
}

// Input format: [[expression, mode, data], ...]
function transformTermMeta(
  dictionary: string,
  entries: [string, string, unknown][],
): TermMetaRow[] {
  return entries.map((e) => ({
    dictionary,
    expression: e[0],
    mode: e[1],
    data: e[2],
  }));
}

function countTermBankFiles(basePath: string): number {
  let count = 0;
  for (let i = 1; ; i++) {
    if (!existsSync(`${basePath}/term_bank_${i}.json`)) break;
    count = i;
  }
  return count;
}

console.log("Starting dictionary import...\n");

const startTime = Date.now();

if (!existsSync(`${JITENDEX_PATH}/index.json`)) {
  console.error(`Jitendex not found at ${JITENDEX_PATH}`);
  console.error("Download jitendex-yomitan.zip and extract it there.");
  process.exit(1);
}
const hasBccwj = existsSync(`${BCCWJ_PATH}/index.json`);
if (!hasBccwj) {
  console.warn(`BCCWJ not found at ${BCCWJ_PATH} — skipping frequency data.`);
  console.warn("Rerun after extracting the BCCWJ Yomitan zip to import it.\n");
}

const tmp = (name: string) => path.join(import.meta.dirname, name);
const DICTIONARIES_FILE = tmp(".tmp-dictionaries.jsonl");
const TERMS_FILE = tmp(".tmp-terms.jsonl");
const TERM_META_FILE = tmp(".tmp-term-meta.jsonl");
const TAG_META_FILE = tmp(".tmp-tag-meta.jsonl");

const dictionaries: DictionaryRow[] = [];
const terms: TermRow[] = [];
const tagMeta: TagMetaRow[] = [];

console.log("=== Processing Jitendex ===\n");
const jitendexIndex = readJson<DictionaryIndex>(`${JITENDEX_PATH}/index.json`);
console.log(`Dictionary: ${jitendexIndex.title} (${jitendexIndex.revision})`);
dictionaries.push(transformDictionary(jitendexIndex));

const tagFilePath = `${JITENDEX_PATH}/tag_bank_1.json`;
if (existsSync(tagFilePath)) {
  const tags = readJson<[string, string, number, string, number][]>(tagFilePath);
  tagMeta.push(...transformTags(jitendexIndex.title, tags));
  console.log(`Found ${tags.length} tags`);
}

const termFileCount = countTermBankFiles(JITENDEX_PATH);
console.log(`Reading terms from ${termFileCount} files...`);
for (let num = 1; num <= termFileCount; num++) {
  const fileTerms = readJson<[string, string, string, string, number, unknown, number, string][]>(
    `${JITENDEX_PATH}/term_bank_${num}.json`,
  );
  terms.push(...transformTerms(jitendexIndex.title, fileTerms));
}
console.log(`Total: ${terms.length.toLocaleString()} terms\n`);

let bccwjTermMeta: TermMetaRow[] = [];
if (hasBccwj) {
  console.log("=== Processing BCCWJ frequency data ===\n");
  const bccwjIndex = readJson<DictionaryIndex>(`${BCCWJ_PATH}/index.json`);
  console.log(`Dictionary: ${bccwjIndex.title} (${bccwjIndex.revision})`);
  dictionaries.push(transformDictionary(bccwjIndex));

  const freqData = readJson<[string, string, unknown][]>(`${BCCWJ_PATH}/term_meta_bank_1.json`);
  // No spread here: the array is too large (stack overflow).
  bccwjTermMeta = transformTermMeta(bccwjIndex.title, freqData);
  console.log(`Found ${freqData.length.toLocaleString()} frequency entries\n`);
}

console.log("=== Writing JSONL files ===\n");
writeJsonl(DICTIONARIES_FILE, dictionaries);
writeJsonl(TAG_META_FILE, tagMeta);
writeJsonl(TERMS_FILE, terms);
writeJsonl(TERM_META_FILE, bccwjTermMeta);

console.log("=== Importing to Convex ===\n");
try {
  console.log("Importing dictionaries...");
  importToConvex("dictionaries", DICTIONARIES_FILE);
  console.log("Importing tagMeta...");
  importToConvex("tagMeta", TAG_META_FILE);
  console.log("Importing terms...");
  importToConvex("terms", TERMS_FILE);
  if (hasBccwj) {
    console.log("Importing termMeta...");
    importToConvex("termMeta", TERM_META_FILE);
  }
} finally {
  for (const f of [DICTIONARIES_FILE, TAG_META_FILE, TERMS_FILE, TERM_META_FILE]) {
    try {
      unlinkSync(f);
    } catch {
      // Ignore cleanup errors
    }
  }
}

const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
console.log("=".repeat(50));
console.log("Import complete!");
console.log(`   Dictionaries: ${dictionaries.length}`);
console.log(`   Tags: ${tagMeta.length}`);
console.log(`   Terms: ${terms.length.toLocaleString()}`);
console.log(`   Frequency entries: ${bccwjTermMeta.length.toLocaleString()}`);
console.log(`   Time: ${elapsed}s`);
