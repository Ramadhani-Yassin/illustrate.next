"use client";

import { useEffect, useState } from "react";

const chapters = [
  { id: "chapter-1", label: "Spice routes & Stone Town", short: "01" },
  { id: "chapter-2", label: "Dhows & turquoise tides", short: "02" },
  { id: "chapter-3", label: "Swahili culture & rhythm", short: "03" },
  { id: "finale", label: "Stay a little longer", short: "04" },
];

export function ChapterDock() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const marker = window.scrollY + window.innerHeight * 0.42;
      let current: string | null = null;

      for (const chapter of chapters) {
        const el = document.getElementById(chapter.id);
        if (el && el.offsetTop <= marker) current = chapter.id;
      }

      setActive(current);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <nav
        aria-label="Story chapters"
        className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 2xl:block"
      >
        <div className="glass-panel flex flex-col items-center gap-1 rounded-full p-2">
          {chapters.map((chapter) => {
            const isActive = active === chapter.id;
            return (
              <a
                key={chapter.id}
                href={`#${chapter.id}`}
                aria-label={chapter.label}
                aria-current={isActive ? "step" : undefined}
                className={`group relative flex h-10 w-10 items-center justify-center rounded-full text-[10px] font-medium tracking-[0.14em] transition-colors duration-300 ${
                  isActive
                    ? "bg-white/[0.12] text-white"
                    : "text-white/40 hover:bg-white/[0.06] hover:text-white/80"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute inset-0 rounded-full border transition-all duration-500 ${
                    isActive
                      ? "border-cyan-300/40 shadow-[0_0_20px_rgba(34,211,238,0.22)]"
                      : "border-transparent"
                  }`}
                />
                <span className={isActive ? "text-cyan-200" : undefined}>
                  {chapter.short}
                </span>
                <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full border border-white/12 bg-[#0a1220]/80 px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-white/75 opacity-0 shadow-xl backdrop-blur-md transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-1">
                  {chapter.label}
                </span>
              </a>
            );
          })}
        </div>
      </nav>

      <nav
        aria-label="Story chapters"
        className="fixed inset-x-0 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex justify-center px-4 2xl:hidden"
      >
        <div className="glass-panel flex items-center gap-1 rounded-full p-1.5">
          {chapters.map((chapter) => {
            const isActive = active === chapter.id;
            return (
              <a
                key={chapter.id}
                href={`#${chapter.id}`}
                aria-label={chapter.label}
                aria-current={isActive ? "step" : undefined}
                className={`flex h-10 min-w-12 items-center justify-center gap-1.5 rounded-full px-3 text-[10px] tracking-[0.14em] transition-colors duration-300 ${
                  isActive
                    ? "bg-white/[0.12] text-white"
                    : "text-white/45 hover:text-white/80"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.9)]"
                      : "bg-white/25"
                  }`}
                />
                {chapter.short}
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}
