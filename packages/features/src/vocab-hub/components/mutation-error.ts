import { alertMessage } from "./web-dialogs";

// Menu actions have no form to surface errors in, so fall back to an alert.
export function alertMutationError(action: string) {
  return (error: unknown) => {
    console.error(`Failed to ${action}:`, error);
    alertMessage(`Failed to ${action}. ${extractConvexMessage(error)}`.trim());
  };
}

function extractConvexMessage(error: unknown): string {
  if (!(error instanceof Error)) return "";
  const match = /Uncaught Error: (.+?)(\n|$)/.exec(error.message);
  return match?.[1] ?? "";
}
