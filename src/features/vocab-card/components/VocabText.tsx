// VocabText.tsx
import { Suspense } from "solid-js"
import type { RichVocabItem } from "@/types/vocab"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Book, Grid2x2 } from "lucide-solid"
import { ImmersionKitResponse } from "../immersion-kit"
import VocabTextBody from "./VocabTextBody"
import VocabExamples from "./VocabExamples"

type VocabTextProps = {
  data: RichVocabItem[]
  index: number
  examples: ImmersionKitResponse["data"][0]["examples"] | undefined
}

export default function VocabText(props: VocabTextProps) {
  const item = props.data[props.index]

  return (
    <div class="min-h-48 px-8 py-6 lg:py-12 lg:pl-8 lg:pr-12">
      <h3 class="mb-4 ml-6 font-japanese text-2xl font-bold">
        <span class="font-japanese text-[1.375rem]">
          {`${props.index + 1}.`}{" "}
        </span>
        <span class="text-2xl" innerHTML={item.rubyText?.[0] || item.word} /> -{" "}
        <span class="font-japanese text-[1.375rem]">
          {item.english.join(", ")}
        </span>
      </h3>

      {/* Mobile: Tabbed Layout */}
      <div class="md:hidden">
        <Tabs defaultValue="info" class="w-full">
          <TabsList class="bg-white/50">
            <TabsTrigger
              value="info"
              class="text-primary-foreground/50 hover:text-black data-[selected]:text-black"
            >
              <Book class="mr-2 h-4 w-4" />
              Info
            </TabsTrigger>
            <TabsTrigger
              value="examples"
              class="text-primary-foreground/50 hover:text-black data-[selected]:text-black"
            >
              <Grid2x2 class="mr-2 h-4 w-4" />
              Examples
            </TabsTrigger>
          </TabsList>

          <TabsContent value="info">
            <VocabTextBody data={props.data} index={props.index} />
          </TabsContent>

          <TabsContent value="examples">
            <Suspense
              fallback={
                <div class="p-4 text-gray-500">Loading examples...</div>
              }
            >
              <VocabExamples {...props} />
            </Suspense>
          </TabsContent>
        </Tabs>
      </div>

      {/* Desktop: Compact Layout */}
      <div class="hidden md:grid md:grid-cols-2 md:gap-6">
        <div class="border-l-2 border-orange-400 pl-6">
          <VocabTextBody data={props.data} index={props.index} />
        </div>
        <div class="rounded-lg bg-white/50 p-4 shadow-inner shadow-black/15">
          <Suspense
            fallback={<div class="p-4 text-gray-500">Loading examples...</div>}
          >
            <VocabExamples {...props} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
