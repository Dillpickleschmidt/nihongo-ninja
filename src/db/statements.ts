import Database from "better-sqlite3"
import { VocabItem, RichVocabItem, ExampleSentence, Video } from "@/types/vocab"
import { addKanaAndRuby, stripFurigana } from "@/util/vocabDataTransformer"

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
  stripFuriganaFlag = false,
): Promise<RichVocabItem[]> {
  "use server"
  const DB_PATH = process.cwd() + "/src/db/database.db"
  const db = new Database(DB_PATH)
  // console.log("Fetching vocabulary data...")
  // const startTime = Date.now()

  try {
    const stmt = db.prepare("SELECT * FROM vocabulary WHERE path = ?")
    const results = stmt.all(path) as any[]

    const vocabItems: VocabItem[] = results.map((item) => ({
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
    let processedItems = addKanaAndRuby(vocabItems, "1rem")

    // Strip furigana if the flag is true
    if (stripFuriganaFlag) {
      processedItems = stripFurigana(processedItems)
    }

    // const duration = Date.now() - startTime
    // console.log(`Vocabulary data fetched and processed in ${duration}ms`)

    return processedItems
  } finally {
    db.close()
  }
}
