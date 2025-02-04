import { For } from "solid-js"
import {
  BookOpen,
  PencilLine,
  ScrollText,
  GraduationCap,
  Gamepad,
  Coffee,
  Video,
  Volume2,
  Library,
  NotebookText,
  BookOpenText,
  BookPlus,
} from "lucide-solid"
import { UnitButtonType } from "./types"
import { cn } from "@/libs/cn"

type UnitButtonContentsProps = {
  children: string
  id: string
  types: Array<UnitButtonType>
  isFolder?: boolean
}

export default function UnitButtonContents(props: UnitButtonContentsProps) {
  const iconSize = props.isFolder ? "16px" : "22px"

  const getIcon = (type: UnitButtonType) => {
    switch (type) {
      case "lesson":
        return <BookOpen size={iconSize} class="text-green-500" />
      case "worksheet":
        return <PencilLine size={iconSize} class="text-teal-400" />
      case "practice-sentence":
        return (
          <PencilLine size={iconSize} class="text-yellow-500 saturate-[75%]" />
        )
      case "culture-note":
        return <Coffee size={iconSize} class="text-pink-400 saturate-[75%]" />
      case "vocab":
        return <BookPlus size={iconSize} class="text-sky-400 saturate-[75%]" />
      case "vocab-practice":
        return <GraduationCap size={iconSize} class="text-orange-500" />
      case "conjugation-practice":
        return <GraduationCap size={iconSize} class="text-teal-400" />
      case "counter-practice":
        return <GraduationCap size={iconSize} class="text-green-500" />
      case "game":
        return <Gamepad size={iconSize} class="text-red-500" />
      case "video":
        return <Video size={iconSize} class="text-purple-400" />
      case "audio":
        return <Volume2 size={iconSize} class="text-purple-400" />
      case "grammar-notes":
        return <ScrollText size={iconSize} class="text-red-500 opacity-80" />
      case "reading":
        return <BookOpenText size={iconSize} class="text-teal-400" />
      case "vocab-list":
        return <Library size={iconSize} class="text-sky-400 saturate-[75%]" />
      case "vocab-test":
        return (
          <GraduationCap
            size={iconSize}
            class="text-yellow-500 saturate-[75%]"
          />
        )
      default:
        return null
    }
  }

  // Calculate positions for icons in a circle
  const getIconStyle = (index: number, total: number) => {
    if (!props.isFolder) return ""

    const radius = 10
    const startAngle = total === 2 ? -180 : -90 // Start from left for 2 icons, top for others
    const angle = (360 / total) * index + startAngle

    const x = Math.cos((angle * Math.PI) / 180) * radius
    const y = Math.sin((angle * Math.PI) / 180) * radius

    return `transform: translate(${x}px, ${y}px);`
  }

  return (
    <>
      <div class="flex h-full items-center">
        <span>{props.id}</span>
        <span class="mx-[0.3rem]"></span>
        <span class="text-muted-foreground">{props.children}</span>
      </div>
      <div
        class={cn(
          "sticky right-0 ml-2 flex rounded-full bg-inherit text-muted-foreground",
          props.isFolder &&
            "relative flex h-8 w-8 items-center justify-center border border-black bg-neutral-100/50 dark:bg-neutral-700/50",
        )}
      >
        <For each={props.types}>
          {(type, index) => (
            <div
              class={cn(
                "ml-1",
                props.isFolder &&
                  "absolute m-0 flex items-center justify-center",
              )}
              style={getIconStyle(index(), props.types.length)}
            >
              {getIcon(type)}
            </div>
          )}
        </For>
      </div>
    </>
  )
}
