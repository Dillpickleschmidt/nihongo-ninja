import { A, useLocation } from "@solidjs/router"
import ModeToggle from "./ModeToggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function Nav() {
  const location = useLocation()
  const active = (path: string) =>
    path == location.pathname
      ? "border-orange-200 saturate-[50%]"
      : "border-transparent hover:border-orange-200 saturate-[50%]"

  return (
    <nav class="relative z-50 bg-background">
      <ul class="container flex items-center p-3 saturate-[50%] dark:text-orange-200">
        <NavigationMenu>
          <NavigationMenuItem>
            <A href="/">
              <NavigationMenuTrigger
                class="text-base font-normal"
                withArrow={false}
              >
                <span class={`border-b-2 ${active("/")}`}>Home</span>
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
              <NavigationMenuTrigger class="pl-3 pr-2 text-base font-normal">
                <span class={`border-b-2 ${active("/learn")}`}>Learn</span>
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
            class="text-base font-normal"
            withArrow={false}
          >
            <span class={`border-b-2 ${active("/about")}`}>About</span>
          </NavigationMenuTrigger>
        </NavigationMenu>
        <li>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  )
}
