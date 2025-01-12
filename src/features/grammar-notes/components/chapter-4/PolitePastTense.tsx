import Furigana from "@/components/text/Furigana"

export default function PolitePastTense() {
  return (
    <div class="h-full w-full p-8 text-base text-black">
      <h1 class="text-center text-xl font-medium">
        Past Tense Forms in Polite Japanese
      </h1>

      <div class="mt-4 grid grid-cols-2 gap-4">
        <div>
          <h3 class="text-lg font-medium text-sky-500">Present</h3>
          <div class="mt-2 space-y-2">
            <p class="font-japanese text-xl">
              学生<span class="font-medium text-sky-500">です</span>
            </p>
            <p class="font-japanese text-xl">
              行き<span class="font-medium text-sky-500">ます</span>
            </p>
            <p class="font-japanese text-xl">
              食べ<span class="font-medium text-sky-500">ません</span>
            </p>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-medium text-orange-500">Past</h3>
          <div class="mt-2 space-y-2">
            <p class="font-japanese text-xl">
              学生<span class="font-medium text-orange-500">でした</span>
            </p>
            <p class="font-japanese text-xl">
              行き<span class="font-medium text-orange-500">ました</span>
            </p>
            <p class="font-japanese text-xl">
              食べ<span class="font-medium text-orange-500">ませんでした</span>
            </p>
          </div>
        </div>
      </div>

      <div class="mt-6 grid grid-cols-3 gap-2">
        <div>
          <h3 class="text-lg font-medium">です → でした</h3>
          <ul class="mt-1 list-inside space-y-1 text-sm">
            <li>Used for nouns/adjectives</li>
            <li>Describes past states</li>
          </ul>
          <div class="mt-2 text-center">
            <p class="font-japanese">先生でした。</p>
            <p class="text-sm">Was a teacher.</p>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-medium">ます → ました</h3>
          <ul class="mt-1 list-inside space-y-1 text-sm">
            <li>Used for verbs</li>
            <li>Describes past actions</li>
          </ul>
          <div class="mt-2 text-center">
            <p class="font-japanese">本を読みました。</p>
            <p class="text-sm">Read a book.</p>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-medium">ません → ませんでした</h3>
          <ul class="mt-1 list-inside space-y-1 text-sm">
            <li>Negative past</li>
            <li>Actions not done</li>
          </ul>
          <div class="mt-2 text-center">
            <p class="font-japanese">見ませんでした。</p>
            <p class="text-sm">Did not watch.</p>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <h3 class="text-lg font-medium">Common Time Words</h3>
        <div class="mt-2 grid grid-cols-2 gap-4">
          <div>
            <ul class="list-inside space-y-1">
              <li>
                <span class="font-japanese">昨日</span> (きのう) - yesterday
              </li>
              <li>
                <span class="font-japanese">先週</span> (せんしゅう) - last week
              </li>
              <li>
                <span class="font-japanese">去年</span> (きょねん) - last year
              </li>
            </ul>
          </div>
          <div>
            <p class="font-japanese">昨日、映画を見ました。</p>
            <p class="text-sm">I watched a movie yesterday.</p>
          </div>
        </div>
      </div>

      <div class="mt-4 rounded-lg border border-black/50 bg-gray-500/10 p-3">
        <p class="font-medium">Key Points</p>
        <div class="mt-2 space-y-1">
          <div>1. Past tense です always becomes でした</div>
          <div>2. Verb stem doesn't change, only ます → ました</div>
          <div>
            3. Time words often come at the start of sentence but don't have to
          </div>
        </div>
      </div>
    </div>
  )
}
