import { For } from "solid-js"
import BookOpen from "lucide-solid/icons/book-open"
import PencilLine from "lucide-solid/icons/pencil-line"
import ScrollText from "lucide-solid/icons/scroll-text"
import GraduationCap from "lucide-solid/icons/graduation-cap"
import Gamepad from "lucide-solid/icons/gamepad"
import Coffee from "lucide-solid/icons/coffee"
import Video from "lucide-solid/icons/video"
import Volume2 from "lucide-solid/icons/volume-2"
import Library from "lucide-solid/icons/library"
import NotebookText from "lucide-solid/icons/notebook-text"
import BookOpenText from "lucide-solid/icons/book-open-text"
import BookPlus from "lucide-solid/icons/book-plus"
import { UnitButtonType } from "./types"

type UnitButtonContentsProps = {
  children: string
  id: string
  types: Array<UnitButtonType>
}

export default function UnitButtonContents(props: UnitButtonContentsProps) {
  const iconSize = "22px"

  const getIcon = (type: UnitButtonType) => {
    switch (type) {
      case "lesson":
        return <BookOpen size={iconSize} class="text-green-500" />
      case "writing":
        return (
          <PencilLine size={iconSize} class="text-yellow-500 saturate-[75%]" />
        )
      case "culture-note":
        return <Coffee size={iconSize} class="text-pink-400 saturate-[75%]" />
      case "vocab":
        return <BookPlus size={iconSize} class="text-sky-400 saturate-[75%]" />
      case "practice":
        return <GraduationCap size={iconSize} class="text-orange-500" />
      case "conjugation-practice":
        return <GraduationCap size={iconSize} class="text-teal-400" />
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

  return (
    <>
      <div class="flex h-full items-center">
        <span>{props.id}</span>
        <span class="mx-[0.3rem]"></span>
        <span class="text-muted-foreground">{props.children}</span>
      </div>
      <div class="sticky right-0 ml-2 flex rounded-full bg-inherit text-muted-foreground">
        <For each={props.types}>
          {(type) => <div class="ml-1">{getIcon(type)}</div>}
        </For>
      </div>
    </>
  )
}
