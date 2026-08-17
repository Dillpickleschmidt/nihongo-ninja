import { convexQuery } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import { useQuery } from "@tanstack/react-query";

import { authClient } from "../auth/client";

// The Anki adapter returns with the import domain; until then the counts
// come from the built-in FSRS deck only.
export type DueCounts = {
  vocabMeanings: number | undefined;
  vocabSpellings: number | undefined;
  vocabTotal: number | undefined;
  sentences: number | undefined; // placeholder — not tracked yet
};

export function useSrs(): { dueCounts: DueCounts } {
  const { data: session } = authClient.useSession();
  const authed = !!session;

  const { data } = useQuery({
    ...convexQuery(api.api.fsrs.getDueFSRSCardsCount, {}),
    enabled: authed,
  });

  if (!authed) {
    return {
      dueCounts: { vocabMeanings: 0, vocabSpellings: 0, vocabTotal: 0, sentences: undefined },
    };
  }

  if (data === undefined) {
    return {
      dueCounts: {
        vocabMeanings: undefined,
        vocabSpellings: undefined,
        vocabTotal: undefined,
        sentences: undefined,
      },
    };
  }

  return {
    dueCounts: {
      vocabMeanings: data.meanings,
      vocabSpellings: data.spellings,
      vocabTotal: data.meanings + data.spellings,
      sentences: undefined,
    },
  };
}
