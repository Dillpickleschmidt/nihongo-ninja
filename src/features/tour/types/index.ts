// types.ts
import { JSX } from "solid-js"

export type TourStep = {
  target?: string // CSS selector for the element to highlight
  title?: string | JSX.Element
  content: string | JSX.Element
  placement?: // Placement of the popover
  | "bottom"
    | "bottom-end"
    | "bottom-start"
    | "left"
    | "left-end"
    | "left-start"
    | "right"
    | "right-end"
    | "right-start"
    | "top"
    | "top-end"
    | "top-start"
  dialog?: boolean // Show as a dialog instead of a popover
  link?: string // Page to navigate to when step is completed
  class?: string // Custom class for the content of this step
  overflowPadding?: number // Padding from the edge of the screen
  scroll?: boolean // Scroll to target element when step changes
  onNextFunction?: () => void // Callback for when the next button is clicked
  onPrevFunction?: () => void // Callback for when the previous button is clicked
}
