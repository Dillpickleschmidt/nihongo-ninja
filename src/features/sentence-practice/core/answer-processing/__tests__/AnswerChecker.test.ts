// core/answer-processing/__tests__/AnswerChecker.test.ts
import { AnswerChecker } from "../AnswerChecker"
import type { PracticeQuestion, CheckResult, AnswerMatch } from "../types"
import { AnswerMatcher } from "../AnswerMatcher"
import { TextProcessor as JapaneseTextProcessor } from "../../text/TextProcessor"

jest.mock("../AnswerMatcher")
jest.mock("../../text/TextProcessor")

describe("AnswerChecker", () => {
  let checker: AnswerChecker
  let mockMatcher: jest.Mocked<AnswerMatcher>
  let mockTextProcessor: jest.Mocked<JapaneseTextProcessor>

  beforeEach(() => {
    mockMatcher = new AnswerMatcher() as jest.Mocked<AnswerMatcher>
    mockTextProcessor =
      new JapaneseTextProcessor() as jest.Mocked<JapaneseTextProcessor>
    checker = new AnswerChecker()
    ;(checker as any).matcher = mockMatcher
    ;(checker as any).textProcessor = mockTextProcessor
  })

  describe("Basic Answer Checking", () => {
    test("handles perfect, partial, and no matches", () => {
      const testCases = [
        {
          input: "こんにちは",
          similarity: 1,
          userErrors: [],
          answerErrors: [],
          expectedIsCorrect: true,
          description: "perfect match",
        },
        {
          input: "こんにち",
          similarity: 0.83,
          userErrors: [{ start: 5, end: 6 }],
          answerErrors: [],
          expectedIsCorrect: false,
          description: "partial match",
        },
        {
          input: "xyz",
          similarity: 0,
          userErrors: [{ start: 0, end: 3 }],
          answerErrors: [{ start: 0, end: 3 }],
          expectedIsCorrect: false,
          description: "no match",
        },
      ]

      testCases.forEach(
        ({
          input,
          similarity,
          userErrors,
          answerErrors,
          expectedIsCorrect,
          description,
        }) => {
          const question: PracticeQuestion = {
            english: "Test question",
            answers: [{ segments: ["こんにちは"] }],
          }

          mockTextProcessor.normalize.mockReturnValue(input)
          mockTextProcessor.extractPlainText.mockReturnValue("こんにちは")
          mockMatcher.match.mockReturnValue({
            similarity,
            userErrors,
            answerErrors,
          })

          const result = checker.checkAnswer(input, question)

          expect(result.isCorrect).toBe(expectedIsCorrect)
          expect(result.userErrors).toEqual(userErrors)
          expect(result.answerErrors).toEqual(answerErrors)
        },
      )
    })
  })

  describe("Multiple Answers", () => {
    test("selects best match from multiple answers", () => {
      const input = "ねこ"
      const question: PracticeQuestion = {
        english: "What is cat in Japanese?",
        answers: [{ segments: ["猫[ねこ]"] }, { segments: ["ねこ"] }],
      }

      mockTextProcessor.normalize.mockReturnValue("ねこ")
      mockTextProcessor.extractPlainText
        .mockReturnValueOnce("猫[ねこ]")
        .mockReturnValueOnce("ねこ")

      mockMatcher.match
        .mockReturnValueOnce({
          similarity: 0.9,
          userErrors: [],
          answerErrors: [{ start: 0, end: 1 }],
        })
        .mockReturnValueOnce({
          similarity: 1,
          userErrors: [],
          answerErrors: [],
        })

      const result = checker.checkAnswer(input, question)

      expect(result.isCorrect).toBe(true)
      expect(result.bestMatch).toEqual(question.answers[1])
      expect(result.allMatches).toHaveLength(2)
    })
  })

  describe("Edge Cases", () => {
    test("handles empty input", () => {
      const question: PracticeQuestion = {
        english: "Test question",
        answers: [{ segments: ["テスト"] }],
      }

      mockTextProcessor.normalize.mockReturnValue("")
      mockTextProcessor.extractPlainText.mockReturnValue("テスト")
      mockMatcher.match.mockReturnValue({
        similarity: 0,
        userErrors: [],
        answerErrors: [{ start: 0, end: 3 }],
      })

      const result = checker.checkAnswer("", question)

      expect(result.isCorrect).toBe(false)
      expect(result.userErrors).toEqual([])
      expect(result.answerErrors).toEqual([{ start: 0, end: 3 }])
    })
  })
})
