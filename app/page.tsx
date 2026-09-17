import type { Metadata } from "next";
import Link from "next/link";
import { site, absoluteUrl } from "@/lib/site";
import { categories } from "@/lib/data/categories";
import { getHotGames } from "@/lib/data/games";
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

// Revalidate the homepage once per day.
export const revalidate = 86400;

export default function HomePage() {
  const hotGames = getHotGames();

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "P999 Game Hot Games",
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

      {/* Hero */}
      <Hero />

      {/* Intro */}
      <section
        className="section"
        id="p999-game"
        aria-labelledby="p999-game-heading"
      >
        <div className={`container ${styles.about}`}>
          <h1 id="p999-game-heading">P999 Game</h1>

          <p>
            P999 Game is an online gaming platform that brings a wide range of
            casino-style, slot, card, fishing and quick-play games together in
            one app. For users in Pakistan searching for P999 Game, the main
            appeal is having different game categories available from the same
            platform instead of looking for each title separately.
          </p>

          <p>
            The P999 experience covers several types of games, including slots,
            mini-games, fishing titles and card-based games. The current
            catalogue on this website includes titles such as Aviator, Chicken
            Road 2.0, JILI Slots, PG Slots, JILI Cards, Crash, Mines, Fortune
            Gems, Happy Fishing, Super Ace and Fortune Tiger.
          </p>

          <p>
            This homepage gives you a starting point for the platform. You can
            browse the game categories, see selected games, learn about the VIP
            and referral sections, and use the dedicated pages when you need
            more specific information.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section
        className="section section--alt"
        aria-labelledby="categories-heading"
      >
        <div className="container">
          <div className="section-head">
            <h2 id="categories-heading">Which types of games are available?</h2>
          </div>

          <p>
            Different players look for different types of games. P999 organizes
            its current catalogue into categories so you can move directly to
            the type of game you want to explore.
          </p>

          <CategoryGrid categories={categories} />
        </div>
      </section>

      {/* Hot Games */}
      <section
        className="section"
        id="games"
        aria-labelledby="hot-games-heading"
      >
        <div className="container">
          <div className="section-head">
            <h2 id="hot-games-heading">
              <span className={styles.flame} aria-hidden="true">
                <FlameIcon size={24} />
              </span>
              Popular P999 Games
            </h2>

            <Link href="/games" className="section-head__link">
              View All →
            </Link>
          </div>

          <p>
            The P999 catalogue includes a mixture of fast-play games, slots,
            fishing titles and card games. The selection below highlights games
            from the current catalogue, while the dedicated Games page contains
            the wider collection.
          </p>

          <GameGrid games={hotGames} />
        </div>
      </section>

      {/* Game library */}
      <section
        className="section section--alt"
        id="game-library"
        aria-labelledby="game-library-heading"
      >
        <div className={`container ${styles.about}`}>
          <h2 id="game-library-heading">
            What can you find in the P999 game library?
          </h2>

          <p>
            The game library is built around several different styles of play.
            Rather than treating every title as the same type of game, the
            catalogue separates games by category. This makes it easier to
            browse the platform based on the type of game you prefer.
          </p>

          <div className={styles.aboutGrid}>
            <div>
              <h3>Slot Games</h3>
              <p>
                The slot selection includes JILI Slots, PG Slots, WG Slot,
                Crazy 777, Fortune, Garuda 500, Fortune Gems, Fortune Gems 2,
                Fortune Gems 3, Super Ace, Wild Bounty, Fortune Rabbit,
                Anubis Wrath, Treasures of Azpec, Fortune Guiden, Fortune
                Tiger and Mahjong Ways 2.
              </p>
            </div>

            <div>
              <h3>Mini Games</h3>
              <p>
                The mini-game collection includes Aviator, Chicken Road 2.0,
                Piggy Bank, 9 Wickets Sports, Crash, Mines, Chicken Road,
                Chicken Dash, Go Rush, Expand Bets, Mahjong Race, Blinko and
                Boom Red Packet.
              </p>
            </div>

            <div>
              <h3>Fishing and Cards</h3>
              <p>
                Happy Fishing is included in the fishing category, while the
                current card-related selection includes JILI Cards and Dragon
                vs Tiger.
              </p>
            </div>
          </div>

          <p>
            <Link href="/games" className="section-head__link">
              Browse the full P999 game collection →
            </Link>
          </p>
        </div>
      </section>

      {/* How the platform works */}
      <section
        className="section"
        id="how-it-works"
        aria-labelledby="how-it-works-heading"
      >
        <div className={`container ${styles.about}`}>
          <h2 id="how-it-works-heading">
            How does the P999 Game platform work?
          </h2>

          <p>
            Getting started with an online gaming platform usually involves
            three basic stages: accessing the application, creating or
            accessing an account, and choosing the games you want to play.
          </p>

          <div className={styles.aboutGrid}>
            <div>
              <h3>Choose your game</h3>
              <p>
                Start by browsing the available categories and selecting a
                title that interests you.
              </p>
            </div>

            <div>
              <h3>Create or access your account</h3>
              <p>
                The current registration information supplied for P999 includes
                phone number and OTP verification. Gmail registration is also
                available, with a password required for account access.
              </p>
            </div>

            <div>
              <h3>Use the account features</h3>
              <p>
                Once signed in, the platform provides access to the available
                game and account features shown in the current application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Account and Login */}
      <section
        className="section section--alt"
        id="login"
        aria-labelledby="login-heading"
      >
        <div className={`container ${styles.about}`}>
          <h2 id="login-heading">
            What should you know about P999 Game login?
          </h2>

          <p>
            P999 registration can be completed using a phone number and OTP
            according to the current information supplied for this website.
            Gmail registration is also available. A password is required for
            account access.
          </p>

          <p>
            If you already have an account, use the login option provided in the
            current application and enter the credentials associated with your
            account.
          </p>

          <p>
            Keep your login details private. Your OTP, password and withdrawal
            password should not be shared with another person who contacts you
            unexpectedly.
          </p>

          <p>
            For more account-related information, visit{" "}
            <Link href="/support">P999 Support</Link>.
          </p>
        </div>
      </section>

      {/* P999 App information */}
      <section
        className="section"
        id="app-information"
        aria-labelledby="app-information-heading"
      >
        <div className={`container ${styles.about}`}>
          <h2 id="app-information-heading">
            What are the current P999 Game app details?
          </h2>

          <p>
            The current app information supplied for this website identifies
            the application as P999 Game, version 1.1.22. The listed APK size
            is 10.6 MB and the stated Android requirement is Android 8 or
            above.
          </p>

          <div className={styles.aboutGrid}>
            <div>
              <h3>Version</h3>
              <p>1.1.22</p>
            </div>

            <div>
              <h3>APK Size</h3>
              <p>10.6 MB</p>
            </div>

            <div>
              <h3>Android Requirement</h3>
              <p>Android 8+</p>
            </div>
          </div>

          <p>
            The update information supplied for this version is September 18,
            2026, and the listed developer name is P999 Official.
          </p>

          <p>
            App specifications can change with future releases, so the
            information should be updated whenever a new version replaces the
            current one.
          </p>
        </div>
      </section>

      {/* Rewards and VIP */}
      <section
        className="section section--alt"
        id="rewards"
        aria-labelledby="rewards-heading"
      >
        <div className="container">
          <h2 id="rewards-heading" className="sr-only">
            P999 Rewards and VIP
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

      {/* Payments and withdrawals */}
      <section
        className="section"
        id="payments"
        aria-labelledby="payments-heading"
      >
        <div className={`container ${styles.about}`}>
          <h2 id="payments-heading">
            Which payment options are listed for P999?
          </h2>

          <p>
            The current payment information supplied for P999 includes
            Easypaisa, JazzCash and USDT through the TRC20 network.
          </p>

          <p>
            Payment availability and account options should always be checked
            inside the current application before starting a transaction.
          </p>

          <div className={styles.aboutGrid}>
            <div>
              <h3>Easypaisa</h3>
              <p>
                Easypaisa is listed among the payment methods supplied for the
                current P999 setup.
              </p>
            </div>

            <div>
              <h3>JazzCash</h3>
              <p>
                JazzCash is also listed as a current payment option.
              </p>
            </div>

            <div>
              <h3>USDT-TRC20</h3>
              <p>
                The supplied information includes USDT using the TRC20 network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Withdrawal */}
      <section
        className="section section--alt"
        id="withdrawal"
        aria-labelledby="withdrawal-heading"
      >
        <div className={`container ${styles.about}`}>
          <h2 id="withdrawal-heading">
            What should you know about P999 Game withdrawals?
          </h2>

          <p>
            The current withdrawal information supplied for P999 lists a
            minimum withdrawal amount of 50,000. A withdrawal password is
            required as part of the withdrawal process.
          </p>

          <p>
            The supplied information states that the withdrawal process takes
            a few minutes. Actual transaction timing should be checked against
            the current account interface and transaction status.
          </p>

          <p>
            Before submitting a withdrawal, review the amount, payment method
            and account information shown on the withdrawal screen.
          </p>

          <p>
            For detailed account assistance, visit{" "}
            <Link href="/support">P999 Support</Link>.
          </p>
        </div>
      </section>

      {/* Responsible use */}
      <section
        className="section"
        id="responsible-gaming"
        aria-labelledby="responsible-gaming-heading"
      >
        <div className={`container ${styles.about}`}>
          <h2 id="responsible-gaming-heading">
            What should you consider before playing?
          </h2>

          <p>
            P999 includes games that can involve money, so users should treat
            deposits and game spending as financial decisions rather than
            guaranteed income.
          </p>

          <p>
            Do not assume that a game will produce a particular result, and do
            not treat a predictor, hack, trick or modified APK as a reliable
            method for generating guaranteed returns.
          </p>

          <p>
            If you choose to use the platform, set your own spending limits and
            avoid using money you cannot afford to lose.
          </p>

          <p>
            <Link href="/support#responsible">
              Read the responsible gaming information →
            </Link>
          </p>
        </div>
      </section>

      {/* Safety */}
      <section
        className="section section--alt"
        id="safety"
        aria-labelledby="safety-heading"
      >
        <div className={`container ${styles.about}`}>
          <h2 id="safety-heading">
            What should you check before installing a P999 APK?
          </h2>

          <p>
            P999-related search results contain multiple websites and APK
            listings. Published specifications can differ between pages, so
            checking the current version information is useful before
            installing an application.
          </p>

          <div className={styles.aboutGrid}>
            <div>
              <h3>Check the version</h3>
              <p>
                The current version information supplied for this website is
                1.1.22.
              </p>
            </div>

            <div>
              <h3>Check device compatibility</h3>
              <p>
                The supplied Android requirement for the current version is
                Android 8 or above.
              </p>
            </div>

            <div>
              <h3>Be careful with modified APKs</h3>
              <p>
                Downloads advertised as hacks, unlimited-money versions,
                predictors or modified APKs should not be treated as the
                standard P999 application.
              </p>
            </div>
          </div>

          <p>
            Keep your passwords and OTPs private, and verify the information
            shown in your own account before making a payment or withdrawal.
          </p>
        </div>
      </section>

      {/* Why players explore P999 */}
      <section
        className="section"
        id="about"
        aria-labelledby="about-heading"
      >
        <div className={`container ${styles.about}`}>
          <h2 id="about-heading">Why do players explore P999 Game?</h2>

          <p>
            One reason users search for P999 Game is the range of titles
            available from the same platform. The current catalogue brings
            together slots, mini-games, fishing games and card-related titles.
          </p>

          <p>
            Another practical advantage of the site structure is that the
            information is separated by purpose. The Games page is for the
            catalogue, Rewards covers the reward and referral area, VIP has its
            own section, and Support is available for account-related
            questions.
          </p>

          <div className={styles.aboutGrid}>
            <div>
              <h3>A Broad Game Selection</h3>
              <p>
                Browse different categories rather than relying on a single
                game type.
              </p>
            </div>

            <div>
              <h3>Account Features</h3>
              <p>
                Registration, login and account-related features are available
                through the P999 platform.
              </p>
            </div>

            <div>
              <h3>Rewards and VIP</h3>
              <p>
                The platform includes dedicated areas for VIP and referral
                information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="section section--alt"
        id="faq"
        aria-labelledby="faq-heading"
      >
        <div className={`container ${styles.about}`}>
          <h2 id="faq-heading">P999 Game FAQs</h2>

          <div className={styles.aboutGrid}>
            <div>
              <h3>What is P999 Game?</h3>
              <p>
                P999 Game is an online gaming platform featuring different
                categories such as slots, mini-games, fishing and cards.
              </p>
            </div>

            <div>
              <h3>What is the current P999 version?</h3>
              <p>
                The current version information supplied for this website is
                1.1.22.
              </p>
            </div>

            <div>
              <h3>How large is the P999 APK?</h3>
              <p>
                The supplied APK size is 10.6 MB.
              </p>
            </div>

            <div>
              <h3>Which Android version is required?</h3>
              <p>
                The supplied requirement is Android 8 or above.
              </p>
            </div>

            <div>
              <h3>How can I create a P999 account?</h3>
              <p>
                The supplied registration options include phone number and OTP
                verification, as well as Gmail registration. A password is
                required.
              </p>
            </div>

            <div>
              <h3>Does P999 support Easypaisa?</h3>
              <p>
                Yes. Easypaisa is listed in the current payment information
                supplied for P999.
              </p>
            </div>

            <div>
              <h3>Does P999 support JazzCash?</h3>
              <p>
                Yes. JazzCash is also listed as a current payment option.
              </p>
            </div>

            <div>
              <h3>Can P999 use USDT?</h3>
              <p>
                The supplied payment information includes USDT-TRC20.
              </p>
            </div>

            <div>
              <h3>What is the minimum withdrawal?</h3>
              <p>
                The supplied minimum withdrawal amount is 50,000.
              </p>
            </div>

            <div>
              <h3>Is a withdrawal password required?</h3>
              <p>
                Yes. The supplied information states that a withdrawal
                password is required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal navigation */}
      <section className="section" aria-labelledby="explore-heading">
        <div className={`container ${styles.about}`}>
          <h2 id="explore-heading">Explore the P999 sections</h2>

          <p>
            Use the dedicated pages when you want information about one part
            of the platform instead of reading everything on the homepage.
          </p>

          <div className={styles.aboutGrid}>
            <div>
              <h3>
                <Link href="/games">P999 Games</Link>
              </h3>
              <p>
                Browse the available games and categories.
              </p>
            </div>

            <div>
              <h3>
                <Link href="/rewards">P999 Rewards</Link>
              </h3>
              <p>
                View the available reward and referral information.
              </p>
            </div>

            <div>
              <h3>
                <Link href="/vip">P999 VIP</Link>
              </h3>
              <p>
                Learn more about the VIP section.
              </p>
            </div>
          </div>

          <p>
            <Link href="/support">Need help? Visit P999 Support →</Link>
          </p>
        </div>
      </section>

      {/* Final homepage CTA */}
      <section
        className="section section--alt"
        id="next-step"
        aria-labelledby="next-step-heading"
      >
        <div className={`container ${styles.about}`}>
          <h2 id="next-step-heading">
            Start by exploring the P999 Game catalogue
          </h2>

          <p>
            If you are new to P999, start with the Games page and browse the
            available categories. When you need account, payment or withdrawal
            information, use the relevant section rather than relying on an
            old third-party guide.
          </p>

          <p>
            <Link href="/games" className="section-head__link">
              Explore P999 Games →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
