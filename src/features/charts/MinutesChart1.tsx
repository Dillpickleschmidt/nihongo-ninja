import Furigana from "@/components/text/Furigana"
import Romaji from "@/components/text/Romaji"

export default function MinutesChart1() {
  return (
    <div class="flex justify-center rounded-md bg-background-secondary px-16 pb-12 pt-8 dark:text-primary-foreground">
      <ul class="[&>*]:flex [&>*]:min-w-72 [&>*]:items-center [&>*]:justify-between [&>*]:border-b [&>*]:border-black [&>*]:py-2 [&>*]:pl-2 [&>*]:pr-4">
        {/* Individual Box */}
        <li>
          {/* Romaji Element */}
          <div class="text-2xl font-medium">
            <Romaji romaji="ippun">
              <Furigana furigana={<span class="text-xs">●</span>}>
                いっ
              </Furigana>
              ぷん
            </Romaji>
          </div>
          <p class="ml-1">1 minute</p>
        </li>
        <li>
          <div class="text-2xl font-medium">
            <Romaji romaji="ni-fun">
              <Furigana furigana={<span class="text-xs">●</span>}>に</Furigana>
              ふん
            </Romaji>
          </div>
          <p class="ml-1">2 minutes</p>
        </li>
        <li>
          <div class="text-2xl font-medium">
            <Romaji romaji="san-pun">
              <Furigana furigana={<span class="text-xs">●</span>}>さ</Furigana>
              んぷん
            </Romaji>
          </div>
          <p class="ml-1">3 minutes</p>
        </li>
        <li>
          <div class="flex items-center gap-2 text-2xl font-medium">
            <Romaji romaji="yon-pun">
              <Furigana furigana={<span class="text-xs">●</span>}>よ</Furigana>
              んぷん
            </Romaji>
          </div>
          <p class="ml-1">4 minutes</p>
        </li>
        <li>
          <div class="text-2xl font-medium">
            <Romaji romaji="go-fun">
              <Furigana furigana={<span class="text-xs">●</span>}>ご</Furigana>
              ふん
            </Romaji>
          </div>
          <p class="ml-1">5 minutes</p>
        </li>
        <li>
          <div class="text-2xl font-medium">
            <Romaji romaji="roppun">
              <Furigana furigana={<span class="text-xs">●</span>}>
                ろっ
              </Furigana>
              ぷん
            </Romaji>
          </div>
          <p class="ml-1">6 minutes</p>
        </li>
        <li>
          <div class="flex gap-2 text-2xl font-medium">
            <Romaji romaji="nana-fun">
              な
              <Furigana furigana={<span class="text-xs">●</span>}>な</Furigana>
              ふん
            </Romaji>
          </div>
          <p class="ml-1">7 minutes</p>
        </li>
        <li>
          <div class="text-2xl font-medium">
            <Romaji romaji="happun">
              <Furigana furigana={<span class="text-xs">●</span>}>
                はっ
              </Furigana>
              ぷん
            </Romaji>
            <span class="mx-2 text-xl">●</span>
            <Romaji romaji="hachi-fun">
              は
              <Furigana furigana={<span class="text-xs">●</span>}>ち</Furigana>
              ふん
            </Romaji>
          </div>
          <p class="ml-1">8 minutes</p>
        </li>
        <li>
          <div class="flex gap-2 text-2xl font-medium">
            <Romaji romaji="kyū-fun">
              <Furigana furigana={<span class="text-xs">●</span>}>
                きゅう
              </Furigana>
              ふん
            </Romaji>
          </div>
          <p class="ml-1">9 minutes</p>
        </li>
        <li>
          <div class="text-2xl font-medium">
            <Romaji romaji="juppun">
              <Furigana furigana={<span class="text-xs">●</span>}>
                じゅっ
              </Furigana>
              ぷん
            </Romaji>
            <span class="mx-2 text-xl">●</span>
            <Romaji romaji="jippun">
              <Furigana furigana={<span class="text-xs">●</span>}>
                じっ
              </Furigana>
              ぷん
            </Romaji>
          </div>
          <p class="ml-1">10 minutes</p>
        </li>
      </ul>
    </div>
  )
}
