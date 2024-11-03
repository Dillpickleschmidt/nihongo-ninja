export function removeFurigana(segment: string): string {
  return segment.replace(/\[.*?\]/g, "")
}
