// counterUtils.test.ts
import * as counterUtils from "./counterUtils"
import { CounterPattern, VocabItem } from "../types"

describe("Counter Utils", () => {
  describe("Number Generation", () => {
    it("should generate numbers within range", () => {
      for (let i = 0; i < 100; i++) {
        const num = counterUtils.generateRandomNumber(1, 50)
        expect(num).toBeGreaterThanOrEqual(1)
        expect(num).toBeLessThanOrEqual(50)
      }
    })
  })

  describe("Base Number Readings", () => {
    it("should return correct readings for all numbers 1-10", () => {
      const expected = {
        1: "いち",
        2: "に",
        3: "さん",
        4: "よん",
        5: "ご",
        6: "ろく",
        7: "なな",
        8: "はち",
        9: "きゅう",
        10: "じゅう",
      }

      Object.entries(expected).forEach(([num, reading]) => {
        expect(counterUtils.getNumberReading(parseInt(num))).toBe(reading)
      })
    })

    it("should handle numbers outside 1-10 range", () => {
      expect(counterUtils.getNumberReading(0)).toBe("れい")
      expect(counterUtils.getNumberReading(11)).toBe("じゅういち")
    })
  })

  describe("Counter Reading", () => {
    it("should apply number overrides when specified", () => {
      const pattern: CounterPattern = {
        id: "人",
        baseReading: "にん",
        numberOverrides: [
          { number: 1, reading: "ひとり" },
          { number: 2, reading: "ふたり" },
        ],
      }

      expect(counterUtils.getCounterReading(pattern, 1)).toBe("ひとり")
      expect(counterUtils.getCounterReading(pattern, 2)).toBe("ふたり")
      expect(counterUtils.getCounterReading(pattern, 3)).toBe("さんにん")
    })
  })

  describe("Question Generation", () => {
    const patterns: CounterPattern[] = [
      {
        id: "匹",
        baseReading: "ひき",
        soundChangeType: "hToP/B",
      },
    ]

    const vocab: VocabItem[] = [
      {
        word: "cat",
        pluralWord: "cats",
        patternId: "匹",
      },
    ]

    it("should generate valid questions", () => {
      const question = counterUtils.generateQuestion(patterns, vocab)
      expect(question.number).toBeGreaterThanOrEqual(1)
      expect(question.number).toBeLessThanOrEqual(50)
      expect(question.vocab).toBe(vocab[0])
      expect(question.pattern).toBe(patterns[0])
      expect(question.correctReading).toBeTruthy()
    })

    it("should respect range constraints", () => {
      const patternsWithRange = [
        {
          ...patterns[0],
          range: [5, 8] as [number, number],
        },
      ]

      for (let i = 0; i < 50; i++) {
        const question = counterUtils.generateQuestion(patternsWithRange, vocab)
        expect(question.number).toBeGreaterThanOrEqual(5)
        expect(question.number).toBeLessThanOrEqual(8)
      }
    })
  })
})
