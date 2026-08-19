import { convertFuriganaToRubyHtml } from "@nn/data/utils/text/furigana";

import { cn } from "./utils";

export function FuriganaText({
  furigana,
  className,
  textClassName,
}: {
  furigana: string;
  className?: string;
  // Applied to the base text runs on native, where font styles don't cascade
  // from the container; on web the container span cascades to the ruby markup.
  textClassName?: string;
}) {
  return (
    <span
      className={cn(className, textClassName)}
      dangerouslySetInnerHTML={{ __html: convertFuriganaToRubyHtml(furigana) }}
    />
  );
}
