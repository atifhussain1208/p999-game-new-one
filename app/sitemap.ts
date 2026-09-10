import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { games } from "@/lib/data/games";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: site.url,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${site.url}/games`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...games.map((game) => ({
      url: `${site.url}/games/${game.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
