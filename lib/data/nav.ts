export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Games", href: "/games" },
  { label: "Rewards", href: "/#rewards" },
  { label: "VIP", href: "/#vip" },
  { label: "Support", href: "/#support" },
];

export const footerLinks = {
  quick: [
    { label: "About Us", href: "/#about" },
    { label: "All Games", href: "/games" },
    { label: "Fair Play", href: "/#fair-play" },
    { label: "Affiliate Program", href: "/#rewards" },
    { label: "Responsible Gaming", href: "/#responsible" },
  ],
  support: [
    { label: "Live Chat", href: "/#support" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact Email", href: "mailto:support@example.com" },
  ],
} as const;
