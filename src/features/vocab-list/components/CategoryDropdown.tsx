import { createSignal, JSX, Show } from "solid-js"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-solid"

type CategoryDropdownProps = {
  title: string
  expandedByDefault?: boolean
  onToggle?: (isOpen: boolean) => void
  children: JSX.Element
}

export default function CategoryDropdown(props: CategoryDropdownProps) {
  const [isOpen, setIsOpen] = createSignal(props.expandedByDefault ?? false)

  const handleToggle = () => {
    const newState = !isOpen()
    setIsOpen(newState)
    props.onToggle?.(newState)
  }

  return (
    <div class="w-full rounded-md border border-border/20 bg-card/30">
      <Button
        onClick={handleToggle}
        variant="ghost"
        class="flex w-full items-center justify-between px-4 py-2 text-lg font-medium text-orange-400"
      >
        <span>{props.title}</span>
        <ChevronRight
          class={`h-4 w-4 transform transition-transform duration-200 ${
            isOpen() ? "rotate-90" : ""
          }`}
        />
      </Button>

      <Show when={isOpen()}>
        <div class="p-4">{props.children}</div>
      </Show>
    </div>
  )
}
