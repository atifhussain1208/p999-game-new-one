import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { site, absoluteUrl } from "@/lib/site";
import { games, getGame, getGamesByCategory } from "@/lib/data/games";
import { getCategory } from "@/lib/data/categories";
import Breadcrumbs from "@/components/Breadcrumbs";
import DownloadButton from "@/components/DownloadButton";
import GameGrid from "@/components/GameGrid";
import JsonLd from "@/components/JsonLd";
import styles from "./page.module.css";

interface GamePageProps {
  params: Promise<{ slug: string }>;
}

/** Pre-render every game page at build time (SSG). */
export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export const revalidate = 86400;
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: GamePageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) return {};
  return {
    // `absolute` stops the root layout's "%s | NovaPlay" template from
    // appending the brand a second time (it's already in the title).
    title: { absolute: `${game.name} — Play on ${site.name}` },
    description: `${game.tagline} ${game.description}`.slice(0, 158),
    alternates: { canonical: `/games/${game.slug}` },
    openGraph: {
      title: `${game.name} — Play on ${site.name}`,
      description: game.tagline,
      images: [{ url: game.image, alt: game.imageAlt }],
    },
  };
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) notFound();

  const category = getCategory(game.category);
  const related = getGamesByCategory(game.category)
    .filter((g) => g.slug !== game.slug)
    .slice(0, 4);

  const gameJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: game.name,
    description: game.description,
    genre: category?.name,
    image: absoluteUrl(game.image),
    url: absoluteUrl(`/games/${game.slug}`),
    publisher: { "@type": "Organization", name: site.legalName },
    applicationCategory: "Game",
    operatingSystem: "iOS, Android",
  };

  return (
    <div className="section">
      <div className="container">
        <JsonLd data={gameJsonLd} />
        <Breadcrumbs
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Games", href: "/games" },
            ...(category
              ? [{ label: category.name, href: `/games#${category.slug}` }]
              : []),
            { label: game.name },
          ]}
        />

        <article className={styles.detail}>
          <div className={styles.media}>
            <Image
              src={game.image}
              alt={game.imageAlt}
              fill
              priority
              sizes="(max-width: 879px) 92vw, 440px"
              quality={75}
              className={styles.image}
            />
            {game.hot && <span className={styles.hot}>Hot</span>}
          </div>

          <div className={styles.info}>
            {category && <p className="eyebrow">{category.name}</p>}
            <h1>{game.name}</h1>
            <p className={styles.tagline}>{game.tagline}</p>
            <p className={styles.description}>{game.description}</p>

            {game.players && (
              <dl className={styles.meta}>
                <div>
                  <dt>Playing now</dt>
                  <dd>{game.players}</dd>
                </div>
                <div>
                  <dt>Category</dt>
                  <dd>{category?.name ?? "—"}</dd>
                </div>
              </dl>
            )}

            <div className={styles.actions}>
              <DownloadButton label={`Play ${game.name}`} />
            </div>
          </div>
        </article>

        {related.length > 0 && (
          <section
            className={styles.related}
            aria-labelledby="related-heading"
          >
            <div className="section-head">
              <h2 id="related-heading">More {category?.name}</h2>
            </div>
            <GameGrid games={related} />
          </section>
        )}
      </div>
    </div>
  );
}
