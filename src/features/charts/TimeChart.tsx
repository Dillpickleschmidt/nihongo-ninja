import Furigana from "@/components/text/Furigana"
import Romaji from "@/components/text/Romaji"

export default function TimeChart() {
  return (
    <div class="flex justify-center rounded-md bg-background-secondary px-20 pb-12 pt-8 text-xl dark:text-primary-foreground">
      <ul class="[&>*]:flex [&>*]:min-w-72 [&>*]:items-center [&>*]:justify-between [&>*]:border-b [&>*]:border-black [&>*]:py-2 [&>*]:pl-2 [&>*]:pr-4">
        {/* Individual Box */}
        <li>
          {/* Romaji Element */}
          <div class="text-3xl font-medium">
            <Romaji romaji="ichiji">
              い
              <Furigana furigana={<span class="text-xs">●</span>}>ち</Furigana>
              じ
            </Romaji>
          </div>
          <p>1 o'clock</p>
        </li>
        <li>
          <div class="text-3xl font-medium">
            <Romaji romaji="niji">
              <Furigana furigana={<span class="text-xs">●</span>}>に</Furigana>
              じ
            </Romaji>
          </div>
          <p>2 o'clock</p>
        </li>
        <li>
          <div class="text-3xl font-medium">
            <Romaji romaji="sanji">
              <Furigana furigana={<span class="text-xs">●</span>}>さ</Furigana>
              んじ
            </Romaji>
          </div>
          <p>3 o'clock</p>
        </li>
        <li>
          <div class="flex gap-2 text-3xl font-medium">
            <Romaji romaji="yoji">
              <Furigana furigana={<span class="text-xs">●</span>}>よ</Furigana>
              じ
            </Romaji>
          </div>
          <p>4 o'clock</p>
        </li>
        <li>
          <div class="text-3xl font-medium">
            <Romaji romaji="goji">
              <Furigana furigana={<span class="text-xs">●</span>}>ご</Furigana>
              じ
            </Romaji>
          </div>
          <p>5 o'clock</p>
        </li>
        <li>
          <div class="text-3xl font-medium">
            <Romaji romaji="rokuji">
              ろ
              <Furigana furigana={<span class="text-xs">●</span>}>く</Furigana>
              じ
            </Romaji>
          </div>
          <p>6 o'clock</p>
        </li>
        <li>
          <div class="flex gap-2 text-3xl font-medium">
            <Romaji romaji="shichi">
              し
              <Furigana furigana={<span class="text-xs">●</span>}>ち</Furigana>
              じ
            </Romaji>
          </div>
          <p>7 o'clock</p>
        </li>
        <li>
          <div class="text-3xl font-medium">
            <Romaji romaji="hachiji">
              は
              <Furigana furigana={<span class="text-xs">●</span>}>ち</Furigana>
              じ
            </Romaji>
          </div>
          <p>8 o'clock</p>
        </li>
        <li>
          <div class="flex gap-2 text-3xl font-medium">
            <Romaji romaji="kuji">
              <Furigana furigana={<span class="text-xs">●</span>}>く</Furigana>
              じ
            </Romaji>
          </div>
          <p>9 o'clock</p>
        </li>
        <li>
          <div class="text-3xl font-medium">
            <Romaji romaji="juuji">
              <Furigana furigana={<span class="text-xs">●</span>}>
                じゅ
              </Furigana>
              うじ
            </Romaji>
          </div>
          <p>10 o'clock</p>
        </li>
        <li>
          <div class="text-3xl font-medium">
            <Romaji romaji="juuichiji">
              じゅうい
              <Furigana furigana={<span class="text-xs">●</span>}>ち</Furigana>
              じ
            </Romaji>
          </div>
          <p>11 o'clock</p>
        </li>
        <li>
          <div class="text-3xl font-medium">
            <Romaji romaji="juuniji">
              じゅう
              <Furigana furigana={<span class="text-xs">●</span>}>に</Furigana>
              じ
            </Romaji>
          </div>
          <p>12 o'clock</p>
        </li>
      </ul>
    </div>
  )
}
