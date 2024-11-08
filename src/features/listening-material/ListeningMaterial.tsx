import LinkPreview from "./components/LinkPreview"

export default function ListeningMaterial() {
  return (
    <>
      <h1 class="mx-auto pb-8 pt-28 text-center text-5xl font-semibold tracking-wide">
        <span>Chapter 1</span>
      </h1>
      <div class="relative grid w-full grid-cols-1 gap-6 lg:grid-cols-2 2xl:grid-cols-4 [&>*]:flex [&>*]:flex-col [&>*]:justify-end">
        <LinkPreview
          title="Kikusaizu Lesson 1-1"
          href="/learn/chapter-1/kikusasaizu-1-1"
          src="/img/chapter-1/kikusasaizu/kikusasaizu-1-1.jpg"
          alt="kikusasaizu-1-1"
        />
        <LinkPreview
          title="MyKikitori Conversation 1"
          external
          href="https://www.mykikitori.com/lesson-1"
          src="/img/chapter-1/mykikitori/mykikitori-conversation-1-3.png"
          alt="mykikitori-conversation-1"
        />
        <LinkPreview
          title="MyKikitori Conversation 2"
          external
          href="https://www.mykikitori.com/lesson-1"
          src="/img/chapter-1/mykikitori/mykikitori-conversation-2.png"
          alt="mykikitori-conversation-2"
        />
        <LinkPreview
          title="Kikusaizu Lesson 1-3"
          href="/learn/chapter-1/kikusasaizu-1-3"
          src="/img/chapter-1/kikusasaizu/kikusasaizu-1-3.jpg"
          alt="kikusasaizu-1-3"
        />
        <LinkPreview
          title="MyKikitori Conversation 3"
          external
          href="https://www.mykikitori.com/lesson-1"
          src="/img/chapter-1/mykikitori/mykikitori-conversation-1-3.png"
          alt="mykikitori-conversation-3"
        />
      </div>

      <h1 class="mx-auto pb-8 pt-20 text-center text-5xl font-semibold tracking-wide">
        <span>Chapter 2</span>
      </h1>
      <div class="grid w-full grid-cols-1 gap-6 lg:grid-cols-2 2xl:grid-cols-4 [&>*]:flex [&>*]:flex-col [&>*]:justify-end">
        <LinkPreview
          title="Kikusaizu Lesson 2-1"
          href="/learn/chapter-2/kikusasaizu-2-1"
          src="/img/chapter-2/kikusasaizu/kikusasaizu-2-1.jpg"
          alt="kikusasaizu-2-1"
        />
        <LinkPreview
          title="Kikusaizu Lesson 2-2"
          href="/learn/chapter-2/kikusasaizu-2-2"
          src="/img/chapter-2/kikusasaizu/kikusasaizu-2-2.jpg"
          alt="kikusasaizu-2-2"
        />
        <LinkPreview
          title="MyKikitori At a Café"
          external
          href="https://www.mykikitori.com/lesson-2"
          src="/img/chapter-2/mykikitori/mykikitori-at-a-cafe.jpg"
          alt="mykikitori-at-a-café"
        />
        <LinkPreview
          title="MyKikitori At a Store"
          external
          href="https://www.mykikitori.com/lesson-2"
          src="/img/chapter-2/mykikitori/mykikitori-at-a-store.jpg"
          alt="mykikitori-at-a-store"
        />
      </div>

      <h1 class="mx-auto pb-8 pt-20 text-center text-5xl font-semibold tracking-wide">
        <span>Chapter 3</span>
      </h1>
      <div class="grid w-full grid-cols-1 gap-6 lg:grid-cols-2 2xl:grid-cols-4 [&>*]:flex [&>*]:flex-col [&>*]:justify-end">
        <LinkPreview
          title="Kikusaizu Lesson 3-2"
          href="/learn/chapter-3/kikusasaizu-3-2"
          src="/img/chapter-3/kikusasaizu/kikusasaizu-3-2.jpg"
          alt="kikusasaizu-3-2"
        />
        <LinkPreview
          title="Kikusaizu Lesson 3-3"
          href="/learn/chapter-3/kikusasaizu-3-3"
          src="/img/chapter-3/kikusasaizu/kikusasaizu-3-3.jpg"
          alt="kikusasaizu-3-3"
        />
        <LinkPreview
          title="MyKikitori Do You Want to Go to Tokyo?"
          external
          href="https://www.mykikitori.com/lesson-3"
          src="/img/chapter-3/mykikitori/mykikitori-do-you-want-to-go-to-tokyo.jpg"
          alt="mykikitori-do-you-want-to-go-to-tokyo"
        />
        <LinkPreview
          title="MyKikitori Campus Interview #1"
          external
          href="https://www.mykikitori.com/lesson-3"
          src="/img/chapter-3/mykikitori/mykikitori-campus-interview-1-2.jpg"
          alt="mykikitori-campus-interview-1"
        />
        <LinkPreview
          title="Kikusaizu Lesson 3-1"
          href="/learn/chapter-3  /kikusasaizu-3-1"
          src="/img/chapter-3/kikusasaizu/kikusasaizu-3-1.jpg"
          alt="kikusasaizu-3-1"
        />
        <LinkPreview
          title="MyKikitori Campus Interview #2"
          external
          href="https://www.mykikitori.com/lesson-3"
          src="/img/chapter-3/mykikitori/mykikitori-campus-interview-1-2.jpg"
          alt="mykikitori-campus-interview-2"
        />
      </div>
    </>
  )
}
