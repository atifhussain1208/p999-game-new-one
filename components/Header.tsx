import { navLinks } from "@/lib/data/nav";
import Logo from "@/components/Logo";
import DownloadButton from "@/components/DownloadButton";
import MobileMenu from "@/components/MobileMenu";
import { UserIcon } from "@/components/icons";
import styles from "./Header.module.css";

/** Sticky site header. Server component; only the mobile menu ships JS. */
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Logo />

        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className={styles.navLink} href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <DownloadButton size="sm" />
          <a
            className={styles.account}
            href="#account"
            aria-label="Account"
            title="Account"
          >
            <UserIcon size={18} />
          </a>
          <MobileMenu links={navLinks} />
        </div>
      </div>
    </header>
  );
}
