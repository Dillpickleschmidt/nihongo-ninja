import type { PracticeItemType } from "@nn/convex/validators";
import { convertFuriganaToRubyHtml, escapeHtml } from "@nn/data/utils/text/furigana";

import type { PracticeCard } from "../types";

// Type badge classes (used across card components)
export const TYPE_BADGE_CLASSES: Record<PracticeItemType, string> = {
  vocabulary: "bg-orange-500/10 text-orange-500",
  kanji: "bg-indigo-500/10 text-indigo-500",
  radical: "bg-purple-500/10 text-purple-500",
};

// Type text colors (used for answer display)
export const TYPE_TEXT_COLORS: Record<PracticeItemType, string> = {
  vocabulary: "text-orange-500",
  kanji: "text-indigo-500",
  radical: "text-purple-500",
};

// Pre-compiled regex patterns for mnemonic formatting. They match the
// ESCAPED tag forms: the mnemonic text is HTML-escaped first, so only
// these known tags become markup and everything else stays inert.
const MNEMONIC_REPLACEMENTS = [
  {
    pattern: /&lt;radical&gt;(.*?)&lt;\/radical&gt;/g,
    replacement: '<span class="text-purple-500 font-medium">$1</span>',
  },
  {
    pattern: /&lt;kanji&gt;(.*?)&lt;\/kanji&gt;/g,
    replacement: '<span class="text-indigo-500 font-medium">$1</span>',
  },
  {
    pattern: /&lt;reading&gt;(.*?)&lt;\/reading&gt;/g,
    replacement: '<span class="text-orange-500 font-medium">$1</span>',
  },
] as const;

export function formatMnemonic(text: string): string {
  let result = escapeHtml(text);
  for (const { pattern, replacement } of MNEMONIC_REPLACEMENTS) {
    result = result.replace(pattern, replacement);
  }
  return result;
}

export type PromptDisplay = {
  html?: string;
  text?: string;
  isHtml: boolean;
};

export function getPromptDisplay(card: PracticeCard, rubySize = "1rem"): PromptDisplay {
  if (card.practiceItemType === "vocabulary" && card.practiceMode === "meanings") {
    if (card.vocab.furigana) {
      return {
        html: convertFuriganaToRubyHtml(card.vocab.furigana, rubySize),
        isHtml: true,
      };
    }
    return { text: card.vocab.word, isHtml: false };
  }
  return { text: card.prompt, isHtml: false };
}

export function getMnemonic(card: PracticeCard): string | null {
  const mnemonics = card.vocab.mnemonics;
  if (!mnemonics) return null;

  if (card.practiceItemType === "vocabulary") {
    return mnemonics.reading?.[0] || null;
  }
  return mnemonics.kanji?.[0] || null;
}
