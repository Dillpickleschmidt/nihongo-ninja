// core/answer-processing/__tests__/AnswerChecker.test.ts
import { AnswerChecker } from "../AnswerChecker"
import type { PracticeQuestion, CheckResult } from "../types"
import { AnswerMatcher } from "../AnswerMatcher"
import { TextProcessor } from "../../text/TextProcessor"

jest.mock("../AnswerMatcher")
jest.mock("../../text/TextProcessor")

describe("AnswerChecker", () => {
  let checker: AnswerChecker
  let mockMatcher: jest.Mocked<AnswerMatcher>
  let mockTextProcessor: jest.Mocked<TextProcessor>

  beforeEach(() => {
    mockMatcher = new AnswerMatcher() as jest.Mocked<AnswerMatcher>
    mockTextProcessor = new TextProcessor() as jest.Mocked<TextProcessor>
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
            answers: [
              {
                segments: ["こんにちは"],
                isVariation: false,
                originalPoliteForm: true,
              },
            ],
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
          expect(result.inputs[0].errors).toEqual(userErrors)
          expect(result.answers[0].errors).toEqual(answerErrors)
          expect(result.allMatches[0].similarity).toBe(similarity)
        },
      )
    })
  })

  describe("Multiple Answers", () => {
    test("selects best match from multiple answers", () => {
      const input = "ねこ"
      const question: PracticeQuestion = {
        english: "What is cat in Japanese?",
        answers: [
          {
            segments: ["猫[ねこ]"],
            isVariation: false,
            originalPoliteForm: true,
          },
          {
            segments: ["ねこ"],
            isVariation: true,
            originalPoliteForm: true,
          },
        ],
      }

      mockTextProcessor.normalize.mockReturnValue("ねこ")
      mockTextProcessor.extractPlainText
        .mockReturnValueOnce("猫")
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
      expect(result.inputs[0].value).toBe(input)
      expect(result.answers[0].segments).toEqual(question.answers[1].segments)
      expect(result.allMatches).toHaveLength(2)
    })
  })

  describe("Edge Cases", () => {
    test("handles empty input", () => {
      const question: PracticeQuestion = {
        english: "Test question",
        answers: [
          {
            segments: ["テスト"],
            isVariation: false,
            originalPoliteForm: true,
          },
        ],
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
      expect(result.inputs[0].value).toBe("")
      expect(result.inputs[0].errors).toEqual([])
      expect(result.answers[0].errors).toEqual([{ start: 0, end: 3 }])
    })
  })
})
