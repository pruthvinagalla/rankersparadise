# Rankers' Paradise Website

A professional single-page website for Rankers' Paradise - Quality Tuitions for Class 5-10 CBSE & ICSE students.

## Quick Start

1. Open `index.html` in your browser to view the website
2. Customize settings in `js/config.js`
3. Deploy to GitHub Pages or any web hosting

## Project Structure

```
rankers-paradise/
├── index.html              # Main HTML file
├── robots.txt              # SEO: Search engine instructions
├── sitemap.xml             # SEO: Sitemap for crawlers
├── css/
│   └── styles.css          # All styles
├── js/
│   ├── config.js           # Configuration settings
│   └── main.js             # JavaScript functionality
├── assets/
│   ├── logo/
│   │   ├── logo.svg        # Main logo
│   │   ├── favicon.svg     # Favicon (SVG)
│   │   ├── favicon-32x32.png
│   │   ├── favicon-16x16.png
│   │   └── apple-touch-icon.png
│   └── images/
│       └── og-image.jpg    # Social sharing image
├── google-apps-script.js   # Google Sheets integration
└── README.md               # This file
```

## Configuration Guide

All customizable settings are in `js/config.js`:

### Changing Colors

```javascript
colors: {
  primary: "#1e5f74",      // Main brand color
  secondary: "#28a745",    // Accent color
  accent: "#ffc107",       // Highlight color
  dark: "#1a1a2e",         // Dark backgrounds
  light: "#f8f9fa",        // Light backgrounds
  text: "#333333",         // Main text
  textLight: "#ffffff"     // Light text
}
```

### Updating Contact Information

```javascript
contact: {
  phone1: "9000101939",
  phone2: "6304749014",
  email: "contact@rankersparadise.com",
  founderName: "P. Chaithanya Reddy",
  founderTitle: "Founder and CEO"
}
```

### Changing WhatsApp Number/Message

```javascript
whatsapp: {
  number: "919000101939",  // Country code + number, no + symbol
  message: "Hello! I am interested in Rankers' Paradise tuitions..."
}
```

### Updating Map Location

1. Go to [Google Maps](https://www.google.com/maps)
2. Find your location
3. Click Share > Embed a map
4. Copy the iframe src URL
5. Update in config:

```javascript
map: {
  embedURL: "YOUR_GOOGLE_MAPS_EMBED_URL",
  address: "Your Address Here"
}
```

## Google Sheets Setup (Lead Capture)

### Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it "Rankers Paradise Leads"
4. Add headers in Row 1:
   - Column A: `Timestamp`
   - Column B: `Name`
   - Column C: `Phone`
   - Column D: `Source`

### Step 2: Add Apps Script

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete any existing code
3. Copy the entire contents of `google-apps-script.js` and paste it
4. Click the Save icon (or Ctrl+S)

### Step 3: Deploy as Web App

1. Click **Deploy > New deployment**
2. Click the gear icon next to "Select type" and choose **Web app**
3. Configure:
   - Description: "Lead Capture"
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**
5. Click **Authorize access** and follow the prompts
6. Copy the **Web App URL**

### Step 4: Update Config

Paste the Web App URL in `js/config.js`:

```javascript
googleSheet: {
  webAppURL: "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"
}
```

### Testing the Integration

1. Open the website
2. Fill out the popup form
3. Submit
4. Check your Google Sheet for the new entry

## Replacing Assets

### Logo Replacement

1. Create your logo as SVG (recommended) or PNG
2. Recommended dimensions: 200x50 pixels
3. Replace `assets/logo/logo.svg`

### Favicon Replacement

1. Create a square icon (recommended: 512x512)
2. Use [RealFaviconGenerator](https://realfavicongenerator.net/) to generate all sizes
3. Replace files in `assets/logo/`:
   - `favicon.svg`
   - `favicon-32x32.png`
   - `favicon-16x16.png`
   - `apple-touch-icon.png` (180x180)

### Social Sharing Image (og-image)

1. Create image with dimensions: **1200 x 630 pixels**
2. Include:
   - Your logo/branding
   - Tagline
   - Contact info or call-to-action
3. Save as JPG (keep under 1MB)
4. Replace `assets/images/og-image.jpg`

### Hero & Section Images

Replace placeholder images with your own:
- Recommended format: JPG or WebP
- Hero: 1920x1080 pixels
- Section images: 600x400 pixels

Update paths in `js/config.js` if using different filenames.

## GitHub Pages Deployment

### Method 1: Web Interface (Easiest)

1. Go to [github.com](https://github.com) and sign in
2. Click **+** > **New repository**
3. Name: `rankers-paradise`
4. Set to **Public**
5. Click **Create repository**
6. Click **Add file** > **Upload files**
7. Drag and drop all project files
8. Click **Commit changes**
9. Go to **Settings** > **Pages**
10. Source: **Deploy from branch**
11. Branch: **main**, Folder: **/ (root)**
12. Click **Save**
13. Wait 2-5 minutes, your site will be at: `https://YOUR_USERNAME.github.io/rankers-paradise/`

### Method 2: Git Command Line

```bash
# Initialize repository
cd rankers-paradise
git init
git add .
git commit -m "Initial commit"

# Push to GitHub (create repo on GitHub first)
git remote add origin https://github.com/YOUR_USERNAME/rankers-paradise.git
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in repository Settings.

### After Deployment

Update these URLs in your files:
- `js/config.js` - siteUrl
- `index.html` - og:url, twitter:url, canonical
- `robots.txt` - Sitemap URL
- `sitemap.xml` - loc URL

## Customization Tips

### Adding New Sections

1. Add HTML section in `index.html` with unique ID
2. Add navigation link in nav menu
3. Add styles in `css/styles.css`

### Changing Fonts

1. Go to [Google Fonts](https://fonts.google.com)
2. Select a font
3. Copy the `<link>` tag to `index.html` head
4. Update `--font-family` in `css/styles.css`

### Adding Social Links

Add social icons in the contact section or footer:

```html
<div class="social-links">
  <a href="https://facebook.com/yourpage" target="_blank" rel="noopener">Facebook</a>
  <a href="https://instagram.com/yourpage" target="_blank" rel="noopener">Instagram</a>
</div>
```

## Troubleshooting

### Popup doesn't appear

- Check browser console for JavaScript errors
- Verify `config.js` loads before `main.js`
- Check `CONFIG.popup.showEveryVisit` is `true`

### Form submission fails

- Verify Google Sheet Web App URL is correct
- Ensure Apps Script is deployed as "Anyone can access"
- Check browser console for CORS errors

### WhatsApp redirect doesn't work

- Verify phone number format: country code + number, no symbols
- Example: `919000101939` (not `+91-9000101939`)
- Test URL manually: `https://wa.me/919000101939`

### Colors don't apply

- Check for typos in color hex codes
- Verify CSS uses `var(--color-primary)` etc.
- Hard refresh browser (Ctrl+Shift+R)

### Mobile menu doesn't work

- Check JavaScript console for errors
- Verify nav elements have correct IDs
- Test hamburger icon click event

### Site not loading on GitHub Pages

- Ensure `index.html` is in root directory
- Check file paths use `./` prefix
- Wait 5-10 minutes after enabling Pages
- Clear browser cache

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## License

Copyright 2024 Rankers' Paradise. All rights reserved.

## Support

For technical support or questions:
- Email: contact@rankersparadise.com
- Phone: +91 9000101939
