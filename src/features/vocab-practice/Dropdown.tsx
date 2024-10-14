import { createSignal, JSX, Show } from "solid-js"
import { Button } from "@/components/ui/button"

type DropdownProps = JSX.HTMLAttributes<HTMLDivElement> & {
  children: JSX.Element
  text: string
}

export default function Dropdown(props: DropdownProps) {
  const [showSpoiler, setShowSpoiler] = createSignal(true)

  return (
    <div class="w-full max-w-[850px]">
      <div class="flex items-center justify-between border-b border-white border-opacity-15 py-3 pr-3">
        <Button
          onClick={() => setShowSpoiler(!showSpoiler())}
          variant="outline"
          class="rounded-md bg-neutral-800 px-4 py-2 text-lg text-sky-400"
        >
          {props.text}
        </Button>
        <div class="ease flex space-x-6">
          <div class="text-base">Cards</div>
          <div class="text-base">Actions</div>
        </div>
      </div>
      <Show when={showSpoiler()}>
        <div class="flex w-full flex-col [&>*]:ml-4 [&>*]:border-b [&>*]:border-white [&>*]:border-opacity-15 [&>*]:px-2 [&>*]:py-3">
          {props.children}
        </div>
      </Show>
    </div>
  )
}
