// soundChangesUtils.test.ts
import { getFullCounterReading } from "./soundChangesUtils"
import { CounterPattern } from "../types"

describe("Sound Changes", () => {
  // Regular column
  describe("Regular patterns (no sound changes)", () => {
    const pattern: CounterPattern = {
      id: "regular",
      baseReading: "にん",
      soundChangeType: undefined,
    }

    const testCases = [
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
    ]

    testCases.forEach(({ reading, expected }) => {
      it(`should keep ${reading} unchanged`, () => {
        expect(getFullCounterReading(reading, pattern)).toBe(expected)
      })
    })
  })

  // h→p column
  describe("hToP pattern", () => {
    const pattern: CounterPattern = {
      id: "test",
      baseReading: "はい",
      soundChangeType: "hToP",
    }

    const testCases = [
      { reading: "いち", expected: "いっぱい" }, // いっp in chart
      { reading: "に", expected: "にはい" }, // empty in chart
      { reading: "さん", expected: "さんぱい" }, // p in chart
      { reading: "よん", expected: "よんぱい" }, // p in chart
      { reading: "ご", expected: "ごはい" }, // empty in chart
      { reading: "ろく", expected: "ろっぱい" }, // ろっp in chart
      { reading: "なな", expected: "ななはい" }, // empty in chart
      { reading: "はち", expected: "はっぱい" }, // (はっp) in chart
      { reading: "きゅう", expected: "きゅうはい" }, // empty in chart
      { reading: "じゅう", expected: "じゅっぱい" }, // じゅっp/じっp in chart
    ]

    testCases.forEach(({ reading, expected }) => {
      it(`should convert ${reading} according to h→p pattern`, () => {
        expect(getFullCounterReading(reading, pattern)).toBe(expected)
      })
    })
  })

  // h→p/b column (匹 counter)
  describe("hToP/B pattern", () => {
    const pattern: CounterPattern = {
      id: "匹",
      baseReading: "ひき",
      soundChangeType: "hToP/B",
    }

    const testCases = [
      { reading: "いち", expected: "いっぴき" }, // いっp in chart
      { reading: "に", expected: "にひき" }, // empty in chart
      { reading: "さん", expected: "さんびき" }, // b in chart
      { reading: "よん", expected: "よんひき" }, // empty in chart
      { reading: "ご", expected: "ごひき" }, // empty in chart
      { reading: "ろく", expected: "ろっぴき" }, // ろっp in chart
      { reading: "なな", expected: "ななひき" }, // empty in chart
      { reading: "はち", expected: "はっぴき" }, // はっp in chart
      { reading: "きゅう", expected: "きゅうひき" }, // empty in chart
      { reading: "じゅう", expected: "じゅっぴき" }, // じゅっp/じっp in chart
    ]

    testCases.forEach(({ reading, expected }) => {
      it(`should convert ${reading} according to h→p/b pattern`, () => {
        expect(getFullCounterReading(reading, pattern)).toBe(expected)
      })
    })
  })

  // p column
  describe("p pattern", () => {
    const pattern: CounterPattern = {
      id: "test",
      baseReading: "ぴ",
      soundChangeType: "p",
    }

    const testCases = [
      { reading: "いち", expected: "いっぴ" }, // (いっ) in chart
      { reading: "に", expected: "にぴ" }, // empty in chart
      { reading: "さん", expected: "さんぴ" }, // empty in chart
      { reading: "よん", expected: "よんぴ" }, // empty in chart
      { reading: "ご", expected: "ごぴ" }, // empty in chart
      { reading: "ろく", expected: "ろっぴ" }, // (ろっ) in chart
      { reading: "なな", expected: "ななぴ" }, // empty in chart
      { reading: "はち", expected: "はっぴ" }, // (はっ) in chart
      { reading: "きゅう", expected: "きゅうぴ" }, // empty in chart
      { reading: "じゅう", expected: "じゅっぴ" }, // (じゅっ/じっ) in chart
    ]

    testCases.forEach(({ reading, expected }) => {
      it(`should convert ${reading} according to p pattern`, () => {
        expect(getFullCounterReading(reading, pattern)).toBe(expected)
      })
    })
  })

  // k column
  describe("k pattern", () => {
    const pattern: CounterPattern = {
      id: "test",
      baseReading: "か",
      soundChangeType: "k",
    }

    const testCases = [
      { reading: "いち", expected: "いっか" }, // いっ in chart
      { reading: "に", expected: "にか" }, // empty in chart
      { reading: "さん", expected: "さんか" }, // empty in chart
      { reading: "よん", expected: "よんか" }, // empty in chart
      { reading: "ご", expected: "ごか" }, // empty in chart
      { reading: "ろく", expected: "ろっか" }, // ろっ in chart
      { reading: "なな", expected: "ななか" }, // empty in chart
      { reading: "はち", expected: "はっか" }, // はっ in chart
      { reading: "きゅう", expected: "きゅうか" }, // empty in chart
      { reading: "じゅう", expected: "じゅっか" }, // じゅっ/じっ in chart
    ]

    testCases.forEach(({ reading, expected }) => {
      it(`should convert ${reading} according to k pattern`, () => {
        expect(getFullCounterReading(reading, pattern)).toBe(expected)
      })
    })
  })

  // k→g column
  describe("kToG pattern", () => {
    const pattern: CounterPattern = {
      id: "test",
      baseReading: "かい",
      soundChangeType: "kToG",
    }

    const testCases = [
      { reading: "いち", expected: "いちがい" }, // いっ in chart
      { reading: "に", expected: "にがい" }, // empty in chart
      { reading: "さん", expected: "さんがい" }, // g in chart
      { reading: "よん", expected: "よんがい" }, // empty in chart
      { reading: "ご", expected: "ごがい" }, // empty in chart
      { reading: "ろく", expected: "ろくがい" }, // ろっ in chart
      { reading: "なな", expected: "なながい" }, // empty in chart
      { reading: "はち", expected: "はちがい" }, // はっ in chart
      { reading: "きゅう", expected: "きゅうがい" }, // empty in chart
      { reading: "じゅう", expected: "じゅうがい" }, // じゅっ/じっ in chart
    ]

    testCases.forEach(({ reading, expected }) => {
      it(`should convert ${reading} according to k→g pattern`, () => {
        expect(getFullCounterReading(reading, pattern)).toBe(expected)
      })
    })
  })

  // s column
  describe("s pattern", () => {
    const pattern: CounterPattern = {
      id: "test",
      baseReading: "す",
      soundChangeType: "s",
    }

    const testCases = [
      { reading: "いち", expected: "いっす" }, // いっ in chart
      { reading: "に", expected: "にす" }, // empty in chart
      { reading: "さん", expected: "さんす" }, // empty in chart
      { reading: "よん", expected: "よんす" }, // empty in chart
      { reading: "ご", expected: "ごす" }, // empty in chart
      { reading: "ろく", expected: "ろくす" }, // empty in chart
      { reading: "なな", expected: "ななす" }, // empty in chart
      { reading: "はち", expected: "はっす" }, // はっ in chart
      { reading: "きゅう", expected: "きゅうす" }, // empty in chart
      { reading: "じゅう", expected: "じゅっす" }, // じゅっ/じっ in chart
    ]

    testCases.forEach(({ reading, expected }) => {
      it(`should convert ${reading} according to s pattern`, () => {
        expect(getFullCounterReading(reading, pattern)).toBe(expected)
      })
    })
  })

  // s→z column
  describe("sToZ pattern", () => {
    const pattern: CounterPattern = {
      id: "test",
      baseReading: "さい",
      soundChangeType: "sToZ",
    }

    const testCases = [
      { reading: "いち", expected: "いちざい" }, // いっ in chart
      { reading: "に", expected: "にざい" }, // empty in chart
      { reading: "さん", expected: "さんざい" }, // z in chart
      { reading: "よん", expected: "よんざい" }, // empty in chart
      { reading: "ご", expected: "ござい" }, // empty in chart
      { reading: "ろく", expected: "ろくざい" }, // empty in chart
      { reading: "なな", expected: "ななざい" }, // empty in chart
      { reading: "はち", expected: "はちざい" }, // はっ in chart
      { reading: "きゅう", expected: "きゅうざい" }, // empty in chart
      { reading: "じゅう", expected: "じゅうざい" }, // じゅっ/じっ in chart
    ]

    testCases.forEach(({ reading, expected }) => {
      it(`should convert ${reading} according to s→z pattern`, () => {
        expect(getFullCounterReading(reading, pattern)).toBe(expected)
      })
    })
  })

  // t column
  describe("t pattern", () => {
    const pattern: CounterPattern = {
      id: "test",
      baseReading: "て",
      soundChangeType: "t",
    }

    const testCases = [
      { reading: "いち", expected: "いって" }, // いっ in chart
      { reading: "に", expected: "にて" }, // empty in chart
      { reading: "さん", expected: "さんて" }, // empty in chart
      { reading: "よん", expected: "よんて" }, // empty in chart
      { reading: "ご", expected: "ごて" }, // empty in chart
      { reading: "ろく", expected: "ろくて" }, // empty in chart
      { reading: "なな", expected: "ななて" }, // empty in chart
      { reading: "はち", expected: "はって" }, // はっ in chart
      { reading: "きゅう", expected: "きゅうて" }, // empty in chart
      { reading: "じゅう", expected: "じゅって" }, // じゅっ in chart (note: only じゅっ, not じっ)
    ]

    testCases.forEach(({ reading, expected }) => {
      it(`should convert ${reading} according to t pattern`, () => {
        expect(getFullCounterReading(reading, pattern)).toBe(expected)
      })
    })
  })

  // Special vocabulary categories
  describe("Generic counter (つ)", () => {
    const pattern: CounterPattern = {
      id: "つ",
      baseReading: "つ",
      soundChangeType: "generic",
    }

    const testCases = [
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
    ]

    testCases.forEach(({ reading, expected }) => {
      it(`should convert ${reading} to special つ counter form`, () => {
        expect(getFullCounterReading(reading, pattern)).toBe(expected)
      })
    })
  })

  // Date counter
  describe("Date counter", () => {
    const pattern: CounterPattern = {
      id: "日",
      baseReading: "か",
      soundChangeType: "dates",
    }

    const testCases = [
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
      { reading: "にじゅう", expected: "はつか" },
      { reading: "にじゅうよん", expected: "にじゅうよっか" },
    ]

    testCases.forEach(({ reading, expected }) => {
      it(`should convert ${reading} to correct date reading`, () => {
        expect(getFullCounterReading(reading, pattern)).toBe(expected)
      })
    })
  })
})
