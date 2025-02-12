// __tests__/integration/practice.integration.test.ts
import { PracticeService } from "../../core/PracticeService"
import type { PracticeQuestion } from "../../core/answer-processing/types"
import { createPracticeStore } from "../../store/practiceStore"
import { TestFileLoader } from "../../store/fileLoader"
import { UnprocessedQuestion } from "../../core/conjugation/types"

describe("Japanese Practice System Integration", () => {
  let practiceService: PracticeService
  let store: ReturnType<typeof createPracticeStore>
  let testFileLoader: TestFileLoader

  beforeEach(() => {
    testFileLoader = new TestFileLoader()
    practiceService = new PracticeService()
    store = createPracticeStore(testFileLoader)
  })

  describe("Question Processing and Variation Generation", () => {
    const sampleQuestion: PracticeQuestion = {
      english: "I am a student.",
      answers: [
        {
          segments: ["私[わたし]", "は", "学生[がくせい]", "です。"],
        },
      ],
    }

    test("generates all expected variations for a complex sentence", () => {
      const processedQuestions = practiceService.prepareQuestions([
        sampleQuestion,
      ])
      const variations = processedQuestions[0].answers

      // Test kanji variations
      expect(variations).toContainEqual({
        segments: ["私[わたし]", "は", "学生[がくせい]", "です。"],
        isVariation: false,
        originalPoliteForm: true,
      })

      // Test all-kana variations
      expect(variations).toContainEqual({
        segments: ["わたし", "は", "がくせい", "です。"],
        isVariation: true,
        originalPoliteForm: true,
      })

      // Test pronoun variations (maintaining kanji/kana consistency)
      const expectedVariations = [
        // Kanji variations
        {
          segments: ["僕[ぼく]", "は", "学生[がくせい]", "です。"],
          isVariation: true,
          originalPoliteForm: true,
        },
        {
          segments: ["俺[おれ]", "は", "学生[がくせい]", "です。"],
          isVariation: true,
          originalPoliteForm: true,
        },
        // Kana variations
        {
          segments: ["ぼく", "は", "がくせい", "です。"],
          isVariation: true,
          originalPoliteForm: true,
        },
        {
          segments: ["おれ", "は", "がくせい", "です。"],
          isVariation: true,
          originalPoliteForm: true,
        },
        {
          segments: ["あたし", "は", "がくせい", "です。"],
          isVariation: true,
          originalPoliteForm: true,
        },
        {
          segments: ["うち", "は", "がくせい", "です。"],
          isVariation: true,
          originalPoliteForm: true,
        },
      ]

      expectedVariations.forEach((variation) => {
        expect(variations).toContainEqual(variation)
      })

      // Test period variations (maintaining kanji/kana consistency)
      expect(variations).toContainEqual({
        segments: ["私[わたし]", "は", "学生[がくせい]", "です"],
        isVariation: true,
        originalPoliteForm: true,
      })
      expect(variations).toContainEqual({
        segments: ["わたし", "は", "がくせい", "です"],
        isVariation: true,
        originalPoliteForm: true,
      })
    })
  })

  describe("Answer Checking System", () => {
    const complexQuestions: UnprocessedQuestion[] = [
      {
        english: "I want to eat sushi.",
        answers: [
          {
            segments: [
              "寿司[すし]",
              "が",
              {
                word: "食[た]べる",
                pos: "Ichidan verb",
                form: "tai-form",
                polarity: "positive",
                tense: "non-past",
              },
            ],
          },
        ],
      },
    ]

    test("correctly evaluates all valid answer variations", () => {
      const processedQuestions =
        practiceService.prepareQuestions(complexQuestions)

      // Group variations by kanji/kana consistency
      const validAnswers = [
        // All kanji variations
        "寿司が食べたいです。",
        "寿司が食べたいです",
        "寿司が食べたい。",
        "寿司が食べたい",
        // All kana variations
        "すしがたべたいです。",
        "すしがたべたいです",
        "すしがたべたい。",
        "すしがたべたい",
      ]

      validAnswers.forEach((input) => {
        const result = practiceService.checkAnswer(input, processedQuestions[0])
        expect(result.isCorrect).toBe(true)
      })
    })

    test("provides helpful error feedback for incorrect answers", () => {
      const processedQuestions =
        practiceService.prepareQuestions(complexQuestions)

      const testCases = [
        {
          input: "寿司が食べ",
          description: "incomplete answer",
          expectedErrors: {
            userErrors: [],
            answerErrors: expect.arrayContaining([expect.any(Object)]),
          },
        },
        {
          input: "寿司か食べたいです。",
          description: "particle typo",
          expectedErrors: {
            userErrors: expect.arrayContaining([expect.any(Object)]),
            answerErrors: expect.arrayContaining([expect.any(Object)]),
          },
        },
        {
          input: "",
          description: "empty input",
          expectedErrors: {
            userErrors: [],
            answerErrors: expect.arrayContaining([expect.any(Object)]),
          },
        },
      ]

      testCases.forEach(({ input, description, expectedErrors }) => {
        const result = practiceService.checkAnswer(input, processedQuestions[0])
        expect(result.isCorrect).toBe(false)
        expect(result).toMatchObject(expectedErrors)
      })
    })
  })

  describe("Store Integration", () => {
    test("manages complete practice session flow", async () => {
      // Load questions
      await store.actions.loadQuestions("test/greetings")
      expect(store.store.currentQuestionIndex).toBe(0)
      expect(store.store.showResult).toBe(false)
      expect(store.store.currentInput).toBe("")

      // Answer first question
      store.setStore("currentInput", "こんにちは。")
      const firstResult = store.actions.checkAnswer()
      expect(firstResult?.isCorrect).toBe(true)
      expect(store.store.showResult).toBe(true)

      // Move to next question
      store.actions.nextQuestion()
      expect(store.store.currentQuestionIndex).toBe(1)
      expect(store.store.showResult).toBe(false)
      expect(store.store.currentInput).toBe("")

      // Answer final question
      store.setStore("currentInput", "おはようございます。")
      const finalResult = store.actions.checkAnswer()
      expect(finalResult?.isCorrect).toBe(true)

      // Verify session completion behavior
      store.actions.nextQuestion()
      expect(store.store.currentQuestionIndex).toBe(1) // Should stay on last question
    })

    test("handles furigana visibility toggle", async () => {
      await store.actions.loadQuestions("test/greetings")

      expect(store.store.showFurigana).toBe(true)
      store.actions.toggleFurigana()
      expect(store.store.showFurigana).toBe(false)
      store.actions.toggleFurigana()
      expect(store.store.showFurigana).toBe(true)
    })

    test("handles error conditions gracefully", async () => {
      // Test loading non-existent file
      await store.actions.loadQuestions("non/existent/path")
      expect(store.store.error).toBeTruthy()
      expect(store.store.questions).toHaveLength(0)
      expect(store.store.isLoading).toBe(false)

      // Test answering with invalid input
      await store.actions.loadQuestions("test/greetings")
      store.setStore("currentInput", "")
      const result = store.actions.checkAnswer()
      expect(result?.isCorrect).toBe(false)
      expect(result?.userErrors).toEqual([])
      expect(result?.answerErrors).toBeTruthy()
    })
  })
})
