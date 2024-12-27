// createAnswerVariations.ts

/*
isKanaVariation: A variation that includes a kana form of a word that originally had kanji.
isPeriodVariation: A variation that includes a period at the end of the sentence.
isWatashiVariation: A variation that includes a pronoun + は at the beginning of the sentence
  (if the english starts with I and not "I heard").
isHonorificVariation: Variations of the さん honorific at the end of the sentence.
*/

import type { PracticeQuestion, Answer, ConjugatedWord } from "./types"
import { conjugateSegments } from "./utils/conjugationUtils"
import { generateCombinations } from "./utils/variationUtils"

function getPolitenessVariations(
  segments: (string | ConjugatedWord)[],
): boolean[] {
  // Check for explicit polite or casual markers in the segments
  const hasPoliteMarker =
    segments.includes("です") ||
    segments.includes("ます") ||
    segments.includes("でした") ||
    segments.includes("ました")
  const hasCasualMarker =
    segments.includes("だ") ||
    segments.includes("か？") ||
    segments.includes("？")

  if (hasPoliteMarker) return [true] // Treat as polite
  if (hasCasualMarker) return [false] // Treat as casual

  // Default to both forms if no explicit markers are found
  return [true, false]
}

export function createAnswerVariations(
  questions: PracticeQuestion[],
): PracticeQuestion[] {
  return questions.flatMap((question) => {
    // Create conjugated forms based on word-level politeness constraints
    const conjugatedAnswers = question.answers.flatMap((answer) => {
      const politenessVariations = getPolitenessVariations(answer.segments)

      return politenessVariations.flatMap((isPolite) => {
        // Get all possible conjugations for each segment
        const segmentConjugations = conjugateSegments(answer.segments, isPolite)

        // Generate all possible combinations of conjugations
        const allCombinations = segmentConjugations.reduce<string[][]>(
          (acc, currentSegmentForms) => {
            if (acc.length === 0) {
              return currentSegmentForms.map((form) => [form])
            }

            return acc.flatMap((combination) =>
              currentSegmentForms.map((form) => [...combination, form]),
            )
          },
          [],
        )

        return allCombinations.map((segments) => ({
          ...answer,
          segments,
          originalPoliteForm: isPolite,
          isVariation: false,
        }))
      })
    })

    const includeFirstPersonVariations =
      question.english.startsWith("I ") &&
      !question.english.startsWith("I heard")

    const includeFirstPersonPluralVariations =
      question.english.startsWith("We ")

    const includeHonorificVariations = true

    // Create all possible variations
    const allVariations = conjugatedAnswers.flatMap((answer) => {
      const combinations = generateCombinations(
        answer.segments,
        includeFirstPersonVariations,
        includeFirstPersonPluralVariations,
        includeHonorificVariations,
      )

      return combinations.map((combination) => ({
        ...answer,
        segments: combination.segments,
        originalPoliteForm: answer.originalPoliteForm,
        isVariation:
          combination.isKanaVariation ||
          combination.isPeriodVariation ||
          combination.isFirstPersonVariation ||
          combination.isFirstPersonPluralVariation ||
          combination.isHonorificVariation,
      }))
    })

    return {
      ...question,
      answers: allVariations,
    }
  })
}
