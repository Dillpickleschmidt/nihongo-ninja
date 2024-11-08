const SPECIAL_READINGS: Record<
  string,
  { kanji: string; readings: Record<string, string> }
> = {
  くる: {
    kanji: "来",
    readings: {
      き: "来[き]",
      く: "来[く]",
      こ: "来[こ]",
    },
  },
}

export function restoreKanji(original: string, conjugated: string): string {
  // First check if this is a special case
  for (const [base, info] of Object.entries(SPECIAL_READINGS)) {
    if (original.includes(base)) {
      for (const [reading, replacement] of Object.entries(info.readings)) {
        if (conjugated.startsWith(reading)) {
          return conjugated.replace(reading, replacement)
        }
      }
    }
  }

  // Regular case: Find kanji and their readings in original word
  const kanjiMatches = [...original.matchAll(/([^[\]]+)\[([^\]]+)\]/g)]
  if (kanjiMatches.length === 0) return conjugated

  let result = conjugated
  for (const [_, kanji, reading] of kanjiMatches) {
    result = result.replace(reading, `${kanji}[${reading}]`)
  }

  return result
}
