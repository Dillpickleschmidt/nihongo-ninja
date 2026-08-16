import { Link } from "@nn/router";
import { cn } from "@nn/ui";
import { useRef, useState } from "react";

import { FeatureVideoCard } from "./feature-video-card";
import { FEATURES } from "./features-data";
import { StatCounter } from "./stat-counter";
import { VideoShowcase } from "./video-showcase";
import { VocabDemoCard } from "./vocab-demo-card";

export function MainFeatures() {
  return (
    <section id="features" className="relative py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center lg:mb-24">
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
            Tools &amp; Resources
            <span className="bg-linear-to-r from-(--landing-accent) to-(--landing-accent-end) bg-clip-text text-transparent">
              {" "}
              That Actually Help
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-white/50 lg:text-lg">
            Everything here is designed to make learning Japanese more enjoyable and effective.
          </p>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {FEATURES.map((feature, i) => (
            <FeatureVideoCard key={feature.title} {...feature} index={i} flipped={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatsSection() {
  return (
    <section className="relative border-y border-white/5 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <StatCounter value="200+" label="Curated Lessons" delay={0} />
          <StatCounter value="11" label="Conjugation Forms" delay={100} />
          <StatCounter value="5" label="JLPT Levels" delay={200} />
          <StatCounter value="∞" label="Practice Sessions" delay={300} />
        </div>
      </div>
    </section>
  );
}

export function WhatMakesUsDifferent() {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative pt-14 pb-20 lg:pt-24 lg:pb-32">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold lg:text-4xl">
          What makes us{" "}
          <span className="bg-linear-to-r from-(--landing-accent) to-(--landing-accent-end) bg-clip-text text-transparent">
            different?
          </span>
        </h2>

        <div className="relative">
          <div
            className="overflow-hidden transition-[max-height] duration-700 ease-in-out"
            // Measured, not a magic cap: a cap can clip zoomed/narrow layouts.
            style={{ maxHeight: expanded ? (contentRef.current?.scrollHeight ?? 10000) : 405 }}
          >
            <div
              ref={contentRef}
              className="space-y-6 font-outfit text-lg leading-relaxed text-white/70"
            >
              <p>
                Many courses have very decent information to teach, but most lack good practice
                material, if any. They&apos;ll hand you worksheets and tell you to start writing, or
                put you in some weird arbitrary practice system that doesn&apos;t align with reality
                or your interests. Other apps like Duolingo have instant feedback but you&apos;re
                mostly dragging premade boxes around, not actually producing Japanese on your own.
                Nihongo Ninja gives you the best of each: you write from scratch and get instant
                feedback, without dumbing anything down.
              </p>

              <p>
                Nihongo Ninja follows the Genki textbook{" "}
                <span className="text-base text-white/40">
                  (the one most American universities use)
                </span>{" "}
                so if you ever want to take a class, find a tutor, or use other Genki-based
                resources, everything lines up. You&apos;re not stuck in one system.
              </p>

              <p>
                Textbooks are also missing something important: real, natural Japanese speech.
                Finding listening material on your own takes forever, and most beginner content is
                either the wrong level or painfully boring. Over time, I&apos;ve curated a personal
                collection of engaging materials matched to your skill level and placed them right
                where they belong. By the way,{" "}
                <span className="underline">every single vocabulary word</span> has multiple{" "}
                <span className="text-base text-white/40">(sometimes dozens)</span> of short
                recordings used in context, sampled from Japanese dramas and anime, with pictures
                attached.
              </p>

              <VocabDemoCard />

              <p>
                You may also be used to boring, monotonous spaced-repetition systems that only track
                vocabulary. Nihongo Ninja also schedules grammar and sentence reviews, so you
                conjugate, write full sentences, and practice vocab all on the same schedule. Seeing
                words in different contexts helps them stick faster, and you end up repeating things
                less.
              </p>

              <p>
                There are many great free and open-source tools for learning Japanese (Anki,
                Yomitan, ASBPlayer, and more). Every tool on Nihongo Ninja is also free to use. The
                only paid part is the built-in spaced repetition, which is just there for the
                convenience of no setup. But if you&apos;d rather use Anki{" "}
                <span className="text-base text-white/40">
                  (totally get it, I was a broke college student too)
                </span>
                , there&apos;s free built-in support for it and you still get the full experience.
              </p>
            </div>
          </div>

          {expanded ? null : (
            <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-[#0b0b0d] to-transparent" />
          )}
        </div>

        <div className="mt-4 text-center">
          <button
            type="button"
            className="inline-flex cursor-pointer items-center gap-1 text-sm text-white/40 transition-colors hover:text-white/60"
            onClick={() => {
              setExpanded(!expanded);
            }}
          >
            {expanded ? "Show less" : "Show more"}
            <svg
              className={cn(
                "size-3.5 transition-transform duration-300",
                expanded && "-rotate-180",
              )}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export function VideoShowcaseSection() {
  return (
    <section className="relative pb-20 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl">See It All in Action</h2>
          <p className="mx-auto max-w-2xl text-white/50">
            Explore each feature through detailed walkthrough videos
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <VideoShowcase
            title="Kana Quiz Demo"
            subtitle="Master hiragana & katakana"
            className="md:col-span-2 lg:col-span-1"
            videoSrc="/video/backgrounds/AdobeStock_353576536_Video_HD_Preview.mp4"
          />
          <VideoShowcase
            title="Conjugation Trainer"
            subtitle="11 verb forms"
            videoSrc="/video/backgrounds/AdobeStock_621202547_Video_HD_Preview.mp4"
          />
          <VideoShowcase
            title="Sentence Practice"
            subtitle="Write & get feedback"
            videoSrc="/video/backgrounds/AdobeStock_527953202_Video_HD_Preview.mp4"
          />
          <VideoShowcase
            title="Discover Section"
            subtitle="Find your next show"
            className="lg:col-span-2"
            videoSrc="/video/backgrounds/AdobeStock_1148732421_Video_HD_Preview.mp4"
          />
          <VideoShowcase
            title="Review System"
            subtitle="SRS made simple"
            videoSrc="/video/backgrounds/AdobeStock_621205133_Video_HD_Preview.mp4"
          />
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-64 w-64 rounded-full bg-(--landing-accent)/20 blur-[100px]" />
        </div>

        <div className="relative">
          <h2 className="mb-6 text-3xl font-bold lg:text-5xl">
            Ready to Start
            <br />
            <span className="bg-linear-to-r from-(--landing-accent) to-(--landing-accent-end) bg-clip-text text-transparent">
              Learning Japanese?
            </span>
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-white/60">
            Dive into the lessons, try out the practice tools, or discover content that matches your
            level. No sign-up needed to get started.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/lessons/greetings">
              <span
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-(--landing-accent) to-(--landing-accent-end) px-10 py-4 text-lg font-semibold text-white transition-transform hover:scale-[1.02]"
                style={{
                  boxShadow:
                    "0 20px 25px -5px color-mix(in srgb, var(--landing-accent) 25%, transparent), 0 8px 10px -6px color-mix(in srgb, var(--landing-accent) 25%, transparent)",
                }}
              >
                Start Exploring
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2 text-lg font-bold">
            <img src="/icons/ninja.png" alt="" width={32} height={32} className="-mb-1.25 size-8" />
            <span className="text-white/70">Nihongo Ninja</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/40">
            {/* Become Links as their pages port */}
            <span>About</span>
            <span>Privacy</span>
            <span>Terms</span>
            <a
              href="https://github.com/Dillpickleschmidt/nihongo-ninja"
              className="transition-colors hover:text-white"
            >
              GitHub
            </a>
          </div>
          <div className="text-sm text-white/30">© 2025 Nihongo Ninja</div>
        </div>
      </div>
    </footer>
  );
}
