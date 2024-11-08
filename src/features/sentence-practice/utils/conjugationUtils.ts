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

const SPECIAL_WORDS = ["です"]

export function conjugateSegments(
  segments: (string | ConjugatedWord)[],
  politeForm: boolean,
): string[] {
  return segments.map((segment) => {
    if (typeof segment === "string") {
      if (!SPECIAL_WORDS.includes(segment)) return segment
      if (segment === "です" && !politeForm) return "だ"
    } else {
      const isBeforeQuote = segments[segments.indexOf(segment) + 1] === "って"
      return conjugateWord(segment, {
        polite: isBeforeQuote ? false : politeForm,
        negative: segment.polarity === "negative",
        past: segment.tense === "past",
      })
    }

    return segment
  })
}
