import { Answer, CheckResult, ErrorRange, PracticeQuestion } from "./types"
import { findDifferences } from "./utils/textComparison"
import { extractText } from "./utils/textExtractor"

export interface AnswerMatch {
  answer: Answer
  similarity: number
  userErrors: ErrorRange[]
  answerErrors: ErrorRange[]
}

export const checkAnswer = (
  input: string,
  question: PracticeQuestion,
): CheckResult & { allMatches: AnswerMatch[] } => {
  const userText = input.trim().normalize("NFKC")

  const allMatches = question.answers
    .map((answer) => {
      // Extract just the text part from bracketed segments
      const correctText = answer.segments.map(extractText).join("")
      const { similarity, userErrors, answerErrors } = findDifferences(
        userText,
        correctText,
      )
      return {
        answer,
        similarity,
        userErrors,
        answerErrors,
      }
    })
    .sort((a, b) => b.similarity - a.similarity)

  const bestMatch = allMatches[0]

  return {
    isCorrect: bestMatch.similarity === 1,
    userErrors: bestMatch.userErrors,
    answerErrors: bestMatch.answerErrors,
    bestMatch: bestMatch.answer,
    allMatches,
  }
}
