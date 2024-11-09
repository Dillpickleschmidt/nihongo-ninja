import type { ConjugatedWord, ConjugationOverrides } from "../types"
import { extractHiragana } from "@/util/vocabDataTransformer"
import * as conjugationUtils from "@/features/conjugation-practice/utils/conjugationUtils"
import { restoreKanji } from "./kanjiUtils"

// Types
type SpecialWordFunction = (polite: boolean) => string
type Rule =
  | ConjugationOverrides
  | ((word: ConjugatedWord) => ConjugationOverrides)

// Constants - Special word handling
export const SPECIAL_WORDS: Record<string, SpecialWordFunction> = {
  です: (polite) => (polite ? "です" : "だ"),
  か: (polite) => (polite ? "か" : "？"),
} as const

// Constants - Grammar rules for following words
export const FOLLOWING_WORD_RULES: Record<string, Rule> = {
  // って: (word) => ({
  //   polite: false,
  //   form: word.tense === "past" ? "normal" : "te-form",
  // }),
  って: { polite: false },
  たら: {
    polite: false,
    negative: false,
    past: true,
  },
  こと: { polite: false },
  方: { polite: false },
  と: { polite: false },
} as const

// Helper functions
const isAdverbialForm = (form: string, pos: string): boolean =>
  ((pos === "I-adjective" || pos === "Na-adjective") && form === "adverb") ||
  form === "tai-adv-form" ||
  form === "potential-adv-form"

const normalizeForm = (form: string): string => {
  switch (form) {
    case "tai-adv-form":
      return "tai-form"
    case "potential-adv-form":
      return "potential"
    default:
      return form
  }
}

// Core conjugation logic
const conjugateWithKanji = (
  wordObj: ConjugatedWord,
  options: ConjugationOverrides,
): string => {
  try {
    const dictionaryHiragana = extractHiragana(wordObj.word)
    const form = options.form ?? wordObj.form

    const conjugatedHiragana = conjugationUtils.conjugate(
      dictionaryHiragana,
      wordObj.pos,
      normalizeForm(form),
      {
        polite: options.polite,
        negative: options.negative ?? wordObj.polarity === "negative",
        past: options.past ?? wordObj.tense === "past",
        adverb: options.adverb ?? isAdverbialForm(form, wordObj.pos),
      },
    )[0]

    return restoreKanji(wordObj.word, conjugatedHiragana)
  } catch (error) {
    console.error("Error conjugating word:", { wordObj, options, error })
    throw error
  }
}

const getConjugationOptions = (
  word: ConjugatedWord,
  nextWord: string | undefined,
  politeForm: boolean,
): ConjugationOverrides => {
  const rule = nextWord ? FOLLOWING_WORD_RULES[nextWord] : null
  const overrides = typeof rule === "function" ? rule(word) : (rule ?? {})

  return {
    form: overrides.form ?? word.form,
    polite: overrides.polite ?? politeForm,
    negative: overrides.negative ?? word.polarity === "negative",
    past: overrides.past ?? word.tense === "past",
  }
}

// Main export function
export const conjugateSegments = (
  segments: (string | ConjugatedWord)[],
  politeForm: boolean,
): string[] =>
  segments.map((segment, index) => {
    // Handle special standalone words (particles, etc.)
    if (typeof segment === "string") {
      const specialWord = SPECIAL_WORDS[segment]
      return specialWord ? specialWord(politeForm) : segment
    }

    // Handle conjugatable words
    const nextWord = segments[index + 1] as string | undefined
    const options = getConjugationOptions(segment, nextWord, politeForm)
    const conjugated = conjugateWithKanji(segment, options)

    // Special post-processing
    return nextWord === "たら" ? conjugated.slice(0, -1) : conjugated
  })
