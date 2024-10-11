import { Show } from "solid-js"
import { VideoButton } from "../VideoButton"
import type { RichVocabItem } from "@/types/vocab"
import VocabTextBody from "./VocabTextBody"

type VocabText = {
  data: RichVocabItem[]
  index: number
}

export default function VocabText(props: VocabText) {
  const item = props.data[props.index]
  return (
    <>
      <Show when={item.videos && item.videos[0]}>
        <VideoButton videoId={item.videos![0].src} />
      </Show>
      <div class="min-h-48 px-8 py-6 lg:px-16 lg:py-12">
        <h3 class="mb-4 font-japanese text-2xl font-bold">
          <span class="font-japanese text-[1.375rem]">
            {`${props.index + 1}.`}{" "}
          </span>
          <span
            class="text-2xl"
            innerHTML={(item.rubyText && item.rubyText[0]) || item.word}
          />{" "}
          -{" "}
          <span class="font-japanese text-[1.375rem]">
            {item.english.join(", ")}
          </span>
        </h3>
        <VocabTextBody data={props.data} index={props.index} />
      </div>
    </>
  )
}
