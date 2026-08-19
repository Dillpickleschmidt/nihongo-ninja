import { convexQuery } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import { Search } from "@nn/ui/icons";
import { Select } from "@nn/ui/select";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";

import { usePreferences } from "../../../preferences";
import { DeckCard } from "../../components/deck-card";
import { useVocab, type Deck, type Folder } from "../../context";
import { getFolderPath, getRootFolders, getRootOrphanDecks } from "../../utils/hierarchy";
import { ChapterAccordion } from "./chapter-accordion";
import { UserFolderContent } from "./user-folder-content";
import { filterDecks, type MenuGroup, type MenuItem } from "./utils";

export function FolderBrowser({
  folders,
  decks,
  chapterFromUrl,
  className,
}: {
  folders: Folder[];
  decks: Deck[];
  chapterFromUrl: string | undefined;
  className?: string;
}) {
  const { preferences } = usePreferences();
  useVocab();

  const rootFolders = getRootFolders(folders);
  const orphanDecks = getRootOrphanDecks(decks);

  const [search, setSearch] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);

  const menuGroups = useMemo((): MenuGroup[] => {
    const groups: MenuGroup[] = [];

    const pathItems: MenuItem[] = [];
    for (const f of rootFolders) {
      if (f.source === "built-in") {
        pathItems.push({ id: f.id, label: f.folderName, type: "built-in" });
      } else if (f.source === "user" && f.learningPathId) {
        pathItems.push({ id: f.id, label: f.folderName, type: "learning-path" });
      }
    }
    if (pathItems.length > 0) groups.push({ label: "Learning Paths", options: pathItems });

    const folderItems: MenuItem[] = [];
    for (const f of rootFolders) {
      if (f.source === "user" && !f.learningPathId) {
        folderItems.push({ id: f.id, label: f.folderName, type: "user" });
      }
    }
    if (orphanDecks.length > 0) {
      folderItems.push({ id: "unsorted", label: "Unsorted", type: "unsorted" });
    }
    if (folderItems.length > 0) groups.push({ label: "My Folders", options: folderItems });

    return groups;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [folders, decks]);

  const allItems = useMemo(() => menuGroups.flatMap((g) => g.options), [menuGroups]);

  // The dashboard renders this only after data has loaded, so seeding
  // selection from data at first render is safe.
  const [selectedId, setSelectedId] = useState<string | null>(() => {
    const active = preferences.activeLearningPath;
    return (allItems.find((m) => m.id === active) ?? allItems[0])?.id ?? null;
  });
  const selected = allItems.find((m) => m.id === selectedId) ?? null;

  const { data: indexData } = useQuery({
    ...convexQuery(api.api.vocabulary.getVocabIndex, {
      scopeId: selected?.id === "unsorted" ? "" : (selected?.id ?? ""),
    }),
    enabled: searchFocused && selected !== null,
  });

  // Name/description matching stays within the selected scope, like the
  // term index — a match elsewhere would suppress the no-results state.
  const scopeDecks = useMemo((): Deck[] => {
    if (!selected) return [];
    if (selected.type === "unsorted") return orphanDecks;
    return decks.filter(
      (d) => d.folderId && getFolderPath(d.folderId, folders)[0]?.id === selected.id,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, decks, folders]);

  const matchingDeckIds = useMemo((): Set<string> | null => {
    const q = search.trim().toLowerCase();
    if (!q) return null;

    const matches = new Set<string>();
    for (const deck of scopeDecks) {
      if (
        deck.deckName.toLowerCase().includes(q) ||
        deck.deckDescription?.toLowerCase().includes(q)
      ) {
        matches.add(deck.id);
      }
    }
    for (const entry of indexData?.deckTerms ?? []) {
      if (entry.terms.some((term) => term.includes(q))) {
        matches.add(entry.deckId);
      }
    }
    return matches;
  }, [search, scopeDecks, indexData]);

  return (
    <div className={className}>
      <div className="mb-6 flex flex-wrap items-center justify-end gap-3 sm:justify-between">
        <h2 className="hidden text-sm font-semibold text-foreground sm:block">
          All Decks &amp; Folders
        </h2>

        <div className="flex items-center gap-2">
          <Select
            value={selectedId}
            onValueChange={setSelectedId}
            groups={menuGroups.map((group) => ({
              label: group.label,
              options: group.options.map((item) => ({ value: item.id, label: item.label })),
            }))}
            triggerClassName="flex h-9 w-auto min-w-48 cursor-pointer items-center justify-between gap-2 rounded-md border border-border/60 bg-card/70 px-3 font-excalifont text-sm text-foreground hover:bg-card dark:border-0 dark:bg-white/[0.04] dark:text-white/70 dark:hover:bg-white/[0.06]"
            popupClassName="backdrop-blur-2xl dark:border-dynamic-accent/20 dark:bg-[color-mix(in_srgb,var(--dynamic-accent)_15%,rgb(10_10_10_/_0.7))]"
          />

          <div className="relative w-48 sm:w-56">
            <Search className="pointer-events-none absolute top-1/2 left-3 z-10 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search decks..."
              value={search}
              onChange={(e) => {
                setSearch(e.currentTarget.value);
              }}
              onFocus={() => {
                setSearchFocused(true);
              }}
              className="h-9 w-full rounded-md border border-border/60 bg-card/70 pl-9 text-sm backdrop-blur-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring dark:border-card-foreground/20 dark:bg-card/40"
            />
          </div>
        </div>
      </div>

      {(selected?.type === "built-in" || selected?.type === "learning-path") && (
        <ChapterAccordion
          folderId={selected.id}
          folders={folders}
          decks={decks}
          matchingDeckIds={matchingDeckIds}
          chapterFromUrl={chapterFromUrl}
        />
      )}

      {selected?.type === "user" && (
        <UserFolderContent
          folderId={selected.id}
          folders={folders}
          decks={decks}
          matchingDeckIds={matchingDeckIds}
        />
      )}

      {selected?.type === "unsorted" && (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filterDecks(orphanDecks, matchingDeckIds).map((deck) => (
            <DeckCard key={deck.id} deck={deck} />
          ))}
        </div>
      )}

      {matchingDeckIds !== null && matchingDeckIds.size === 0 && (
        <div className="py-12 text-center">
          <Search className="mx-auto mb-3 size-10 text-muted-foreground opacity-50" />
          <p className="text-muted-foreground">No results for &quot;{search}&quot;</p>
        </div>
      )}
    </div>
  );
}
