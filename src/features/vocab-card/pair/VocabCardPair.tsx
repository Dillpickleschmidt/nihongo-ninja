import VocabText from "../components/VocabText"
import type { RichVocabItem } from "@/types/vocab"

type VocabCardPairNoBGProps = {
  data: RichVocabItem[]
  index: number
}

export default function VocabCardPair(props: VocabCardPairNoBGProps) {
  return (
    <div class="py-4 md:px-6 xl:px-12">
      <div class="xl:flex">
        <div class="xl:w-1/2">
          <div class="h-full w-full p-4">
            <div
              class={`relative h-full overflow-hidden rounded-[30px] bg-card/35 text-black shadow-md dark:bg-[#f7e2c4] dark:shadow-lg dark:shadow-black`}
            >
              <VocabText data={props.data} index={props.index} />
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="h-full w-full p-4">
            <div
              class={`relative h-full overflow-hidden rounded-[30px] bg-card/35 text-black shadow-md dark:bg-[#f7e2c4] dark:shadow-lg dark:shadow-black`}
            >
              <VocabText data={props.data} index={props.index + 1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
