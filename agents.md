# Rankers' Paradise Website - Development Instructions

## Project Overview
Build a single-page professional website for "Rankers' Paradise" - a tuition service offering quality education for CBSE and ICSE students from Class 5th to 10th.

---

## Tech Stack
- HTML5
- CSS3 (Vanilla CSS, no frameworks)
- JavaScript (Vanilla JS, no frameworks)
- Google Sheets API (via Apps Script for form data)

---

## Project Structure

```
rankers-paradise/
├── index.html
├── robots.txt                  # SEO: Search engine instructions
├── sitemap.xml                 # SEO: Site map for crawlers
├── css/
│   └── styles.css
├── js/
│   ├── config.js
│   └── main.js
├── assets/
│   ├── logo/
│   │   ├── logo.svg
│   │   ├── favicon.svg         # SEO: Browser tab icon
│   │   ├── favicon-32x32.png   # SEO: Favicon 32px
│   │   ├── favicon-16x16.png   # SEO: Favicon 16px
│   │   └── apple-touch-icon.png # SEO: iOS icon (180x180)
│   └── images/
│       ├── hero.jpg
│       ├── legacy.jpg
│       ├── services.jpg
│       ├── team.jpg
│       └── og-image.jpg        # SEO: Social sharing image (1200x630)
├── google-apps-script.js
└── README.md
```

---

## Configuration File Specification (js/config.js)

Create a configuration object that exports all customizable settings:

```javascript
const CONFIG = {
  // Brand Colors
  colors: {
    primary: "#1e5f74",      // Deep teal - can be changed
    secondary: "#28a745",    // Green accent
    accent: "#ffc107",       // Gold/Yellow highlights
    dark: "#1a1a2e",         // Dark backgrounds
    light: "#f8f9fa",        // Light backgrounds
    text: "#333333",         // Main text
    textLight: "#ffffff"     // Light text
  },

  // Contact Information
  contact: {
    phone1: "9000101939",
    phone2: "6304749014",
    email: "contact@rankersparadise.com",
    founderName: "P. Chaithanya Reddy",
    founderTitle: "Founder and CEO"
  },

  // WhatsApp Configuration
  whatsapp: {
    number: "919000101939",  // Include country code, no + symbol
    message: "Hello! I am interested in Rankers' Paradise tuitions. Please share more details."
  },

  // Google Sheets Configuration
  googleSheet: {
    webAppURL: "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE"
  },

  // Google Maps Configuration
  map: {
    embedURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2!2d78.3!3d17.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzAwLjAiTiA3OMKwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
    address: "Athena-C's Activity Room"
  },

  // Asset Paths (for easy replacement)
  assets: {
    logo: "./assets/logo/logo.svg",
    heroImage: "./assets/images/hero.jpg",
    legacyImage: "./assets/images/legacy.jpg",
    servicesImage: "./assets/images/services.jpg",
    teamImage: "./assets/images/team.jpg"
  },

  // MulteArts Partner Section
  partner: {
    name: "MulteArts",
    url: "https://www.multearts.com",
    description: "We have collaborated with MulteArts to offer your children various arts learning opportunities at best prices in the market."
  },

  // Popup Configuration
  popup: {
    showEveryVisit: true,
    title: "Welcome to Rankers' Paradise!",
    subtitle: "Register your interest and we'll get back to you"
  }
};
```

---

## Page Sections Specification

### 1. NAVIGATION (Fixed Header)
- Logo on left (from config.assets.logo)
- Navigation links: Who We Are | Our Legacy | Services | Contact
- Smooth scroll to sections on click
- Mobile hamburger menu for screens < 768px
- Background becomes solid on scroll

### 2. HERO SECTION
- Full viewport height (100vh)
- Background image with dark overlay (use placeholder: https://placehold.co/1920x1080/1e5f74/ffffff?text=Hero+Image)
- Headline: "Welcome to Rankers' Paradise"
- Tagline: "Where Learning Meets Excellence"
- CTA Button: "Get Started" → scrolls to contact section
- Subtle scroll-down indicator animation

### 3. WHO WE ARE SECTION
- Section ID: `who-we-are`
- Two-column layout (image left, content right)
- Placeholder image: https://placehold.co/600x400/28a745/ffffff?text=Team+Image
- Content:
  ```
  Heading: Who Are We?
  Text: We are a group of Civil Service Aspirants (UPSC), Doctors, and study 
  enthusiasts driven by passion to teach. Our team combines academic excellence 
  with innovative teaching methods to create an engaging learning environment.
  ```
- Include subtle icons or badges for credentials

### 4. OUR LEGACY SECTION
- Section ID: `our-legacy`
- Alternate layout (content left, image right)
- Placeholder image: https://placehold.co/600x400/ffc107/333333?text=Legacy+Image
- Content:
  ```
  Heading: Our Legacy
  Text: We are purpose-driven people integrating the methodologies of 
  Sri. Ranga Reddy garu (Late) from the 1960s. We are adopting his innovative 
  teaching style for which he is popularly known as "Ayyavaru" among the masses.
  
  His vision of making education accessible and enjoyable continues to 
  inspire our teaching philosophy today.
  ```
- Optional: timeline or quote block for visual appeal

### 5. OUR SERVICES SECTION
- Section ID: `services`
- Heading: "What We Offer"
- Card-based grid layout (3 columns, responsive)
- Service Cards:
  ```
  Card 1:
    Icon: 📚 (or academic icon)
    Title: CBSE Tuitions
    Text: Comprehensive coaching for Class 5-10 CBSE curriculum
  
  Card 2:
    Icon: 📖 (or book icon)
    Title: ICSE Tuitions
    Text: Expert guidance for Class 5-10 ICSE students
  
  Card 3:
    Icon: 🎯 (or target icon)
    Title: Personalized Learning
    Text: Individual attention and customized study plans
  
  Card 4:
    Icon: 🎨 (or arts icon)
    Title: MulteArts Partnership
    Text: Access to arts learning through our partner MulteArts
    Link: Opens config.partner.url in new tab
  ```
- Cards should have hover effects (slight lift + shadow)

### 6. CONTACT SECTION
- Section ID: `contact`
- Two-column layout
- Left column:
  - Heading: "Get In Touch"
  - Contact details from config
  - Phone numbers (clickable tel: links)
  - Location/Address
  - Social links (placeholders)
- Right column:
  - Embedded Google Map (iframe from config.map.embedURL)
  - Map should be responsive

### 7. FOOTER
- Background: dark color from config
- Contains:
  - Logo (smaller version)
  - Quick links
  - Contact info summary
  - Copyright: "© 2024 Rankers' Paradise. All rights reserved."
  - "Made with ❤️ for education"

---

## Lead Capture Popup Specification

### Trigger
- Appears automatically when page loads
- Shows every time (as per config.popup.showEveryVisit)

### Design
- Centered modal with dark overlay background
- Clean, professional design matching brand colors
- Close button (X) in top-right corner
- Clicking overlay also closes popup

### Form Fields
```
- Name (text input, required)
- Phone Number (tel input, required, 10-digit validation)
- Submit Button: "Register Interest"
```

### Form Submission Behavior
1. Validate inputs (name not empty, phone is 10 digits)
2. Show loading state on button
3. Send data to Google Sheets via fetch to config.googleSheet.webAppURL
4. On success:
   - Show success message briefly
   - Close popup
   - Redirect to WhatsApp with pre-filled message:
     ```
     URL: https://wa.me/{config.whatsapp.number}?text={encoded config.whatsapp.message}
     ```
5. On error:
   - Show error message
   - Allow retry

---

## Google Apps Script (google-apps-script.js)

Provide this code for the user to deploy:

```javascript
// Google Apps Script - Deploy as Web App
// Instructions in README.md

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date(),           // Timestamp
      data.name,            // Name
      data.phone,           // Phone
      data.source || 'Website Popup'  // Source
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('Rankers Paradise Lead Capture API is running.')
    .setMimeType(ContentService.MimeType.TEXT);
}
```

---

## CSS Requirements

### Global Styles
- Use CSS custom properties (variables) that read from JS config
- Apply colors dynamically via JavaScript on page load
- Smooth scrolling: `html { scroll-behavior: smooth; }`
- Box-sizing: border-box globally
- Professional font: Google Fonts - "Poppins" (weights: 300, 400, 500, 600, 700)

### Root Variables (to be set by JS from config)
```css
:root {
  --color-primary: #1e5f74;
  --color-secondary: #28a745;
  --color-accent: #ffc107;
  --color-dark: #1a1a2e;
  --color-light: #f8f9fa;
  --color-text: #333333;
  --color-text-light: #ffffff;
}
```

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Mobile Responsiveness Specifications

#### Global Mobile Rules
- All touch targets (buttons, links) minimum 44x44px
- Font sizes never below 16px (prevents iOS zoom on input focus)
- Horizontal scrolling must NEVER occur
- All content must be readable without zooming
- Use `max-width: 100%` on images and embedded content

#### Navigation (Mobile < 768px)
```
- Hide desktop nav links
- Show hamburger icon (3 horizontal lines)
- Hamburger opens full-screen or slide-in menu overlay
- Menu has close button (X)
- Nav links stacked vertically, large tap targets
- Clicking a link closes menu and scrolls to section
- Body scroll locked when menu is open
```

#### Hero Section (Mobile)
```
- Reduce min-height to 80vh (from 100vh)
- Headline font-size: 2rem (from 3.5rem)
- Tagline font-size: 1.1rem (from 1.5rem)
- CTA button full-width with padding
- Background image uses background-position: center
```

#### Who We Are / Our Legacy (Mobile)
```
- Stack to single column (image above text)
- Image takes full width
- Remove alternating layout (both sections same order)
- Reduce section padding: 60px 20px (from 100px 50px)
- Heading font-size: 1.75rem (from 2.5rem)
```

#### Services Cards (Mobile)
```
- Single column layout (1 card per row)
- Cards take full width with margin
- Reduce card padding
- Stack horizontally on tablet (2 per row)
```

#### Contact Section (Mobile)
```
- Stack to single column
- Map takes full width, 250px height
- Contact info above map
- Phone numbers large and tappable (tel: links)
```

#### Footer (Mobile)
```
- Stack all columns vertically
- Center-align text and links
- Reduce padding
```

#### Popup Modal (Mobile)
```
- Width: 95% of viewport (from 500px max)
- Reduce padding: 20px (from 40px)
- Form inputs full width
- Submit button full width
- Close button larger (easier to tap)
- Modal vertically centered with slight top offset
```

#### Mobile CSS Structure
```css
/* Base styles (mobile-first) */
.element {
  /* Mobile styles here */
}

/* Tablet */
@media (min-width: 768px) {
  .element {
    /* Tablet overrides */
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .element {
    /* Desktop overrides */
  }
}
```

#### Mobile-Specific Meta Tag (in head)
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
```

#### Touch-Friendly Enhancements
- Add `cursor: pointer` to all clickable elements
- Use `:active` states for touch feedback (not just `:hover`)
- Disable hover effects on touch devices or make them also work on tap
```css
@media (hover: hover) {
  /* Hover effects only for devices that support hover */
  .card:hover {
    transform: translateY(-5px);
  }
}

/* Active state for touch devices */
.card:active {
  transform: translateY(-2px);
}
```

#### Form Input Mobile Optimization
```css
input, button, select, textarea {
  font-size: 16px; /* Prevents iOS zoom */
  -webkit-appearance: none; /* Consistent styling */
  border-radius: 8px; /* Easier to tap */
}

input[type="tel"] {
  font-size: 18px; /* Larger for phone numbers */
}
```

### Animations
- Subtle fade-in animations on scroll for sections
- Smooth hover transitions (0.3s ease)
- Popup fade-in animation

---

## JavaScript Functionality (js/main.js)

### On Page Load
1. Apply config colors to CSS variables
2. Load all asset paths from config
3. Initialize popup (show immediately)
4. Setup smooth scroll for navigation
5. Setup mobile menu toggle
6. Setup scroll-based header styling

### Popup Functions
- `showPopup()` - Display the modal
- `hidePopup()` - Hide the modal
- `handleFormSubmit(e)` - Process form, send to Sheets, redirect to WhatsApp

### Utility Functions
- `applyConfigColors()` - Set CSS variables from config
- `validatePhone(phone)` - Return true if 10 digits
- `redirectToWhatsApp()` - Open WhatsApp with config message

---

## README.md Content

Create a comprehensive README with:

1. **Project Overview**
2. **Quick Start** (just open index.html)
3. **Configuration Guide**
   - How to change colors
   - How to update contact info
   - How to change WhatsApp number/message
   - How to update map location
4. **Google Sheets Setup** (step-by-step with screenshots description)
   - Create new Google Sheet
   - Add headers: Timestamp, Name, Phone, Source
   - Open Extensions > Apps Script
   - Paste provided code
   - Deploy as Web App
   - Copy URL to config
5. **Replacing Assets**
   - Logo replacement instructions
   - Image replacement instructions
   - Recommended image dimensions
6. **Customization Tips**
7. **Troubleshooting**

---

## Testing Instructions

### Test Checklist

#### 1. Visual Testing
- [ ] Website loads without console errors
- [ ] All sections are visible and properly styled
- [ ] Colors match the config settings
- [ ] Logo displays correctly
- [ ] Placeholder images load
- [ ] Navigation links highlight active section
- [ ] Hover effects work on buttons and cards

#### 2. Mobile Responsiveness Testing
- [ ] Test at 375px width (iPhone SE)
- [ ] Test at 390px width (iPhone 12/13/14)
- [ ] Test at 768px width (iPad portrait)
- [ ] Test at 1024px width (iPad landscape)
- [ ] No horizontal scrollbar at any size
- [ ] Text is readable without zooming
- [ ] All buttons/links are easily tappable (44px minimum)
- [ ] Hamburger menu appears on mobile
- [ ] Hamburger menu opens and closes correctly
- [ ] Menu links work and close menu after click
- [ ] Hero section scales properly
- [ ] Cards stack to single column on mobile
- [ ] Contact section stacks properly
- [ ] Map is responsive and visible
- [ ] Popup modal fits on mobile screens
- [ ] Form is usable on mobile (inputs not too small)
- [ ] Footer stacks correctly on mobile

#### 2. Navigation Testing
- [ ] All nav links scroll to correct sections
- [ ] Mobile hamburger menu opens/closes
- [ ] Header becomes solid on scroll
- [ ] Smooth scrolling works

#### 3. Popup Testing
- [ ] Popup appears on page load
- [ ] Close button (X) works
- [ ] Clicking overlay closes popup
- [ ] Form validation shows errors for empty fields
- [ ] Form validation rejects invalid phone numbers
- [ ] Submit button shows loading state

#### 4. Form Submission Testing
- [ ] With valid Google Sheet URL: Data appears in sheet
- [ ] Without Google Sheet URL: Error handled gracefully
- [ ] After submission: WhatsApp opens with correct number
- [ ] WhatsApp message is pre-filled correctly

#### 5. Configuration Testing
- [ ] Change primary color in config → Website updates
- [ ] Change WhatsApp number → Correct redirect
- [ ] Change WhatsApp message → Correct pre-fill
- [ ] Change map URL → Map updates

#### 6. Cross-Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Edge

#### 7. Performance Testing
- [ ] Page loads in under 3 seconds
- [ ] No layout shifts during load
- [ ] Images are optimized (placeholders for now)

#### 8. SEO Testing
- [ ] Page has exactly ONE h1 tag
- [ ] Heading hierarchy is correct (h1 → h2 → h3, no skips)
- [ ] All images have descriptive alt text
- [ ] Meta title is under 60 characters
- [ ] Meta description is under 160 characters
- [ ] Open Graph tags are present and correct
- [ ] Twitter Card tags are present and correct
- [ ] Schema.org JSON-LD is valid (test at https://validator.schema.org/)
- [ ] robots.txt is accessible at /robots.txt
- [ ] sitemap.xml is accessible and valid
- [ ] Favicon appears in browser tab
- [ ] Canonical URL is set correctly
- [ ] All internal links work (no broken links)

#### 9. Accessibility Testing (affects SEO)
- [ ] All form inputs have associated labels
- [ ] Buttons have descriptive text or aria-labels
- [ ] Color contrast ratio is at least 4.5:1
- [ ] Site is navigable with keyboard only
- [ ] Focus states are visible
- [ ] Skip to main content link (optional but recommended)

---

## Issue Correction Guidelines

### If popup doesn't appear:
1. Check console for JavaScript errors
2. Verify main.js is loaded after config.js
3. Check if showPopup() is called on DOMContentLoaded

### If form submission fails:
1. Check Google Sheet Web App URL in config
2. Verify Google Apps Script is deployed as "Anyone can access"
3. Check browser console for CORS errors
4. Test with a simple fetch to verify URL

### If WhatsApp redirect doesn't work:
1. Verify phone number format (country code, no +, no spaces)
2. Check if message is properly URL encoded
3. Test URL manually in browser

### If colors don't apply:
1. Check if applyConfigColors() is called
2. Verify CSS uses var(--color-primary) etc.
3. Check for CSS specificity issues

### If map doesn't load:
1. Verify embed URL is correct format
2. Check if URL has proper permissions
3. Test URL directly in browser

### If mobile menu doesn't work:
1. Check hamburger click event listener
2. Verify CSS for mobile menu visibility toggle
3. Check z-index of menu overlay
4. Ensure body scroll is locked when menu open

### If horizontal scroll appears on mobile:
1. Check for elements with fixed widths larger than viewport
2. Look for padding/margin causing overflow
3. Add `overflow-x: hidden` to body as last resort
4. Check images have `max-width: 100%`
5. Inspect with DevTools to find overflowing element

### If text is too small on mobile:
1. Ensure base font-size is at least 16px
2. Check media queries are applied correctly
3. Verify viewport meta tag is present
4. Use rem/em units instead of px for font sizes

### If touch targets are too small:
1. Add minimum height/width of 44px to buttons
2. Increase padding on clickable elements
3. Check link tap areas extend beyond text

---

## Final Deliverables Checklist

- [ ] index.html - Complete single-page website with SEO meta tags
- [ ] css/styles.css - All styles with CSS variables
- [ ] js/config.js - All configurations including SEO settings
- [ ] js/main.js - All functionality
- [ ] assets/logo/logo.svg - Text-based placeholder logo
- [ ] assets/logo/favicon.svg - Favicon in SVG format
- [ ] assets/logo/favicon-32x32.png - Favicon 32px PNG
- [ ] assets/logo/favicon-16x16.png - Favicon 16px PNG
- [ ] assets/logo/apple-touch-icon.png - iOS touch icon 180x180
- [ ] assets/images/og-image.jpg - Social sharing image 1200x630
- [ ] robots.txt - Search engine instructions
- [ ] sitemap.xml - XML sitemap
- [ ] google-apps-script.js - Ready to deploy script
- [ ] README.md - Complete setup guide with deployment instructions

---

## Development Sequence

1. Create project folder structure
2. Create config.js with all settings (including SEO config)
3. Create index.html with semantic structure and all SEO meta tags
4. Add Schema.org JSON-LD structured data
5. Create styles.css with responsive design
6. Create main.js with all functionality
7. Create SVG logo placeholder
8. Create favicon files (SVG, PNG 32x32, PNG 16x16, Apple Touch Icon)
9. Create og-image.jpg placeholder (1200x630)
10. Create robots.txt
11. Create sitemap.xml
12. Create Google Apps Script file
13. Create README.md with setup and deployment guide
14. Test all functionality
15. Run SEO validation checks
16. Fix any issues found

---

## SEO Specifications

### Meta Tags (in index.html head)

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Primary Meta Tags -->
  <title>Rankers' Paradise | Quality Tuitions for Class 5-10 | CBSE & ICSE</title>
  <meta name="title" content="Rankers' Paradise | Quality Tuitions for Class 5-10 | CBSE & ICSE">
  <meta name="description" content="Join Rankers' Paradise for high-quality, enjoyable tuitions for CBSE and ICSE students from Class 5th to 10th. Expert teachers including UPSC aspirants and doctors. Located at Athena-C's Activity Room.">
  <meta name="keywords" content="tuitions, CBSE tuitions, ICSE tuitions, class 5 to 10, coaching, Rankers Paradise, quality education, personalized learning">
  <meta name="author" content="P. Chaithanya Reddy">
  <meta name="robots" content="index, follow">
  <meta name="language" content="English">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://YOUR_GITHUB_USERNAME.github.io/rankers-paradise/">
  <meta property="og:title" content="Rankers' Paradise | Quality Tuitions for Class 5-10">
  <meta property="og:description" content="High-quality, enjoyable tuitions for CBSE and ICSE students from Class 5th to 10th by passionate educators.">
  <meta property="og:image" content="https://YOUR_GITHUB_USERNAME.github.io/rankers-paradise/assets/images/og-image.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:locale" content="en_IN">
  <meta property="og:site_name" content="Rankers' Paradise">
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://YOUR_GITHUB_USERNAME.github.io/rankers-paradise/">
  <meta property="twitter:title" content="Rankers' Paradise | Quality Tuitions for Class 5-10">
  <meta property="twitter:description" content="High-quality, enjoyable tuitions for CBSE and ICSE students from Class 5th to 10th by passionate educators.">
  <meta property="twitter:image" content="https://YOUR_GITHUB_USERNAME.github.io/rankers-paradise/assets/images/og-image.jpg">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://YOUR_GITHUB_USERNAME.github.io/rankers-paradise/">
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="./assets/logo/favicon.svg">
  <link rel="icon" type="image/png" sizes="32x32" href="./assets/logo/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="./assets/logo/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="./assets/logo/apple-touch-icon.png">
  
  <!-- Theme Color -->
  <meta name="theme-color" content="#1e5f74">
  <meta name="msapplication-TileColor" content="#1e5f74">
</head>
```

### Schema.org Structured Data (JSON-LD)

Add this script in the head section:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Rankers' Paradise",
  "description": "High-quality tuitions for CBSE and ICSE students from Class 5th to 10th",
  "url": "https://YOUR_GITHUB_USERNAME.github.io/rankers-paradise/",
  "logo": "https://YOUR_GITHUB_USERNAME.github.io/rankers-paradise/assets/logo/logo.svg",
  "image": "https://YOUR_GITHUB_USERNAME.github.io/rankers-paradise/assets/images/og-image.jpg",
  "telephone": ["+919000101939", "+916304749014"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Athena-C's Activity Room",
    "addressLocality": "Your City",
    "addressRegion": "Your State",
    "addressCountry": "IN"
  },
  "founder": {
    "@type": "Person",
    "name": "P. Chaithanya Reddy",
    "jobTitle": "Founder and CEO"
  },
  "sameAs": [],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Tuition Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "CBSE Tuitions",
          "description": "Comprehensive coaching for Class 5-10 CBSE curriculum"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "ICSE Tuitions",
          "description": "Expert guidance for Class 5-10 ICSE students"
        }
      }
    ]
  }
}
</script>
```

### Local Business Schema (Additional)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Rankers' Paradise",
  "image": "https://YOUR_GITHUB_USERNAME.github.io/rankers-paradise/assets/images/og-image.jpg",
  "telephone": "+919000101939",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Athena-C's Activity Room",
    "addressCountry": "IN"
  },
  "priceRange": "$",
  "openingHours": "Mo-Sa 09:00-20:00"
}
</script>
```

### SEO Best Practices to Implement

1. **Semantic HTML Structure**
   - Use proper heading hierarchy (h1 → h2 → h3)
   - Only ONE h1 tag per page (the main title)
   - Use `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>` tags

2. **Image Optimization**
   - Add descriptive `alt` text to ALL images
   - Use lazy loading: `loading="lazy"`
   - Include width and height attributes
   ```html
   <img src="./assets/images/hero.jpg" 
        alt="Students learning at Rankers' Paradise tuition center" 
        width="1920" height="1080" 
        loading="lazy">
   ```

3. **Internal Linking**
   - Navigation links should use descriptive text
   - Add `aria-label` for icon-only links

4. **Performance (affects SEO)**
   - Minify CSS and JS for production
   - Compress images (use WebP format if possible)
   - Add `rel="preconnect"` for Google Fonts

5. **Accessibility (affects SEO)**
   - All form inputs must have labels
   - Buttons must have descriptive text
   - Color contrast ratio minimum 4.5:1
   - Focus states for keyboard navigation

### Additional SEO Files to Create

#### robots.txt
```
User-agent: *
Allow: /

Sitemap: https://YOUR_GITHUB_USERNAME.github.io/rankers-paradise/sitemap.xml
```

#### sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://YOUR_GITHUB_USERNAME.github.io/rankers-paradise/</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Updated Project Structure with SEO Files

```
rankers-paradise/
├── index.html
├── robots.txt              # NEW: Search engine instructions
├── sitemap.xml             # NEW: Site map for crawlers
├── css/
│   └── styles.css
├── js/
│   ├── config.js
│   └── main.js
├── assets/
│   ├── logo/
│   │   ├── logo.svg
│   │   ├── favicon.svg         # NEW
│   │   ├── favicon-32x32.png   # NEW
│   │   ├── favicon-16x16.png   # NEW
│   │   └── apple-touch-icon.png # NEW
│   └── images/
│       ├── hero.jpg
│       ├── legacy.jpg
│       ├── services.jpg
│       ├── team.jpg
│       └── og-image.jpg        # NEW: 1200x630 for social sharing
├── google-apps-script.js
└── README.md
```

### Config.js SEO Section Addition

Add to config.js:

```javascript
// SEO Configuration
seo: {
  siteUrl: "https://YOUR_GITHUB_USERNAME.github.io/rankers-paradise/",
  siteName: "Rankers' Paradise",
  title: "Rankers' Paradise | Quality Tuitions for Class 5-10 | CBSE & ICSE",
  description: "Join Rankers' Paradise for high-quality, enjoyable tuitions for CBSE and ICSE students from Class 5th to 10th.",
  keywords: "tuitions, CBSE, ICSE, class 5-10, coaching, education",
  ogImage: "./assets/images/og-image.jpg"
}
```

---

## GitHub Pages Deployment Guide

### Prerequisites
- GitHub account
- Git installed on your computer
- Website code ready and tested locally

### Method 1: Deploy via GitHub Web Interface (Easiest)

#### Step 1: Create GitHub Repository
1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon (top right) → **New repository**
3. Repository settings:
   - **Name**: `rankers-paradise`
   - **Description**: "Website for Rankers' Paradise tuition services"
   - **Public** (required for free GitHub Pages)
   - ✅ Check "Add a README file"
4. Click **Create repository**

#### Step 2: Upload Files
1. In your repository, click **Add file** → **Upload files**
2. Drag and drop ALL your project files/folders:
   - index.html
   - css/ folder
   - js/ folder
   - assets/ folder
   - robots.txt
   - sitemap.xml
   - README.md
3. Add commit message: "Initial website upload"
4. Click **Commit changes**

#### Step 3: Enable GitHub Pages
1. Go to repository **Settings** (tab at top)
2. Scroll down to **Pages** (left sidebar)
3. Under "Source":
   - Select **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
4. Click **Save**
5. Wait 2-5 minutes for deployment

#### Step 4: Access Your Website
- Your site will be live at: `https://YOUR_USERNAME.github.io/rankers-paradise/`
- The URL will appear in the Pages settings once deployed

---

### Method 2: Deploy via Git Command Line

#### Step 1: Initialize Git Repository
```bash
# Navigate to your project folder
cd rankers-paradise

# Initialize git
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Rankers Paradise website"
```

#### Step 2: Create GitHub Repository
1. Go to GitHub and create a new repository named `rankers-paradise`
2. Do NOT initialize with README (since you already have files)

#### Step 3: Push to GitHub
```bash
# Add remote origin (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/rankers-paradise.git

# Push to main branch
git branch -M main
git push -u origin main
```

#### Step 4: Enable GitHub Pages
Follow Step 3 from Method 1 above.

---

### Post-Deployment Checklist

#### Immediate Tasks
- [ ] Verify site loads at GitHub Pages URL
- [ ] Test all navigation links
- [ ] Test popup form submission
- [ ] Test WhatsApp redirect
- [ ] Check mobile responsiveness
- [ ] Verify images load correctly

#### Update Configuration
After deployment, update these in `config.js`:

```javascript
seo: {
  siteUrl: "https://YOUR_ACTUAL_USERNAME.github.io/rankers-paradise/",
  // ... other settings
}
```

Also update in `index.html`:
- All `og:url` meta tags
- All `twitter:url` meta tags
- Canonical URL
- Schema.org URLs

Then commit and push changes:
```bash
git add .
git commit -m "Update URLs for production"
git push
```

---

### Custom Domain Setup (Optional)

If you want to use a custom domain like `www.rankersparadise.com`:

#### Step 1: Buy a Domain
Purchase from Namecheap, GoDaddy, Google Domains, etc.

#### Step 2: Configure DNS
Add these DNS records at your domain registrar:

**For apex domain (rankersparadise.com):**
```
Type: A
Host: @
Value: 185.199.108.153

Type: A
Host: @
Value: 185.199.109.153

Type: A
Host: @
Value: 185.199.110.153

Type: A
Host: @
Value: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Host: www
Value: YOUR_USERNAME.github.io
```

#### Step 3: Configure GitHub
1. Go to repository **Settings** → **Pages**
2. Under **Custom domain**, enter: `www.rankersparadise.com`
3. Click **Save**
4. ✅ Check **Enforce HTTPS** (wait for certificate)

#### Step 4: Add CNAME File
Create a file named `CNAME` (no extension) in your project root:
```
www.rankersparadise.com
```

Commit and push this file.

---

### Updating Your Website

After making changes locally:

```bash
# Check what files changed
git status

# Add all changes
git add .

# Commit with descriptive message
git commit -m "Update: describe your changes here"

# Push to GitHub
git push
```

Changes will be live in 2-5 minutes.

---

### Troubleshooting Deployment

#### Site shows 404 error
- Ensure `index.html` is in the root directory
- Check that GitHub Pages source is set correctly
- Wait 5-10 minutes after enabling Pages

#### CSS/JS not loading
- Check file paths are relative (`./css/styles.css` not `/css/styles.css`)
- Verify file names match exactly (case-sensitive)
- Clear browser cache

#### Images not showing
- Check file paths in config.js
- Verify images are committed and pushed
- Check browser console for 404 errors

#### Form submission fails after deployment
- Update Google Sheets Web App URL if needed
- Check browser console for CORS errors
- Verify HTTPS is working

#### Custom domain not working
- DNS propagation can take up to 48 hours
- Verify DNS records are correct
- Ensure CNAME file exists in repository

---

### Useful Git Commands Reference

```bash
# Check repository status
git status

# View commit history
git log --oneline

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Pull latest changes
git pull origin main

# Create and switch to new branch
git checkout -b feature-name

# Switch branches
git checkout main

# Merge branch into main
git checkout main
git merge feature-name
```

---

## Notes for AI Agent

- Prioritize clean, maintainable code
- Add comments explaining key sections
- Use meaningful class names (BEM optional)
- Ensure all paths reference config
- Test in browser after each major section
- Report any blockers or questions
- Do not use any external CSS/JS frameworks
- All code must be vanilla HTML/CSS/JS only
- Implement ALL SEO specifications
- Create ALL SEO-related files (robots.txt, sitemap.xml, favicons)
- Use semantic HTML throughout
- Add proper alt text to all images
- Ensure heading hierarchy is correct (h1 → h2 → h3)
