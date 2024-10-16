import { VocabItem, RichVocabItem } from "@/types/vocab"
import { addKanaAndRuby, stripFurigana } from "@/util/vocabDataTransformer"

const vocabModules = import.meta.glob("../data/**/*.json", { eager: true })

const getVocabData = async (fileName: string): Promise<VocabItem[]> => {
  const filePath = `../data/${fileName}.json`
  try {
    if (filePath in vocabModules) {
      const module = vocabModules[filePath] as { default: VocabItem[] }
      return module.default
    } else {
      throw new Error(`File not found: ${filePath}`)
    }
  } catch (e) {
    console.warn(`The file "${filePath}" could not be loaded.`, e)
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

    return processedItems
  } catch (error) {
    console.error(`Error in getVocabularyByPath for ${filePath}:`, error)
    return []
  }
}
