import Breadcrumbs, { type Crumb } from "@/components/Breadcrumbs";
import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  lede?: string;
  crumbs: Crumb[];
}

/**
 * Shared header for inner pages — breadcrumbs, the page H1 and a short lede.
 * Keeps spacing and typography identical across Rewards, VIP and Support.
 */
export default function PageHeader({
  eyebrow,
  title,
  lede,
  crumbs,
}: PageHeaderProps) {
  return (
    <header className={styles.header}>
      <Breadcrumbs crumbs={crumbs} />
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1 className={styles.title}>{title}</h1>
      {lede && <p className={styles.lede}>{lede}</p>}
    </header>
  );
}
