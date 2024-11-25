// dataLoader.ts
import { CounterPattern, VocabItem, ChapterPattern } from "../types"

// Import the consolidated JSON files
import counterPatternsData from "../data/counter-patterns.json"
import vocabData from "../data/vocab.json"

// Define the structure of the consolidated JSON files
type CounterPatternsFile = ChapterPattern[]

type VocabFile = VocabItem[]

// Cast the imported data to the defined types
const counterPatterns = counterPatternsData as CounterPatternsFile
const vocabItems = vocabData as VocabFile

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

export const getPatternsByChapter = (patternId: string): number | undefined => {
  const chapter = counterPatterns.find((chapter) =>
    chapter.content.some((pattern) => pattern.id === patternId),
  )
  return chapter?.chapter
}
