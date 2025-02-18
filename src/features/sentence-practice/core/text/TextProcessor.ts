// core/text/TextProcessor.ts
import {
  extractHiragana,
  convertFuriganaToRubyHtml,
} from "@/util/vocabDataTransformer"

export class TextProcessor {
  normalize(text: string): string {
    return text.trim().normalize("NFKC").replace(/、/g, "")
  }

  extractPlainText(segments: string[]): string {
    return segments.map(this.removeFurigana).join("").replace(/\s+/g, "") // Remove all spaces after joining
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
