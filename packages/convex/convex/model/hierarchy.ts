import { extractKanjiCharacters } from "@nn/data/utils/text/japanese";

import type { QueryCtx } from "../_generated/server";
import type {
  VocabularyItem,
  KanjiEntry,
  RadicalEntry,
  VocabHierarchy,
  VocabRelationship,
  KanjiRelationship,
} from "../validators";
import { resolveDeckById } from "./decks";
import { fetchKanjiAndRadicals } from "./kanji";
import { fetchDeckVocab } from "./vocabulary";

export type DeckHierarchyResult = {
  vocabulary: VocabularyItem[];
  hierarchy: VocabHierarchy;
  kanji: KanjiEntry[];
  radicals: RadicalEntry[];
  skippedKanji: string[];
  skippedRadicals: string[];
};

// Resolve any deck ID (built-in or user) and build its full hierarchy.
export async function getDeckHierarchy(ctx: QueryCtx, deckId: string) {
  const deck = await resolveDeckById(ctx, deckId);
  if (!deck) return null;

  const vocabulary = await fetchDeckVocab(ctx, deck.id, deck.source);
  const hierarchy = await buildDeckHierarchy(ctx, vocabulary);
  return { deck, hierarchy };
}

export async function buildDeckHierarchy(
  ctx: QueryCtx,
  vocabulary: VocabularyItem[],
): Promise<DeckHierarchyResult> {
  const kanjiChars = extractAllKanjiFromVocab(vocabulary);
  const kanjiResult = await fetchKanjiAndRadicals(ctx, kanjiChars, []);

  // The component radicals were already loaded while building the kanji
  // entries — read them from the result instead of fetching them again.
  const radicalChars = extractAllRadicalsFromKanji(kanjiResult.kanji);
  const radicals: RadicalEntry[] = [];
  const skippedRadicals: string[] = [];
  for (const char of radicalChars) {
    const entry = kanjiResult.componentRadicals.get(char);
    if (entry) {
      radicals.push(entry);
    } else {
      skippedRadicals.push(char);
    }
  }

  const hierarchy = buildHierarchyRelationships(vocabulary, kanjiResult.kanji, radicals);

  return {
    vocabulary,
    hierarchy,
    kanji: kanjiResult.kanji,
    radicals,
    skippedKanji: kanjiResult.skippedKanji,
    skippedRadicals,
  };
}

export function extractHierarchyKeys(result: DeckHierarchyResult): string[] {
  return [
    ...result.vocabulary.map((v) => v.word),
    ...result.kanji.map((k) => k.kanji),
    ...result.radicals.map((r) => r.radical),
  ];
}

/**
 * Extract all unique kanji characters from vocabulary items
 * Preserves order of first appearance
 */
export function extractAllKanjiFromVocab(vocabulary: VocabularyItem[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];

  for (const item of vocabulary) {
    for (const kanji of extractKanjiCharacters(item.word)) {
      if (!seen.has(kanji)) {
        seen.add(kanji);
        result.push(kanji);
      }
    }
  }

  return result;
}

/**
 * Extract all unique radicals from kanji entries
 * Preserves order of first appearance
 */
function extractAllRadicalsFromKanji(kanjiEntries: KanjiEntry[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];

  for (const kanji of kanjiEntries) {
    for (const radical of kanji.radicalComponents) {
      if (!seen.has(radical)) {
        seen.add(radical);
        result.push(radical);
      }
    }
  }

  return result;
}

/**
 * Build hierarchy relationships from vocabulary and kanji/radical data
 * Returns lightweight relationship objects for dependency tracking
 */
function buildHierarchyRelationships(
  vocabulary: VocabularyItem[],
  kanjiEntries: KanjiEntry[],
  radicalEntries: RadicalEntry[],
): VocabHierarchy {
  // Only reference items that are present in the payload, so consumers never
  // join a reference to a missing entry.
  const knownKanji = new Set(kanjiEntries.map((k) => k.kanji));
  const knownRadicals = new Set(radicalEntries.map((r) => r.radical));

  const vocabRelationships: VocabRelationship[] = vocabulary.map((item) => ({
    word: item.word,
    kanjiComponents: extractKanjiCharacters(item.word).filter((k) => knownKanji.has(k)),
  }));

  const kanjiRelationships: KanjiRelationship[] = kanjiEntries.map((k) => ({
    kanji: k.kanji,
    radicalComponents: k.radicalComponents.filter((r) => knownRadicals.has(r)),
  }));

  const radicals: string[] = radicalEntries.map((r) => r.radical);

  return {
    vocabulary: vocabRelationships,
    kanji: kanjiRelationships,
    radicals,
  };
}
