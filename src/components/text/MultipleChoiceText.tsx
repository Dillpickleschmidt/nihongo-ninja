import { cn } from "@/libs/cn"
import { createSignal, For, Show } from "solid-js"

type SelectTextProps = {
  answer: string | string[]
  a?: string
  b?: string
  c?: string
  d?: string
  class?: string
}

export default function SelectText(props: SelectTextProps) {
  const options = { a: props.a, b: props.b, c: props.c, d: props.d }
  const [clicked, setClicked] = createSignal<{ [key: string]: boolean }>({})
  const [correct, setCorrect] = createSignal<{ [key: string]: boolean }>({})

  const handleClick = (option: string) => {
    setClicked((prev) => ({ ...prev, [option]: true }))
    const correctAnswers = Array.isArray(props.answer)
      ? props.answer
      : [props.answer]
    if (correctAnswers.includes(options[option as keyof typeof options]!)) {
      setCorrect((prev) => ({ ...prev, [option]: true }))
    }
  }

  const getTextColorClass = (option: string) => {
    if (correct()[option]) {
      return "dark:bg-green-500 bg-[#00F064] bg-opacity-[90%] rounded-md font-medium text-black"
    } else if (clicked()[option]) {
      return "dark:text-red-500 text-[#FF0000] rounded-md font-medium"
    } else {
      return ""
    }
  }

  const renderOption = (option: string, text?: string) => {
    if (!text) return null
    return (
      <p>
        <span
          class={`${getTextColorClass(option)} inline-block origin-left cursor-pointer px-3 py-[.0625rem] text-xl duration-100 ease-out hover:scale-[107%]`}
          onClick={() => handleClick(option)}
        >
          {`${option}) `}
          <span class={cn("font-japanese text-[1.55rem]", props.class)}>
            {text}
          </span>
        </span>
      </p>
    )
  }

  return (
    <div class="!space-y-3 pl-7">
      <For each={["a", "b", "c", "d"] as const}>
        {(option) => (
          <Show when={options[option]}>
            {renderOption(option, options[option])}
          </Show>
        )}
      </For>
    </div>
  )
}
