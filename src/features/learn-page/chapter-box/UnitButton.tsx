import { A } from "@solidjs/router"
import { Button } from "@/components/ui/button"
import UnitButtonContents from "./UnitButtonContents"
import { UnitButtonType } from "./types"

type UnitButtonProps = {
  children: string
  id: string
  types: Array<UnitButtonType>
  link?: string
  disabled?: boolean
}

export default function UnitButton(props: UnitButtonProps) {
  return (
    <div class="!p-0 duration-75 ease-in-out hover:scale-[98.5%]">
      <A href={props.link || ""}>
        <Button
          variant="outline"
          class="no-scrollbar relative h-full w-full justify-between overflow-y-hidden overflow-x-scroll whitespace-nowrap px-6 py-[.75rem] text-sm font-normal"
          onClick={() => {}}
          disabled={props.disabled}
        >
          <UnitButtonContents id={props.id} types={props.types}>
            {props.children}
          </UnitButtonContents>
        </Button>
      </A>
    </div>
  )
}
