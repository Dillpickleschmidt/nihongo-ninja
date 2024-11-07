import {
  Checkbox,
  CheckboxControl,
  CheckboxLabel,
} from "@/components/ui/checkbox"
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
        <CheckboxControl />
        <CheckboxLabel
          class={`hover:cursor-pointer ${className || "text-lg lg:text-[1.2rem]"}`}
        >
          {label}
        </CheckboxLabel>
      </div>
    </Checkbox>
  )
}
