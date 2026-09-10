# NovaPlay — Reusable Gaming Platform Template

A modern, dark-themed single-page gaming website built with **Next.js (App
Router) + TypeScript**. Designed as a white-label platform: all branding,
games, categories, VIP and referral content live in data files, so the same
codebase can be re-skinned for different gaming/app brands.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (fully static + ISR)
npm start
```

Set your production domain before deploying:

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com npm run build
```

(Used for canonical URLs, Open Graph, sitemap.xml and JSON-LD.)

## Rebranding checklist

| What                     | Where                                   |
| ------------------------ | --------------------------------------- |
| Brand name, tagline, URL | `lib/site.ts`                           |
| Colors, radii, fonts     | `app/globals.css` (design tokens)       |
| Logo                     | `components/Logo.tsx`                   |
| Games catalogue          | `lib/data/games.ts` + `public/images/games/` |
| Categories               | `lib/data/categories.ts`                |
| VIP widget content       | `lib/data/vip.ts`                       |
| Referral widget content  | `lib/data/referral.ts`                  |
| Nav & footer links       | `lib/data/nav.ts`                       |

### Adding a game

1. Drop artwork into `public/images/games/my-game.webp` (4:5 ratio, ~900×1100).
2. Append an entry to `lib/data/games.ts`.

That's it — the homepage, /games listing, detail page, sitemap and
structured data are all generated from that one array.

## Architecture

- **Server Components everywhere** — only two small client islands ship JS:
  `MobileMenu` (hamburger nav) and `CopyButton` (invite code).
- **Static rendering + ISR** — every route is pre-rendered at build time and
  revalidated daily (`revalidate = 86400`).
- **CSS Modules + design tokens** — no CSS framework, no runtime styling
  cost. All theme values are CSS custom properties in `globals.css`.
- **next/image** for every image (AVIF/WebP, responsive `sizes`, priority
  only for the LCP hero; game cards lazy-load).
- **next/font** for self-hosted Inter + Space Grotesk (no layout shift,
  `display: swap`).

## SEO

- One `<h1>` per page, logical `<h2>/<h3>` hierarchy, semantic landmarks
  (`header/nav/main/section/article/footer`).
- Unique titles + meta descriptions per route, canonical URLs, Open Graph
  and Twitter cards (`app/layout.tsx`, per-page `metadata`).
- `app/sitemap.ts` → `/sitemap.xml`, `app/robots.ts` → `/robots.txt`.
- JSON-LD: `Organization`, `WebSite`, `ItemList` (hot games),
  `BreadcrumbList` and `VideoGame` (game pages).
- Custom 404 with a real 404 status; unknown game slugs `notFound()`.
- All important copy is server-rendered HTML text — nothing hidden in
  images or behind JS.

## Routes

- `/` — homepage (hero, categories, hot games, VIP, referral, about)
- `/games` — full catalogue grouped by category (anchor targets per category)
- `/games/[slug]` — statically generated game detail pages with related games

## Performance notes

- Artwork is pre-compressed WebP (7–16 KB per tile) and served with
  immutable cache headers (`next.config.ts`).
- The only animations are CSS transitions; `prefers-reduced-motion` is
  respected. No third-party scripts or animation libraries.
