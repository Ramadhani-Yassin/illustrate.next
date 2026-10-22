import type { IconName } from "../components/icons";

export type Highlight = {
  icon: IconName;
  tag: string;
  title: string;
  text: string;
};

export type Chapter = {
  id: string;
  index: string;
  kicker: string;
  title: string;
  lead: string;
  body: string;
  coordinates: string;
  caption: string;
  image: {
    src: string;
    alt: string;
    position?: string;
  };
  highlights: Highlight[];
};

export const chapters: Chapter[] = [
  {
    id: "chapter-1",
    index: "01",
    kicker: "Chapter One · Stone Town",
    title: "A city built from trade winds.",
    lead:
      "Stone Town is a labyrinth of coral-rag walls, carved teak doors and courtyards that still hold the scent of centuries.",
    body:
      "Arab dhows, Indian merchants, Portuguese forts and Swahili families folded into one peninsula. Walk it slowly: every doorway is a signature, every alley a conversation between worlds.",
    coordinates: "6°09′S · 39°11′E",
    caption: "Stone Town, at the edge of the old harbour.",
    image: {
      src: "/images/stone-town.jpeg",
      alt: "Zanzibar island life in warm evening light",
      position: "center 55%",
    },
    highlights: [
      {
        icon: "route",
        tag: "Origins",
        title: "The spice route",
        text: "Cloves, cinnamon and cardamom once made these islands the most coveted coordinates in the Indian Ocean.",
      },
      {
        icon: "door",
        tag: "Detail",
        title: "Carved doors",
        text: "Brass studs, lotus motifs and arched frames — each door quietly tells you where its owner came from.",
      },
      {
        icon: "night",
        tag: "After dark",
        title: "Forodhani nights",
        text: "At dusk the seafront becomes a lantern-lit market of grilled seafood, sugarcane and salt air.",
      },
    ],
  },
  {
    id: "chapter-2",
    index: "02",
    kicker: "Chapter Two · The Coast",
    title: "Sails the colour of old moonlight.",
    lead:
      "Out past the reef, the dhow keeps the horizon in balance — a geometry of wood, wind and patience.",
    body:
      "The same lateen sail has crossed these waters for a thousand years. Today it carries fishermen at dawn and travellers at sunset, past sandbanks that appear and vanish with the tide.",
    coordinates: "5°43′S · 39°17′E",
    caption: "A lateen sail off Nungwi, riding the monsoon.",
    image: {
      src: "/images/nungwi-dhow.jpg",
      alt: "A dhow silhouetted against a golden Indian Ocean sunset",
      position: "center 45%",
    },
    highlights: [
      {
        icon: "wave",
        tag: "North coast",
        title: "Nungwi & Kendwa",
        text: "Swim through water so clear it borrows its colour from the sky, then stay for a sunset that lingers.",
      },
      {
        icon: "reef",
        tag: "Underwater",
        title: "Mnemba Atoll",
        text: "A ring of coral and turquoise where dolphins pass and the reef hums with small, bright life.",
      },
      {
        icon: "wind",
        tag: "Ritual",
        title: "The dhow race",
        text: "Every season, crews lean into the wind and race the old boats for the pure joy of it.",
      },
    ],
  },
  {
    id: "chapter-3",
    index: "03",
    kicker: "Chapter Three · The Rhythm",
    title: "The coast keeps its own tempo.",
    lead:
      "Swahili means “of the coast” — a language, a kitchen, a way of belonging that refuses to sit still.",
    body:
      "It is taarab drifting from a courtyard, urojo ladled at midnight, drums answering drums in Makunduchi. Culture here is not on display; it is simply how the evening begins.",
    coordinates: "6°25′S · 39°33′E",
    caption: "Drum patterns and lantern light, after the sun goes down.",
    image: {
      src: "/images/blue-lagoon.jpg",
      alt: "Turquoise water and pale sand on the Zanzibar coast",
      position: "center 55%",
    },
    highlights: [
      {
        icon: "rhythm",
        tag: "Music",
        title: "Taarab",
        text: "Arab strings, Indian harmonies and Swahili poetry, folded into one slow, glittering song.",
      },
      {
        icon: "taste",
        tag: "Midnight",
        title: "Urojo",
        text: "The street-corner soup of Zanzibar: sharp, sweet, golden and impossible to explain in one spoon.",
      },
      {
        icon: "spark",
        tag: "Festival",
        title: "Makunduchi",
        text: "After the rains, the village dances the mwaka kogwa — a joyful, fire-lit reset of the year.",
      },
    ],
  },
];
