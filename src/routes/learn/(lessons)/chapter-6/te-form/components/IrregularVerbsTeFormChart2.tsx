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

export default function IrregularVerbsTeFormChart2() {
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
            <Romaji romaji="to know">
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-xs">し</span>}>
                  知
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <span class="font-japanese text-xl">
              <Furigana furigana={<span class="text-xs">し</span>}>知</Furigana>
              ります
            </span>
          </TableCell>
          <TableCell>
            <span class="font-japanese text-xl">
              <Furigana furigana={<span class="text-xs">し</span>}>知</Furigana>
              って
            </span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji romaji="to cut">
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-xs">き</span>}>
                  切
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <span class="font-japanese text-xl">
              <Furigana furigana={<span class="text-xs">き</span>}>切</Furigana>
              ります
            </span>
          </TableCell>
          <TableCell>
            <span class="font-japanese text-xl">
              <Furigana furigana={<span class="text-xs">き</span>}>切</Furigana>
              って
            </span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji romaji="to need">
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-xs">い</span>}>
                  要
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <span class="font-japanese text-xl">
              <Furigana furigana={<span class="text-xs">い</span>}>要</Furigana>
              ります
            </span>
          </TableCell>
          <TableCell>
            <span class="font-japanese text-xl">
              <Furigana furigana={<span class="text-xs">い</span>}>要</Furigana>
              って
            </span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji romaji="to run">
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-xs">はし</span>}>
                  走
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <span class="font-japanese text-xl">
              <Furigana furigana={<span class="text-xs">はし</span>}>
                走
              </Furigana>
              ります
            </span>
          </TableCell>
          <TableCell>
            <span class="font-japanese text-xl">
              <Furigana furigana={<span class="text-xs">はし</span>}>
                走
              </Furigana>
              って
            </span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji romaji="to chat">
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-xs">しゃべ</span>}>
                  喋
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <span class="font-japanese text-xl">
              <Furigana furigana={<span class="text-xs">しゃべ</span>}>
                喋
              </Furigana>
              ります
            </span>
          </TableCell>
          <TableCell>
            <span class="font-japanese text-xl">
              <Furigana furigana={<span class="text-xs">しゃべ</span>}>
                喋
              </Furigana>
              って
            </span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji romaji="to limit">
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-xs">かぎ</span>}>
                  限
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <span class="font-japanese text-xl">
              <Furigana furigana={<span class="text-xs">かぎ</span>}>
                限
              </Furigana>
              ります
            </span>
          </TableCell>
          <TableCell>
            <span class="font-japanese text-xl">
              <Furigana furigana={<span class="text-xs">かぎ</span>}>
                限
              </Furigana>
              って
            </span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji romaji="to kick">
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-xs">け</span>}>
                  蹴
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <span class="font-japanese text-xl">
              <Furigana furigana={<span class="text-xs">け</span>}>蹴</Furigana>
              ります
            </span>
          </TableCell>
          <TableCell>
            <span class="font-japanese text-xl">
              <Furigana furigana={<span class="text-xs">け</span>}>蹴</Furigana>
              って
            </span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji romaji="to slide">
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-xs">すべ</span>}>
                  滑
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <span class="font-japanese text-xl">
              <Furigana furigana={<span class="text-xs">すべ</span>}>
                滑
              </Furigana>
              ります
            </span>
          </TableCell>
          <TableCell>
            <span class="font-japanese text-xl">
              <Furigana furigana={<span class="text-xs">すべ</span>}>
                滑
              </Furigana>
              って
            </span>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
