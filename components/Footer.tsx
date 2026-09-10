import { site } from "@/lib/site";
import { footerLinks } from "@/lib/data/nav";
import Logo from "@/components/Logo";
import {
  AppleIcon,
  AndroidIcon,
  ShareIcon,
  GlobeIcon,
  ChatIcon,
} from "@/components/icons";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer} id="support">
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Logo />
          <p className={styles.description}>{site.description}</p>
        </div>

        <nav aria-labelledby="footer-quick">
          <h2 id="footer-quick" className={styles.heading}>
            Quick Links
          </h2>
          <ul className={styles.list}>
            {footerLinks.quick.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-support">
          <h2 id="footer-support" className={styles.heading}>
            Support
          </h2>
          <ul className={styles.list}>
            {footerLinks.support.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={styles.heading}>Get the App</h2>
          <div className={styles.apps}>
            <a className={styles.appButton} href={site.download.ios}>
              <AppleIcon size={18} />
              <span>
                <small>Available on</small>
                iOS
              </span>
            </a>
            <a className={styles.appButton} href={site.download.android}>
              <AndroidIcon size={18} />
              <span>
                <small>Get it on</small>
                Android
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <ul className={styles.social} aria-label="Social links">
          <li>
            <a href={site.social.twitter} aria-label="Share">
              <ShareIcon size={16} />
            </a>
          </li>
          <li>
            <a href={site.social.telegram} aria-label="Community chat">
              <ChatIcon size={16} />
            </a>
          </li>
          <li>
            <a href={site.social.facebook} aria-label="Website">
              <GlobeIcon size={16} />
            </a>
          </li>
        </ul>
        <p className={styles.copyright}>
          © {year} {site.name}. All rights reserved. Play responsibly.
        </p>
      </div>
    </footer>
  );
}
