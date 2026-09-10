import Image from "next/image";
import Link from "next/link";
import type { Game } from "@/lib/types";
import { getCategory } from "@/lib/data/categories";
import { PlayIcon } from "@/components/icons";
import styles from "./GameCard.module.css";

interface GameCardProps {
  game: Game;
  /** Set true only for above-the-fold cards */
  priority?: boolean;
}

export default function GameCard({ game, priority = false }: GameCardProps) {
  const category = getCategory(game.category);
  return (
    <article className={styles.card}>
      <Link
        href={`/games/${game.slug}`}
        className={styles.media}
        aria-label={`${game.name} details`}
      >
        <Image
          src={game.image}
          alt={game.imageAlt}
          fill
          sizes="(max-width: 719px) 46vw, (max-width: 1023px) 30vw, 270px"
          quality={72}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          className={styles.image}
        />
        {game.hot && <span className={styles.hot}>Hot</span>}
        {category && <span className={styles.category}>{category.name}</span>}
      </Link>

      <div className={styles.body}>
        <h3 className={styles.name}>
          <Link href={`/games/${game.slug}`}>{game.name}</Link>
        </h3>
        <Link href={`/games/${game.slug}`} className={styles.play}>
          <PlayIcon size={14} />
          Play
        </Link>
      </div>
    </article>
  );
}
