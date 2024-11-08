// utils/formAnalyzer.ts

import type { ConjugatedWord } from "../types"

export function isConjugatedWord(segment: unknown): segment is ConjugatedWord {
  return typeof segment === "object" && segment !== null && "pos" in segment
}

function determineSegmentForm(segment: string): boolean | null {
  // Common polite form endings
  if (
    segment.endsWith("ます") ||
    segment.endsWith("ました") ||
    segment.endsWith("です") ||
    segment.endsWith("でした") ||
    segment.endsWith("ません") ||
    segment.endsWith("ませんでした") ||
    segment.endsWith("ではありません")
  ) {
    return true
  }

  // Common casual form endings
  if (
    segment.endsWith("だ") ||
    segment.endsWith("た") ||
    segment.endsWith("ない") ||
    segment.endsWith("なかった") ||
    // Add verb dictionary form endings
    segment.endsWith("う") ||
    segment.endsWith("つ") ||
    segment.endsWith("る") ||
    segment.endsWith("く") ||
    segment.endsWith("ぐ") ||
    segment.endsWith("ぶ") ||
    segment.endsWith("む") ||
    segment.endsWith("ぬ") ||
    segment.endsWith("す")
  ) {
    return false
  }

  // Return null if we can't determine the form
  return null
}

export function determinePreferredForm(bestMatchSegments: string[]): boolean {
  let politeCount = 0
  let casualCount = 0

  bestMatchSegments.forEach((segment) => {
    const form = determineSegmentForm(segment)

    if (form === true) {
      politeCount++
      // console.log("Polite form found:", segment)
    } else if (form == null) {
      // console.log("Unknown form found:", segment)
    } else {
      casualCount++
      // console.log("Casual form found:", segment)
    }
  })

  // console.log("Final counts - Polite:", politeCount, "Casual:", casualCount)
  return politeCount >= casualCount
}
