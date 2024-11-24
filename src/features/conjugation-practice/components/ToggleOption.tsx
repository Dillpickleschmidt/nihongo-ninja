import {
  Checkbox,
  CheckboxControl,
  CheckboxLabel,
} from "@/components/ui/checkbox"
import { cn } from "@/libs/cn"
import { JSX } from "solid-js"

type ToggleOptionProps = {
  id: string
  checked: () => boolean // Changed from boolean to () => boolean
  onCheckedChange: (checked: boolean) => void
  label: JSX.Element
  class?: string
}

export default function ToggleOption({
  id,
  checked,
  onCheckedChange,
  label,
  class: className,
}: ToggleOptionProps) {
  return (
    <Checkbox
      id={id}
      checked={checked()}
      onChange={onCheckedChange}
      class="flex items-center space-x-3"
    >
      <div class="flex items-center gap-3">
        <CheckboxControl class="hover:cursor-pointer" />
        <CheckboxLabel
          class={`origin-left duration-100 hover:scale-[102%] hover:cursor-pointer ${cn("text-lg lg:text-[1.2rem]", className)}`}
        >
          {label}
        </CheckboxLabel>
      </div>
    </Checkbox>
  )
}
