// counterUtils.ts
import { CounterPattern, VocabItem, GeneratedQuestion } from "../types"
import { getFullCounterReading } from "./soundChangesUtils"

export const generateRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const selectRandomItem = <T>(items: T[]): T => {
  return items[Math.floor(Math.random() * items.length)]
}

export const getNumberReading = (num: number): string => {
  const units = [
    "",
    "いち",
    "に",
    "さん",
    "よん",
    "ご",
    "ろく",
    "なな",
    "はち",
    "きゅう",
  ]
  const tens = [
    "",
    "じゅう",
    "にじゅう",
    "さんじゅう",
    "よんじゅう",
    "ごじゅう",
    "ろくじゅう",
    "ななじゅう",
    "はちじゅう",
    "きゅうじゅう",
  ]

  if (num <= 10) {
    return units[num]
  }

  const unit = num % 10
  const ten = Math.floor(num / 10)

  return tens[ten] + (unit > 0 ? units[unit] : "")
}

export const getCounterReading = (
  pattern: CounterPattern,
  num: number,
): string => {
  // First check for specific number override
  const override = pattern.numberOverrides?.find((o) => o.number === num)
  if (override) {
    return override.reading
  }

  // If no override, get base number reading and apply sound change rules
  const numberReading = getNumberReading(num)
  return getFullCounterReading(numberReading, pattern)
}

export const generateQuestion = (
  patterns: CounterPattern[],
  vocab: VocabItem[],
): GeneratedQuestion => {
  const vocabItem = selectRandomItem(vocab)
  const pattern = patterns.find((p) => p.id === vocabItem.patternId)!

  const min = pattern.range?.[0] ?? 1
  const max = pattern.range?.[1] ?? 50
  const number = generateRandomNumber(min, max)
  const correctReading = getCounterReading(pattern, number)

  return {
    number,
    vocab: vocabItem,
    pattern,
    correctReading,
  }
}
