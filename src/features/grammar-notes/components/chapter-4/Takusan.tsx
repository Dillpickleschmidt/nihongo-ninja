import Furigana from "@/components/text/Furigana"

export default function Takusan() {
  return (
    <div class="h-full w-full p-8 text-base text-black">
      <h1 class="text-center text-xl font-bold">
        Using <span class="font-japanese text-pink-500">たくさん</span> (A
        Lot/Many)
      </h1>

      <div class="mt-4">
        <h2 class="text-lg font-semibold">Three Basic Patterns</h2>

        <div class="mt-4">
          <h3 class="text-lg font-medium text-emerald-500">
            1. たくさん + Verb
          </h3>
          <p class="text-sm">For expressing "doing a lot" of something</p>
          <div class="mt-2">
            <p class="font-japanese text-lg">日本語をたくさん勉強しました。</p>
            <p class="text-sm">Studied Japanese a lot</p>
          </div>
        </div>

        <div class="mt-6">
          <h3 class="text-lg font-medium text-blue-500">
            2. たくさんの + Noun
          </h3>
          <p class="text-sm">For emphasizing quantity of things</p>
          <div class="mt-2">
            <p class="font-japanese text-lg">
              図書館にたくさんの本があります。
            </p>
            <p class="text-sm">There are many books in the library</p>
            <p class="text-xs text-muted-foreground">
              (emphasizing the number of books)
            </p>
          </div>
        </div>

        <div class="mt-6">
          <h3 class="text-lg font-medium text-purple-500">
            3. たくさん + Noun
          </h3>
          <p class="text-sm">
            Describes quantity in relation to the whole situation
          </p>
          <div class="mt-2">
            <p class="font-japanese text-lg">図書館にたくさん本があります。</p>
            <p class="text-sm">There are many books in the library</p>
            <p class="text-xs text-muted-foreground">
              (focusing on the overall scene rather than just the books)
            </p>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <h3 class="text-lg font-medium">Which Pattern to Use?</h3>
        <div class="mt-2 grid grid-cols-2 gap-4">
          <div>
            <p class="font-medium">Use Pattern 1 when:</p>
            <ul class="mt-1 list-inside list-disc text-sm">
              <li>Describing actions</li>
              <li>Focusing on frequency/amount of activity</li>
            </ul>
          </div>
          <div>
            <p class="font-medium">Use Pattern 2/3 when:</p>
            <ul class="mt-1 list-inside list-disc text-sm">
              <li>Describing quantities of things</li>
              <li>Pattern 2 to emphasize the quantity itself</li>
              <li>Pattern 3 to describe the overall situation</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-4 rounded-lg border border-black/50 bg-gray-500/10 p-3">
        <p class="font-medium">Key Points</p>
        <ul class="mt-2 list-inside list-disc space-y-1">
          <li>たくさん before verbs = "do a lot" (Pattern 1)</li>
          <li>
            たくさんの before nouns = strong emphasis on amount (Pattern 2)
          </li>
          <li>
            たくさん before nouns = describes quantity in context of whole
            situation (Pattern 3)
          </li>
          <li>の makes たくさん focus specifically on the noun it modifies</li>
        </ul>
      </div>
    </div>
  )
}
