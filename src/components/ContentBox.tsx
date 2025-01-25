import { Show } from "solid-js"
import { Button } from "./ui/button"
import { A } from "@solidjs/router"
import { cva } from "class-variance-authority"
import { cn } from "@/libs/cn"

type ContentBoxProps = {
  nextButtonText?: string
  nextButtonLink?: string
  children: any
  size?: "default" | "lg"
  class?: string
}

export const contentBoxVariants = cva("relative w-full bg-background/75", {
  variants: {
    size: {
      default: "max-w-[825px] ",
      lg: "max-w-5xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

export default function ContentBox(props: ContentBoxProps) {
  return (
    <div class="flex w-full justify-center">
      <div class={cn(contentBoxVariants({ size: props.size }), props.class)}>
        {props.children}
        <Show when={props.nextButtonText && props.nextButtonLink}>
          <div class="absolute bottom-16 right-16">
            <A href={props.nextButtonLink!}>
              <Button>{props.nextButtonText}</Button>
            </A>
          </div>
        </Show>
      </div>
    </div>
  )
}
