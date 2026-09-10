import type { Metadata } from "next";
import { site } from "@/lib/site";
import { categories } from "@/lib/data/categories";
import { getGamesByCategory, games } from "@/lib/data/games";
import GameGrid from "@/components/GameGrid";
import Breadcrumbs from "@/components/Breadcrumbs";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "All Games — Slots, Fishing, Mini Games & Cards",
  description: `Browse the full ${site.name} catalogue: premium slots, fishing battles, mini games and card tables. Play free previews and download the app.`,
  alternates: { canonical: "/games" },
};

export const revalidate = 86400;

export default function GamesPage() {
  return (
    <div className="section">
      <div className="container">
        <Breadcrumbs
          crumbs={[{ label: "Home", href: "/" }, { label: "Games" }]}
        />

        <header className={styles.header}>
          <h1>All Games</h1>
          <p>
            {games.length} premium titles across {categories.length}{" "}
            categories — every game tuned for smooth mobile play.
          </p>
        </header>

        {categories.map((category) => {
          const categoryGames = getGamesByCategory(category.slug);
          if (categoryGames.length === 0) return null;
          return (
            <section
              key={category.slug}
              id={category.slug}
              className={styles.categorySection}
              aria-labelledby={`heading-${category.slug}`}
            >
              <div className="section-head">
                <h2 id={`heading-${category.slug}`}>{category.name}</h2>
              </div>
              <p className={styles.categoryDescription}>
                {category.description}
              </p>
              <GameGrid games={categoryGames} />
            </section>
          );
        })}
      </div>
    </div>
  );
}
