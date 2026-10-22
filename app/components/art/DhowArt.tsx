type ArtProps = {
  className?: string;
};

export function DhowArt({ className = "" }: ArtProps) {
  return (
    <svg
      viewBox="0 0 600 450"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label="A traditional dhow sailing across a turquoise sunset"
    >
      <defs>
        <linearGradient id="dh-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#051019" />
          <stop offset="42%" stopColor="#0a3441" />
          <stop offset="74%" stopColor="#0e7490" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="dh-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b4f5c" />
          <stop offset="45%" stopColor="#07313d" />
          <stop offset="100%" stopColor="#04121b" />
        </linearGradient>
        <radialGradient id="dh-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fde68a" stopOpacity="0.65" />
          <stop offset="45%" stopColor="#f59e0b" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="dh-sun" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <linearGradient id="dh-sail" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fff7ed" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#fde68a" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id="dh-sail-back" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.35" />
        </linearGradient>
        <filter id="dh-blur" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="20" />
        </filter>
      </defs>

      <rect width="600" height="310" fill="url(#dh-sky)" />
      <rect y="304" width="600" height="146" fill="url(#dh-sea)" />

      <circle cx="414" cy="234" r="170" fill="url(#dh-glow)" />
      <circle cx="414" cy="234" r="44" fill="url(#dh-sun)" opacity="0.9" />
      <ellipse
        cx="414"
        cy="304"
        rx="120"
        ry="10"
        fill="#fbbf24"
        opacity="0.4"
        filter="url(#dh-blur)"
      />

      {[
        [82, 70, 0.6],
        [162, 40, 0.45],
        [252, 96, 0.3],
        [344, 46, 0.5],
        [508, 80, 0.4],
        [558, 132, 0.25],
        [112, 138, 0.3],
      ].map(([cx, cy, o], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={i % 2 === 0 ? 1.3 : 0.9}
          fill="#ecfeff"
          opacity={o}
        />
      ))}

      <g opacity="0.35" fill="none" stroke="#fcd34d" strokeWidth="1">
        <path d="M58 232c48-10 96-10 144 0" />
        <path d="M96 258c58-8 118-8 176 0" />
        <path d="M470 200c30-6 62-6 92 0" />
      </g>

      <path
        d="M0 304c34-12 62-12 94-4 30 8 58 8 90 0 26-6 46-4 66 2v8H0Z"
        fill="#062530"
        opacity="0.8"
      />
      <path
        d="M508 304c26-10 54-10 92-2v4h-92Z"
        fill="#062530"
        opacity="0.6"
      />

      <g>
        <path d="M292 330V110" stroke="#e2e8f0" strokeOpacity="0.55" strokeWidth="2" />
        <path d="M290 130 230 292" stroke="#e2e8f0" strokeOpacity="0.18" strokeWidth="1" />
        <path d="M294 156 350 292" stroke="#e2e8f0" strokeOpacity="0.18" strokeWidth="1" />

        <path
          d="M286 112C240 160 216 230 220 296l66 0Z"
          fill="url(#dh-sail)"
          stroke="#fef3c7"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
        <path
          d="M298 140c44 42 64 102 60 156l-60 0Z"
          fill="url(#dh-sail-back)"
          stroke="#e0f2fe"
          strokeOpacity="0.3"
          strokeWidth="1"
        />

        <path d="M292 110c10 6 20 6 30 0l-30-8Z" fill="#f97316" opacity="0.8" />
        <path
          d="M290 112c12 8 22 8 34 0"
          stroke="#f97316"
          strokeOpacity="0.6"
          strokeWidth="2"
          fill="none"
        />

        <path
          d="M182 322c34 14 76 20 112 20 44 0 84-8 122-22l-18 30c-34 12-72 16-106 16-38 0-74-6-104-18Z"
          fill="#071a24"
          stroke="#0e7490"
          strokeOpacity="0.5"
          strokeWidth="1.2"
        />
        <path
          d="M188 326c40 12 78 16 110 16 40 0 76-6 112-18"
          fill="none"
          stroke="#fbbf24"
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />
        <path d="M390 330c8-14 18-22 30-26" fill="none" stroke="#0e7490" strokeOpacity="0.5" strokeWidth="1.5" />
        <circle cx="420" cy="304" r="2.5" fill="#fbbf24" opacity="0.9" />
      </g>

      <g opacity="0.45" fill="none" strokeLinecap="round">
        <path d="M368 344c20-6 40-6 60 0" stroke="#fbbf24" strokeWidth="1.5" />
        <path d="M210 350c16-5 32-5 48 0" stroke="#fcd34d" strokeWidth="1.2" />
        <path d="M300 360c22-6 44-6 66 0" stroke="#fbbf24" strokeWidth="1.2" />
      </g>

      <g className="wave-slide" fill="none" strokeLinecap="round">
        <path
          d="M-240 378C-200 366-160 366-120 378S-40 390 0 378 80 366 120 378 200 390 240 378 320 366 360 378 440 390 480 378 560 366 600 378 680 390 720 378 800 366 840 378"
          stroke="#7dd3fc"
          strokeOpacity="0.28"
          strokeWidth="1.6"
        />
        <path
          d="M-240 404C-200 392-160 392-120 404S-40 416 0 404 80 392 120 404 200 416 240 404 320 392 360 404 440 416 480 404 560 392 600 404 680 416 720 404 800 392 840 404"
          stroke="#67e8f9"
          strokeOpacity="0.22"
          strokeWidth="1.6"
        />
        <path
          d="M-240 430C-200 418-160 418-120 430S-40 442 0 430 80 418 120 430 200 442 240 430 320 418 360 430 440 442 480 430 560 418 600 430 680 442 720 430 800 418 840 430"
          stroke="#a5f3fc"
          strokeOpacity="0.16"
          strokeWidth="2"
        />
      </g>

      <g stroke="#0b1c26" strokeOpacity="0.45" strokeWidth="1.2" fill="none" strokeLinecap="round">
        <path d="M110 54c4-6 8-6 12 0" />
        <path d="M124 48c4-6 8-6 12 0" />
      </g>

      <g opacity="0.25" stroke="#fde68a" strokeWidth="1" strokeLinecap="round">
        <path d="M148 292l6-16" />
        <path d="M158 292l6-16" />
      </g>

      <rect y="424" width="600" height="26" fill="#03101a" opacity="0.55" />
    </svg>
  );
}
