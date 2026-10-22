"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Icon } from "./icons";

const links = [
  { href: "/#story", label: "The island" },
  { href: "/#chapter-1", label: "Chapters" },
  { href: "/gallery", label: "Field notes" },
];

export function Navbar() {
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const bar = progressRef.current;
    let frame = 0;

    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const progress = max > 0 ? doc.scrollTop / max : 0;
      if (bar) bar.style.transform = `scaleX(${progress})`;
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
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4">
      <div className="glass-panel relative mx-auto flex w-full max-w-6xl items-center justify-between gap-3 overflow-hidden rounded-full py-2 pl-3 pr-2 sm:gap-6 sm:pl-4 sm:pr-2.5">
        <Link
          href="/#top"
          className="group flex items-center gap-2.5 rounded-full py-0.5"
          aria-label="Zanzibar — back to top"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-cyan-400/25 via-cyan-400/5 to-amber-400/15 text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] transition-transform duration-500 group-hover:rotate-12">
            <Icon name="compass" className="h-4 w-4" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[12px] font-semibold tracking-[0.28em] text-white sm:text-[13px]">
              ZANZIBAR
            </span>
            <span className="mt-1 text-[7px] uppercase tracking-[0.32em] text-white/40 sm:text-[8px]">
              Indian Ocean
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.22em] text-white/55 transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#finale"
          className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-3.5 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white/90 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.14] sm:px-4"
        >
          <span className="hidden sm:inline">Plan a visit</span>
          <span className="sm:hidden">Visit</span>
          <Icon
            name="arrow"
            className="h-3.5 w-3.5 text-cyan-200 transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </Link>

        <span
          aria-hidden="true"
          className="absolute inset-x-6 bottom-0 h-px overflow-hidden rounded-full bg-white/5"
        >
          <span
            ref={progressRef}
            className="block h-full w-full origin-left scale-x-0 bg-gradient-to-r from-cyan-300 via-teal-200 to-amber-300"
          />
        </span>
      </div>
    </header>
  );
}
