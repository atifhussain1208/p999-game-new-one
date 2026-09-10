import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { supportChannels, faqs } from "@/lib/data/support";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { ChatIcon, MailIcon, UsersIcon, ShieldIcon } from "@/components/icons";
import styles from "./page.module.css";

const iconMap = {
  chat: ChatIcon,
  mail: MailIcon,
  community: UsersIcon,
} as const;

export const metadata: Metadata = {
  title: "Support & Help Centre",
  description: `Get help with ${site.name}: 24/7 live chat, email support, and answers to common questions about downloads, withdrawals, VIP levels and account security.`,
  alternates: { canonical: "/support" },
};

export const revalidate = 86400;

export default function SupportPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <div className="section">
      <div className="container">
        <JsonLd data={faqJsonLd} />

        <PageHeader
          eyebrow="Support"
          title="Support & Help Centre"
          lede="Live chat is staffed around the clock, and most answers are already below. Whatever you need, we aim to have you back playing in minutes."
          crumbs={[{ label: "Home", href: "/" }, { label: "Support" }]}
        />

        {/* Channels */}
        <section aria-labelledby="channels-heading">
          <div className="section-head">
            <h2 id="channels-heading">Contact Us</h2>
          </div>
          <ul className={styles.channels}>
            {supportChannels.map((channel) => {
              const Icon = iconMap[channel.icon];
              return (
                <li key={channel.slug} id={channel.slug}>
                  <a className={styles.channel} href={channel.href}>
                    <span className={styles.icon}>
                      <Icon size={22} />
                    </span>
                    <h3 className={styles.channelName}>{channel.name}</h3>
                    <p className={styles.channelText}>{channel.detail}</p>
                    <p className={styles.availability}>{channel.availability}</p>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>

        {/* FAQ */}
        <section className={styles.block} id="faq" aria-labelledby="faq-heading">
          <div className="section-head">
            <h2 id="faq-heading">Frequently Asked Questions</h2>
          </div>
          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <details key={faq.question} className={styles.faq}>
                <summary className={styles.question}>
                  <h3>{faq.question}</h3>
                  <span className={styles.chevron} aria-hidden="true" />
                </summary>
                <p className={styles.answer}>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Fair play */}
        <section
          className={styles.block}
          id="fair-play"
          aria-labelledby="fair-play-heading"
        >
          <div className="section-head">
            <h2 id="fair-play-heading">Fair Play</h2>
          </div>
          <div className={styles.panel}>
            <span className={styles.panelIcon}>
              <ShieldIcon size={22} />
            </span>
            <div>
              <p className={styles.panelText}>
                Every game runs on a certified random number generator, and
                results are audited independently. Return-to-player rates are
                published on each game page, and no outcome is ever adjusted
                based on your balance, your history or your VIP level.
              </p>
              <Link href="/games" className={styles.inlineLink}>
                Browse all games →
              </Link>
            </div>
          </div>
        </section>

        {/* Responsible gaming */}
        <section
          className={styles.block}
          id="responsible"
          aria-labelledby="responsible-heading"
        >
          <div className="section-head">
            <h2 id="responsible-heading">Responsible Gaming</h2>
          </div>
          <div className={styles.panel}>
            <div>
              <p className={styles.panelText}>
                Play should stay enjoyable. In Account settings you can set
                daily, weekly or monthly deposit limits, turn on session
                reminders, or take a break with self-exclusion for a period you
                choose. These controls take effect immediately and cannot be
                loosened until the period you set has passed.
              </p>
              <p className={styles.panelText}>
                If gambling stops feeling like entertainment, please reach out
                to a support organisation in your country, or contact our team
                and we can help you apply limits to your account.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
