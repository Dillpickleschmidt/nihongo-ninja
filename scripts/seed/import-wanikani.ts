// Imports WaniKani radicals and kanji into the Convex wanikaniItems table.
// Fetches from the WaniKani API and imports all data at once.
//
// Usage: nub run seed:wanikani
// Requires WANIKANI_API_TOKEN in the root .env.
import { unlinkSync } from "node:fs";
import * as path from "node:path";

import { importToConvex, readRootEnv, writeJsonl } from "./lib";

const WANIKANI_API_TOKEN = readRootEnv("WANIKANI_API_TOKEN");
const API_BASE = "https://api.wanikani.com/v2";

if (!WANIKANI_API_TOKEN) {
  console.error("Error: WANIKANI_API_TOKEN not set. Add it to the root .env file.");
  process.exit(1);
}

// Character replacement mapping for visually similar Unicode variants
const CHARACTER_REPLACEMENTS: Record<string, string> = {
  ム: "厶", // Katakana Mu → CJK Radical Private Use
  ｲ: "亻",
};

interface WaniKaniMeaning {
  meaning: string;
  primary: boolean;
  accepted_answer?: boolean;
}

interface WaniKaniCharacterImage {
  url: string;
  metadata: {
    inline_styles?: boolean;
    dimensions?: string;
    style_name?: string;
    color?: string;
  };
  content_type: string;
}

interface WaniKaniRadicalData {
  object: "radical";
  characters: string | null;
  meanings: WaniKaniMeaning[];
  meaning_mnemonic: string;
  reading_mnemonic?: string;
  character_images?: WaniKaniCharacterImage[];
}

interface WaniKaniKanjiData {
  object: "kanji";
  characters: string | null;
  meanings: WaniKaniMeaning[];
  meaning_mnemonic: string;
  reading_mnemonic?: string;
  component_subject_ids?: number[];
}

interface WaniKaniApiSubject {
  id: number;
  object: string;
  data: WaniKaniRadicalData | WaniKaniKanjiData;
}

interface WaniKaniCollectionResponse {
  object: "collection";
  pages: {
    next_url: string | null;
  };
  data: WaniKaniApiSubject[];
}

// Convex wanikaniItems format
interface WaniKaniItem {
  wanikaniId: number;
  characters?: string;
  characterType: "radical" | "kanji";
  meanings: string[];
  readingMnemonic?: string;
  meaningMnemonic: string;
  componentIds: number[];
  characterImageUrl?: string;
}

function applyCharacterReplacements(characters: string | null): string | undefined {
  if (!characters) return undefined;
  return CHARACTER_REPLACEMENTS[characters] ?? characters;
}

// Prefers the mnemonic with actual content over "same as X" descriptions.
function selectBestMeaningMnemonic(radicalMnemonic: string, kanjiMnemonic: string): string {
  const unhelpfulRadicalPatterns = ["same as the kanji", "radical for", "exact same"];
  const unhelpfulKanjiPatterns = ["same as the radical", "kanji for", "exact same"];

  const radicalIsUnhelpful = unhelpfulRadicalPatterns.some((pattern) =>
    radicalMnemonic.toLowerCase().includes(pattern),
  );
  const kanjiIsUnhelpful = unhelpfulKanjiPatterns.some((pattern) =>
    kanjiMnemonic.toLowerCase().includes(pattern),
  );

  if (radicalIsUnhelpful && !kanjiIsUnhelpful) return kanjiMnemonic;
  if (kanjiIsUnhelpful && !radicalIsUnhelpful) return radicalMnemonic;
  return radicalMnemonic.length > kanjiMnemonic.length ? radicalMnemonic : kanjiMnemonic;
}

function extractMeanings(meanings: WaniKaniMeaning[]): string[] {
  return meanings.map((m) => m.meaning);
}

// Preference: SVG > 512px PNG > lower resolutions.
function selectBestCharacterImage(images?: WaniKaniCharacterImage[]): string | undefined {
  if (!images || images.length === 0) return undefined;

  const svg = images.find((img) => img.content_type === "image/svg+xml");
  if (svg) return svg.url;

  const png512 = images.find(
    (img) => img.content_type === "image/png" && img.metadata.dimensions === "512x512",
  );
  if (png512) return png512.url;

  const png = images.find((img) => img.content_type === "image/png");
  if (png) return png.url;

  return images[0]?.url;
}

async function fetchAllPages<T>(initialEndpoint: string): Promise<T[]> {
  let allData: T[] = [];
  let currentUrl: string | null = initialEndpoint;

  while (currentUrl) {
    const fullUrl: string = currentUrl.startsWith("http") ? currentUrl : `${API_BASE}${currentUrl}`;

    console.log(`   Fetching from: ${fullUrl}`);
    const response = await fetch(fullUrl, {
      headers: {
        Authorization: `Bearer ${WANIKANI_API_TOKEN}`,
        "Wanikani-Revision": "20170710",
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const responseBody = (await response.json()) as WaniKaniCollectionResponse;
    allData = allData.concat(responseBody.data as T[]);
    currentUrl = responseBody.pages.next_url ?? null;
  }

  return allData;
}

function buildIdMappings(
  radicalSubjects: WaniKaniApiSubject[],
  kanjiSubjects: WaniKaniApiSubject[],
) {
  const kanjiCharToId = new Map<string, number>();
  for (const kanji of kanjiSubjects) {
    const chars = (kanji.data as WaniKaniKanjiData).characters;
    if (chars) kanjiCharToId.set(chars, kanji.id);
  }

  // Radical→kanji mapping for duplicates plus meaning-mnemonic transfer.
  const radicalToKanjiMap = new Map<number, number>();
  const radicalMeaningMnemonicMap = new Map<number, string>();
  for (const radical of radicalSubjects) {
    const chars = (radical.data as WaniKaniRadicalData).characters;
    if (!chars) continue;
    const kanjiId = kanjiCharToId.get(chars);
    if (kanjiId === undefined) continue;

    radicalToKanjiMap.set(radical.id, kanjiId);
    const matchingKanji = kanjiSubjects.find((k) => k.id === kanjiId);
    if (matchingKanji) {
      const bestMnemonic = selectBestMeaningMnemonic(
        (radical.data as WaniKaniRadicalData).meaning_mnemonic,
        (matchingKanji.data as WaniKaniKanjiData).meaning_mnemonic,
      );
      radicalMeaningMnemonicMap.set(kanjiId, bestMnemonic);
    }
  }

  return { kanjiCharToId, radicalToKanjiMap, radicalMeaningMnemonicMap };
}

// Drops radicals whose characters duplicate a kanji.
function filterDuplicateRadicals(
  radicalSubjects: WaniKaniApiSubject[],
  kanjiCharToId: Map<string, number>,
) {
  return radicalSubjects.filter((radical) => {
    const characters = (radical.data as WaniKaniRadicalData).characters;
    if (!characters) return true;
    return !kanjiCharToId.has(characters);
  });
}

function transformRadicalToItem(subject: WaniKaniApiSubject): WaniKaniItem {
  const data = subject.data as WaniKaniRadicalData;
  return {
    wanikaniId: subject.id,
    characters: applyCharacterReplacements(data.characters),
    meanings: extractMeanings(data.meanings),
    meaningMnemonic: data.meaning_mnemonic,
    readingMnemonic: data.reading_mnemonic,
    componentIds: [],
    characterImageUrl: selectBestCharacterImage(data.character_images),
    characterType: "radical",
  };
}

function transformKanjiToItem(
  subject: WaniKaniApiSubject,
  radicalToKanjiMap: Map<number, number>,
  radicalMeaningMnemonicMap: Map<number, string>,
): WaniKaniItem {
  const data = subject.data as WaniKaniKanjiData;

  // Remap component IDs from filtered radicals to their kanji equivalents,
  // and drop self-references.
  const remappedComponentIds = (data.component_subject_ids ?? [])
    .map((id) => radicalToKanjiMap.get(id) ?? id)
    .filter((id) => id !== subject.id);

  return {
    wanikaniId: subject.id,
    characters: applyCharacterReplacements(data.characters),
    meanings: extractMeanings(data.meanings),
    meaningMnemonic: radicalMeaningMnemonicMap.get(subject.id) ?? data.meaning_mnemonic,
    readingMnemonic: data.reading_mnemonic,
    componentIds: remappedComponentIds,
    characterImageUrl: undefined,
    characterType: "kanji",
  };
}

console.log("Starting WaniKani import...\n");

console.log("Fetching WaniKani subjects from API...");
const allSubjects = await fetchAllPages<WaniKaniApiSubject>("/subjects?per_page=1000");
console.log(`Fetched ${allSubjects.length} total subjects\n`);

const radicalSubjects = allSubjects.filter((s) => s.object === "radical");
const kanjiSubjects = allSubjects.filter((s) => s.object === "kanji");
console.log(`Found ${radicalSubjects.length} radicals, ${kanjiSubjects.length} kanji\n`);

const { kanjiCharToId, radicalToKanjiMap, radicalMeaningMnemonicMap } = buildIdMappings(
  radicalSubjects,
  kanjiSubjects,
);

const filteredRadicals = filterDuplicateRadicals(radicalSubjects, kanjiCharToId);
const filteredCount = radicalSubjects.length - filteredRadicals.length;
if (filteredCount > 0) {
  console.log(`Filtered out ${filteredCount} radicals with duplicate characters\n`);
}

const items: WaniKaniItem[] = [
  ...filteredRadicals.map(transformRadicalToItem),
  ...kanjiSubjects.map((kanji) =>
    transformKanjiToItem(kanji, radicalToKanjiMap, radicalMeaningMnemonicMap),
  ),
];

const itemsFile = path.join(import.meta.dirname, ".tmp-wanikani-items.jsonl");
writeJsonl(itemsFile, items);

try {
  console.log(`Importing ${items.length} WaniKani items...`);
  importToConvex("wanikaniItems", itemsFile);
  console.log("Done!");
} finally {
  unlinkSync(itemsFile);
}
