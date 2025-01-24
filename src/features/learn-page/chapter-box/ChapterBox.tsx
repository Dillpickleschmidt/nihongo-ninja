// ChapterBox.tsx
import { For, createMemo, onMount } from "solid-js"
import { twMerge } from "tailwind-merge"
import UnitButton from "./UnitButton"
import { UnitButtonType, UnitButtonTypes } from "./types"
import { useLearnPageContext } from "../context/LearnPageContext"

type ChapterBoxProps = {
  text: string
  class?: string
  content: Array<{
    title: string
    link: string
    types: Array<UnitButtonType>
    disabled?: boolean
    id?: string
  }>
}

export default function ChapterBox(props: ChapterBoxProps) {
  const context = useLearnPageContext()
  const chapterID = props.text.replace(/\s/g, "_").toLowerCase()

  // Register IDs only once on mount
  onMount(() => {
    // Register chapter ID
    if (!context.chapterIds().includes(chapterID)) {
      context.setChapterIds([...context.chapterIds(), chapterID])
    }

    // Register unit IDs separately
    props.content.forEach((item) => {
      if (item.id && !context.unitIds().includes(item.id)) {
        context.setUnitIds([...context.unitIds(), item.id!])
      }
    })
  })

  // Group content by type when sort order is "module-type"
  const groupedContent = createMemo(() => {
    if (context.sortOrder() !== "module-type") return null

    const groups = new Map<string, typeof props.content>()

    // Initialize groups
    groups.set("overview", []) // Combined group for grammar-notes and vocab-list
    UnitButtonTypes.forEach((type) => {
      if (type !== "grammar-notes" && type !== "vocab-list") {
        groups.set(type, [])
      }
    })

    // Sort each item into its primary (first) type group
    props.content.forEach((item) => {
      const primaryType = item.types[0]

      // Determine which group this item belongs to
      let groupKey: UnitButtonType | "overview" = primaryType
      if (primaryType === "grammar-notes" || primaryType === "vocab-list") {
        groupKey = "overview"
      }

      const group = groups.get(groupKey) || []
      group.push(item)
      groups.set(groupKey, group)
    })

    // Convert map to array, maintaining the original type order
    // Put overview first, then other types in the order they appear in UnitButtonTypes
    const overviewGroup = groups.get("overview") || []
    const otherGroups = UnitButtonTypes.filter(
      (type) => type !== "grammar-notes" && type !== "vocab-list",
    )
      .map((type) => ({
        type,
        items: groups.get(type) || [],
      }))
      .filter((group) => group.items.length > 0)

    return [{ type: "overview", items: overviewGroup }, ...otherGroups].filter(
      (group) => group.items.length > 0,
    )
  })

  function toTitleCase(str: string): string {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  // Create stable IDs for items that don't have them
  const getStableId = (item: ChapterBoxProps["content"][0], index: number) => {
    return item.id || `${chapterID}-item-${index}`
  }

  return (
    <>
      <div
        id={chapterID}
        class={twMerge(
          "my-6 flex h-28 w-full scroll-m-20 items-center justify-center rounded-md border-2 border-primary bg-opacity-85 font-medium text-neutral-100 shadow-lg dark:border-none dark:bg-opacity-100 dark:text-primary dark:shadow-none",
          props.class,
        )}
      >
        <div class="px-14 py-4 text-4xl">{props.text}</div>
      </div>

      {context.sortOrder() === "module-type" ? (
        <div class="-mt-2 flex w-full flex-col space-y-3">
          <For each={groupedContent()}>
            {(group) => (
              <div class="space-y-2">
                <h3 class="text-lg font-semibold text-muted-foreground">
                  {toTitleCase(group.type.replace(/-/g, " "))}
                </h3>
                <div class="grid w-full grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 2xl:grid-cols-3 [&>*]:px-7 [&>*]:py-6 [&>*]:text-base [&>*]:shadow-lg">
                  <For each={group.items}>
                    {(item, index) => (
                      <UnitButton
                        id={getStableId(item, index())}
                        number={`${index() + 1}.`}
                        types={item.types}
                        link={item.link}
                        disabled={item.disabled}
                      >
                        {item.title}
                      </UnitButton>
                    )}
                  </For>
                </div>
              </div>
            )}
          </For>
        </div>
      ) : (
        <div class="grid w-full grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 2xl:grid-cols-3 [&>*]:px-7 [&>*]:py-6 [&>*]:text-base [&>*]:shadow-lg">
          <For each={props.content}>
            {(item, index) => (
              <UnitButton
                id={getStableId(item, index())}
                number={`${index() + 1}.`}
                types={item.types}
                link={item.link}
                disabled={item.disabled}
              >
                {item.title}
              </UnitButton>
            )}
          </For>
        </div>
      )}
    </>
  )
}
