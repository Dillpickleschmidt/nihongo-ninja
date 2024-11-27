// dataLoader.ts
import { CounterPattern, ChapterPattern } from "../types"
import counterPatternsData from "../data/counter-patterns.json"
import vocabData from "../data/vocab.json"

// Patterns are organized by chapter
type ChapterPatterns = {
  chapter: number
  patterns: CounterPattern[]
}

const counterPatterns = counterPatternsData as ChapterPattern[]

// Central data store: Map of chapter numbers to their patterns
const patternsMap = new Map<number, ChapterPatterns>(
  counterPatterns.map((chapter) => [
    chapter.chapter,
    { chapter: chapter.chapter, patterns: chapter.content },
  ]),
)

// Get available chapters from the map
export const getAvailableChapters = () =>
  Array.from(patternsMap.keys()).sort((a, b) => a - b)

// Get patterns by chapter (single or cumulative)
export const getChapterPatterns = (
  upToChapter: number,
  isCumulative: boolean,
): ChapterPatterns[] => {
  const chapters = Array.from(patternsMap.values())
    .filter(({ chapter }) =>
      isCumulative ? chapter <= upToChapter : chapter === upToChapter,
    )
    .sort((a, b) => a.chapter - b.chapter)

  return chapters
}

// Load data for practice session
export const loadCounterData = async (selectedChapters: number[]) => {
  const patterns = selectedChapters.flatMap(
    (chapter) => patternsMap.get(chapter)?.patterns || [],
  )
  const patternIds = new Set(patterns.map((p) => p.id))
  const vocab = vocabData.filter((item) => patternIds.has(item.patternId))
  return { patterns, vocab }
}
