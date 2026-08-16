import { useState } from "react";

const bounceKeyframes = `
@keyframes sprite-bounce {
  0%, 100% { transform: translateY(0); }
  4% { transform: translateY(-3px); }
  8% { transform: translateY(3px); }
  12% { transform: translateY(-1.5px); }
  16% { transform: translateY(1.5px); }
  20% { transform: translateY(0); }
}
`;

function EmDashEasterEgg() {
  const [open, setOpen] = useState(false);

  return (
    <span className="relative inline-block">
      <button
        type="button"
        className="inline-block cursor-pointer"
        style={{ animation: "sprite-bounce 3s ease-in-out infinite" }}
        onClick={() => {
          setOpen(!open);
        }}
      >
        —
      </button>
      {open ? (
        <span className="absolute bottom-full left-1/2 z-10 mb-2 w-64 -translate-x-1/2 rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 text-center text-xs text-white/70 shadow-xl">
          yes, I actually used to write with em-dashes and no AI did not write this for me
        </span>
      ) : null}
    </span>
  );
}

export function PersonalQuote() {
  return (
    <section className="relative pt-4 lg:pt-6">
      <style>{bounceKeyframes}</style>
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex gap-5 lg:gap-6">
          <div className="flex flex-col items-center pt-1">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 font-semibold text-white/80">
              D
            </span>
            <div
              className="mt-3 w-0.5 flex-1 rounded-full"
              style={{
                background:
                  "linear-gradient(to bottom, var(--landing-accent), var(--landing-accent-end))",
              }}
            />
          </div>
          <blockquote>
            <p className="mb-3 text-sm font-medium text-white/80">
              Dylan <span className="font-normal text-white/40">· Creator of Nihongo Ninja</span>
            </p>
            <p className="leading-relaxed text-white/60 lg:text-lg">
              I went through some Japanese textbooks, and while their grammar explanations are
              usually pretty decent, let me tell you, the practice sections were inefficient and
              sooo boring. I spent more mental effort trying to understand what they were asking and
              come up with situations to write about than actually practicing the grammar the lesson
              claimed to be about.
            </p>
            <p className="mt-4 leading-relaxed text-white/60 lg:text-lg">
              That&apos;s why I made the tools on Nihongo Ninja
              <EmDashEasterEgg />
              you get <span className="font-medium text-white/80">clear instructions</span>,{" "}
              <span className="font-medium text-white/80">instant feedback</span> on your work, and
              100% of your effort goes into learning the task at hand. You might even enjoy them and
              end up doing some multiple times just for fun{" "}
              <span className="text-sm text-white/40">(shocking, I know)</span>.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
