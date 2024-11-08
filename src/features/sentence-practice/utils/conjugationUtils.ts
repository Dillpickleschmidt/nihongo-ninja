import type { ConjugatedWord, ConjugationOptions } from "../types"
import { extractHiragana } from "@/util/vocabDataTransformer"
import * as conjugationUtils from "@/features/conjugation-practice/utils/conjugationUtils"
import { restoreKanji } from "./kanjiUtils"

export function conjugateWord(
  wordObj: ConjugatedWord,
  options: ConjugationOptions,
): string {
  try {
    const dictionaryHiragana = extractHiragana(wordObj.word)
    const conjugatedHiragana = conjugationUtils.normalForm(
      dictionaryHiragana,
      wordObj.pos,
      options,
    )[0]
    return restoreKanji(wordObj.word, conjugatedHiragana)
  } catch (error) {
    console.error("Error conjugating word:", { wordObj, options, error })
    throw error
  }
}

export const SPECIAL_WORDS: Record<string, (politeForm: boolean) => string> = {
  です: (politeForm) => (politeForm ? "です" : "だ"),
}

export const FOLLOWING_WORD_RULES: Record<string, ConjugationOptions> = {
  って: {
    polite: false,
  },
  たら: {
    polite: false,
    negative: false,
    past: true,
  },
}

export function conjugateSegments(
  segments: (string | ConjugatedWord)[],
  politeForm: boolean,
): string[] {
  return segments.map((segment, index) => {
    // Handle special standalone words
    if (typeof segment === "string") {
      const replacement = SPECIAL_WORDS[segment]
      if (!replacement) return segment
      return replacement(politeForm)
    }

    // Handle conjugated words
    const nextSegment = segments[index + 1]
    const rule =
      nextSegment && typeof nextSegment === "string"
        ? FOLLOWING_WORD_RULES[nextSegment]
        : null

    let conjugated = conjugateWord(segment, {
      polite: rule?.polite ?? politeForm,
      negative: rule?.negative ?? segment.polarity === "negative",
      past: rule?.past ?? segment.tense === "past",
    })

    // Handle たら case directly
    if (nextSegment === "たら") {
      conjugated = conjugated.slice(0, -1)
    }

    return conjugated
  })
}
