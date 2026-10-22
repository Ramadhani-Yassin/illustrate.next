type ArtProps = {
  className?: string;
};

const bars = [
  18, 30, 48, 26, 66, 42, 90, 58, 34, 76, 50, 104, 68, 38, 84, 54, 28, 62, 40,
  20, 32, 16,
];

export function RhythmArt({ className = "" }: ArtProps) {
  return (
    <svg
      viewBox="0 0 600 450"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label="An abstract composition of sound rings and drum rhythms"
    >
      <defs>
        <linearGradient id="rh-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#061019" />
          <stop offset="52%" stopColor="#0a2634" />
          <stop offset="100%" stopColor="#0c3b46" />
        </linearGradient>
        <radialGradient id="rh-orb" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="45%" stopColor="#f59e0b" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0.25" />
        </radialGradient>
        <radialGradient id="rh-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4" />
          <stop offset="55%" stopColor="#f97316" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="rh-bar" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="55%" stopColor="#67e8f9" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
        <pattern
          id="rh-dots"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1" fill="#e0f2fe" fillOpacity="0.14" />
        </pattern>
        <filter id="rh-blur" x="-70%" y="-70%" width="240%" height="240%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>

      <rect width="600" height="450" fill="url(#rh-bg)" />
      <rect width="600" height="450" fill="url(#rh-dots)" />
      <circle cx="300" cy="220" r="230" fill="url(#rh-halo)" />

      <g
        fill="none"
        stroke="#67e8f9"
        strokeOpacity="0.18"
        strokeWidth="1"
      >
        <circle cx="300" cy="220" r="62" />
        <circle cx="300" cy="220" r="104" />
        <circle cx="300" cy="220" r="150" />
        <circle cx="300" cy="220" r="198" strokeDasharray="2 9" />
      </g>

      <g
        fill="none"
        stroke="#fbbf24"
        strokeOpacity="0.3"
        strokeWidth="1.2"
        strokeDasharray="1 12"
      >
        <circle cx="300" cy="220" r="126" />
        <circle cx="300" cy="220" r="174" />
      </g>

      <g className="animate-float-slow">
        <circle
          cx="300"
          cy="220"
          r="74"
          fill="url(#rh-halo)"
          filter="url(#rh-blur)"
        />
        <circle cx="300" cy="220" r="42" fill="url(#rh-orb)" />
        <circle
          cx="300"
          cy="220"
          r="58"
          fill="none"
          stroke="#fde68a"
          strokeOpacity="0.55"
          strokeWidth="1.2"
        />
        <circle
          cx="300"
          cy="220"
          r="70"
          fill="none"
          stroke="#fde68a"
          strokeOpacity="0.22"
          strokeWidth="1"
          strokeDasharray="3 6"
        />
      </g>

      <g stroke="#e0f2fe" strokeOpacity="0.4" strokeWidth="1" fill="none">
        <path d="M96 148c14-10 30-10 44 0" />
        <path d="M466 274c12-8 26-8 38 0" />
      </g>

      {[
        [118, 94, 1],
        [168, 318, 0.7],
        [468, 118, 0.8],
        [518, 332, 0.6],
        [394, 78, 0.5],
        [218, 66, 0.6],
        [132, 240, 0.4],
        [476, 204, 0.5],
        [552, 168, 0.35],
        [58, 330, 0.45],
      ].map(([cx, cy, o], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="1.6" fill="#fef3c7" opacity={o} />
          <circle
            cx={cx}
            cy={cy}
            r="6"
            fill="none"
            stroke="#a5f3fc"
            strokeOpacity={(o as number) * 0.4}
          />
        </g>
      ))}

      <g opacity="0.5" fill="none" stroke="#fbbf24" strokeWidth="1.2" strokeLinecap="round">
        <path d="M84 300c10-6 20-6 30 0" />
        <path d="M494 250c10-6 20-6 30 0" />
      </g>

      <g>
        <path
          d="M58 378h484"
          stroke="#67e8f9"
          strokeOpacity="0.18"
          strokeWidth="1"
        />
        {bars.map((height, i) => (
          <rect
            key={i}
            x={62 + i * 22}
            y={378 - height}
            width="7"
            height={height}
            rx="3.5"
            fill="url(#rh-bar)"
            opacity={0.5 + (height / 104) * 0.45}
          />
        ))}
      </g>

      <g fill="#fde68a" opacity="0.45">
        <circle cx="236" cy="272" r="2" />
        <circle cx="352" cy="262" r="1.6" />
        <circle cx="318" cy="300" r="1.4" />
        <circle cx="272" cy="186" r="1.8" />
      </g>

      <path
        d="M0 420c70-12 132-4 196 4 68 8 138 6 210-2 70-8 132-6 194 2v26H0Z"
        fill="#04121b"
        opacity="0.7"
      />
      <path
        d="M0 438c82-10 150-2 218 4 64 6 130 4 196-2 64-6 128-4 186 2v8H0Z"
        fill="#08242e"
        opacity="0.55"
      />
    </svg>
  );
}
