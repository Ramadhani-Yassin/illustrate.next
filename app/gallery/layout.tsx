import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Field Notes — Zanzibar",
  description:
    "Small visual observations from Stone Town, the dhow coast and the rhythm of the islands.",
};

export default function GalleryLayout({ children }: LayoutProps<"/gallery">) {
  return <>{children}</>;
}
