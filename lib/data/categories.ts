import type { Category } from "@/lib/types";

/** Add, remove or reorder categories here — the UI adapts automatically. */
export const categories: Category[] = [
  {
    slug: "slots",
    name: "Slots",
    description: "Spin premium video slots with big multipliers and bonus rounds.",
    icon: "slots",
  },
  {
    slug: "fishing",
    name: "Fishing",
    description: "Arcade fishing battles with real-time multiplayer action.",
    icon: "fishing",
  },
  {
    slug: "mini-games",
    name: "Mini Games",
    description: "Fast-paced crash, dice and instant-win arcade games.",
    icon: "mini",
  },
  {
    slug: "cards",
    name: "Cards",
    description: "Classic card tables — rummy, teen patti, poker and more.",
    icon: "cards",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
