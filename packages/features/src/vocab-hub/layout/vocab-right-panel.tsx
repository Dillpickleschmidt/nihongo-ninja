import { usePathname } from "@nn/router";
import { useEffect, useMemo } from "react";

import { useVocab } from "../context";
import { resolveDeckFromPath, resolveFolderFromPath } from "../utils/navigation";
import { SidebarHierarchyView } from "./sidebar-hierarchy-view";

export function VocabRightPanel() {
  const pathname = usePathname();
  const { decks, folders, initializeExpandedFromDeck, initializeExpandedFromFolder } = useVocab();

  const currentTarget = useMemo(() => {
    if (pathname === "/vocab" || pathname === "/vocab/create" || pathname === "/vocab/browse") {
      return null;
    }

    const editMatch = pathname.match(/^\/vocab\/deck\/([^/]+)\/edit$/);
    if (editMatch?.[1]) return { type: "deck" as const, id: editMatch[1] };

    const segments = pathname.replace("/vocab/", "").split("/").filter(Boolean);
    if (segments.length === 0) return null;

    const deck = resolveDeckFromPath(segments, decks);
    if (deck) return { type: "deck" as const, id: deck.id };

    const folder = resolveFolderFromPath(segments, folders);
    if (folder) return { type: "folder" as const, id: folder.id };

    return null;
  }, [pathname, decks, folders]);

  const selectedDeckId = currentTarget?.type === "deck" ? currentTarget.id : null;

  useEffect(() => {
    if (!currentTarget) return;
    if (currentTarget.type === "deck") {
      initializeExpandedFromDeck(currentTarget.id);
    } else {
      initializeExpandedFromFolder(currentTarget.id);
    }
  }, [currentTarget, initializeExpandedFromDeck, initializeExpandedFromFolder]);

  return <SidebarHierarchyView selectedDeckId={selectedDeckId} />;
}
