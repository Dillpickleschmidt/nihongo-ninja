export function extractText(segment: string): string {
  const match = segment.match(/(.+?)\[/)
  return match ? match[1] : segment
}
