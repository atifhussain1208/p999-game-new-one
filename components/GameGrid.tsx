import type { Game } from "@/lib/types";
import GameCard from "@/components/GameCard";
import styles from "./GameGrid.module.css";

interface GameGridProps {
  games: Game[];
}

export default function GameGrid({ games }: GameGridProps) {
  return (
    <ul className={styles.grid}>
      {games.map((game) => (
        <li key={game.slug}>
          <GameCard game={game} />
        </li>
      ))}
    </ul>
  );
}
