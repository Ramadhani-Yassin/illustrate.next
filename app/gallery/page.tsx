import Image from "next/image";
import Link from "next/link";
import { AmbientBackground } from "../components/AmbientBackground";
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
  ratio: string;
  sizes: string;
  image: {
    src: string;
    alt: string;
    position?: string;
  };
};

const notes: Note[] = [
  {
    index: "01",
    kicker: "Stone Town",
    title: "The doors remember",
    text: "Brass studs, carved lotus and arched frames. Every entrance in the old town is a quiet autobiography.",
    meta: "6°09′S",
    ratio: "aspect-[16/10]",
    sizes: "(max-width: 767px) 92vw, (max-width: 1280px) 58vw, 720px",
    image: {
      src: "/images/stone-town.jpeg",
      alt: "Warm evening light over Zanzibar island life",
      position: "center 55%",
    },
  },
  {
    index: "02",
    kicker: "Nungwi",
    title: "A sail at golden hour",
    text: "The lateen sail leans into the monsoon, and for a moment the horizon belongs to the dhow.",
    meta: "5°43′S",
    ratio: "aspect-[4/3]",
    sizes: "(max-width: 767px) 92vw, (max-width: 1280px) 38vw, 480px",
    image: {
      src: "/images/nungwi-dhow.jpg",
      alt: "A dhow silhouetted against a golden Indian Ocean sunset",
      position: "center 42%",
    },
  },
  {
    index: "03",
    kicker: "Fumba",
    title: "The blue lagoon",
    text: "At low tide a white sandbank surfaces mid-channel — reachable only by dhow, and only until the water returns.",
    meta: "6°18′S",
    ratio: "aspect-[4/3]",
    sizes: "(max-width: 767px) 92vw, (max-width: 1280px) 38vw, 480px",
    image: {
      src: "/images/blue-lagoon.jpg",
      alt: "Turquoise water and pale sand along the Zanzibar coast",
      position: "center 55%",
    },
  },
  {
    index: "04",
    kicker: "Prison Island",
    title: "Giants of the island",
    text: "A short sail from Stone Town, where century-old tortoises move at their own unhurried pace.",
    meta: "6°07′S",
    ratio: "aspect-[16/9] sm:aspect-[21/9]",
    sizes: "(max-width: 767px) 92vw, (max-width: 1280px) 90vw, 1120px",
    image: {
      src: "/images/prison-island.avif",
      alt: "A giant tortoise on Prison Island, Zanzibar",
      position: "center 62%",
    },
  },
];

const pocketNotes = [
  "Arrive at Forodhani hungry.",
  "The dhow leaves when the wind says so.",
  "Learn one Swahili greeting; it opens every door.",
  "Sunsets are a group activity here.",
];

function NoteCard({ note }: { note: Note }) {
  return (
    <TiltCard className="glass-panel group h-full overflow-hidden rounded-[2rem] p-2.5 sm:rounded-[2.4rem] sm:p-3">
      <div
        className={`relative ${note.ratio} overflow-hidden rounded-[1.5rem] sm:rounded-[1.9rem]`}
      >
        <Image
          src={note.image.src}
          alt={note.image.alt}
          fill
          sizes={note.sizes}
          quality={85}
          style={{ objectPosition: note.image.position }}
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050c15]/80 via-[#050c15]/5 to-[#050c15]/40" />
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

            <Reveal axis="left" delay={80} className="md:col-span-5">
              <NoteCard note={notes[3]} />
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
