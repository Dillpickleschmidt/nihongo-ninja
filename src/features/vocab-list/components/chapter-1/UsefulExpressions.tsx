import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function UsefulExpressions() {
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
          <TableCell class="font-japanese text-xl">はじめまして。</TableCell>
          <TableCell class="text-muted-foreground">Hajimemashite.</TableCell>
          <TableCell class="text-right">
            <span class="whitespace-nowrap">How do you do.</span> /{" "}
            <span class="whitespace-nowrap">Nice to meet you.</span>
          </TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">
            <span class="text-lg">[your name]</span>です。
          </TableCell>
          <TableCell class="text-muted-foreground">[your name] desu.</TableCell>
          <TableCell class="text-right">I am [your name].</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">
            しゅっしんは<span class="text-lg">[your hometown]</span>です。
          </TableCell>
          <TableCell class="text-muted-foreground">
            Shusshin wa [your hometown] desu.
          </TableCell>
          <TableCell class="text-right">I came from [your hometown].</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">
            どうぞよろしくおねがいします。
          </TableCell>
          <TableCell class="text-muted-foreground">
            Dōzo yoroshiku onegaishimasu.
          </TableCell>
          <TableCell class="text-right">Very pleased to meet you.</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">おなまえは？</TableCell>
          <TableCell class="text-muted-foreground">Onamae wa?</TableCell>
          <TableCell class="text-right">What is your name?</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">せんせい</TableCell>
          <TableCell class="text-muted-foreground">Sensei</TableCell>
          <TableCell class="text-right">
            <span class="whitespace-nowrap">Teacher</span> /{" "}
            <span class="whitespace-nowrap">Professor</span> /{" "}
            <span class="whitespace-nowrap">Dr.</span>
          </TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">
            あのう、すみません。
          </TableCell>
          <TableCell class="text-muted-foreground">Anō, sumimasen.</TableCell>
          <TableCell class="text-right">Ummm, excuse me</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">
            しつもんがあります。
          </TableCell>
          <TableCell class="text-muted-foreground">
            Shitsumon ga arimasu.
          </TableCell>
          <TableCell class="text-right">I have a question.</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">
            もういちどおねがいします。
          </TableCell>
          <TableCell class="text-muted-foreground">
            Mōichido onegaishimasu.
          </TableCell>
          <TableCell class="text-right">One more time, please.</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">
            もうちょっとゆっくりおねがいします。
          </TableCell>
          <TableCell class="text-muted-foreground">
            Mōchotto yukkuri onegaishimasu.
          </TableCell>
          <TableCell class="text-right">A little slower, please.</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">
            どうもありがとうございます。
          </TableCell>
          <TableCell class="text-muted-foreground">
            Dōmo arigatō gozaimasu.
          </TableCell>
          <TableCell class="text-right">Thank you very much.</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">しつれいします。</TableCell>
          <TableCell class="text-muted-foreground">
            Shitsurei shimasu.
          </TableCell>
          <TableCell class="text-right">
            <span class="whitespace-nowrap">Excuse me</span> / Please excuse my
            interrupting you
          </TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">かいてください。</TableCell>
          <TableCell class="text-muted-foreground">Kaite kudasai.</TableCell>
          <TableCell class="text-right">Please write.</TableCell>
        </TableRow>
        <TableRow class="[&>*]:p-2">
          <TableCell class="font-japanese text-xl">
            すみませんが、えいごでいいですか。
          </TableCell>
          <TableCell class="text-muted-foreground">
            Sumimasen ga, eigo de ii desu ka?
          </TableCell>
          <TableCell class="text-right">
            Excuse me but is English okay?
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
