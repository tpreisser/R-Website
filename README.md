# R² Solutions Website

Ultra-premium AI consulting website built with Next.js 14.

## 🎨 Overview

Professional website for R² Solutions, an AI consulting firm specializing in industry-specific AI agents.

## 🛠️ Tech Stack

- **Framework:** Next.js 14.0.4 (App Router)
- **Language:** TypeScript 5.9.3
- **Styling:** Tailwind CSS 3.3
- **Animations:** Framer Motion 12.23
- **Fonts:** Google Fonts (Fraunces serif + Inter sans-serif)

## 📁 Project Structure

```
r2-solutions/
├── app/                    # Next.js 14 App Router
│   ├── page.tsx           # Homepage
│   ├── workshop/          # Workshop page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── solutions/         # Solutions page
│   ├── industries/        # Industries page
│   ├── layout.tsx         # Root layout with SEO
│   └── globals.css        # Global styles + Tailwind
├── components/
│   ├── ui/                # Reusable components (Button, Card, etc.)
│   ├── layout/            # Header & Footer
│   ├── sections/          # Homepage sections
│   └── forms/             # Contact form
├── lib/
│   └── utils.ts           # Utility functions
└── public/                # Static assets
```

## 📄 Pages

### Homepage
- Hero section with value proposition
- Problem statement (AI implementation challenges)
- R² Difference (3 key differentiators)
- Workshop CTA with guarantee badge
- How We're Different (3-column cards)
- Industries grid
- Final CTA

### Workshop Page
- One-day workshop overview
- Timeline (Before, During, After)
- 100% money-back guarantee
- Who should attend
- FAQ section

### About Page
- Company story
- Team profiles
- Approach: Pragmatic, Innovative, Trusted

### Solutions Page
- Agent Factory Platform
- Cross-Sell Automation
- Back-Office Automation
- Integration Services

### Industries Page
- Insurance
- Healthcare
- Financial Services
- Home Services

### Contact Page
- Full contact form
- Email link

## 🎨 Design System

### Colors
- **R² Blue:** `#025082` - Primary brand color
- **Urgent Orange:** `#FF6B35` - CTAs and accents
- **Cool Grays:** For text and backgrounds

### Typography
- **Headings:** Fraunces (serif) - Premium, sophisticated
- **Body:** Inter (sans-serif) - Clean, readable

### Components
- **Button:** 4 variants (primary, secondary, ghost, dark)
- **Card:** 3 variants (default, hover, feature)
- **Badge:** Animated guarantee badge
- **Container:** 6 size options
- **AnimatedSection:** Scroll-triggered animations

## 🚀 Development

This project is developed in Claude Code and reviewed on GitHub.

### Build Info
```
Route                    Size     First Load JS
/ (Homepage)            4.73 kB   140 kB
/about                  2.82 kB   138 kB
/contact                2.5 kB    131 kB
/industries             2.84 kB   138 kB
/solutions              2.71 kB   138 kB
/workshop               3.58 kB   139 kB
```

## ✨ Features

- ✅ Ultra-premium minimalist design
- ✅ Fully responsive (mobile-first)
- ✅ Smooth scroll animations (Framer Motion)
- ✅ TypeScript for type safety
- ✅ SEO optimized with metadata
- ✅ Fast performance (< 140KB per page)
- ✅ Accessible and semantic HTML

## 📝 Notes

Built following comprehensive 10,000+ word blueprint with pixel-perfect specifications for every component, page, and interaction.

---

**Built with Next.js 14 + TypeScript + Tailwind CSS**
