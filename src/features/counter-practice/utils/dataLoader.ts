// dataLoader.ts
import { CounterPattern, VocabItem } from "../types"

// Import the consolidated JSON files
import counterPatternsData from "../data/counter-patterns.json"
import vocabData from "../data/vocab.json"

// Define the structure of the consolidated JSON files
type CounterPatternsFile = {
  chapter: number
  content: CounterPattern[]
}[]

type VocabFile = VocabItem[]

// Cast the imported data to the defined types
const counterPatterns = counterPatternsData as CounterPatternsFile
const vocabItems = vocabData as VocabFile

export const getChapterNumber = (filePath: string): number => {
  const match = filePath.match(/chapter-(\d+)\.json$/)
  return match ? parseInt(match[1]) : 0
}

export const loadCounterData = async (
  selectedChapters: number[],
): Promise<{ patterns: CounterPattern[]; vocab: VocabItem[] }> => {
  const patterns: CounterPattern[] = []
  const vocab: VocabItem[] = []

  // Load counter patterns
  for (const chapter of counterPatterns) {
    if (selectedChapters.includes(chapter.chapter)) {
      patterns.push(...chapter.content)
    }
  }

  // Load vocabulary
  for (const item of vocabItems) {
    const patternChapter = counterPatterns.find((chapter) =>
      chapter.content.some((pattern) => pattern.id === item.patternId),
    )?.chapter

    if (patternChapter && selectedChapters.includes(patternChapter)) {
      vocab.push(item)
    }
  }

  return { patterns, vocab }
}

export const getAvailableChapters = (): number[] => {
  // Get unique chapter numbers from counter patterns
  const chapters = new Set(counterPatterns.map((chapter) => chapter.chapter))

  return Array.from(chapters)
    .filter((num) => num > 0)
    .sort((a, b) => a - b)
}

// Helper function to validate that vocabulary references valid patterns
export const validateData = (
  patterns: CounterPattern[],
  vocab: VocabItem[],
): boolean => {
  const patternIds = new Set(patterns.map((p) => p.id))

  const invalidVocab = vocab.filter((v) => !patternIds.has(v.patternId))
  if (invalidVocab.length > 0) {
    console.error(
      "Found vocabulary items with invalid pattern IDs:",
      invalidVocab,
    )
    return false
  }

  return true
}
