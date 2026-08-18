// Expo's tsc follows the generated native route stubs into this web-only
// code without the DOM lib, so `window` must stay behind these platform-
// suffixed wrappers (web-dialogs.native.ts stubs them out).
export function promptText(message: string, defaultValue?: string): string | null {
  return window.prompt(message, defaultValue);
}

export function confirmAction(message: string): boolean {
  return window.confirm(message);
}

export function alertMessage(message: string): void {
  window.alert(message);
}
