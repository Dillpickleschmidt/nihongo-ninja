import type { VocabItem, RichVocabItem } from "@/types/vocab"
import { addKanaAndRuby, stripFurigana } from "@/util/vocabDataTransformer"

// This will grab all .ts files in the data directory and its subdirectories
const vocabModules = import.meta.glob<{ default: VocabItem[] }>(
  "@/data/**/*.ts",
  { eager: true },
)

const getVocabData = async (fileName: string): Promise<VocabItem[]> => {
  // Construct the file path to match the glob pattern
  const filePath = `/src/data/${fileName}.ts`
  try {
    if (filePath in vocabModules) {
      return vocabModules[filePath].default
    } else {
      throw new Error(`File not found: ${filePath}`)
    }
  } catch (e) {
    console.warn(`The vocab file "${filePath}" could not be loaded.`, e)
    return []
  }
}

export async function getVocabularyByPath(
  filePath: string,
  stripFuriganaFlag = false,
): Promise<RichVocabItem[]> {
  try {
    const vocabItems = await getVocabData(filePath)

    // Add kana and ruby text
    let processedItems = addKanaAndRuby(vocabItems, "1rem")

    // Strip furigana if the flag is true
    if (stripFuriganaFlag) {
      processedItems = stripFurigana(processedItems)
    }

    // console.log(`Loaded ${processedItems.length} vocab items for ${filePath}`)
    return processedItems
  } catch (error) {
    console.error(`Error in getVocabularyByPath for ${filePath}:`, error)
    return []
  }
}
