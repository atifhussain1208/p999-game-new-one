import type { VipTier } from "@/lib/types";

/**
 * VIP ladder shown on /vip. Edit the tiers here and the table,
 * structured data and copy all follow.
 */
export const vipTiers: VipTier[] = [
  {
    level: 0,
    name: "Rookie",
    requirement: "Sign up",
    levelUpBonus: "—",
    cashback: "0.5%",
    withdrawalLimit: "5,000 / day",
  },
  {
    level: 1,
    name: "Bronze",
    requirement: "Deposit 100 · wager 800",
    levelUpBonus: "50",
    cashback: "1%",
    withdrawalLimit: "20,000 / day",
  },
  {
    level: 2,
    name: "Silver",
    requirement: "Deposit 500 · wager 5,000",
    levelUpBonus: "200",
    cashback: "1.5%",
    withdrawalLimit: "50,000 / day",
  },
  {
    level: 3,
    name: "Gold",
    requirement: "Deposit 2,000 · wager 25,000",
    levelUpBonus: "800",
    cashback: "2.5%",
    withdrawalLimit: "150,000 / day",
  },
  {
    level: 4,
    name: "Platinum",
    requirement: "Deposit 10,000 · wager 120,000",
    levelUpBonus: "3,500",
    cashback: "3.5%",
    withdrawalLimit: "400,000 / day",
  },
  {
    level: 5,
    name: "Diamond",
    requirement: "Deposit 50,000 · wager 600,000",
    levelUpBonus: "15,000",
    cashback: "4.5%",
    withdrawalLimit: "1,000,000 / day",
  },
  {
    level: 6,
    name: "Prestige",
    requirement: "By invitation",
    levelUpBonus: "Custom",
    cashback: "5%",
    withdrawalLimit: "Unlimited",
  },
];

/** Benefits that apply across the programme. */
export const vipBenefits = [
  {
    title: "Instant level-up bonuses",
    detail:
      "Reach a new tier and the bonus lands in your wallet immediately — no claim form, no waiting period.",
  },
  {
    title: "Cashback that grows",
    detail:
      "Every tier raises your weekly cashback rate, from 0.5% at Rookie to 5% at Prestige.",
  },
  {
    title: "Higher withdrawal limits",
    detail:
      "Daily withdrawal ceilings rise with each level, up to unlimited for Prestige members.",
  },
  {
    title: "Priority support",
    detail:
      "Gold and above skip the queue with a dedicated account manager available around the clock.",
  },
  {
    title: "Birthday and milestone gifts",
    detail:
      "Personalised gifts on your birthday and on each anniversary of joining the programme.",
  },
  {
    title: "Exclusive tournaments",
    detail:
      "Invitation-only events with larger prize pools and fewer competitors.",
  },
];
