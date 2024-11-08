// utils/formAnalyzer.ts
import type { ConjugatedWord } from "../types"

// Helper to check if a segment is a conjugatable word
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
    segment.endsWith("なかった")
  ) {
    return false
  }

  // Return null if we can't determine the form
  return null
}

export function determinePreferredForm(
  bestMatchSegments: (string | ConjugatedWord)[],
): boolean {
  let politeCount = 0
  let casualCount = 0

  bestMatchSegments.forEach((segment) => {
    // If it's a conjugated word, use its word property
    if (isConjugatedWord(segment)) {
      const form = determineSegmentForm(segment.word)
      if (form !== null) {
        if (form) politeCount++
        else casualCount++
      }
      return
    }

    // For string segments
    if (typeof segment === "string") {
      // Skip particles, pronouns, etc.
      if (segment.length <= 1) return

      const form = determineSegmentForm(segment)
      if (form !== null) {
        if (form) politeCount++
        else casualCount++
      }
    }
  })

  // console.log("Form analysis:", {
  //   politeCount,
  //   casualCount,
  //   segments: bestMatchSegments.map((seg) =>
  //     isConjugatedWord(seg) ? seg.word : seg,
  //   ),
  // })

  // Default to polite if equal or no clear preference
  return politeCount >= casualCount
}
