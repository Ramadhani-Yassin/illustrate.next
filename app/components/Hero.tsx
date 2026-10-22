import { DhowArt } from "./art/DhowArt";
import { Icon } from "./icons";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";

const stats = [
  { value: "6°S", label: "Latitude" },
  { value: "28°C", label: "Sea temp" },
  { value: "50+", label: "Spices" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:pt-36"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <Reveal>
            <div className="glass-chip inline-flex items-center gap-2.5 rounded-full py-1.5 pl-2 pr-4">
              <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-cyan-300/10">
                <span className="pulse-dot relative h-1.5 w-1.5 rounded-full bg-cyan-300 text-cyan-300" />
              </span>
              <span className="text-[9px] uppercase tracking-[0.26em] text-white/65 sm:text-[10px]">
                Zanzibar · Indian Ocean
              </span>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-7 max-w-[16ch] font-display text-[clamp(2.9rem,8vw,5.6rem)] font-medium leading-[0.94] tracking-[-0.045em] text-white text-balance">
              <span className="block">Where the spice routes</span>{" "}
              <span className="text-shimmer block bg-gradient-to-r from-cyan-200 via-teal-100 to-amber-200 bg-clip-text text-transparent">
                meet the sea.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={170}>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              A slow journey through Stone Town&apos;s carved doors, the grace of
              the dhow, and the rhythm that keeps the Swahili coast alive.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#chapter-1"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-gradient-to-r from-white/95 to-white/80 px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#07101a] shadow-[0_18px_40px_-18px_rgba(255,255,255,0.45)] transition-all duration-300 hover:from-white hover:to-white hover:shadow-[0_22px_50px_-18px_rgba(255,255,255,0.6)]"
              >
                Begin the journey
                <Icon
                  name="arrow"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href="#chapter-2"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/75 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
              >
                <Icon name="wave" className="h-4 w-4 text-cyan-200" />
                The dhow story
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-10 flex items-stretch gap-6 border-t border-white/10 pt-6 sm:gap-10">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-xl font-medium tracking-tight text-white/90 sm:text-2xl">
                    {stat.value}
                  </dd>
                  <dd className="text-[9px] uppercase tracking-[0.24em] text-white/35 sm:text-[10px]">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal axis="right" delay={140}>
          <div className="relative mx-auto w-full max-w-[26rem] lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -inset-8 rounded-[4rem] bg-gradient-to-br from-cyan-400/15 via-transparent to-orange-400/15 blur-2xl"
            />

            <TiltCard
              maxTilt={5}
              className="glass-panel rounded-[2.4rem] p-2.5 sm:rounded-[2.75rem] sm:p-3"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.9rem] sm:rounded-[2.2rem]">
                <DhowArt className="absolute inset-0 h-full w-full" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050c15]/85 via-transparent to-[#050c15]/10" />
                <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10" />

                <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3">
                  <span className="glass-chip inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[8px] uppercase tracking-[0.22em] text-white/70 sm:text-[9px]">
                    <span className="h-1 w-1 rounded-full bg-cyan-300" />
                    Live from the coast
                  </span>
                  <span className="glass-chip rounded-full px-3 py-1.5 text-[8px] uppercase tracking-[0.22em] text-white/55 sm:text-[9px]">
                    5°43′S
                  </span>
                </div>

                <div className="absolute inset-x-5 bottom-5">
                  <p className="text-[9px] uppercase tracking-[0.26em] text-cyan-200/70">
                    Golden hour
                  </p>
                  <p className="mt-2 font-display text-2xl tracking-tight text-white sm:text-3xl">
                    Nungwi, at dusk
                  </p>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-white/50">
                    The monsoon turns, and the horizon fills with sails.
                  </p>
                </div>
              </div>
            </TiltCard>

            <div className="glass-panel-soft animate-float absolute -left-4 top-[22%] hidden items-center gap-2.5 rounded-2xl px-3.5 py-2.5 sm:flex">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-300/10 text-amber-200">
                <Icon name="sun" className="h-4 w-4" />
              </span>
              <div className="leading-tight">
                <p className="text-[8px] uppercase tracking-[0.2em] text-white/40">
                  Sunset
                </p>
                <p className="font-display text-xs text-white/85">18:32</p>
              </div>
            </div>

            <div className="glass-panel-soft animate-float-slow absolute -right-2 bottom-[18%] hidden items-center gap-2 rounded-full py-2 pl-2.5 pr-3.5 sm:flex">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-300/10 text-cyan-200">
                <Icon name="wave" className="h-3.5 w-3.5" />
              </span>
              <p className="text-[8px] uppercase tracking-[0.2em] text-white/60">
                Turquoise tides
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-5 hidden justify-center sm:flex">
        <div className="flex flex-col items-center gap-2.5">
          <span className="text-[8px] uppercase tracking-[0.3em] text-white/30">
            Scroll to wander
          </span>
          <span className="relative h-10 w-px overflow-hidden bg-white/10">
            <span className="absolute inset-x-0 top-0 h-4 animate-[float-y_2.4s_ease-in-out_infinite] bg-gradient-to-b from-cyan-200/80 to-transparent" />
          </span>
        </div>
      </div>
    </section>
  );
}
