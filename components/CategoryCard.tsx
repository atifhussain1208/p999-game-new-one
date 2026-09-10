import Link from "next/link";
import type { Category } from "@/lib/types";
import {
  SlotsIcon,
  FishingIcon,
  MiniGamesIcon,
  CardsIcon,
} from "@/components/icons";
import styles from "./CategoryCard.module.css";

const iconMap = {
  slots: SlotsIcon,
  fishing: FishingIcon,
  mini: MiniGamesIcon,
  cards: CardsIcon,
} as const;

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const Icon = iconMap[category.icon];
  return (
    <Link
      href={`/games#${category.slug}`}
      className={styles.card}
      aria-label={`${category.name} games`}
    >
      <span className={styles.icon}>
        <Icon size={26} />
      </span>
      <span className={styles.name}>{category.name}</span>
    </Link>
  );
}
