// types.ts
export const UnitButtonTypes = [
  "grammar-notes",
  "vocab-list",
  "lesson",
  "practice-sentence",
  "vocab",
  "vocab-practice",
  "vocab-test",
  "conjugation-practice",
  "worksheet",
  "video",
  "audio",
  "reading",
  "culture-note",
  "game",
] as const

export type UnitButtonType = (typeof UnitButtonTypes)[number]
