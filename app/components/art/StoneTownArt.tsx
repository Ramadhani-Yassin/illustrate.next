type ArtProps = {
  className?: string;
};

export function StoneTownArt({ className = "" }: ArtProps) {
  return (
    <svg
      viewBox="0 0 600 450"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label="A carved Stone Town doorway glowing at dusk"
    >
      <defs>
        <linearGradient id="st-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#07101c" />
          <stop offset="52%" stopColor="#0b2b3a" />
          <stop offset="100%" stopColor="#7c4212" />
        </linearGradient>
        <radialGradient id="st-glow" cx="50%" cy="76%" r="58%">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.5" />
          <stop offset="45%" stopColor="#f97316" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="st-wall" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0e2a39" />
          <stop offset="100%" stopColor="#07131d" />
        </linearGradient>
        <linearGradient id="st-frame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fcd34d" stopOpacity="0.75" />
          <stop offset="35%" stopColor="#b45309" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#3f2410" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="st-door" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#115e59" />
          <stop offset="48%" stopColor="#0f766e" />
          <stop offset="100%" stopColor="#0b3a3a" />
        </linearGradient>
        <linearGradient id="st-sun" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
        <filter id="st-soft" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>

      <rect width="600" height="450" fill="url(#st-sky)" />
      <circle cx="300" cy="330" r="230" fill="url(#st-glow)" />

      <circle
        cx="432"
        cy="176"
        r="46"
        fill="url(#st-sun)"
        opacity="0.55"
        filter="url(#st-soft)"
      />
      <circle cx="432" cy="176" r="27" fill="url(#st-sun)" opacity="0.8" />

      {[
        [74, 82, 0.6],
        [128, 54, 0.4],
        [196, 118, 0.35],
        [516, 92, 0.5],
        [556, 148, 0.3],
        [356, 52, 0.35],
        [244, 74, 0.25],
      ].map(([cx, cy, o], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={i % 2 === 0 ? 1.4 : 1}
          fill="#fff7ed"
          opacity={o}
        />
      ))}

      <g opacity="0.55">
        <path
          d="M0 300h64v-38h44v38h52v-64h38v64h62v-30h50v30h58v-52h42v52h62v-38h48v38h80v150H0Z"
          fill="#07131d"
        />
        <path d="M170 300v-64h38v64" fill="#0b1f2b" />
        <path d="M330 300v-52h42v52" fill="#0b1f2b" />
      </g>

      <g opacity="0.5">
        <path
          d="M58 300v-44a18 18 0 0 1 36 0v44"
          fill="none"
          stroke="#2a6c7c"
          strokeWidth="1.5"
        />
        <path
          d="M476 300v-56a22 22 0 0 1 44 0v56"
          fill="none"
          stroke="#2a6c7c"
          strokeWidth="1.5"
        />
        <path d="M206 300v-36a14 14 0 0 1 28 0v36" fill="none" stroke="#2a6c7c" strokeWidth="1.2" />
      </g>

      <g>
        <path d="M196 450V268a104 104 0 0 1 208 0v182Z" fill="#081822" />
        <path d="M204 450V270a96 96 0 0 1 192 0v180Z" fill="url(#st-frame)" />
        <path d="M216 450V274a84 84 0 0 1 168 0v176Z" fill="#0a1d26" />
        <path d="M242 450V284a58 58 0 0 1 116 0v166Z" fill="url(#st-door)" />
        <path d="M300 450V284" stroke="#062a2a" strokeWidth="2.5" opacity="0.7" />

        <g fill="#fbbf24" opacity="0.8">
          {[286, 326, 366, 406].map((y) => (
            <g key={y}>
              <circle cx="264" cy={y} r="2.4" />
              <circle cx="336" cy={y} r="2.4" />
              <circle cx="276" cy={y} r="1.6" opacity="0.7" />
              <circle cx="324" cy={y} r="1.6" opacity="0.7" />
            </g>
          ))}
        </g>

        <g fill="none" stroke="#fcd34d" strokeOpacity="0.28" strokeWidth="1.2">
          <path d="M254 310h92M254 360h92M254 410h92" />
          <path d="M262 300v140M338 300v140" />
        </g>

        <g fill="none" stroke="#fcd34d" strokeOpacity="0.45" strokeWidth="1.4">
          <path d="M248 276c14-18 34-18 52 0M300 276c18-18 38-18 52 0" />
          <path d="M249 232a51 51 0 0 1 102 0" />
        </g>

        <path
          d="M232 450v-8h136v8Z"
          fill="#0a1d26"
          opacity="0.9"
        />
        <path d="M222 442h156v8H222Z" fill="#081822" opacity="0.8" />
      </g>

      <g>
        <path d="M152 118v70" stroke="#f59e0b" strokeOpacity="0.35" strokeWidth="1" />
        <path
          d="M134 188h36l-5 34h-26Z"
          fill="#f59e0b"
          fillOpacity="0.28"
          stroke="#fcd34d"
          strokeOpacity="0.5"
          strokeWidth="1"
        />
        <circle cx="152" cy="206" r="26" fill="#f59e0b" opacity="0.16" filter="url(#st-soft)" />
        <path d="M448 146v62" stroke="#f59e0b" strokeOpacity="0.3" strokeWidth="1" />
        <path
          d="M432 208h32l-4 30h-24Z"
          fill="#f59e0b"
          fillOpacity="0.24"
          stroke="#fcd34d"
          strokeOpacity="0.45"
          strokeWidth="1"
        />
        <circle cx="448" cy="224" r="22" fill="#f59e0b" opacity="0.14" filter="url(#st-soft)" />
      </g>

      <path
        d="M0 424c60-14 108-8 162 6 56 14 106 10 158-4 54-14 118-18 182-2 34 9 66 14 98 12v14H0Z"
        fill="#050d14"
        opacity="0.85"
      />
      <path
        d="M0 440c80-10 140-4 206 6 58 9 116 6 174-2 66-9 146-6 220 4v2H0Z"
        fill="#0b2530"
        opacity="0.5"
      />
    </svg>
  );
}
