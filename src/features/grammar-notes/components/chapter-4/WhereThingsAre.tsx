import Furigana from "@/components/text/Furigana"

export default function WhereThingsAre() {
  return (
    <div class="h-full w-full p-8 text-base text-black">
      <h1 class="text-center text-xl font-bold">Location Words</h1>

      <div class="mt-3">
        <h2 class="text-lg font-semibold">Basic Pattern</h2>
        <p class="text-center">
          X は Y の <span class="font-japanese">[location word]</span> です
        </p>
        <p class="text-center text-sm">X is [location] of Y</p>
      </div>

      <div class="mt-4 grid grid-cols-2 gap-4">
        <div>
          <h3 class="text-lg font-medium text-emerald-600">Top/Bottom</h3>
          <ul class="mt-1 list-inside space-y-1">
            <li>
              <span class="font-japanese">上</span> (うえ) - above/on top
            </li>
            <li>
              <span class="font-japanese">下</span> (した) - below/under
            </li>
          </ul>
          <div class="mt-2 text-center">
            <p class="font-japanese">本は机の上にあります。</p>
            <p class="text-sm">The book is on the desk.</p>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-medium text-blue-600">Front/Back</h3>
          <ul class="mt-1 list-inside space-y-1">
            <li>
              <span class="font-japanese">前</span> (まえ) - in front
            </li>
            <li>
              <span class="font-japanese">後ろ</span> (うしろ) - behind
            </li>
          </ul>
          <div class="mt-2 text-center">
            <p class="font-japanese">後ろに誰がいますか。</p>
            <p class="text-sm">Who's behind?</p>
          </div>
        </div>
      </div>

      <div class="mt-4 grid grid-cols-2 gap-4">
        <div>
          <h3 class="text-lg font-medium text-purple-600">Left/Right</h3>
          <ul class="mt-1 list-inside space-y-1">
            <li>
              <span class="font-japanese">右</span> (みぎ) - right
            </li>
            <li>
              <span class="font-japanese">左</span> (ひだり) - left
            </li>
          </ul>
          <div class="mt-2 text-center">
            <p class="font-japanese">郵便局は右です。</p>
            <p class="text-sm">The post office is on the right.</p>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-medium text-orange-600">Inside/Between</h3>
          <ul class="mt-1 list-inside space-y-1">
            <li>
              <span class="font-japanese">中</span> (なか) - inside
            </li>
            <li>
              <span class="font-japanese">間</span> (あいだ) - between
            </li>
            <li>
              <span class="font-japanese">隣</span> (となり) - next to
            </li>
          </ul>
          <div class="mt-2 text-center">
            <p class="font-japanese">お酒がテレビの隣にありますよ！</p>
            <p class="text-sm">There's alchohol next to the TV!</p>
          </div>
        </div>
      </div>

      <div class="mt-4">
        <h3 class="text-lg font-medium text-teal-600">Near</h3>
        <ul class="mt-1 list-inside">
          <li>
            <span class="font-japanese">近く</span> (ちかく) - near/nearby
          </li>
        </ul>
        <div class="mt-2 text-center">
          <p class="font-japanese">駅の近くにコンビニがあります。</p>
          <p class="text-sm">There's a convenience store near the station.</p>
        </div>
      </div>

      <div class="mt-4 rounded-lg border border-black/50 bg-gray-500/10 p-3">
        <p class="font-medium">Key Points</p>
        <div class="mt-2 space-y-1">
          <div>1. Use に to mark location when using います/あります</div>
          <div>2. Use の to connect nouns (郵便局の右)</div>
          <div>3. Use と for "and" when saying "between A and B"</div>
          <div>4. 中 (inside) can often be omitted when using に</div>
        </div>
      </div>
    </div>
  )
}
