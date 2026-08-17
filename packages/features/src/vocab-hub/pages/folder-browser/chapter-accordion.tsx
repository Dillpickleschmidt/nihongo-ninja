import { Accordion } from "@base-ui/react/accordion";
import { getChapterDisplayNumber } from "@nn/data/utils/chapter-helpers";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

import { usePreferences } from "../../../preferences";
import { useVocab, type Deck, type Folder } from "../../context";
import { getDecksInFolder, getFolderChildren } from "../../utils/hierarchy";
import { DeckTimelineList } from "./deck-timeline-list";
import { filterDecks } from "./utils";

export function ChapterAccordion({
  folderId,
  folders,
  decks,
  matchingDeckIds,
  chapterFromUrl,
}: {
  folderId: string;
  folders: Folder[];
  decks: Deck[];
  matchingDeckIds: Set<string> | null;
  chapterFromUrl: string | undefined;
}) {
  const { preferences } = usePreferences();
  useVocab();
  const chapters = getFolderChildren(folders, folderId);

  const activeChapterFolderId =
    folderId === preferences.activeLearningPath && preferences.activeChapter
      ? `${folderId}/${preferences.activeChapter}`
      : null;

  const [expandedIds, setExpandedIds] = useState<string[]>(
    chapterFromUrl ? [`${folderId}/${chapterFromUrl}`] : [],
  );

  useEffect(() => {
    if (!chapterFromUrl) return;
    setExpandedIds([`${folderId}/${chapterFromUrl}`]);
    // Delay to allow parent mount animations to settle.
    requestAnimationFrame(() => {
      document.getElementById(chapterFromUrl)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [chapterFromUrl, folderId]);

  const visibleChapters = matchingDeckIds
    ? chapters.filter((chapter) =>
        getDecksInFolder(decks, chapter.id).some((d) => matchingDeckIds.has(d.id)),
      )
    : chapters;

  return (
    <Accordion.Root
      multiple
      value={expandedIds}
      onValueChange={(value) => {
        setExpandedIds(value as string[]);
      }}
    >
      {visibleChapters.map((chapter) => {
        const chapterDecks = filterDecks(getDecksInFolder(decks, chapter.id), matchingDeckIds);
        const isActive = chapter.id === activeChapterFolderId;
        const slug = chapter.id.split("/").pop() ?? chapter.id;
        const displayNum =
          getChapterDisplayNumber(slug) || chapter.folderName.match(/\d+/)?.[0] || "";

        return (
          <Accordion.Item key={chapter.id} value={chapter.id} className="border-0" id={slug}>
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full flex-1 cursor-pointer items-center justify-between py-4 font-excalifont font-medium hover:no-underline">
                <div className="flex items-center gap-2">
                  <div
                    className={`flex size-6 items-center justify-center rounded-md text-xs font-bold ${
                      isActive
                        ? "bg-gradient-to-br from-orange-500/30 to-amber-500/30 text-orange-400"
                        : "bg-muted text-muted-foreground dark:bg-gradient-to-br dark:from-white/10 dark:to-white/5 dark:text-white/50"
                    }`}
                  >
                    {displayNum}
                  </div>
                  <span
                    className={`text-sm font-semibold ${
                      isActive ? "text-orange-400" : "text-foreground/70 dark:text-white/70"
                    }`}
                  >
                    {chapter.folderName}
                  </span>
                  <span className="text-xs text-muted-foreground/60">
                    · {chapterDecks.length} {chapterDecks.length === 1 ? "deck" : "decks"}
                  </span>
                </div>
                <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-panel-open:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Panel>
              <DeckTimelineList decks={chapterDecks} defaultExpanded={chapterFromUrl === slug} />
            </Accordion.Panel>
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
}
