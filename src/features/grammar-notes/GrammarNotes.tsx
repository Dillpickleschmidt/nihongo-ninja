import { For, createSignal, JSX } from "solid-js"
import PrintButton from "@/components/PrintButton"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type GridItem = {
  title: JSX.Element
  content: JSX.Element
  imgSrc?: string
}

type GrammarNotesProps = {
  gridCols?: number
  items: GridItem[]
}

export default function GrammarNotes(props: GrammarNotesProps) {
  const [contentRef, setContentRef] = createSignal<HTMLDivElement>()

  return (
    <div class="w-full justify-center">
      <div>
        <div class={`grid grid-cols-1 gap-6 lg:grid-cols-2 2xl:grid-cols-4`}>
          <For each={props.items}>
            {(item) => (
              <div class="flex justify-center">
                <div class="w-full max-w-[500px]">
                  <h2 class="mt-2 text-center text-3xl font-semibold">
                    {item.title}
                  </h2>
                  <Dialog>
                    <DialogTrigger class="h-full w-full">
                      <div class="relative w-full overflow-hidden rounded-lg bg-background-secondary text-primary-foreground shadow-md duration-200 ease-in-out hover:scale-[0.995] hover:opacity-95 dark:shadow-none">
                        {item.imgSrc && (
                          <img src={item.imgSrc} alt="" sizes="700px" />
                        )}
                      </div>
                    </DialogTrigger>
                    <DialogContent class="max-h-screen max-w-[700px]">
                      <div
                        ref={setContentRef}
                        class="overflow-hidden bg-background-secondary print:bg-white"
                      >
                        <div class="fixed right-7 top-6 z-50">
                          <PrintButton
                            ref={contentRef}
                            buttonSize={20}
                            class="text-black hover:bg-background/25 hover:text-black/50"
                          />
                        </div>
                        {item.content}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  )
}
