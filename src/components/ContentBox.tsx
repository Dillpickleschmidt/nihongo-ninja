import { Show } from "solid-js"
import { Button } from "./ui/button"
import { useNavigate } from "@solidjs/router"
import { cva } from "class-variance-authority"
import { cn } from "@/libs/cn"
import { createFrontendClient } from "@/features/supabase/client"
import { useLearnPageContext } from "@/features/learn-page/context/LearnPageContext"

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
  const navigate = useNavigate()
  const supabase = createFrontendClient()
  const {
    user,
    completedModules,
    // setCompletedModules
  } = useLearnPageContext()

  async function handleClick(e: Event, nextButtonLink: string) {
    e.preventDefault()

    // Only record completion if user is logged in
    if (user()) {
      try {
        const modulePath = window.location.pathname.replace(/^\/learn\//, "")
        const { error } = await supabase
          .from("user_module_completions")
          .insert({
            user_id: user()!.id,
            module_path: modulePath,
          })

        if (error) {
          console.error("Error recording module completion:", error)
          // You might want to show an error toast/notification here
        }
      } catch (err) {
        console.error("Error recording module completion:", err)
      }
    }
    // setCompletedModules({
    //   data: [
    //     ...(completedModules()?.data ?? []),
    //     { module_path: window.location.pathname.replace(/^\/learn\//, "") },
    //   ],
    // })

    navigate(nextButtonLink)
  }

  return (
    <div class="flex w-full justify-center">
      <div class={cn(contentBoxVariants({ size: props.size }), props.class)}>
        {props.children}
        <Show when={props.nextButtonLink}>
          <div class="absolute bottom-16 right-16 flex gap-2">
            <Button
              as="a" // so users see the link preview when hovering
              href={props.nextButtonLink}
              variant="outline"
              class="border-green-500/35 bg-green-500/15 hover:bg-green-500/25"
              onClick={(e) => handleClick(e, "/learn")}
            >
              {"<-"} Complete & Return
            </Button>
            <Button
              as="a" // so users see the link preview when hovering
              href={props.nextButtonLink}
              variant="outline"
              class="border-green-500/35 bg-green-500/15 hover:bg-green-500/25"
              onClick={(e) => handleClick(e, props.nextButtonLink!)}
            >
              {props.nextButtonText ?? "Complete & Next ->"}
            </Button>
          </div>
        </Show>
      </div>
    </div>
  )
}
