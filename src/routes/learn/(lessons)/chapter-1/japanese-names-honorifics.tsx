import ContentBox from "@/components/ContentBox"
import Furigana from "@/components/text/Furigana"
import { Button } from "@/components/ui/button"

export default function page() {
  return (
    <ContentBox
      nextButtonText="Saying You in Japanese ->"
      nextButtonLink="/learn/chapter-1/saying-you-in-japanese"
    >
      <h1 class="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        Japanese Names & Honorifics
      </h1>
      <div class="space-y-3 px-8 pb-32 md:px-24">
        <h2 class="my-3 text-center text-2xl font-bold">
          Structure of Japanese Names
        </h2>
        <p class="pt-3">
          Japanese names typically consist of a family name (surname) followed
          by a given name. This order is the <strong>opposite</strong> of
          Western naming conventions where the given name usually comes first.
        </p>
        <h4 class="text-xl font-bold">Example:</h4>
        <h3 class="!-mt-4 text-center text-2xl">
          <Furigana furigana={<span class="text-sm">たなか</span>}>
            田中
          </Furigana>{" "}
          <Furigana furigana={<span class="text-sm">たろう</span>}>
            太郎
          </Furigana>{" "}
          <span class="text-[1.375rem]">(Tanaka Tarou)</span>
        </h3>
        <p class="!mt-0 text-center">(last—first)</p>
        <div class="space-y-1">
          <li>
            <span class="font-bold">Family Name: </span>
            <span class="font-japanese">田中</span> (Tanaka) - Means{" "}
            <em>within rice fields</em>.
          </li>
          <li>
            <span class="font-bold">Given Name: </span>
            <span class="font-japanese">太郎</span> (Tarou) - Means{" "}
            <em>great son</em>.
          </li>
        </div>
        <p>
          *Family names often refer to geographical features or parts of nature.
        </p>
        <h4 class="text-xl font-semibold">
          Forign names are usually written in katakana and in their native
          order.
        </h4>
        <h4 class="text-xl font-bold">Example:</h4>
        <h3 class="!-mt-4 text-center text-xl">
          <Furigana furigana={<span class="text-sm">とむ</span>}>トム</Furigana>
          ・
          <Furigana furigana={<span class="text-sm">くるーず</span>}>
            クルーズ
          </Furigana>{" "}
          <span class="text-lg">(Tom Cruise)</span>
        </h3>
        <h2 class="py-3 text-center text-2xl font-bold">
          Cultural Differences in Addressing People
        </h2>
        <h4 class="text-xl font-bold">Family Name vs. Given Name</h4>
        <li>
          <span class="font-bold">In Japan: </span>It is customary to address
          people by their family names rather than their given names, especially
          in formal or new relationships. Using the family name with an
          appropriate honorific shows respect and politeness.
        </li>
        <li>
          <span class="font-bold">In Western Cultures: </span>It is more common
          to use given names, even in formal situations.
        </li>
        <h4 class="pt-3 text-xl font-bold">Importance of Using Family Names</h4>
        <li>
          <span class="font-bold">Formality and Respect: </span>In Japan,
          addressing someone by their given name without permission is
          considered <strong>very rude and presumptuous</strong>. It implies a
          level of intimacy or familiarity that is not appropriate in most
          social and professional settings.
        </li>
        <h3 class="text-center text-2xl">
          Always use the family name with the appropriate honorific unless you
          have been explicitly invited to use the given name.
        </h3>
        <h4 class="pt-3 text-xl font-bold">When to Use Given Names</h4>
        <li>
          <span class="font-bold">Close Relationships: </span>Given names are
          used among family members, close friends, and sometimes in romantic
          relationships.
        </li>
        <li>
          <span class="font-bold">Informal Settings: </span>Given names can be
          used in casual settings if both parties agree.
        </li>
        <h2 class="pb-3 pt-6 text-center text-2xl font-bold">
          Honorifics: Politeness in Address
        </h2>
        <p>
          Honorifics are suffixes added to names to convey respect, formality,
          and the relationship between the speaker and the person being
          addressed. Here are some common honorifics:
        </p>
        <h3 class="pt-3 text-3xl font-bold">
          <span class="font-japanese">さん</span> -{" "}
          <span class="font-honk text-4xl">San</span>
        </h3>
        <li>
          <span class="font-bold">Usage: </span>Most common honorific,
          gender-neutral.
        </li>
        <li>
          <span class="font-bold">Context: </span>Used in most polite
          interactions, similar to "Mr./Ms." in English.
        </li>
        <li class="flex items-start">
          <span class="mr-3 mt-1 inline-block">•</span>
          <div>
            <h4 class="text-xl">
              <span class="text-2xl font-black">Story: </span>
              Office setting
            </h4>
            <h4 class="text-xl">
              <span class="mr-2 text-2xl font-black">Characters:</span>
              You (a new employee), Mr. Tanaka (your colleague)
            </h4>
            <p class="mt-3">
              On your first day at the office, you meet Mr. Tanaka, your
              colleague. You want to make a good impression, so you say, "Good
              morning, Tanaka-san. My name is [Your Name]." Using{" "}
              <span class="font-japanese font-bold">さん</span> shows respect
              and politeness, making your introduction smooth and professional.
              This honorific is widely used in various settings, making it a
              safe and appropriate choice when addressing people politely.
            </p>
          </div>
        </li>
        <h3 class="pt-3 text-3xl font-bold">
          <span class="font-japanese">ちゃん</span> -{" "}
          <span class="font-honk text-4xl">Chan</span>
        </h3>
        <li>
          <span class="font-bold">Usage: </span>Informal, affectionate,
          typically used for children, close friends, or significant others.
        </li>
        <li>
          <span class="font-bold">Context: </span>Conveys endearment and
          closeness.
        </li>
        <li class="flex items-start">
          <span class="mr-3 mt-1 inline-block">•</span>
          <div>
            <h4 class="text-xl">
              <span class="text-2xl font-black">Story: </span>
              Family gathering
            </h4>
            <h4 class="text-xl">
              <span class="mr-2 text-2xl font-black">Characters:</span>
              You (a family member), little Sakura (your niece)
            </h4>
            <p class="mt-3">
              At a family gathering, you see your cute little niece, Sakura,
              playing with her toys. You say, "Sakura-chan, come here and give
              me a hug!" Using{" "}
              <span class="font-japanese font-bold">ちゃん</span> conveys your
              affection and closeness, making Sakura giggle and run into your
              arms. The rest of the family smiles, seeing the bond between you
              two.
            </p>
          </div>
        </li>
        <h3 class="pt-3 text-3xl font-bold">
          <span class="font-japanese">くん</span> -{" "}
          <span class="font-honk text-4xl">Kun</span>
        </h3>
        <li>
          <span class="font-bold">Usage: </span>Informal, typically used for
          boys and young men.
        </li>
        <li>
          <span class="font-bold">Context: </span>Used among friends,
          classmates, or by superiors addressing male subordinates.
        </li>
        <li class="flex items-start">
          <span class="mr-3 mt-1 inline-block">•</span>
          <div>
            <h4 class="text-xl">
              <span class="text-2xl font-black">Story: </span>
              School setting
            </h4>
            <h4 class="text-xl">
              <span class="mr-2 text-2xl font-black">Characters:</span>
              You (a student), Tarou (your classmate)
            </h4>
            <p class="mt-3">
              During recess, you see your classmate Tarou scoring a goal in
              soccer. You cheer, "Nice shot, Tarou-kun!" Using{" "}
              <span class="font-japanese font-bold">くん</span> shows your
              friendly and supportive relationship. Tarou grins and gives you a
              thumbs-up, glad to have your encouragement.
            </p>
          </div>
        </li>

        <h3 class="pt-3 text-3xl font-bold">
          <Furigana furigana="せんせい">先生</Furigana> -{" "}
          <span class="font-honk text-4xl">Sensei</span>
        </h3>
        <li>
          <span class="font-bold">Usage: </span>For teachers, doctors, or
          masters of a craft.
        </li>
        <li>
          <span class="font-bold">Context: </span>Conveys respect for expertise
          and authority.
        </li>
        <li class="flex items-start">
          <span class="mr-3 mt-1 inline-block">•</span>
          <div>
            <h4 class="text-xl">
              <span class="text-2xl font-black">Story: </span>
              Classroom setting
            </h4>
            <h4 class="text-xl">
              <span class="mr-2 text-2xl font-black">Characters:</span>
              You (a student), Mr. Yamada (your teacher)
            </h4>
            <p class="mt-3">
              During class, you raise your hand and say, "Yamada-sensei, I have
              a question about the assignment." Using{" "}
              <span class="font-japanese font-bold">せんせい</span> shows your
              respect for Mr. Yamada's knowledge and position. He nods and
              explains the concept patiently, glad you feel comfortable asking
              questions.
            </p>
          </div>
        </li>

        <h3 class="pt-3 text-3xl font-bold">
          <Furigana furigana="せんぱい">先輩</Furigana> -{" "}
          <span class="font-honk text-4xl">Senpai</span>
        </h3>
        <li>
          <span class="font-bold">Usage: </span>For senior colleagues or
          upperclassmen. Commonly used in both hiragana (
          <span class="font-japanese">せんぱい</span>) and kanji (
          <span class="font-japanese">先輩</span>).
        </li>
        <li>
          <span class="font-bold">Context: </span>Shows respect for someone who
          is more experienced.
        </li>
        <li class="flex items-start">
          <span class="mr-3 mt-1 inline-block">•</span>
          <div>
            <h4 class="text-xl">
              <span class="text-2xl font-black">Story: </span>
              Club activity
            </h4>
            <h4 class="text-xl">
              <span class="mr-2 text-2xl font-black">Characters:</span>
              You (a new club member), Senior Takahashi (an experienced member)
            </h4>
            <p class="mt-3">
              At your first club meeting, you approach Senior Takahashi and say,
              "Takahashi-senpai, can you show me how to use this equipment?"
              Using <span class="font-japanese font-bold">せんぱい</span>{" "}
              acknowledges his experience and seniority. He smiles and agrees to
              help, happy to mentor you.
            </p>
          </div>
        </li>

        <h3 class="pt-3 text-3xl font-bold">
          <Furigana furigana="さま">様</Furigana> -{" "}
          <span class="font-honk text-4xl">Sama</span>
        </h3>
        <li>
          <span class="font-bold">Usage: </span>Very formal, respectful.
        </li>
        <li>
          <span class="font-bold">Context: </span>Used in business settings, for
          customers, or in very polite contexts.
        </li>
        <li class="flex items-start">
          <span class="mr-3 mt-1 inline-block">•</span>
          <div>
            <h4 class="text-xl">
              <span class="text-2xl font-black">Story: </span>
              Customer service
            </h4>
            <h4 class="text-xl">
              <span class="mr-2 text-2xl font-black">Characters:</span>
              You (a store employee), Ms. Tanaka (a customer)
            </h4>
            <p class="mt-3">
              Working at a luxury boutique, you greet a customer, "Welcome,
              Tanaka-sama. How can I assist you today?" Using{" "}
              <span class="font-japanese font-bold">さま</span> conveys the
              utmost respect and politeness, making Ms. Tanaka feel valued and
              appreciated. She smiles, knowing she will receive excellent
              service.
            </p>
          </div>
        </li>

        <h3 class="pt-3 text-3xl font-bold">
          <Furigana furigana="どの">殿</Furigana> -{" "}
          <span class="font-honk text-4xl">Dono</span>
        </h3>
        <li>
          <span class="font-bold">Usage: </span>Very formal, archaic.
        </li>
        <li>
          <span class="font-bold">Context: </span>Not used in modern Japanese,
          but can appear in historical dramas or anime.
        </li>
        <li class="flex items-start">
          <span class="mr-3 mt-1 inline-block">•</span>
          <div>
            <h4 class="text-xl">
              <span class="text-2xl font-black">Story: </span>
              Historical drama
            </h4>
            <h4 class="text-xl">
              <span class="mr-2 text-2xl font-black">Characters:</span>
              You (a samurai), Lord Oda (your master)
            </h4>
            <p class="mt-3">
              In a historical drama, you kneel before Lord Oda and say,
              "Oda-dono, I am ready to serve you." Using{" "}
              <span class="font-japanese font-bold">どの</span> conveys a deep
              sense of respect and formality appropriate for the era. The scene
              captures the audience's attention, illustrating the hierarchical
              relationships of the time.
            </p>
          </div>
        </li>
        <h2 class="pb-3 pt-6 text-center text-2xl font-bold">
          Additional Titles Based on Occupation
        </h2>
        <p>
          In addition to the common honorifics, certain titles are used to
          address people based on their occupation or position. You're not
          expected to memorize any of these at this point, but here are a few
          examples for future reference:
        </p>
        <div>
          <li>
            <span class="font-japanese text-xl font-bold">社長</span> (Shachou)
            - President or CEO of a company
          </li>
          <li class="ml-6 mt-1">
            Ex: <span class="font-japanese">田中社長</span> (Tanaka-shachou) -
            President Tanaka
          </li>
        </div>
        <div>
          <li>
            <span class="font-japanese text-xl font-bold">部長</span> (Buchou) -
            Department manager or head
          </li>
          <li class="ml-6 mt-1">
            Ex: <span class="font-japanese">佐藤部長</span> (Satou-buchou) -
            Manager Satou
          </li>
        </div>
        <div>
          <li>
            <span class="font-japanese text-xl font-bold">課長</span> (Kachou) -
            Section manager
          </li>
          <li class="ml-6 mt-1">
            Ex: <span class="font-japanese">鈴木課長</span> (Suzuki-kachou) -
            Section Manager Suzuki
          </li>
        </div>
        <div>
          <li>
            <span class="font-japanese text-xl font-bold">主任</span> (Shunin) -
            Chief or head (of a smaller group)
          </li>
          <li class="ml-6 mt-1">
            Ex: <span class="font-japanese">山田主任</span> (Yamada-shunin) -
            Chief Yamada
          </li>
        </div>
        <div>
          <li>
            <span class="font-japanese text-xl font-bold">隊長</span> (Taichou)
            - Captain or leader of a team, squad, or military unit
          </li>
          <li class="ml-6 mt-1">
            Ex: <span class="font-japanese">鈴木隊長</span> (Suzuki-taichou) -
            Captain Suzuki
          </li>
        </div>
        <h2 class="pb-3 pt-6 text-center text-2xl font-bold">
          Understanding Context and Nuance
        </h2>
        <p>
          Understanding when and how to use honorifics is key to mastering
          polite Japanese. Here are some guidelines:
        </p>
        <li>
          <span class="font-bold">
            Use <span class="font-japanese text-xl">さん</span> (San) for
            general politeness:{" "}
          </span>
          This is the safest and most commonly used honorific. Use it unless you
          have a specific reason to use another.
        </li>
        <li>
          <span class="font-bold">
            Use{" "}
            <span class="font-japanese text-xl">
              <Furigana furigana={<span class="text-sm">せんせい</span>}>
                先生
              </Furigana>
            </span>{" "}
            (Sensei) for teachers and experts:{" "}
          </span>
          This is used to show respect for someone with expertise, such as
          teachers, doctors, and masters of a craft.
        </li>
        <li>
          <span class="font-bold">
            Use <span class="font-japanese text-xl">ちゃん</span> (Chan) and{" "}
            <span class="font-japanese text-xl">くん</span> (Kun) for
            informality:{" "}
          </span>
          These honorifics are used among friends, family, and people you are
          close to. <span class="font-japanese">ちゃん</span> is generally used
          for females and children, while{" "}
          <span class="font-japanese">くん</span> is used for males.
        </li>
        <li>
          <span class="font-bold">
            Use <span class="font-japanese text-xl">せんぱい</span> (Senpai) in
            hierarchical contexts:{" "}
          </span>
          It's used in schools and workplaces to denote seniority.
        </li>
        <li>
          <span class="font-bold">
            Use <span class="font-japanese text-xl">さま</span> (Sama) for high
            respect:{" "}
          </span>
          This honorific is used in formal business settings, customer service,
          or when addressing someone with great respect.
        </li>
        <li>
          <span class="text-xl font-bold underline underline-offset-4">
            Avoid using honorifics for yourself:{" "}
          </span>
          It is considered arrogant and impolite to use honorifics when
          referring to yourself.
        </li>
        <h2 class="!pb-6 pt-16 text-center text-5xl font-bold">Practice</h2>
        <h4 class="pb-2 text-center text-xl font-bold">
          Put the descriptions in the correct order [wip]
        </h4>
        <div class="flex w-full pb-24">
          <ul class="mr-1 flex w-1/4 flex-col font-japanese [&>*]:text-xl">
            <Button variant="outline">さん</Button>
            <Button variant="outline">ちゃん</Button>
            <Button variant="outline">くん</Button>
            <Button variant="outline">さま</Button>
            <Button variant="outline">せんせい</Button>
            <Button variant="outline">せんぱい</Button>
          </ul>
          <ul class="w-3/4 [&>*]:h-[2.85rem] [&>*]:justify-start [&>*]:text-start [&>*]:text-[1.125rem]">
            <Button variant="outline">
              Used for young boys or male friends
            </Button>
            <Button variant="outline">Used for teachers or doctors</Button>
            <Button variant="outline">
              General polite term, similar to Mr./Ms.
            </Button>
            <Button variant="outline">
              Used for senior colleagues or upperclassmen
            </Button>
            <Button variant="outline">
              Very formal, used in business settings or for customers
            </Button>
            <Button variant="outline">
              Affectionate, used for children or close friends
            </Button>
          </ul>
        </div>
      </div>
    </ContentBox>
  )
}
