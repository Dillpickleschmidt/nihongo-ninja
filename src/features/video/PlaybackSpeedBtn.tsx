import { createSignal, createEffect } from "solid-js"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type DropdownMenuCheckboxesProps = {
  playbackSpeed: number
  setPlaybackSpeed: (speed: number) => void
}

const DropdownMenuCheckboxes = (props: DropdownMenuCheckboxesProps) => {
  const [selectedSpeed, setSelectedSpeed] = createSignal(
    props.playbackSpeed.toString(),
  )

  createEffect(() => {
    setSelectedSpeed(props.playbackSpeed.toString())
  })

  const handleSpeedChange = (value: string) => {
    const speed = parseFloat(value)
    props.setPlaybackSpeed(speed)
    setSelectedSpeed(value)
  }

  return (
    <DropdownMenu placement="top">
      <DropdownMenuTrigger>
        <div class="w-8 text-center hover:bg-transparent">
          {selectedSpeed()}x
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        class="w-24"
        onClick={(e: any) => {
          // e.preventDefault()
          e.stopPropagation()
        }}
      >
        <DropdownMenuRadioGroup
          value={selectedSpeed()}
          onChange={handleSpeedChange}
        >
          <DropdownMenuRadioItem value="0.25">0.25x</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="0.5">0.5x</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="0.75">0.75x</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="1">1x</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuCheckboxes
