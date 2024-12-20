import { createSignal, JSX, Show } from "solid-js"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-solid"

type CollapsibleSectionProps = {
  title: string | JSX.Element
  children: JSX.Element
  onToggle?: (isOpen: boolean) => void
  titleClass?: string
  contentClass?: string
  containerClass?: string
  iconClass?: string
  open?: boolean
  onOpenChange?: (isOpen: boolean) => void
}

export default function CollapsibleSection(props: CollapsibleSectionProps) {
  const [internalOpen, setInternalOpen] = createSignal(false)

  // Use internal state if not controlled, otherwise use props.open
  const isOpen = () => props.open ?? internalOpen()

  const handleToggle = () => {
    const newState = !isOpen()
    // If controlled, use onOpenChange, otherwise use internal state
    if (props.onOpenChange) {
      props.onOpenChange(newState)
    } else {
      setInternalOpen(newState)
      props.onToggle?.(newState)
    }
  }

  return (
    <>
      <div
        class={`flex items-center justify-between ${props.containerClass || ""}`}
      >
        <Button
          onClick={handleToggle}
          variant="outline"
          class={`flex w-full items-center justify-between border-border/40 text-lg ${props.titleClass || ""}`}
        >
          <span>{props.title}</span>
          <ChevronDown
            class={`h-5 w-5 transform transition-transform duration-200 ${
              isOpen() ? "rotate-180" : ""
            } ${props.iconClass || ""}`}
          />
        </Button>
      </div>

      <Show when={isOpen()}>
        <div class={`space-y-2 p-4 ${props.contentClass || ""}`}>
          {props.children}
        </div>
      </Show>
    </>
  )
}
