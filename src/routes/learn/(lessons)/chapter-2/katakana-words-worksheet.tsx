import ContentBox from "@/components/ContentBox"
import CustomTextArea from "@/components/CustomTextArea"
import Furigana from "@/components/text/Furigana"
import { TextField, TextFieldRoot } from "@/components/ui/textfield"

export default function page() {
  return (
    <ContentBox
      nextButtonText="Next Lesson ->"
      nextButtonLink="/learn/chapter-2/things"
    >
      <h1 class="px-8 pb-12 pt-24 text-center text-[2rem] font-medium leading-[2.875rem] lg:px-20">
        <span class="text-[2.65rem] font-medium">Get ready</span> to see your{" "}
        <span class="text-4xl font-bold">name</span>,{" "}
        <span class="text-4xl font-bold">hometown</span>, and{" "}
        <span class="text-4xl font-bold">school</span> in Katakana—{" "}
        <span class="text-4xl font-light">written like never before!</span>
      </h1>
      <div class="space-y-6 px-16 pb-32 md:px-24">
        <div>
          <h2 class="text-center text-2xl font-bold">Your Name</h2>
          <p class="mt-2">
            Type your name in Katakana using the box below. Write your first
            name first. Use a middle dot "・" to separate the first and last
            names.
          </p>
        </div>
        <div class="flex justify-around">
          <p class="font-bold">Example:</p>
          <p>
            John Smith {"->"}{" "}
            <span class="font-japanese text-xl">ジョン・スミス</span>
          </p>
        </div>
        <div>
          <h3 class="font-bold">Pro Tips</h3>
          <ul class="list-inside list-disc space-y-3 text-base">
            <li>
              Press <span class="font-bold">F7</span> to switch text to
              katakana.
            </li>
            <li>
              The middle dot is located on the slash key{" "}
              <span class="font-black">/</span>.
            </li>
            <li>
              Some names have small characters that can be written automatically{" "}
              {"->"}{" "}
              <span class="whitespace-nowrap font-japanese text-xl">
                ジョン
              </span>{" "}
              is just <span class="font-black">j</span>+
              <span class="font-black">o</span>+
              <span class="font-black">n</span>.
            </li>
            <li>
              The name <span class="font-japanese text-xl">ディラン</span>{" "}
              (Dylan) is more difficult. <span class="font-black">d</span>+
              <span class="font-black">i</span> makes{" "}
              <span class="font-japanese text-xl">ヂ</span> instead of{" "}
              <span class="font-japanese text-xl">ディ</span>.
            </li>
            <li>
              Press <span class="font-black">x</span> before typing a character
              to make it small {"->"} <span class="font-black">d</span>+
              <span class="font-black">e</span>+
              <span class="font-black">x</span>+
              <span class="font-black">i</span> makes{" "}
              <span class="font-japanese text-xl">ディ</span>.
            </li>
            <li>
              For long vowels, press the hyphen key{" "}
              <span class="font-black">-</span> {"->"}{" "}
              <span class="font-black">m</span>+
              <span class="font-black">a</span>+
              <span class="font-black">-</span>+
              <span class="font-black">k</span>+
              <span class="font-black">u</span> makes{" "}
              <span class="font-japanese text-xl">マーク</span> (Mark).
            </li>
          </ul>
        </div>
        <div class="flex">
          <h4 class="mt-4 w-48 text-center font-japanese text-2xl">
            <Furigana furigana={<span class="text-base">なまえ</span>}>
              名前
            </Furigana>
          </h4>
          <CustomTextArea
            class="h-28 w-full resize-none font-japanese text-xl"
            spacing={14}
          />
        </div>

        <div>
          <h2 class="text-center text-2xl font-bold">Your Hometown</h2>
          <p class="mt-2">
            Fill in the English (left) and in Katakana (right) using the boxes
            below.
          </p>
          <p class="mt-3 text-sm italic">
            *Feel free to google the Katakana if you're unsure.
          </p>
        </div>

        <div class="flex">
          <p class="w-1/3 text-center font-bold">Example:</p>
          <p class="w-2/3 text-center">
            Virginia {"->"}{" "}
            <span class="font-japanese text-xl">バージニア</span>
          </p>
        </div>
        <div class="flex items-center">
          <div class="mr-12 w-1/3 text-center font-japanese text-2xl">
            <TextFieldRoot>
              <TextField type="text" placeholder="State" class="bg-card" />
            </TextFieldRoot>
          </div>
          <CustomTextArea
            class="h-28 w-2/3 resize-none font-japanese text-xl"
            spacing={14}
          />
        </div>

        <div class="flex">
          <p class="w-1/3 text-center font-bold">Example:</p>
          <p class="w-2/3 text-center">
            Front Royal {"->"}{" "}
            <span class="font-japanese text-xl">フロントロヤル</span>
          </p>
        </div>
        <div class="flex items-center">
          <div class="mr-12 w-1/3 text-center font-japanese text-2xl">
            <TextFieldRoot>
              <TextField
                type="text"
                placeholder="County/City/Town Name"
                class="bg-card"
              />
            </TextFieldRoot>
          </div>
          <CustomTextArea
            class="h-28 w-2/3 resize-none font-japanese text-xl"
            spacing={14}
          />
        </div>

        <h2 class="!mt-12 text-center text-2xl font-bold">Your School</h2>
        <div class="flex">
          <p class="w-1/3 text-center font-bold">Example:</p>
          <p class="w-2/3 text-center">
            University of Virginia {"->"}{" "}
            <span class="font-japanese text-xl">バージニアだいがく</span>
          </p>
        </div>
        <div class="flex items-center">
          <div class="mr-12 w-1/3 text-center font-japanese text-2xl">
            <TextFieldRoot>
              <TextField
                type="text"
                placeholder="School Name"
                class="bg-card"
              />
            </TextFieldRoot>
          </div>
          <CustomTextArea
            class="h-28 w-2/3 resize-none font-japanese text-xl"
            spacing={14}
          />
        </div>

        <div class="flex">
          <p class="w-1/3 text-center font-bold">Example:</p>
          <p class="w-2/3 text-center">
            Charlottesville, Virginia {"->"}{" "}
            <span class="font-japanese text-xl">
              シャーロッツビル、バージニア
            </span>
          </p>
        </div>
        <div class="flex items-center">
          <div class="mr-12 w-1/3 text-center font-japanese text-2xl">
            <TextFieldRoot>
              <TextField type="text" placeholder="Location" class="bg-card" />
            </TextFieldRoot>
          </div>
          <CustomTextArea
            class="h-28 w-2/3 resize-none font-japanese text-xl"
            spacing={14}
          />
        </div>
        <div>
          <h2 class="text-center text-2xl font-bold">Other Katakana Words</h2>
          <p class="mt-2">
            You are preparing things to take to Japan and want to ask them if
            you can borrow/use the following items. List them in Katakana.
          </p>
        </div>
        <div class="flex items-center">
          <h4 class="w-48 text-center">Hair Dryer</h4>
          <TextFieldRoot class="w-full">
            <TextField type="text" class="bg-card font-japanese text-lg" />
          </TextFieldRoot>
        </div>
        <div class="flex items-center">
          <h4 class="w-48 text-center">Iron</h4>
          <TextFieldRoot class="w-full">
            <TextField type="text" class="bg-card font-japanese text-lg" />
          </TextFieldRoot>
        </div>
        <div class="flex items-center">
          <h4 class="w-48 text-center">Blanket</h4>
          <TextFieldRoot class="w-full">
            <TextField type="text" class="bg-card font-japanese text-lg" />
          </TextFieldRoot>
        </div>
        <div class="flex items-center">
          <h4 class="w-48 text-center">Internet</h4>
          <TextFieldRoot class="w-full">
            <TextField type="text" class="bg-card font-japanese text-lg" />
          </TextFieldRoot>
        </div>
      </div>
    </ContentBox>
  )
}
