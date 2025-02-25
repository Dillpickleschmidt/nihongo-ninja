import { JSX } from "solid-js"
import { cn } from "@/libs/cn"
import { TextArea } from "@/components/ui/textarea"
import { TextFieldRoot } from "@/components/ui/textfield"

type CustomTextAreaProps = {
  backgroundColor?: string
  foregroundColor?: string
  spacing?: number
  class?: string
} & JSX.TextareaHTMLAttributes<HTMLTextAreaElement>

export default function CustomTextArea(
  props: CustomTextAreaProps,
): JSX.Element {
  const backgroundColor = props.backgroundColor ?? "hsl(var(--card))"
  const foregroundColor = props.foregroundColor ?? "hsl(var(--card-foreground))"
  const spacing = props.spacing ?? 10

  const noteStyle = {
    "background-attachment": "local",
    "background-image": `
      linear-gradient(to right, ${backgroundColor} ${spacing}px, transparent ${spacing}px),
      linear-gradient(to left, ${backgroundColor} ${spacing}px, transparent ${spacing}px),
      repeating-linear-gradient(${backgroundColor}, ${backgroundColor} ${spacing * 3}px, ${foregroundColor} ${spacing * 3}px, ${foregroundColor} ${spacing * 3 + 1}px, ${backgroundColor} ${spacing * 3 + 1}px)
    `,
    "line-height": `${spacing * 3 + 1}px`,
    padding: "8px 10px",
  }

  return (
    <TextFieldRoot class="h-full w-full">
      <TextArea style={noteStyle} class={cn("!px-6 text-lg", props.class)} />
    </TextFieldRoot>
  )
}
