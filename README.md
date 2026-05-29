# CodeLab Dev Frontend Test

Next.js 16 app with two landing-page tasks:

- `/` - assignment index
- `/task1` - fashion landing page
- `/task2` - fortune telling landing page

## Live Demo
[https://code-lab-dev-frontend-test.vercel.app](https://code-lab-dev-frontend-test.vercel.app)

## Tech Stack
- Next.js 16.2.6 with App Router and Turbopack
- React 19
- Tailwind CSS 4
- Framer Motion for animation

## Features

### Task 1 — Fashion Landing Page
- Parallax scrolling on hero and lookbook images
- Custom circular cursor with hover expand effect
- Infinite marquee banner
- Scroll reveal animations on page sections
- Product card hover effects (scale, overlay, label reveal)
- Testimonial cards with Playfair serif italic quotes

### Task 2 — Fortune Telling Page
- Interactive crystal ball with mouse-tracking glow
- Reactive typing feedback (ball pulses as you type)
- Tarot card fan with click-to-select (up to 3 cards)
- Dual counter-rotating magic circles
- Parallax background on mouse movement
- Stagger character animation on header text
- Floating ember particles
- Two-step flow: question input → card selection

## Setup

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

Run a production build:
```bash
npm run build
```

Run lint:
```bash
npm run lint
```

## Notes
This project uses Next.js 16. Before changing framework APIs or file conventions, read the relevant guide in `node_modules/next/dist/docs/`. Remote Unsplash images are allowed through `images.remotePatterns` in `next.config.ts`. Fonts use local CSS fallback stacks so builds do not depend on fetching Google Fonts.
