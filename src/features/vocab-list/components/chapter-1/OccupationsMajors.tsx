import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function OccupationsMajors() {
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
          <TableCell class="font-japanese text-xl">いしゃ</TableCell>
          <TableCell class="text-muted-foreground">Isha</TableCell>
          <TableCell class="text-right">Doctor</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">かいしゃいん</TableCell>
          <TableCell class="text-muted-foreground">Kaishain</TableCell>
          <TableCell class="text-right">Office worker</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">かんごし</TableCell>
          <TableCell class="text-muted-foreground">Kangoshi</TableCell>
          <TableCell class="text-right">Nurse</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">こうこうせい</TableCell>
          <TableCell class="text-muted-foreground">Kōkōsei</TableCell>
          <TableCell class="text-right">High school student</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">しゅふ</TableCell>
          <TableCell class="text-muted-foreground">Shufu</TableCell>
          <TableCell class="text-right">Housewife</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">だいがくいんせい</TableCell>
          <TableCell class="text-muted-foreground">Daigakuinsei</TableCell>
          <TableCell class="text-right">Graduate student</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">べんごし</TableCell>
          <TableCell class="text-muted-foreground">Bengoshi</TableCell>
          <TableCell class="text-right">Lawyer</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">アジアけんきゅう</TableCell>
          <TableCell class="text-muted-foreground">Ajia kenkyuu</TableCell>
          <TableCell class="text-right">Asian studies</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">けいざい</TableCell>
          <TableCell class="text-muted-foreground">Keizai</TableCell>
          <TableCell class="text-right">Economics</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">こうがく</TableCell>
          <TableCell class="text-muted-foreground">Kōgaku</TableCell>
          <TableCell class="text-right">Engineering</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">こくさいかんけい</TableCell>
          <TableCell class="text-muted-foreground">Kokusai kankei</TableCell>
          <TableCell class="text-right">International relations</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">コンピューター</TableCell>
          <TableCell class="text-muted-foreground">Konpyuutaa</TableCell>
          <TableCell class="text-right">Computer</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">せいじ</TableCell>
          <TableCell class="text-muted-foreground">Seiji</TableCell>
          <TableCell class="text-right">Politics</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">せいぶつがく</TableCell>
          <TableCell class="text-muted-foreground">Seibutsugaku</TableCell>
          <TableCell class="text-right">Biology</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">ビジネス</TableCell>
          <TableCell class="text-muted-foreground">Bijinesu</TableCell>
          <TableCell class="text-right">Business</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">ぶんがく</TableCell>
          <TableCell class="text-muted-foreground">Bungaku</TableCell>
          <TableCell class="text-right">Literature</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">れきし</TableCell>
          <TableCell class="text-muted-foreground">Rekishi</TableCell>
          <TableCell class="text-right">History</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
