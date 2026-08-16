import { Drawer } from "@base-ui/react/drawer";
import { cn } from "@nn/ui";
import { BookOpen, House, Menu, Search, type LucideIcon } from "lucide-react";

import { MenuContent } from "./sidebar";

// Daily review progress needs the FSRS port; keep 0 until then.
const DAILY_PROGRESS: number = 0;

const NAV_ITEMS: { id: string; label: string; href: string; icon: LucideIcon }[] = [
  { id: "home", label: "Home", href: "/dashboard", icon: House },
  { id: "learn", label: "Learn", href: "/learn", icon: BookOpen },
];

// Interpolate red → yellow → green as daily progress moves 0 → 100.
function getProgressColor(progress: number, opacity = 1): string {
  const clamped = Math.max(0, Math.min(100, progress));
  const red = [239, 68, 68] as const;
  const yellow = [234, 179, 8] as const;
  const green = [34, 197, 94] as const;

  const [from, to, ratio] =
    clamped <= 50
      ? ([red, yellow, clamped / 50] as const)
      : ([yellow, green, (clamped - 50) / 50] as const);

  const channel = (i: 0 | 1 | 2) => Math.round(from[i] + (to[i] - from[i]) * ratio);
  return `rgba(${channel(0)}, ${channel(1)}, ${channel(2)}, ${opacity})`;
}

function ProgressCircle({
  size,
  radius,
  strokeWidth,
  progress,
  progressColor,
  bgColor,
  className,
}: {
  size: number;
  radius: number;
  strokeWidth: number;
  progress: number;
  progressColor: string;
  bgColor: string;
  className?: string;
}) {
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress / 100);
  const center = size / 2;

  return (
    <svg className={cn("-rotate-90", className)} viewBox={`0 0 ${size} ${size}`}>
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        strokeWidth={strokeWidth}
        stroke={bgColor}
      />
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        strokeWidth={strokeWidth}
        stroke={progressColor}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="transition-all duration-500 ease-out"
      />
    </svg>
  );
}

export function BottomNav() {
  const pathname = typeof location === "undefined" ? "" : location.pathname;
  const isActive = (href: string) =>
    href === "/learn" ? pathname.startsWith("/learn") : pathname === href;

  const itemClasses = (active: boolean) =>
    cn(
      "group flex size-10 items-center justify-center rounded-full transition-all duration-200",
      "hover:scale-110 hover:bg-card-foreground/20 hover:dark:bg-card-foreground/60",
      active && "scale-110 bg-card-foreground/10 dark:bg-card-foreground/60",
    );

  const iconClasses = (active: boolean) =>
    cn("size-5 transition-colors duration-200", active ? "text-primary" : "text-primary/60");

  return (
    <div className="fixed right-0 bottom-0 left-0 z-40 lg:hidden">
      <div className="flex items-center justify-center border-t border-card-foreground/50 bg-background/50 px-6 pb-[env(safe-area-inset-bottom)] text-primary shadow-lg shadow-black/10 backdrop-blur-lg">
        <nav className="flex w-100 items-center justify-between">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              aria-label={item.label}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={itemClasses(isActive(item.href))}
            >
              <item.icon className={iconClasses(isActive(item.href))} />
            </a>
          ))}

          <a
            href="/dashboard"
            aria-label="Daily review progress"
            className="group relative flex size-16 items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <ProgressCircle
                size={56}
                radius={18}
                strokeWidth={2.5}
                progress={DAILY_PROGRESS}
                progressColor={getProgressColor(DAILY_PROGRESS)}
                bgColor={getProgressColor(DAILY_PROGRESS, 0.3)}
                className="size-14"
              />
            </div>
            <span className="relative z-10 text-xs font-bold text-primary/80">
              {DAILY_PROGRESS === 100 ? "百" : `${DAILY_PROGRESS}%`}
            </span>
          </a>

          <a
            href="/search"
            aria-label="Search"
            aria-current={isActive("/search") ? "page" : undefined}
            className={itemClasses(isActive("/search"))}
          >
            <Search className={iconClasses(isActive("/search"))} />
          </a>

          <MobileNavSheet />
        </nav>
      </div>
    </div>
  );
}

function MobileNavSheet() {
  return (
    <Drawer.Root swipeDirection="down">
      <Drawer.Trigger
        aria-label="More navigation"
        className="group flex size-10 cursor-pointer items-center justify-center rounded-full transition-all duration-200 hover:scale-110 hover:bg-card-foreground/20 hover:dark:bg-card-foreground/60"
      >
        <Menu className="size-5 text-primary/60 transition-colors duration-200" />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Backdrop className="fixed inset-0 z-50 min-h-dvh bg-black opacity-[calc(0.5*(1-var(--drawer-swipe-progress)))] transition-opacity duration-[450ms] ease-[cubic-bezier(0.32,0.72,0,1)] data-ending-style:opacity-0 data-starting-style:opacity-0 data-swiping:duration-0" />
        <Drawer.Viewport className="fixed inset-0 z-50 flex items-end justify-center">
          <Drawer.Popup className="max-h-[80dvh] w-full [transform:translateY(var(--drawer-swipe-movement-y))] overflow-y-auto overscroll-contain rounded-t-2xl border-t border-border bg-background pb-[env(safe-area-inset-bottom)] transition-transform duration-[450ms] ease-[cubic-bezier(0.32,0.72,0,1)] outline-none data-ending-style:[transform:translateY(100%)] data-starting-style:[transform:translateY(100%)] data-swiping:select-none">
            <Drawer.Content>
              <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-muted-foreground/40" />
              <Drawer.Title className="sr-only">Navigation</Drawer.Title>
              <MenuContent />
            </Drawer.Content>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
