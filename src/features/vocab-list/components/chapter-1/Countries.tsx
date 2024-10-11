import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Countries() {
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
          <TableCell class="font-japanese text-xl">にほん</TableCell>
          <TableCell class="text-muted-foreground">Nihon</TableCell>
          <TableCell class="text-right">Japan</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">アメリカ</TableCell>
          <TableCell class="text-muted-foreground">Amerika</TableCell>
          <TableCell class="text-right">
            <span class="whitespace-nowrap">America</span> /{" "}
            <span class="whitespace-nowrap">USA</span>
          </TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">イギリス</TableCell>
          <TableCell class="text-muted-foreground">Igirisu</TableCell>
          <TableCell class="text-right">
            <span class="whitespace-nowrap">UK</span> /{" "}
            <span class="whitespace-nowrap">Britain</span>
          </TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">オーストラリア</TableCell>
          <TableCell class="text-muted-foreground">Ōsutoraria</TableCell>
          <TableCell class="text-right">Australia</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">かんこく</TableCell>
          <TableCell class="text-muted-foreground">Kankoku</TableCell>
          <TableCell class="text-right">
            <span class="whitespace-nowrap">Korea</span> /{" "}
            <span class="whitespace-nowrap">South Korea</span>
          </TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">カナダ</TableCell>
          <TableCell class="text-muted-foreground">Kanada</TableCell>
          <TableCell class="text-right">Canada</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">ちゅうごく</TableCell>
          <TableCell class="text-muted-foreground">Chuugoku</TableCell>
          <TableCell class="text-right">China</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">インド</TableCell>
          <TableCell class="text-muted-foreground">Indo</TableCell>
          <TableCell class="text-right">India</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">エジプト</TableCell>
          <TableCell class="text-muted-foreground">Ejiputo</TableCell>
          <TableCell class="text-right">Egypt</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">フィリピン</TableCell>
          <TableCell class="text-muted-foreground">Firipin</TableCell>
          <TableCell class="text-right">Philippines</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
