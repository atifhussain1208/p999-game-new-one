import type { Reward } from "@/lib/types";

/**
 * Reward and promotion cards shown on /rewards.
 * Add, remove or reorder entries here — the grid adapts automatically.
 */
export const rewards: Reward[] = [
  {
    slug: "welcome-bonus",
    title: "Welcome Bonus",
    amount: "Up to 100%",
    description:
      "Double your first deposit the moment you join. Credited instantly and playable across every game category.",
    icon: "gift",
  },
  {
    slug: "daily-check-in",
    title: "Daily Check-In",
    amount: "7-day streak",
    description:
      "Open the app each day to claim a growing bonus. Reach day seven for the largest reward of the cycle.",
    icon: "calendar",
  },
  {
    slug: "weekly-cashback",
    title: "Weekly Cashback",
    amount: "Up to 5%",
    description:
      "Get a share of your weekly play back every Monday. The rate rises with your VIP level.",
    icon: "cashback",
  },
  {
    slug: "referral-commission",
    title: "Referral Commission",
    amount: "3% forever",
    description:
      "Earn commission on every friend you invite, paid out daily with no cap on how much you can make.",
    icon: "referral",
  },
  {
    slug: "tournaments",
    title: "Weekly Tournaments",
    amount: "Prize pools",
    description:
      "Climb the leaderboard in slots and mini-game tournaments for a share of the weekly prize pool.",
    icon: "trophy",
  },
  {
    slug: "vip-rewards",
    title: "VIP Level-Up",
    amount: "Every tier",
    description:
      "Unlock a one-off bonus each time you reach a new VIP level, on top of your ongoing perks.",
    icon: "medal",
  },
];

/** Steps explaining how the reward programme works. */
export const rewardSteps = [
  {
    title: "Create your account",
    detail: "Download the app and sign up in under a minute — no paperwork.",
  },
  {
    title: "Play and collect",
    detail:
      "Every wager counts toward cashback, VIP progress and tournament standings.",
  },
  {
    title: "Claim your rewards",
    detail:
      "Bonuses land in your wallet automatically. Cashback pays out weekly, commission daily.",
  },
];
