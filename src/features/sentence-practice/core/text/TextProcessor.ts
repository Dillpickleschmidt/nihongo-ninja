// core/text/TextProcessor.ts
import {
  extractHiragana,
  convertFuriganaToRubyHtml,
} from "@/util/vocabDataTransformer"
import type { ConjugatableSegment, BlankableWord } from "../conjugation/types"

export class TextProcessor {
  normalize(text: string): string {
    return text.trim().normalize("NFKC").replace(/、/g, "")
  }

  isBlankableWord(segment: ConjugatableSegment): segment is BlankableWord {
    return typeof segment === "object" && "blank" in segment
  }

  extractPlainText(segments: ConjugatableSegment[]): string {
    return segments
      .map((segment) => {
        if (typeof segment === "string") {
          return this.removeFurigana(segment)
        }
        if (this.isBlankableWord(segment)) {
          const word = segment.word
          return this.removeFurigana(
            typeof word === "string" ? word : word.word,
          )
        }
        if ("word" in segment) {
          return this.removeFurigana(segment.word)
        }
        return ""
      })
      .join("")
      .replace(/\s+/g, "") // Remove all spaces after joining
  }

  removeFurigana(segment: string): string {
    return segment.replace(/\[.*?\]/g, "")
  }

  convertToRuby(text: string, furiganaSize?: string): string {
    return convertFuriganaToRubyHtml(text, furiganaSize)
  }

  convertToKana(segment: string): string {
    return extractHiragana(segment)
  }

  getSegmentDisplay(segment: ConjugatableSegment): {
    text: string
    isBlank: boolean
  } {
    if (typeof segment === "string") {
      return { text: segment, isBlank: false }
    }

    if (this.isBlankableWord(segment)) {
      const word = segment.word
      const text = typeof word === "string" ? word : word.word
      return { text, isBlank: segment.blank }
    }

    return { text: segment.word, isBlank: false }
  }

  processSegmentsForDisplay(segments: ConjugatableSegment[]): Array<{
    text: string
    isBlank: boolean
  }> {
    return segments.map((segment) => this.getSegmentDisplay(segment))
  }

  calculatePositionMappings(text: string): {
    originalToBase: Map<number, number>
    baseToOriginal: Map<number, number>
  } {
    const originalToBase = new Map<number, number>()
    const baseToOriginal = new Map<number, number>()
    let basePosition = 0
    let inBracket = false

    // Pre-calculate normalized positions
    const normalizedPositions = new Map<number, number>()
    let normalizedIndex = 0
    for (let i = 0; i < text.length; i++) {
      const char = text[i]
      if (char !== "、") {
        normalizedPositions.set(normalizedIndex, i)
        normalizedIndex++
      }
    }

    for (let i = 0; i < text.length; i++) {
      const char = text[i]
      if (char === "[") {
        inBracket = true
      } else if (char === "]") {
        inBracket = false
      } else if (!inBracket && char !== " " && char !== "、") {
        originalToBase.set(i, basePosition)
        baseToOriginal.set(basePosition, i)
        basePosition++
      }
    }

    // Map end positions
    originalToBase.set(text.length, basePosition)
    baseToOriginal.set(basePosition, text.length)

    return { originalToBase, baseToOriginal }
  }
}
