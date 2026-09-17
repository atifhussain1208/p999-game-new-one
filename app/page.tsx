import type { Metadata } from "next";
import Link from "next/link";
import { site, absoluteUrl } from "@/lib/site";
import { categories } from "@/lib/data/categories";
import { getHotGames, games } from "@/lib/data/games";
import { vipData } from "@/lib/data/vip";
import { referralData } from "@/lib/data/referral";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import GameGrid from "@/components/GameGrid";
import VipSection from "@/components/VipSection";
import ReferralSection from "@/components/ReferralSection";
import JsonLd from "@/components/JsonLd";
import { FlameIcon } from "@/components/icons";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  alternates: { canonical: "/" },
};

// Fully static page — revalidate daily so catalogue edits roll out via ISR.
export const revalidate = 86400;

export default function HomePage() {
  const hotGames = getHotGames();

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Hot games",
    itemListElement: hotGames.map((game, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: game.name,
      url: absoluteUrl(`/games/${game.slug}`),
    })),
  };

  return (
    <>
      <JsonLd data={itemListJsonLd} />

      <Hero />

      {/* Categories */}
      <section className="section" aria-labelledby="categories-heading">
        <div className="container">
          <h2 id="categories-heading" className="sr-only">
            Game Categories
          </h2>
          <CategoryGrid categories={categories} />
        </div>
      </section>

      {/* Hot games */}
      <section
        className="section section--alt"
        id="games"
        aria-labelledby="hot-games-heading"
      >
        <div className="container">
          <div className="section-head">
            <h2 id="hot-games-heading">
              <span className={styles.flame} aria-hidden="true">
                <FlameIcon size={24} />
              </span>
              Hot Games
            </h2>
            <Link href="/games" className="section-head__link">
              View All →
            </Link>
          </div>
          <GameGrid games={hotGames} />
        </div>
      </section>

      {/* VIP + Referral */}
      <section
        className="section"
        id="rewards"
        aria-labelledby="rewards-heading"
      >
        <div className="container">
          <h2 id="rewards-heading" className="sr-only">
            Rewards
          </h2>
          <div className={styles.rewardsGrid}>
            <div id="vip">
              <div className="section-head">
                <h2>VIP Prestige</h2>
                <Link href="/vip" className="section-head__link">
                  View All →
                </Link>
              </div>
              <VipSection data={vipData} />
            </div>
            <div>
              <div className="section-head">
                <h2>Invite &amp; Earn</h2>
                <Link href="/rewards" className="section-head__link">
                  View All →
                </Link>
              </div>
              <ReferralSection data={referralData} />
            </div>
          </div>
        </div>
      </section>

      {/* Crawlable supporting copy */}
      <section
        className="section section--alt"
        id="about"
        aria-labelledby="about-heading"
      >
        <div className={`container ${styles.about}`}>
          <h2 id="about-heading">Why Players Choose {site.name}</h2>
          <div className={styles.aboutGrid}>
            <div>
              <h3>{games.length}+ Premium Games</h3>
              <p>
                From cascading slots to real-time fishing battles, every title
                is tuned for smooth play on any device.
              </p>
            </div>
            <div>
              <h3>VIP Rewards at Every Level</h3>
              <p>
                Level-up bonuses, weekly cashback and priority withdrawals grow
                as you climb the VIP ladder.
              </p>
            </div>
            <div>
              <h3>Earn With Friends</h3>
              <p>
                Share your invite code and collect commission on every
                friend&apos;s play — paid out daily with no upper limit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
