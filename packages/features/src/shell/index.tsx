import { BottomNav } from "./bottom-nav";
import { Sidebar } from "./sidebar";

// Web app shell: fixed sidebar on desktop, bottom nav on mobile.
export function HomeShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 lg:block 2xl:w-80">
        <Sidebar />
      </aside>
      <div className="pb-20 lg:pb-0 lg:pl-72 2xl:pl-80">{children}</div>
      <BottomNav />
    </div>
  );
}
