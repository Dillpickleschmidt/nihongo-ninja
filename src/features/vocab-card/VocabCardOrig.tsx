import { type Component, For, Show } from "solid-js"
import { VideoButton } from "./VideoButton"
import type { RichVocabularyItem } from "@/types/vocab"

type VocabCardProps = {
  item: RichVocabularyItem
  index: number
  countOffset?: number
  light?: boolean
  noFurigana?: boolean
  activeVideoIndex: number | null
  setActiveVideoIndex: (index: number | null) => void
}

export default function VocabCard(props: VocabCardProps) {
  return (
    <div
      class={`relative overflow-hidden rounded-[30px] text-black shadow-md dark:shadow-lg dark:shadow-black ${
        props.light
          ? "bg-orange-100/7 dark:bg-[#f7f0dd]"
          : "bg-orange-100/7 dark:bg-[#f7e2c4]"
      }`}
    >
      <Show when={props.item.videos && props.item.videos[0]}>
        <VideoButton
          index={props.index}
          videoId={props.item.videos![0].src}
          activeVideoIndex={props.activeVideoIndex}
          setActiveVideoIndex={props.setActiveVideoIndex}
        />
      </Show>
      <div class="min-h-48 scale-[101%] px-16 py-12">
        <h3 class="mb-4 font-japanese text-2xl font-bold">
          <span class="font-japanese text-[1.375rem]">
            {`${props.countOffset ? props.index + props.countOffset + 1 : props.index + 1}.`}{" "}
          </span>
          {props.noFurigana ? (
            <span class="font-japanese text-2xl">{props.item.word}</span>
          ) : (
            <span
              class="text-2xl"
              innerHTML={
                (props.item.rubyText && props.item.rubyText[0]) ||
                props.item.word
              }
            />
          )}{" "}
          -{" "}
          <span class="font-japanese text-[1.375rem]">
            {props.item.english.join(", ")}
          </span>
        </h3>
        <For each={props.item.mnemonics}>
          {(mnemonic, idx) => (
            <p class="space-y-6">
              <span class="font-bold">Mnemonic: </span>
              {mnemonic}
            </p>
          )}
        </For>
        {props.item.info.length > 0 && (
          <ul
            class={`ml-6 list-disc ${props.item.mnemonics.length > 0 ? "pt-3" : ""}`}
          >
            <For each={props.item.info}>
              {(info) => <li class="space-y-6">{info}</li>}
            </For>
          </ul>
        )}
        {props.item.example_sentences &&
          props.item.example_sentences.length > 0 && (
            <>
              <h3 class="mt-6 font-bold">Example Sentences</h3>
              <ul class="ml-6 list-disc">
                <For each={props.item.example_sentences}>
                  {(sentence) => (
                    <li class="space-y-6">
                      <span class="font-japanese text-xl">
                        {sentence.japanese}
                      </span>
                      <br />
                      <span>{sentence.english}</span>
                    </li>
                  )}
                </For>
              </ul>
            </>
          )}
      </div>
    </div>
  )
}
