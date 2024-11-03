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

/**
 * Generates all possible combinations of kanji/kana versions
 * @param segments Array of text segments with furigana in brackets
 * @returns Array of all possible variations with their variation status
 */
function generateCombinations(segments: string[]): Array<{
  segments: string[]
  isKanaVariation: boolean
  isPeriodVariation: boolean
}> {
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

  function combine(
    current: string[],
    index: number,
  ): Array<{
    segments: string[]
    isKanaVariation: boolean
    isPeriodVariation: boolean
  }> {
    if (index === versions.length) {
      // For each complete combination, create versions with and without period
      const baseCombo = current
      const isKanaVariation = baseCombo.some(
        (segment, i) => segment !== versions[i][0], // Compare with original version
      )

      if (hasPeriod) {
        // If original had period, that version comes first and is not a period variation
        return [
          {
            segments: [
              ...baseCombo.slice(0, -1),
              baseCombo[baseCombo.length - 1] + "。",
            ],
            isKanaVariation,
            isPeriodVariation: false,
          },
          {
            segments: baseCombo,
            isKanaVariation,
            isPeriodVariation: true,
          },
        ]
      } else {
        // If original had no period, that version comes first and is not a period variation
        return [
          {
            segments: baseCombo,
            isKanaVariation,
            isPeriodVariation: false,
          },
          {
            segments: [
              ...baseCombo.slice(0, -1),
              baseCombo[baseCombo.length - 1] + "。",
            ],
            isKanaVariation,
            isPeriodVariation: true,
          },
        ]
      }
    }

    const results: Array<{
      segments: string[]
      isKanaVariation: boolean
      isPeriodVariation: boolean
    }> = []
    for (const version of versions[index]) {
      results.push(...combine([...current, version], index + 1))
    }
    return results
  }

  return combine([], 0)
}

/**
 * Creates variations of questions by substituting kanji with hiragana
 * and handling optional periods
 * @param questions Array of original questions
 * @returns Array of questions with all possible variations
 */
export function createAnswerVariations(
  questions: PracticeQuestion[],
): PracticeQuestion[] {
  return questions.flatMap((question) => {
    const variations = question.answers.flatMap((answer) => {
      const combinations = generateCombinations(answer.segments)

      return combinations.map((combination) => ({
        ...answer,
        segments: combination.segments,
        isVariation:
          combination.isKanaVariation || combination.isPeriodVariation,
      }))
    })

    return {
      ...question,
      answers: variations,
    }
  })
}
