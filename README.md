# Wagner Brothers - Orlando Magic Fan Site

A minimal, responsive fan website dedicated to Franz and Moritz Wagner of the Orlando Magic.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Orlando Magic Branding**: Uses official team colors (blue #0077C0, black, white, silver)
- **Player Profiles**: Detailed cards for both Franz and Moritz Wagner with 2024-25 season stats
- **Modern UI**: Clean, professional design with smooth animations and interactions
- **Vanilla JavaScript**: No frameworks required - pure HTML, CSS, and JavaScript

## 🖼️ Adding Real Images

The site currently uses placeholder images. To use real photos:

### Orlando Magic Logo
1. Download the official logo from:
   - [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Orlando_Magic_Clear_Logo.svg) (SVG)
   - [Loodibee](https://loodibee.com/nba/orlando-magic/) (PNG)
   - [FreeBie Supply](https://freebiesupply.com/logos/orlando-magic-logo/)

2. Replace `assets/images/orlando-magic-logo.png` with your downloaded file
3. Use PNG or SVG format with transparent background

### Wagner Brothers Photo
1. Find a photo of Franz and Moritz Wagner together from:
   - Orlando Magic official website photo galleries
   - ESPN or Yahoo Sports articles about the Wagner brothers
   - Getty Images (check licensing)

2. Replace `assets/images/wagner-brothers.jpg` with your photo
3. Recommended size: 1200px × 675px (16:9 aspect ratio)

**See `assets/images/README.md` for detailed instructions and download links.**

## 2024-25 Season Stats

### Franz Wagner (#22)
- **Position**: Forward
- **PPG**: 24.2
- **RPG**: 5.7
- **APG**: 4.7

### Moritz Wagner (#21)
- **Position**: Forward-Center
- **PPG**: 12.9
- **RPG**: 4.9
- **APG**: 1.4

## File Structure

```
OrlandoMagic/
├── assets/
│   └── images/
│       ├── orlando-magic-logo.png    # Logo (replace with real logo)
│       ├── wagner-brothers.jpg       # Hero image (replace with real photo)
│       └── README.md                 # Image download instructions
├── index.html                        # Main HTML file
├── styles.css                        # CSS styles with Orlando Magic theme
├── script.js                         # Interactive features and animations
└── README.md                         # This file
```

## Deploying to GitHub Pages

### Option 1: Deploy from Branch

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Add Wagner Brothers fan site"
   git push -u origin claude/magic-wagner-fan-site-wKj2V
   ```

2. Go to your GitHub repository settings
3. Navigate to **Pages** in the left sidebar
4. Under **Source**, select your branch (`claude/magic-wagner-fan-site-wKj2V`)
5. Select the root folder `/`
6. Click **Save**
7. Your site will be published at: `https://<username>.github.io/<repository-name>/`

### Option 2: Deploy from Main Branch

1. Create a pull request to merge your changes into the main branch
2. After merging, go to repository **Settings** → **Pages**
3. Select the main branch as the source
4. Your site will be available at: `https://<username>.github.io/<repository-name>/`

### Option 3: Quick Deploy

If you want to deploy immediately from the current branch:

```bash
# Make sure all files are committed
git add .
git commit -m "Wagner Brothers fan site ready for deployment"
git push -u origin claude/magic-wagner-fan-site-wKj2V

# Enable GitHub Pages via GitHub CLI (if available)
gh repo edit --enable-pages
```

## Customization

### Updating Player Stats

Edit the stats in `index.html` within the `.player-stats` sections:

```html
<div class="stat">
    <span class="stat-value">24.2</span>
    <span class="stat-label">PPG</span>
</div>
```

### Changing Colors

All colors are defined as CSS variables in `styles.css`:

```css
:root {
    --magic-blue: #0077C0;
    --magic-black: #000000;
    --magic-white: #FFFFFF;
    --magic-silver: #C4CED4;
    --magic-dark-blue: #005A8D;
}
```

### Adding Player Photos

Replace the `.image-placeholder` div in `index.html` with an actual image:

```html
<div class="player-image">
    <img src="path/to/franz-wagner.jpg" alt="Franz Wagner">
</div>
```

Then update the CSS to style the image properly.

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This is an unofficial fan site. All trademarks and copyrights belong to the Orlando Magic and the NBA.

## Credits

- Stats sourced from NBA.com and ESPN
- Built with vanilla HTML, CSS, and JavaScript
- Orlando Magic colors and branding

---

**Go Magic! 🪄**
