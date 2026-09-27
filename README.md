# Orlando Magic 2026-27 Season Hub

A fan site for the Orlando Magic's 2026-27 season: roster, schedule, news, and
a home page built around the team's core four players.

## Pages

- **`index.html`** &mdash; Home. Season-preview hero, "The Big 4" (Paolo Banchero,
  Franz Wagner, Jalen Suggs, Desmond Bane), a season-outlook section, and a
  preview of the latest news.
- **`roster.html`** &mdash; Full 2026-27 roster grouped by position, head coach
  Sean Sweeney, and an offseason transactions recap.
- **`schedule.html`** &mdash; Season opener and the confirmed nationally
  televised marquee games.
- **`news.html`** &mdash; A reverse-chronological news feed of offseason and
  preseason stories.

## The Big 4

| Player | # | Pos | 2025-26 PPG / RPG / APG |
|---|---|---|---|
| Paolo Banchero | 5 | F | 22.2 / 8.3 / 5.2 |
| Franz Wagner | 22 | F | 20.6 / 5.2 / 3.3 |
| Jalen Suggs | 4 | G | 13.8 / 3.9 / 5.5 |
| Desmond Bane | 3 | G | 20.1 / 4.1 / 4.1 |

Bane joined Orlando via a June 2025 trade with Memphis. Franz Wagner's season
was cut short by a high-ankle sprain (34 games played).

## Tech

- Plain HTML, CSS, and vanilla JavaScript &mdash; no build step, no frameworks.
- Shared `styles.css` and `script.js` across all four pages.
- `script.js` highlights the active nav link per page and fades in cards on
  scroll; it no longer does single-page scroll-spying since the site is now
  multi-page.

## File Structure

```
OrlandoMagic/
├── assets/
│   └── images/
│       ├── orlando-magic-logo.svg / .png
│       ├── franz-wagner.avif / .jpg      # used on the home page
│       ├── moritz-wagner.*, wagner-brothers.*  # unused leftovers, safe to delete
│       └── README.md                     # image sourcing notes
├── index.html
├── roster.html
├── schedule.html
├── news.html
├── styles.css
├── script.js
└── README.md
```

## Updating Content

- **Stats / bios:** edit the Big 4 cards in `index.html`.
- **Roster:** edit the position groups in `roster.html`. Jersey numbers marked
  `TBD` weren't confirmed as of this writing.
- **Schedule:** `schedule.html` lists the season opener and the confirmed
  national-TV slate only (not the full 82-game schedule); update as more games
  are announced.
- **News:** add a new `<article class="news-card">` to the top of the grid in
  `news.html` (and optionally to the 3-item preview on `index.html`).
- **Colors:** defined as CSS variables at the top of `styles.css`:
  ```css
  :root {
      --magic-blue: #0077C0;
      --magic-black: #000000;
      --magic-white: #FFFFFF;
      --magic-silver: #C4CED4;
      --magic-dark-blue: #005A8D;
  }
  ```

## Deploying to GitHub Pages

1. Push this branch to GitHub.
2. In the repository, go to **Settings → Pages**.
3. Under **Source**, select this branch and the root folder `/`.
4. Save. The site will publish at `https://<username>.github.io/<repository-name>/`.

## License

This is an unofficial fan site. All trademarks and copyrights belong to the
Orlando Magic and the NBA.

---

**Go Magic!**
