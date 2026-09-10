export interface Category {
  slug: string;
  name: string;
  description: string;
  /** Key of an inline SVG icon rendered by CategoryCard */
  icon: "slots" | "fishing" | "mini" | "cards";
}

export interface Game {
  slug: string;
  name: string;
  category: Category["slug"];
  image: string;
  imageAlt: string;
  tagline: string;
  description: string;
  hot?: boolean;
  players?: string;
}

export interface VipData {
  currentLevel: number;
  nextLevel: number;
  progressPercent: number;
  requirement: string;
  stats: { label: string; value: string }[];
  perks: string[];
}

export interface ReferralData {
  commissionRate: string;
  commissionNote: string;
  inviteCode: string;
  stats: { label: string; value: string }[];
  note: string;
}

export interface Reward {
  slug: string;
  title: string;
  amount: string;
  description: string;
  icon: "gift" | "calendar" | "cashback" | "referral" | "trophy" | "medal";
}

export interface VipTier {
  level: number;
  name: string;
  requirement: string;
  levelUpBonus: string;
  cashback: string;
  withdrawalLimit: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SupportChannel {
  slug: string;
  name: string;
  detail: string;
  availability: string;
  href: string;
  icon: "chat" | "mail" | "community";
}
