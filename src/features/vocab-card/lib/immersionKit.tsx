import { ImmersionKitResponse } from "../immersion-kit"

// =====================================
// Types
// =====================================
type ImmersionKitExample = ImmersionKitResponse["data"][0]["examples"][number]

type ImmersionKitVocabEntry = {
  kana: string
  kanji: string | null
  lesson: number
}

type Weights = {
  length: number
  vocab: number
  proximity: number
}

// =====================================
// Configuration
// =====================================
const DELAY = 50
const MAX_RETRIES = 20
const OPTIMAL_LENGTH = 30

// =====================================
// Vocabulary Processing Utilities
// =====================================
function getLessonNumber(lesson: string): number {
  if (lesson === "会G") return 0
  const match = lesson.match(/L(\d+)/)
  return match ? parseInt(match[1]) : Infinity
}

function processVocabList(content: string | undefined | null) {
  if (!content) {
    return {
      entries: [],
      kanjiMap: new Map<string, number>(),
      kanaMap: new Map<string, number>(),
    }
  }

  const entries: ImmersionKitVocabEntry[] = []
  const kanjiMap = new Map<string, number>()
  const kanaMap = new Map<string, number>()

  content.split("\n").forEach((line) => {
    const parts = line.split(",")
    if (parts.length >= 6) {
      const [, kana, kanji, , , lesson] = parts.map((p) => p.trim())
      if (kana && lesson) {
        const lessonNum = getLessonNumber(lesson)
        const entry = {
          kana,
          kanji: kanji || null,
          lesson: lessonNum,
        }
        entries.push(entry)

        if (kanji) {
          kanjiMap.set(kanji, lessonNum)
        }
        kanaMap.set(kana, lessonNum)
      }
    }
  })

  return { entries, kanjiMap, kanaMap }
}

// =====================================
// Scoring and Ranking Logic
// =====================================
function calculateSentenceScore(
  sentence: string,
  wordList: string[],
  kanjiMap: Map<string, number>,
  kanaMap: Map<string, number>,
  targetWord: string,
  targetLesson: number,
  weights: Weights,
): number {
  if (wordList.length === 0) return 0

  // Filter out target word from consideration
  const otherWords = wordList.filter((word) => word !== targetWord)
  if (otherWords.length === 0) return 0 // Don't want sentences with only the target word

  // Count known words excluding target word
  let knownWords = 0
  let proximitySum = 0
  let proximityCounts = 0

  otherWords.forEach((word) => {
    const lessonNum = kanjiMap.get(word) ?? kanaMap.get(word) ?? Infinity
    if (lessonNum <= targetLesson) {
      knownWords++
      const lessonDiff = targetLesson - lessonNum
      const proximityScore = Math.exp(-lessonDiff / 2)
      proximitySum += proximityScore
      proximityCounts++
    }
  })

  // Normalize vocab score to be between 0 and 1
  // Using a soft cap at 5 known words (can go higher but with diminishing returns)
  const vocabScore = 1 - Math.exp(-knownWords / 5)

  // Calculate proximity score
  const proximityScore =
    proximityCounts > 0 ? proximitySum / proximityCounts : 0

  // Calculate length score with plateau up to 30 chars
  let lengthScore
  if (sentence.length <= 30) {
    lengthScore = 1.0 // Full score for sentences up to 30 chars
  } else {
    // Exponential falloff for longer sentences
    const excess = sentence.length - 30
    lengthScore = Math.exp(-excess / 20) // Adjust the divisor to control falloff rate
  }

  return (
    vocabScore * weights.vocab +
    lengthScore * weights.length +
    proximityScore * weights.proximity
  )
}

function rankExamples(
  examples: ImmersionKitExample[],
  targetWord: string,
  { entries, kanjiMap, kanaMap }: ReturnType<typeof processVocabList>,
  weights: Weights,
): ImmersionKitExample[] {
  const targetLesson = kanjiMap.get(targetWord) ?? kanaMap.get(targetWord)
  if (targetLesson === undefined) return examples

  const scoredExamples = examples.map((example) => ({
    example,
    score: calculateSentenceScore(
      example.sentence,
      example.word_list,
      kanjiMap,
      kanaMap,
      targetWord,
      targetLesson,
      weights,
    ),
  }))

  // Sort in place for better performance
  scoredExamples.sort((a, b) => b.score - a.score)

  return scoredExamples.map(({ example }) => example)
}

// =====================================
// Main API Function
// =====================================
export async function getAnimeExamples(
  word: string,
  vocabContent: string | undefined | null,
  lengthWeight: number,
  vocabWeight: number,
  proximityWeight: number,
  overwriteWord?: string,
  attempt = 1,
): Promise<ImmersionKitExample[]> {
  try {
    await new Promise((resolve) => setTimeout(resolve, DELAY * attempt))

    const searchWord = overwriteWord ? `「${overwriteWord}」` : word
    const response = await fetch(
      `https://api.immersionkit.com/look_up_dictionary?keyword=${searchWord}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: ImmersionKitResponse = await response.json()
    let examples = data?.data?.[0]?.examples || []

    if (examples.length === 0 && attempt < MAX_RETRIES) {
      return getAnimeExamples(
        word,
        vocabContent,
        lengthWeight,
        vocabWeight,
        proximityWeight,
        overwriteWord,
        attempt + 1,
      )
    }

    const vocabData = processVocabList(vocabContent)
    return rankExamples(examples, word, vocabData, {
      length: lengthWeight,
      vocab: vocabWeight,
      proximity: proximityWeight,
    })
  } catch (error) {
    if (attempt < MAX_RETRIES) {
      return getAnimeExamples(
        word,
        vocabContent,
        lengthWeight,
        vocabWeight,
        proximityWeight,
        overwriteWord,
        attempt + 1,
      )
    }
    console.error("Error fetching examples for word:", word, error)
    return []
  }
}
