import type { RichVocabItem } from "@/types/vocab"
import VocabText from "../components/VocabText"

type VocabCardSingleProps = {
  data: RichVocabItem[]
  index: number
}

export default function VocabCardSingle(props: VocabCardSingleProps) {
  return (
    <div class="md:px-4 xl:px-10">
      <div class="h-full p-4">
        <div
          class={`relative h-full overflow-hidden rounded-[30px] bg-card/35 text-black shadow-md dark:bg-[#f7e2c4] dark:shadow-lg dark:shadow-black`}
        >
          <VocabText data={props.data} index={props.index} />
        </div>
      </div>
    </div>
  )
}
