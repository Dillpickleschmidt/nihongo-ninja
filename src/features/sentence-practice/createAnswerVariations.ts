// createAnswerVariations.ts
import type { PracticeQuestion, Answer } from "./types"
import { conjugateSegments } from "./utils/conjugationUtils"
import { generateCombinations } from "./utils/variationUtils"
import { determinePreferredForm } from "./utils/formAnalyzer"
import { isConjugatedWord } from "./utils/formAnalyzer"

interface AnswerWithPoliteForm extends Answer {
  originalPoliteForm: boolean
}

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
      })),
    )

    const includeWatashiVariations =
      question.english.startsWith("I ") &&
      !question.english.startsWith("I heard")

    // Create all possible variations first
    const allVariations = conjugatedAnswers.flatMap((answer) => {
      const combinations = generateCombinations(
        answer.segments,
        includeWatashiVariations,
      )

      return combinations.map((combination) => ({
        ...answer,
        segments: combination.segments,
        originalPoliteForm: answer.originalPoliteForm,
        isVariation:
          combination.isKanaVariation ||
          combination.isPeriodVariation ||
          combination.isWatashiVariation,
      }))
    })

    // Group variations by their base form (ignoring kana/period variations)
    const baseFormGroups = allVariations.reduce(
      (groups, variation) => {
        const key = variation.segments
          .map((seg) => {
            if (isConjugatedWord(seg)) {
              return seg.word
            }
            return typeof seg === "string" ? seg : String(seg)
          })
          .join("")

        if (!groups[key]) {
          groups[key] = []
        }
        groups[key].push(variation)
        return groups
      },
      {} as Record<string, AnswerWithPoliteForm[]>,
    )

    // For each group, determine which politeness form should be primary
    const processedVariations = Object.values(baseFormGroups).flatMap(
      (group) => {
        const baseForm = group[0]
        const isPoliteForm = determinePreferredForm(baseForm.segments)

        return group.map((variation) => ({
          ...variation,
          isVariation:
            variation.isVariation ||
            variation.originalPoliteForm !== isPoliteForm,
        }))
      },
    )

    return {
      ...question,
      answers: processedVariations,
    }
  })
}
