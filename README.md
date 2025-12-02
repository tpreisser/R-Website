# R² Solutions Website

Ultra-premium AI consulting website built with Next.js 14, optimized for GitHub Pages static hosting.

![Next.js](https://img.shields.io/badge/Next.js-14.0.4-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8)

## 🚀 Live Demo

**GitHub Pages URL:** https://tpreisser.github.io/R-Website/

## ✨ Features

- **Ultra-Premium Design** - Minimalist aesthetic with generous whitespace
- **Fully Responsive** - Mobile-first design that works on all devices
- **Smooth Animations** - Framer Motion scroll-triggered animations
- **SEO Optimized** - Complete metadata and sitemap
- **Static Export** - Optimized for GitHub Pages hosting
- **TypeScript** - Full type safety
- **Fast Performance** - Lightweight build (~140KB per page)

## 📁 Project Structure

```
r2-solutions/
├── app/                    # Next.js 14 App Router pages
│   ├── page.tsx           # Homepage
│   ├── workshop/          # Workshop page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── solutions/         # Solutions page
│   ├── industries/        # Industries page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable UI components
│   ├── layout/            # Header & Footer
│   ├── sections/          # Homepage sections
│   └── forms/             # Contact form
├── lib/                   # Utility functions
├── public/                # Static assets
│   ├── sitemap.xml       # SEO sitemap
│   ├── robots.txt        # Crawler instructions
│   └── .nojekyll         # GitHub Pages config
└── .github/
    └── workflows/
        └── deploy.yml     # Auto-deployment workflow
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14.0.4 (Static Export)
- **Language:** TypeScript 5.9.3
- **Styling:** Tailwind CSS 3.3
- **Animations:** Framer Motion 12.23
- **Fonts:** Google Fonts (Fraunces + Inter)
- **Hosting:** GitHub Pages

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/tpreisser/R-Website.git
cd R-Website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build & Export

```bash
# Build static export for GitHub Pages
npm run build

# Output will be in ./out directory
```

## 🚀 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

This repository is configured for **automatic deployment** via GitHub Actions.

#### Steps:

1. **Enable GitHub Pages in Repository Settings:**
   - Go to: `Settings` → `Pages`
   - **Source:** Select "GitHub Actions"
   - Save

2. **Push to Main Branch:**
   ```bash
   git push origin main
   ```

3. **GitHub Actions will automatically:**
   - Install dependencies
   - Build the static site
   - Deploy to GitHub Pages

4. **Visit your site:**
   - URL: `https://tpreisser.github.io/R-Website/`
   - Check deployment status in the "Actions" tab

### Manual Deployment

If you prefer manual deployment:

```bash
# Build the site
npm run build

# The ./out folder contains your static site
# Commit and push the out folder to gh-pages branch
```

## 🎨 Design System

### Colors
- **R² Blue:** `#025082` - Primary brand color
- **Urgent Orange:** `#FF6B35` - CTAs only
- **Gray Scale:** Cool-toned grays for text and backgrounds

### Typography
- **Headings:** Fraunces (serif) - Premium, high-contrast
- **Body:** Inter (sans-serif) - Clean, readable

### Spacing
- **Base unit:** 4px (Tailwind default)
- **Generous whitespace** throughout

## 📄 Pages

1. **Homepage** (`/`)
   - Hero with value proposition
   - Problem statement
   - R² Difference
   - Workshop CTA
   - Industries served
   - Final CTA

2. **Workshop** (`/workshop`)
   - One-day workshop details
   - How it works (timeline)
   - 100% money-back guarantee
   - Who should attend
   - FAQ

3. **About** (`/about`)
   - Company story
   - Team profiles
   - Approach (Pragmatic, Innovative, Trusted)

4. **Solutions** (`/solutions`)
   - Agent Factory Platform
   - Cross-Sell Automation
   - Back-Office Automation
   - Integration Services

5. **Industries** (`/industries`)
   - Insurance
   - Healthcare
   - Financial Services
   - Home Services

6. **Contact** (`/contact`)
   - Contact form
   - Email link

## 🔧 Configuration

### Environment Variables

For custom base paths (if deploying to subdirectory):

```bash
NEXT_PUBLIC_BASE_PATH=/your-repo-name
```

This is automatically set in the GitHub Actions workflow.

### Next.js Config

The site is configured for static export in `next.config.js`:

```javascript
module.exports = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: { unoptimized: true },
  trailingSlash: true,
};
```

## 📊 Performance

Build output (production):

```
Route                    Size     First Load JS
/ (Homepage)            4.73 kB   140 kB
/about                  2.82 kB   138 kB
/contact                2.5 kB    131 kB
/industries             2.84 kB   138 kB
/solutions              2.71 kB   138 kB
/workshop               3.58 kB   139 kB
```

All pages load in **under 140KB** - extremely fast! ⚡

## 🤝 Contributing

This is a private project. Contact the repository owner for contribution guidelines.

## 📝 License

Copyright © 2024 R² Solutions. All rights reserved.

## 🆘 Support

For issues or questions:
- **Email:** hello@r2solutions.ai
- **GitHub Issues:** [Create an issue](https://github.com/tpreisser/R-Website/issues)

## 🎯 Deployment Checklist

- [x] Next.js configured for static export
- [x] GitHub Actions workflow created
- [x] .nojekyll file added
- [x] Static sitemap.xml created
- [x] robots.txt configured
- [x] All images set to unoptimized
- [x] Base path configured for GitHub Pages
- [x] Trailing slashes enabled
- [x] Build tested successfully
- [ ] GitHub Pages enabled in repository settings
- [ ] DNS configured (if using custom domain)

---

**Built with ❤️ using Next.js 14 + TypeScript + Tailwind CSS**
