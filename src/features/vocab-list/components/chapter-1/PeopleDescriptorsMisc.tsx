import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function PeopleDescriptorsMisc() {
  return (
    <Table>
      {/* <TableCaption>People, Descriptors, & Misc.</TableCaption> */}
      <TableHeader>
        <TableRow class="[&>*]:p-2">
          <TableHead class="w-1/3">Hiragana</TableHead>
          <TableHead class="w-1/3">Romaji</TableHead>
          <TableHead class="w-1/3 text-right">English</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody class="text-base">
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">わたし</TableCell>
          <TableCell class="text-muted-foreground">Watashi</TableCell>
          <TableCell class="text-right">I</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">ともだち</TableCell>
          <TableCell class="text-muted-foreground">Tomodachi</TableCell>
          <TableCell class="text-right">Friend</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">～さい</TableCell>
          <TableCell class="text-muted-foreground">...sai</TableCell>
          <TableCell class="text-right">...years old</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">～じん</TableCell>
          <TableCell class="text-muted-foreground">...jin</TableCell>
          <TableCell class="text-right">(country)...person</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">にほんじん</TableCell>
          <TableCell class="text-muted-foreground">Nihonjin</TableCell>
          <TableCell class="text-right">Japanese person</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">ばんごう</TableCell>
          <TableCell class="text-muted-foreground">Bangō</TableCell>
          <TableCell class="text-right">Number</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">なまえ</TableCell>
          <TableCell class="text-muted-foreground">Namae</TableCell>
          <TableCell class="text-right">Name</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">みんな</TableCell>
          <TableCell class="text-muted-foreground">Min'na</TableCell>
          <TableCell class="text-right">Everyone / All</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">なん/なに</TableCell>
          <TableCell class="text-muted-foreground">Nan/Nani</TableCell>
          <TableCell class="text-right">What</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">あのう</TableCell>
          <TableCell class="text-muted-foreground">Anō</TableCell>
          <TableCell class="text-right">Um...</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">はい</TableCell>
          <TableCell class="text-muted-foreground">Hai</TableCell>
          <TableCell class="text-right">Yes</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">そうです</TableCell>
          <TableCell class="text-muted-foreground">Sō desu</TableCell>
          <TableCell class="text-right">That's right.</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">そうですか</TableCell>
          <TableCell class="text-muted-foreground">Sō desu ka</TableCell>
          <TableCell class="text-right">I see / Is that so?</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">～さん</TableCell>
          <TableCell class="text-muted-foreground">...san</TableCell>
          <TableCell class="text-right">Mr. / Mrs. / Ms.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
