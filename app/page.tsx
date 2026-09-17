import type { Metadata } from "next";
import Link from "next/link";
import { site, absoluteUrl } from "@/lib/site";
import { categories } from "@/lib/data/categories";
import { getHotGames, games } from "@/lib/data/games";
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

// Fully static page — revalidate daily so catalogue edits roll out via ISR.
export const revalidate = 86400;

const downloadUrl = "https://999p999.com/?dl=51uk8f";

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

      <Hero />

      {/* Primary P999 Game introduction and download CTA */}
      <section
        className="section"
        id="p999-game"
        aria-labelledby="p999-game-heading"
      >
        <div className="container">
          <div className={styles.about}>
            <h1 id="p999-game-heading">P999 Game</h1>

            <p>
              P999 Game is an online gaming platform that brings different
              casino-style, arcade, card, slot and quick-play games together
              in one app. If you are looking for the P999 Game download, you
              can use the download button below to access the supplied P999
              download URL.
            </p>

            <p>
              The current P999 Game information provided for this website lists
              version 1.1.22, an APK size of 10.6 MB, and Android 8 or above.
              The listed developer name is P999 Official, with the latest
              update information provided as September 18, 2026.
            </p>

            <div className={styles.downloadCta}>
              <a
                href={downloadUrl}
                className="button button--primary"
                target="_blank"
                rel="nofollow sponsored"
              >
                Download P999 Game APK
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section
        className="section section--alt"
        aria-labelledby="categories-heading"
      >
        <div className="container">
          <div className="section-head">
            <h2 id="categories-heading">What can you play on P999?</h2>
          </div>

          <p>
            The P999 catalogue is divided into game categories so you can find
            a title without searching through one long list. The current
            categories include slots, fishing, mini-games and cards.
          </p>

          <CategoryGrid categories={categories} />
        </div>
      </section>

      {/* Hot games */}
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
              Hot Games on P999
            </h2>

            <Link href="/games" className="section-head__link">
              View All →
            </Link>
          </div>

          <p>
            Popular titles in the current P999 game catalogue include Aviator,
            Chicken Road 2.0, JILI Slots, PG Slots, JILI Cards, Crash, Mines,
            Fortune Gems, Happy Fishing, Super Ace, Fortune Tiger and Mahjong
            Ways 2.
          </p>

          <GameGrid games={hotGames} />
        </div>
      </section>

      {/* Download and installation guide */}
      <section
        className="section section--alt"
        id="download"
        aria-labelledby="download-heading"
      >
        <div className={`container ${styles.about}`}>
          <h2 id="download-heading">
            How do you download and install P999 Game?
          </h2>

          <p>
            If you are using an Android phone and want the P999 Game APK,
            start with the download button on this page. After the APK has
            downloaded, open the file from your Downloads folder and follow
            the Android installation prompts.
          </p>

          <div className={styles.aboutGrid}>
            <div>
              <h3>1. Download the APK</h3>
              <p>
                Select the P999 Game download button and wait for the APK file
                to finish downloading.
              </p>
            </div>

            <div>
              <h3>2. Open the downloaded file</h3>
              <p>
                Find the APK in your browser downloads or file manager and tap
                it to start installation.
              </p>
            </div>

            <div>
              <h3>3. Complete installation</h3>
              <p>
                If Android asks for permission to install from that source,
                review the permission and continue only when you trust the
                download source.
              </p>
            </div>
          </div>

          <div className={styles.downloadCta}>
            <a
              href={downloadUrl}
              className="button button--primary"
              target="_blank"
              rel="nofollow sponsored"
            >
              Download P999 Game
            </a>
          </div>
        </div>
      </section>

      {/* Login and registration */}
      <section
        className="section"
        id="login"
        aria-labelledby="login-heading"
      >
        <div className={`container ${styles.about}`}>
          <h2 id="login-heading">How does P999 Game login and registration work?</h2>

          <p>
            The current registration information supplied for P999 includes
            phone number and OTP verification. Gmail registration is also
            available, and a password is required for account access.
          </p>

          <p>
            For phone registration, enter your phone number, complete the OTP
            verification and finish the account setup. If you use Gmail,
            follow the registration option shown in the current application.
          </p>

          <p>
            Keep your password and OTP private. Do not send verification codes
            to another person claiming they need the code to activate your
            account or process a withdrawal.
          </p>

          <p>
            Already have an account? Use the login option inside the
            application and enter the credentials associated with your account.
          </p>
        </div>
      </section>

      {/* Game library explanation */}
      <section
        className="section section--alt"
        id="game-library"
        aria-labelledby="game-library-heading"
      >
        <div className={`container ${styles.about}`}>
          <h2 id="game-library-heading">
            Which P999 games are available?
          </h2>

          <p>
            The current P999 game catalogue used on this website contains
            titles across several categories. The full list is available on
            the dedicated Games page, while the homepage highlights selected
            titles.
          </p>

          <div className={styles.aboutGrid}>
            <div>
              <h3>Slots</h3>
              <p>
                JILI Slots, PG Slots, WG Slot, Crazy 777, Fortune, Garuda 500,
                Fortune Gems, Fortune Gems 2, Fortune Gems 3, Super Ace,
                Wild Bounty, Fortune Rabbit, Anubis Wrath, Treasures of Azpec,
                Fortune Guiden, Fortune Tiger and Mahjong Ways 2.
              </p>
            </div>

            <div>
              <h3>Mini Games</h3>
              <p>
                Aviator, Chicken Road 2.0, Piggy Bank, 9 Wickets Sports,
                Crash, Mines, Chicken Road, Chicken Dash, Go Rush, Expand Bets,
                Mahjong Race, Blinko and Boom Red Packet.
              </p>
            </div>

            <div>
              <h3>Fishing and Cards</h3>
              <p>
                Happy Fishing is included in the fishing category, while the
                current cards selection includes JILI Cards and Dragon vs
                Tiger.
              </p>
            </div>
          </div>

          <div className={styles.textCta}>
            <Link href="/games" className="section-head__link">
              Explore All P999 Games →
            </Link>
          </div>
        </div>
      </section>

      {/* Payment and withdrawal */}
      <section
        className="section"
        id="withdrawal"
        aria-labelledby="withdrawal-heading"
      >
        <div className={`container ${styles.about}`}>
          <h2 id="withdrawal-heading">
            What payment and withdrawal options does P999 support?
          </h2>

          <p>
            The current payment information supplied for P999 includes
            Easypaisa, JazzCash and USDT through the TRC20 network.
          </p>

          <p>
            The supplied minimum withdrawal amount is 50,000. The provided
            information states that the withdrawal process takes a few
            minutes, while the exact transaction time should be checked
            against the current account interface.
          </p>

          <p>
            A withdrawal password is required for the current setup. Keep this
            password separate from your normal login information and never
            share it with another person.
          </p>

          <div className={styles.aboutGrid}>
            <div>
              <h3>Easypaisa</h3>
              <p>
                Easypaisa is listed among the payment options supplied for the
                current P999 setup.
              </p>
            </div>

            <div>
              <h3>JazzCash</h3>
              <p>
                JazzCash is also listed as a payment option for the current
                setup.
              </p>
            </div>

            <div>
              <h3>USDT-TRC20</h3>
              <p>
                The supplied information also lists USDT using the TRC20
                network.
              </p>
            </div>
          </div>

          <p className={styles.textCta}>
            Need account or withdrawal help?{" "}
            <Link href="/support">Visit P999 Support →</Link>
          </p>
        </div>
      </section>

      {/* VIP + Referral */}
      <section
        className="section"
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

      {/* Safety and download-source guidance */}
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
            Search results for P999 include multiple websites and APK listings,
            and published specifications are not always consistent. That makes
            checking the current version and download source useful before
            installing an APK.
          </p>

          <div className={styles.aboutGrid}>
            <div>
              <h3>Check the version</h3>
              <p>
                The current information supplied for this website lists version
                1.1.22.
              </p>
            </div>

            <div>
              <h3>Check your Android version</h3>
              <p>
                The supplied requirement for the current version is Android 8
                or above.
              </p>
            </div>

            <div>
              <h3>Avoid modified APK claims</h3>
              <p>
                Be careful with downloads advertised as hacks, unlimited-money
                versions, predictors or modified APKs. These are not the same
                as the standard application.
              </p>
            </div>
          </div>

          <p>
            Never share your OTP, login password or withdrawal password with
            someone who contacts you unexpectedly.
          </p>
        </div>
      </section>

      {/* Why P999 */}
      <section
        className="section"
        id="about"
        aria-labelledby="about-heading"
      >
        <div className={`container ${styles.about}`}>
          <h2 id="about-heading">Why use the P999 Game platform?</h2>

          <p>
            The main appeal of P999 is the variety of games available from one
            application. The current catalogue covers slots, fishing,
            mini-games and cards, giving users different types of games to
            browse.
          </p>

          <p>
            The platform also brings account features, rewards, VIP information
            and payment functionality into the same environment. Instead of
            searching separate pages for every basic question, the main P999
            sections on this website connect those topics together.
          </p>

          <div className={styles.aboutGrid}>
            <div>
              <h3>{games.length}+ Games Listed</h3>
              <p>
                Browse the current P999 catalogue by category and open the
                dedicated Games page for the complete selection.
              </p>
            </div>

            <div>
              <h3>VIP and Rewards</h3>
              <p>
                The homepage includes access to the current VIP and referral
                sections, with dedicated pages available for more information.
              </p>
            </div>

            <div>
              <h3>Support Information</h3>
              <p>
                Account, login and other assistance can be directed to the
                P999 Support section.
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

          <div className={styles.faqList}>
            <div>
              <h3>What is the current P999 Game version?</h3>
              <p>
                The current version information supplied for this website is
                1.1.22.
              </p>
            </div>

            <div>
              <h3>What is the P999 APK size?</h3>
              <p>
                The supplied APK size is 10.6 MB.
              </p>
            </div>

            <div>
              <h3>Which Android versions are supported?</h3>
              <p>
                The supplied requirement for the current version is Android 8
                or above.
              </p>
            </div>

            <div>
              <h3>How can I register for P999?</h3>
              <p>
                The supplied registration options include phone number and OTP
                verification, as well as Gmail registration. A password is
                required.
              </p>
            </div>

            <div>
              <h3>Does P999 support Easypaisa and JazzCash?</h3>
              <p>
                Yes. Both Easypaisa and JazzCash are listed in the current
                payment information supplied for P999.
              </p>
            </div>

            <div>
              <h3>Can P999 withdrawals use USDT?</h3>
              <p>
                The supplied payment information includes USDT-TRC20.
              </p>
            </div>

            <div>
              <h3>What is the minimum P999 withdrawal?</h3>
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

            <div>
              <h3>Can I download a P999 MOD APK?</h3>
              <p>
                Modified APKs are different from the standard application.
                Avoid downloads making claims about hacks, unlimited money or
                guaranteed game predictions.
              </p>
            </div>

            <div>
              <h3>Where can I find the full P999 game list?</h3>
              <p>
                Visit the dedicated <Link href="/games">P999 Games page</Link>{" "}
                to browse the current catalogue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="section"
        id="download-final"
        aria-labelledby="download-final-heading"
      >
        <div className={`container ${styles.about}`}>
          <h2 id="download-final-heading">
            Ready to download P999 Game?
          </h2>

          <p>
            If your Android device meets the supplied requirements and you want
            to install the current P999 Game APK, use the download button below.
            After installation, create or access your account and review the
            payment and withdrawal information shown inside the application.
          </p>

          <div className={styles.downloadCta}>
            <a
              href={downloadUrl}
              className="button button--primary"
              target="_blank"
              rel="nofollow sponsored"
            >
              Download P999 Game APK
            </a>
          </div>

          <p className={styles.textCta}>
            Looking for something specific?{" "}
            <Link href="/games">Browse Games</Link>
            {" · "}
            <Link href="/rewards">View Rewards</Link>
            {" · "}
            <Link href="/vip">View VIP</Link>
            {" · "}
            <Link href="/support">Get Support</Link>
          </p>
        </div>
      </section>
    </>
  );
}
