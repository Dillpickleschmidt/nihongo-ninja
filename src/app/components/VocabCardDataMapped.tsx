import VocabCard from "./VocabCard"

type VocabEntry = {
  hiragana?: string[]
  english?: string[]
  mnemonics?: string
}

type VocabCardMappedProps = {
  data: Record<string, VocabEntry>
}

export default function VocabCardDataMapped({ data }: VocabCardMappedProps) {
  const vocabArray = Object.entries(data).map(([key, value], index) => ({
    id: key,
    ...value,
  }))
  return (
    <div>
      {vocabArray.map((item, index) => (
        <VocabCard
          light={(index + 1) % 2 === 0 ? true : false}
          key={index}
          title={`${index + 1}. ${item.id} - ${item.english?.join(", ")}`}
          hiragana={item.hiragana ? item.hiragana.join(", ") : ""}
        >
          {item.mnemonics}
        </VocabCard>
      ))}
    </div>
  )
}
