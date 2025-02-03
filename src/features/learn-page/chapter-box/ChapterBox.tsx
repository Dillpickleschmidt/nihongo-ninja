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
      if ("items" in item) {
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

  const flattenedContent = createMemo(() => {
    if (context.sortOrder() === "module-type") {
      return props.content.reduce<ContentItem[]>((acc, item) => {
        return [...acc, ...("items" in item ? item.items : [item])]
      }, [])
    }
    return props.content
  })

  const groupedContent = createMemo(() => {
    if (context.sortOrder() !== "module-type") return null

    const groups = new Map<string, ContentItem[]>([
      ["overview", []] as [string, ContentItem[]],
      ...UnitButtonTypes.filter(
        (type) => !["grammar-notes", "vocab-list"].includes(type),
      ).map((type) => [type, []] as [string, ContentItem[]]),
    ])

    // Group content by type when sort order is "module-type"
    flattenedContent().forEach((item) => {
      if (!("items" in item)) {
        const groupKey = ["grammar-notes", "vocab-list"].includes(item.types[0])
          ? "overview"
          : item.types[0]
        groups.get(groupKey)?.push(item)
      }
    })

    return [
      { type: "overview", items: groups.get("overview") || [] },
      ...UnitButtonTypes.filter(
        (type) => !["grammar-notes", "vocab-list"].includes(type),
      )
        .map((type) => ({ type, items: groups.get(type) || [] }))
        .filter((group) => group.items.length > 0),
    ].filter((group) => group.items.length > 0)
  })

  const renderFolderButton = (folder: FolderItem, index: number) => {
    const allTypes = Array.from(
      new Set(folder.items.flatMap((item) => item.types)),
    )

    return (
      <Dialog>
        <DialogTrigger>
          <div class="duration-75 ease-in-out hover:scale-[98.5%]">
            <Button
              id={folder.id}
              variant="outline"
              class="relative h-12 w-full justify-between overflow-y-hidden overflow-x-scroll whitespace-nowrap px-6 text-sm font-normal no-scrollbar"
            >
              <UnitButtonContents
                id={`${index + 1}.`}
                types={allTypes}
                isFolder={true}
              >
                {folder.title}
              </UnitButtonContents>
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{folder.title}</DialogTitle>
          </DialogHeader>
          <div class="grid gap-6">
            <For each={folder.items}>
              {(item, subIndex) => (
                <UnitButton
                  id={item.id || `${chapterID}-folder-item-${subIndex()}`}
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

  return (
    <>
      {/* Chapter Header - Always rendered */}
      <div
        id={chapterID}
        class={twMerge(
          "my-6 flex h-28 w-full scroll-m-20 items-center justify-center rounded-md border-2 border-primary bg-opacity-85 font-medium text-neutral-100 shadow-lg dark:border-none dark:bg-opacity-100 dark:text-primary dark:shadow-none",
          props.class,
        )}
      >
        <div class="px-14 py-4 text-4xl">{props.text}</div>
      </div>

      {/* Content Section - Conditionally rendered based on sort order */}
      {context.sortOrder() === "module-type" ? (
        // Module Type View - Groups content by type (e.g., vocab, practice, etc.)
        <div class="flex w-full flex-col space-y-3">
          <For each={groupedContent()}>
            {(group) => (
              <div class="space-y-2">
                {/* Group Header (e.g., "Vocab", "Practice") */}
                <h3 class="text-lg font-semibold text-muted-foreground">
                  {group.type
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (c) => c.toUpperCase())}
                </h3>
                {/* Grid of Unit Buttons for this group */}
                <div class="grid w-full grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
                  <For each={group.items}>
                    {/* Regular Unit Buttons - Folders are flattened in module view */}
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
      ) : (
        // Sequential View - Shows content in order, including folders
        <div class="grid w-full grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
          <For each={flattenedContent()}>
            {(item, index) => (
              <Show
                // Determine if this item is a folder
                when={"items" in item}
                // Regular Unit Button (non-folder item)
                fallback={
                  <UnitButton
                    id={
                      (item as ContentItem).id || `${chapterID}-item-${index()}`
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
                {/* Folder Button - Opens dialog with nested content */}
                {renderFolderButton(item as FolderItem, index())}
              </Show>
            )}
          </For>
        </div>
      )}
    </>
  )
}
