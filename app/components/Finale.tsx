import { Icon } from "./icons";
import { Reveal } from "./Reveal";

const steps = [
  {
    time: "Morning · Stone Town",
    title: "Doors and coffee",
    text: "Walk the old quarter before the heat. Carved doors, the fort, a small cup of spiced coffee.",
  },
  {
    time: "Midday · Spice farm",
    title: "Cloves in the shade",
    text: "Cinnamon, vanilla and black pepper, then lunch beneath a mango tree that has seen it all.",
  },
  {
    time: "Golden hour · Sandbank",
    title: "A dhow, a cool box",
    text: "Sail out as the light turns copper. Swim, drift, and let the tide decide when you go home.",
  },
];

const seasons = ["Jun–Oct · dry & bright", "Jan–Feb · warm water"];

export function Finale() {
  return (
    <section id="finale" className="relative px-5 pb-20 pt-8 sm:px-8 sm:pb-28 sm:pt-16">
      <div className="mx-auto max-w-7xl">
        <Reveal axis="scale">
          <div className="glass-panel relative overflow-hidden rounded-[2.25rem] p-6 sm:rounded-[3rem] sm:p-10 lg:p-16">
            <div
              aria-hidden="true"
              className="absolute -left-24 -top-32 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-orange-400/10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />

            <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
              <div>
                <div className="flex items-center gap-3">
                  <span className="glass-chip flex h-10 w-10 items-center justify-center rounded-full font-display text-[11px] tracking-[0.12em] text-amber-200">
                    04
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.26em] text-white/45 sm:text-[10px]">
                    Finale · The invitation
                  </span>
                </div>

                <h2 className="mt-6 max-w-xl font-display text-[clamp(2.2rem,4.8vw,3.8rem)] font-medium leading-[1.02] tracking-[-0.035em] text-white text-balance">
                  The island doesn&apos;t end.
                  <span className="block bg-gradient-to-r from-cyan-200 via-teal-100 to-amber-200 bg-clip-text text-transparent">
                    It lingers.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                  Three days is enough to fall for Zanzibar. A week is enough to
                  understand why people keep returning — for the light, the
                  water, and the unhurried rhythm of a place that has always
                  known how to wait.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {seasons.map((season) => (
                    <span
                      key={season}
                      className="glass-chip inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[9px] uppercase tracking-[0.18em] text-white/55"
                    >
                      <span className="h-1 w-1 rounded-full bg-amber-300" />
                      {season}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="/gallery"
                    className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/90 px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#07101a] transition-all duration-300 hover:bg-white"
                  >
                    Wander the field notes
                    <Icon
                      name="arrow"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                  <a
                    href="#top"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/70 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
                  >
                    <Icon name="compass" className="h-4 w-4 text-cyan-200" />
                    Back to the beginning
                  </a>
                </div>
              </div>

              <div className="glass-panel-soft rounded-[1.75rem] p-5 sm:rounded-[2rem] sm:p-7">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <p className="font-display text-sm tracking-tight text-white/85">
                    A perfect first day
                  </p>
                  <span className="text-[8px] uppercase tracking-[0.22em] text-white/35">
                    Sample rhythm
                  </span>
                </div>

                <ol className="mt-5">
                  {steps.map((step, index) => (
                    <li key={step.title} className="relative flex gap-4 pb-6 last:pb-0">
                      {index < steps.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="absolute left-[15px] top-9 h-[calc(100%-1.75rem)] w-px bg-gradient-to-b from-white/20 to-transparent"
                        />
                      )}
                      <span className="relative z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] font-display text-[10px] text-cyan-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                        {index + 1}
                      </span>
                      <div>
                        <p className="text-[8px] uppercase tracking-[0.22em] text-amber-200/60">
                          {step.time}
                        </p>
                        <h3 className="mt-1.5 font-display text-sm tracking-tight text-white/90">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 text-[12px] leading-5 text-white/50">
                          {step.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-2 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2.5">
                  <Icon name="sun" className="h-3.5 w-3.5 text-amber-200" />
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                    Sunset is never rushed here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
