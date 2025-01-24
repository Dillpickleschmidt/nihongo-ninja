// Sidebar.tsx
import { Button } from "@/components/ui/button"
import Menu from "lucide-solid/icons/menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import SidebarContent from "./SidebarContent"
import SidebarTour from "./SidebarTour"

export default function Sidebar(props: {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}) {
  return (
    <>
      {/* Mobile Menu Button */}
      <div class="fixed left-4 top-28 z-[100] block sm:hidden">
        <Sheet open={props.isOpen} onOpenChange={props.setIsOpen}>
          <Button
            size="icon"
            variant="ghost"
            class="relative"
            onClick={() => props.setIsOpen(!props.isOpen)}
          >
            <Menu />
            <span class="absolute left-full top-1 ml-1 text-muted-foreground">
              {"<-"}
            </span>
          </Button>
          <SheetContent side="left" class="w-[280px] sm:w-[340px]">
            <SidebarTour setIsSidebarOpen={props.setIsOpen} />
            <div class="mt-16">
              <h2 class="pb-6 text-center text-[1.75rem] font-black">
                Modules
              </h2>
              <div class="flex w-full flex-col space-y-4 px-2">
                <SidebarContent inDialog={true} />
              </div>
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
