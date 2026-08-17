import { useConvexMutation } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import { useState } from "react";

import { authClient } from "../auth/client";
import { ConfirmActionDialog } from "./confirm-action-dialog";
import { clearLocalCompletions, useLocalCompletions } from "./local-completions";

// After sign-in, offers to move completions made while signed out into the
// account. Dismissing discards them, same as the source app.
export function CompletionsSyncDialog() {
  const { data: session } = authClient.useSession();
  const localCompletions = useLocalCompletions();
  const syncMutation = useConvexMutation(api.api.completions.syncCompletions);
  const [dismissed, setDismissed] = useState(false);

  const pendingEntries = Object.entries(localCompletions);
  const open = !!session && pendingEntries.length > 0 && !dismissed;

  const handleSync = () => {
    clearLocalCompletions();
    setDismissed(true);
    void syncMutation({
      completions: pendingEntries.map(([modulePath, completedAt]) => ({
        modulePath,
        completedAt,
      })),
    });
  };

  return (
    <ConfirmActionDialog
      open={open}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) {
          clearLocalCompletions();
          setDismissed(true);
        }
      }}
      title="Sync Your Progress?"
      description={`You completed ${pendingEntries.length} module${pendingEntries.length === 1 ? "" : "s"} while signed out. Would you like to save them to your account?`}
      confirmLabel="Sync"
      onConfirm={handleSync}
    />
  );
}
