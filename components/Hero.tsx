import Image from "next/image";
import { site } from "@/lib/site";
import DownloadButton from "@/components/DownloadButton";
import styles from "./Hero.module.css";

/**
 * Homepage hero: full-bleed gaming background, dark overlay, badge,
 * H1 and primary download CTA. Fully server-rendered.
 */
export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <Image
        src="/images/hero-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={70}
        className={styles.bg}
      />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <p className="badge">
          <span className="badge__dot" aria-hidden="true" />
          Live 24/7 Gaming
        </p>

        <h1 id="hero-heading" className={styles.title}>
          Play Beyond <span className={styles.accent}>The&nbsp;Limits</span>
        </h1>

        <p className={styles.lede}>
          Step into {site.name} — a premium arena of slots, fishing battles,
          mini games and card tables, with exclusive VIP rewards at every
          level.
        </p>

        <div className={styles.cta} id="download">
          <DownloadButton label="Download for Free" />
        </div>
      </div>
    </section>
  );
}
