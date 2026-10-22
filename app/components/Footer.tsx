import Link from "next/link";
import { Icon } from "./icons";

export function Footer() {
  return (
    <footer className="relative z-10 px-5 pb-28 sm:px-8 2xl:pb-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 border-t border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-cyan-400/20 to-amber-400/10 text-cyan-200">
              <Icon name="compass" className="h-4 w-4" />
            </span>
            <div>
              <p className="font-display text-[11px] tracking-[0.28em] text-white/85">
                ZANZIBAR
              </p>
              <p className="mt-1 text-[10px] tracking-wide text-white/35">
                A story told by the Indian Ocean.
              </p>
            </div>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[9px] uppercase tracking-[0.22em] text-white/40"
          >
            <Link href="/#chapter-1" className="transition-colors hover:text-white">
              Chapters
            </Link>
            <Link href="/gallery" className="transition-colors hover:text-white">
              Field notes
            </Link>
            <Link href="/#top" className="transition-colors hover:text-white">
              Back to top ↑
            </Link>
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/5 py-6 text-[8px] uppercase tracking-[0.22em] text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Zanzibar · A conceptual travel story</p>
          <p>6°09′S · 39°11′E · Karibu</p>
        </div>
      </div>
    </footer>
  );
}
