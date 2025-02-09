import { For, createSignal, onCleanup } from "solid-js"
import { Book, Grid2x2, AudioLines } from "lucide-solid"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AudioNormalizer } from "@/features/vocab-card/util/audio-normalizer"
import VocabTextBody from "@/features/vocab-card/components/VocabTextBody"
import type { RichVocabItem } from "@/types/vocab"

type Example = {
  sentence: string
  translation: string
  sound_url: string
  image_url: string
  deck_name: string
}

const DATA: RichVocabItem = {
  word: "聞こえる",
  english: ["to be audible"],
  rubyText: ["<ruby>聞<rt>き</rt></ruby>こえる"],
  particles: [{ particle: "が" }],
  mnemonics: [],
  info: [
    "Potential variation of 聞く (to hear)",
    "Used when something can be heard naturally, without actively trying to listen",
  ],
  example_sentences: [
    {
      japanese: "音楽が聞こえる",
      english: "I can hear music",
    },
    {
      japanese: "ここから海の音が聞こえる",
      english: "I can hear the sound of the ocean from here",
    },
  ],
  id: 1,
  created_at: "",
  path: "",
  furigana: [],
  chapter: null,
  category: null,
  videos: null,
  extra: {},
}

const EXAMPLES: Example[] = [
  {
    sentence: "これ 着替えている音が 外に聞こえちゃわない？",
    translation: "If we're only a curtain apart, won't he hear me changing?",
    sound_url:
      "https://us-southeast-1.linodeobjects.com/immersionkit/media/anime/Alya%20Sometimes%20Hides%20Her%20Feelings%20in%20Russian/media/Alya_S1_002_0.19.24.623-0.19.28.002.mp3",
    image_url:
      "https://us-southeast-1.linodeobjects.com/immersionkit/media/anime/Alya%20Sometimes%20Hides%20Her%20Feelings%20in%20Russian/media/Alya_S1_002_0.19.26.312.jpg",
    deck_name: "Alya Sometimes Hides Her Feelings in Russian",
  },
  {
    sentence: "何も聞こえなくて　何も見えなくて　何も考えられなくて",
    translation:
      "I couldn't hear anything, see anything, or think of anything.",
    sound_url:
      "https://us-southeast-1.linodeobjects.com/immersionkit/media/anime/Kanon%20(2006)/media/A_Kanon_E18_1_0.17.08.430-0.17.14.270.mp3",
    image_url:
      "https://us-southeast-1.linodeobjects.com/immersionkit/media/anime/Kanon%20(2006)/media/A_Kanon_E18_1_0.17.11.350.jpg",
    deck_name: "Kanon (2006)",
  },
]

type VocabCardsProps = {
  data?: RichVocabItem
  countOffset?: number
  noFurigana?: boolean
}

export default function HomePageVocabCard(props: VocabCardsProps) {
  const item = () => props.data || DATA
  const [playingUrl, setPlayingUrl] = createSignal<string | null>(null)
  const normalizer = AudioNormalizer.getInstance()

  const playAudio = async (soundUrl: string) => {
    // If clicking the same audio that's playing, stop it
    if (playingUrl() === soundUrl) {
      setPlayingUrl(null)
      return
    }

    try {
      setPlayingUrl(soundUrl)
      const audio = await normalizer.play(soundUrl)

      audio.onended = () => {
        if (playingUrl() === soundUrl) {
          setPlayingUrl(null)
        }
      }

      // If playback fails or is stopped, clear the playing state
      audio.onpause = () => {
        if (playingUrl() === soundUrl) {
          setPlayingUrl(null)
        }
      }
    } catch (error) {
      console.error("Error playing audio:", error)
      setPlayingUrl(null)
    }
  }

  onCleanup(() => {
    normalizer.clearCache()
  })

  return (
    <div class="sm:p-2">
      <div class="relative rounded-2xl bg-background shadow-md">
        <div class="min-h-48 px-6 pb-6 pt-5">
          <h3 class="mb-4 ml-6 font-japanese text-2xl font-bold">
            <span class="font-japanese text-[1.375rem]">2. </span>
            <span
              class="text-2xl"
              innerHTML={item().rubyText?.[0] || item().word}
            />{" "}
            -{" "}
            <span class="font-japanese text-[1.375rem]">
              {item().english.join(", ")}
            </span>
          </h3>

          <Tabs defaultValue="examples" class="w-full">
            <TabsList class="bg-card/50">
              <TabsTrigger
                value="info"
                class="text-primary/50 hover:text-primary data-[selected]:text-primary"
              >
                <Book class="mr-2 h-4 w-4" />
                Info
              </TabsTrigger>
              <TabsTrigger
                value="examples"
                class="text-primary/50 hover:text-primary data-[selected]:text-primary"
              >
                <Grid2x2 class="mr-2 h-4 w-4" />
                Examples
              </TabsTrigger>
            </TabsList>

            <TabsContent value="info">
              <div class="space-y-4 p-4">
                <VocabTextBody data={[item()]} index={0} />
              </div>
            </TabsContent>

            <TabsContent value="examples">
              <div class="space-y-4 pt-2">
                <For each={EXAMPLES}>
                  {(example) => (
                    <div class="flex flex-col gap-4 sm:flex-row">
                      <div class="w-full sm:w-40">
                        <img
                          src={example.image_url}
                          alt="Anime scene"
                          class="h-48 w-full cursor-pointer rounded-lg object-cover duration-200 ease-in-out sm:h-24 sm:w-40"
                          onClick={() =>
                            example.sound_url && playAudio(example.sound_url)
                          }
                        />
                      </div>
                      <div class="flex-grow">
                        <div class="mb-2 flex items-center gap-2">
                          <button
                            class="rounded-full p-2 hover:bg-neutral-200/50 dark:hover:bg-neutral-600/50"
                            onClick={() =>
                              example.sound_url && playAudio(example.sound_url)
                            }
                          >
                            <AudioLines
                              class={`h-4 w-4 ${
                                playingUrl() === example.sound_url
                                  ? "text-emerald-500"
                                  : ""
                              }`}
                            />
                          </button>
                          <span class="text-sm text-neutral-500 dark:text-neutral-300">
                            {example.deck_name}
                          </span>
                        </div>
                        <p class="mb-1 font-japanese">{example.sentence}</p>
                        <p class="text-sm text-neutral-600 dark:text-neutral-400">
                          {example.translation}
                        </p>
                      </div>
                    </div>
                  )}
                </For>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
