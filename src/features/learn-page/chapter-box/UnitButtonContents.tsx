// UnitButtonContents.tsx
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
  BookOpenText,
  BookPlus,
  CircleCheckBig,
} from "lucide-solid"
import { UnitButtonType } from "./types"
import { cn } from "@/libs/cn"

type UnitButtonContentsProps = {
  children: string
  id: string
  types: Array<UnitButtonType>
  isFolder?: boolean
  isCompleted: boolean
}

export default function UnitButtonContents(props: UnitButtonContentsProps) {
  const iconSize = props.isFolder ? "16px" : "22px"

  const iconClasses = {
    lesson: "text-green-500",
    worksheet: "text-teal-400",
    "practice-sentence": "text-yellow-500 saturate-[75%]",
    "culture-note": "text-pink-400 saturate-[75%]",
    vocab: "text-sky-400 saturate-[75%]",
    "vocab-practice": "text-orange-500",
    "conjugation-practice": "text-teal-400",
    "counter-practice": "text-green-500",
    game: "text-red-500",
    video: "text-purple-400",
    audio: "text-purple-400",
    "grammar-notes": "text-red-500 opacity-80",
    reading: "text-teal-400",
    "vocab-list": "text-sky-400 saturate-[75%]",
    "vocab-test": "text-yellow-500 saturate-[75%]",
  }

  const iconComponents = {
    lesson: BookOpen,
    worksheet: PencilLine,
    "practice-sentence": PencilLine,
    "culture-note": Coffee,
    vocab: BookPlus,
    "vocab-practice": GraduationCap,
    "conjugation-practice": GraduationCap,
    "counter-practice": GraduationCap,
    game: Gamepad,
    video: Video,
    audio: Volume2,
    "grammar-notes": ScrollText,
    reading: BookOpenText,
    "vocab-list": Library,
    "vocab-test": GraduationCap,
  }

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
      <div>
        <span>{props.id}</span>
        <span class="mx-[0.3rem]" />
        <span
          class={cn(
            "text-muted-foreground",
            props.isCompleted && "font-bold text-green-500",
          )}
        >
          {props.isCompleted && (
            <CircleCheckBig class="mr-2 inline-flex h-4 w-4 origin-center" />
          )}
          {props.children}
        </span>
      </div>
      <div
        class={cn(
          "sticky right-0 flex",
          props.isFolder &&
            `relative h-8 w-8 items-center justify-center rounded-full ${props.isCompleted ? "border-2 border-green-500/25 bg-green-500/10" : "border border-neutral-400 bg-neutral-100/50 dark:border-black dark:bg-neutral-700/50"}`,
        )}
      >
        <For each={props.types}>
          {(type, index) => {
            const IconComponent = iconComponents[type]
            return (
              <div
                class={`${props.isFolder && "absolute"}`}
                style={getIconStyle(index(), props.types.length)}
              >
                <IconComponent size={iconSize} class={iconClasses[type]} />
              </div>
            )
          }}
        </For>
      </div>
    </>
  )
}
