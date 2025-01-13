import Furigana from "@/components/text/Furigana"

export default function AdjectiveConjugation() {
  return (
    <div class="h-full w-full p-8 text-base text-black">
      <h1 class="text-center text-xl font-bold">
        Japanese Adjectives: <span class="text-teal-500">い</span> vs{" "}
        <span class="text-yellow-500">な</span>
      </h1>

      <div class="mt-4 grid grid-cols-2 gap-4">
        <div>
          <h3 class="text-lg font-medium text-teal-500">い-Adjectives</h3>
          <p class="text-sm">End in い: 高い, 安い, 寒い</p>
          <div class="mt-4">
            <p class="font-medium">Present Tense</p>
            <div class="mt-1 space-y-2">
              <div>
                <p class="font-japanese text-lg">寒いです</p>
                <p class="text-sm">[base + です]</p>
              </div>
              <div>
                <p class="font-japanese text-lg">寒くないです</p>
                <p class="text-sm">[replace い with くない]</p>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <p class="font-medium">Past Tense</p>
            <div class="mt-1 space-y-2">
              <div>
                <p class="font-japanese text-lg">寒かったです</p>
                <p class="text-sm">[replace い with かった]</p>
              </div>
              <div>
                <p class="font-japanese text-lg">寒くなかったです</p>
                <p class="text-sm">[replace い with くなかった]</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-medium text-yellow-500">な-Adjectives</h3>
          <p class="text-sm">Don't end in い: 静か, 元気, きれい</p>
          <div class="mt-4">
            <p class="font-medium">Present Tense</p>
            <div class="mt-1 space-y-2">
              <div>
                <p class="font-japanese text-lg">静かです</p>
                <p class="text-sm">[base + です]</p>
              </div>
              <div>
                <p class="font-japanese text-lg">静かじゃないです</p>
                <p class="text-sm">[base + じゃない]</p>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <p class="font-medium">Past Tense</p>
            <div class="mt-1 space-y-2">
              <div>
                <p class="font-japanese text-lg">静かでした</p>
                <p class="text-sm">[base + でした]</p>
              </div>
              <div>
                <p class="font-japanese text-lg">静かじゃなかったです</p>
                <p class="text-sm">[base + じゃなかった]</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <h3 class="text-lg font-medium">いい (Good) - Special Case</h3>
        <div class="mt-2 grid grid-cols-2 gap-4">
          <div>
            <p class="font-bold">Present</p>
            <p class="font-japanese text-lg">いいです / よくないです</p>
          </div>
          <div>
            <p class="font-bold">Past</p>
            <p class="font-japanese text-lg">よかったです / よくなかったです</p>
          </div>
        </div>
      </div>

      <div class="mt-4 rounded-lg border border-black/50 bg-gray-500/10 p-3">
        <p class="font-medium">Key Points</p>
        <ul class="mt-2 list-inside list-disc space-y-1">
          <li>い-adjectives change form (drop い, add new ending)</li>
          <li>な-adjectives don't change form (add です/でした)</li>
          <li>Some な-adjectives end in い (きれい, 嫌い)</li>
          <li>If it doesn't end in い, it must be a な-adjective</li>
          <li>いい conjugates from よい base</li>
        </ul>
      </div>
    </div>
  )
}
