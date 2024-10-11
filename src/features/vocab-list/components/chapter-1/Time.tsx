import Furigana from "@/components/text/Furigana"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Time() {
  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow class="[&>*]:p-2">
          <TableHead class="w-1/3">Hiragana</TableHead>
          <TableHead class="w-1/3">Romaji</TableHead>
          <TableHead class="w-1/3 text-right">English</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody class="text-base">
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">
            い
            <Furigana furigana={<span class="text-[0.5rem]">●</span>}>
              ち
            </Furigana>
            じ
          </TableCell>
          <TableCell class="text-muted-foreground">ichiji</TableCell>
          <TableCell class="text-right">1 o'clock</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">
            <Furigana furigana={<span class="text-[0.5rem]">●</span>}>
              に
            </Furigana>
            じ
          </TableCell>
          <TableCell class="text-muted-foreground">niji</TableCell>
          <TableCell class="text-right">2 o'clock</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">
            <Furigana furigana={<span class="text-[0.5rem]">●</span>}>
              さ
            </Furigana>
            んじ
          </TableCell>
          <TableCell class="text-muted-foreground">sanji</TableCell>
          <TableCell class="text-right">3 o'clock</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">
            <Furigana furigana={<span class="text-[0.5rem]">●</span>}>
              よ
            </Furigana>
            じ
          </TableCell>
          <TableCell class="text-muted-foreground">yoji</TableCell>
          <TableCell class="text-right">4 o'clock</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">
            <Furigana furigana={<span class="text-[0.5rem]">●</span>}>
              ご
            </Furigana>
            じ
          </TableCell>
          <TableCell class="text-muted-foreground">goji</TableCell>
          <TableCell class="text-right">5 o'clock</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">
            ろ
            <Furigana furigana={<span class="text-[0.5rem]">●</span>}>
              く
            </Furigana>
            じ
          </TableCell>
          <TableCell class="text-muted-foreground">rokuji</TableCell>
          <TableCell class="text-right">6 o'clock</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">
            し
            <Furigana furigana={<span class="text-[0.5rem]">●</span>}>
              ち
            </Furigana>
            じ
          </TableCell>
          <TableCell class="text-muted-foreground">shichi</TableCell>
          <TableCell class="text-right">7 o'clock</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">
            は
            <Furigana furigana={<span class="text-[0.5rem]">●</span>}>
              ち
            </Furigana>
            じ
          </TableCell>
          <TableCell class="text-muted-foreground">hachiji</TableCell>
          <TableCell class="text-right">8 o'clock</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">
            <Furigana furigana={<span class="text-[0.5rem]">●</span>}>
              く
            </Furigana>
            じ
          </TableCell>
          <TableCell class="text-muted-foreground">kuji</TableCell>
          <TableCell class="text-right">9 o'clock</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">
            <Furigana furigana={<span class="text-[0.5rem]">●</span>}>
              じゅ
            </Furigana>
            うじ
          </TableCell>
          <TableCell class="text-muted-foreground">juuji</TableCell>
          <TableCell class="text-right">10 o'clock</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">
            じゅうい
            <Furigana furigana={<span class="text-[0.5rem]">●</span>}>
              ち
            </Furigana>
            じ
          </TableCell>
          <TableCell class="text-muted-foreground">juuichiji</TableCell>
          <TableCell class="text-right">11 o'clock</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">
            じゅう
            <Furigana furigana={<span class="text-[0.5rem]">●</span>}>
              に
            </Furigana>
            じ
          </TableCell>
          <TableCell class="text-muted-foreground">juuniji</TableCell>
          <TableCell class="text-right">12 o'clock</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">はん</TableCell>
          <TableCell class="text-muted-foreground">han</TableCell>
          <TableCell class="text-right">half past</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">まえ</TableCell>
          <TableCell class="text-muted-foreground">mae</TableCell>
          <TableCell class="text-right">before</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">すぎ</TableCell>
          <TableCell class="text-muted-foreground">sugi</TableCell>
          <TableCell class="text-right">past</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">ごぜん</TableCell>
          <TableCell class="text-muted-foreground">gozen</TableCell>
          <TableCell class="text-right">AM</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">ごご</TableCell>
          <TableCell class="text-muted-foreground">gogo</TableCell>
          <TableCell class="text-right">PM</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">あさ</TableCell>
          <TableCell class="text-muted-foreground">asa</TableCell>
          <TableCell class="text-right">morning</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">ひる</TableCell>
          <TableCell class="text-muted-foreground">hiru</TableCell>
          <TableCell class="text-right">afternoon</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">ゆうがた</TableCell>
          <TableCell class="text-muted-foreground">yuugata</TableCell>
          <TableCell class="text-right">evening</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">よる</TableCell>
          <TableCell class="text-muted-foreground">yoru</TableCell>
          <TableCell class="text-right">night</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">いま</TableCell>
          <TableCell class="text-muted-foreground">ima</TableCell>
          <TableCell class="text-right">now</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
