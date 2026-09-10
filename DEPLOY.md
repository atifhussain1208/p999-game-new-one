# Deploying to Vercel

This repo is ready to push to GitHub and import into Vercel. No build
configuration is required — Vercel auto-detects Next.js.

---

## 1. Put the code on GitHub

The zip already contains an initialised git repository with one commit, so
you only need to point it at your own GitHub repo.

**Create an empty repo** at <https://github.com/new> — no README, no
`.gitignore`, no licence (those already exist here).

Then, from inside the unzipped folder:

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git branch -M main
git push -u origin main
```

If you'd rather start fresh (or the `.git` folder didn't survive the
download), run this instead:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git branch -M main
git push -u origin main
```

> **Don't commit `node_modules` or `.next`.** They're already excluded by
> `.gitignore` — just don't force-add them. Vercel installs and builds
> from source.

---

## 2. Import into Vercel

1. Go to <https://vercel.com/new> and sign in with GitHub.
2. Select your repository → **Import**.
3. Leave every build setting at its default:

   | Setting          | Value                 |
   | ---------------- | --------------------- |
   | Framework Preset | Next.js (auto-detected) |
   | Build Command    | `next build` (default) |
   | Output Directory | (leave empty)         |
   | Install Command  | `npm install` (default) |
   | Node.js Version  | 20.x or newer         |

4. Add one **Environment Variable** before deploying:

   | Key                    | Value                        |
   | ---------------------- | ---------------------------- |
   | `NEXT_PUBLIC_SITE_URL` | `https://your-domain.com`    |

   Apply it to Production, Preview and Development. No trailing slash.

   *Don't have a domain yet?* Use the Vercel URL Vercel gives you
   (e.g. `https://your-repo.vercel.app`) and update it later — just
   redeploy after changing it.

5. Click **Deploy**. First build takes roughly 1–2 minutes.

---

## 3. Connect a custom domain

1. Vercel dashboard → your project → **Settings** → **Domains** → add your
   domain.
2. At your registrar, create the DNS records Vercel shows you — usually:
   - `A` record for the apex (`example.com`) → `76.76.21.21`
   - `CNAME` for `www` → `cname.vercel-dns.com`

   (Use the exact values Vercel displays; they can change.)
3. HTTPS is issued automatically once DNS propagates.
4. **Update `NEXT_PUBLIC_SITE_URL`** to the real domain and redeploy, so
   canonical tags, Open Graph URLs and `sitemap.xml` all point at it.

---

## 4. After going live

- Submit `https://your-domain.com/sitemap.xml` in
  [Google Search Console](https://search.google.com/search-console).
- Check `https://your-domain.com/robots.txt` resolves.
- Validate structured data with the
  [Rich Results Test](https://search.google.com/test/rich-results).
- Run Lighthouse on the deployed URL (not localhost) for real Core Web
  Vitals numbers.

---

## Ongoing workflow

Every push to `main` triggers a production deploy. Every pull request gets
its own preview URL.

To add a game:

1. Drop artwork into `public/images/games/my-game.webp` (4:5 ratio, ~900×1100).
2. Append an entry to `lib/data/games.ts`.
3. Commit and push — the homepage, `/games`, the detail page, `sitemap.xml`
   and structured data all update themselves.

Pages revalidate daily (`revalidate = 86400`), so content edits also roll
out without a rebuild if you're fetching from a CMS later.

---

## Local development

```bash
npm install
cp .env.example .env.local   # then edit the URL
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build locally
```
