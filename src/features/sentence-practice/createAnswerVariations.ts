import type { PracticeQuestion } from "./types"
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
    const conjugatedAnswers = question.answers.flatMap((answer) =>
      politenessVariations.map((isPolite) => ({
        ...answer,
        segments: conjugateSegments(answer.segments, isPolite),
      })),
    )

    const includeWatashiVariations =
      question.english.startsWith("I ") &&
      !question.english.startsWith("I heard")

    const variations = conjugatedAnswers.flatMap((answer) => {
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
