// conjugationUtils.ts
import type { ConjugatedWord, ConjugationOverrides } from "../types"
import { extractHiragana } from "@/util/vocabDataTransformer"
import * as conjugationUtils from "@/features/conjugation-practice/utils/conjugationUtils"
import { restoreKanji } from "./kanjiUtils"

function conjugateWord(
  wordObj: ConjugatedWord,
  options: ConjugationOverrides,
): string {
  try {
    const dictionaryHiragana = extractHiragana(wordObj.word)
    const conjugatedHiragana = conjugationUtils.conjugate(
      dictionaryHiragana,
      wordObj.pos,
      options.form ?? wordObj.form,
      {
        polite: options.polite,
        negative: options.negative ?? wordObj.polarity === "negative",
        past: options.past ?? wordObj.tense === "past",
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

// We can extend the rules to include form overrides as well
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

    let conjugated: string
    const form = rule?.form ?? segment.form
    console.log("form", form)

    switch (form) {
      case "tai-adv-form": {
        conjugated = conjugateWord(segment, {
          form: "tai-form",
          polite: false,
          negative: rule?.negative ?? segment.polarity === "negative",
          past: rule?.past ?? segment.tense === "past",
        })
        conjugated = conjugated.slice(0, -1).concat("く")
        break
      }
      case "potential-adv-form": {
        conjugated = conjugateWord(segment, {
          form: "potential",
          polite: false,
          negative: rule?.negative ?? segment.polarity === "negative",
          past: rule?.past ?? segment.tense === "past",
        })
        conjugated = conjugated.slice(0, -1).concat("く")
        break
      }
      default: {
        conjugated = conjugateWord(segment, {
          form: form,
          polite: rule?.polite ?? politeForm,
          negative: rule?.negative ?? segment.polarity === "negative",
          past: rule?.past ?? segment.tense === "past",
        })
        break
      }
    }

    console.log("conjugated", conjugated)

    // Handle たら case directly
    if (nextSegment === "たら") {
      conjugated = conjugated.slice(0, -1)
    }

    return conjugated
  })
}
