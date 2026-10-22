import type { ReactNode } from "react";

export type IconName =
  | "route"
  | "door"
  | "night"
  | "wave"
  | "reef"
  | "wind"
  | "rhythm"
  | "taste"
  | "spark"
  | "compass"
  | "arrow"
  | "pin"
  | "sun"
  | "menu";

const icons: Record<IconName, ReactNode> = {
  route: (
    <>
      <circle cx="5" cy="6" r="2" />
      <circle cx="19" cy="18" r="2" />
      <path d="M7 6h5a4 4 0 0 1 0 8h-1a4 4 0 0 0 0 8h6" />
    </>
  ),
  door: (
    <>
      <path d="M6 21V8a6 6 0 0 1 12 0v13" />
      <path d="M3.5 21h17" />
      <circle cx="15" cy="14" r="1" />
    </>
  ),
  night: (
    <>
      <path d="M20 14.6A8.2 8.2 0 0 1 9.4 4a8.2 8.2 0 1 0 10.6 10.6Z" />
      <path d="M17 3v2M21 7h-2" />
    </>
  ),
  wave: (
    <>
      <path d="M2 9.5c2.2-2.2 4.4-2.2 6.6 0s4.4 2.2 6.6 0 4.4-2.2 6.6 0" />
      <path d="M2 15.5c2.2-2.2 4.4-2.2 6.6 0s4.4 2.2 6.6 0 4.4-2.2 6.6 0" />
    </>
  ),
  reef: (
    <>
      <circle cx="12" cy="12" r="2.6" />
      <path d="M12 3.5a8.5 8.5 0 0 1 8.5 8.5 8.5 8.5 0 0 1-8.5 8.5A8.5 8.5 0 0 1 3.5 12 8.5 8.5 0 0 1 12 3.5Z" />
      <path d="M12 8v1.5M16 12h-1.5M12 16v-1.5M8 12h1.5" />
    </>
  ),
  wind: (
    <>
      <path d="M3 8h11a3 3 0 1 0-3-3" />
      <path d="M3 12h15a3 3 0 1 1-3 3" />
      <path d="M3 16h7" />
    </>
  ),
  rhythm: (
    <>
      <path d="M4 10v4M8 6.5v11M12 8.5v7M16 4v16M20 9.5v5" />
    </>
  ),
  taste: (
    <>
      <path d="M4 11.5h16a8 8 0 0 1-16 0Z" />
      <path d="M9.5 11.5c0-2.6.9-3.8 2.5-3.8s2.5 1.2 2.5 3.8" />
      <path d="M4 20h16" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="m5.9 5.9 2.5 2.5M15.6 15.6l2.5 2.5M18.1 5.9l-2.5 2.5M8.4 15.6l-2.5 2.5" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.2 8.8-2.4 5.6-5.6 2.4 2.4-5.6 5.6-2.4Z" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h13" />
      <path d="m12.5 5.5 6.5 6.5-6.5 6.5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
};

type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}
