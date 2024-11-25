// types.ts
export const UnitButtonTypes = [
  "grammar-notes",
  "vocab-list",
  "lesson",
  "conjugation-practice",
  "counter-practice",
  "practice-sentence",
  "vocab",
  "vocab-practice",
  "vocab-test",
  "worksheet",
  "video",
  "audio",
  "reading",
  "culture-note",
  "game",
] as const

export type UnitButtonType = (typeof UnitButtonTypes)[number]
