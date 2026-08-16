import { convexQuery } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import { Heading, Main, Paragraph, Text } from "@nn/ui";
import { useQuery } from "@tanstack/react-query";
import { View } from "react-native";

import { LessonHeader, OverviewItem } from "../components/lesson-header";
import { LessonSummary, SummaryItem } from "../components/lesson-summary";
import { MultipleChoiceText } from "../components/multiple-choice-text";
import { VocabCard } from "../components/vocab-card";

export const GREETINGS_SET_ID = "genki_1_ch0_greetings-common-expressions";

function PracticeQuestion({
  prompt,
  children,
}: {
  prompt: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <View className="gap-3">
      <Paragraph className="leading-relaxed text-foreground/75">{prompt}</Paragraph>
      {children}
    </View>
  );
}

export default function GreetingsLesson() {
  const { data } = useQuery(
    convexQuery(api.api.vocabulary.getBySets, { setIds: [GREETINGS_SET_ID] }),
  );
  const vocabItems = data?.[GREETINGS_SET_ID]?.slice(0, 10);

  return (
    <Main className="bg-background pb-32">
      <View pointerEvents="none" className="absolute top-8 right-6 sm:top-11 sm:right-8">
        <Text className="font-japanese text-[10rem] leading-none text-foreground/[0.04] sm:text-[11rem]">
          挨
        </Text>
      </View>

      <View className="mx-auto w-full max-w-3xl">
        <LessonHeader
          chapter="Chapter 0 · Foundations"
          title="Greetings"
          subtitle="The phrases you'll use every single day."
        >
          <OverviewItem>Time-of-day greetings</OverviewItem>
          <OverviewItem>Thank you and goodbye</OverviewItem>
          <OverviewItem>Casual vs. polite forms</OverviewItem>
        </LessonHeader>
      </View>

      <View className="gap-14">
        <View className="mx-auto w-full max-w-3xl px-8">
          <Paragraph className="leading-relaxed text-foreground/75">
            Before grammar, before sentence structure, before any of that, you need greetings. These
            ten phrases cover every &quot;hello&quot; and &quot;goodbye&quot; situation you&apos;ll
            run into.
          </Paragraph>
        </View>

        <View className="mx-auto w-full max-w-3xl gap-4 px-8">
          {vocabItems?.map((item) => (
            <VocabCard
              key={item.key}
              word={item.word}
              furigana={item.furigana}
              english={item.english}
            />
          ))}
        </View>

        <View className="mx-auto w-full max-w-3xl px-8">
          <Paragraph className="leading-relaxed text-foreground/75">
            As with any language, the context and your relationship with the person you&apos;re
            speaking to will guide which phrase is most appropriate.
          </Paragraph>
        </View>

        <View className="mx-auto w-full max-w-3xl gap-5 px-8">
          <Heading level={2} className="text-center text-2xl font-bold">
            Practice
          </Heading>
          <View className="gap-6">
            <PracticeQuestion prompt="You run into a friend in the morning on your way to the store. How do you greet them?">
              <MultipleChoiceText
                answer="おはようございます"
                a="こんにちは"
                b="こんばんは"
                c="おはようございます"
                d="じゃあね"
              />
            </PracticeQuestion>

            <PracticeQuestion prompt="Which greeting would you use when leaving a casual meet-up with friends in the afternoon?">
              <MultipleChoiceText
                answer="じゃあね"
                a="ありがとう"
                b="おはよう"
                c="じゃあね"
                d="さようなら"
              />
            </PracticeQuestion>

            <PracticeQuestion
              prompt={
                <>
                  You say <Text className="font-japanese text-lg font-semibold">こんばんは</Text> to
                  your teacher at 9 AM. Is this correct?
                </>
              }
            >
              <MultipleChoiceText answer="No" a="Yes" b="No" />
            </PracticeQuestion>

            <PracticeQuestion prompt="You've just finished a group project and want to thank everyone for their hard work. You say:">
              <MultipleChoiceText
                answer="ありがとうございます"
                a="ありがとう"
                b="ありがとうございます"
                c="またね"
                d="さようなら"
              />
            </PracticeQuestion>

            <PracticeQuestion prompt="It's 8 PM and you're entering a restaurant. The staff greets you. You reply with:">
              <MultipleChoiceText
                answer="こんばんは"
                a="おはようございます"
                b="こんばんは"
                c="こんにちは"
                d="じゃあね"
              />
            </PracticeQuestion>

            <PracticeQuestion
              prompt={
                <>
                  <Text className="font-japanese text-lg font-semibold">おはよう</Text> is a formal
                  way to say good morning.
                </>
              }
            >
              <MultipleChoiceText answer="False" a="True" b="False" />
            </PracticeQuestion>
          </View>
        </View>

        <View className="mx-auto w-full max-w-3xl px-8">
          <LessonSummary>
            <SummaryItem>
              Time-of-day greetings: おはよう (morning), こんにちは (afternoon), こんばんは
              (evening)
            </SummaryItem>
            <SummaryItem>
              Add ございます for polite forms (おはようございます, ありがとうございます)
            </SummaryItem>
            <SummaryItem>Casual goodbyes: じゃあね / またね — formal: さようなら</SummaryItem>
            <SummaryItem>
              Context matters: who you&apos;re talking to determines the form you use
            </SummaryItem>
          </LessonSummary>
        </View>
      </View>
    </Main>
  );
}
