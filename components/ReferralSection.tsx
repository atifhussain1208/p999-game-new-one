import type { ReferralData } from "@/lib/types";
import CopyButton from "@/components/CopyButton";
import { UsersIcon } from "@/components/icons";
import styles from "./ReferralSection.module.css";

interface ReferralSectionProps {
  data: ReferralData;
}

/** Invite & Earn card — commission info, stats and copyable invite code. */
export default function ReferralSection({ data }: ReferralSectionProps) {
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <span className={styles.icon} aria-hidden="true">
          <UsersIcon size={22} />
        </span>
        <div>
          <h3 className={styles.title}>
            Max Commission {data.commissionRate}
          </h3>
          <p className={styles.subtitle}>{data.commissionNote}</p>
        </div>
      </div>

      <dl className={styles.stats}>
        {data.stats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </dl>

      <div className={styles.codeRow}>
        <div>
          <p className={styles.codeLabel}>Your invite code</p>
          <p className={styles.code}>{data.inviteCode}</p>
        </div>
        <CopyButton value={data.inviteCode} />
      </div>

      <p className={styles.note}>{data.note}</p>
    </div>
  );
}
