// conjugationUtils.ts
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
  って: { polite: false },

  // Conditional forms
  たら: {
    polite: false,
    past: true,
  },
  // ば: { polite: false }, // ば conditional

  // Casual conjunctions/particles
  のに: { polite: false }, // Despite/although (casual)
  けど: { polite: false }, // But (casual)
  し: { polite: false }, // And/besides (casual)

  // Nominalizers in casual constructions
  こと: { polite: false }, // When used in constructions like ことができる
  もの: { polite: false }, // When used in casual explanatory tone

  // Others requiring casual form
  ながら: { polite: false }, // While doing
  な: { polite: false }, // Na-adjective noun-modification
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
): string[] => {
  try {
    const dictionaryHiragana = extractHiragana(wordObj.word)
    const form = options.form ?? wordObj.form

    const conjugatedHiraganaForms = conjugationUtils.conjugate(
      dictionaryHiragana,
      wordObj.pos,
      normalizeForm(form),
      {
        polite: options.polite,
        negative: options.negative ?? wordObj.polarity === "negative",
        past: options.past ?? wordObj.tense === "past",
        adverb: options.adverb ?? isAdverbialForm(form, wordObj.pos),
      },
    )

    // Restore kanji for each conjugated form
    return conjugatedHiraganaForms.map((hiragana) =>
      restoreKanji(wordObj.word, hiragana),
    )
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

  // Determine politeness based on the overall sentence, ignoring word-level constraints
  const polite = politeForm

  return {
    form: overrides.form ?? word.form,
    polite,
    negative: overrides.negative ?? word.polarity === "negative",
    past: overrides.past ?? word.tense === "past",
  }
}

// Main export function
export const conjugateSegments = (
  segments: (string | ConjugatedWord)[],
  politeForm: boolean,
): string[][] =>
  segments.map((segment, index) => {
    // Handle special standalone words (particles, etc.)
    if (typeof segment === "string") {
      const specialWord = SPECIAL_WORDS[segment]
      return [specialWord ? specialWord(politeForm) : segment]
    }

    const nextWord = segments[index + 1] as string | undefined
    let conjugated: string[] = []

    // Respect shortOnly
    if (segment.shortOnly) {
      const options = {
        polite: false, // Always casual for shortOnly
        negative: segment.polarity === "negative",
        past: segment.tense === "past",
      }
      conjugated = conjugateWithKanji(segment, options)
    }

    // Respect politeOnly
    else if (segment.politeOnly) {
      const options = {
        polite: true,
        negative: segment.polarity === "negative",
        past: segment.tense === "past",
      }
      conjugated = conjugateWithKanji(segment, options)
    }

    // Regular conjugation logic
    else {
      const options = getConjugationOptions(segment, nextWord, politeForm)
      conjugated = conjugateWithKanji(segment, options)
    }

    // Special post-processing for たら
    if (nextWord === "たら") {
      return conjugated.map((form) => form.slice(0, -1))
    }

    // Handle na-adjectives directly followed by "な"
    if (segment.pos === "na-adjective" && nextWord === "な") {
      return [segment.word] // Use the base form without "です" or "だ"
    }

    return conjugated
  })
