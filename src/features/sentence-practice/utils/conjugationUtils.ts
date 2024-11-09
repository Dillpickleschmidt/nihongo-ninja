import type { ConjugatedWord, ConjugationOverrides } from "../types"
import { extractHiragana } from "@/util/vocabDataTransformer"
import * as conjugationUtils from "@/features/conjugation-practice/utils/conjugationUtils"
import { restoreKanji } from "./kanjiUtils"

function shouldUseAdverbialForm(form: string, pos: string): boolean {
  if (pos === "I-adjective" || pos === "Na-adjective") {
    return form === "adverb"
  }
  return form === "tai-adv-form" || form === "potential-adv-form"
}

function normalizeForm(form: string): string {
  switch (form) {
    case "tai-adv-form":
      return "tai-form"
    case "potential-adv-form":
      return "potential"
    default:
      return form
  }
}

function conjugateWord(
  wordObj: ConjugatedWord,
  options: ConjugationOverrides,
): string {
  try {
    const dictionaryHiragana = extractHiragana(wordObj.word)
    const form = options.form ?? wordObj.form

    // Determine if we should use adverbial form
    const useAdverb =
      options.adverb ?? shouldUseAdverbialForm(form, wordObj.pos)

    // Normalize the form name for the conjugation utility
    const normalizedForm = normalizeForm(form)

    const conjugatedHiragana = conjugationUtils.conjugate(
      dictionaryHiragana,
      wordObj.pos,
      normalizedForm,
      {
        polite: options.polite,
        negative: options.negative ?? wordObj.polarity === "negative",
        past: options.past ?? wordObj.tense === "past",
        adverb: useAdverb,
      },
    )[0]

    return restoreKanji(wordObj.word, conjugatedHiragana)
  } catch (error) {
    console.error("Error conjugating word:", { wordObj, options, error })
    throw error
  }
}

export const SPECIAL_WORDS: Record<string, (politeForm: boolean) => string> = {
  です: (politeForm) => (politeForm ? "です" : "だ"),
  か: (politeForm) => (politeForm ? "か" : "？"),
}

export const FOLLOWING_WORD_RULES: Record<string, ConjugationOverrides> = {
  って: {
    polite: false,
    form: "te-form", // Override to force te-form before って
  },
  たら: {
    polite: false,
    negative: false,
    past: true,
    // form: "conditional", // Could use conditional form if needed
  },
  こと: {
    polite: false,
  },
  方: {
    polite: false,
  },
  と: {
    polite: false,
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

    const conjugated = conjugateWord(segment, {
      form: rule?.form ?? segment.form,
      polite: rule?.polite ?? politeForm,
      negative: rule?.negative ?? segment.polarity === "negative",
      past: rule?.past ?? segment.tense === "past",
    })

    // Handle たら case directly
    if (nextSegment === "たら") {
      return conjugated.slice(0, -1)
    }

    return conjugated
  })
}
