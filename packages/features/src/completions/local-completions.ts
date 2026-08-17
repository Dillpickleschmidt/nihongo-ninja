import { useConvexMutation } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import {
  getCompletionProgressUnits,
  getCurrentTimeZone,
  getModuleTypeForCompletion,
} from "@nn/data/progress/weights";
import { useEffect, useState } from "react";

import { authClient } from "../auth/client";

// Completions made while signed out live in localStorage until the sync
// dialog moves them into the account.
const STORAGE_KEY = "nihongo-ninja:local-completions";

export function getLocalCompletions(): Record<string, number> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, number>) : {};
  } catch {
    return {};
  }
}

function addLocalCompletion(modulePath: string) {
  const current = getLocalCompletions();
  current[modulePath] = Date.now();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
}

export function clearLocalCompletions() {
  localStorage.removeItem(STORAGE_KEY);
}

// Hydration-safe: reads localStorage only after mount.
export function useLocalCompletions() {
  const [completions, setCompletions] = useState<Record<string, number>>({});

  useEffect(() => {
    setCompletions(getLocalCompletions());
  }, []);

  return completions;
}

// Marks a module complete: on the account when signed in (plus a daily
// progress event), in localStorage otherwise.
export function useCompleteModule() {
  const { data: session } = authClient.useSession();
  const completeMutation = useConvexMutation(api.api.completions.completeModule);
  const progressMutation = useConvexMutation(api.api.progress.recordProgressEvent);
  const [localCompletions, setLocalCompletions] = useState<Record<string, number>>({});

  useEffect(() => {
    setLocalCompletions(getLocalCompletions());
  }, []);

  const completeModule = (moduleId: string) => {
    if (session) {
      void completeMutation({ modulePath: moduleId });
      const moduleType = getModuleTypeForCompletion(moduleId);
      const progressUnits = getCompletionProgressUnits(moduleId);
      if (moduleType && progressUnits > 0) {
        void progressMutation({
          modulePath: moduleId,
          moduleType,
          progressUnitsDelta: progressUnits,
          questionsAnsweredDelta: 0,
          eventTs: Date.now(),
          timeZone: getCurrentTimeZone(),
        });
      }
    } else {
      addLocalCompletion(moduleId);
      setLocalCompletions(getLocalCompletions());
    }
  };

  return { completeModule, localCompletions };
}
