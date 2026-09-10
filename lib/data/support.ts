import type { FaqItem, SupportChannel } from "@/lib/types";

/** Contact routes shown on /support. */
export const supportChannels: SupportChannel[] = [
  {
    slug: "live-chat",
    name: "Live Chat",
    detail: "The fastest route — typical first reply in under two minutes.",
    availability: "24 / 7",
    href: "#live-chat",
    icon: "chat",
  },
  {
    slug: "email",
    name: "Email Support",
    detail: "Best for account, payment or verification questions.",
    availability: "Replies within 12 hours",
    href: "mailto:support@example.com",
    icon: "mail",
  },
  {
    slug: "community",
    name: "Community Channel",
    detail: "Announcements, event news and help from other players.",
    availability: "Always open",
    href: "#community",
    icon: "community",
  },
];

/** FAQ entries. These also feed the FAQPage structured data. */
export const faqs: FaqItem[] = [
  {
    question: "How do I download the app?",
    answer:
      "Tap any download button on the site and follow the on-screen prompts. The app is available for both iOS and Android, and installs in under a minute on most devices.",
  },
  {
    question: "How long do withdrawals take?",
    answer:
      "Most withdrawals are processed within 10 minutes. Larger amounts may need a short verification check, which usually completes the same day. Your daily limit depends on your VIP level.",
  },
  {
    question: "Is there a fee for deposits or withdrawals?",
    answer:
      "No. Deposits and withdrawals are free. Your payment provider may apply its own charges, so check with them if you are unsure.",
  },
  {
    question: "How is my VIP level calculated?",
    answer:
      "Your level is based on total deposits and total amount wagered. Progress carries over month to month and never resets, so every session moves you closer to the next tier.",
  },
  {
    question: "How does the referral programme work?",
    answer:
      "Share your invite code with friends. Once they sign up and start playing you earn up to 3% commission on their activity, paid out daily with no upper limit.",
  },
  {
    question: "Are the games fair?",
    answer:
      "Every game uses a certified random number generator, and outcomes are independently audited. Return-to-player rates are published on each game's page.",
  },
  {
    question: "I forgot my password — what should I do?",
    answer:
      "Use the password reset link on the sign-in screen. A reset code is sent to the phone number or email registered to your account. Contact live chat if you no longer have access to either.",
  },
  {
    question: "How do I set deposit or play limits?",
    answer:
      "Open Account settings and choose Responsible Gaming. You can set daily, weekly or monthly deposit limits, session reminders, or take a self-exclusion break at any time.",
  },
];
