// UnitButton.tsx
import { Button } from "@/components/ui/button"
import UnitButtonContents from "./UnitButtonContents"
import { UnitButtonType } from "./types"
import { useLearnPageContext } from "../context/LearnPageContext"
import { createMemo } from "solid-js"

type UnitButtonProps = {
  children: string
  number: string
  types: Array<UnitButtonType>
  link?: string
  disabled?: boolean
  id?: string
}

export default function UnitButton(props: UnitButtonProps) {
  const { completedModules } = useLearnPageContext()
  const strippedLink = props.link?.replace(/^\/learn\//, "")
  const isCompleted = createMemo(() => {
    return completedModules().data?.find((e) => e.module_path === strippedLink)
      ? true
      : false
  })

  return (
    <div class="!p-0 duration-75 ease-in-out hover:scale-[98.5%]">
      <Button
        id={props.id}
        as={props.disabled ? undefined : "a"}
        href={props.disabled ? undefined : props.link}
        variant="outline"
        class={`relative h-12 w-full whitespace-nowrap text-sm font-normal ${isCompleted() && "border-green-500/50 font-bold text-green-500"}`}
        disabled={props.disabled}
      >
        <div
          class={`absolute inset-0 flex items-center justify-between overflow-y-hidden overflow-x-scroll px-6 no-scrollbar ${isCompleted() && "bg-green-500/10"}`}
        >
          <UnitButtonContents
            id={props.number}
            types={props.types}
            isCompleted={isCompleted()}
          >
            {props.children}
          </UnitButtonContents>
        </div>
      </Button>
    </div>
  )
}
