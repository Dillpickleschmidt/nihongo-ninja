// variationUtils.ts
import { extractHiragana } from "@/util/vocabDataTransformer"

const PRONOUNS = [
  "私[わたし]",
  "僕[ぼく]",
  "俺[おれ]",
  "あたし",
  "うち",
] as const

const PLURAL_PRONOUNS = [
  "私たち[わたしたち]",
  "僕たち[ぼくたち]",
  "俺たち[おれたち]",
] as const

const HONORIFICS = ["さん", "くん", "ちゃん", "様[さま]"] as const

type Variation = {
  segments: string[]
  isKanaVariation: boolean
  isPeriodVariation: boolean
  isFirstPersonVariation?: boolean
  isFirstPersonPluralVariation?: boolean
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
  includeFirstPersonVariations: boolean,
  includeFirstPersonPluralVariations: boolean,
  includeHonorificVariations: boolean = false,
): Variation[] {
  const segmentSets = [
    {
      segments: originalSegments,
      isFirstPersonVariation: false,
      isFirstPersonPluralVariation: false,
      isHonorificVariation: false,
    },
  ]

  if (includeFirstPersonVariations && !hasAnyPronoun(originalSegments)) {
    PRONOUNS.forEach((pronoun) => {
      segmentSets.push({
        segments: [pronoun, "は", ...originalSegments],
        isFirstPersonVariation: true,
        isFirstPersonPluralVariation: false,
        isHonorificVariation: false,
      })
    })
  }

  if (includeFirstPersonPluralVariations && !hasAnyPronoun(originalSegments)) {
    PLURAL_PRONOUNS.forEach((pronoun) => {
      segmentSets.push({
        segments: [pronoun, "は", ...originalSegments],
        isFirstPersonVariation: false,
        isFirstPersonPluralVariation: true,
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
            isFirstPersonVariation: false,
            isFirstPersonPluralVariation: false,
            isHonorificVariation: true,
          })
        })
      }
    })
  }

  return segmentSets.flatMap(
    ({
      segments,
      isFirstPersonVariation,
      isFirstPersonPluralVariation,
      isHonorificVariation,
    }) => {
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
        isFirstPersonVariation,
        isFirstPersonPluralVariation,
        isHonorificVariation,
      )
    },
  )
}

function generateVariationCombinations(
  versions: string[][],
  hasPeriod: boolean,
  isFirstPersonVariation: boolean,
  isFirstPersonPluralVariation: boolean,
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
        isFirstPersonVariation,
        isFirstPersonPluralVariation,
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
  isFirstPersonVariation: boolean,
  isFirstPersonPluralVariation: boolean,
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
      isFirstPersonVariation,
      isFirstPersonPluralVariation,
      isHonorificVariation,
    },
    {
      segments: hasPeriod ? withoutPeriod : withPeriod,
      isKanaVariation,
      isPeriodVariation: true,
      isFirstPersonVariation,
      isFirstPersonPluralVariation,
      isHonorificVariation,
    },
  ]
}
