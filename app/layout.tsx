import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zanzibar — Where the Spice Routes Meet the Sea",
  description:
    "An interactive story through Stone Town's carved doors, the dhow-sailed turquoise tides, and the rhythm of Swahili culture.",
  keywords: ["Zanzibar", "Stone Town", "Swahili", "travel", "Indian Ocean"],
  openGraph: {
    title: "Zanzibar — Where the Spice Routes Meet the Sea",
    description:
      "A slow, glass-lit journey through the spice islands of the Indian Ocean.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#070B14",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="relative min-h-full overflow-x-hidden bg-abyss font-sans text-slate-100">
        {children}
      </body>
    </html>
  );
}
