import {
  Checkbox,
  CheckboxControl,
  CheckboxLabel,
} from "@/components/ui/checkbox"
import { JSX } from "solid-js"

type ToggleOptionProps = {
  id: string
  checked: boolean
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
    <>
      <Checkbox
        checked={checked}
        onChange={onCheckedChange}
        class="flex items-center space-x-3"
      >
        <CheckboxControl />
        <CheckboxLabel
          class={`hover:cursor-pointer ${className || "text-lg lg:text-[1.2rem]"}`}
        >
          {label}
        </CheckboxLabel>
      </Checkbox>
    </>
  )
}
