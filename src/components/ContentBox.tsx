import { Show } from "solid-js"
import { Button } from "./ui/button"
import { A } from "@solidjs/router"

type ContentBoxProps = {
  nextButtonText?: string
  nextButtonLink?: string
  children: any
}

export default function ContentBox(props: ContentBoxProps) {
  return (
    <div class="flex w-full justify-center">
      <div class="relative w-full max-w-[825px] bg-background/75">
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
