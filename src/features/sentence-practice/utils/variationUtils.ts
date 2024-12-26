// variationUtils.ts
import { extractHiragana } from "@/util/vocabDataTransformer"

const PRONOUNS = [
  "私[わたし]",
  "僕[ぼく]",
  "俺[おれ]",
  "あたし",
  "うち",
] as const

const HONORIFICS = ["さん", "くん", "ちゃん", "様[さま]"] as const

type Variation = {
  segments: string[]
  isKanaVariation: boolean
  isPeriodVariation: boolean
  isWatashiVariation?: boolean
  isHonorificVariation?: boolean
}

export function hasAnyPronoun(segments: string[]): boolean {
  return segments.some((segment, index) =>
    PRONOUNS.some(
      (pronoun) =>
        segment === pronoun &&
        index + 1 < segments.length &&
        segments[index + 1] === "は",
    ),
  )
}

export function hasAnyHonorific(segments: string[]): boolean {
  return segments.some((segment) =>
    HONORIFICS.some((honorific) => segment.endsWith(honorific)),
  )
}

function extractVersions(segment: string) {
  const hasKanji = segment.includes("[")
  if (!hasKanji) return { original: segment, hiragana: segment }
  return {
    original: segment,
    hiragana: extractHiragana(segment),
  }
}

export function generateCombinations(
  originalSegments: string[],
  includeWatashiVariations: boolean,
  includeHonorificVariations: boolean = false,
): Variation[] {
  const segmentSets = [
    {
      segments: originalSegments,
      isWatashiVariation: false,
      isHonorificVariation: false,
    },
  ]

  if (includeWatashiVariations && !hasAnyPronoun(originalSegments)) {
    PRONOUNS.forEach((pronoun) => {
      segmentSets.push({
        segments: [pronoun, "は", ...originalSegments],
        isWatashiVariation: true,
        isHonorificVariation: false,
      })
    })
  }

  if (includeHonorificVariations && originalSegments.includes("さん")) {
    originalSegments.forEach((segment, index) => {
      if (segment === "さん") {
        HONORIFICS.forEach((honorific) => {
          const newSegments = [...originalSegments]
          newSegments[index] = honorific // Replace only the "さん" segment
          segmentSets.push({
            segments: newSegments,
            isWatashiVariation: false,
            isHonorificVariation: true,
          })
        })
      }
    })
  }

  return segmentSets.flatMap(
    ({ segments, isWatashiVariation, isHonorificVariation }) => {
      const lastSegment = segments[segments.length - 1]
      const hasPeriod = lastSegment.endsWith("。")
      const processSegments = hasPeriod
        ? [...segments.slice(0, -1), lastSegment.slice(0, -1)]
        : segments

      const versions = processSegments.map((segment) => {
        const { original, hiragana } = extractVersions(segment)
        return original !== hiragana ? [original, hiragana] : [original]
      })

      return generateVariationCombinations(
        versions,
        hasPeriod,
        isWatashiVariation,
        isHonorificVariation,
      )
    },
  )
}

function generateVariationCombinations(
  versions: string[][],
  hasPeriod: boolean,
  isWatashiVariation: boolean,
  isHonorificVariation: boolean,
): Variation[] {
  function combine(current: string[], index: number): Variation[] {
    if (index === versions.length) {
      const isKanaVariation = current.some(
        (segment, i) => segment !== versions[i][0],
      )
      return createPeriodVariations(
        current,
        isKanaVariation,
        hasPeriod,
        isWatashiVariation,
        isHonorificVariation,
      )
    }

    const results: Variation[] = []
    for (const version of versions[index]) {
      results.push(...combine([...current, version], index + 1))
    }
    return results
  }

  return combine([], 0)
}

function createPeriodVariations(
  segments: string[],
  isKanaVariation: boolean,
  hasPeriod: boolean,
  isWatashiVariation: boolean,
  isHonorificVariation: boolean,
): Variation[] {
  const withPeriod = [
    ...segments.slice(0, -1),
    segments[segments.length - 1] + "。",
  ]
  const withoutPeriod = segments

  return [
    {
      segments: hasPeriod ? withPeriod : withoutPeriod,
      isKanaVariation,
      isPeriodVariation: false,
      isWatashiVariation,
      isHonorificVariation,
    },
    {
      segments: hasPeriod ? withoutPeriod : withPeriod,
      isKanaVariation,
      isPeriodVariation: true,
      isWatashiVariation,
      isHonorificVariation,
    },
  ]
}
