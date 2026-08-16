import { Link } from "@nn/router";

import { FloatingKanji } from "./landing/floating-kanji";
import { HeroSection } from "./landing/hero-section";
import { PersonalQuote } from "./landing/personal-quote";
import { QuickFeatures } from "./landing/quick-features";
import {
  CTASection,
  Footer,
  MainFeatures,
  StatsSection,
  VideoShowcaseSection,
  WhatMakesUsDifferent,
} from "./landing/sections";
import { useColorAnimation } from "./landing/use-color-animation";

const NOISE_TEXTURE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`;

// The web landing page. Mobile renders home-page.native.tsx instead.
export default function HomePage() {
  useColorAnimation();

  return (
    <div className="relative z-0 min-h-screen overflow-x-clip bg-neutral-950 font-excalifont text-white">
      {/* Floating kanji decorations - furthest back */}
      <FloatingKanji char="忍" className="top-20 left-[10%] -z-20" />
      <FloatingKanji char="語" className="top-[40%] right-[5%] -z-20" />
      <FloatingKanji char="学" className="bottom-[20%] left-[15%] -z-20" />

      {/* Noise texture - above kanji, below content */}
      <div className="fixed inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{ backgroundImage: NOISE_TEXTURE }}
        />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-neutral-950/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/">
            <span className="flex items-center gap-2 text-lg font-bold">
              <img
                src="/icons/ninja.png"
                alt=""
                width={32}
                height={32}
                className="-mb-1.25 size-8"
              />
              <span className="bg-linear-to-r from-white to-white/70 bg-clip-text text-transparent">
                Nihongo Ninja
              </span>
            </span>
          </Link>
          <div className="-ml-20 hidden items-center gap-8 text-sm text-white/60 md:flex">
            <a href="#features" className="transition-colors hover:text-white">
              Features
            </a>
            {/* Become Links as their pages port */}
            <span>Discover</span>
            <span>About</span>
          </div>
          <Link href="/lessons/greetings">
            <span
              className="rounded-full bg-linear-to-r from-(--landing-accent) to-(--landing-accent-end) px-5 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
              style={{
                boxShadow:
                  "0 10px 15px -3px color-mix(in srgb, var(--landing-accent) 20%, transparent), 0 4px 6px -4px color-mix(in srgb, var(--landing-accent) 20%, transparent)",
              }}
            >
              Explore
            </span>
          </Link>
        </div>
      </nav>

      {/* Page Sections */}
      <HeroSection />
      <QuickFeatures />
      <PersonalQuote />
      <MainFeatures />
      <StatsSection />
      <WhatMakesUsDifferent />
      <VideoShowcaseSection />
      <CTASection />
      <Footer />
    </div>
  );
}
