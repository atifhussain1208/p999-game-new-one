import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { vipData } from "@/lib/data/vip";
import { vipTiers, vipBenefits } from "@/lib/data/vip-tiers";
import PageHeader from "@/components/PageHeader";
import VipSection from "@/components/VipSection";
import DownloadButton from "@/components/DownloadButton";
import { CheckIcon } from "@/components/icons";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "VIP Program",
  description: `Climb seven ${site.name} VIP tiers from Rookie to Prestige. Level-up bonuses, cashback up to 5%, higher withdrawal limits and priority support at every step.`,
  alternates: { canonical: "/vip" },
};

export const revalidate = 86400;

export default function VipPage() {
  return (
    <div className="section">
      <div className="container">
        <PageHeader
          eyebrow="VIP"
          title="VIP Prestige Program"
          lede="Seven tiers, each one raising your cashback, your bonuses and your withdrawal limits. Progress never resets — every session you play moves you up the ladder."
          crumbs={[{ label: "Home", href: "/" }, { label: "VIP" }]}
        />

        {/* Current status */}
        <section aria-labelledby="status-heading">
          <div className="section-head">
            <h2 id="status-heading">Your Status</h2>
          </div>
          <div className={styles.statusWrap}>
            <VipSection data={vipData} />
          </div>
        </section>

        {/* Tier table */}
        <section className={styles.block} id="tiers" aria-labelledby="tiers-heading">
          <div className="section-head">
            <h2 id="tiers-heading">The VIP Ladder</h2>
          </div>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <caption className="sr-only">
                VIP tiers with requirements, level-up bonus, weekly cashback
                and daily withdrawal limit
              </caption>
              <thead>
                <tr>
                  <th scope="col">Tier</th>
                  <th scope="col">Requirement</th>
                  <th scope="col">Level-up bonus</th>
                  <th scope="col">Weekly cashback</th>
                  <th scope="col">Withdrawal limit</th>
                </tr>
              </thead>
              <tbody>
                {vipTiers.map((tier) => (
                  <tr key={tier.level}>
                    <th scope="row">
                      <span className={styles.tierLevel}>VIP {tier.level}</span>
                      <span className={styles.tierName}>{tier.name}</span>
                    </th>
                    <td>{tier.requirement}</td>
                    <td>{tier.levelUpBonus}</td>
                    <td className={styles.highlight}>{tier.cashback}</td>
                    <td>{tier.withdrawalLimit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={styles.note}>
            Requirements are cumulative totals, not monthly targets. Once a tier
            is reached it is yours to keep.
          </p>
        </section>

        {/* Benefits */}
        <section className={styles.block} aria-labelledby="benefits-heading">
          <div className="section-head">
            <h2 id="benefits-heading">Member Benefits</h2>
          </div>
          <ul className={styles.benefits}>
            {vipBenefits.map((benefit) => (
              <li key={benefit.title} className={styles.benefit}>
                <span className={styles.check}>
                  <CheckIcon size={16} />
                </span>
                <div>
                  <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                  <p className={styles.benefitText}>{benefit.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className={styles.cta} aria-labelledby="vip-cta-heading">
          <h2 id="vip-cta-heading">Start Climbing</h2>
          <p>
            Every wager counts toward your next tier. See all current{" "}
            <Link href="/rewards" className={styles.inlineLink}>
              rewards and promotions
            </Link>{" "}
            to make each one go further.
          </p>
          <DownloadButton label="Download for Free" />
        </section>
      </div>
    </div>
  );
}
