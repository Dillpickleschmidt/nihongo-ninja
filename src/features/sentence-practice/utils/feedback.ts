import { CheckResult } from "../types"
import { extractText } from "./textExtractor"
import { extractHiragana } from "@/util/vocabDataTransformer"

export const generateFeedback = (
  result: CheckResult,
  userInput: string,
): string[] | null => {
  if (result.isCorrect) return null

  const feedback: string[] = []
  let mistakeText = ""
  let expectedText = ""

  result.userErrors.forEach((error) => {
    if (mistakeText) mistakeText += ", "
    mistakeText += userInput.slice(error.start, error.end)
  })

  result.answerErrors.forEach((error) => {
    if (expectedText) expectedText += ", "
    expectedText += result.bestMatch.segments
      .map(extractText)
      .join("")
      .slice(error.start, error.end)
  })

  if (mistakeText && expectedText) {
    feedback.push(`"${mistakeText}" should be "${expectedText}"`)
  } else if (mistakeText) {
    feedback.push(`"${mistakeText}" should be removed`)
  } else if (expectedText) {
    feedback.push(`"${expectedText}" is missing`)
  }

  const relevantSegments = result.bestMatch.segments.filter((segment) =>
    result.answerErrors.some((error) => {
      const fullText = result.bestMatch.segments
        .map(extractText)
        .join("")
        .slice(error.start, error.end)
      return fullText.includes(extractText(segment))
    }),
  )

  if (relevantSegments.length > 0) {
    feedback.push(
      "Readings: " +
        relevantSegments
          .map((seg) => `${extractText(seg)} (${extractHiragana(seg)})`)
          .join(", "),
    )
  }

  return feedback
}
