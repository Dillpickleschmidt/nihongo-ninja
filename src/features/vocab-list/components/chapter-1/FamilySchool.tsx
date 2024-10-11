import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function FamilySchool() {
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
          <TableCell class="font-japanese text-xl">おかあさん</TableCell>
          <TableCell class="text-muted-foreground">Okaasan</TableCell>
          <TableCell class="text-right">Mother</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">おとうさん</TableCell>
          <TableCell class="text-muted-foreground">Otōsan</TableCell>
          <TableCell class="text-right">Father</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">おねえさん</TableCell>
          <TableCell class="text-muted-foreground">Oneesan</TableCell>
          <TableCell class="text-right">Older sister</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">おにいさん</TableCell>
          <TableCell class="text-muted-foreground">Oniisan</TableCell>
          <TableCell class="text-right">Older brother</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">いもうと</TableCell>
          <TableCell class="text-muted-foreground">Imōto</TableCell>
          <TableCell class="text-right">Younger sister</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">おとうと</TableCell>
          <TableCell class="text-muted-foreground">Otōto</TableCell>
          <TableCell class="text-right">Younger brother</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">おじいさん</TableCell>
          <TableCell class="text-muted-foreground">Ojiisan</TableCell>
          <TableCell class="text-right">Grandfather</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">おばあさん</TableCell>
          <TableCell class="text-muted-foreground">Obaasan</TableCell>
          <TableCell class="text-right">Grandmother</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">おばさん</TableCell>
          <TableCell class="text-muted-foreground">Obasan</TableCell>
          <TableCell class="text-right">Aunt</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">おじさん</TableCell>
          <TableCell class="text-muted-foreground">Ojisan</TableCell>
          <TableCell class="text-right">Uncle</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">だいがく</TableCell>
          <TableCell class="text-muted-foreground">Daigaku</TableCell>
          <TableCell class="text-right">College / University</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">こうこう</TableCell>
          <TableCell class="text-muted-foreground">Kōkō</TableCell>
          <TableCell class="text-right">High school</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">がくせい</TableCell>
          <TableCell class="text-muted-foreground">Gakusei</TableCell>
          <TableCell class="text-right">Student</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">だいがくせい</TableCell>
          <TableCell class="text-muted-foreground">Daigakusei</TableCell>
          <TableCell class="text-right">College student</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">りゅうがくせい</TableCell>
          <TableCell class="text-muted-foreground">Ryuugakusei</TableCell>
          <TableCell class="text-right">International student</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">～ねんせい</TableCell>
          <TableCell class="text-muted-foreground">...nensei</TableCell>
          <TableCell class="text-right">...year student</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">いちねんせい</TableCell>
          <TableCell class="text-muted-foreground">Ichinensei</TableCell>
          <TableCell class="text-right">First-year student</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">せんこう</TableCell>
          <TableCell class="text-muted-foreground">Senkō</TableCell>
          <TableCell class="text-right">Major</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
