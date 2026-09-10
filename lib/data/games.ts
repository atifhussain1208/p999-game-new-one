import type { Game } from "@/lib/types";

/**
 * Game catalogue. Add a new game by appending an object here and dropping
 * its artwork into /public/images/games/. Nothing else needs to change —
 * listing pages, detail pages, the sitemap and structured data are all
 * generated from this array.
 */
export const games: Game[] = [
  {
    slug: "sky-ace",
    name: "Sky Ace",
    category: "mini-games",
    image: "/images/games/sky-ace.webp",
    imageAlt: "Stylized red stunt plane climbing through a dark crimson sky",
    tagline: "Cash out before the plane flies away.",
    description:
      "Sky Ace is a high-tension crash game. Place your bet, watch the multiplier climb as the plane soars, and cash out before it disappears. Auto cash-out and live player feed included.",
    hot: true,
    players: "12.4k",
  },
  {
    slug: "neon-runner",
    name: "Neon Runner",
    category: "mini-games",
    image: "/images/games/neon-runner.webp",
    imageAlt: "Neon-lit cyberpunk street stretching toward a glowing horizon",
    tagline: "Dodge, jump and multiply your streak.",
    description:
      "Sprint through a neon cityscape where every safe step multiplies your reward. One wrong move ends the run — bank your winnings whenever you dare.",
    hot: true,
    players: "9.1k",
  },
  {
    slug: "golden-fortune",
    name: "Golden Fortune",
    category: "slots",
    image: "/images/games/golden-fortune.webp",
    imageAlt: "Shower of glowing golden coins against a warm amber background",
    tagline: "243 ways to win with cascading golden reels.",
    description:
      "A luxurious 5-reel slot packed with cascading wins, free-spin showers and a progressive golden jackpot. Land three fortune symbols to trigger the coin storm bonus.",
    hot: true,
    players: "18.7k",
  },
  {
    slug: "cricket-clash",
    name: "Cricket Clash",
    category: "mini-games",
    image: "/images/games/cricket-clash.webp",
    imageAlt: "Floodlit night cricket stadium with a glowing ball arcing over the pitch",
    tagline: "Predict every ball, win every over.",
    description:
      "Live-action cricket predictions with instant payouts. Call boundaries, wickets and over totals as the match unfolds — the sharper your reads, the bigger your rewards.",
    hot: true,
    players: "7.8k",
  },
  {
    slug: "dragon-reels",
    name: "Dragon Reels",
    category: "slots",
    image: "/images/games/dragon-reels.webp",
    imageAlt: "Three emerald slot reels with glowing green and gold symbols",
    tagline: "Awaken the dragon for a 5,000x jackpot.",
    description:
      "An emerald-and-gold slot where matching dragon eyes across the reels unlocks respins, expanding wilds and a 5,000x grand jackpot.",
    players: "6.2k",
  },
  {
    slug: "royal-rummy",
    name: "Royal Rummy",
    category: "cards",
    image: "/images/games/royal-rummy.webp",
    imageAlt: "Two playing cards fanned over a green felt table with a red diamond",
    tagline: "Classic rummy with real-time tables.",
    description:
      "Join live rummy tables around the clock. Fast 2-player duels or full 6-seat tournaments, with daily leaderboards and practice tables for new players.",
    players: "5.4k",
  },
  {
    slug: "ocean-hunter",
    name: "Ocean Hunter",
    category: "fishing",
    image: "/images/games/ocean-hunter.webp",
    imageAlt: "Deep blue underwater scene with fish silhouettes and light rays",
    tagline: "Land the golden leviathan with friends.",
    description:
      "Team up in real time and hunt legendary sea creatures. Upgrade your cannon, chain combo shots and split the bounty when the golden leviathan falls.",
    players: "11.3k",
  },
];

export function getGame(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}

export function getGamesByCategory(categorySlug: string): Game[] {
  return games.filter((g) => g.category === categorySlug);
}

export function getHotGames(): Game[] {
  return games.filter((g) => g.hot);
}
