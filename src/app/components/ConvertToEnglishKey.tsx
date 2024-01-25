type VocabEntry = {
  hiragana?: string[]
  english?: string[]
  mnemonics?: string
}

interface NewDataEntry {
  hiragana?: string[]
  mnemonics?: string
}

type ConvertToEnglishKeyProps = {
  data: Record<string, VocabEntry>
}

export default function ConvertToEnglishKey({
  data,
}: ConvertToEnglishKeyProps) {
  const vocabData = data as Record<string, VocabEntry>
  const newData: Record<string, NewDataEntry> = {}

  Object.keys(vocabData).forEach((key) => {
    const entry = vocabData[key]
    const englishWord = entry.english?.join("; ") // Assuming there's always at least one English word
    if (!englishWord) {
      throw new Error(`No English word found for ${key}`)
    }
    newData[englishWord] = {
      hiragana: entry.hiragana,
      mnemonics: entry.mnemonics,
    }
  })
  return newData
}
