import { JSX, splitProps } from "solid-js"
import {
  TextField,
  TextFieldErrorMessage,
  TextFieldLabel,
  TextFieldRoot,
} from "./ui/textfield"

type TextInputProps = {
  name: string
  type: "text" | "email" | "tel" | "password" | "url" | "date"
  label?: string
  placeholder?: string
  value: string | undefined
  error: string
  required?: boolean
  ref: (element: HTMLInputElement) => void
  onInput: JSX.EventHandler<HTMLInputElement, InputEvent>
  onChange: JSX.EventHandler<HTMLInputElement, Event>
  onBlur: JSX.EventHandler<HTMLInputElement, FocusEvent>
}

export function TextInput(props: TextInputProps) {
  const [, inputProps] = splitProps(props, ["value", "label", "error"])
  return (
    <TextFieldRoot
      class="w-full"
      validationState={props.error ? "invalid" : "valid"}
    >
      {props.label && (
        <TextFieldLabel>
          {props.label} {props.required && <span>*</span>}
        </TextFieldLabel>
      )}
      <TextField
        {...inputProps}
        id={props.name}
        value={props.value || ""}
        aria-invalid={!!props.error}
        aria-errormessage={`${props.name}-error`}
      />
      {props.error && (
        <TextFieldErrorMessage>{props.error}</TextFieldErrorMessage>
      )}
    </TextFieldRoot>
  )
}
