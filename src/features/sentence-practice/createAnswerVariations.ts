// createAnswerVariations.ts

/*
isKanaVariation: A variation that includes a kana form of a word that originally had kanji.
isPeriodVariation: A variation that includes a period at the end of the sentence.
isWatashiVariation: A variation that includes a pronoun + は at the beginning of the sentence
  (if the english starts with I and not "I heard").
isHonorificVariation: Variations of the さん honorific at the end of the sentence.
*/

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

    const includeFirstPersonVariations =
      question.english.startsWith("I ") &&
      !question.english.startsWith("I heard")

    const includeFirstPersonPluralVariations =
      question.english.startsWith("We ")

    const includeHonorificVariations = true // Enable honorific variations

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
        // Only mark the following as variations:
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
