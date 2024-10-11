import type { RichVocabItem } from "@/types/vocab"
import { Show } from "solid-js"
import VocabTextBody from "../components/VocabTextBody"
import { VideoButton } from "../VideoButton"

type VocabCardPairNoBGProps = {
  data: RichVocabItem[]
  index: number
  single?: boolean
}

export default function VocabCardPairNoBG(props: VocabCardPairNoBGProps) {
  const cardOne = props.data[props.index]
  const cardTwo = props.data[props.index + 1] || cardOne

  const filteredCardOneWord = cardOne.english[0]
    .replace(/\(/g, "︵")
    .replace(/\)/g, "︶")
    .replace(/'/g, "‚")
    .replace(/\//g, "—")

  const filteredCardTwoWord = cardTwo.english[0]
    .replace(/\(/g, "︵")
    .replace(/\)/g, "︶")
    .replace(/'/g, "‚")
    .replace(/\//g, "—")

  return (
    <Show when={cardOne && cardTwo}>
      <style>
        {`.japaneseText {
        writing-mode: vertical-rl;
        text-orientation: upright;
      }
      `}
      </style>
      <div
        class={`relative gap-16 py-6 pl-2 pr-4 md:px-6 lg:px-12 xl:flex 2xl:px-24 ${props.single && "w-full justify-center"}`}
      >
        <div class="relative flex w-full xl:w-1/2">
          <div class="mr-2 mt-10 flex h-full max-h-[450px] justify-center font-medium sm:mr-4 xl:min-w-32">
            <p class="japaneseText font-mono font-bold leading-6 tracking-[-.2em] sm:mr-4">
              {filteredCardOneWord}
            </p>
            <p class="japaneseText font-japanese">
              <span class="text-5xl">{cardOne.word}</span>
              <span class="text-2xl text-red-400">︵{cardOne.hiragana}︶</span>
            </p>
          </div>

          <div class="w-full">
            <Show when={cardOne.videos && cardOne.videos[0]}>
              <div>
                <VideoButton videoId={cardOne.videos![0].src} />
              </div>
            </Show>
            <div class="py-12">
              <h3 class="mb-4 font-japanese text-2xl font-bold">
                <span class="font-japanese text-[1.375rem]">
                  {`${props.index + 1}.`}{" "}
                </span>
                <span class="font-japanese text-[1.375rem]">
                  {cardOne.english.join(", ")}
                </span>
              </h3>
              <VocabTextBody data={props.data} index={props.index} />
            </div>
          </div>
        </div>

        <Show when={!props.single}>
          <div class="relative flex w-full xl:w-1/2">
            <div class="mr-2 mt-10 flex h-full max-h-[450px] justify-center font-medium md:mr-4 xl:min-w-32">
              <p class="japaneseText font-mono font-bold leading-6 tracking-[-.2em] sm:mr-4">
                {filteredCardTwoWord}
              </p>
              <p class="japaneseText font-japanese">
                <span class="text-5xl">{cardTwo.word}</span>
                <span class="text-2xl text-orange-300 saturate-50">
                  ︵{cardTwo.hiragana}︶
                </span>
              </p>
            </div>

            <div class="w-full">
              <Show when={cardTwo.videos && cardTwo.videos[0]}>
                <div>
                  <VideoButton videoId={cardTwo.videos![0].src} />
                </div>
              </Show>
              <div class="py-12">
                <h3 class="mb-4 font-japanese text-2xl font-bold">
                  <span class="font-japanese text-[1.375rem]">
                    {`${props.index + 2}.`}{" "}
                  </span>
                  <span class="font-japanese text-[1.375rem]">
                    {cardTwo.english.join(", ")}
                  </span>
                </h3>
                <VocabTextBody data={props.data} index={props.index + 1} />
              </div>
            </div>
          </div>
        </Show>
      </div>
    </Show>
  )
}
