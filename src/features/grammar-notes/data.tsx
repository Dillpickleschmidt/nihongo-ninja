import KaParticle from "./components/chapter-1/KaParticle"
import NoParticle from "./components/chapter-1/NoParticle"
import XwaYdesu from "./components/chapter-1/XwaYdesu"
import Dare from "./components/chapter-2/Dare"
import GaParticle from "./components/chapter-2/GaParticle"
import Janai from "./components/chapter-2/Janai"
import MoParticle from "./components/chapter-2/MoParticle"
import NeYoParticles from "./components/chapter-2/NeYoParticles"
import WordsThatPoint from "./components/chapter-2/WordsThatPoint"
import MasuForm from "./components/chapter-3/MasuForm"
import PoliteInvitations from "./components/chapter-3/PoliteInvitations"
import WoDeNiEParticles from "./components/chapter-3/WoDeNiEParticles"
import WordOrder from "./components/chapter-3/WordOrder"
import IruAru from "./components/chapter-4/IruAru"
import Jikan from "./components/chapter-4/Jikan"
import MoActionParticle from "./components/chapter-4/MoActionParticle"
import PolitePastTense from "./components/chapter-4/PolitePastTense"
import Takusan from "./components/chapter-4/Takusan"
import ToParticle from "./components/chapter-4/ToParticle"
import WhereThingsAre from "./components/chapter-4/WhereThingsAre"
import AdjectiveConjugation from "./components/chapter-5/AdjectiveConjugation"
import AdjModifyingNouns from "./components/chapter-5/AdjModifyingNouns"
import CountersCheatsheet from "./components/chapter-5/Counters"
import PoliteVolitional from "./components/chapter-5/PoliteVolitional"
import SukiKirai from "./components/chapter-5/SukiKirai"
import WaContrast from "./components/chapter-5/WaContrast"

export const chapter1 = [
  {
    title: (
      <>
        X<span class="font-japanese">は</span>Y
        <span class="font-japanese">です</span>
      </>
    ),
    content: <XwaYdesu />,
    imgSrc: "/img/chapter-1/grammar-notes/x-wa-y-desu.jpg",
  },
  {
    title: (
      <>
        <span class="font-japanese">か</span> Particle
      </>
    ),
    content: <KaParticle />,
    imgSrc: "/img/chapter-1/grammar-notes/ka-particle.jpg",
  },
  {
    title: (
      <>
        <span class="font-japanese">の</span> Particle
      </>
    ),
    content: <NoParticle />,
    imgSrc: "/img/chapter-1/grammar-notes/no-particle.jpg",
  },
]
export const chapter2 = [
  {
    title: <>Words That Point</>,
    content: <WordsThatPoint />,
    imgSrc: "/img/chapter-2/grammar-notes/words-that-point.jpg",
  },
  {
    title: (
      <>
        <span class="font-japanese">が</span> Particle
      </>
    ),
    content: <GaParticle />,
    imgSrc: "/img/chapter-2/grammar-notes/ga-particle.jpg",
  },
  {
    title: (
      <>
        <span class="font-japanese">だれ</span> - Who
      </>
    ),
    content: <Dare />,
    imgSrc: "/img/chapter-2/grammar-notes/dare.jpg",
  },
  {
    title: (
      <>
        <span class="font-japanese">も</span> Particle
      </>
    ),
    content: <MoParticle />,
    imgSrc: "/img/chapter-2/grammar-notes/mo-particle.jpg",
  },
  {
    title: (
      <>
        <span class="font-japanese">じゃない</span> - Negative Form
      </>
    ),
    content: <Janai />,
    imgSrc: "/img/chapter-2/grammar-notes/janai.jpg",
  },
  {
    title: (
      <>
        <span class="font-japanese">ね</span> and{" "}
        <span class="font-japanese">よ</span>
      </>
    ),
    content: <NeYoParticles />,
    imgSrc: "/img/chapter-2/grammar-notes/ne-yo.jpg",
  },
]

export const chapter3 = [
  {
    title: (
      <>
        <span class="font-japanese">ます</span> Form Conjugation
      </>
    ),
    content: <MasuForm />,
    imgSrc: "/img/chapter-3/grammar-notes/masu-form.jpg",
  },
  {
    title: (
      <>
        Particles - <span class="font-japanese">を, で, に, へ</span>
      </>
    ),
    content: <WoDeNiEParticles />,
    imgSrc: "/img/chapter-3/grammar-notes/o-de-ni-e-particles.jpg",
  },
  {
    title: <>Word Order</>,
    content: <WordOrder />,
    imgSrc: "/img/chapter-3/grammar-notes/word-order.jpg",
  },
  {
    title: <>Polite Invitations</>,
    content: <PoliteInvitations />,
    imgSrc: "/img/chapter-3/grammar-notes/polite-invitations.jpg",
  },
]

export const chapter4 = [
  {
    title: <>Iru/Aru</>,
    content: <IruAru />,
    imgSrc: "/img/chapter-4/grammar-notes/iru-aru.jpg",
  },
  {
    title: <>Where Things Are</>,
    content: <WhereThingsAre />,
    imgSrc: "/img/chapter-4/grammar-notes/where-things-are.jpg",
  },
  {
    title: <>Polite Past Tense</>,
    content: <PolitePastTense />,
    imgSrc: "/img/chapter-4/grammar-notes/polite-past-tense.jpg",
  },
  {
    title: <>と Particle</>,
    content: <ToParticle />,
    imgSrc: "/img/chapter-4/grammar-notes/to-particle.jpg",
  },
  {
    title: <>も Particle</>,
    content: <MoActionParticle />,
    imgSrc: "/img/chapter-4/grammar-notes/mo-particle.jpg",
  },
  {
    title: <>時間 - Time Duration</>,
    content: <Jikan />,
    imgSrc: "/img/chapter-4/grammar-notes/jikan.jpg",
  },
  {
    title: <>たくさん</>,
    content: <Takusan />,
    imgSrc: "/img/chapter-4/grammar-notes/takusan.jpg",
  },
]

export const chapter5 = [
  {
    title: <>Adjective Conjugation</>,
    content: <AdjectiveConjugation />,
    imgSrc: "/img/chapter-5/grammar-notes/adj-conjugation.jpg",
  },
  {
    title: <>Adjective Modifying Nouns</>,
    content: <AdjModifyingNouns />,
    imgSrc: "/img/chapter-5/grammar-notes/adj-modifying-nouns.jpg",
  },
  {
    title: <>好き・嫌い</>,
    content: <SukiKirai />,
    imgSrc: "/img/chapter-5/grammar-notes/suki-kirai.jpg",
  },
  {
    title: <>Contrasting with は</>,
    content: <WaContrast />,
    imgSrc: "/img/chapter-5/grammar-notes/wa-contrast.jpg",
  },
  {
    title: <>Polite Volitional</>,
    content: <PoliteVolitional />,
    imgSrc: "/img/chapter-5/grammar-notes/polite-volitional.jpg",
  },
  {
    title: <>Counters</>,
    content: <CountersCheatsheet />,
    imgSrc: "/img/chapter-5/grammar-notes/counters.jpg",
  },
]
