import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Romaji from "@/components/text/Romaji"
import Furigana from "@/components/text/Furigana"

export default function IrregularVerbsTeFormChart1() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead class="text-center">Dictionary Form</TableHead>
          <TableHead class="text-center">
            <span class="font-japanese text-base font-semibold">ます</span> Form
          </TableHead>
          <TableHead class="text-center">
            <span class="font-japanese text-base font-semibold">て</span> Form
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody class="text-center text-xl font-medium">
        <TableRow>
          <TableCell>
            <Romaji romaji="to do">
              <span class="font-japanese text-xl">する</span>
            </Romaji>
          </TableCell>
          <TableCell>
            <span class="font-japanese text-xl">します</span>
          </TableCell>
          <TableCell>
            <span class="font-japanese text-xl">して</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji romaji="to come">
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-xs">く</span>}>
                  来
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <span class="font-japanese text-xl">
              <Furigana furigana={<span class="text-xs">き</span>}>来</Furigana>
              ます
            </span>
          </TableCell>
          <TableCell>
            <span class="font-japanese text-xl">
              <Furigana furigana={<span class="text-xs">き</span>}>来</Furigana>
              て
            </span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji romaji="to return home">
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-xs">かえ</span>}>
                  帰
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <span class="font-japanese text-xl">
              <Furigana furigana={<span class="text-xs">かえ</span>}>
                帰
              </Furigana>
              ります
            </span>
          </TableCell>
          <TableCell>
            <span class="font-japanese text-xl">
              <Furigana furigana={<span class="text-xs">かえ</span>}>
                帰
              </Furigana>
              って
            </span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji romaji="to enter">
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-xs">はい</span>}>
                  入
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <span class="font-japanese text-xl">
              <Furigana furigana={<span class="text-xs">はい</span>}>
                入
              </Furigana>
              ります
            </span>
          </TableCell>
          <TableCell>
            <span class="font-japanese text-xl">
              <Furigana furigana={<span class="text-xs">はい</span>}>
                入
              </Furigana>
              って
            </span>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
