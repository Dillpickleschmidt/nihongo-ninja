import Romaji from "@/components/text/Romaji"

export default function Numbers10() {
  return (
    <div class="flex justify-center rounded-md bg-background-secondary px-20 pb-12 pt-8 text-3xl dark:text-primary-foreground">
      <ul class="[&>*]:flex [&>*]:min-w-72 [&>*]:items-center [&>*]:justify-between [&>*]:border-b [&>*]:border-black [&>*]:py-2 [&>*]:pl-2 [&>*]:pr-4">
        {/* Individual Box */}
        <li>
          {/* Romaji Element */}
          <div class="text-4xl font-medium">
            <Romaji romaji="ichi">いち</Romaji>
          </div>
          <p>1</p>
        </li>
        <li>
          <div class="text-4xl font-medium">
            <Romaji romaji="ni">に</Romaji>
          </div>
          <p>2</p>
        </li>
        <li>
          <div class="text-4xl font-medium">
            <Romaji romaji="san">さん</Romaji>
          </div>
          <p>3</p>
        </li>
        <li>
          <div class="flex gap-2 text-4xl font-medium">
            <Romaji romaji="yon">よん /</Romaji>
            <Romaji romaji="shi">し</Romaji>
          </div>
          <p>4</p>
        </li>
        <li>
          <div class="text-4xl font-medium">
            <Romaji romaji="go">ご</Romaji>
          </div>
          <p>5</p>
        </li>
        <li>
          <div class="text-4xl font-medium">
            <Romaji romaji="roku">ろく</Romaji>
          </div>
          <p>6</p>
        </li>
        <li>
          <div class="flex gap-2 text-4xl font-medium">
            <Romaji romaji="nana">なな /</Romaji>
            <Romaji romaji="shichi">しち</Romaji>
          </div>
          <p>7</p>
        </li>
        <li>
          <div class="text-4xl font-medium">
            <Romaji romaji="hachi">はち</Romaji>
          </div>
          <p>8</p>
        </li>
        <li>
          <div class="flex gap-2 text-4xl font-medium">
            <Romaji romaji="kyuu">きゅう /</Romaji>
            <Romaji romaji="ku">く</Romaji>
          </div>
          <p>9</p>
        </li>
        <li>
          <div class="text-4xl font-medium">
            <Romaji romaji="juu">じゅう</Romaji>
          </div>
          <p>10</p>
        </li>
      </ul>
    </div>
  )
}
