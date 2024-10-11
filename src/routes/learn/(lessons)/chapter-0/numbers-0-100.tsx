import ContentBox from "@/components/ContentBox"
import Romaji from "@/components/text/Romaji"
import { Button } from "@/components/ui/button"
import Numbers10 from "@/features/charts/Numbers10"
import Numbers100 from "@/features/charts/Numbers100"
import { A } from "@solidjs/router"

export default function JapanesePronunciation() {
  return (
    <>
      <h1 class="mb-8 px-20 pt-20 text-center text-4xl font-medium leading-[3.25rem]">
        Let's learn the basic numbers.
      </h1>
      <div class="w-full justify-center lg:flex">
        <div class="mx-12 flex justify-center">
          {/* Numbers List Box */}
          <div>
            <Numbers10 />
          </div>
        </div>
        <div>
          <div class="space-y-12 px-16 pt-12 md:px-28 lg:pl-6 xl:pr-24">
            <p>
              You'll notice that numbers 4, 7, and 9 have two options. Japanese
              speakers use either option, so you'll want to know both!
            </p>
            <p>
              Just like most languages, 1-10 are essential numbers to know, but
              even more so in Japanese (and that's a good thing). Unlike
              English, there's no unique words for eleven, twelve, thirteen,
              etc. Nor are there even unique words for twenty, thirty, forty,
              etc. Instead, you combine the numbers{" "}
              <span class="whitespace-nowrap">1-10</span> to create them.
            </p>
            <div>
              <p class="text-center">
                To make eleven, you just put together &quot;ten&quot; and
                &quot;one&quot; to make
              </p>
              <div class="mt-2 flex justify-center text-center text-3xl">
                <Romaji romaji="jyuu">じゅう</Romaji>
                <span class="text-orange-400">
                  <Romaji romaji="ichi">いち</Romaji>
                </span>
                .
              </div>
            </div>
            <div>
              <p class="text-center">
                To make twenty, you put together &quot;two&quot; and
                &quot;ten&quot; to make
              </p>
              <div class="mt-2 flex justify-center text-3xl">
                <span class="text-red-400">
                  <Romaji romaji="ni">に</Romaji>
                </span>
                <Romaji romaji="jyuu">じゅう</Romaji>.
              </div>
            </div>
            <div>
              <div class="text-center">
                To make twenty-one, you put together &quot;two&quot;,
                &quot;ten&quot; and &quot;one&quot; to make
              </div>
              <div class="mt-2 flex justify-center text-3xl">
                <span class="text-red-400">
                  <Romaji romaji="ni">に</Romaji>
                </span>
                <Romaji romaji="jyuu">じゅう</Romaji>
                <span class="text-orange-400">
                  <Romaji romaji="ichi">いち</Romaji>
                </span>
                .
              </div>
            </div>
            <div>
              <p class="text-center">
                To make fifty-six, you put together &quot;five&quot;,
                &quot;ten&quot; and &quot;six&quot; to make
              </p>
              <div class="mt-2 flex justify-center text-3xl">
                <span class="text-red-400">
                  <Romaji romaji="go">ご</Romaji>
                </span>
                <Romaji romaji="jyuu">じゅう</Romaji>
                <span class="text-orange-400">
                  <Romaji romaji="roku">ろく</Romaji>
                </span>
                .
              </div>
            </div>
            <h3 class="text-center text-2xl font-semibold">
              Think you can say 98? Give it a try!
            </h3>
          </div>
          <div class="mt-24 px-24">{/* <Numbers100 /> */}</div>
        </div>
      </div>
      <div class="pb-32 dark:text-primary-foreground">
        <Numbers100 />
      </div>
      <div class="absolute bottom-16 right-16">
        <A href="/learn/chapter-0/number-matching">
          <Button>Number Matching {"->"}</Button>
        </A>
      </div>
    </>
  )
}
