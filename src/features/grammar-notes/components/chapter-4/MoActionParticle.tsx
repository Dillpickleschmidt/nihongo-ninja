import Furigana from "@/components/text/Furigana"

export default function MoActionParticle() {
  return (
    <div class="h-full w-full p-8 text-base text-black">
      <h1 class="text-center text-xl font-bold">
        The <span class="font-japanese text-purple-500">も</span> Particle:
        "Also" with Actions
      </h1>

      <div class="mt-4">
        <h2 class="text-lg font-semibold">Basic Pattern</h2>
        <p class="text-center text-xl">
          B <span class="font-japanese text-purple-500">も</span> X をします
        </p>
        <p class="text-center text-lg">
          B <span class="text-purple-500">also</span> does X
        </p>
      </div>

      <div class="mt-6 grid grid-cols-2 gap-4">
        <div>
          <h3 class="text-lg font-medium">Same Action, Different People</h3>
          <div class="mt-2 space-y-2">
            <p class="font-japanese text-lg">私は日本語を勉強します。</p>
            <p class="font-japanese text-lg">
              田中さん<span class="text-purple-500">も</span>
              日本語を勉強します。
            </p>
            <p class="text-sm">
              I study Japanese. Tanaka also studies Japanese.
            </p>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-medium">One Person, Multiple Actions</h3>
          <div class="mt-2 space-y-2">
            <p class="font-japanese text-lg">
              私は
              <Furigana furigana={<span class="text-xs">おおさか</span>}>
                大阪
              </Furigana>
              に行きました。
            </p>
            <p class="font-japanese text-lg">
              <Furigana furigana={<span class="text-xs">きょうと</span>}>
                京都
              </Furigana>
              <span class="text-green-500">に</span>
              <span class="text-purple-500">も</span>行きました。
            </p>
            <p class="text-sm">I went to Osaka. (I) also went to Kyoto.</p>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <h3 class="text-lg font-medium">Position Changes Meaning</h3>
        <div class="mt-2 space-y-3">
          <div>
            <p class="font-japanese text-lg">
              私<span class="text-purple-500">も</span>日本語を勉強します。
            </p>
            <p class="text-sm">
              I also study Japanese (like someone else does)
            </p>
          </div>
          <div>
            <p class="font-japanese text-lg">
              私は日本語<span class="text-purple-500">も</span>勉強します。
            </p>
            <p class="text-sm">
              I study Japanese too (in addition to other subjects)
            </p>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <h3 class="text-lg font-medium">Particle Combinations with も</h3>
        <div class="mt-2 grid grid-cols-2 gap-4">
          <div>
            <h4 class="font-medium">Replace with も:</h4>
            <div class="mt-1 space-y-2">
              <p>は → も</p>
              <p>を → も</p>
            </div>
          </div>
          <div>
            <h4 class="font-medium">Keep and add も:</h4>
            <div class="mt-1 space-y-2">
              <p>に → にも</p>
              <p>で → でも</p>
            </div>
          </div>
        </div>
        <div class="mt-2">
          <p class="font-japanese text-lg">
            図書館<span class="text-orange-500">で</span>
            <span class="text-purple-500">も</span>勉強します。
          </p>
          <p class="text-sm">(I) study at the library too.</p>
        </div>
      </div>

      <div class="mt-4 rounded-lg border border-black/50 bg-gray-500/10 p-3">
        <p class="font-medium">Key Points</p>
        <ul class="mt-2 list-inside list-disc space-y-1">
          <li>も replaces は and を</li>
          <li>Other particles (に, で) stay and も follows them</li>
          <li>Position of も indicates what is "also" happening</li>
          <li>
            Put も after the thing that's similar to something mentioned before
          </li>
        </ul>
      </div>
    </div>
  )
}
