import Furigana from "@/components/text/Furigana"

export default function GenericCounters() {
  return (
    <div class="flex w-full justify-center rounded-md bg-background-secondary px-16 pb-12 pt-8 dark:text-primary-foreground">
      <ul class="w-full [&>*]:flex [&>*]:min-w-72 [&>*]:items-center [&>*]:justify-between [&>*]:border-b [&>*]:border-black [&>*]:py-2 [&>*]:pl-2 [&>*]:pr-4">
        {/* Individual Box */}
        <li class="text-2xl">
          <div class="flex w-full">
            <div class="w-2/5 font-japanese font-semibold">一つ</div>
            <div class="font-japanese font-semibold">ひとつ</div>
          </div>
          <div class="whitespace-nowrap text-end text-lg">1 thing</div>
        </li>
        <li class="text-2xl">
          <div class="flex w-full">
            <div class="w-2/5 font-japanese font-semibold">二つ</div>
            <div class="font-japanese font-semibold">ふたつ</div>
          </div>
          <div class="whitespace-nowrap text-end text-lg">2 things</div>
        </li>
        <li class="text-2xl">
          <div class="flex w-full">
            <div class="w-2/5 font-japanese font-semibold">三つ</div>
            <div class="font-japanese font-semibold">みつ</div>
          </div>
          <div class="whitespace-nowrap text-end text-lg">3 things</div>
        </li>
        <li class="text-2xl">
          <div class="flex w-full">
            <div class="w-2/5 font-japanese font-semibold">四つ</div>
            <div class="font-japanese font-semibold">よつ</div>
          </div>
          <div class="whitespace-nowrap text-end text-lg">4 things</div>
        </li>
        <li class="text-2xl">
          <div class="flex w-full">
            <div class="w-2/5 font-japanese font-semibold">五つ</div>
            <div class="font-japanese font-semibold">いつつ</div>
          </div>
          <div class="whitespace-nowrap text-end text-lg">5 things</div>
        </li>
        <li class="text-2xl">
          <div class="flex w-full">
            <div class="w-2/5 font-japanese font-semibold">六つ</div>
            <div class="font-japanese font-semibold">むっつ</div>
          </div>
          <div class="whitespace-nowrap text-end text-lg">6 things</div>
        </li>
        <li class="text-2xl">
          <div class="flex w-full">
            <div class="w-2/5 font-japanese font-semibold">七つ</div>
            <div class="font-japanese font-semibold">ななつ</div>
          </div>
          <div class="whitespace-nowrap text-end text-lg">7 things</div>
        </li>
        <li class="text-2xl">
          <div class="flex w-full">
            <div class="w-2/5 font-japanese font-semibold">八つ</div>
            <div class="font-japanese font-semibold">やっつ</div>
          </div>
          <div class="whitespace-nowrap text-end text-lg">8 things</div>
        </li>
        <li class="text-2xl">
          <div class="flex w-full">
            <div class="w-2/5 font-japanese font-semibold">九つ</div>
            <div class="font-japanese font-semibold">ここのつ</div>
          </div>
          <div class="whitespace-nowrap text-end text-lg">9 things</div>
        </li>
        <li class="text-2xl">
          <div class="flex w-full">
            <div class="w-2/5 font-japanese font-semibold">十</div>
            <div class="font-japanese font-semibold">とお</div>
          </div>
          <div class="whitespace-nowrap text-end text-lg">10 things</div>
        </li>
        <li class="text-2xl">
          <div class="flex w-full">
            <div class="w-2/5 font-japanese font-semibold text-sky-500">
              いくつ
            </div>
          </div>
          <div class="whitespace-nowrap text-end text-lg">How many?</div>
        </li>
      </ul>
    </div>
  )
}
