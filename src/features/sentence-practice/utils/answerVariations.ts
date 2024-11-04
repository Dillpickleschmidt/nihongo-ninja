import { extractHiragana } from "@/util/vocabDataTransformer"
import { PracticeQuestion } from "../types"

function extractVersions(segment: string): {
  original: string
  hiragana: string
} {
  const hasKanji = segment.includes("[")
  if (!hasKanji) {
    return { original: segment, hiragana: segment }
  }

  return {
    original: segment,
    hiragana: extractHiragana(segment),
  }
}

type Variation = {
  segments: string[]
  isKanaVariation: boolean
  isPeriodVariation: boolean
  isWatashiVariation?: boolean
}

// All possible first-person pronouns with their brackets
const PRONOUNS = ["私[わたし]", "僕[ぼく]", "俺[おれ]", "アタシ"] as const

/**
 * Checks if segments contain any first-person pronoun
 */
function hasAnyPronoun(segments: string[]): boolean {
  return segments.some((segment, index) =>
    PRONOUNS.some(
      (pronoun) =>
        segment === pronoun &&
        index + 1 < segments.length &&
        segments[index + 1] === "は",
    ),
  )
}

/**
 * Generates all possible combinations of kanji/kana versions
 * @param segments Array of text segments with furigana in brackets
 * @param includeWatashiVariations Whether to include variations without/with pronouns
 * @returns Array of all possible variations with their variation status
 */
function generateCombinations(
  originalSegments: string[],
  includeWatashiVariations: boolean,
): Array<Variation> {
  // Create base segments with the original and potentially with pronouns
  let segmentSets: Array<{ segments: string[]; isWatashiVariation: boolean }> =
    [{ segments: originalSegments, isWatashiVariation: false }]

  if (includeWatashiVariations) {
    const hasPronouns = hasAnyPronoun(originalSegments)
    if (!hasPronouns) {
      // Only add pronoun variations if there isn't already a pronoun in the answer
      PRONOUNS.forEach((pronoun) => {
        segmentSets.push({
          segments: [pronoun, "は", ...originalSegments],
          isWatashiVariation: true,
        })
      })
    }
  }

  // Process each set of base segments
  return segmentSets.flatMap(({ segments, isWatashiVariation }) => {
    // Handle the period in the last segment if it exists
    const lastSegment = segments[segments.length - 1]
    const hasPeriod = lastSegment.endsWith("。")

    // Remove period for processing if it exists
    const processSegments = hasPeriod
      ? [...segments.slice(0, -1), lastSegment.slice(0, -1)]
      : segments

    // Generate base combinations
    const versions = processSegments.map((segment) => {
      const { original, hiragana } = extractVersions(segment)
      return original !== hiragana ? [original, hiragana] : [original]
    })

    function combine(current: string[], index: number): Array<Variation> {
      if (index === versions.length) {
        const baseCombo = current
        const isKanaVariation = baseCombo.some(
          (segment, i) => segment !== versions[i][0],
        )

        if (hasPeriod) {
          return [
            {
              segments: [
                ...baseCombo.slice(0, -1),
                baseCombo[baseCombo.length - 1] + "。",
              ],
              isKanaVariation,
              isPeriodVariation: false,
              isWatashiVariation,
            },
            {
              segments: baseCombo,
              isKanaVariation,
              isPeriodVariation: true,
              isWatashiVariation,
            },
          ]
        } else {
          return [
            {
              segments: baseCombo,
              isKanaVariation,
              isPeriodVariation: false,
              isWatashiVariation,
            },
            {
              segments: [
                ...baseCombo.slice(0, -1),
                baseCombo[baseCombo.length - 1] + "。",
              ],
              isKanaVariation,
              isPeriodVariation: true,
              isWatashiVariation,
            },
          ]
        }
      }

      const results: Array<Variation> = []
      for (const version of versions[index]) {
        results.push(...combine([...current, version], index + 1))
      }
      return results
    }

    return combine([], 0)
  })
}

/**
 * Creates variations of questions by substituting kanji with hiragana
 * and handling optional periods and pronoun variations
 * @param questions Array of original questions
 * @returns Array of questions with all possible variations
 */
export function createAnswerVariations(
  questions: PracticeQuestion[],
): PracticeQuestion[] {
  return questions.flatMap((question) => {
    const includeWatashiVariations =
      question.english.startsWith("I ") &&
      !question.english.startsWith("I heard")

    const variations = question.answers.flatMap((answer) => {
      const combinations = generateCombinations(
        answer.segments,
        includeWatashiVariations,
      )

      return combinations.map((combination) => ({
        ...answer,
        segments: combination.segments,
        isVariation:
          combination.isKanaVariation ||
          combination.isPeriodVariation ||
          combination.isWatashiVariation,
      }))
    })

    return {
      ...question,
      answers: variations,
    }
  })
}
