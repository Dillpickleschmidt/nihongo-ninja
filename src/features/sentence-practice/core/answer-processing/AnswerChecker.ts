// core/answer-processing/AnswerChecker.ts
import type { CheckResult, PracticeQuestion } from "./types"
import { AnswerMatcher } from "./AnswerMatcher"
import { TextProcessor as JapaneseTextProcessor } from "../text/TextProcessor"

// core/answer-processing/AnswerChecker.ts
export class AnswerChecker {
  private matcher: AnswerMatcher
  private textProcessor: JapaneseTextProcessor

  constructor() {
    this.matcher = new AnswerMatcher()
    this.textProcessor = new JapaneseTextProcessor()
  }

  checkAnswer(input: string, question: PracticeQuestion): CheckResult {
    const userText = this.textProcessor.normalize(input)

    const matches = question.answers
      .map((answer) => {
        const correctText = this.textProcessor.extractPlainText(answer.segments)
        const matchResult = this.matcher.match(userText, correctText)

        return {
          answer,
          ...matchResult,
        }
      })
      .sort((a, b) => b.similarity - a.similarity)

    const bestMatch = matches[0]

    return {
      isCorrect: bestMatch.similarity === 1,
      inputs: [
        {
          value: input, // Using original input here, not normalized
          errors: bestMatch.userErrors,
        },
      ],
      answers: [
        {
          segments: bestMatch.answer.segments,
          errors: bestMatch.answerErrors,
        },
      ],
    }
  }
}
