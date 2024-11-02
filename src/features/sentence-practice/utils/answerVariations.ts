import { extractHiragana } from "@/util/vocabDataTransformer"
import { PracticeQuestion } from "../types"

/**
 * Extracts both kanji and hiragana versions from a segment
 * @param segment Text segment potentially containing furigana in brackets
 * @returns Both original and hiragana versions of the text
 */
function extractVersions(segment: string): {
  original: string
  hiragana: string
} {
  const hasKanji = segment.includes("[")
  if (!hasKanji) {
    return { original: segment, hiragana: segment }
  }

  return {
    original: segment.replace(/\[.*?\]/g, ""),
    hiragana: extractHiragana(segment),
  }
}

/**
 * Generates all possible combinations of kanji/kana versions
 * @param segments Array of text segments with furigana in brackets
 * @returns Array of all possible variations
 */
function generateCombinations(segments: string[]): string[][] {
  const versions = segments.map((segment) => {
    const { original, hiragana } = extractVersions(segment)
    return original !== hiragana ? [original, hiragana] : [original]
  })

  // Helper function to generate combinations recursively
  function combine(current: string[], index: number): string[][] {
    if (index === versions.length) {
      return [current]
    }

    const results: string[][] = []
    for (const version of versions[index]) {
      results.push(...combine([...current, version], index + 1))
    }
    return results
  }

  return combine([], 0)
}

/**
 * Creates variations of questions by substituting kanji with hiragana
 * @param questions Array of original questions
 * @returns Array of questions with all possible variations
 */
export function createAnswerVariations(
  questions: PracticeQuestion[],
): PracticeQuestion[] {
  return questions.flatMap((question) => {
    const variations = question.answers.flatMap((answer) => {
      const combinations = generateCombinations(answer.segments)

      // First combination is the original, rest are variations
      return combinations.map((combination, index) => ({
        ...answer,
        segments: combination,
        isVariation: index > 0, // Mark all but the first combination as variations
      }))
    })

    return {
      ...question,
      answers: variations,
    }
  })
}
