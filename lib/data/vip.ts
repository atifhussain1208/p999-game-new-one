import type { VipData } from "@/lib/types";

/**
 * VIP widget content. In production this would come from an API for the
 * signed-in player; the shape stays the same.
 */
export const vipData: VipData = {
  currentLevel: 0,
  nextLevel: 1,
  progressPercent: 12,
  requirement: "Deposit 100.00 and wager 800.00 to reach VIP 1.",
  stats: [
    { label: "Level-up bonus", value: "50.00" },
    { label: "Weekly cashback", value: "1%" },
    { label: "Birthday gift", value: "Yes" },
  ],
  perks: [
    "Instant level-up bonuses at every tier",
    "Weekly cashback that grows with your level",
    "Priority withdrawals and dedicated support",
  ],
};
