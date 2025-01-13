import Furigana from "@/components/text/Furigana"

export default function SukiKirai() {
  return (
    <div class="h-full w-full p-8 text-base text-black">
      <h1 class="text-center text-xl font-bold">
        Using <span class="font-japanese text-green-500">好き</span> and{" "}
        <span class="font-japanese text-red-500">嫌い</span>
      </h1>

      <div class="mt-4">
        <h2 class="text-lg font-semibold">Basic Structure</h2>
        <p class="mt-2 text-center text-xl">
          [person] は [thing] が <span class="font-japanese">好き・嫌い</span>
          です
        </p>
        <div class="mt-2 text-center">
          <p class="font-japanese text-lg">私は音楽が好きです。</p>
          <p class="text-sm">I like music.</p>
        </div>
      </div>

      <div class="mt-6">
        <h3 class="text-lg font-medium">Particle Usage</h3>
        <div class="mt-2 grid grid-cols-2 gap-4">
          <div>
            <p class="font-medium text-green-500">Use が:</p>
            <div class="mt-1 space-y-2">
              <p class="font-japanese text-lg">犬が好きです。</p>
              <p class="text-sm">I like dogs</p>
              <p class="text-xs">(simple statement)</p>
            </div>
          </div>
          <div>
            <p class="font-medium text-blue-500">Use は:</p>
            <div class="mt-1 space-y-2">
              <p class="font-japanese text-lg">
                犬は好きですが、猫は嫌いです。
              </p>
              <p class="text-sm">I like dogs but hate cats</p>
              <p class="text-xs">(comparison/contrast)</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <h3 class="text-lg font-medium">Modifying Nouns</h3>
        <div class="mt-2 space-y-2">
          <p class="font-japanese text-lg">私の好きな音楽</p>
          <p class="text-sm">The music I like</p>
          <p class="text-xs">Don't forget な when modifying nouns!</p>
        </div>
      </div>

      <div class="mt-6">
        <h3 class="text-lg font-medium">Adding Intensity</h3>
        <div class="mt-2 grid grid-cols-2 gap-4">
          <div>
            <p class="font-japanese text-lg">大好き</p>
            <p class="text-sm">love/really like</p>
          </div>
          <div>
            <p class="font-japanese text-lg">大嫌い</p>
            <p class="text-sm">hate/really dislike</p>
          </div>
        </div>
      </div>

      <div class="mt-4 rounded-lg border border-black/50 bg-gray-500/10 p-3">
        <p class="font-medium">Cultural Points</p>
        <ul class="mt-2 list-inside list-disc space-y-1">
          <li>好き for people implies romantic interest</li>
          <li>嫌い is very strong - avoid using directly</li>
          <li>Use ちょっと... to politely decline</li>
          <li>
            好きでもきらいでもない - "I don't like or dislike"{" "}
            <small>(for neutral feelings)</small>
          </li>
        </ul>
      </div>
    </div>
  )
}
