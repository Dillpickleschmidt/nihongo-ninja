import { Button } from "@/components/ui/button"
import { A } from "@solidjs/router"
import {
  ScrollText,
  GraduationCap,
  Gamepad,
  Volume2,
  Library,
  BookPlus,
  TicketPlus,
  Pencil,
} from "lucide-solid"

type SidebarContentProps = {
  inDialog?: boolean
}

export default function SidebarContent({
  inDialog = false,
}: SidebarContentProps) {
  return (
    <>
      <a href="https://jpdb.io">
        <Button
          size="lg"
          variant="outline"
          class={`w-full min-w-11 text-nowrap p-0 py-3 text-sm font-normal ${
            inDialog
              ? "justify-start"
              : "hidden sm:inline-flex xl:w-56 xl:text-base 2xl:w-72"
          } lg:px-6`}
        >
          <BookPlus
            size="22px"
            class={`${inDialog ? "mx-3" : "lg:mr-3"} text-indigo-400`}
          />
          <span
            class={`opacity-75 ${!inDialog && "hidden lg:flex lg:items-center"}`}
          >
            Jpdb.io <span class="ml-1 text-sm">(Kanji)</span>
          </span>
        </Button>
      </a>
      <A href="/learn/grammar-notes">
        <Button
          size="lg"
          variant="outline"
          class={`w-full min-w-11 text-nowrap p-0 py-3 text-sm font-normal ${
            inDialog
              ? "justify-start"
              : "hidden sm:inline-flex xl:w-56 xl:text-base 2xl:w-72"
          } lg:px-6`}
        >
          <ScrollText
            size="22px"
            class={`${inDialog ? "mx-3" : "lg:mr-3"} text-red-500`}
          />
          <span class={`opacity-75 ${!inDialog && "hidden lg:flex"}`}>
            Grammar Notes
          </span>
        </Button>
      </A>
      <A href="/learn/sentence-practice">
        <Button
          size="lg"
          variant="outline"
          class={`w-full min-w-11 text-nowrap p-0 py-3 text-sm font-normal ${
            inDialog
              ? "justify-start"
              : "hidden sm:inline-flex xl:w-56 xl:text-base 2xl:w-72"
          } lg:px-6`}
        >
          <Pencil
            size="22px"
            class={`${inDialog ? "mx-3" : "lg:mr-3"} text-yellow-500`}
          />
          <span class={`opacity-75 ${!inDialog && "hidden lg:flex"}`}>
            Sentence Practice
          </span>
        </Button>
      </A>
      <A href="/learn/conjugation">
        <Button
          size="lg"
          variant="outline"
          class={`w-full min-w-11 text-nowrap p-0 py-3 text-sm font-normal ${
            inDialog
              ? "justify-start"
              : "hidden sm:inline-flex xl:w-56 xl:text-base 2xl:w-72"
          } lg:px-6`}
        >
          <GraduationCap
            size="22px"
            class={`${inDialog ? "mx-3" : "lg:mr-3"} text-teal-400`}
          />
          <span class={`opacity-75 ${!inDialog && "hidden lg:flex"}`}>
            Conjugation
          </span>
        </Button>
      </A>
      <A href="/learn/vocab-list">
        <Button
          size="lg"
          variant="outline"
          class={`w-full min-w-11 text-nowrap p-0 py-3 text-sm font-normal ${
            inDialog
              ? "justify-start"
              : "hidden sm:inline-flex xl:w-56 xl:text-base 2xl:w-72"
          } lg:px-6`}
        >
          <Library
            size="22px"
            class={`${inDialog ? "mx-3" : "lg:mr-3"} text-sky-400`}
          />
          <span class={`opacity-75 ${!inDialog && "hidden lg:flex"}`}>
            Vocab List
          </span>
        </Button>
      </A>
      <A href="/learn/vocab-practice">
        <Button
          size="lg"
          variant="outline"
          class={`w-full min-w-11 text-nowrap p-0 py-3 text-sm font-normal ${
            inDialog
              ? "justify-start"
              : "hidden sm:inline-flex xl:w-56 xl:text-base 2xl:w-72"
          } lg:px-6`}
        >
          <GraduationCap
            size="22px"
            class={`${inDialog ? "mx-3" : "lg:mr-3"} text-orange-500`}
          />
          <span class={`opacity-75 ${!inDialog && "hidden lg:flex"}`}>
            Vocab Practice
          </span>
        </Button>
      </A>
      <A href="/learn/listening-material">
        <Button
          size="lg"
          variant="outline"
          class={`w-full min-w-11 text-nowrap p-0 py-3 text-sm font-normal ${
            inDialog
              ? "justify-start"
              : "hidden sm:inline-flex xl:w-56 xl:text-base 2xl:w-72"
          } lg:px-6`}
        >
          <Volume2
            size="22px"
            class={`${inDialog ? "mx-3" : "lg:mr-3"} text-purple-400`}
          />
          <span class={`opacity-75 ${!inDialog && "hidden lg:flex"}`}>
            Listening Material
          </span>
        </Button>
      </A>
      <A href="">
        <Button
          size="lg"
          variant="outline"
          class={`w-full min-w-11 text-nowrap p-0 py-3 text-sm font-normal ${
            inDialog
              ? "justify-start"
              : "hidden sm:inline-flex xl:w-56 xl:text-base 2xl:w-72"
          } lg:px-6`}
          disabled
        >
          <Gamepad
            size="22px"
            class={`${inDialog ? "mx-3" : "lg:mr-3"} text-green-500`}
          />
          <span class={`opacity-75 ${!inDialog && "hidden lg:flex"}`}>
            Games
          </span>
        </Button>
      </A>
      <A href="/learn/additional-resources">
        <Button
          size="lg"
          variant="outline"
          class={`w-full min-w-11 text-nowrap p-0 py-3 text-sm font-normal ${
            inDialog
              ? "justify-start"
              : "hidden sm:inline-flex xl:w-56 xl:text-base 2xl:w-72"
          } lg:px-6`}
        >
          <TicketPlus
            size="22px"
            class={`${
              inDialog ? "mx-3" : "lg:mr-3"
            } text-pink-400 saturate-[65%]`}
          />
          <span class={`opacity-75 ${!inDialog && "hidden lg:flex"}`}>
            Misc
          </span>
        </Button>
      </A>
    </>
  )
}
