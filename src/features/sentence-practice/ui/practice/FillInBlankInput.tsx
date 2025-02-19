// ui/practice/FillInBlankInput.tsx
import { For } from "solid-js"
import { TextProcessor } from "../../core/text/TextProcessor"
import { TextField, TextFieldRoot } from "@/components/ui/textfield"
import type { ConjugatableSegment } from "../../core/conjugation/types"
import WanakanaWrapper from "@/features/wanakana/WanaKana"

interface FillInBlankInputProps {
  segments: ConjugatableSegment[]
  onInputChange: (index: number, value: string) => void
  inputValues: string[]
}

const textProcessor = new TextProcessor()

export default function FillInBlankInput(props: FillInBlankInputProps) {
  const displaySegments = textProcessor.processSegmentsForDisplay(
    props.segments,
  )
  console.log("sourceSegments: ", props.segments)
  console.log("displaySegments: ", displaySegments)

  return (
    <div class="space-y-4">
      <div class="text-2xl">
        <For each={displaySegments}>
          {(segment, index) => (
            <>
              {segment.isBlank ? (
                <WanakanaWrapper>
                  <TextFieldRoot class="inline-flex">
                    <TextField
                      value={props.inputValues[index()]}
                      onInput={(e) =>
                        props.onInputChange(index(), e.currentTarget.value)
                      }
                      class="mx-1 w-32 text-center text-2xl"
                    />
                  </TextFieldRoot>
                </WanakanaWrapper>
              ) : (
                <span>{segment.text as string}</span>
              )}
            </>
          )}
        </For>
      </div>
      <p class="pt-1 text-sm text-muted-foreground">*use caps for katakana</p>
    </div>
  )
}
