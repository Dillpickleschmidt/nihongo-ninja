import Database from "better-sqlite3"
import {
  VocabularyItem,
  RichVocabularyItem,
  ExampleSentence,
  Video,
} from "@/types/vocab"
import { addKanaAndRuby } from "@/util/vocabDataTransformer"

function parseJSON<T>(jsonString: string | null): T | null {
  if (!jsonString) return null
  try {
    return JSON.parse(jsonString) as T
  } catch {
    console.error(`Failed to parse JSON: ${jsonString}`)
    return null
  }
}

export async function getVocabularyByPath(
  path: string,
): Promise<RichVocabularyItem[]> {
  "use server"
  const DB_PATH = process.cwd() + "/src/db/database.db"
  const db = new Database(DB_PATH)

  try {
    const stmt = db.prepare("SELECT * FROM vocabulary WHERE path = ?")
    const results = stmt.all(path) as any[]

    const vocabularyItems: VocabularyItem[] = results.map((item) => ({
      ...item,
      furigana: parseJSON<string[]>(item.furigana) || [],
      english: parseJSON<string[]>(item.english) || [],
      example_sentences:
        parseJSON<ExampleSentence[]>(item.example_sentences) || [],
      info: parseJSON<string[]>(item.info) || [],
      mnemonics: parseJSON<string[]>(item.mnemonics) || [],
      videos: parseJSON<Video[]>(item.videos) || [],
    }))

    // Add kana and ruby text
    return addKanaAndRuby(vocabularyItems, "0.75rem") // You can adjust the furigana size here
  } finally {
    db.close()
  }
}
