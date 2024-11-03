import { Button } from "@/components/ui/button"
import Menu from "lucide-solid/icons/menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import SidebarContent from "./SidebarContent"

export default function Sidebar() {
  return (
    <>
      {/* Mobile Menu Button */}
      <div class="fixed left-4 top-20 z-40 block sm:hidden">
        <Sheet>
          <SheetTrigger>
            <Button size="icon" variant="ghost">
              <Menu />
            </Button>
            <span class="absolute top-1 ml-1 text-muted-foreground">
              {"<-"}
            </span>
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

      {/* Desktop Sidebar */}
      <div class="hidden w-0 sm:block sm:min-w-12 lg:min-w-56 xl:min-w-[17rem] xl:pl-12 2xl:min-w-[430px] 2xl:pl-20">
        <div class="fixed top-16 ml-6 flex min-h-screen flex-col items-center justify-center space-y-6">
          <SidebarContent inDialog={false} />
        </div>
      </div>
    </>
  )
}
