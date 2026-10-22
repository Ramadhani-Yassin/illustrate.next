import type { Chapter } from "../lib/chapters";
import { DhowArt } from "./art/DhowArt";
import { RhythmArt } from "./art/RhythmArt";
import { StoneTownArt } from "./art/StoneTownArt";
import { Icon } from "./icons";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";

const artMap = {
  stone: StoneTownArt,
  dhow: DhowArt,
  rhythm: RhythmArt,
} as const;

type ChapterSectionProps = {
  chapter: Chapter;
  index: number;
};

export function ChapterSection({ chapter, index }: ChapterSectionProps) {
  const Art = artMap[chapter.art];
  const reversed = index % 2 === 1;

  return (
    <section
      id={chapter.id}
      className="relative px-5 py-16 sm:px-8 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className={reversed ? "lg:order-2" : undefined}>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="glass-chip flex h-10 w-10 items-center justify-center rounded-full font-display text-[11px] tracking-[0.12em] text-cyan-200">
                  {chapter.index}
                </span>
                <span className="text-[9px] uppercase tracking-[0.26em] text-white/45 sm:text-[10px]">
                  {chapter.kicker}
                </span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-6 max-w-xl font-display text-[clamp(2.1rem,4.8vw,3.7rem)] font-medium leading-[1.02] tracking-[-0.035em] text-white text-balance">
                {chapter.title}
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl sm:leading-8">
                {chapter.lead}
              </p>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/50 sm:text-[15px]">
                {chapter.body}
              </p>
            </Reveal>

            <Reveal delay={290}>
              <a
                href={`#${chapter.id}-details`}
                className="group mt-7 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-white/45 transition-colors duration-300 hover:text-cyan-200"
              >
                Unfold the details
                <Icon
                  name="arrow"
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </Reveal>
          </div>

          <Reveal
            axis={reversed ? "left" : "right"}
            delay={120}
            className={reversed ? "lg:order-1" : undefined}
          >
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[3.5rem] bg-gradient-to-br from-cyan-400/12 via-transparent to-amber-400/10 blur-2xl"
              />

              <TiltCard className="glass-panel overflow-hidden rounded-[2rem] p-2.5 sm:rounded-[2.4rem] sm:p-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] sm:rounded-[1.9rem]">
                  <Art className="absolute inset-0 h-full w-full" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050c15]/80 via-transparent to-[#050c15]/15" />
                  <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10" />

                  <div className="absolute left-4 top-4">
                    <span className="glass-chip inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[8px] uppercase tracking-[0.2em] text-white/70 sm:text-[9px]">
                      <Icon name="pin" className="h-3 w-3 text-cyan-200" />
                      {chapter.coordinates}
                    </span>
                  </div>

                  <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 sm:inset-x-5 sm:bottom-5">
                    <p className="max-w-[72%] text-[10px] leading-relaxed text-white/65 sm:text-[11px]">
                      {chapter.caption}
                    </p>
                    <span className="font-display text-[9px] tracking-[0.24em] text-white/35">
                      {chapter.index} / 03
                    </span>
                  </div>
                </div>
              </TiltCard>
            </div>
          </Reveal>
        </div>

        <div
          id={`${chapter.id}-details`}
          className="mt-12 grid scroll-mt-28 gap-4 sm:mt-16 md:grid-cols-3"
        >
          {chapter.highlights.map((highlight, highlightIndex) => (
            <Reveal
              key={highlight.title}
              delay={highlightIndex * 90}
              className="h-full"
            >
              <TiltCard className="glass-panel-soft h-full rounded-3xl p-6 transition-colors duration-500 hover:border-white/25">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/12 to-white/[0.02] text-cyan-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
                    <Icon name={highlight.icon} className="h-[18px] w-[18px]" />
                  </span>
                  <span className="text-[8px] uppercase tracking-[0.24em] text-white/35">
                    {highlight.tag}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg tracking-tight text-white">
                  {highlight.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/55">
                  {highlight.text}
                </p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
