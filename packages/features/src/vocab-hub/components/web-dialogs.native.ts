// The hub's CRUD UI is web-only; native placeholders never reach these.
export function promptText(_message: string, _defaultValue?: string): string | null {
  return null;
}

export function confirmAction(_message: string): boolean {
  return false;
}

export function alertMessage(_message: string): void {}
