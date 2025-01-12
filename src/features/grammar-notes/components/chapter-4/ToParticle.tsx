import Furigana from "@/components/text/Furigana"

export default function ToParticle() {
  return (
    <div class="h-full w-full p-8 text-base text-black">
      <h1 class="text-center text-xl font-bold">
        The <span class="font-japanese text-purple-500">と</span> Particle:
        And/With
      </h1>

      <div class="mt-4 grid grid-cols-2 gap-4">
        <div>
          <h3 class="text-lg font-medium text-purple-500">Connecting Nouns</h3>
          <p class="text-sm">Use と like "and" between nouns:</p>
          <div class="mt-2 space-y-2">
            <p class="font-japanese text-lg">
              本<span class="text-purple-500">と</span>ペン
            </p>
            <p class="text-sm">book and pen</p>
            <p class="font-japanese text-lg">
              コーヒー<span class="text-purple-500">と</span>パン
              <span class="text-purple-500">と</span>サラダ
            </p>
            <p class="text-sm">coffee, bread, and salad</p>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-medium text-purple-500">
            Doing Things Together
          </h3>
          <p class="text-sm">Use と to mean "with" someone:</p>
          <div class="mt-2 space-y-2">
            <p class="font-japanese text-lg">
              友達<span class="text-purple-500">と</span>勉強します
            </p>
            <p class="text-sm">study with friend</p>
            <p class="font-japanese text-lg">
              田中さん<span class="text-purple-500">と</span>映画を見ます
            </p>
            <p class="text-sm">watch movie with Tanaka</p>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <h3 class="text-lg font-medium">Adding 一緒に (Together)</h3>
        <div class="mt-2 grid grid-cols-2 gap-4">
          <div>
            <p class="font-japanese text-lg">
              友達<span class="text-purple-500">と</span>
              <Furigana furigana={<span class="text-sm">いっしょ</span>}>
                一緒
              </Furigana>
              に行きます
            </p>
            <p class="text-sm">go together with friend</p>
          </div>
          <div class="text-sm">
            <p>Emphasizes doing something as a group</p>
            <p>More explicit about togetherness</p>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <h3 class="text-lg font-medium">と vs に</h3>
        <div class="mt-2 grid grid-cols-2 gap-4">
          <div>
            <p class="font-japanese text-lg">
              先輩<span class="text-purple-500">と</span>話します
            </p>
            <p class="text-sm">talk with senior (mutual)</p>
          </div>
          <div>
            <p class="font-japanese text-lg">
              先輩<span class="text-green-500">に</span>話します
            </p>
            <p class="text-sm">talk to senior (one-way)</p>
          </div>
        </div>
      </div>

      <div class="mt-4 rounded-lg border border-black/50 bg-gray-500/10 p-3">
        <p class="font-medium">Key Points</p>
        <div class="mt-2 space-y-1">
          <div>
            1. と goes after each item except the last when listing{" "}
            <small>(like "and" in English)</small>
          </div>
          <div>2. と implies both parties are equally involved</div>
          <div>3. 一緒に is optional but emphasizes togetherness</div>
          <div>4. Use に instead of と for one-way actions</div>
        </div>
      </div>
    </div>
  )
}
