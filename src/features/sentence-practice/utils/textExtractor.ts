export function removeFurigana(segment: string): string {
  const match = segment.match(/(.+?)\[/)
  return match ? match[1] : segment
}
