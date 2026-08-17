import { Link } from "@nn/router";

import { useAnimateIn } from "./use-animate-in";
import { VideoShowcase } from "./video-showcase";

const ARROW_ICON = (
  <svg
    className="h-5 w-5 transition-transform group-hover:translate-x-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

export function HeroSection() {
  const text = useAnimateIn("down", { duration: 1000, immediate: true });
  const video = useAnimateIn("down", { duration: 1000, scale: 0.95, immediate: true });

  return (
    <section className="relative -mt-16 flex min-h-[calc(100vh-4rem)] items-center justify-center lg:min-h-[calc(100vh-14rem)]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div ref={text.ref} style={text.initialStyles}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-(--landing-accent)/20 bg-(--landing-accent)/10 px-4 py-1.5 text-sm text-(--landing-accent)">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-(--landing-accent) opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-(--landing-accent)" />
              </span>
              Creating an account is optional
            </div>

            <h1 className="mb-6 text-4xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl">
              Learn Japanese
              <br />
              <span className="bg-linear-to-r from-(--landing-accent) to-(--landing-accent-end) bg-clip-text text-transparent">
                Through the Content You Love
              </span>
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/60 lg:text-xl">
              A free collection of tools, curated resources, and textbook-aligned learning paths to
              help you learn Japanese through anime, dramas, and media you actually enjoy.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/dashboard">
                <span
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-(--landing-accent) to-(--landing-accent-end) px-8 py-4 font-semibold text-white transition-transform hover:scale-[1.02]"
                  style={{
                    boxShadow:
                      "0 10px 12.5px -2.5px color-mix(in srgb, var(--landing-accent) 25%, transparent), 0 4px 5px -3px color-mix(in srgb, var(--landing-accent) 25%, transparent)",
                  }}
                >
                  Explore the Tools
                  {ARROW_ICON}
                </span>
              </Link>
              {/* Becomes a Link when the discover feature ports */}
              <span className="inline-flex cursor-default items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white/50">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Discover Content
              </span>
            </div>
          </div>

          <div ref={video.ref} className="relative" style={video.initialStyles}>
            <div className="absolute -inset-4 rounded-3xl bg-linear-to-r from-(--landing-accent)/20 to-(--landing-accent-end)/20 blur-2xl" />

            <VideoShowcase
              title="See Nihongo Ninja in Action"
              subtitle="2 min overview"
              className="relative"
              videoSrc="/video/backgrounds/AdobeStock_796038864_Video_4K_Preview.mp4"
              autoPlay
            />

            <div className="absolute top-8 -left-4 rounded-xl border border-white/10 bg-neutral-900/90 px-4 py-2 shadow-xl backdrop-blur-sm lg:-left-8">
              <div className="text-xs text-white/50">Currently learning</div>
              <div className="font-medium text-white">進撃の巨人</div>
            </div>

            <div className="absolute -right-4 bottom-8 rounded-xl border border-white/10 bg-neutral-900/90 px-4 py-2 shadow-xl backdrop-blur-sm lg:-right-8">
              <div className="text-xs text-white/50">Words mastered</div>
              <div className="font-medium text-(--landing-accent)">2,847</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
