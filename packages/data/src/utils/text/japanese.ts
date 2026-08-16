// Japanese text utilities for character detection and analysis

// CJK Unified Ideographs (through U+9FFF) + Extension A + iteration mark
export const KANJI_CHAR_CLASS = "\\u3400-\\u4dbf\\u4e00-\\u9fff々";
export const JAPANESE_CHAR_CLASS = `${KANJI_CHAR_CLASS}\\u3040-\\u309f\\u30a0-\\u30ff`;

export function createKanjiRegex(flags = ""): RegExp {
  return new RegExp(`[${KANJI_CHAR_CLASS}]`, flags);
}

export function createJapaneseRegex(flags = ""): RegExp {
  return new RegExp(`[${JAPANESE_CHAR_CLASS}]`, flags);
}

// Flagless, so the instances hold no lastIndex state and are safe to share.
const KANJI_TEST_REGEX = createKanjiRegex();
const JAPANESE_TEST_REGEX = createJapaneseRegex();

// Check if text contains kanji characters
export function containsKanji(text: string): boolean {
  return KANJI_TEST_REGEX.test(text);
}

// Check if text contains any Japanese characters (kanji, hiragana, or katakana)
export function containsJapanese(text: string): boolean {
  return JAPANESE_TEST_REGEX.test(text);
}

/**
 * Extract all kanji characters from text using Unicode ranges
 * @param text - Input text that may contain kanji
 * @returns Array of unique kanji characters
 */
export function extractKanjiCharacters(text: string): string[] {
  const matches = text.match(createKanjiRegex("g")) || [];
  return [...new Set(matches)]; // Remove duplicates
}
