/**
 * Central site configuration.
 * Swap these values to rebrand the whole platform for a different gaming/app brand.
 */
export const site = {
  name: "NovaPlay",
  legalName: "NovaPlay Interactive",
  tagline: "Next-Level Mobile Gaming",
  description:
    "NovaPlay is a premium mobile gaming platform featuring slots, fishing, mini games and card games, with VIP rewards and a referral program.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://novaplay.example.com",
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
