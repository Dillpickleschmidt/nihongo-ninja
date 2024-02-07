import Dialog from "@/components/Dialog"
import Button from "@/components/Button"
import VocabCard from "@/components/spaced-repetition/VocabCard"
import SelectText from "@/components/text/MultipleChoiceText"

export default function Lesson6() {
  return (
    <Dialog variant={"reading"} className="border-4 border-black bg-[#191919]">
      <div className="pb-16 text-[#F8F5E9]">
        {/* Header */}
        <h1 className="pt-28 px-28 pb-6 text-4xl">
          Now that you&apos;re familiar with the basics, let&apos;s dive into
          some common Japanese greetings. These phrases will be your first steps
          into conversational Japanese, and they&apos;re essential for everyday
          interactions.
        </h1>
        <p className="!py-0">(include audio files)</p>
        {/* Vocabulary */}
        <div className="text-xl leading-8 text-black">
          <VocabCard
            title="1. おはようございます - Good Morning"
            pronunciation="o-ha-yo-u go-za-i-ma-su"
            hiragana="おはようございます"
          >
            This is a polite way to say good morning and is typically used until
            late morning. Drop "ございます" for a more casual version, just
            &quot;おはよう (Ohayou)&quot;. The casual version,
            &quot;おはよう&quot; is often used among friends, family, or
            colleagues you&apos;re familiar with. The polite form
            &quot;おはようございます&quot; is suitable for more formal
            situations or when addressing someone you don&apos;t know well.
            It&apos;s a common greeting in schools, workplaces, or when doing
            morning activities. <br />
            As a rule of thumb, drop ございます when you&apos;re on a first-name
            basis with someone (friends and family). If you refer to that person
            as Mr./Ms., use the longer ございます version.
          </VocabCard>
          <VocabCard
            light={true}
            title="2. こんにちは - Good Afternoon/Hello"
            pronunciation="ko-n-ni-chi-wa"
            hiragana="こんにちは"
          >
            This is the most versatile and common greeting in Japanese.
            It&apos;s used from late morning (around 11 am) until early evening
            (around 5-6 pm). It&apos;s akin to saying &quot;Good afternoon&quot;
            or a general "Hello" in English. You&apos;ll hear this greeting in a
            wide range of settings, from casual encounters to more formal
            situations. It&apos;s a safe, go-to greeting for most daytime
            interactions.
          </VocabCard>
          <VocabCard
            title="3. こんばんは - Good Evening"
            pronunciation="ko-n-ba-n-wa"
            hiragana="こんばんは"
          >
            Used in the evening, starting around dusk. It&apos;s a polite
            greeting that&apos;s appropriate in both casual and formal
            situations. Whether you&apos;re entering a restaurant in the
            evening, meeting someone for a night event, or just greeting your
            neighbor, &quot;こんばんは&quot; is the suitable choice.
          </VocabCard>
          <VocabCard
            light={true}
            title="4. じゃあね - See you, Bye"
            pronunciation="jaa-ne"
            hiragana="じゃあね"
          >
            This phrase is casual and friendly, often used among friends,
            family, or close colleagues. It&apos;s equivalent to saying
            &quot;See you,&quot; &quot;Bye,&quot; or &quot;Catch you later&quot;
            in English. It implies an informal and easy-going parting, often
            when you expect to see the person again soon. It&apos;s perfect for
            everyday casual farewells, like when leaving a café after meeting a
            friend or saying goodbye at the end of a school or work day.
          </VocabCard>
          <p className="py-0 text-[#F8F5E9] px-16">
            Another common and slightly more formal way to say goodbye,
            especially in phone conversations or when you&apos;re not sure when
            you&apos;ll meet the person again, is:
          </p>
          <VocabCard
            title="5. またね - See you later"
            pronunciation="ma-ta-ne"
            hiragana="またね"
          >
            This phrase is also casual and conveys a similar sense as
            &quot;じゃあね (Jaa ne).&quot; It&apos;s used in situations where
            you are expecting to see or speak to the person again in the future.
            It&apos;s warm and friendly, suitable for parting with friends or
            colleagues in a casual setting.
          </VocabCard>
          <VocabCard
            light={true}
            title="6. ありがとうございます - Thank You"
            pronunciation="a-ri-ga-to-u go-za-i-ma-su"
            hiragana="ありがとうございます"
          >
            A polite way to say thank you. For a more casual form, just
            &quot;ありがとう (Arigatou)&quot; is commonly used.
          </VocabCard>
          <VocabCard
            title="7. さようなら - Goodbye"
            pronunciation="sa-yo-u-na-ra"
            hiragana="さようなら"
          >
            This is a formal and somewhat solemn way of saying goodbye, often
            used when you won&apos;t see someone for a while. さようなら is when
            the speaker does not expect to see the person spoken to before
            he/she turns a new page in his/her life—a long time. Therefore,
            it&apos;s not commonly used in daily casual conversation. In more
            everyday casual settings, phrases like &quot;じゃあね (Jaa ne)&quot;
            or &quot;またね (Mata ne)&quot; are used among friends or
            colleagues, with more sophisticated expressions used in the
            workplace that we&apos;ll explore later.
          </VocabCard>
          <p className="text-[#F8F5E9] px-16">
            These phrases are great for everyday use and help convey a friendly,
            approachable tone. As with any language, the context and your
            relationship with the person you&apos;re speaking to will guide
            which phrase is most appropriate.
          </p>
        </div>
        {/* Practice */}
        <div className="px-28 text-2xl leading-8 space-y-7 [&>*]:space-y-4">
          <h3 className="!pt-32 !pb-6 text-6xl font-bold text-center">
            Practice
          </h3>
          <p>
            Match the following greetings with the appropriate time of day
            (Morning, Afternoon, Evening, Leaving):
          </p>
          <div className="pl-10">
            <p>{"a) ありがとう"}</p>
            <p>{"b) おはようございます"}</p>
            <p>{"c) こんばんは"}</p>
            <p>{"d) またね"}</p>
          </div>
          <p>
            You run into a friend in the morning while walking to the store. How
            do you greet them?
          </p>
          <SelectText
            answer="おはようございます"
            a="こんにちは"
            b="こんばんは"
            c="おはようございます"
            d="じゃあね"
          />
          <p>
            Which greeting would you use when leaving a casual meet-up with
            friends in the afternoon?
          </p>
          <SelectText
            answer="じゃあね"
            a="ありがとう"
            b="おはよう"
            c="じゃあね"
            d="さようなら"
          />
          <p>
            You say &apos;こんばんは&apos; to your teacher at 9 AM. Is this
            correct?
          </p>
          <SelectText answer="No" a="Yes" b="No" />
          <p>
            You&apos;ve just finished a group project and want to thank everyone
            for their hard work. You say, &apos;___________.
          </p>
          <SelectText
            answer="ありがとうございます"
            a="ありがとう"
            b="ありがとうございます"
            c="またね"
            d="さようなら"
          />
          <p>
            It&apos;s 8 PM and you are entering a restaurant. The staff greets
            you. You reply with:
          </p>
          <SelectText
            answer="こんばんは"
            a="おはようございます"
            b="こんばんは"
            c="こんにちは"
            d="じゃあね"
          />
          <p>おはよう is a formal way to say good morning.</p>
          <SelectText answer="False" a="True" b="False" />
          <p>
            You are leaving a business meeting. How do you say goodbye to your
            colleagues?
          </p>
          <SelectText
            answer="さようなら"
            a="さようなら"
            b="じゃあね"
            c="またね"
            d="ありがとう"
          />
        </div>
        <div className="mt-24 mx-12 !mb-0 flex flex-row justify-end">
          <Button link="/learn/chapter-1/lesson-6-quiz" autoFocus={true}>
            Test your knowledge {"->"}
          </Button>
        </div>
      </div>
    </Dialog>
  )
}
