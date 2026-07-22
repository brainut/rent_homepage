# Handoff — Hakgye Studio homepage

Status as of 2026-07-22. Static site. First commit is pushed to `main`
at `git@github-brainut1:brainut/rent_homepage.git`; the changes below
(new photos, new source data, dropped contact button) are made
locally and **not committed/pushed yet** — confirm with the user
before pushing.

## What this is

A bilingual (EN default / KO toggle) one-page site for a short-term
rental studio near Hakgye Station, Seoul, aimed at foreign visitors.

Copy is sourced from two listings:
- https://web.33m2.co.kr/guest/room/109606 (primary — kept as the
  source of truth wherever the two disagree, e.g. checkout time)
- https://stay.enko.kr/ko/house/152fac7e-cb90-407a-b8b1-46f29b684514
  (used only to add facts 33m2 didn't have: parking, elevator,
  building CCTV/fire alarm, cancellation policy, explicit 2-guest/
  queen-bed capacity, all-genders-welcome note)

All outbound "check dates / book" links point to the enko listing
now, not 33m2 — per explicit instruction, 33m2 is no longer linked
anywhere on the page.

Built with the `frontend-design` and `ui-ux-pro-max` Claude Code
skills (installed at `~/.claude/skills/`). Design system: warm neutral
palette sampled from the actual apartment photos (linen walls, oat
bedding, coral from the styled poppies), Fraunces (display serif) +
Pretendard (EN/KO body), and the apartment's real wooden lattice
sliding-door as the recurring signature motif (logo mark, section
dividers, gallery hover frame).

## Stack

Plain HTML/CSS/JS, no build step, no framework.

```
index.html
assets/css/style.css
assets/js/script.js       — i18n dict + toggle, header scroll state, gallery lightbox
assets/images/            — 19 photos, resized/compressed with macOS `sips`
                             (originals in /Users/ava/삼삼엠투/하계역 한신/uploaded image —
                             that folder had 24 files but 6 were exact byte-for-byte
                             duplicates, so only the 19 unique ones were used)
```

Run locally: `python3 -m http.server 8000` from the project root, then
open `localhost:8000`.

Gallery is grouped into three subsections (Living & Sleeping / Kitchen
/ Bathroom & Details) rather than one flat grid — see `#galleryGrid`
in `index.html`. The lightbox JS queries `.gallery-item` globally, so
prev/next click through all three groups in order regardless of which
sub-grid they're in.

## Open items before this can go live

1. **Property name is a placeholder.** "Hakgye Studio" was invented
   for this build — no real brand name was given. Search/replace
   `Hakgye Studio` / `하계 스튜디오` in `index.html` and
   `assets/js/script.js` (dict) once there's a real one.
2. **No direct-contact button anymore.** The WhatsApp/KakaoTalk
   "Message the host" buttons were removed on request (they only ever
   showed a placeholder toast — never had a real number/link). The
   only path to the guest now is the "Check dates" / "Check dates &
   book" buttons, which all go to the enko listing. If a direct
   contact channel becomes available later, it'd slot back in next to
   those CTAs.
3. **No hosting/domain yet.** Repo is on GitHub only. It's a static
   site, so Netlify/Vercel/GitHub Pages would all work with zero
   config — just point at this repo.
4. **Pricing table is still the 33m2 weekly-rate snapshot** (as
   scraped 2026-07-21: ₩330,000/week, 10% off at 4+ weeks, etc.). Note
   this does *not* reconcile with enko's flat ₩2,255,000/month figure
   — that number was deliberately left out of the rates table rather
   than shown side-by-side with a contradictory total, since the two
   platforms are quoting different things and merging them without
   context would mislead a guest doing the math. Worth asking the host
   directly which number is authoritative before this goes live.
5. **No analytics/SEO tags beyond the basic `<meta description>`** —
   worth adding an Open Graph image + og:title/description if this
   goes live, since it'll likely be shared as a link (KakaoTalk,
   WhatsApp, etc. all render link previews from OG tags).

## Git / access notes

- Pushed via a repo-local git identity (`brainut1@gmail.com`), not the
  machine's global git config (which is a different, work account).
- SSH access to this repo from this machine goes through a dedicated
  host alias `github-brainut1` in `~/.ssh/config`, using
  `~/.ssh/id_ed25519_brainut1` (registered on the brainut1 GitHub
  account). The remote is set to
  `git@github-brainut1:brainut/rent_homepage.git` rather than the
  plain `github.com` host, because this machine already had a
  different GitHub SSH identity configured for `github.com` and we
  didn't want to disturb it.
- The very first commit went through with `git push -u origin main`.
  Everything since (this file, the enko-sourced content, the new
  photo set) is uncommitted local work — check `git status` and `git
  diff` before pushing again, since it hasn't been re-confirmed with
  the user yet.

## Testing notes

Verified with headless Chrome (`puppeteer-core`, driven from a
scratch Node install under `/private/tmp/.../scratchpad` — not part
of this repo) at desktop and mobile viewports: language toggle,
gallery lightbox, no console errors, WCAG AA color contrast (4.5:1)
on all text, 44px touch targets, and no layout shift from lazy-loaded
images. No automated test suite is checked into the repo — re-verify
by eye (or re-run a similar Puppeteer script) after any visual
changes.
