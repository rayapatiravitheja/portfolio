<div align="center">

# ✦ Rayapati Ravi Theja — Portfolio

**A cinematic, scroll-driven developer portfolio built with React 19 + Vite + GSAP + Lenis**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rayapati-ravi-theja)
[![GitHub](https://img.shields.io/badge/GitHub-Profile-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rayapatiravitheja)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![GSAP](https://img.shields.io/badge/GSAP-3.14-88CE02?style=for-the-badge&logo=greensock&logoColor=black)](https://gsap.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS%20v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=black)](https://tailwindcss.com)

</div>

---

## ⚡ Overview

A performance-first developer showcase driven by a **frame-by-frame canvas scrubbing engine** and orchestrated with **GSAP & Lenis**. Every scroll, reveal, polygon clip-path, and typographic stagger is synchronized with the browser's refresh rate.

```
300 Canvas Frames  ·  Polygon Clip-Path Reveals  ·  3D Flip Cards
Scroll-Driven Gradient Text  ·  Elastic Interactive SVG Line  ·  Custom Cursor
Stacked Sticky Parallax Cards  ·  Cinematic Preloader  ·  Full-Screen Footer Reveal
```

---

## 🏛️ Sections & Features

| Section              | Description                                                                       |
| -------------------- | --------------------------------------------------------------------------------- |
| **Hero**             | 300-frame canvas video scrubbing animation + counter preloader + clip-path reveal |
| **About Me**         | SVG stroke-to-fill lettering + scroll-scrubbed gradient text mask                 |
| **Interactive Line** | Elastic physics-based SVG string responding to mouse/touch hover                  |
| **What I Do**        | Triple-panel horizontal slide-in with dynamic scale collapse                      |
| **Skills**           | Floating keyword marquee + 4 stacked 3D sticky cards with live skill icons        |
| **Approach**         | 3D flip card showcase (_Develop · Design · Deploy_) with scroll-driven gaps       |
| **Education**        | Clip-path polygon image reveals with per-character typography stagger             |
| **Projects**         | Sticky pinned project showcase with real-time diff preview wiping & tech tags     |
| **Contact / Footer** | Staggered char-split typography reveal, direct mailer, and resume download        |

---

## 🛠️ Tech Stack

### Frontend & Core

- **[React 19](https://react.dev)** — Component architecture
- **[Vite 7](https://vitejs.dev)** — Ultra-fast HMR and bundle optimization
- **[Tailwind CSS v4](https://tailwindcss.com)** — Modern utility-first styling with `@tailwindcss/vite`
- **[Remixicon](https://remixicon.com)** — High-precision iconography

### Animation & Smooth Scroll

- **[GSAP](https://gsap.com)** (`gsap`, `@gsap/react`):
  - **ScrollTrigger** — Coordinate pinning, scrubbing, and timeline synchronization
  - **SplitText** — Character and word masking for typographic entrance effects
  - **CustomEase** — Physics-modeled easing curves for organic micro-interactions
- **[Lenis](https://lenis.darkroom.engineering)** — Virtual smooth scrolling synced directly to the GSAP global ticker

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **pnpm**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/rayapatiravitheja/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Visit `http://localhost:3000` (or `http://localhost:5173`) in your browser.

### Production Build

```bash
# Build optimized static production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Directory Structure

```
├── public/
│   ├── Frames/                 # 300 sequential canvas scrub frames
│   ├── Resume/                 # Ravi_Theja_CV.pdf
│   ├── avatar.svg              # Custom monogram brand avatar
│   ├── mark-white.png          # Crowned 'R' brand mark
│   ├── logo-white.png          # Full brand logo
│   └── favicon.ico / .png      # App tab icons
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx      # Full-screen animated drawer navigation
│   │   │   ├── HeroFooter.jsx  # Hero bottom bar with date & social links
│   │   │   ├── CustomCursor.jsx# GSAP interactive follower cursor
│   │   │   ├── SvgLine.jsx     # Elastic interactive wobble string
│   │   │   └── Footer/         # Full-screen animated footer reveal
│   │   └── sections/
│   │       ├── Hero.jsx        # 300-frame canvas engine + preloader
│   │       ├── About.jsx       # SVG stroke-to-fill text animation
│   │       ├── WhatIDo/        # 3-panel horizontal slide-in
│   │       ├── Skills.jsx      # Keyword marquee + stacked cards
│   │       ├── StickyCards/    # 4 sticky parallax skill categories
│   │       ├── FlipCards/      # 3D interactive flip cards
│   │       ├── Educational-Section/ # Clip-path image reveals
│   │       └── ProjectSection/ # Pinned project slider
│   ├── context/
│   │   └── LenisContext.js     # Global smooth scroll context
│   ├── hooks/
│   │   └── useLenis.js         # GSAP ticker integration
│   ├── pages/
│   │   └── Home.jsx            # Main orchestrated page view
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## ⚡ Performance Optimizations

- **Canvas Frame Scrubbing**: Uses zero-memory canvas redrawing with preloaded image arrays rather than decoding videos on the main thread.
- **Scroll Restoration**: Set to `manual` on initial mount to guarantee accurate frame synchronization from coordinate `(0, 0)`.
- **GSAP Ticker Coupling**: Lenis scroll loop directly tied into `gsap.ticker` to eliminate frame judder and scroll tearing.
- **Hardware Acceleration**: Critical animated targets use `will-change: transform` and CSS 3D transforms (`translate3d`) for GPU composition.
- **Asset Tree Hygiene**: Zero unreferenced assets in `public/`, resulting in lightning-fast sub-4-second production builds.

---

## 📬 Contact & Connect

- **Name:** Rayapati Ravi Theja
- **Location:** Anantapur, Andhra Pradesh, India
- **Email:** [rayapatiravitheja@gmail.com](mailto:rayapatiravitheja@gmail.com)
- **LinkedIn:** [linkedin.com/in/rayapati-ravi-theja](https://www.linkedin.com/in/rayapati-ravi-theja)
- **GitHub:** [github.com/rayapatiravitheja](https://github.com/rayapatiravitheja)

---

<div align="center">

**&copy; Rayapati Ravi Theja. All rights reserved.**

`React 19` · `Vite` · `GSAP` · `Tailwind CSS` · `Lenis`

</div>
