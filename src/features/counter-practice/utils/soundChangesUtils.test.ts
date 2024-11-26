import { getFullCounterReading } from "./soundChangesUtils"
import { CounterPattern } from "../types"

describe("Sound Changes", () => {
  // Helper function to run test cases
  const runTestCases = (
    pattern: CounterPattern,
    testCases: Array<{ reading: string; expected: string }>,
  ) => {
    testCases.forEach(({ reading, expected }) => {
      it(`should convert ${reading} to ${expected}`, () => {
        expect(getFullCounterReading(reading, pattern)).toBe(expected)
      })
    })
  }

  describe("Regular patterns (no sound changes)", () => {
    const pattern: CounterPattern = {
      id: "regular",
      baseReading: "にん",
      soundChangeType: undefined,
    }

    const testCases = [
      // Basic numbers 1-10
      { reading: "いち", expected: "いちにん" },
      { reading: "に", expected: "ににん" },
      { reading: "さん", expected: "さんにん" },
      { reading: "よん", expected: "よんにん" },
      { reading: "ご", expected: "ごにん" },
      { reading: "ろく", expected: "ろくにん" },
      { reading: "なな", expected: "ななにん" },
      { reading: "はち", expected: "はちにん" },
      { reading: "きゅう", expected: "きゅうにん" },
      { reading: "じゅう", expected: "じゅうにん" },
      // Compound numbers
      { reading: "じゅういち", expected: "じゅういちにん" },
      { reading: "じゅうに", expected: "じゅうににん" },
      { reading: "にじゅう", expected: "にじゅうにん" },
      { reading: "さんじゅう", expected: "さんじゅうにん" },
      { reading: "にじゅうご", expected: "にじゅうごにん" },
      // Large numbers
      { reading: "ひゃく", expected: "ひゃくにん" },
      { reading: "せん", expected: "せんにん" },
      { reading: "まん", expected: "まんにん" },
    ]

    runTestCases(pattern, testCases)
  })

  describe("p column", () => {
    const pattern: CounterPattern = {
      id: "test",
      baseReading: "ぱい",
      soundChangeType: "p",
    }

    const testCases = [
      // Numbers requiring っ transformation
      { reading: "いち", expected: "いっぱい" },
      { reading: "ろく", expected: "ろっぱい" },
      { reading: "はち", expected: "はっぱい" },
      { reading: "じゅう", expected: "じゅっぱい" },
      // Numbers without transformation
      { reading: "に", expected: "にぱい" },
      { reading: "さん", expected: "さんぱい" },
      { reading: "よん", expected: "よんぱい" },
      { reading: "ご", expected: "ごぱい" },
      { reading: "なな", expected: "ななぱい" },
      { reading: "きゅう", expected: "きゅうぱい" },
      // Compound numbers
      { reading: "じゅういち", expected: "じゅういっぱい" },
      { reading: "じゅうろく", expected: "じゅうろっぱい" },
      { reading: "じゅうはち", expected: "じゅうはっぱい" },
      { reading: "にじゅう", expected: "にじゅっぱい" },
      // More compound numbers with transformations
      { reading: "にじゅういち", expected: "にじゅういっぱい" },
      { reading: "さんじゅうはち", expected: "さんじゅうはっぱい" },
    ]

    runTestCases(pattern, testCases)
  })

  describe("k column", () => {
    const pattern: CounterPattern = {
      id: "test",
      baseReading: "かい",
      soundChangeType: "k",
    }

    const testCases = [
      // Numbers requiring っ transformation
      { reading: "いち", expected: "いっかい" },
      { reading: "ろく", expected: "ろっかい" },
      { reading: "はち", expected: "はっかい" },
      { reading: "じゅう", expected: "じゅっかい" },
      // Numbers without transformation
      { reading: "に", expected: "にかい" },
      { reading: "さん", expected: "さんかい" },
      { reading: "よん", expected: "よんかい" },
      { reading: "ご", expected: "ごかい" },
      { reading: "なな", expected: "ななかい" },
      { reading: "きゅう", expected: "きゅうかい" },
      // Compound numbers
      { reading: "じゅういち", expected: "じゅういっかい" },
      { reading: "じゅうろく", expected: "じゅうろっかい" },
      { reading: "じゅうはち", expected: "じゅうはっかい" },
      { reading: "にじゅう", expected: "にじゅっかい" },
      // More compound numbers with transformations
      { reading: "にじゅういち", expected: "にじゅういっかい" },
      { reading: "さんじゅうはち", expected: "さんじゅうはっかい" },
    ]

    runTestCases(pattern, testCases)
  })

  describe("h→p transformation pattern", () => {
    const pattern: CounterPattern = {
      id: "minutes",
      baseReading: "ふん",
      soundChangeType: "hToP",
    }

    const testCases = [
      // Basic numbers with っ transformation
      { reading: "いち", expected: "いっぷん" },
      { reading: "ろく", expected: "ろっぷん" },
      { reading: "はち", expected: "はっぷん" },
      { reading: "じゅう", expected: "じゅっぷん" },
      // Numbers with ん transformation
      { reading: "さん", expected: "さんぷん" },
      { reading: "よん", expected: "よんぷん" },
      // Numbers without transformation
      { reading: "に", expected: "にふん" },
      { reading: "ご", expected: "ごふん" },
      { reading: "なな", expected: "ななふん" },
      { reading: "きゅう", expected: "きゅうふん" },
      // Compound numbers
      { reading: "じゅういち", expected: "じゅういっぷん" },
      { reading: "じゅうよん", expected: "じゅうよんぷん" },
      { reading: "にじゅう", expected: "にじゅっぷん" },
      { reading: "さんじゅう", expected: "さんじゅっぷん" },
      // Edge cases
      { reading: "にじゅうはち", expected: "にじゅうはっぷん" },
      { reading: "さんじゅうろく", expected: "さんじゅうろっぷん" },
    ]

    runTestCases(pattern, testCases)
  })

  describe("h→p/b transformation pattern", () => {
    const pattern: CounterPattern = {
      id: "animals",
      baseReading: "ひき",
      soundChangeType: "hToP/B",
    }

    const testCases = [
      // Basic numbers with っ+p transformation
      { reading: "いち", expected: "いっぴき" },
      { reading: "ろく", expected: "ろっぴき" },
      { reading: "はち", expected: "はっぴき" },
      { reading: "じゅう", expected: "じゅっぴき" },
      // Numbers with b transformation
      { reading: "さん", expected: "さんびき" },
      // Numbers without transformation
      { reading: "に", expected: "にひき" },
      { reading: "よん", expected: "よんひき" },
      { reading: "ご", expected: "ごひき" },
      { reading: "なな", expected: "ななひき" },
      { reading: "きゅう", expected: "きゅうひき" },
      // Compound numbers
      { reading: "じゅういち", expected: "じゅういっぴき" },
      { reading: "じゅうさん", expected: "じゅうさんびき" },
      { reading: "にじゅう", expected: "にじゅっぴき" },
      // Edge cases with mixed transformations
      { reading: "さんじゅういち", expected: "さんじゅういっぴき" },
      { reading: "にじゅうさん", expected: "にじゅうさんびき" },
    ]

    runTestCases(pattern, testCases)
  })

  describe("k→g transformation pattern", () => {
    const pattern: CounterPattern = {
      id: "test",
      baseReading: "かい",
      soundChangeType: "kToG",
    }

    const testCases = [
      // Regular numbers without transformation
      { reading: "いち", expected: "いちかい" },
      { reading: "に", expected: "にかい" },
      { reading: "よん", expected: "よんかい" },
      { reading: "ご", expected: "ごかい" },
      { reading: "ろく", expected: "ろくかい" },
      { reading: "なな", expected: "ななかい" },
      { reading: "はち", expected: "はちかい" },
      { reading: "きゅう", expected: "きゅうかい" },
      { reading: "じゅう", expected: "じゅうかい" },
      // さん triggers が transformation
      { reading: "さん", expected: "さんがい" },
      // Compound numbers
      { reading: "じゅうさん", expected: "じゅうさんがい" },
      { reading: "にじゅうさん", expected: "にじゅうさんがい" },
      { reading: "さんじゅう", expected: "さんじゅうかい" },
      { reading: "さんじゅうさん", expected: "さんじゅうさんがい" },
    ]

    runTestCases(pattern, testCases)
  })

  describe("k→g transformation pattern with き", () => {
    const pattern: CounterPattern = {
      id: "test",
      baseReading: "き",
      soundChangeType: "kToG",
    }

    const testCases = [
      // Regular numbers
      { reading: "いち", expected: "いちき" },
      { reading: "に", expected: "にき" },
      { reading: "よん", expected: "よんき" },
      // さん triggers ぎ transformation
      { reading: "さん", expected: "さんぎ" },
      // Compound numbers
      { reading: "じゅうさん", expected: "じゅうさんぎ" },
      { reading: "にじゅうさん", expected: "にじゅうさんぎ" },
    ]

    runTestCases(pattern, testCases)
  })

  describe("s→z transformation pattern", () => {
    const pattern: CounterPattern = {
      id: "test",
      baseReading: "さい",
      soundChangeType: "sToZ",
    }

    const testCases = [
      // Regular numbers without transformation
      { reading: "いち", expected: "いちさい" },
      { reading: "に", expected: "にさい" },
      { reading: "よん", expected: "よんさい" },
      { reading: "ご", expected: "ごさい" },
      { reading: "ろく", expected: "ろくさい" },
      { reading: "なな", expected: "ななさい" },
      { reading: "はち", expected: "はちさい" },
      { reading: "きゅう", expected: "きゅうさい" },
      { reading: "じゅう", expected: "じゅうさい" },
      // さん triggers ざ transformation
      { reading: "さん", expected: "さんざい" },
      // Compound numbers
      { reading: "じゅうさん", expected: "じゅうさんざい" },
      { reading: "にじゅうさん", expected: "にじゅうさんざい" },
      { reading: "さんじゅう", expected: "さんじゅうさい" },
      { reading: "さんじゅうさん", expected: "さんじゅうさんざい" },
    ]

    runTestCases(pattern, testCases)
  })

  describe("s column", () => {
    const pattern: CounterPattern = {
      id: "test",
      baseReading: "せん",
      soundChangeType: "s",
    }

    const testCases = [
      // Numbers requiring っ transformation
      { reading: "いち", expected: "いっせん" },
      { reading: "はち", expected: "はっせん" },
      { reading: "じゅう", expected: "じゅっせん" },
      // Numbers without transformation
      { reading: "に", expected: "にせん" },
      { reading: "さん", expected: "さんせん" },
      { reading: "よん", expected: "よんせん" },
      { reading: "ご", expected: "ごせん" },
      { reading: "ろく", expected: "ろくせん" },
      { reading: "なな", expected: "ななせん" },
      { reading: "きゅう", expected: "きゅうせん" },
      // Compound numbers
      { reading: "じゅういち", expected: "じゅういっせん" },
      { reading: "じゅうはち", expected: "じゅうはっせん" },
      { reading: "にじゅう", expected: "にじゅっせん" },
    ]

    runTestCases(pattern, testCases)
  })

  describe("s→z transformation pattern with し", () => {
    const pattern: CounterPattern = {
      id: "test",
      baseReading: "し",
      soundChangeType: "sToZ",
    }

    const testCases = [
      // Regular numbers
      { reading: "いち", expected: "いちし" },
      { reading: "に", expected: "にし" },
      { reading: "よん", expected: "よんし" },
      // さん triggers じ transformation
      { reading: "さん", expected: "さんじ" },
      // Compound numbers
      { reading: "じゅうさん", expected: "じゅうさんじ" },
      { reading: "にじゅうさん", expected: "にじゅうさんじ" },
    ]

    runTestCases(pattern, testCases)
  })

  describe("t column", () => {
    const pattern: CounterPattern = {
      id: "test",
      baseReading: "てん",
      soundChangeType: "t",
    }

    const testCases = [
      // Numbers requiring っ transformation
      { reading: "いち", expected: "いってん" },
      { reading: "はち", expected: "はってん" },
      { reading: "じゅう", expected: "じゅってん" },
      // Numbers without transformation
      { reading: "に", expected: "にてん" },
      { reading: "さん", expected: "さんてん" },
      { reading: "よん", expected: "よんてん" },
      { reading: "ご", expected: "ごてん" },
      { reading: "ろく", expected: "ろくてん" },
      { reading: "なな", expected: "ななてん" },
      { reading: "きゅう", expected: "きゅうてん" },
      // Compound numbers
      { reading: "じゅういち", expected: "じゅういってん" },
      { reading: "じゅうはち", expected: "じゅうはってん" },
      { reading: "にじゅう", expected: "にじゅってん" },
    ]

    runTestCases(pattern, testCases)
  })

  describe("Generic counter (つ)", () => {
    const pattern: CounterPattern = {
      id: "generic",
      baseReading: "つ",
      soundChangeType: "generic",
    }

    const testCases = [
      // Special readings for 1-10
      { reading: "いち", expected: "ひとつ" },
      { reading: "に", expected: "ふたつ" },
      { reading: "さん", expected: "みっつ" },
      { reading: "よん", expected: "よっつ" },
      { reading: "ご", expected: "いつつ" },
      { reading: "ろく", expected: "むっつ" },
      { reading: "なな", expected: "ななつ" },
      { reading: "はち", expected: "やっつ" },
      { reading: "きゅう", expected: "ここのつ" },
      { reading: "じゅう", expected: "とお" },
      // Numbers above 10
      { reading: "じゅういち", expected: "じゅういちつ" },
      { reading: "にじゅう", expected: "にじゅうつ" },
      { reading: "さんじゅう", expected: "さんじゅうつ" },
      // Edge cases
      { reading: "ひゃく", expected: "ひゃくつ" },
      { reading: "せん", expected: "せんつ" },
    ]

    runTestCases(pattern, testCases)
  })

  describe("Date counter", () => {
    const pattern: CounterPattern = {
      id: "dates",
      baseReading: "にち",
      soundChangeType: "dates",
    }

    const testCases = [
      // Special readings for dates 1-10
      { reading: "いち", expected: "ついたち" },
      { reading: "に", expected: "ふつか" },
      { reading: "さん", expected: "みっか" },
      { reading: "よん", expected: "よっか" },
      { reading: "ご", expected: "いつか" },
      { reading: "ろく", expected: "むいか" },
      { reading: "なな", expected: "なのか" },
      { reading: "はち", expected: "ようか" },
      { reading: "きゅう", expected: "ここのか" },
      { reading: "じゅう", expected: "とおか" },
      // Special readings for teens and 20th
      { reading: "じゅういち", expected: "じゅういちにち" },
      { reading: "じゅうよん", expected: "じゅうよっか" },
      { reading: "にじゅう", expected: "はつか" },
      // Regular patterns for other dates
      { reading: "にじゅういち", expected: "にじゅういちにち" },
      { reading: "にじゅうよん", expected: "にじゅうよっか" },
      { reading: "さんじゅういち", expected: "さんじゅういちにち" },
    ]

    runTestCases(pattern, testCases)
  })

  describe("Edge cases and error handling", () => {
    it("should handle empty input", () => {
      const pattern: CounterPattern = {
        id: "test",
        baseReading: "か",
      }
      expect(getFullCounterReading("", pattern)).toBe("か")
    })
  })
})
