import { AmbientBackground } from "./components/AmbientBackground";
import { ChapterDock } from "./components/ChapterDock";
import { ChapterSection } from "./components/ChapterSection";
import { Finale } from "./components/Finale";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Reveal } from "./components/Reveal";
import { chapters } from "./lib/chapters";

const whispers = [
  { word: "Karibu", meaning: "welcome" },
  { word: "Pole pole", meaning: "slowly" },
  { word: "Bahari", meaning: "the sea" },
];

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <Navbar />
      <ChapterDock />

      <main className="relative z-10">
        <Hero />

        <div id="story" className="relative scroll-mt-28 px-5 sm:px-8">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <div className="glass-panel-soft flex flex-wrap items-center justify-center gap-x-7 gap-y-3 rounded-[2rem] px-6 py-4 sm:gap-x-10">
                {whispers.map((whisper, index) => (
                  <div key={whisper.word} className="flex items-baseline gap-2">
                    <span className="font-display text-[10px] tracking-[0.22em] text-white/80 sm:text-[11px]">
                      {whisper.word.toUpperCase()}
                    </span>
                    <span className="text-[8px] uppercase tracking-[0.2em] text-white/30 sm:text-[9px]">
                      {whisper.meaning}
                    </span>
                    {index < whispers.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="ml-4 hidden h-1 w-1 rounded-full bg-white/20 sm:block"
                      />
                    )}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <p className="mx-auto mt-14 max-w-2xl text-center font-display text-2xl leading-snug tracking-tight text-white/70 text-balance sm:mt-20 sm:text-3xl">
                Three chapters. One island.{" "}
                <span className="text-white/30">Wander slowly.</span>
              </p>
            </Reveal>
          </div>
        </div>

        {chapters.map((chapter, index) => (
          <ChapterSection key={chapter.id} chapter={chapter} index={index} />
        ))}

        <Finale />
      </main>

      <Footer />
    </>
  );
}
