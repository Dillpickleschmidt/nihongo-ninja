import Furigana from "@/components/text/Furigana"

export default function CountersCheatsheet() {
  return (
    <div class="h-full w-full p-8 text-base text-black">
      <h1 class="text-center text-xl font-bold">
        Japanese Counters: つ and 枚
      </h1>

      <div class="mt-4">
        <h2 class="text-lg font-semibold">Generic Counter つ</h2>
        <div class="mt-2 grid grid-cols-4 gap-2">
          <div class="space-y-1">
            <p class="font-japanese text-lg">一つ (ひとつ)</p>
            <p class="text-sm">1 thing</p>
          </div>
          <div class="space-y-1">
            <p class="font-japanese text-lg">二つ (ふたつ)</p>
            <p class="text-sm">2 things</p>
          </div>
          <div class="space-y-1">
            <p class="font-japanese text-lg">三つ (みつ)</p>
            <p class="text-sm">3 things</p>
          </div>
          <div class="space-y-1">
            <p class="font-japanese text-lg">四つ (よつ)</p>
            <p class="text-sm">4 things</p>
          </div>
          <div class="space-y-1">
            <p class="font-japanese text-lg">五つ (いつつ)</p>
            <p class="text-sm">5 things</p>
          </div>
          <div class="space-y-1">
            <p class="font-japanese text-lg">六つ (むっつ)</p>
            <p class="text-sm">6 things</p>
          </div>
          <div class="space-y-1">
            <p class="font-japanese text-lg">七つ (ななつ)</p>
            <p class="text-sm">7 things</p>
          </div>
          <div class="space-y-1">
            <p class="font-japanese text-lg">八つ (やっつ)</p>
            <p class="text-sm">8 things</p>
          </div>
          <div class="space-y-1">
            <p class="font-japanese text-lg">九つ (ここのつ)</p>
            <p class="text-sm">9 things</p>
          </div>
          <div class="space-y-1">
            <p class="font-japanese text-lg">十 (とお)</p>
            <p class="text-sm">10 things</p>
          </div>
        </div>
        <div class="mt-2">
          <p class="font-japanese text-lg text-sky-500">いくつ</p>
          <p class="text-sm">How many?</p>
        </div>
      </div>

      <div class="mt-6">
        <h2 class="text-lg font-semibold">
          Counter for Flat Objects: 枚 (まい)
        </h2>
        <div class="mt-2 grid grid-cols-2 gap-4">
          <div>
            <p class="font-medium">Used for:</p>
            <ul class="mt-1 list-inside list-disc text-sm">
              <li>Paper</li>
              <li>Cards</li>
              <li>Plates</li>
              <li>Tickets</li>
              <li>Any flat, thin objects</li>
            </ul>
          </div>
          <div>
            <p class="font-medium">Examples:</p>
            <div class="mt-1 space-y-2">
              <div>
                <p class="font-japanese text-lg">
                  <Furigana furigana={<span class="text-xs">かみ</span>}>
                    紙
                  </Furigana>
                  を
                  <Furigana furigana={<span class="text-xs">にまい</span>}>
                    二枚
                  </Furigana>
                </p>
                <p class="text-sm">2 sheets of paper</p>
              </div>
              <div>
                <p class="font-japanese text-lg">
                  お
                  <Furigana furigana={<span class="text-xs">さら</span>}>
                    皿
                  </Furigana>
                  を
                  <Furigana furigana={<span class="text-xs">さんまい</span>}>
                    三枚
                  </Furigana>
                </p>
                <p class="text-sm">3 plates</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <h3 class="text-lg font-medium">Correct vs Incorrect Usage</h3>
        <div class="mt-2 grid grid-cols-2 gap-4">
          <div>
            <p class="font-bold text-red-500">
              ✗{" "}
              <span class="text-lgh font-japanese">三りんごを食べました。</span>
            </p>
            <p class="font-bold">
              ✓{" "}
              <span class="font-japanese text-lg">
                りんごを三つ食べました。
              </span>
            </p>
            <p class="text-sm">I ate three apples.</p>
          </div>
          <div>
            <p class="font-bold text-red-500">
              ✗{" "}
              <span class="font-japanese text-lg">
                三チケットを買いました。
              </span>
            </p>
            <p class="font-bold">
              ✓{" "}
              <span class="font-japanese text-lg">
                チケットを三枚買いました。
              </span>
            </p>
            <p class="text-sm">I bought three tickets.</p>
          </div>
        </div>
      </div>

      <div class="mt-4 rounded-lg border border-black/50 bg-gray-500/10 p-3">
        <p class="font-medium">Key Points</p>
        <ul class="mt-2 list-inside list-disc space-y-1">
          <li>
            Japanese ALWAYS uses specific counter words when counting objects
          </li>
          <li>つ is the generic counter for most objects</li>
          <li>まい is specific to flat, thin objects</li>
          <li>Use いくつ to ask "how many?"</li>
          <li>Numbers 1-10 have special readings with つ</li>
        </ul>
      </div>
    </div>
  )
}
