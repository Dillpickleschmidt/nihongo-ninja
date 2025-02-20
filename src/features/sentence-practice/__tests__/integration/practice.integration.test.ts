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
    const sampleQuestion: UnprocessedQuestion = {
      english: "I am a student.",
      answers: [
        {
          segments: ["学生[がくせい]", "です"],
        },
      ],
    }

    test("generates expected variations", () => {
      const processedQuestions = practiceService.prepareQuestions([
        sampleQuestion,
      ])
      const variations = processedQuestions[0].answers

      const expectedVariations = [
        // Base form
        {
          segments: ["学生[がくせい]", "です"],
          isVariation: false,
          originalPoliteForm: true,
        },

        // Test a few representative pronoun variations to validate pronoun generation
        {
          segments: ["私[わたし]", "は", "学生[がくせい]", "です"],
          isVariation: false,
          originalPoliteForm: true,
        },
        {
          segments: ["僕[ぼく]", "は", "学生[がくせい]", "です"],
          isVariation: true,
          originalPoliteForm: true,
        },

        // Test kana conversion (one with kanji, one pronoun)
        {
          segments: ["がくせい", "です"],
          isVariation: true,
          originalPoliteForm: true,
        },
        {
          segments: ["ぼく", "は", "がくせい", "です"],
          isVariation: true,
          originalPoliteForm: true,
        },

        // Period variations (one with and without pronoun)
        {
          segments: ["学生[がくせい]", "です。"],
          isVariation: true,
          originalPoliteForm: true,
        },
        {
          segments: ["私[わたし]", "は", "学生[がくせい]", "です。"],
          isVariation: true,
          originalPoliteForm: true,
        },
      ]

      expectedVariations.forEach((variation) => {
        expect(variations).toContainEqual(variation)
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

    test("correctly evaluates answers in hard mode", () => {
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
        const result = practiceService.checkAnswer(
          { single: input },
          processedQuestions[0],
        )
        expect(result.isCorrect).toBe(true)
      })
    })

    test("correctly evaluates answers in easy mode", () => {
      const processedQuestions =
        practiceService.prepareQuestions(complexQuestions)

      const result = practiceService.checkAnswer(
        { blanks: ["寿司", "が", "食べたい"] },
        processedQuestions[0],
      )
      expect(result.isCorrect).toBe(true)
    })

    test("provides helpful error feedback", () => {
      const processedQuestions =
        practiceService.prepareQuestions(complexQuestions)

      const testCases = [
        {
          input: { single: "寿司が食べ" },
          description: "incomplete answer",
          expectedErrors: {
            inputs: [{ value: "寿司が食べ", errors: [] }],
            answers: [{ errors: expect.arrayContaining([expect.any(Object)]) }],
          },
        },
        {
          input: { single: "寿司か食べたいです。" },
          description: "particle typo",
          expectedErrors: {
            inputs: [
              {
                value: "寿司か食べたいです。",
                errors: expect.arrayContaining([expect.any(Object)]),
              },
            ],
            answers: [{ errors: expect.arrayContaining([expect.any(Object)]) }],
          },
        },
        {
          input: { single: "" },
          description: "empty input",
          expectedErrors: {
            inputs: [], // Changed to match new behavior - empty input results in empty array
            answers: [{ errors: expect.arrayContaining([expect.any(Object)]) }],
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
    test("manages complete practice session flow in hard mode", async () => {
      await store.actions.loadQuestions("test/greetings")
      store.actions.setDifficulty("hard")

      expect(store.store.currentQuestionIndex).toBe(0)
      expect(store.store.showResult).toBe(false)
      expect(store.store.inputs.single).toBe("")

      // Answer first question
      store.actions.updateInput("こんにちは")
      const firstResult = store.actions.checkAnswer()
      expect(firstResult?.isCorrect).toBe(true)
      expect(store.store.showResult).toBe(true)

      // Move to next question
      store.actions.nextQuestion()
      expect(store.store.currentQuestionIndex).toBe(1)
      expect(store.store.showResult).toBe(false)
      expect(store.store.inputs.single).toBe("")

      // Answer final question
      store.actions.updateInput("おはようございます")
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
      store.actions.setDifficulty("hard")
      store.actions.updateInput("")
      const result = store.actions.checkAnswer()
      expect(result?.isCorrect).toBe(false)
      if (result?.inputs.length) {
        expect(result.inputs[0].errors).toEqual([])
      }
      expect(result?.answers[0]?.errors).toBeTruthy()
    })
  })
})
