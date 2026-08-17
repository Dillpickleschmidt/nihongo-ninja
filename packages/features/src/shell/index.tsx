import { BottomNav } from "./bottom-nav";
import { Sidebar } from "./sidebar";

// Web app shell: fixed sidebar on desktop, bottom nav on mobile. The
// sidebar width lives in a variable so the content can pad left by it and,
// on wide screens, pad right to keep the content centered in the viewport.
export function HomeShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh [--sidebar-width:0px] min-[1700px]:[--sidebar-width:24rem] xl:[--sidebar-width:20rem]">
      <aside className="fixed top-0 left-0 z-50 hidden h-dvh w-(--sidebar-width) xl:block">
        <Sidebar />
      </aside>
      <div className="pb-20 pl-(--sidebar-width) xl:pb-0 2xl:pr-[calc(var(--sidebar-width)-4rem)]">
        {children}
      </div>
      <BottomNav />
    </div>
  );
}
