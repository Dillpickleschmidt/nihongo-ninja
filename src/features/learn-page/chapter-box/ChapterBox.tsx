import { For, Show, createMemo, onMount } from "solid-js"
import { twMerge } from "tailwind-merge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import UnitButton from "./UnitButton"
import UnitButtonContents from "./UnitButtonContents"
import { UnitButtonType, UnitButtonTypes } from "./types"
import { useLearnPageContext } from "../context/LearnPageContext"

type ContentItem = {
  title: string
  link?: string
  types: Array<UnitButtonType>
  disabled?: boolean
  id?: string
}

type FolderItem = {
  title: string
  id?: string
  items: ContentItem[]
}

type ChapterBoxProps = {
  text: string
  class?: string
  content: Array<ContentItem | FolderItem>
}

function FolderButton(props: {
  folder: FolderItem
  index: number
  chapterID: string
}) {
  const allTypes = Array.from(
    new Set(props.folder.items.flatMap((item) => item.types)),
  ) as UnitButtonType[]

  return (
    <Dialog>
      <DialogTrigger>
        <div class="duration-75 ease-in-out hover:scale-[98.5%]">
          <Button
            id={props.folder.id}
            variant="outline"
            class="relative h-12 w-full justify-between overflow-y-hidden whitespace-nowrap px-6 text-sm font-normal"
          >
            <UnitButtonContents
              id={`${props.index + 1}.`}
              types={allTypes}
              // isFolder={true}
            >
              {props.folder.title}
            </UnitButtonContents>
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{props.folder.title}</DialogTitle>
        </DialogHeader>
        <div class="grid gap-6">
          <For each={props.folder.items}>
            {(item, subIndex) => (
              <UnitButton
                id={item.id || `${props.chapterID}-folder-item-${subIndex()}`}
                number={`${subIndex() + 1}.`}
                types={item.types}
                link={item.link}
                disabled={item.disabled}
              >
                {item.title}
              </UnitButton>
            )}
          </For>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function ChapterBox(props: ChapterBoxProps) {
  const context = useLearnPageContext()
  const chapterID = props.text.replace(/\s/g, "_").toLowerCase()

  onMount(() => {
    if (!context.chapterIds().includes(chapterID)) {
      context.setChapterIds([...context.chapterIds(), chapterID])
    }

    props.content.forEach((item) => {
      const isFolder = "items" in item
      if (isFolder) {
        item.items.forEach(({ id }) => {
          if (id && !context.unitIds().includes(id)) {
            context.setUnitIds([...context.unitIds(), id])
          }
        })
      } else if (item.id && !context.unitIds().includes(item.id)) {
        context.setUnitIds([...context.unitIds(), item.id])
      }
    })
  })

  const flatContent = createMemo(() => {
    if (context.sortOrder() !== "module-type") return props.content

    return props.content.reduce<ContentItem[]>(
      (acc, item) => [...acc, ...("items" in item ? item.items : [item])],
      [],
    )
  })

  const groupedContent = createMemo(() => {
    if (context.sortOrder() !== "module-type") return null

    const groups = new Map<string, ContentItem[]>([
      ["overview", []] as [string, ContentItem[]],
      ...UnitButtonTypes.filter(
        (type) => !["grammar-notes", "vocab-list"].includes(type),
      ).map((type) => [type, []] as [string, ContentItem[]]),
    ])

    flatContent().forEach((item) => {
      if (!("items" in item)) {
        const groupKey = ["grammar-notes", "vocab-list"].includes(item.types[0])
          ? "overview"
          : item.types[0]
        groups.get(groupKey)?.push(item)
      }
    })

    return Array.from(groups.entries())
      .filter(([_, items]) => items.length > 0)
      .map(([type, items]) => ({ type, items }))
  })

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

      <Show
        when={context.sortOrder() === "module-type"}
        fallback={
          <div class="grid w-full grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
            <For each={flatContent()}>
              {(item, index) => (
                <Show
                  when={"items" in item}
                  fallback={
                    <UnitButton
                      id={
                        (item as ContentItem).id ||
                        `${chapterID}-item-${index()}`
                      }
                      number={`${index() + 1}.`}
                      types={(item as ContentItem).types}
                      link={(item as ContentItem).link}
                      disabled={(item as ContentItem).disabled}
                    >
                      {(item as ContentItem).title}
                    </UnitButton>
                  }
                >
                  <FolderButton
                    folder={item as FolderItem}
                    index={index()}
                    chapterID={chapterID}
                  />
                </Show>
              )}
            </For>
          </div>
        }
      >
        <div class="flex w-full flex-col space-y-3">
          <For each={groupedContent()}>
            {(group) => (
              <div class="space-y-2">
                <h3 class="text-lg font-semibold text-muted-foreground">
                  {group.type
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (c) => c.toUpperCase())}
                </h3>
                <div class="grid w-full grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
                  <For each={group.items}>
                    {(item, index) => (
                      <UnitButton
                        id={item.id || `${chapterID}-item-${index()}`}
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
      </Show>
    </>
  )
}
