import { A, createAsync, useLocation, useNavigate } from "@solidjs/router"
import { createEffect, createSignal, Show } from "solid-js"
import ModeToggle from "./ModeToggle"
import { Button } from "@/components/ui/button"
import { GraduationCap, Pencil, LogIn, LogOut } from "lucide-solid"
import { getUser, logout } from "../supabase/auth"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function Nav() {
  const [isPopoverOpen, setIsPopoverOpen] = createSignal(false)
  const location = useLocation()
  const navigate = useNavigate()

  const userData = createAsync(() => getUser())
  const [user, setUser] = createSignal(userData()?.user || null)

  // Watch userData and update our local user state
  createEffect(() => {
    const currentUser = userData()?.user
    setUser(currentUser || null)
  })

  async function handleSignOut() {
    await logout()
    setIsPopoverOpen(false)
    setUser(null)
    navigate("/auth")
  }

  const active = (path: string) =>
    path == location.pathname
      ? "border-orange-200 saturate-[50%]"
      : "border-transparent"

  return (
    <>
      <nav
        class={`${location.pathname === "/learn" ? "fixed w-full" : "relative"} z-50 bg-background`}
      >
        <ul class="container flex items-center justify-between px-2 py-3 dark:text-orange-200 sm:px-3">
          <li>
            <Button
              as="a"
              href="/"
              class="px-2 text-base font-normal sm:px-4"
              variant="ghost"
            >
              <span class={`border-b-2 ${active("/")} saturate-[50%]`}>
                Home
              </span>
            </Button>
            <Button
              as="a"
              href="/learn"
              class="px-2 text-base font-normal sm:px-4"
              variant="ghost"
            >
              <span class={`border-b-2 ${active("/learn")} saturate-[50%]`}>
                Learn
              </span>
            </Button>
          </li>

          <li class="flex items-center gap-2">
            <Button
              as="a"
              href="/learn/sentence-practice"
              class="px-2 text-base font-normal sm:px-4"
              variant="ghost"
            >
              <span class={`border-b-2 ${active("/about")} saturate-[50%]`}>
                文
              </span>
              <Pencil size="16px" class="text-yellow-400 lg:ml-3" />
            </Button>
            <Button
              as="a"
              href="/learn/conjugation"
              class="px-2 text-base font-normal sm:px-4"
              variant="ghost"
            >
              <span class={`border-b-2 ${active("/about")} saturate-[50%]`}>
                活用
              </span>
              <GraduationCap size="20px" class="text-teal-400 lg:ml-3" />
            </Button>

            <div class="inline-flex saturate-[50%]">
              <ModeToggle />
            </div>

            <Show
              when={user()}
              fallback={
                <Button
                  as="a"
                  href="/auth"
                  variant="ghost"
                  class="flex flex-nowrap items-center p-0 text-base font-normal sm:px-4"
                >
                  <span class="mr-2 text-sm font-bold text-red-500">Login</span>
                  <LogIn class="h-4 w-4 pt-0.5 saturate-[50%]" />
                </Button>
              }
            >
              <Popover
                open={isPopoverOpen()}
                onOpenChange={() => setIsPopoverOpen(!isPopoverOpen())}
              >
                <PopoverTrigger class="h-8 w-8 overflow-hidden rounded-full">
                  <img
                    src={user()?.user_metadata?.avatar_url}
                    alt="Profile"
                    class="h-full w-full object-cover"
                  />
                </PopoverTrigger>
                <PopoverContent
                  showCloseButton={false}
                  class="w-auto min-w-0 p-0"
                >
                  <Button
                    variant="ghost"
                    onClick={handleSignOut}
                    class="inset-0 flex flex-nowrap space-x-2 px-4 py-3 text-sm saturate-[50%] dark:text-orange-200"
                  >
                    <span>Sign out</span> <LogOut class="h-4 w-4 pt-0.5" />
                  </Button>
                </PopoverContent>
              </Popover>
            </Show>
          </li>
        </ul>
      </nav>
      <div
        class={`${location.pathname === "/learn" ? "block h-16" : "hidden"}`}
      />
    </>
  )
}
