// core/answer-processing/__tests__/VariationGenerator.test.ts
import { VariationGenerator } from "../VariationGenerator"
import type { PracticeQuestion, Answer } from "../types"

describe("VariationGenerator", () => {
  const generator = new VariationGenerator()

  const createQuestion = (answers: Answer[]): PracticeQuestion => ({
    english: "Test question",
    answers,
  })

  // Helper function for serialization
  const serialize = (answer: Answer) =>
    JSON.stringify({
      segments: answer.segments,
      isVariation: answer.isVariation,
    })

  describe("Variation Combinations", () => {
    test("generates all types of variations that can mix and match", () => {
      const question: PracticeQuestion = {
        english: "I am Mr. Tanaka.",
        answers: [
          {
            segments: ["私[わたし]", "は", "田中[たなか]", "さん", "です。"],
          },
        ],
      }

      const result = generator.generateVariations(question)

      // Representative examples of each combination type
      const expectedVariations = [
        // 1. Original answer (no variation)
        {
          segments: ["私[わたし]", "は", "田中[たなか]", "さん", "です。"],
          isVariation: false,
        },

        // 2. Single-type variations
        // Honorific only
        {
          segments: [
            "私[わたし]",
            "は",
            "田中[たなか]",
            "先生[せんせい]",
            "です。",
          ],
          isVariation: true,
        },
        // Pronoun only
        {
          segments: ["僕[ぼく]", "は", "田中[たなか]", "さん", "です。"],
          isVariation: true,
        },
        // Kana only
        {
          segments: ["わたし", "は", "たなか", "さん", "です。"],
          isVariation: true,
        },
        // Period only
        {
          segments: ["私[わたし]", "は", "田中[たなか]", "さん", "です"],
          isVariation: true,
        },

        // 3. Two-type combinations
        // Honorific + Kana
        {
          segments: ["わたし", "は", "たなか", "せんせい", "です。"],
          isVariation: true,
        },
        // Honorific + Period
        {
          segments: [
            "私[わたし]",
            "は",
            "田中[たなか]",
            "先生[せんせい]",
            "です",
          ],
          isVariation: true,
        },
        // Pronoun + Honorific
        {
          segments: [
            "僕[ぼく]",
            "は",
            "田中[たなか]",
            "先生[せんせい]",
            "です。",
          ],
          isVariation: true,
        },
        // Pronoun + Kana
        {
          segments: ["ぼく", "は", "たなか", "さん", "です。"],
          isVariation: true,
        },
        // Pronoun + Period
        {
          segments: ["僕[ぼく]", "は", "田中[たなか]", "さん", "です"],
          isVariation: true,
        },

        // 4. Three-type combinations
        // Pronoun + Honorific + Kana
        {
          segments: ["ぼく", "は", "たなか", "せんせい", "です。"],
          isVariation: true,
        },
        // Pronoun + Honorific + Period
        {
          segments: [
            "僕[ぼく]",
            "は",
            "田中[たなか]",
            "先生[せんせい]",
            "です",
          ],
          isVariation: true,
        },
        // Honorific + Kana + Period
        {
          segments: ["わたし", "は", "たなか", "せんせい", "です"],
          isVariation: true,
        },

        // 5. All variations combined
        // Pronoun + Honorific + Kana + Period
        {
          segments: ["ぼく", "は", "たなか", "せんせい", "です"],
          isVariation: true,
        },
      ]

      const generatedSet = new Set(result.answers.map(serialize))
      const expectedSet = new Set(expectedVariations.map(serialize))

      // Verify each expected variation exists in the generated set
      expectedVariations.forEach((variation) => {
        expect(generatedSet.has(serialize(variation))).toBe(true)
      })

      // Check that all variations maintain proper structure
      result.answers.forEach((answer) => {
        expect(answer.segments.length).toBe(5) // Should maintain segment structure
        expect(answer.segments[1]).toBe("は") // Particle should remain unchanged
        expect(answer.segments[4].startsWith("です")).toBe(true) // Copula should remain
      })
    })
  })

  describe("Edge Cases", () => {
    test("handles empty answers array", () => {
      const question = createQuestion([])
      const result = generator.generateVariations(question)
      expect(result.answers).toEqual([])
    })

    test("handles answers without kanji, periods, honorifics, or pronouns", () => {
      const question = createQuestion([
        {
          segments: ["はい"],
        },
      ])

      const result = generator.generateVariations(question)
      expect(result.answers).toEqual([
        { segments: ["はい"], isVariation: false },
        { segments: ["はい。"], isVariation: true },
      ])
    })

    test("does not generate pronoun variations for non-first-person sentences", () => {
      const question = createQuestion([
        {
          segments: ["彼[かれ]", "は", "学生[がくせい]", "です。"],
        },
      ])

      const result = generator.generateVariations(question)

      // Should not contain first-person pronoun variations
      const firstPersonPronouns = ["私[わたし]", "僕[ぼく]", "俺[おれ]"]
      firstPersonPronouns.forEach((pronoun) => {
        expect(result.answers).not.toContainEqual(
          expect.objectContaining({
            segments: [pronoun, "は", "学生[がくせい]", "です。"],
          }),
        )
      })
    })

    test("does not generate honorific variations for answers without honorifics", () => {
      const question: PracticeQuestion = {
        english: "This is a book.",
        answers: [
          {
            segments: ["これ", "は", "本[ほん]", "です。"],
          },
        ],
      }

      const result = generator.generateVariations(question)

      // Should not contain any honorific variations
      const honorifics = [
        "さん",
        "くん",
        "ちゃん",
        "先生[せんせい]",
        "様[さま]",
      ]
      result.answers.forEach((answer) => {
        honorifics.forEach((honorific) => {
          expect(answer.segments).not.toContain(honorific)
        })
      })
    })
  })
})
