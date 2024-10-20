import { For } from "solid-js"
import type { RichVocabItem } from "@/types/vocab"

type VocabTextBodyProps = {
  data: RichVocabItem[]
  index: number
}

export default function VocabTextBody(props: VocabTextBodyProps) {
  const item = props.data[props.index]
  return (
    <>
      <div class="min-h-32">
        {item.particles && (
          <ul class="pb-4 text-xl">
            <For each={item.particles}>
              {(object) => (
                <>
                  {object.label ? (
                    <li class="font-bold">
                      {object.label} -{" "}
                      <span class="font-japanese text-2xl">
                        {object.particle}
                      </span>
                    </li>
                  ) : (
                    <li class="font-bold">
                      Particle:{" "}
                      <span class="font-japanese text-2xl">
                        {object.particle}
                      </span>
                    </li>
                  )}
                </>
              )}
            </For>
          </ul>
        )}
        <For each={item.mnemonics}>
          {(mnemonic, idx) => (
            <p class="space-y-6">
              <span class="font-bold">Mnemonic: </span>
              {mnemonic}
            </p>
          )}
        </For>
        {item.info.length > 0 && (
          <ul
            class={`ml-6 list-disc ${item.mnemonics.length > 0 ? "pt-3" : ""}`}
          >
            <For each={item.info}>
              {(info) => <li class="space-y-6">{info}</li>}
            </For>
          </ul>
        )}
        {item.example_sentences && item.example_sentences.length > 0 && (
          <>
            <h3 class="mt-6 font-bold">Example Sentences</h3>
            <ul class="ml-6 list-disc">
              <For each={item.example_sentences}>
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
    </>
  )
}
