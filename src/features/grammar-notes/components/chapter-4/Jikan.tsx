import Furigana from "@/components/text/Furigana"

export default function Jikan() {
  return (
    <div class="h-full w-full p-8 text-base text-black">
      <h1 class="text-center text-xl font-bold">
        Expressing Time Duration in Japanese
      </h1>

      <div class="mt-4">
        <h2 class="text-lg font-semibold">Basic Pattern</h2>
        <div class="mt-2 space-y-2">
          <div class="flex w-full items-center">
            <p class="w-1/4 font-semibold text-red-500">Incorrect</p>
            <p class="w-3/4">
              <span class="font-japanese">日本語を三時間に勉強しました。</span>
            </p>
          </div>
          <div class="flex w-full items-center">
            <p class="w-1/4 font-semibold">Correct</p>
            <p class="w-3/4">
              <span class="font-japanese">日本語を三時間勉強しました。</span>
              {" → "} studied for 3 hours
            </p>
          </div>
          <p class="text-sm italic">
            Time duration expressions stand alone - don't use に!
          </p>
          <p class="text-sm italic">
            *Remember, に is for a specific <u>point</u> in time!
          </p>
        </div>
      </div>

      <div class="mt-6">
        <h3 class="text-lg font-medium">Building Time Expressions</h3>
        <div class="mt-2 grid grid-cols-2 gap-4">
          <div>
            <p class="font-japanese text-lg">一時間</p>
            <p class="text-sm">1 hour</p>
          </div>
          <div>
            <p class="font-japanese text-lg">三十分</p>
            <p class="text-sm">30 minutes</p>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <h3 class="text-lg font-medium">Adding Modifiers</h3>
        <div class="mt-2 grid grid-cols-2 gap-4">
          <div>
            <h4 class="font-medium">Basic → With 半 (half)</h4>
            <div class="mt-2">
              <p class="font-japanese text-lg">一時間 → 一時間半</p>
              <p class="text-sm">1 hour → 1.5 hours</p>
            </div>
          </div>
          <div>
            <h4 class="font-medium">Basic → With ぐらい (about)</h4>
            <div class="mt-2">
              <p class="font-japanese text-lg">三時間 → 三時間ぐらい</p>
              <p class="text-sm">3 hours → about 3 hours</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <h3 class="text-lg font-medium">Combining Everything</h3>
        <p class="text-sm italic">Order: Hours → Half → Approximate</p>
        <div class="mt-2">
          <p class="font-japanese text-lg">昨日一時間半ぐらい待ちました。</p>
          <p class="text-sm">Waited for about 1.5 hours yesterdady</p>
        </div>
      </div>

      <div class="mt-4 rounded-lg border border-black/50 bg-gray-500/10 p-3">
        <p class="font-medium">Key Points</p>
        <ul class="mt-2 list-inside list-disc space-y-1">
          <li>Time duration expressions don't use に</li>
          <li>Order matters: base time → 半 → ぐらい/くらい</li>
          <li>ぐらい and くらい are interchangeable</li>
        </ul>
      </div>
    </div>
  )
}
