import { A, useLocation } from "@solidjs/router"
import ModeToggle from "./ModeToggle"
import { Button } from "@/components/ui/button"
import { GraduationCap, Pencil } from "lucide-solid"

export default function Nav() {
  const location = useLocation()
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
          <li>
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
          </li>
        </ul>
      </nav>
      <div
        class={`${location.pathname === "/learn" ? "block h-16" : "hidden"}`}
      />
    </>
  )
}
