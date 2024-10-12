import { JSX } from "solid-js"

type VocabCardSingleBlankProps = {
  children: JSX.Element
  index: number
  countOffset?: number
  kana?: string
  english?: string
  light?: boolean
  noFurigana?: boolean
  japanese?: string
  vocabVideo?: boolean
}

export default function VocabCardSingleBlank({
  children,
  index,
  countOffset,
  kana,
  english,
  light = false,
  noFurigana = false,
  japanese,
  vocabVideo,
}: VocabCardSingleBlankProps) {
  return (
    <div
      class={`relative rounded-[30px] bg-card/35 text-black shadow-md dark:shadow-lg dark:shadow-black ${
        light ? "dark:bg-[#f7f0dd]" : "dark:bg-[#f7e2c4]"
      }`}
    >
      <div class="min-h-48 px-16 py-12">
        <h3 class="mb-4 font-japanese text-2xl font-bold">
          {/* Number */}
          <span class="font-japanese text-[1.375rem]">
            {`${countOffset ? index + countOffset + 1 : index + 1}.`}{" "}
          </span>
          {/* Furigana */}
          {noFurigana && japanese ? (
            <span class="font-japanese text-2xl">{japanese}</span>
          ) : (
            <span class="text-2xl" innerHTML={kana ?? ""}></span>
          )}{" "}
          - <span class="font-japanese text-[1.375rem]">{english}</span>
        </h3>
        {children}
      </div>
    </div>
  )
}
