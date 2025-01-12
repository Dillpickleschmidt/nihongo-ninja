import Furigana from "@/components/text/Furigana"

export default function IruAru() {
  return (
    <div class="h-full w-full p-8 text-base text-black">
      <h1 class="text-center text-xl font-bold">
        います and あります - There is..., ○○さん has...
      </h1>

      <div class="mt-3">
        <h2 class="text-lg font-semibold">Basic Usage</h2>
        <p>
          Japanese expresses existence and possession using two verbs:{" "}
          <span class="font-japanese text-emerald-600">います</span> for animate
          objects and <span class="font-japanese text-blue-600">あります</span>{" "}
          for inanimate objects.
        </p>
      </div>

      <div class="mt-4">
        <h2 class="text-lg font-semibold">Structure</h2>
        <p class="text-center">
          (location) に (thing) が{" "}
          <span class="font-japanese">います・あります</span>
        </p>
        <p class="text-center text-sm">There is/are (thing) at (location)</p>
      </div>

      <div class="mt-4 grid grid-cols-2 gap-4">
        <div>
          <h3 class="text-lg font-medium text-emerald-600">います</h3>
          <p class="text-sm">Used for things that move on their own:</p>
          <ul class="mt-1 list-inside list-disc">
            <li>People</li>
            <li>Animals</li>
            <li>Ghosts 👻</li>
          </ul>
          <div class="mt-2 text-center">
            <p class="font-japanese">公園に犬がいます。</p>
            <p class="text-sm">There's a dog in the park.</p>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-medium text-blue-600">あります</h3>
          <p class="text-sm">Used for inanimate objects:</p>
          <ul class="mt-1 list-inside list-disc">
            <li>Objects</li>
            <li>Buildings</li>
            <li>Plants 🌱</li>
          </ul>
          <div class="mt-2 text-center">
            <p class="font-japanese">ここにコンビニがあります。</p>
            <p class="text-sm">There's a convenience store here.</p>
          </div>
        </div>
      </div>

      <h2 class="mt-4 text-lg font-semibold">Having Things</h2>
      <p class="text-sm">Express possession using the pattern:</p>
      <p class="mt-1 text-center">
        (person) は (thing) が{" "}
        <span class="font-japanese">います・あります</span>
      </p>
      <div class="mt-2 text-center">
        <p class="font-japanese">田中さんは猫がいます。</p>
        <p class="text-sm">Tanaka-san has a cat.</p>
        <p class="text-xs italic">(Lit: As for Tanaka-san, cat exists)</p>
      </div>

      <h2 class="mt-4 text-lg font-semibold">Common Mistakes</h2>
      <div class="mt-2">
        <div class="flex w-full items-center">
          <p class="w-1/4 font-semibold text-red-500">❌</p>
          <p class="w-3/4">
            <span class="font-japanese">あそこにモスバーガーです。</span>
            <span class="ml-2 text-sm">(Can't use に with です)</span>
          </p>
        </div>
        <div class="flex w-full items-center">
          <p class="w-1/4 font-semibold text-green-500">✓</p>
          <p class="w-3/4">
            <span class="font-japanese">あそこにモスバーガーがあります。</span>
          </p>
        </div>
      </div>

      <div class="mt-4 rounded-lg border border-black/50 bg-gray-500/10 p-3">
        <p class="font-medium">に Function Review</p>
        <div>1. Direction (家に帰ります)</div>
        <div>2. Time (七時に帰ります)</div>
        <div>
          3. <em>Location</em> (公園にお母さんがいます)
        </div>
      </div>
    </div>
  )
}
