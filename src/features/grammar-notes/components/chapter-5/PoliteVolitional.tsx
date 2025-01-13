import Furigana from "@/components/text/Furigana"

export default function PoliteVolitional() {
  return (
    <div class="h-full w-full p-8 text-base text-black">
      <h1 class="text-center text-xl font-bold">
        Making Suggestions:{" "}
        <span class="font-japanese text-pink-400">ましょうか</span> and{" "}
        <span class="font-japanese text-violet-600">ましょう</span>
      </h1>

      <div class="mt-4">
        <h2 class="text-lg font-semibold">Basic Pattern</h2>
        <p class="mt-2 text-center">
          Verb (ます stem) + <span class="font-japanese">ましょう(か)</span>
        </p>
        <div class="mt-2 text-center text-sm">
          <p>行きます → 行き → 行きましょうか</p>
        </div>
      </div>

      <div class="mt-6">
        <h3 class="text-lg font-medium">Comparing Forms</h3>
        <div class="mt-2 grid grid-cols-2 gap-4">
          <div>
            <p class="font-japanese text-lg">
              映画を見<span class="text-teal-500">ませんか</span>
            </p>
            <p class="text-sm">Would you like to watch a movie?</p>
            <p class="text-xs">Formal invitation, good for first-time asks</p>
          </div>
          <div>
            <p class="font-japanese text-lg">
              映画を見<span class="text-pink-400">ましょうか</span>
            </p>
            <p class="text-sm">Shall we watch a movie?</p>
            <p class="text-xs">Casual suggestion between friends</p>
          </div>
        </div>
        <div class="mt-4">
          <p class="font-japanese text-lg">
            映画を見<span class="text-violet-600">ましょう</span>
          </p>
          <p class="text-sm">Let's watch a movie!</p>
          <p class="text-xs">Stronger suggestion, expecting agreement</p>
        </div>
      </div>

      <div class="mt-6">
        <h3 class="text-lg font-medium">Example Context</h3>
        <div class="mt-2 grid grid-cols-2 gap-4">
          <div>
            <h3 class="text-lg font-medium">Invitation vs Suggestion</h3>
            <div class="mt-2 space-y-2">
              <p class="font-japanese text-lg">
                デートに行き<span class="text-teal-500">ませんか</span>
              </p>
              <p class="text-xs">Would you like to go on a date? (first ask)</p>
              <p class="font-japanese text-lg">
                デートに行き<span class="text-pink-400">ましょうか</span>
              </p>
              <p class="text-xs">Shall we go on a date? (already dating)</p>
            </div>
          </div>
          <div>
            <h3 class="text-lg font-medium">Soft vs Strong</h3>
            <div class="mt-1 space-y-2">
              <p class="font-japanese text-lg">
                休み<span class="text-pink-400">ましょうか</span>
              </p>
              <p class="text-xs">Shall we take a break? (tentative)</p>
              <p class="font-japanese text-lg">
                休み<span class="text-violet-600">ましょう</span>
              </p>
              <p class="text-xs">Let's take a break! (decisive)</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-4 rounded-lg border border-black/50 bg-gray-500/10 p-3">
        <p class="font-medium">Key Points</p>
        <ul class="mt-2 list-inside list-disc space-y-1">
          <li>ませんか → formal invitation, asking permission/interest</li>
          <li>ましょうか → casual suggestion, open to decline</li>
          <li>ましょう → stronger suggestion, expecting agreement</li>
          <li>Consider relationship and context when choosing form</li>
          <li>All forms use verb's ます stem</li>
        </ul>
      </div>
    </div>
  )
}
