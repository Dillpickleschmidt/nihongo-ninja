// Imports vocabulary items and sets into Convex with the official CLI.
// Usage: nub run seed:vocab
import { unlinkSync } from "node:fs";
import * as path from "node:path";

import { vocabulary } from "./data/vocabulary";
import { vocabularySets } from "./data/vocabulary_sets";
import { importToConvex, writeJsonl } from "./lib";

// Fail fast on duplicate keys within a set.
const duplicateMessages: string[] = [];
for (const [setId, vocabSet] of Object.entries(vocabularySets)) {
  const seen = new Map<string, number>();
  vocabSet.keys.forEach((key, index) => {
    const firstIndex = seen.get(key);
    if (firstIndex === undefined) {
      seen.set(key, index);
    } else {
      duplicateMessages.push(`Set "${setId}": "${key}" at index ${firstIndex} and ${index}`);
    }
  });
}
if (duplicateMessages.length > 0) {
  console.error(`Duplicate keys in vocabulary sets:\n  ${duplicateMessages.join("\n  ")}`);
  process.exit(1);
}

// Transform vocabulary data - use object keys as the unique 'key' field
const items = Object.entries(vocabulary).map(([key, item]) => ({
  key,
  word: item.word,
  furigana: item.furigana,
  english: item.english,
  partOfSpeech: item.partOfSpeech,
  info: item.info,
  mnemonics: item.mnemonics,
  exampleSentences: item.exampleSentences,
  videos: item.videos,
  particles: item.particles,
  overwriteWord: item.overwriteWord,
}));

// Generate JLPT sets dynamically from vocabulary items
const jlptLevels = ["n5", "n4", "n3", "n2", "n1"] as const;
const jlptSets = jlptLevels
  .map((level) => ({
    setId: level,
    vocabularyKeys: Object.entries(vocabulary)
      .filter(([, item]) => item.jlptLevel === level)
      .map(([key]) => key),
  }))
  .filter((set) => set.vocabularyKeys.length > 0);

// Transform vocabulary sets and merge with JLPT sets
const sets = [
  ...jlptSets,
  ...Object.entries(vocabularySets).map(([setId, vocabSet]) => ({
    setId,
    vocabularyKeys: vocabSet.keys,
  })),
];

const itemsFile = path.join(import.meta.dirname, ".tmp-vocab-items.jsonl");
const setsFile = path.join(import.meta.dirname, ".tmp-vocab-sets.jsonl");

writeJsonl(itemsFile, items);
writeJsonl(setsFile, sets);

try {
  console.log(`Importing ${items.length} vocabulary items...`);
  importToConvex("coreVocabularyItems", itemsFile);

  console.log(`Importing ${sets.length} vocabulary sets...`);
  importToConvex("coreVocabularySets", setsFile);

  console.log("Done!");
} finally {
  unlinkSync(itemsFile);
  unlinkSync(setsFile);
}
