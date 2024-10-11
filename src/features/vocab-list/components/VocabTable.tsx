import { For, Show } from "solid-js"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { RichVocabItem } from "@/types/vocab"

type VocabTableProps = {
  data: () => RichVocabItem[] | undefined
}

export default function VocabTable(props: VocabTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead class="w-1/3">Kanji</TableHead>
          <TableHead class="w-1/3">Hiragana</TableHead>
          <TableHead class="w-1/3 text-right">English</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody class="text-base">
        <Show
          when={props.data()}
          fallback={
            <TableRow>
              <TableCell colSpan={3}>Loading...</TableCell>
            </TableRow>
          }
        >
          <For each={props.data()}>
            {(entry, index) => (
              <TableRow>
                <TableCell class="p-2 font-japanese text-xl">
                  {entry.word}
                </TableCell>
                <TableCell class="p-2 font-japanese text-xl">
                  {entry.hiragana?.[0] || ""}
                </TableCell>
                <TableCell class="p-2 text-right">
                  {entry.english?.join(", ")}
                </TableCell>
              </TableRow>
            )}
          </For>
        </Show>
      </TableBody>
    </Table>
  )
}
