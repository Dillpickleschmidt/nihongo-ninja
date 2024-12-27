import Furigana from "@/components/text/Furigana"
import Romaji from "@/components/text/Romaji"

export default function MinutesChart2() {
  return (
    <div class="flex justify-center rounded-md bg-background-secondary px-16 pb-12 pt-8 dark:text-primary-foreground">
      <ul class="[&>*]:flex [&>*]:min-w-72 [&>*]:items-center [&>*]:justify-between [&>*]:border-b [&>*]:border-black [&>*]:py-2 [&>*]:pl-2 [&>*]:pr-4">
        {/* Individual Box */}
        <li>
          {/* Romaji Element */}
          <div class="text-2xl font-medium">
            <Romaji romaji="juu-ippun">
              じゅう
              <Furigana furigana={<span class="text-xs">●</span>}>
                いっ
              </Furigana>
              ぷん
            </Romaji>
          </div>
          <p class="ml-1">11 minutes</p>
        </li>
        <li>
          <div class="text-2xl font-medium">
            <Romaji romaji="juu-ni-fun">
              じゅう
              <Furigana furigana={<span class="text-xs">●</span>}>に</Furigana>
              ふん
            </Romaji>
          </div>
          <p class="ml-1">12 minutes</p>
        </li>
        <li>
          <div class="text-2xl font-medium">
            <Romaji romaji="juu-san-pun">
              じゅう
              <Furigana furigana={<span class="text-xs">●</span>}>さ</Furigana>
              んぷん
            </Romaji>
          </div>
          <p class="ml-1">13 minutes</p>
        </li>
        <li>
          <div class="flex items-center gap-2 text-2xl font-medium">
            <Romaji romaji="juu-yon-pun">
              じゅう
              <Furigana furigana={<span class="text-xs">●</span>}>よ</Furigana>
              んぷん
            </Romaji>
          </div>
          <p class="ml-1">14 minutes</p>
        </li>
        <li>
          <div class="text-2xl font-medium">
            <Romaji romaji="juu-go-fun">
              じゅう
              <Furigana furigana={<span class="text-xs">●</span>}>ご</Furigana>
              ふん
            </Romaji>
          </div>
          <p class="ml-1">15 minutes</p>
        </li>
        <li>
          <div class="text-2xl font-medium">
            <Romaji romaji="juu-roppun">
              じゅう
              <Furigana furigana={<span class="text-xs">●</span>}>
                ろっ
              </Furigana>
              ぷん
            </Romaji>
          </div>
          <p class="ml-1">16 minutes</p>
        </li>
        <li>
          <div class="flex gap-2 text-2xl font-medium">
            <Romaji romaji="juu-nana-fun">
              じゅうな
              <Furigana furigana={<span class="text-xs">●</span>}>な</Furigana>
              ふん
            </Romaji>
          </div>
          <p class="ml-1">17 minutes</p>
        </li>
        <li>
          <div class="text-2xl font-medium">
            <Romaji romaji="juu-happun">
              じゅう
              <Furigana furigana={<span class="text-xs">●</span>}>
                はっ
              </Furigana>
              ぷん
            </Romaji>
            <span class="mx-2 text-xl">●</span>
            <Romaji romaji="juu-hachi-fun">
              じゅうは
              <Furigana furigana={<span class="text-xs">●</span>}>ち</Furigana>
              ふん
            </Romaji>
          </div>
          <p class="ml-1">18 minutes</p>
        </li>
        <li>
          <div class="flex gap-2 text-2xl font-medium">
            <Romaji romaji="juu-kyū-fun">
              じゅう
              <Furigana furigana={<span class="text-xs">●</span>}>
                きゅう
              </Furigana>
              ふん
            </Romaji>
          </div>
          <p class="ml-1">19 minutes</p>
        </li>
        <li>
          <div class="text-2xl font-medium">
            <Romaji romaji="ni-juppun">
              に
              <Furigana furigana={<span class="text-xs">●</span>}>
                じゅっ
              </Furigana>
              ぷん
            </Romaji>
            <span class="mx-2 text-xl">●</span>
            <Romaji romaji="ni-jippun">
              に
              <Furigana furigana={<span class="text-xs">●</span>}>
                じっ
              </Furigana>
              ぷん
            </Romaji>
          </div>
          <p class="ml-1">20 minutes</p>
        </li>
        <li>
          <div class="text-2xl font-medium">
            <Romaji romaji="san-juppun">
              さん
              <Furigana furigana={<span class="text-xs">●</span>}>
                じゅっ
              </Furigana>
              ぷん
            </Romaji>
            <span class="mx-2 text-xl">●</span>
            <Romaji romaji="san-jippun">
              さん
              <Furigana furigana={<span class="text-xs">●</span>}>
                じっ
              </Furigana>
              ぷん
            </Romaji>
          </div>
          <p class="ml-1">30 minutes</p>
        </li>
      </ul>
    </div>
  )
}
