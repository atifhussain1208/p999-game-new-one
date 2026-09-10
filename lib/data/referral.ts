import type { ReferralData } from "@/lib/types";

/**
 * Referral widget content. In production this would be fetched per user;
 * the component only consumes this shape.
 */
export const referralData: ReferralData = {
  commissionRate: "3%",
  commissionNote: "Earn every month with no upper limit.",
  inviteCode: "NP-482-915",
  stats: [
    { label: "Earned today", value: "769,361" },
    { label: "Total commission", value: "1,204,880" },
  ],
  note: "Share your code, and earn commission on every friend's play — paid out daily.",
};
