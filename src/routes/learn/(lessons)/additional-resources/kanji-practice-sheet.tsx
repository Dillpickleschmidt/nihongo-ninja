import { For, onMount, Show } from "solid-js"
import { TextField, TextFieldRoot } from "@/components/ui/textfield"
import { TextArea } from "@/components/ui/textarea"
import PrintButton from "@/components/PrintButton"
import { Title } from "@solidjs/meta"
import { createSignal } from "solid-js"

const TableCell = (props: { class?: string; children: any }) => (
  <td
    class={`relative border border-neutral-500 p-0 print:border-black ${props.class}`}
  >
    {props.children}
  </td>
)

const LocalTextArea = () => (
  <TextFieldRoot>
    <TextArea
      data-gramm="false"
      data-gramm_editor="false"
      data-enable-grammarly="false"
      class="print:bg absolute inset-0 resize-none overflow-hidden border-none py-1 font-japanese text-2xl print:rounded-none print:text-black"
    />
  </TextFieldRoot>
  // <textarea class="absolute inset-0 resize-none bg-transparent px-3 py-2 text-2xl print:bg" />
)

const DividedCell = () => (
  <div class="absolute inset-0 flex-col">
    <div class="relative h-1/2 w-full border-b-2 border-dashed border-neutral-500 print:border-black">
      <LocalTextArea />
    </div>
    <div class="relative h-1/2 w-full">
      <LocalTextArea />
    </div>
  </div>
)

const KanjiCell = (props: { isFirstRow?: boolean }) => (
  <TableCell class="h-40 w-40 border-b-2 print:border-b">
    <div class="pointer-events-none absolute inset-0 z-10 flex select-none flex-wrap">
      <For each={[0, 1, 2, 3]}>
        {(i) => (
          <div
            class={`h-1/2 w-1/2 border-dashed border-neutral-500/35 print:border-neutral-500/25 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b" : ""}`}
          />
        )}
      </For>
    </div>
    <TextFieldRoot class="absolute inset-0 flex items-center">
      <TextField
        type="text"
        // disable input height for html2canvas to work
        class="h-[x] border-none bg-transparent py-4 text-center text-8xl placeholder:opacity-25"
        placeholder={props.isFirstRow ? "字" : undefined}
      />
    </TextFieldRoot>
  </TableCell>
)

const TableRow = (props: { isFirstRow?: boolean }) => (
  <tr class="">
    <KanjiCell isFirstRow={props.isFirstRow} />
    <TableCell class="w-72 border-b-2 print:border-b">
      <TextFieldRoot>
        <TextArea
          data-gramm="false"
          data-gramm_editor="false"
          data-enable-grammarly="false"
          class="absolute inset-0 resize-none overflow-hidden border-none bg-transparent text-xl print:rounded-none"
        />
      </TextFieldRoot>
    </TableCell>
    <TableCell class="w-32 border-b-2">
      <DividedCell />
    </TableCell>
    <TableCell class="border-b-2">
      <DividedCell />
    </TableCell>
    <TableCell class="w-1/2 border-b-2">
      <DividedCell />
    </TableCell>
  </tr>
)

export default function Page() {
  const [printContent, setPrintContent] = createSignal<HTMLDivElement>()
  const [isMounted, setIsMounted] = createSignal(false)
  const formItems = ["Lesson:", "Section:", "名前:"]

  onMount(() => {
    setIsMounted(true)
  })

  return (
    <>
      <Title>漢字練習シート</Title>
      <style>
        {`

        .bg {
          background-color: white !important;
        }

        .border-black {
          border-color: black !important;
        }

        .border-2 {
          border-width: 2px !important;
        }

        .border-b {
          border-bottom-width: 1px !important;
        }
      `}
      </style>
      <div class="overflow-x-auto">
        <div class="origin-top-left scale-50 lg:scale-75 2xl:scale-100">
          <div class="min-h-screen min-w-[1780px] pb-28 pt-8 sm:px-16 md:px-24 lg:px-12">
            <div
              ref={setPrintContent}
              class="print:bg relative flex w-full flex-col items-center border-2 border-card bg-background p-20 font-japanese print:border-none print:text-black"
            >
              <div class="absolute top-4 italic print:hidden">
                <h3>Now exports multiple pages!</h3>
              </div>
              <div class="absolute right-8 top-8 flex items-center font-inter">
                <h2 class="mb-1 mr-2 font-bold italic text-card-foreground print:hidden">
                  CLICK TO PRINT {"->"}
                </h2>
                <Show when={isMounted() && printContent()}>
                  <PrintButton ref={printContent} buttonSize={48} />
                </Show>
              </div>
              <div class="flex items-end">
                <TextFieldRoot class="w-48">
                  <TextField
                    type="text"
                    class="print:bg mb-0.5 h-12 pr-0 text-right text-3xl font-bold print:border-none print:text-black placeholder:print:hidden"
                    placeholder="Class Name"
                  />
                </TextFieldRoot>
                {/* <TextFieldRoot>
                  <TextField
                    type="text"
                    class="text-3xl"
                    placeholder="Class Name"
                  />
                </TextFieldRoot> */}
                {/* <input placeholder="Class Name" class="text-3xl" /> */}
                <h1 class="mb-2 text-3xl font-bold print:block">
                  漢字練習シート
                </h1>
              </div>
              <div class="mt-16 w-full">
                <div class="flex items-end space-x-4 text-[1.6rem] font-bold tracking-tight">
                  <For each={formItems}>
                    {(label, index) => (
                      <>
                        <h2 class="mb-2">{label}</h2>
                        <TextFieldRoot
                          class={index() === 2 ? "w-[600px]" : "w-20"}
                        >
                          <TextField
                            type="text"
                            class="print:bg h-full w-full text-[1.6rem] print:border-none print:text-black"
                          />
                        </TextFieldRoot>
                      </>
                    )}
                  </For>
                </div>
              </div>
              <table class="mt-2 w-full border-collapse border-2 border-neutral-500 p-16 print:border-black">
                <thead class="bg-[#0ea5e9] font-normal text-white">
                  <tr>
                    <th class="border border-neutral-500 text-2xl print:border-black">
                      <span>漢字</span>
                    </th>
                    <th class="border border-neutral-500 text-2xl print:border-black">
                      <span>意味</span>
                    </th>
                    <th class="border-b border-r border-t border-neutral-500 text-2xl print:border-black">
                      <div class="flex justify-center">
                        <span class="flex w-1/2 items-center border-r border-dashed border-neutral-500 p-1 text-center print:border-black">
                          読み
                        </span>
                        <div class="flex w-1/2 flex-col">
                          <span class="border-b border-dashed border-neutral-500 p-1 print:border-black">
                            くん
                          </span>
                          <span class="p-1">オン</span>
                        </div>
                      </div>
                    </th>
                    <th class="border-b border-r border-t border-neutral-500 text-2xl print:border-black">
                      <span>単語</span>
                    </th>
                    <th class="border-b border-r border-t border-neutral-500 text-2xl print:border-black">
                      <span>例文</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <For each={Array(13).fill(0)}>
                    {(_, index) => <TableRow isFirstRow={index() === 0} />}
                  </For>
                </tbody>
              </table>
              <table class="mt-16 w-full border-collapse border-2 border-neutral-500 p-16 print:border-black">
                <tbody>
                  <For each={Array(7).fill(0)}>
                    {(_, index) => <TableRow isFirstRow={index() === 0} />}
                  </For>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
