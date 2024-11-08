import { extractHiragana } from "@/util/vocabDataTransformer"

const PRONOUNS = [
  "私[わたし]",
  "僕[ぼく]",
  "俺[おれ]",
  "あたし",
  "うち",
] as const

type Variation = {
  segments: string[]
  isKanaVariation: boolean
  isPeriodVariation: boolean
  isWatashiVariation?: boolean
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
): Variation[] {
  // Create base segments
  const segmentSets = [
    { segments: originalSegments, isWatashiVariation: false },
  ]

  if (includeWatashiVariations && !hasAnyPronoun(originalSegments)) {
    PRONOUNS.forEach((pronoun) => {
      segmentSets.push({
        segments: [pronoun, "は", ...originalSegments],
        isWatashiVariation: true,
      })
    })
  }

  return segmentSets.flatMap(({ segments, isWatashiVariation }) => {
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
    )
  })
}

function generateVariationCombinations(
  versions: string[][],
  hasPeriod: boolean,
  isWatashiVariation: boolean,
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
    },
    {
      segments: hasPeriod ? withoutPeriod : withPeriod,
      isKanaVariation,
      isPeriodVariation: true,
      isWatashiVariation,
    },
  ]
}
