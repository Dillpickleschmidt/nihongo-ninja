export function getThumbnailUrl(externalUrl: string): string | null {
  const id = externalUrl.match(
    /(?:^|\/\/|\.)(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})(?:[&?#]|$)/u,
  )?.[1];
  return id === undefined ? null : `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}
