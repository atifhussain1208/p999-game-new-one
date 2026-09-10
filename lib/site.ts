/**
 * Central site configuration.
 * Swap these values to rebrand the whole platform for a different gaming/app brand.
 */

/**
 * Last-resort base URL, used only when no environment variable provides one
 * (e.g. a bare `npm run dev` with no .env.local). It matches the default
 * Next.js uses for `metadataBase`, so local builds behave predictably.
 *
 * On Vercel this is never reached: `VERCEL_PROJECT_PRODUCTION_URL` is
 * injected automatically, so canonical URLs stay correct even if you forget
 * to set NEXT_PUBLIC_SITE_URL.
 */
const DEFAULT_SITE_URL = "http://localhost:3000";

/**
 * Turn a loosely-formatted env value into a valid absolute origin, or null.
 *
 * Handles the ways this variable is commonly mis-set:
 *   ""  /  "   "                  → null (empty or whitespace only)
 *   '"https://x.com"'             → quotes stripped
 *   "example.com"                 → protocol added
 *   "https://example.com/"        → trailing slash removed
 *   "not a url"                   → null (fails URL parsing)
 */
function normalizeBaseUrl(value: string | undefined | null): string | null {
  if (typeof value !== "string") return null;

  const cleaned = value.trim().replace(/^['"]|['"]$/g, "").trim();
  if (!cleaned) return null;

  const withProtocol = /^https?:\/\//i.test(cleaned)
    ? cleaned
    : `https://${cleaned}`;

  try {
    const parsed = new URL(withProtocol);
    if (!parsed.hostname) return null;
    // Keep any sub-path (for sites hosted under /app) but drop trailing slashes.
    const path = parsed.pathname.replace(/\/+$/, "");
    return `${parsed.origin}${path}`;
  } catch {
    return null;
  }
}

/**
 * Resolve the canonical base URL from the environment, most specific first.
 * The first candidate that parses as a valid absolute URL wins.
 */
function resolveSiteUrl(): string {
  const candidates = [
    // Explicitly configured — always takes priority.
    process.env.NEXT_PUBLIC_SITE_URL,
    // Vercel: stable production domain, injected automatically.
    process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    // Vercel: per-deployment URL (preview builds).
    process.env.NEXT_PUBLIC_VERCEL_URL,
    process.env.VERCEL_URL,
  ];

  for (const candidate of candidates) {
    const normalized = normalizeBaseUrl(candidate);
    if (normalized) return normalized;
  }

  return DEFAULT_SITE_URL;
}

/** Guaranteed-valid absolute base URL. Safe to pass to `new URL()`. */
export const SITE_URL = resolveSiteUrl();

/** Build an absolute URL for a path, for canonicals, OG tags and JSON-LD. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, `${SITE_URL}/`).href;
}

export const site = {
  name: "NovaPlay",
  legalName: "NovaPlay Interactive",
  tagline: "Next-Level Mobile Gaming",
  description:
    "NovaPlay is a premium mobile gaming platform featuring slots, fishing, mini games and card games, with VIP rewards and a referral program.",
  url: SITE_URL,
  locale: "en_US",
  themeColor: "#0a120d",
  social: {
    twitter: "https://twitter.com/",
    telegram: "https://t.me/",
    facebook: "https://facebook.com/",
  },
  download: {
    ios: "#download-ios",
    android: "#download-android",
    primary: "#download",
  },
} as const;

export type SiteConfig = typeof site;
