// HighlightedText.tsx
import { For, Show, createMemo } from "solid-js"
import type { ErrorRange } from "../types"
import { convertFuriganaToRubyHtml } from "@/util/vocabDataTransformer"

type HighlightedTextProps = {
  /** The input text with furigana in brackets (e.g., "私[わたし]は学生[がくせい]です") */
  text: string
  /** Array of error ranges, assuming no spaces or brackets */
  errors: ErrorRange[]
  /** CSS class(es) to be applied to the highlighted error segments */
  highlightClass: string
  /** Optional font size for furigana text */
  furiganaSize?: string
}

/**
 * Calculates position mappings between the original text (with brackets and furigana)
 * and the base text (without brackets and furigana).
 */
function calculatePositionMappings(text: string): {
  originalToBase: Map<number, number>
  baseToOriginal: Map<number, number>
} {
  const originalToBase = new Map<number, number>()
  const baseToOriginal = new Map<number, number>()
  let basePosition = 0
  let inBracket = false

  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    if (char === "[") {
      inBracket = true
    } else if (char === "]") {
      inBracket = false
    } else if (!inBracket && char !== " ") {
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

/**
 * A component that renders Japanese text with furigana and highlighted error segments.
 * Properly handles ruby text formatting and error highlighting.
 */
export default function HighlightedText(props: HighlightedTextProps) {
  const processedText = createMemo(() => {
    const { baseToOriginal } = calculatePositionMappings(props.text)
    const parts: { html: string; isError?: boolean }[] = []
    let lastEnd = 0

    // Sort errors to ensure proper sequential processing
    const sortedErrors = [...props.errors].sort((a, b) => a.start - b.start)

    for (const { start, end } of sortedErrors) {
      // Get mapped positions in original text
      const originalStart = baseToOriginal.get(start) ?? 0
      const originalEnd = baseToOriginal.get(end) ?? props.text.length

      // Add non-error segment if there's text before the error
      if (originalStart > lastEnd) {
        parts.push({
          html: convertFuriganaToRubyHtml(
            props.text.slice(lastEnd, originalStart),
            props.furiganaSize,
          ),
        })
      }

      // Add error segment
      parts.push({
        html: convertFuriganaToRubyHtml(
          props.text.slice(originalStart, originalEnd),
          props.furiganaSize,
        ),
        isError: true,
      })

      lastEnd = originalEnd
    }

    // Add remaining text after last error
    if (lastEnd < props.text.length) {
      parts.push({
        html: convertFuriganaToRubyHtml(
          props.text.slice(lastEnd),
          props.furiganaSize,
        ),
      })
    }

    return parts
  })

  return (
    <For each={processedText()}>
      {(segment) => (
        <Show
          when={segment.isError}
          fallback={<span innerHTML={segment.html} />}
        >
          <span
            class={`rounded px-0.5 ${props.highlightClass}`}
            innerHTML={segment.html}
          />
        </Show>
      )}
    </For>
  )
}
