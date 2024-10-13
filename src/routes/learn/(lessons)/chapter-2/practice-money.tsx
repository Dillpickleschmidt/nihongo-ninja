import ContentBox from "@/components/ContentBox"
import CustomTextArea from "@/components/CustomTextArea"
import Furigana from "@/components/text/Furigana"
import Romaji from "@/components/text/Romaji"
import { Button } from "@/components/ui/button"
import { TextField, TextFieldRoot } from "@/components/ui/textfield"
import { A } from "@solidjs/router"
import { For } from "solid-js"

export default function page() {
  // Image data with random prices
  const imageData = [
    {
      src: "/img/chapter-2/practice-money/bicycle.png",
      alt: "bicycle",
      price: getRandomPrice(10000, 50000),
    },
    {
      src: "/img/chapter-2/practice-money/handbag.png",
      alt: "handbag",
      price: getRandomPrice(3000, 10000),
    },
    {
      src: "/img/chapter-2/practice-money/jeans.png",
      alt: "jeans",
      price: getRandomPrice(2000, 8000),
    },
    {
      src: "/img/chapter-2/practice-money/notebook.png",
      alt: "notebook",
      price: getRandomPrice(100, 1000),
    },
    {
      src: "/img/chapter-2/practice-money/shoes.png",
      alt: "shoes",
      price: getRandomPrice(3000, 15000),
    },
    {
      src: "/img/chapter-2/practice-money/umbrella.png",
      alt: "umbrella",
      price: getRandomPrice(500, 3000),
    },
    {
      src: "/img/chapter-2/practice-money/wallet.png",
      alt: "wallet",
      price: getRandomPrice(2000, 10000),
    },
    {
      src: "/img/chapter-2/practice-money/watch.png",
      alt: "watch",
      price: getRandomPrice(5000, 30000),
    },
    {
      src: "/img/chapter-2/practice-money/book.png",
      alt: "book",
      price: getRandomPrice(500, 2000),
    },
    {
      src: "/img/chapter-2/practice-money/fountain-pen.png",
      alt: "fountain pen",
      price: getRandomPrice(1000, 5000),
    },
    {
      src: "/img/chapter-2/practice-money/tshirt.png",
      alt: "tshirt",
      price: getRandomPrice(1000, 5000),
    },
    {
      src: "/img/chapter-2/practice-money/sleeping-hat.png",
      alt: "sleeping hat",
      price: getRandomPrice(500, 2000),
    },
    {
      src: "/img/chapter-2/practice-money/smartphone.png",
      alt: "smartphone",
      price: getRandomPrice(30000, 100000),
    },
    {
      src: "/img/chapter-2/practice-money/newspaper.png",
      alt: "newspaper",
      price: getRandomPrice(100, 500),
    },
  ]

  // Function to generate a random price within a given range, rounded to the nearest 50 yen
  function getRandomPrice(min: number, max: number) {
    const price = Math.floor(Math.random() * (max - min + 1)) + min
    return Math.round(price / 50) * 50
  }

  // Function to shuffle an array randomly
  function shuffleArray(array: any[]) {
    const shuffledArray = [...array] // Copy the original array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)) // Generate a random index
      ;[shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ] // Swap elements
    }
    return shuffledArray
  }

  // Shuffle the image data
  const shuffledImages = shuffleArray(imageData)

  return (
    <>
      <h1 class="px-28 pb-6 pt-28 text-center text-5xl font-semibold">
        Practice Money
      </h1>
      <div class="px-6 pb-32 sm:px-16 xl:px-48">
        <div class="mx-auto mt-12 grid grid-cols-[repeat(auto-fill,minmax(175px,_1fr))] justify-center gap-x-6 gap-y-12 sm:gap-12">
          <For each={shuffledImages}>
            {(image, index) => (
              <div class="flex w-full flex-col items-center">
                <div class="relative h-28 w-28">
                  <img src={image.src} alt={image.alt} />
                </div>
                <label class="mt-3 text-xl font-bold">¥{image.price}</label>
              </div>
            )}
          </For>
        </div>
        <div class="mt-12 flex w-full justify-center">
          <div class="w-full max-w-[750px] space-y-9">
            <h2 class="text-center text-2xl font-bold">
              Answer the questions in{" "}
              <span class="font-japanese">ひらがな</span>.
            </h2>
            <div class="flex justify-center">
              <ol class="w-full list-decimal space-y-5 lg:mx-12">
                <div class="flex items-end font-japanese text-2xl">
                  <p class="w-full">
                    <Furigana
                      furigana={<span class="text-base">じてんしゃ</span>}
                    >
                      自転車
                    </Furigana>
                    はいくらですか。
                  </p>
                  <TextFieldRoot>
                    <TextField type="text" class="text-xl" />
                  </TextFieldRoot>
                </div>
                <div class="flex items-end font-japanese text-2xl">
                  <p class="w-full">
                    この
                    <Furigana furigana={<span class="text-base">かばん</span>}>
                      鞄
                    </Furigana>
                    はいくらですか。
                  </p>
                  <TextFieldRoot>
                    <TextField type="text" class="text-xl" />
                  </TextFieldRoot>
                </div>
                <div class="flex items-end font-japanese text-2xl">
                  <p class="w-full">ジーンズはいくらですか。</p>
                  <TextFieldRoot>
                    <TextField type="text" class="text-xl" />
                  </TextFieldRoot>
                </div>
                <div class="flex items-end font-japanese text-2xl">
                  <p class="w-full">このノートはいくらですか。</p>
                  <TextFieldRoot>
                    <TextField type="text" class="text-xl" />
                  </TextFieldRoot>
                </div>
                <div class="flex items-end font-japanese text-2xl">
                  <p class="w-full">
                    この
                    <Furigana furigana={<span class="text-base">くつ</span>}>
                      靴
                    </Furigana>
                    はいくらですか。
                  </p>
                  <TextFieldRoot>
                    <TextField type="text" class="text-xl" />
                  </TextFieldRoot>
                </div>
                <div class="flex items-end font-japanese text-2xl">
                  <p class="w-full">
                    <Furigana furigana={<span class="text-base">かさ</span>}>
                      傘
                    </Furigana>
                    はいくらですか。
                  </p>
                  <TextFieldRoot>
                    <TextField type="text" class="text-xl" />
                  </TextFieldRoot>
                </div>
              </ol>
            </div>

            <h2 class="!mt-16 text-center text-2xl font-bold">
              Conversation Example 1
            </h2>
            <ul class="mt-6 space-y-3">
              <li>
                <strong>Customer: </strong>
                <span class="font-japanese text-2xl">
                  すみません。このペンはいくらですか。
                </span>
              </li>
              <li>
                <strong>Shopkeeper: </strong>
                <span class="font-japanese text-2xl">三千七百円です。</span>
              </li>
              <li>
                <strong>Customer: </strong>
                <span class="font-japanese text-2xl">
                  えっと、その
                  <Furigana furigana={<span class="text-sm">かさ</span>}>
                    傘
                  </Furigana>
                  は？
                </span>
              </li>
              <li>
                <strong>Shopkeeper: </strong>
                <span class="font-japanese text-2xl">二千三百五十円です。</span>
              </li>
              <li>
                <strong>Customer: </strong>
                <span class="font-japanese text-2xl">
                  じゃあ、その
                  <Furigana furigana={<span class="text-sm">かさ</span>}>
                    傘
                  </Furigana>
                  をください。
                </span>
              </li>
            </ul>

            <h2 class="!mt-16 text-center text-2xl font-bold">
              Conversation Example 2
            </h2>
            <p class="italic text-muted-foreground">
              Two students walk into a store together:
            </p>
            <ul class="!mt-6 space-y-3">
              <li>
                <strong>Student 1: </strong>
                <span class="font-japanese text-2xl">
                  すみません。このノートはいくらですか。
                </span>
              </li>
              <li>
                <strong>Shopkeeper: </strong>
                <span class="font-japanese text-2xl">七百円です。</span>
              </li>
              <li class="!mt-2">
                <strong>Student 2: </strong>
                <span class="font-japanese text-2xl">
                  <Romaji romaji="a little">ちょっと</Romaji>
                  <Furigana furigana={<span class="text-sm">たか</span>}>
                    高
                  </Furigana>
                  いですね。あのノートはいくらですか。
                </span>
              </li>
              <li class="!mt-0">
                <strong>Shopkeeper: </strong>
                <span class="font-japanese text-2xl">あれは三百円です。</span>
              </li>
              <li>
                <strong>Student 1: </strong>
                <span class="font-japanese text-2xl">
                  じゃあ、あのノートをください。
                </span>
              </li>
              <li class="!mt-2">
                <strong>Student 2: </strong>
                <span class="font-japanese text-2xl">
                  <Romaji romaji="also">それと</Romaji>
                  、その
                  <Furigana furigana={<span class="text-sm">とけい</span>}>
                    時計
                  </Furigana>
                  はいくらですか。
                </span>
              </li>
              <li class="!mt-0">
                <strong>Shopkeeper: </strong>
                <span class="font-japanese text-2xl">二千八百円です。</span>
              </li>
              <li class="!mt-2">
                <strong>Student 1: </strong>
                <span class="font-japanese text-2xl">
                  じゃあ、その
                  <Furigana furigana={<span class="text-sm">とけい</span>}>
                    時計
                  </Furigana>
                  もください。
                </span>
              </li>
            </ul>

            <h2 class="!mt-16 text-center text-2xl font-bold">
              Try it yourself!
            </h2>
            <p class="">
              Create a conversation using the phrases you've learned. Challenge
              yourself to use more advanced grammar such as{" "}
              <span class="font-japanese not-italic">も, が, じゃない,</span>{" "}
              etc. as well as sentence-ending particles like{" "}
              <span class="font-japanese not-italic">ね</span> and{" "}
              <span class="font-japanese not-italic">よ</span>.
            </p>
            <p class="!mt-3 text-base italic text-muted-foreground">
              *Remember to use the{" "}
              <A
                href={"/learn/chapter-2/grammar-notes"}
                class="font-bold underline underline-offset-2"
              >
                Grammar Notes
              </A>{" "}
              posted at the beginning of the chapter as a reference!
            </p>
            <CustomTextArea
              spacing={14}
              class="min-h-96 font-japanese text-xl"
            />
          </div>
        </div>
      </div>
      <div class="absolute bottom-16 right-16">
        <A href="/learn/chapter-2/practice/japanese-money">
          <Button>Next Lesson {"->"}</Button>
        </A>
      </div>
    </>
  )
}
