import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function CommonExpressions() {
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
          <TableCell class="font-japanese text-xl">すみません</TableCell>
          <TableCell class="text-muted-foreground">sumimasen</TableCell>
          <TableCell class="text-right">Excuse me., Sorry.</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">いいえ</TableCell>
          <TableCell class="text-muted-foreground">iie</TableCell>
          <TableCell class="text-right">No</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">いってきます。</TableCell>
          <TableCell class="text-muted-foreground">Itte kimasu.</TableCell>
          <TableCell class="text-right">I'll go and come back.</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">
            いってらっしゃい。
          </TableCell>
          <TableCell class="text-muted-foreground">Itterasshai.</TableCell>
          <TableCell class="text-right">Go and come back.</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">ただいま。</TableCell>
          <TableCell class="text-muted-foreground">Tadaima.</TableCell>
          <TableCell class="text-right">I'm home.</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">
            おかえり (なさい)。
          </TableCell>
          <TableCell class="text-muted-foreground">Okaeri (nasai).</TableCell>
          <TableCell class="text-right">Welcome home.</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">
            おやすみ (なさい)。
          </TableCell>
          <TableCell class="text-muted-foreground">Oyasumi (nasai).</TableCell>
          <TableCell class="text-right">Good night. (sleeping)</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">いただきます。</TableCell>
          <TableCell class="text-muted-foreground">Itadakimasu.</TableCell>
          <TableCell class="text-right">Thank you for the food.</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">
            ごちそうさま (でした)。
          </TableCell>
          <TableCell class="text-muted-foreground">
            Gochisoo-sama (deshita).
          </TableCell>
          <TableCell class="text-right">That was delicious.</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">はじめまして。</TableCell>
          <TableCell class="text-muted-foreground">Hajimemashite.</TableCell>
          <TableCell class="text-right">Nice to meet you.</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">
            よろしく おねがいします。
          </TableCell>
          <TableCell class="text-muted-foreground">
            Yoroshiku onegai shimasu.
          </TableCell>
          <TableCell class="text-right">Please be kind to me.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
