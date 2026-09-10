export interface NavLink {
  label: string;
  href: string;
}

/** Primary navigation — each item is its own page, not a homepage anchor. */
export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Games", href: "/games" },
  { label: "Rewards", href: "/rewards" },
  { label: "VIP", href: "/vip" },
  { label: "Support", href: "/support" },
];

export const footerLinks = {
  quick: [
    { label: "About Us", href: "/#about" },
    { label: "All Games", href: "/games" },
    { label: "Rewards", href: "/rewards" },
    { label: "VIP Program", href: "/vip" },
    { label: "Fair Play", href: "/support#fair-play" },
    { label: "Affiliate Program", href: "/rewards#referral" },
    { label: "Responsible Gaming", href: "/support#responsible" },
  ],
  support: [
    { label: "Live Chat", href: "/support#live-chat" },
    { label: "FAQ", href: "/support#faq" },
    { label: "Help Centre", href: "/support" },
    { label: "Contact Email", href: "mailto:support@example.com" },
  ],
} as const;
