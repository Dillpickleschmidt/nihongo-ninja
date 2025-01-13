import Furigana from "@/components/text/Furigana"

export default function WaContrastCheatsheet() {
  return (
    <div class="h-full w-full p-8 text-base text-black">
      <h1 class="text-center text-xl font-bold">
        The Hidden Meaning of <span class="font-japanese text-sky-500">は</span>
      </h1>

      <div class="mt-4">
        <h2 class="text-lg font-semibold">Particle Choice Changes Meaning</h2>
        <div class="mt-2 grid grid-cols-2 gap-4">
          <div>
            <p class="font-medium">Describing Weather:</p>
            <div class="mt-1 space-y-2">
              <div>
                <p class="font-japanese text-lg">今日寒いです</p>
                <p class="text-sm">It's cold today</p>
                <p class="text-xs">neutral statement</p>
              </div>
              <div>
                <p class="font-japanese text-lg">
                  今日<span class="text-sky-500">は</span>寒いです
                </p>
                <p class="text-sm">It's cold today (unlike other days)</p>
                <p class="text-xs">implies contrast</p>
              </div>
              <div>
                <p class="font-japanese text-lg">
                  今日<span class="text-rose-400">が</span>寒いです
                </p>
                <p class="text-sm">TODAY is the cold one</p>
                <p class="text-xs">answering "which day is cold?"</p>
              </div>
            </div>
          </div>
          <div>
            <p class="font-medium">Describing People:</p>
            <div class="mt-1 space-y-2">
              <div>
                <p class="font-japanese text-lg">今日きれいです</p>
                <p class="text-sm">You're beautiful today</p>
                <p class="text-xs">neutral compliment</p>
              </div>
              <div>
                <p class="font-japanese text-lg">
                  今日<span class="text-sky-500">は</span>きれいです
                </p>
                <p class="text-sm">You're beautiful TODAY</p>
                <p class="text-xs text-red-500">implies "unlike other days"!</p>
              </div>
              <div>
                <p class="font-japanese text-lg">
                  今日<span class="text-rose-400">が</span>きれいです
                </p>
                <p class="text-sm">✗ not grammatical</p>
                <p class="text-xs">
                  can't use が - subject should be the person, not the day
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <h3 class="text-lg font-medium">
          Multiple は Creates Multiple Contrasts
        </h3>
        <div class="mt-2 space-y-3">
          <div>
            <p class="font-japanese text-lg">
              私<span class="text-sky-500">は</span>今日
              <span class="text-sky-500">は</span>東京へ行きます
            </p>
            <p class="text-sm">I'm going to Tokyo today</p>
            <p class="text-xs">
              contrasting both with other people and other days
            </p>
            <p class="text-xs italic">
              *kinda weird but possible in some contexts
            </p>
          </div>
          <div>
            <p class="font-japanese text-lg">
              スポーツ<span class="text-sky-500">は</span>好きですが、勉強
              <span class="text-sky-500">は</span>嫌いです
            </p>
            <p class="text-sm">I like sports but hate studying</p>
            <p class="text-xs">explicit contrast between two things</p>
          </div>
        </div>
      </div>

      <div class="mt-4 rounded-lg border border-black/50 bg-gray-500/10 p-3">
        <p class="font-medium">Key Points</p>
        <ul class="mt-2 list-inside list-disc space-y-1">
          <li>は creates implied contrasts when used unnecessarily</li>
          <li>Omit は for neutral statements when topic is clear</li>
          <li>Remember that が explicitly marks the subject</li>
          <li>Multiple は creates multiple contrasts</li>
        </ul>
      </div>
    </div>
  )
}
