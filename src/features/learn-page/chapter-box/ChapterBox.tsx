import { For } from "solid-js"
import { twMerge } from "tailwind-merge"
import UnitButton from "./UnitButton"
import { UnitButtonType } from "./types"

type ChapterBoxProps = {
  text: string
  class?: string
  content: Array<{
    title: string
    link: string
    types: Array<UnitButtonType>
    disabled?: boolean
  }>
}

export default function ChapterBox(props: ChapterBoxProps) {
  return (
    <>
      <div
        class={twMerge(
          "my-6 flex h-28 w-full items-center justify-center rounded-md bg-opacity-50 font-medium text-neutral-100 shadow-lg dark:bg-opacity-100 dark:text-primary dark:shadow-none",
          props.class,
        )}
      >
        <div class="px-14 py-4 text-4xl">{props.text}</div>
      </div>
      <div class="grid w-full grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 2xl:grid-cols-3 [&>*]:px-7 [&>*]:py-6 [&>*]:text-base [&>*]:shadow-lg">
        <For each={props.content}>
          {(item, index) => (
            <UnitButton
              id={`${index() + 1}.`}
              types={item.types}
              link={item.link}
              disabled={item.disabled}
            >
              {item.title}
            </UnitButton>
          )}
        </For>
      </div>
    </>
  )
}
