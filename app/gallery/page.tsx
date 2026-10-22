import Link from "next/link";
import type { ComponentType } from "react";
import { AmbientBackground } from "../components/AmbientBackground";
import { DhowArt } from "../components/art/DhowArt";
import { RhythmArt } from "../components/art/RhythmArt";
import { StoneTownArt } from "../components/art/StoneTownArt";
import { Footer } from "../components/Footer";
import { Icon } from "../components/icons";
import { Navbar } from "../components/Navbar";
import { Reveal } from "../components/Reveal";
import { TiltCard } from "../components/TiltCard";

type Note = {
  index: string;
  kicker: string;
  title: string;
  text: string;
  meta: string;
  art: ComponentType<{ className?: string }>;
  ratio: string;
};

const notes: Note[] = [
  {
    index: "01",
    kicker: "Stone Town",
    title: "The doors remember",
    text: "Brass studs, carved lotus and arched frames. Every entrance in the old town is a quiet autobiography.",
    meta: "6°09′S",
    art: StoneTownArt,
    ratio: "aspect-[16/10]",
  },
  {
    index: "02",
    kicker: "Nungwi",
    title: "A sail at golden hour",
    text: "The lateen sail leans into the monsoon, and for a moment the horizon belongs to the dhow.",
    meta: "5°43′S",
    art: DhowArt,
    ratio: "aspect-[4/3]",
  },
  {
    index: "03",
    kicker: "After dark",
    title: "The tempo of the coast",
    text: "Taarab in a courtyard, drums in Makunduchi, the low hum of a city that never fully sleeps.",
    meta: "6°25′S",
    art: RhythmArt,
    ratio: "aspect-[4/3]",
  },
];

const pocketNotes = [
  "Arrive at Forodhani hungry.",
  "The dhow leaves when the wind says so.",
  "Learn one Swahili greeting; it opens every door.",
  "Sunsets are a group activity here.",
];

function NoteCard({ note }: { note: Note }) {
  const Art = note.art;

  return (
    <TiltCard className="glass-panel h-full overflow-hidden rounded-[2rem] p-2.5 sm:rounded-[2.4rem] sm:p-3">
      <div className={`relative ${note.ratio} overflow-hidden rounded-[1.5rem] sm:rounded-[1.9rem]`}>
        <Art className="absolute inset-0 h-full w-full" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050c15]/70 via-transparent to-[#050c15]/10" />
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10" />
        <span className="glass-chip absolute left-4 top-4 rounded-full px-3 py-1.5 font-display text-[9px] tracking-[0.2em] text-white/70">
          {note.index}
        </span>
        <span className="glass-chip absolute right-4 top-4 rounded-full px-3 py-1.5 text-[8px] uppercase tracking-[0.2em] text-white/55">
          {note.meta}
        </span>
      </div>

      <div className="px-3 pb-3 pt-5 sm:px-4 sm:pb-4">
        <p className="text-[8px] uppercase tracking-[0.24em] text-cyan-200/60">
          {note.kicker}
        </p>
        <h2 className="mt-2 font-display text-xl tracking-tight text-white sm:text-2xl">
          {note.title}
        </h2>
        <p className="mt-2 text-sm leading-6 text-white/55">{note.text}</p>
      </div>
    </TiltCard>
  );
}

export default function Gallery() {
  return (
    <>
      <AmbientBackground />
      <Navbar />

      <main className="relative z-10 px-5 pb-20 pt-28 sm:px-8 sm:pt-36">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="glass-chip flex h-10 w-10 items-center justify-center rounded-full text-amber-200">
                <Icon name="spark" className="h-[18px] w-[18px]" />
              </span>
              <span className="text-[9px] uppercase tracking-[0.26em] text-white/45 sm:text-[10px]">
                Field notes · Visual archive
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.4rem,5.6vw,4.4rem)] font-medium leading-[1.02] tracking-[-0.04em] text-white text-balance">
              Small observations from a{" "}
              <span className="bg-gradient-to-r from-cyan-200 via-teal-100 to-amber-200 bg-clip-text text-transparent">
                slower coast.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              Collected between the harbour and the reef — a few details worth
              keeping after the journey home.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:mt-14 md:grid-cols-5 md:gap-5">
            <Reveal axis="left" className="md:col-span-3">
              <NoteCard note={notes[0]} />
            </Reveal>
            <Reveal axis="right" delay={80} className="md:col-span-2">
              <NoteCard note={notes[1]} />
            </Reveal>
            <Reveal axis="left" delay={80} className="md:col-span-2">
              <NoteCard note={notes[2]} />
            </Reveal>

            <Reveal axis="right" delay={140} className="md:col-span-3">
              <TiltCard className="glass-panel-soft flex h-full flex-col justify-between rounded-[2rem] p-6 sm:rounded-[2.4rem] sm:p-8">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[8px] uppercase tracking-[0.24em] text-amber-200/60">
                      Pocket notes
                    </p>
                    <Icon name="compass" className="h-4 w-4 text-white/30" />
                  </div>
                  <h2 className="mt-3 max-w-sm font-display text-2xl tracking-tight text-white sm:text-3xl">
                    Things the island teaches you.
                  </h2>
                  <ul className="mt-6 space-y-3.5">
                    {pocketNotes.map((note) => (
                      <li key={note} className="flex items-start gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-cyan-300"
                        />
                        <span className="text-sm leading-6 text-white/55">
                          {note}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                  <p className="text-[8px] uppercase tracking-[0.22em] text-white/30">
                    Zanzibar · Indian Ocean
                  </p>
                  <p className="font-display text-[10px] tracking-[0.2em] text-white/50">
                    6°09′S · 39°11′E
                  </p>
                </div>
              </TiltCard>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="mt-12 flex justify-center sm:mt-16">
              <Link
                href="/#top"
                className="group glass-chip inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-[10px] uppercase tracking-[0.22em] text-white/65 transition-colors duration-300 hover:text-white"
              >
                <Icon
                  name="arrow"
                  className="h-3.5 w-3.5 rotate-180 text-cyan-200 transition-transform duration-300 group-hover:-translate-x-1"
                />
                Back to the story
              </Link>
            </div>
          </Reveal>
        </div>
      </main>

      <Footer />
    </>
  );
}
