import { Button } from "@/components/ui/button"
import { Menu } from "lucide-solid"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import SidebarContent from "./SidebarContent"

export default function Sidebar() {
  return (
    <>
      <div class="left-4 top-20 z-40 flex sm:hidden">
        <Sheet>
          <SheetTrigger class="fixed left-4 top-20 flex h-24 items-center">
            <Button size="icon" variant="ghost" class="">
              <Menu />
            </Button>
            <div class="ml-1 text-muted-foreground">{"<-"}</div>
          </SheetTrigger>
          <SheetContent side="left">
            <h2 class="mr-4 mt-16 pb-6 text-center text-[1.75rem] font-black">
              Modules
            </h2>
            <div class="flex w-full flex-col space-y-6 pl-2 pr-4">
              <SidebarContent inDialog={true} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div class="hidden justify-center pl-6 sm:flex lg:min-w-56 xl:min-w-[17rem] xl:pl-12 2xl:min-w-[430px]">
        <div class="fixed top-16 ml-6 flex min-h-screen flex-col justify-center space-y-6">
          <SidebarContent inDialog={false} />
        </div>
      </div>
    </>
  )
}
