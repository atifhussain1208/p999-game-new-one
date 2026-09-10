import type { VipData } from "@/lib/types";
import { MedalIcon } from "@/components/icons";
import styles from "./VipSection.module.css";

interface VipSectionProps {
  data: VipData;
}

/** VIP status card — gold-accented, data-driven. */
export default function VipSection({ data }: VipSectionProps) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div>
          <p className={styles.status}>Current Status</p>
          <p className={styles.level}>
            VIP <span>{data.currentLevel}</span>
          </p>
        </div>
        <span className={styles.medal} aria-hidden="true">
          <MedalIcon size={26} />
        </span>
      </div>

      <div className={styles.progressBlock}>
        <div className={styles.progressMeta}>
          <span>Progress to VIP {data.nextLevel}</span>
          <span className={styles.percent}>{data.progressPercent}%</span>
        </div>
        <div
          className={styles.track}
          role="progressbar"
          aria-valuenow={data.progressPercent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Progress to VIP ${data.nextLevel}`}
        >
          <div
            className={styles.fill}
            style={{ width: `${data.progressPercent}%` }}
          />
        </div>
        <p className={styles.requirement}>{data.requirement}</p>
      </div>

      <dl className={styles.stats}>
        {data.stats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </dl>

      <a className={styles.cta} href="#vip-upgrade">
        Level Up Now
      </a>
    </div>
  );
}
