import { A, useLocation } from "@solidjs/router"
import ModeToggle from "./ModeToggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { GraduationCap, Pencil } from "lucide-solid"

export default function Nav() {
  const location = useLocation()
  const active = (path: string) =>
    path == location.pathname
      ? "border-orange-200 saturate-[50%]"
      : "border-transparent hover:border-orange-200 saturate-[50%]"

  return (
    <nav class="relative z-50 bg-background">
      <ul class="container flex items-center justify-between px-2 py-3 dark:text-orange-200 sm:px-3">
        <NavigationMenu>
          <NavigationMenuItem>
            <A href="/">
              <NavigationMenuTrigger
                class="px-3 text-base font-normal sm:px-4"
                withArrow={false}
              >
                <span class={`border-b-2 ${active("/")} saturate-[50%]`}>
                  Home
                </span>
              </NavigationMenuTrigger>
            </A>
            <NavigationMenuContent>
              <div class="flex h-48 w-64 items-center justify-center">
                Home Preview
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <A href="/learn">
              <NavigationMenuTrigger class="pl-2 pr-1 text-base font-normal sm:pl-3 sm:pr-2">
                <span class={`border-b-2 ${active("/learn")} saturate-[50%]`}>
                  Learn
                </span>
              </NavigationMenuTrigger>
            </A>
            <NavigationMenuContent>
              <NavigationMenuLink class="flex h-96 w-72 items-center justify-center">
                <div>Learn Options</div>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuTrigger
            as="a"
            href="/about"
            class="px-3 text-base font-normal sm:px-4"
            withArrow={false}
          >
            <span class={`border-b-2 ${active("/about")} saturate-[50%]`}>
              About
            </span>
          </NavigationMenuTrigger>
        </NavigationMenu>
        <li>
          <Button
            as="a"
            href="/learn/sentence-practice"
            class="px-3 text-base font-normal sm:px-4"
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
            class="px-3 text-base font-normal sm:px-4"
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
  )
}
