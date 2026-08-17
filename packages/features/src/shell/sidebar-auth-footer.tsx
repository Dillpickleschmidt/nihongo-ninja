import { Popover } from "@base-ui/react/popover";
import { resolveBackground } from "@nn/data/backgrounds/resolve-background";
import { getChapterDisplayNumber } from "@nn/data/utils/chapter-helpers";
import { ChevronDown, ChevronUp, LogIn, LogOut, Settings } from "lucide-react";
import { useState } from "react";

import { authClient } from "../auth/client";
import { BackgroundAssignmentDialog } from "../learn/components/background-assignment-dialog";
import { BackgroundPreviewMedia } from "../learn/components/background-preview-media";
import { usePreferences } from "../preferences";

export function SidebarAuthFooter() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return <div className="mx-2 my-1.5 h-9 animate-pulse rounded-md bg-muted/50" />;
  }

  if (!session) {
    return (
      <a
        href="/auth"
        className="flex h-10 w-full items-center justify-start gap-2 rounded-md px-4 py-2 text-sm font-medium text-primary/60 transition-colors hover:bg-dynamic-accent/20 hover:text-primary"
      >
        <LogIn className="size-3.5 2xl:size-4" />
        Sign In
      </a>
    );
  }

  return <SignedInFooter name={session.user.name} email={session.user.email} />;
}

function SignedInFooter({ name, email }: { name: string; email: string }) {
  const { preferences } = usePreferences();
  const [isBackgroundDialogOpen, setIsBackgroundDialogOpen] = useState(false);

  const initials = name.trim().charAt(0).toUpperCase();
  const backgroundTarget = {
    pathId: preferences.activeLearningPath,
    chapterSlug: preferences.activeChapter,
  };
  const currentBackground = resolveBackground(
    preferences.activeLearningPath,
    preferences.activeChapter,
    preferences.backgroundOverrides,
  ).background;

  const handleSignOut = async () => {
    await authClient.signOut();
    // Full navigation clears every per-user cache.
    window.location.assign("/");
  };

  return (
    <>
      <Popover.Root>
        <Popover.Trigger className="flex h-auto w-full cursor-pointer items-center justify-between gap-3 rounded-md px-2 py-2 text-left text-primary/70 transition-colors hover:bg-dynamic-accent/20 hover:text-primary">
          <div className="flex min-w-0 items-center gap-2.5">
            <div className="flex size-7 items-center justify-center rounded-full bg-dynamic-accent/15">
              <span className="text-xs/none font-semibold text-dynamic-accent">{initials}</span>
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{name}</p>
              {/* Plan label returns with the billing port. */}
              <p className="text-xs text-primary/35">Free plan</p>
            </div>
          </div>
          <ChevronUp className="size-3.5 shrink-0 text-primary/35" />
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Positioner side="top" align="start" sideOffset={8} className="z-50">
            <Popover.Popup className="w-72 rounded-xl border border-white/10 bg-neutral-950 p-3 text-white shadow-xl transition-all outline-none data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{name}</p>
                    <p className="truncate text-xs text-white/45">{email}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setIsBackgroundDialogOpen(true);
                    }}
                    aria-label="Change current chapter background"
                    className="group relative h-10 w-20 shrink-0 cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-colors hover:border-white/20"
                  >
                    <BackgroundPreviewMedia
                      item={currentBackground}
                      width={160}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    <div className="absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-black/35 p-1 text-white/80 backdrop-blur-md transition-colors group-hover:bg-white/15 group-hover:text-white">
                      <ChevronDown className="size-3" />
                    </div>
                  </button>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/45">Current plan</span>
                  <span className="font-medium text-dynamic-accent">Free</span>
                </div>

                <div className="h-px bg-white/10" />

                <div className="grid gap-1">
                  <a
                    href="/settings"
                    className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    <Settings className="size-4" />
                    Settings
                  </a>
                  <button
                    type="button"
                    onClick={() => void handleSignOut()}
                    className="flex w-full cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-red-300"
                  >
                    <LogOut className="size-4" />
                    Sign out
                  </button>
                </div>
              </div>
            </Popover.Popup>
          </Popover.Positioner>
        </Popover.Portal>
      </Popover.Root>

      <BackgroundAssignmentDialog
        open={isBackgroundDialogOpen}
        onOpenChange={setIsBackgroundDialogOpen}
        contextLabel={`Current chapter · Chapter ${getChapterDisplayNumber(preferences.activeChapter)}`}
        target={backgroundTarget}
      />
    </>
  );
}
