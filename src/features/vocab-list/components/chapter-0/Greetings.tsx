import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Greetings() {
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
          <TableCell class="font-japanese text-xl">おはよう。</TableCell>
          <TableCell class="text-muted-foreground">Ohayō.</TableCell>
          <TableCell class="text-right">Good morning.</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">
            おはようございます。
          </TableCell>
          <TableCell class="text-muted-foreground">Ohayō gozaimasu.</TableCell>
          <TableCell class="text-right">Good morning. (polite)</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">こんにちは。</TableCell>
          <TableCell class="text-muted-foreground">Konnichiwa.</TableCell>
          <TableCell class="text-right">Good afternoon., Hello.</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">こんばんは。</TableCell>
          <TableCell class="text-muted-foreground">Konbanwa.</TableCell>
          <TableCell class="text-right">Good evening.</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">またね。</TableCell>
          <TableCell class="text-muted-foreground">Mata ne.</TableCell>
          <TableCell class="text-right">See you., Bye.</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">じゃあね。</TableCell>
          <TableCell class="text-muted-foreground">Jaa ne.</TableCell>
          <TableCell class="text-right">See you later.</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">
            ありがとうございます
          </TableCell>
          <TableCell class="text-muted-foreground">Arigatōgozaimasu</TableCell>
          <TableCell class="text-right">Thank you</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">さようなら。</TableCell>
          <TableCell class="text-muted-foreground">Sayōnara.</TableCell>
          <TableCell class="text-right">Goodbye.</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">ようこそ。</TableCell>
          <TableCell class="text-muted-foreground">Yōkoso.</TableCell>
          <TableCell class="text-right">Welcome.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
