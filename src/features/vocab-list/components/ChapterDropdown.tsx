import { createSignal, JSX, Show, For } from "solid-js"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-solid"

type ChapterDropdownProps = {
  chapter: string
  children: JSX.Element
  onToggle?: (isOpen: boolean) => void
}

export default function ChapterDropdown(props: ChapterDropdownProps) {
  const [isOpen, setIsOpen] = createSignal(false)

  const handleToggle = () => {
    const newState = !isOpen()
    setIsOpen(newState)
    props.onToggle?.(newState)
  }

  return (
    <div class="w-full rounded-lg border border-border/40 bg-card/50 backdrop-blur-sm">
      <div class="flex items-center justify-between px-4 py-3">
        <Button
          onClick={handleToggle}
          variant="ghost"
          class="flex w-full items-center justify-between text-xl font-bold"
        >
          <span class="text-sky-400">Chapter {props.chapter}</span>
          <ChevronDown
            class={`h-5 w-5 transform transition-transform duration-200 ${
              isOpen() ? "rotate-180" : ""
            }`}
          />
        </Button>
      </div>

      <Show when={isOpen()}>
        <div class="space-y-2 p-4">{props.children}</div>
      </Show>
    </div>
  )
}
