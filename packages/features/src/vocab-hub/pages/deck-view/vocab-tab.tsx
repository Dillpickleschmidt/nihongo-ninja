import type { VocabularyItem } from "@nn/convex/validators";
import { LoaderCircle } from "lucide-react";

import { VocabularyCard } from "./vocabulary-card";

export function VocabTab({ vocabulary }: { vocabulary?: VocabularyItem[] }) {
  if (vocabulary === undefined) {
    return (
      <div className="flex items-center justify-center py-12">
        <LoaderCircle className="h-8 w-8 animate-spin text-muted-foreground/50" />
      </div>
    );
  }

  if (vocabulary.length === 0) {
    return (
      <p className="py-8 text-center text-sm text-muted-foreground">
        No vocabulary items to display.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {vocabulary.map((item, index) => (
        <VocabularyCard key={item.key} item={item} index={index} />
      ))}
    </div>
  );
}
