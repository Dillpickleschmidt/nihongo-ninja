import { convexQuery } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import type { KanjiEntry, VocabularyItem } from "@nn/convex/validators";
import { extractKanjiCharacters } from "@nn/data/utils/text/japanese";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";

import { authClient } from "../../../auth/client";
import { useVocab, type Deck } from "../../context";
import { resolveDeckScopeId } from "../../utils/scope";

export type TabValue = "vocabulary" | "kanji";

export function useDeckView(deck: Deck) {
  const { data: session } = authClient.useSession();
  const authed = !!session;

  const [activeTab, setActiveTab] = useState<TabValue>("vocabulary");
  const [selectedKanji, setSelectedKanji] = useState<string | null>(null);
  const [selectedRadical, setSelectedRadical] = useState<string | null>(null);

  const { data: hierarchyData } = useQuery(
    convexQuery(api.api.hierarchy.getDeckHierarchy, { deckId: deck.id }),
  );
  const hierarchy = hierarchyData?.hierarchy;

  const hierarchyKeys = useMemo(() => {
    if (!hierarchy) return [] as string[];
    return [
      ...new Set([
        ...hierarchy.vocabulary.map((item) => item.word),
        ...hierarchy.kanji.map((item) => item.kanji),
        ...hierarchy.radicals.map((item) => item.radical),
      ]),
    ].sort();
  }, [hierarchy]);

  const fsrsEnabled = authed && hierarchyKeys.length > 0;
  const { data: meaningsCards, isPending: meaningsPending } = useQuery({
    ...convexQuery(api.api.fsrs.getFSRSCardsForItems, {
      keys: hierarchyKeys,
      mode: "meanings",
    }),
    enabled: fsrsEnabled,
  });
  const { data: spellingsCards, isPending: spellingsPending } = useQuery({
    ...convexQuery(api.api.fsrs.getFSRSCardsForItems, {
      keys: hierarchyKeys,
      mode: "spellings",
    }),
    enabled: fsrsEnabled,
  });

  const { folders, decks } = useVocab();
  const scopeId = resolveDeckScopeId(deck.id, decks, folders);
  const { data: vocabIndex } = useQuery(convexQuery(api.api.vocabulary.getVocabIndex, { scopeId }));
  const orderedKeys = vocabIndex?.orderedKeys;

  const { data: knownWordsData } = useQuery({
    ...convexQuery(api.api.vocabulary.getKnownVocabWords, {}),
    enabled: authed,
  });
  const knownWords = knownWordsData ?? [];

  const kanjiToVocab = useMemo(() => {
    if (!hierarchy) return undefined;
    const map = new Map<string, string[]>();
    for (const rel of hierarchy.hierarchy.vocabulary) {
      for (const kanji of rel.kanjiComponents) {
        const existing = map.get(kanji) || [];
        existing.push(rel.word);
        map.set(kanji, existing);
      }
    }
    return map;
  }, [hierarchy]);

  const filteredVocab = useMemo((): VocabularyItem[] | undefined => {
    if (!hierarchy) return undefined;
    if (!selectedKanji) return hierarchy.vocabulary;
    return hierarchy.vocabulary.filter((item) =>
      extractKanjiCharacters(item.word).includes(selectedKanji),
    );
  }, [hierarchy, selectedKanji]);

  const filteredKanji = useMemo((): KanjiEntry[] | undefined => {
    if (!hierarchy) return undefined;
    if (!selectedRadical) return hierarchy.kanji;
    return hierarchy.kanji.filter((k) => k.radicalComponents.includes(selectedRadical));
  }, [hierarchy, selectedRadical]);

  const counts = hierarchy
    ? {
        vocab: hierarchy.vocabulary.length,
        kanji: hierarchy.kanji.length,
        radicals: hierarchy.radicals.length,
      }
    : undefined;

  const dueRows = useMemo(() => {
    if (!meaningsCards || !spellingsCards) return undefined;
    const now = Date.now();
    const countDue = (cards: { dueAt: number }[]) =>
      cards.reduce((count, card) => count + (card.dueAt <= now ? 1 : 0), 0);

    return {
      vocabulary: {
        meanings: {
          hasHistory: meaningsCards.vocabulary.length > 0,
          dueCount: countDue(meaningsCards.vocabulary),
        },
        spellings: {
          hasHistory: spellingsCards.vocabulary.length > 0,
          dueCount: countDue(spellingsCards.vocabulary),
        },
      },
      kanji: {
        meanings: {
          hasHistory: meaningsCards.kanji.length > 0,
          dueCount: countDue(meaningsCards.kanji),
        },
      },
      radicals: {
        meanings: {
          hasHistory: meaningsCards.radical.length > 0,
          dueCount: countDue(meaningsCards.radical),
        },
      },
    };
  }, [meaningsCards, spellingsCards]);

  const dueRowsLoading = fsrsEnabled && (meaningsPending || spellingsPending);

  const toggleKanji = (kanji: string) => {
    if (selectedKanji === kanji) {
      setSelectedKanji(null);
    } else {
      setSelectedKanji(kanji);
      setSelectedRadical(null);
      setActiveTab("vocabulary");
    }
  };

  const toggleRadical = (radical: string) => {
    if (selectedRadical === radical) {
      setSelectedRadical(null);
    } else {
      setSelectedRadical(radical);
      setSelectedKanji(null);
    }
  };

  const clearSelection = () => {
    setSelectedKanji(null);
    setSelectedRadical(null);
  };

  return {
    activeTab,
    setActiveTab,
    selectedKanji,
    selectedRadical,
    filteredVocab,
    filteredKanji,
    kanjiToVocab,
    counts,
    dueRows,
    dueRowsLoading,
    orderedKeys,
    knownWords,
    skippedKanji: hierarchy?.skippedKanji,
    hasSelection: selectedKanji !== null || selectedRadical !== null,
    toggleKanji,
    toggleRadical,
    clearSelection,
  };
}
