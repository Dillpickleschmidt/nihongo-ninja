import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Numbers() {
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
          <TableCell class="font-japanese text-xl">ぜろ・れい</TableCell>
          <TableCell class="text-muted-foreground">zero/rei</TableCell>
          <TableCell class="text-right">Zero</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">いち</TableCell>
          <TableCell class="text-muted-foreground">ichi</TableCell>
          <TableCell class="text-right">One</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">に</TableCell>
          <TableCell class="text-muted-foreground">ni</TableCell>
          <TableCell class="text-right">Two</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">さん</TableCell>
          <TableCell class="text-muted-foreground">san</TableCell>
          <TableCell class="text-right">Three</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">よん・し</TableCell>
          <TableCell class="text-muted-foreground">yon/shi</TableCell>
          <TableCell class="text-right">Four</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">ご</TableCell>
          <TableCell class="text-muted-foreground">go</TableCell>
          <TableCell class="text-right">Five</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">ろく</TableCell>
          <TableCell class="text-muted-foreground">roku</TableCell>
          <TableCell class="text-right">Six</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">なな・しち</TableCell>
          <TableCell class="text-muted-foreground">shichi/nana</TableCell>
          <TableCell class="text-right">Seven</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">はち</TableCell>
          <TableCell class="text-muted-foreground">hachi</TableCell>
          <TableCell class="text-right">Eight</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">きゅう・く</TableCell>
          <TableCell class="text-muted-foreground">kyuu/ku</TableCell>
          <TableCell class="text-right">Nine</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">じゅう</TableCell>
          <TableCell class="text-muted-foreground">juu</TableCell>
          <TableCell class="text-right">Ten</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
