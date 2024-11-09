import type { PracticeQuestion, Answer } from "./types"
import { conjugateSegments } from "./utils/conjugationUtils"
import { generateCombinations } from "./utils/variationUtils"

export function createAnswerVariations(
  questions: PracticeQuestion[],
  options: { politeOnly?: boolean; shortOnly?: boolean } = {},
): PracticeQuestion[] {
  const politenessVariations: boolean[] = options.politeOnly
    ? [true]
    : options.shortOnly
      ? [false]
      : [true, false]

  return questions.flatMap((question) => {
    // First create all conjugated forms
    const conjugatedAnswers = question.answers.flatMap((answer) =>
      politenessVariations.map((isPolite) => ({
        ...answer,
        segments: conjugateSegments(answer.segments, isPolite),
        originalPoliteForm: isPolite,
        isVariation: false, // Both polite and casual forms are primary answers
      })),
    )

    const includeWatashiVariations =
      question.english.startsWith("I ") &&
      !question.english.startsWith("I heard")

    // Create all possible variations
    const allVariations = conjugatedAnswers.flatMap((answer) => {
      const combinations = generateCombinations(
        answer.segments,
        includeWatashiVariations,
      )

      return combinations.map((combination) => ({
        ...answer,
        segments: combination.segments,
        originalPoliteForm: answer.originalPoliteForm,
        // Only mark the following as variations:
        isVariation:
          combination.isKanaVariation ||
          combination.isPeriodVariation ||
          combination.isWatashiVariation,
      }))
    })

    return {
      ...question,
      answers: allVariations,
    }
  })
}
