import { Accordion } from "@base-ui/react/accordion";
import { Tabs } from "@base-ui/react/tabs";
import { cn } from "@nn/ui";
import {
  ArrowLeft,
  BookOpen,
  ChevronDown,
  Circle,
  CircleCheckBig,
  Clapperboard,
  Ellipsis,
  FileText,
  GraduationCap,
  Hash,
  House,
  Import,
  Package,
  PencilLine,
  PlayCircle,
  Repeat2,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

import { LearningPathProvider, useLearningPath, type LearningPathModule } from "../learn/context";
import { getModuleIcon, getModuleIconClasses } from "../learn/module-helpers";
import { SidebarAuthFooter } from "./sidebar-auth-footer";

type SidebarTab = "menu" | "course";

interface NavigationItem {
  title: string;
  href: string;
  icon: LucideIcon | string;
  className: string;
  // Only some targets exist yet; the rest render as plain anchors.
  ported?: boolean;
}

export const NAVIGATION: { label?: string; items: NavigationItem[] }[] = [
  {
    items: [
      { title: "Home", href: "/dashboard", icon: House, className: "text-primary", ported: true },
      {
        title: "Learning Path",
        href: "/learn",
        icon: BookOpen,
        className: "text-primary",
        ported: true,
      },
      { title: "Real Content", href: "/discover", icon: Clapperboard, className: "text-primary" },
    ],
  },
  {
    label: "Tools",
    items: [
      {
        title: "Vocab",
        href: "/vocab",
        icon: GraduationCap,
        className: "text-orange-600 dark:text-orange-500",
      },
      {
        title: "Sentences",
        href: "/sentence-practice",
        icon: PencilLine,
        className: "text-yellow-600 saturate-[75%] dark:text-yellow-500",
      },
      {
        title: "Conjugation",
        href: "/conjugation",
        icon: Repeat2,
        className: "text-teal-500 dark:text-teal-400",
      },
      {
        title: "Counters",
        href: "/counters",
        icon: Hash,
        className: "text-violet-600 dark:text-violet-400",
      },
      {
        title: "Cheatsheets",
        href: "/cheatsheets",
        icon: FileText,
        className: "text-green-600 opacity-80 dark:text-green-500",
      },
      { title: "Kana", href: "/kana", icon: "あ", className: "text-sky-600 dark:text-sky-500" },
    ],
  },
  {
    label: "Extra",
    items: [
      { title: "Guides", href: "/guides", icon: GraduationCap, className: "text-primary" },
      {
        title: "Extension",
        href: "/guides/nihongo-extension",
        icon: Package,
        className: "text-primary",
      },
      { title: "Import", href: "/import", icon: Import, className: "text-primary" },
      { title: "Misc", href: "/misc", icon: Ellipsis, className: "text-primary" },
    ],
  },
];

export function Sidebar() {
  const [tab, setTab] = useState<SidebarTab>(
    typeof location !== "undefined" && location.pathname.startsWith("/learn") ? "course" : "menu",
  );

  return (
    <div className="h-full">
      <LearningPathProvider>
        <div className="flex h-full flex-col">
          <div
            className={cn(
              "shrink-0 space-y-3 px-6 pt-6 pb-3",
              tab === "course" && "border-b border-border/70",
            )}
          >
            <SidebarBrand />
            <SidebarTabs value={tab} onChange={setTab} />
            {tab === "course" ? (
              <>
                <CourseBackButton />
                <CourseSummary />
              </>
            ) : null}
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto [scrollbar-width:none]">
            {tab === "course" ? <CourseOutline /> : <MenuContent />}
          </div>

          <div className="shrink-0 border-t border-border/70 px-4 py-2">
            <SidebarAuthFooter />
          </div>
        </div>
      </LearningPathProvider>
    </div>
  );
}

function SidebarBrand() {
  return (
    <a href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
      <img src="/icons/ninja.png" alt="" className="-mb-1.25 size-6 2xl:size-8" />
      <span className="text-sm text-muted-foreground 2xl:text-base">Nihongo Ninja</span>
    </a>
  );
}

function SidebarTabs({
  value,
  onChange,
}: {
  value: SidebarTab;
  onChange: (v: SidebarTab) => void;
}) {
  return (
    <Tabs.Root
      value={value}
      onValueChange={(next) => {
        onChange(next as SidebarTab);
      }}
    >
      <Tabs.List className="grid h-8 w-full grid-cols-2 rounded-md bg-transparent p-0">
        {(["menu", "course"] as const).map((tabValue) => (
          <Tabs.Tab
            key={tabValue}
            value={tabValue}
            className="h-6 cursor-pointer rounded-md text-xs capitalize data-active:bg-dynamic-accent/20 data-active:text-dynamic-accent data-active:brightness-125 dark:data-active:bg-dynamic-accent/25"
          >
            {tabValue}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs.Root>
  );
}

export function MenuContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = typeof location === "undefined" ? "" : location.pathname;
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav className="flex flex-col gap-4 px-1 pt-4 pb-4 lg:gap-0 xl:pt-11">
      {NAVIGATION.map((section) => (
        <div key={section.label ?? "main"} className="flex flex-col">
          {section.label === undefined ? null : (
            <div className="pr-6 pb-1.5 pl-6.5 text-[0.6rem] font-semibold tracking-wide text-muted-foreground uppercase 2xl:text-[0.68rem]">
              {section.label}
            </div>
          )}
          {section.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "flex w-full items-center justify-start gap-2 rounded-md py-2.5 pr-6 pl-6.5 text-sm font-medium hover:bg-dynamic-accent/20",
                !item.ported && "opacity-50",
              )}
            >
              {typeof item.icon === "string" ? (
                <span
                  className={cn(
                    "mx-1 flex size-3.5 items-center justify-center font-japanese text-sm font-medium 2xl:size-4 2xl:text-base",
                    item.className,
                    isActive(item.href) && "text-dynamic-accent brightness-150",
                  )}
                >
                  {item.icon}
                </span>
              ) : (
                <item.icon
                  className={cn(
                    "mx-1 size-3.5 2xl:size-4",
                    item.className,
                    isActive(item.href) && "text-dynamic-accent brightness-150",
                  )}
                />
              )}
              <span
                className={cn(
                  "text-[0.78rem] font-medium 2xl:text-[0.85rem]",
                  isActive(item.href) && "text-dynamic-accent brightness-150",
                )}
              >
                {item.title}
              </span>
            </a>
          ))}
        </div>
      ))}
    </nav>
  );
}

function CourseBackButton() {
  return (
    <a
      href="/learn"
      className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      <ArrowLeft className="size-3.5" />
      Back
    </a>
  );
}

function CourseSummary() {
  const { data, selectedPath, isCompleted } = useLearningPath();
  const completedCount =
    data?.chapters.reduce(
      (sum, chapter) => sum + chapter.modules.filter((m) => isCompleted(m.moduleId)).length,
      0,
    ) ?? 0;
  const totalCount = data?.chapters.reduce((sum, chapter) => sum + chapter.modules.length, 0) ?? 0;

  return (
    <div className="pt-1">
      <p className="text-[0.62rem] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
        Active Course
      </p>
      <h2 className="mt-1 truncate text-sm font-semibold text-foreground">
        {selectedPath?.shortName ?? selectedPath?.name}
      </h2>
      <p className="mt-1 text-xs text-muted-foreground">
        {completedCount} / {totalCount} modules complete
      </p>
    </div>
  );
}

function CourseOutline() {
  const { data, preferences, isCompleted } = useLearningPath();
  const [openChapters, setOpenChapters] = useState<string[]>([preferences.activeChapter]);

  useEffect(() => {
    setOpenChapters((current) =>
      current.includes(preferences.activeChapter)
        ? current
        : [...current, preferences.activeChapter],
    );
  }, [preferences.activeChapter]);

  if (data === undefined) {
    return (
      <div className="space-y-3 p-4">
        <div className="h-20 animate-pulse rounded bg-muted/70" />
        <div className="h-28 animate-pulse rounded bg-muted/70" />
        <div className="h-20 animate-pulse rounded bg-muted/70" />
      </div>
    );
  }

  if (data.chapters.length === 0) {
    return (
      <p className="px-6 py-4 text-sm text-muted-foreground">
        This learning path does not have any chapters yet.
      </p>
    );
  }

  return (
    <Accordion.Root
      multiple
      value={openChapters}
      onValueChange={(value) => {
        setOpenChapters(value as string[]);
      }}
    >
      {data.chapters.map((chapter) => {
        const completedCount = chapter.modules.filter((m) => isCompleted(m.moduleId)).length;
        return (
          <Accordion.Item
            key={chapter.slug}
            value={chapter.slug}
            className="border-t border-border/50"
          >
            <Accordion.Header className="sticky top-0 z-20">
              <Accordion.Trigger className="group flex w-full cursor-pointer items-center gap-2 px-6 py-3 text-left font-medium hover:text-dynamic-accent">
                <div className="min-w-0 flex-1">
                  <div className="truncate text-xs font-semibold text-foreground">
                    {chapter.title}
                  </div>
                  <div className="mt-0.5 text-[0.68rem] text-muted-foreground">
                    {completedCount} / {chapter.modules.length} complete
                  </div>
                </div>
                <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-panel-open:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Panel className="px-0">
              <div className="border-t border-border/40 py-1">
                {chapter.modules.map((module, index) => (
                  <CourseModuleLink
                    key={module.moduleId}
                    module={module}
                    index={index}
                    completed={isCompleted(module.moduleId)}
                  />
                ))}
              </div>
            </Accordion.Panel>
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
}

function CourseModuleLink({
  module,
  index,
  completed,
}: {
  module: LearningPathModule;
  index: number;
  completed: boolean;
}) {
  const ModuleIcon = getModuleIcon(module.module.module_type);
  const pathname = typeof location === "undefined" ? "" : location.pathname;
  const active = pathname === module.linkTo.to;

  const statusIcon = completed ? (
    <CircleCheckBig className="size-3.5 text-dynamic-accent" />
  ) : active ? (
    <PlayCircle className="size-3.5 text-dynamic-accent" />
  ) : (
    <Circle className="size-3 text-muted-foreground/45" />
  );

  const content = (
    <div
      className={cn(
        "flex items-center gap-2 px-6 py-2 text-xs",
        active ? "text-dynamic-accent" : "text-muted-foreground hover:text-foreground",
        completed && "bg-dynamic-accent/8 text-dynamic-accent",
        module.disabled && "cursor-not-allowed opacity-50",
      )}
    >
      <span className="shrink-0">{statusIcon}</span>
      <span className="min-w-0 flex-1 truncate">
        {index + 1}. {module.module.title}
      </span>
      <ModuleIcon
        className={cn("size-3.5 shrink-0", getModuleIconClasses(module.module.module_type))}
      />
    </div>
  );

  if (module.disabled) return content;
  return <a href={module.linkTo.to}>{content}</a>;
}
