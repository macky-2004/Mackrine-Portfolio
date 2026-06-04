# Assets Required — Mackrine Ruth Portfolio

This document lists every file, image, and asset you need to prepare. Place images inside the `images/` folder as specified below.

---

## 1. Profile Photo

| Item | Details |
|------|---------|
| **File** | `images/profile.jpg` or `images/profile.webp` |
| **Specs** | High-resolution, square or 4:5 ratio, min 800×800px, JPEG/WebP |
| **Style** | Professional headshot, well-lit, clean background |
| **Used on** | Hero section (homepage) — circular photo with animated accent ring |

**Instructions:** Take a professional photo with good lighting. Crop square. Optimize with TinyPNG or Squoosh.

---

## 2. Resume (PDF)

| Item | Details |
|------|---------|
| **File** | `Mackrine_Ruth_Resume.pdf` (place at project root) |
| **Specs** | ATS-friendly, single-column, max 2 pages |
| **Used on** | Homepage (download button), Resume page (preview + download) |

**Instructions:** Export from Word/Google Docs. Use standard fonts only. No tables/graphics.

---

## 3. Project Assets

### 3a. Screenshots (2–3 per project)

| Project | File Names | Optional Alt |
|---------|-----------|--------------|
| **TYM Jewellery** | `images/projects/tym-jewellery-1.jpg`<br>`images/projects/tym-jewellery-2.jpg`<br>`images/projects/tym-jewellery-3.jpg` | Homepage, product page, gallery |
| **TYM Events** | `images/projects/tym-events-1.jpg`<br>`images/projects/tym-events-2.jpg`<br>`images/projects/tym-events-3.jpg` | Homepage, booking, events listing |
| **TYM Electricals & Hardware** | `images/projects/tym-electricals-1.jpg`<br>`images/projects/tym-electricals-2.jpg`<br>`images/projects/tym-electricals-3.jpg` | Homepage, catalog, contact |

**Specs:** 1920×1080 or 1366×768, JPEG/WebP, &lt;200KB each  
**Instructions:** Take full-page browser screenshots of each project. Compress with Squoosh/TinyPNG.

### 3b. Live Demo URLs & GitHub Repos

| Project | Live URL | GitHub URL |
|---------|----------|------------|
| TYM Jewellery | [Paste URL here] | [Paste URL here] |
| TYM Events | [Paste URL here] | [Paste URL here] |
| TYM Electricals & Hardware | [Paste URL here] | [Paste URL here] |

---

## 4. Certification Images

| Certification | File Name |
|---------------|-----------|
| Master in Java | `images/certificates/cert-java.jpg` |
| Web Development | `images/certificates/cert-webdev.jpg` |
| Data Visualization | `images/certificates/cert-dataviz.jpg` |

**Instructions:** Scan or photograph each certificate. Save as JPEG. Add optional verification URLs.

---

## 5. Favicon & Branding

| Item | File | Notes |
|------|------|-------|
| **Favicon** | `images/favicon.ico` | Generate at [favicon.io](https://favicon.io/) — use initials "MR" |
| **OG Image** | `images/og-image.jpg` | 1200×630px — name, tagline, brand colors |

---

## 6. Icons

All icons are loaded via CDN (Remixicon) — no downloads needed.  
Include in every HTML file:
```html
<link href="https://cdn.jsdelivr.net/npm/remixicon@4.6.0/fonts/remixicon.css" rel="stylesheet">
```

---

## 7. Folder Structure (Updated)

```
Portfolio/
├── index.html               # Homepage
├── about.html               # About Me
├── experience.html          # Education & Experience (Timeline)
├── projects.html            # Project Showcase (Filterable)
├── skills.html              # Skills with Animated Bars
├── achievements.html        # Certifications & Achievements
├── contact.html             # Contact Form & Details
├── resume.html              # Resume Preview & Download
├── Mackrine_Ruth_Resume.pdf # Your actual resume
├── PRD.md                   # Product Requirements Document
├── assets.md                # This file
├── css/
│   └── style.css            # Global styles
├── js/
│   └── main.js              # All interactivity
└── images/
    ├── profile.jpg
    ├── og-image.jpg
    ├── favicon.ico
    ├── projects/
    │   ├── tym-jewellery-1.jpg
    │   ├── tym-jewellery-2.jpg
    │   ├── tym-jewellery-3.jpg
    │   ├── tym-events-1.jpg
    │   ├── tym-events-2.jpg
    │   ├── tym-events-3.jpg
    │   ├── tym-electricals-1.jpg
    │   ├── tym-electricals-2.jpg
    │   └── tym-electricals-3.jpg
    └── certificates/
        ├── cert-java.jpg
        ├── cert-webdev.jpg
        └── cert-dataviz.jpg
```

---

## 8. Quick Checklist

| # | Item | Status |
|---|------|--------|
| 1 | Profile photo → `images/profile.jpg` | ⬜ |
| 2 | Resume PDF → `Mackrine_Ruth_Resume.pdf` | ⬜ |
| 3 | TYM Jewellery screenshots (2–3) | ⬜ |
| 4 | TYM Events screenshots (2–3) | ⬜ |
| 5 | TYM Electricals screenshots (2–3) | ⬜ |
| 6 | Live demo URLs for all 3 projects | ⬜ |
| 7 | GitHub repo URLs for all 3 projects | ⬜ |
| 8 | Java certificate image | ⬜ |
| 9 | Web Development certificate image | ⬜ |
| 10 | Data Visualization certificate image | ⬜ |
| 11 | Favicon → `images/favicon.ico` | ⬜ |
| 12 | OG image → `images/og-image.jpg` | ⬜ |
| 13 | LinkedIn profile URL (update in HTML) | ⬜ |
| 14 | GitHub profile URL (update in HTML) | ⬜ |

---

## 9. Useful Tools

| Tool | Purpose | Link |
|------|---------|------|
| **Favicon Generator** | Create favicon | https://favicon.io |
| **TinyPNG** | Compress images | https://tinypng.com |
| **Squoosh** | Resize & compress | https://squoosh.app |
| **Canva** | OG image design | https://canva.com |
| **Remixicon** | Icons (CDN) | https://remixicon.com |

---

**Next:** Go through the checklist, prepare each asset, replace placeholder URLs in the HTML files, then open `index.html` in your browser.
