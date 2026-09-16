import type { Game } from "@/lib/types";

/**
 * P999 Game catalogue.
 *
 * Add a new game by appending an object here and placing its artwork inside
 * /public/images/games/.
 *
 * The current repository contains a limited set of artwork files, so some
 * entries temporarily reuse existing artwork until dedicated game images
 * are added.
 */

export const games: Game[] = [
  {
    slug: "aviator",
    name: "Aviator",
    category: "mini-games",
    image: "/images/games/sky-ace.webp",
    imageAlt: "Aviator style crash game artwork",
    tagline: "Watch the multiplier rise and decide when to cash out.",
    description:
      "A fast-paced multiplier game where the round increases over time. Players can follow the rising multiplier and choose when to cash out.",
    hot: true,
  },
  {
    slug: "chicken-road-2",
    name: "Chicken Road 2.0",
    category: "mini-games",
    image: "/images/games/cricket-clash.webp",
    imageAlt: "Chicken Road style arcade game artwork",
    tagline: "A quick arcade-style game with changing round conditions.",
    description:
      "Chicken Road 2.0 is an arcade-style game designed around short rounds and simple gameplay. Each round provides a different opportunity to play.",
    hot: true,
  },
  {
    slug: "piggy-bank",
    name: "Piggy Bank",
    category: "mini-games",
    image: "/images/games/golden-fortune.webp",
    imageAlt: "Piggy Bank game artwork",
    tagline: "A simple game built around collecting and managing rewards.",
    description:
      "Piggy Bank is a casual game with a straightforward interface and quick gameplay sessions.",
  },
  {
    slug: "9-wickets-sports",
    name: "9 Wickets Sports",
    category: "mini-games",
    image: "/images/games/cricket-clash.webp",
    imageAlt: "Cricket sports game artwork",
    tagline: "A cricket-focused sports gaming experience.",
    description:
      "9 Wickets Sports brings cricket-themed gameplay into the P999 game collection with a focus on quick and accessible sessions.",
    hot: true,
  },
  {
    slug: "jili-slots",
    name: "JILI Slots",
    category: "slots",
    image: "/images/games/golden-fortune.webp",
    imageAlt: "JILI Slots style game artwork",
    tagline: "Explore a collection of slot-style games.",
    description:
      "JILI Slots is a collection of slot-style games featuring different themes, layouts and gameplay formats.",
    hot: true,
  },
  {
    slug: "pg-slots",
    name: "PG Slots",
    category: "slots",
    image: "/images/games/dragon-reels.webp",
    imageAlt: "PG Slots style game artwork",
    tagline: "A selection of modern slot-style gaming experiences.",
    description:
      "PG Slots provides access to a variety of themed slot games within the P999 game catalogue.",
  },
  {
    slug: "jili-cards",
    name: "JILI Cards",
    category: "cards",
    image: "/images/games/royal-rummy.webp",
    imageAlt: "JILI card game artwork",
    tagline: "Card-based games with familiar gameplay formats.",
    description:
      "JILI Cards brings card-focused gaming experiences together in one section of the P999 catalogue.",
  },
  {
    slug: "wg-slot",
    name: "WG Slot",
    category: "slots",
    image: "/images/games/dragon-reels.webp",
    imageAlt: "WG Slot game artwork",
    tagline: "Explore themed slot gameplay in a compact format.",
    description:
      "WG Slot is part of the P999 slot collection and offers a straightforward interface for short gaming sessions.",
  },
  {
    slug: "crash",
    name: "Crash",
    category: "mini-games",
    image: "/images/games/sky-ace.webp",
    imageAlt: "Crash multiplier game artwork",
    tagline: "Follow the multiplier and decide when to stop.",
    description:
      "Crash is a multiplier-based game built around short rounds and a simple cash-out mechanic.",
    hot: true,
  },
  {
    slug: "dragon-vs-tiger",
    name: "Dragon vs Tiger",
    category: "cards",
    image: "/images/games/royal-rummy.webp",
    imageAlt: "Dragon vs Tiger card game artwork",
    tagline: "A classic comparison-style card game.",
    description:
      "Dragon vs Tiger is a card-based game featuring two sides and straightforward round-based gameplay.",
  },
  {
    slug: "crazy-777",
    name: "Crazy 777",
    category: "slots",
    image: "/images/games/golden-fortune.webp",
    imageAlt: "Crazy 777 slot game artwork",
    tagline: "A classic 777-inspired slot experience.",
    description:
      "Crazy 777 is a themed slot game built around familiar 777-style symbols and quick rounds.",
  },
  {
    slug: "mines",
    name: "Mines",
    category: "mini-games",
    image: "/images/games/neon-runner.webp",
    imageAlt: "Mines style game artwork",
    tagline: "Choose your moves carefully in each round.",
    description:
      "Mines is a grid-based game where players make selections while managing the uncertainty of each round.",
  },
  {
    slug: "fortune",
    name: "Fortune",
    category: "slots",
    image: "/images/games/golden-fortune.webp",
    imageAlt: "Fortune themed slot game artwork",
    tagline: "A fortune-themed slot experience.",
    description:
      "Fortune is a themed slot game featuring a simple interface and short gameplay rounds.",
  },
  {
    slug: "garuda-500",
    name: "Garuda 500",
    category: "slots",
    image: "/images/games/dragon-reels.webp",
    imageAlt: "Garuda themed slot game artwork",
    tagline: "Explore a themed slot experience inspired by Garuda.",
    description:
      "Garuda 500 is a themed slot title included in the P999 games collection.",
  },
  {
    slug: "chicken-road",
    name: "Chicken Road",
    category: "mini-games",
    image: "/images/games/cricket-clash.webp",
    imageAlt: "Chicken Road arcade game artwork",
    tagline: "A simple arcade-style game with quick rounds.",
    description:
      "Chicken Road is an arcade-style title designed around short gameplay sessions and straightforward controls.",
  },
  {
    slug: "treasure-bowl-x-huge",
    name: "Treasure Bowl X_Huge",
    category: "slots",
    image: "/images/games/golden-fortune.webp",
    imageAlt: "Treasure themed slot game artwork",
    tagline: "A treasure-themed slot experience.",
    description:
      "Treasure Bowl X_Huge is a themed slot title available in the P999 games collection.",
  },
  {
    slug: "fortune-gems",
    name: "Fortune Gems",
    category: "slots",
    image: "/images/games/golden-fortune.webp",
    imageAlt: "Gem themed slot game artwork",
    tagline: "A colorful gem-themed slot experience.",
    description:
      "Fortune Gems is a gem-themed slot title with a colorful visual style and straightforward gameplay.",
  },
  {
    slug: "happy-fishing",
    name: "Happy Fishing",
    category: "fishing",
    image: "/images/games/ocean-hunter.webp",
    imageAlt: "Underwater fishing game artwork",
    tagline: "An arcade fishing experience with an underwater theme.",
    description:
      "Happy Fishing is an arcade-style fishing game featuring an underwater setting and quick gameplay sessions.",
    hot: true,
  },
  {
    slug: "fortune-gems-2",
    name: "Fortune Gems 2",
    category: "slots",
    image: "/images/games/golden-fortune.webp",
    imageAlt: "Fortune Gems 2 themed slot game artwork",
    tagline: "A second gem-themed slot experience.",
    description:
      "Fortune Gems 2 continues the gem-themed slot experience with its own gameplay presentation.",
  },
  {
    slug: "chicken-dash",
    name: "Chicken Dash",
    category: "mini-games",
    image: "/images/games/cricket-clash.webp",
    imageAlt: "Chicken Dash arcade game artwork",
    tagline: "A fast arcade-style game built around quick sessions.",
    description:
      "Chicken Dash is a casual arcade-style title designed for short and accessible gameplay.",
  },
  {
    slug: "go-rush",
    name: "Go Rush",
    category: "mini-games",
    image: "/images/games/neon-runner.webp",
    imageAlt: "Fast-paced arcade game artwork",
    tagline: "A fast-paced title for quick gaming sessions.",
    description:
      "Go Rush is an arcade-style game focused on quick rounds and an easy-to-follow gameplay format.",
  },
  {
    slug: "fortune-gems-3",
    name: "Fortune Gems 3",
    category: "slots",
    image: "/images/games/golden-fortune.webp",
    imageAlt: "Fortune Gems 3 themed slot game artwork",
    tagline: "Another gem-themed title in the P999 collection.",
    description:
      "Fortune Gems 3 is a gem-themed slot title included in the P999 games catalogue.",
  },
  {
    slug: "money-coming",
    name: "Money Comming",
    category: "slots",
    image: "/images/games/golden-fortune.webp",
    imageAlt: "Money themed slot game artwork",
    tagline: "A money-themed slot experience.",
    description:
      "Money Comming is a themed slot title included in the P999 games collection.",
  },
  {
    slug: "expand-bets",
    name: "Expand Bets",
    category: "mini-games",
    image: "/images/games/sky-ace.webp",
    imageAlt: "Multiplier game artwork",
    tagline: "A game focused on changing round conditions.",
    description:
      "Expand Bets is a game title available within the P999 collection, designed around short gameplay rounds.",
  },
  {
    slug: "super-ace",
    name: "Super Ace",
    category: "slots",
    image: "/images/games/dragon-reels.webp",
    imageAlt: "Ace themed slot game artwork",
    tagline: "A themed slot game featuring classic card-inspired elements.",
    description:
      "Super Ace is a card-inspired slot title included in the P999 games catalogue.",
  },
  {
    slug: "wild-bounty",
    name: "Wild Bounty",
    category: "slots",
    image: "/images/games/dragon-reels.webp",
    imageAlt: "Wild themed slot game artwork",
    tagline: "A wild-themed slot experience.",
    description:
      "Wild Bounty is a themed slot title available in the P999 games collection.",
  },
  {
    slug: "fortune-rabbit",
    name: "Fortune Rabbit",
    category: "slots",
    image: "/images/games/golden-fortune.webp",
    imageAlt: "Rabbit themed fortune game artwork",
    tagline: "A fortune-themed game featuring a rabbit theme.",
    description:
      "Fortune Rabbit is a themed title in the P999 games collection.",
  },
  {
    slug: "anubis-wrath",
    name: "Anubis Wrath",
    category: "slots",
    image: "/images/games/dragon-reels.webp",
    imageAlt: "Anubis themed slot game artwork",
    tagline: "An Egyptian-inspired themed gaming experience.",
    description:
      "Anubis Wrath is a themed title featuring an ancient Egyptian-inspired setting.",
  },
  {
    slug: "treasures-of-azpec",
    name: "Treasures of Azpec",
    category: "slots",
    image: "/images/games/golden-fortune.webp",
    imageAlt: "Treasure themed game artwork",
    tagline: "Explore a treasure-themed gaming experience.",
    description:
      "Treasures of Azpec is a themed game included in the P999 collection.",
  },
  {
    slug: "fortune-guiden",
    name: "Fortune Guiden",
    category: "slots",
    image: "/images/games/golden-fortune.webp",
    imageAlt: "Fortune themed game artwork",
    tagline: "A fortune-themed title in the P999 catalogue.",
    description:
      "Fortune Guiden is a themed game available as part of the P999 games collection.",
  },
  {
    slug: "fortune-tiger",
    name: "Fortune Tiger",
    category: "slots",
    image: "/images/games/dragon-reels.webp",
    imageAlt: "Tiger themed slot game artwork",
    tagline: "A tiger-themed gaming experience.",
    description:
      "Fortune Tiger is a themed title included in the P999 games catalogue.",
  },
  {
    slug: "mahjong-ways-2",
    name: "Mahjong Ways 2",
    category: "slots",
    image: "/images/games/golden-fortune.webp",
    imageAlt: "Mahjong themed slot game artwork",
    tagline: "A Mahjong-inspired slot experience.",
    description:
      "Mahjong Ways 2 is a Mahjong-themed title included in the P999 games collection.",
  },
  {
    slug: "mahjong-race",
    name: "Mahjong Race",
    category: "mini-games",
    image: "/images/games/neon-runner.webp",
    imageAlt: "Mahjong themed arcade game artwork",
    tagline: "A fast-paced Mahjong-inspired title.",
    description:
      "Mahjong Race is a Mahjong-themed game designed around quick gameplay sessions.",
  },
  {
    slug: "blinko",
    name: "Blinko",
    category: "mini-games",
    image: "/images/games/neon-runner.webp",
    imageAlt: "Blinko arcade game artwork",
    tagline: "A simple arcade-style game with quick rounds.",
    description:
      "Blinko is a compact arcade-style title included in the P999 games collection.",
  },
  {
    slug: "boom-red-packet",
    name: "Boom Red Packet",
    category: "mini-games",
    image: "/images/games/golden-fortune.webp",
    imageAlt: "Red packet themed game artwork",
    tagline: "A quick game with a festive red packet theme.",
    description:
      "Boom Red Packet is a themed game included in the P999 collection, designed around short gameplay sessions.",
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
