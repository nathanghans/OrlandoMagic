# Images Directory

Images for the Orlando Magic 2026-27 season fan hub.

## Currently Used

- `orlando-magic-logo.svg` / `.png` &mdash; site logo, shown in the header on every page.
- `franz-wagner.avif` / `.jpg` &mdash; Franz Wagner's Big 4 card photo on the home page.

`moritz-wagner.*` and `wagner-brothers.*` are leftover from the site's previous
Wagner Brothers theme and are no longer referenced by any page. Delete them if
you don't plan to reuse them.

## Adding Photos for Banchero, Suggs, and Bane

Their Big 4 cards currently use a jersey-number-on-gradient look with no
photo, the same fallback the site already uses when a headshot is missing.
To add real photos:

1. Save a headshot as `<player-name>.avif` (best), `.webp`, or `.jpg` in this
   folder (e.g. `paolo-banchero.jpg`).
2. In `index.html`, copy the `<picture>` block from the Franz Wagner card into
   the matching player's `.player-image` div, updating the filenames and alt
   text.

**Image specs:** portrait orientation (4:5 or 3:4), 800px+ width, headshot or
upper-body crop.

**Sources:** NBA.com player pages, the team's official roster page, or ESPN
player pages.

## Copyright Notice

Ensure you have the right to use any images you download. For personal/educational
fan sites, fair use may apply, but always credit the source. For commercial use,
obtain proper licensing.

**The Orlando Magic logo and player likenesses are trademarks/property of the
Orlando Magic and the NBA.**
