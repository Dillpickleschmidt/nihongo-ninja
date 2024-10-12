import { Button } from "@/components/ui/button"
import { A } from "@solidjs/router"

export default function page() {
  return (
    <>
      <div class="flex w-full justify-center pb-32">
        <div class="relative w-full max-w-[1300px]">
          <h1 class="px-12 pb-6 pt-28 text-center text-4xl font-semibold md:px-28">
            MyKikitori - Conversation 3
          </h1>
          <div class="space-y-6 px-6 md:px-24">
            <h2 class="mt-6 text-center text-2xl font-bold">
              It's time for some listening practice!
            </h2>
            <p>
              Head over to MyKikitori - Lesson 1 and listen to{" "}
              <span class="text-xl font-bold">Conversation 3</span>, then answer
              the questions via the{" "}
              <span class="font-black">Take the Quiz!</span> button.
            </p>
            <p>
              Once you complete the quiz, come back here and move on to the next
              module when you're ready.
            </p>
            <div class="flex justify-center pt-3">
              <a target="_blank" href="https://www.mykikitori.com/lesson-1">
                <Button size="lg">MyKikitori - Lesson 1</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute bottom-16 right-16">
        <A href="/learn">
          <Button>Complete Chapter 1 {"->"}</Button>
        </A>
      </div>
    </>
  )
}
