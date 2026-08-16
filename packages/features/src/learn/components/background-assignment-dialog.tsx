import { Dialog } from "@base-ui/react/dialog";
import { convexQuery } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import { BUILT_IN_BACKGROUND_LIST } from "@nn/data/backgrounds/catalog";
import {
  applyBackgroundScope,
  applyChapterBackgroundSelection,
  clearBackgroundLock,
  clearChapterBackground,
  getActiveBackgroundLock,
  getChapterBackgroundSelection,
  type BackgroundApplyScope,
  type BackgroundLock,
  type BackgroundTarget,
} from "@nn/data/backgrounds/overrides";
import { resolveBackground } from "@nn/data/backgrounds/resolve-background";
import { getChapterDisplayNumber } from "@nn/data/utils/chapter-helpers";
import { cn } from "@nn/ui";
import { useQuery } from "@tanstack/react-query";
import { Check, Lock, Upload, X } from "lucide-react";
import { useRef, useState } from "react";

import { usePreferences } from "../../preferences";
import { BackgroundPreviewMedia, type BackgroundPreviewItem } from "./background-preview-media";

// Sign-in and uploads activate with the auth port.
const IS_SIGNED_IN = false;

type UploadState =
  | { status: "idle" }
  | { status: "uploading" }
  | { status: "error"; message: string };

export function BackgroundAssignmentDialog({
  open,
  onOpenChange,
  onOpenChangeComplete,
  contextLabel,
  target,
  getPathLabel,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onOpenChangeComplete?: (open: boolean) => void;
  contextLabel: string;
  target: BackgroundTarget;
  getPathLabel?: (pathId: string) => string;
}) {
  const { preferences, setPreference } = usePreferences();
  const [applyScope, setApplyScope] = useState<BackgroundApplyScope>("chapter");
  const [uploadState, setUploadState] = useState<UploadState>({ status: "idle" });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const overrides = preferences.backgroundOverrides;
  const activeLock = getActiveBackgroundLock(overrides, target);
  const lockedByAnotherChapter = isLockedByAnotherChapter(activeLock, target);
  const pathLabel = (pathId: string) => getPathLabel?.(pathId) ?? pathId;
  const resolvedBackground = resolveBackground(target.pathId, target.chapterSlug, overrides);
  const assignedSelection = getChapterBackgroundSelection(overrides, target);
  const highlightId = assignedSelection?.id ?? resolvedBackground.selection.id;

  const highlighted = BUILT_IN_BACKGROUND_LIST.find((b) => b.id === highlightId);
  const orderedBuiltIns = highlighted
    ? [highlighted, ...BUILT_IN_BACKGROUND_LIST.filter((b) => b.id !== highlightId)]
    : BUILT_IN_BACKGROUND_LIST;

  const selectBackground = (selection: BackgroundPreviewItem) => {
    setPreference(
      "backgroundOverrides",
      applyChapterBackgroundSelection(overrides, {
        ...target,
        selection: {
          id: selection.id,
          sourceWidth: selection.sourceWidth,
          mediaType: selection.mediaType,
        },
        scope: activeLock?.scope ?? applyScope,
      }),
    );
  };

  const changeApplyScope = (scope: BackgroundApplyScope) => {
    setApplyScope(scope);
    setPreference("backgroundOverrides", applyBackgroundScope(overrides, { ...target, scope }));
  };

  const clearChapter = () => {
    setPreference("backgroundOverrides", clearChapterBackground(overrides, target));
    setApplyScope("chapter");
  };

  const unlockBackground = () => {
    if (!activeLock) return;

    const source = `${pathLabel(activeLock.pathId)} · Chapter ${getChapterDisplayNumber(activeLock.chapterSlug)}`;
    const message =
      activeLock.scope === "global"
        ? `This background is currently locked everywhere from ${source}.\n\nUnlock and return to chapter-specific backgrounds?`
        : `This background is currently locked for ${pathLabel(activeLock.pathId)} from Chapter ${getChapterDisplayNumber(activeLock.chapterSlug)}.\n\nUnlock and return to chapter-specific backgrounds for this learning path?`;
    if (!window.confirm(message)) return;

    setPreference("backgroundOverrides", clearBackgroundLock(overrides));
    setApplyScope("chapter");
  };

  const handleFilePicked = async (file: File) => {
    setUploadState({ status: "uploading" });
    try {
      const width = await readImageWidth(file);
      const res = await fetch("/api/images/upload", {
        method: "POST",
        headers: { "content-type": file.type, "x-image-width": String(width) },
        body: file,
        signal: AbortSignal.timeout(60_000),
      });
      if (!res.ok) {
        const message = await res.text();
        throw new Error(message || `Image upload failed (${res.status})`);
      }
      const upload: unknown = await res.json();
      if (
        typeof upload !== "object" ||
        upload === null ||
        typeof (upload as { imageId?: unknown }).imageId !== "string"
      ) {
        throw new Error("Image upload returned an unexpected response.");
      }
      selectBackground(uploadPreviewItem((upload as { imageId: string }).imageId, width, "image"));
      setUploadState({ status: "idle" });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Upload failed.";
      setUploadState({ status: "error", message });
    }
  };

  return (
    <Dialog.Root
      open={open}
      onOpenChange={onOpenChange}
      onOpenChangeComplete={onOpenChangeComplete}
    >
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/55 transition-opacity data-ending-style:opacity-0 data-starting-style:opacity-0" />
        <Dialog.Popup
          className="fixed top-1/2 left-1/2 z-50 max-h-[88vh] w-full max-w-[calc(100vw-2rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl border border-dynamic-accent/20 p-0 text-white shadow-xl backdrop-blur-2xl transition-all outline-none data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0 sm:max-w-3xl"
          style={{
            backgroundColor: "color-mix(in srgb, var(--dynamic-accent) 12%, rgb(10 10 10 / 0.78))",
          }}
        >
          <header className="relative border-b border-white/5 px-6 py-4">
            <Dialog.Title className="text-base font-semibold text-white">
              Choose a background
            </Dialog.Title>
            <p className="mt-0.5 font-excalifont text-sm text-white/55">{contextLabel}</p>
            <Dialog.Close
              aria-label="Close"
              className="absolute top-4 right-4 cursor-pointer rounded-md p-1 text-white/60 transition-colors hover:text-white"
            >
              <X className="size-4" />
            </Dialog.Close>
          </header>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/avif"
            className="hidden"
            onChange={(e) => {
              const file = e.currentTarget.files?.[0];
              e.currentTarget.value = "";
              if (file) void handleFilePicked(file);
            }}
          />

          <div className="space-y-7 px-6 py-6">
            <BackgroundScopeSection
              activeLock={activeLock}
              target={target}
              applyScope={applyScope}
              pathLabel={pathLabel}
              onApplyScopeChange={changeApplyScope}
              onUnlock={unlockBackground}
            />

            <section
              inert={lockedByAnotherChapter}
              aria-disabled={lockedByAnotherChapter}
              className={cn(lockedByAnotherChapter && "opacity-45")}
            >
              <SectionHeader
                label="Your uploads"
                trailing={
                  <button
                    type="button"
                    disabled={!IS_SIGNED_IN || uploadState.status === "uploading"}
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-60"
                  >
                    <Upload className="size-3.5" />
                    {uploadState.status === "uploading" ? "Uploading…" : "Upload"}
                  </button>
                }
              />
              <BackgroundUploadsGrid
                open={open}
                signedIn={IS_SIGNED_IN}
                assignedBackgroundId={assignedSelection?.id}
                effectiveBackgroundId={resolvedBackground.selection.id}
                onSelect={selectBackground}
              />
              {uploadState.status === "error" ? (
                <p className="mt-3 text-sm text-red-300/90">{uploadState.message}</p>
              ) : null}
            </section>

            <section
              inert={lockedByAnotherChapter}
              aria-disabled={lockedByAnotherChapter}
              className={cn(lockedByAnotherChapter && "opacity-45")}
            >
              <SectionHeader
                label="Built-in"
                trailing={
                  assignedSelection === undefined ? undefined : (
                    <button
                      type="button"
                      onClick={clearChapter}
                      className="cursor-pointer text-sm text-white/55 underline-offset-2 transition-colors hover:text-white hover:underline"
                    >
                      Clear chapter background
                    </button>
                  )
                }
              />
              <BackgroundTileGrid
                items={orderedBuiltIns.map((background) => ({
                  id: background.id,
                  item: background,
                }))}
                assignedBackgroundId={assignedSelection?.id}
                effectiveBackgroundId={resolvedBackground.selection.id}
                onSelect={selectBackground}
              />
            </section>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

const SCOPE_OPTIONS = [
  ["chapter", "This chapter"],
  ["path", "This learning path"],
  ["global", "Everywhere"],
] as const;

function BackgroundScopeSection({
  activeLock,
  target,
  applyScope,
  pathLabel,
  onApplyScopeChange,
  onUnlock,
}: {
  activeLock: BackgroundLock | null;
  target: BackgroundTarget;
  applyScope: BackgroundApplyScope;
  pathLabel: (pathId: string) => string;
  onApplyScopeChange: (scope: BackgroundApplyScope) => void;
  onUnlock: () => void;
}) {
  const lockedByAnotherChapter = isLockedByAnotherChapter(activeLock, target);
  const selectedScope = activeLock?.scope ?? applyScope;

  return (
    <section>
      {lockedByAnotherChapter && activeLock ? (
        <div className="mb-4 flex items-center justify-between gap-3 border-b border-amber-200/15 pb-3 text-sm text-amber-50">
          <div className="flex items-center gap-2">
            <Lock className="size-4" />
            <span>
              {activeLock.scope === "global"
                ? "Locked everywhere"
                : "Locked for this learning path"}{" "}
              from {pathLabel(activeLock.pathId)} · Chapter{" "}
              {getChapterDisplayNumber(activeLock.chapterSlug)}
            </span>
          </div>
          <button
            type="button"
            onClick={onUnlock}
            className="shrink-0 cursor-pointer text-xs font-medium text-amber-100 underline-offset-2 transition-colors hover:text-white hover:underline"
          >
            Unlock
          </button>
        </div>
      ) : null}

      <div className="mb-3 text-[11px] tracking-widest text-white/45 uppercase">
        Apply selected background to
      </div>
      <div className="flex flex-wrap gap-2">
        {SCOPE_OPTIONS.map(([value, label]) => (
          <button
            key={value}
            type="button"
            disabled={lockedByAnotherChapter}
            onClick={() => {
              onApplyScopeChange(value);
            }}
            className={cn(
              "cursor-pointer rounded-full px-3 py-1.5 text-left text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-45",
              selectedScope === value
                ? "bg-dynamic-accent/90 text-black"
                : "bg-white/7 text-white/70 hover:bg-white/12 hover:text-white",
            )}
          >
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}

function isLockedByAnotherChapter(lock: BackgroundLock | null, target: BackgroundTarget) {
  return !!(lock && (lock.pathId !== target.pathId || lock.chapterSlug !== target.chapterSlug));
}

function SectionHeader({ label, trailing }: { label: string; trailing?: React.ReactNode }) {
  return (
    <div className="mb-3 flex items-center justify-between gap-4">
      <h3 className="text-[11px] tracking-widest text-white/45 uppercase">{label}</h3>
      {trailing}
    </div>
  );
}

function uploadPreviewItem(
  imageId: string,
  sourceWidth: number,
  mediaType: "image" | "gif",
): BackgroundPreviewItem {
  return {
    id: imageId,
    mediaType,
    src: `/api/images/private/${encodeURIComponent(imageId)}`,
    sourceWidth,
    layout: "horizontal",
    opacity: 0.4,
  };
}

function BackgroundUploadsGrid({
  open,
  signedIn,
  assignedBackgroundId,
  effectiveBackgroundId,
  onSelect,
}: {
  open: boolean;
  signedIn: boolean;
  assignedBackgroundId?: string;
  effectiveBackgroundId?: string;
  onSelect: (item: BackgroundPreviewItem) => void;
}) {
  const { data: uploads } = useQuery({
    ...convexQuery(api.api.images.listMyImageAssets, {}),
    enabled: open && signedIn,
  });

  if (!signedIn) {
    return (
      <div className="flex items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/2 px-4 py-8 text-center">
        <p className="text-sm text-white/65">Sign in to upload backgrounds</p>
      </div>
    );
  }

  if (uploads === undefined) return <UploadsLoadingState />;

  if (uploads.length === 0) {
    return (
      <div className="flex items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/2 px-4 py-8 text-center">
        <div>
          <p className="text-sm text-white/65">No uploads yet</p>
          <p className="mt-1 font-excalifont text-sm text-white/40">
            Upload an image to use it as a background
          </p>
        </div>
      </div>
    );
  }

  return (
    <BackgroundTileGrid
      items={uploads.map((asset) => ({
        id: asset.imageId,
        item: uploadPreviewItem(asset.imageId, asset.sourceWidth, asset.kind.mediaType),
      }))}
      assignedBackgroundId={assignedBackgroundId}
      effectiveBackgroundId={effectiveBackgroundId}
      onSelect={onSelect}
    />
  );
}

function UploadsLoadingState() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {[0, 1, 2].map((i) => (
        <div key={i} className="aspect-[16/10] animate-pulse rounded-xl bg-white/5" />
      ))}
    </div>
  );
}

function BackgroundTileGrid({
  items,
  assignedBackgroundId,
  effectiveBackgroundId,
  onSelect,
}: {
  items: Array<{ id: string; item: BackgroundPreviewItem }>;
  assignedBackgroundId?: string;
  effectiveBackgroundId?: string;
  onSelect: (item: BackgroundPreviewItem) => void;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ id, item }) => {
        const assigned = assignedBackgroundId === id;
        const effective = !assigned && effectiveBackgroundId === id;

        return (
          <button
            key={id}
            type="button"
            aria-label={`Use background ${id}`}
            aria-pressed={assigned}
            onClick={() => {
              onSelect(item);
            }}
            className={cn(
              "group relative cursor-pointer overflow-hidden rounded-xl border bg-white/2 text-left transition-colors",
              assigned ? "border-dynamic-accent/60" : "border-white/5 hover:border-white/20",
            )}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
              <BackgroundPreviewMedia
                item={item}
                width={320}
                height={200}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              {assigned ? (
                <div className="absolute top-2 right-2 flex size-6 items-center justify-center rounded-full bg-dynamic-accent text-black shadow-sm">
                  <Check className="size-3.5" strokeWidth={3} />
                </div>
              ) : effective ? (
                <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 font-excalifont text-xs text-white/80 backdrop-blur-sm">
                  <span className="size-1 rounded-full bg-white/80" />
                  In use
                </div>
              ) : null}
            </div>
          </button>
        );
      })}
    </div>
  );
}

async function readImageWidth(file: File): Promise<number> {
  const url = URL.createObjectURL(file);
  try {
    const img = new window.Image();
    img.src = url;
    await img.decode();
    return img.naturalWidth;
  } finally {
    URL.revokeObjectURL(url);
  }
}
