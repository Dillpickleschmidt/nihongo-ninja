import Furigana from "@/components/text/Furigana"

export default function AdjModifyingNouns() {
  return (
    <div class="h-full w-full p-8 text-base text-black">
      <h1 class="text-center text-xl font-bold">
        Modifying Nouns with Adjectives
      </h1>

      <div class="mt-4 grid grid-cols-2 gap-4">
        <div>
          <h3 class="text-lg font-medium text-teal-500">い-Adjectives</h3>
          <p class="text-sm">Place directly before noun</p>
          <div class="mt-2">
            <div class="space-y-2">
              <p class="font-japanese text-lg">新しい + 車 → 新しい車</p>
              <p class="text-sm">new car</p>
              <p class="font-japanese text-lg">高い + 本 → 高い本</p>
              <p class="text-sm">expensive book</p>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-medium text-yellow-500">な-Adjectives</h3>
          <p class="text-sm">Add な before noun</p>
          <div class="mt-2">
            <div class="space-y-2">
              <p class="font-japanese text-lg">静か + 部屋 → 静かな部屋</p>
              <p class="text-sm">quiet room</p>
              <p class="font-japanese text-lg">きれい + 公園 → きれいな公園</p>
              <p class="text-sm">beautiful park</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <h3 class="text-lg font-medium">Negative Forms</h3>
        <div class="mt-2 space-y-2">
          <p class="font-japanese text-lg">高くない + 本 → 高くない本</p>
          <p class="text-sm">not expensive book</p>
          <p class="font-japanese text-lg">
            静かじゃない + 場所 → 静かじゃない場所
          </p>
          <p class="text-sm">not quiet place</p>
          <p class="text-xs italic">*No な needed with negative forms</p>
        </div>
      </div>

      <div class="mt-6">
        <h3 class="text-lg font-medium">Degree Words</h3>
        <div class="mt-2 grid grid-cols-2 gap-4">
          <div>
            <p class="font-medium">Making Stronger:</p>
            <div class="space-y-2">
              <p class="font-japanese">とても / すごく</p>
              <p class="text-sm">very, extremely</p>
              <p class="font-japanese text-lg">とても高い本</p>
              <p class="text-sm">very expensive book</p>
            </div>
          </div>
          <div>
            <p class="font-medium">Making Weaker/Negative:</p>
            <div class="space-y-2">
              <p class="font-japanese">ちょっと / 全然</p>
              <p class="text-sm">a bit / not at all</p>
              <p class="font-japanese text-lg">ちょっと高い本</p>
              <p class="text-sm">somewhat expensive book</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-4 rounded-lg border border-black/50 bg-gray-500/10 p-3">
        <p class="font-medium">Key Points</p>
        <ul class="mt-2 list-inside list-disc space-y-1">
          <li>い-adjectives: no changes needed</li>
          <li>な-adjectives: must add な</li>
          <li>Negative forms don't need な</li>
          <li>Degree words go before the whole adjective</li>
          <li>Adjective always comes directly before the noun</li>
        </ul>
      </div>
    </div>
  )
}
