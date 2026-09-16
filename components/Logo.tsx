import Link from "next/link";
import { site } from "@/lib/site";
import { BoltIcon } from "@/components/icons";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <Link href="/" className={styles.logo} aria-label={`${site.name} — home`}>
      <span className={styles.mark}>
        <BoltIcon size={18} />
      </span>
      <span className={styles.word}>
        P999<em>Game</em>
      </span>
    </Link>
  );
}
