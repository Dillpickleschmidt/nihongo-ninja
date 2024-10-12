import { A } from "@solidjs/router"
import { Button } from "@/components/ui/button"
import MinutesChart1 from "@/features/charts/MinutesChart1"
import MinutesChart2 from "@/features/charts/MinutesChart2"

export default function page() {
  return (
    <>
      <h1 class="mb-8 px-20 pt-20 text-center text-4xl font-medium">
        Counting Minutes - <span class="font-japanese">ぷん・ふん</span>
      </h1>
      <div class="w-full justify-center lg:flex lg:gap-3">
        <div class="my-3 flex justify-center">
          <MinutesChart1 />
        </div>
        <div class="my-3 flex justify-center">
          <MinutesChart2 />
        </div>
      </div>
      <div class="flex w-full justify-center">
        <div class="w-full max-w-[1000px] space-y-6 px-16 pb-32 md:px-24">
          <h2 class="mt-12 text-center text-2xl font-bold">
            Japanese uses <span class="font-japanese">ぷん・ふん</span> for
            counting minutes.
          </h2>
          <div class="flex justify-center">
            <ul class="list-inside list-disc space-y-2">
              <li>
                Five past twelve {"->"}{" "}
                <span class="font-japanese text-xl">じゅうにじごふん</span>
              </li>
              <li>
                4:20 {"->"}{" "}
                <span class="font-japanese text-xl">よじにじっぷん</span>
              </li>
              <li>
                7:37 {"->"}{" "}
                <span class="font-japanese text-xl">
                  しちじさんじゅうななふん
                </span>
              </li>
              <li>
                10:15 {"->"}{" "}
                <span class="font-japanese text-xl">じゅうじじゅうごふん</span>
              </li>
            </ul>
          </div>
          <h3 class="!mt-9 text-center font-bold">
            You'll just have to memorize which minutes from 1-10 use ぷん and
            which use ふん.
          </h3>
          <p class="text-center italic">You'll get better with practice!</p>
        </div>
      </div>
      <div class="absolute bottom-16 right-16">
        <A href="/learn/chapter-1/practice/minutes">
          <Button>Next Lesson {"->"}</Button>
        </A>
      </div>
    </>
  )
}
