import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { rewards, rewardSteps } from "@/lib/data/rewards";
import { referralData } from "@/lib/data/referral";
import PageHeader from "@/components/PageHeader";
import ReferralSection from "@/components/ReferralSection";
import DownloadButton from "@/components/DownloadButton";
import {
  GiftIcon,
  CalendarIcon,
  CashbackIcon,
  UsersIcon,
  TrophyIcon,
  MedalIcon,
} from "@/components/icons";
import styles from "./page.module.css";

const iconMap = {
  gift: GiftIcon,
  calendar: CalendarIcon,
  cashback: CashbackIcon,
  referral: UsersIcon,
  trophy: TrophyIcon,
  medal: MedalIcon,
} as const;

export const metadata: Metadata = {
  title: "Rewards & Promotions",
  description: `Every ${site.name} reward in one place: welcome bonus, daily check-in, weekly cashback up to 5%, referral commission and tournament prize pools.`,
  alternates: { canonical: "/rewards" },
};

export const revalidate = 86400;

export default function RewardsPage() {
  return (
    <div className="section">
      <div className="container">
        <PageHeader
          eyebrow="Rewards"
          title="Rewards & Promotions"
          lede={`Bonuses run continuously at ${site.name} — from your first deposit through daily check-ins, weekly cashback and referral commission that never stops paying.`}
          crumbs={[{ label: "Home", href: "/" }, { label: "Rewards" }]}
        />

        {/* Reward cards */}
        <section aria-labelledby="all-rewards-heading">
          <div className="section-head">
            <h2 id="all-rewards-heading">Available Rewards</h2>
          </div>
          <ul className={styles.grid}>
            {rewards.map((reward) => {
              const Icon = iconMap[reward.icon];
              return (
                <li key={reward.slug} className={styles.card} id={reward.slug}>
                  <span className={styles.icon}>
                    <Icon size={24} />
                  </span>
                  <p className={styles.amount}>{reward.amount}</p>
                  <h3 className={styles.cardTitle}>{reward.title}</h3>
                  <p className={styles.cardText}>{reward.description}</p>
                </li>
              );
            })}
          </ul>
        </section>

        {/* How it works */}
        <section className={styles.block} aria-labelledby="how-it-works-heading">
          <div className="section-head">
            <h2 id="how-it-works-heading">How It Works</h2>
          </div>
          <ol className={styles.steps}>
            {rewardSteps.map((step, i) => (
              <li key={step.title} className={styles.step}>
                <span className={styles.stepNumber} aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.cardText}>{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Referral */}
        <section className={styles.block} id="referral" aria-labelledby="referral-heading">
          <div className="section-head">
            <h2 id="referral-heading">Invite &amp; Earn</h2>
          </div>
          <div className={styles.referralWrap}>
            <ReferralSection data={referralData} />
          </div>
        </section>

        {/* Closing CTA */}
        <section className={styles.cta} aria-labelledby="rewards-cta-heading">
          <h2 id="rewards-cta-heading">Start Collecting Today</h2>
          <p>
            Download the app to claim your welcome bonus, then climb the{" "}
            <Link href="/vip" className={styles.inlineLink}>
              VIP ladder
            </Link>{" "}
            for higher cashback at every tier.
          </p>
          <DownloadButton label="Download for Free" />
        </section>
      </div>
    </div>
  );
}
