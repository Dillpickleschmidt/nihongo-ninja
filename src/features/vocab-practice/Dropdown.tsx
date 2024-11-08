import { createSignal, JSX, Show } from "solid-js"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-solid"

type DropdownProps = JSX.HTMLAttributes<HTMLDivElement> & {
  children: JSX.Element
  text: string
}

export default function Dropdown(props: DropdownProps) {
  const [isOpen, setIsOpen] = createSignal(true)

  return (
    <div class="w-full max-w-[850px] rounded-lg border border-border/40 bg-card/50 backdrop-blur-sm">
      <div class="flex items-center justify-between px-4 py-3">
        <Button
          onClick={() => setIsOpen(!isOpen())}
          variant="ghost"
          class="flex w-full items-center justify-between text-lg font-semibold text-orange-400 hover:text-orange-400"
        >
          <span>{props.text}</span>
          <ChevronDown
            class={`h-5 w-5 transform transition-transform duration-200 ${
              isOpen() ? "rotate-180" : ""
            }`}
          />
        </Button>
      </div>

      <Show when={isOpen()}>
        <div class="flex w-full flex-col divide-y divide-border/60">
          {props.children}
        </div>
      </Show>
    </div>
  )
}
