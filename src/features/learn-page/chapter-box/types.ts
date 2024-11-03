// types.ts
export const UnitButtonTypes = [
  "grammar-notes",
  "vocab-list",
  "lesson",
  "vocab",
  "vocab-practice",
  "vocab-test",
  "conjugation-practice",
  "practice-sentence",
  "worksheet",
  "video",
  "audio",
  "reading",
  "culture-note",
  "game",
] as const

export type UnitButtonType = (typeof UnitButtonTypes)[number]
