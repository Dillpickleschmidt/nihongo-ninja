import Dialog from "@/app/components/dialog"
import Button from "@/app/components/button"

export default function Lesson6() {
  return (
    <Dialog variant={"reading"}>
      <div className="h-full pb-16 overflow-y-auto overscroll-y-contain no-scrollbar">
        <h1>
          Great job, you've finally made it! You've got a strong grasp of
          Hiragana! Not only can you read hiragana, but you now have the
          phonetic arsenal to say pretty much *anything* in Japanese!
        </h1>
        <p>
          Now that you're familiar with the basics, let's dive into some common
          Japanese greetings. These phrases will be your first steps into
          conversational Japanese, and they're essential for everyday
          interactions.
        </p>
        <p>(include audio files)</p>
        <p>
          1. おはようございます (Ohayou Gozaimasu) - Good Morning <br />
          Hiragana: おはようございます <br />
          Pronunciation: o-ha-yo-u go-za-i-ma-su <br />
          Usage: This is a polite way to say good morning and is typically used
          until late morning. Drop "ございます" for a more casual version, just
          "おはよう (Ohayou)". The casual version, "おはよう" is often used
          among friends, family, or colleagues you're familiar with. The polite
          form "おはようございます" is suitable for more formal situations or
          when addressing someone you don't know well. It's a common greeting in
          schools, workplaces, or when doing morning activities.
        </p>
        As a rule of thumb, drop ございます when you're on a first-name basis
        with someone (friends and family). If you refer to that person as
        Mr./Ms., use the longer ございます version.
        <p>
          2. こんにちは (Konnichiwa) - Good Afternoon/Hello <br />
          Hiragana: こんにちは <br />
          Pronunciation: ko-n-ni-chi-wa <br />
          Usage: This is the most versatile and common greeting in Japanese.
          It's used from late morning (around 11 am) until early evening (around
          5-6 pm). It's akin to saying "Good afternoon" or a general "Hello" in
          English. You'll hear this greeting in a wide range of settings, from
          casual encounters to more formal situations. It's a safe, go-to
          greeting for most daytime interactions.
        </p>
        <p>
          3. こんばんは (Konbanwa) - Good Evening <br />
          Hiragana: こんばんは <br />
          Pronunciation: ko-n-ba-n-wa <br />
          Usage: Used in the evening, starting around dusk. It's a polite
          greeting that's appropriate in both casual and formal situations.
          Whether you're entering a restaurant in the evening, meeting someone
          for a night event, or just greeting your neighbor, "こんばんは" is the
          suitable choice.
        </p>
        <p>
          4. じゃあね (Jaa ne) - See you, Bye <br />
          Hiragana: じゃあね <br />
          Pronunciation: jaa-ne <br />
          Usage: This phrase is casual and friendly, often used among friends,
          family, or close colleagues. It's equivalent to saying "See you,"
          "Bye," or "Catch you later" in English. It implies an informal and
          easy-going parting, often when you expect to see the person again
          soon. It's perfect for everyday casual farewells, like when leaving a
          café after meeting a friend or saying goodbye at the end of a school
          or work day.
        </p>
        <p>
          Another common and slightly more formal way to say goodbye, especially
          in phone conversations or when you're not sure when you'll meet the
          person again, is:
        </p>
        <p>
          またね (Mata ne) - See you later <br />
          Hiragana: またね <br />
          Pronunciation: ma-ta-ne <br />
          Usage: This phrase is also casual and conveys a similar sense as
          "じゃあね (Jaa ne)." It's used in situations where you are expecting
          to see or speak to the person again in the future. It's warm and
          friendly, suitable for parting with friends or colleagues in a casual
          setting.
        </p>
        <p>
          5. ありがとうございます (Arigatou Gozaimasu) - Thank You <br />
          Hiragana: ありがとうございます <br />
          Pronunciation: a-ri-ga-to-u go-za-i-ma-su <br />
          Usage: A polite way to say thank you. For a more casual form, just
          "ありがとう (Arigatou)" is commonly used.
        </p>
        <p>
          6. さようなら (Sayounara) - Goodbye <br />
          Hiragana: さようなら <br />
          Pronunciation: sa-yo-u-na-ra <br />
          Usage: This is a formal and somewhat solemn way of saying goodbye,
          often used when you won't see someone for a while. さようなら is when
          the speaker does not expect to see the person spoken to before he/she
          turns a new page in his/her life—a long time. Therefore, it's not
          commonly used in daily casual conversation. In more everyday casual
          settings, phrases like "じゃあね (Jaa ne)" or "またね (Mata ne)" are
          used among friends or colleagues, with more sophisticated expressions
          used in the workplace that we'll explore later.
        </p>
        <p>
          These phrases are great for everyday use and help convey a friendly,
          approachable tone when saying goodbye. As with any language, the
          context and your relationship with the person you're speaking to will
          guide which farewell phrase is most appropriate.
        </p>
        <h3>Practice</h3>
        <p>
          Match the following greetings with the appropriate time of day
          (Morning, Afternoon, Evening, Leaving):
        </p>
        <p>{"a) ありがとう b) おはようございます c) こんばんは d) またね"}</p>
        <p>
          You run into a friend in the morning while walking to the store. How
          do you greet them?
        </p>
        <p>{"a) こんにちは b) こんばんは c) おはようございます d) じゃあね"}</p>
        <p>
          Which greeting would you use when leaving a casual meet-up with
          friends in the afternoon?
        </p>
        <p>{"a) ありがとう b) おはよう c) じゃあね d) さようなら"}</p>
        <p>You say 'こんばんは' to your teacher at 9 AM. Is this correct?</p>
        <p>{"a) Yes b) No"}</p>
        <p>
          You've just finished a group project and want to thank everyone for
          their hard work. You say, '___________.
        </p>
        <p>{"a) ありがとう b) ありがとうございます c) またね d) さようなら"}</p>
        <p>
          It's 8 PM and you are entering a restaurant. The staff greets you. You
          reply with:
        </p>
        <p>{"a) おはようございます b) こんばんは c) こんにちは d) じゃあね"}</p>
        <p>おはよう is a formal way to say good morning.</p>
        <p>True / False</p>
        <p>
          "You are leaving a business meeting. How do you say goodbye to your
          colleagues?"
        </p>
        <p>{"a) さようなら b) じゃあね c) またね d) ありがとう"}</p>
        <div className="mt-24 mx-12 !mb-0 flex flex-row justify-end">
          <Button link="/learn/chapter-1/lesson-7">Next Lesson {"->"}</Button>
        </div>
      </div>
    </Dialog>
  )
}
