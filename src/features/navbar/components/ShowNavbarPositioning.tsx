import NavbarContent from "./NavbarContent"

export default function ShowNavbarPositioning() {
  return (
    <>
      <div className="fixed left-0 top-0 z-50 h-[65px] w-full bg-background/[99.9%] text-foreground">
        <NavbarContent />
      </div>
    </>
  )
}
