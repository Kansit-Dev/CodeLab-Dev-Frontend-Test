# CodeLab Dev Frontend Test

Next.js 16 app with two landing-page tasks:

- `/` - assignment index
- `/task1` - fashion landing page
- `/task2` - fortune telling landing page

## Tech Stack

- Next.js 16.2.6 with App Router and Turbopack
- React 19
- Tailwind CSS 4
- Framer Motion for animation

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

This project uses Next.js 16. Before changing framework APIs or file conventions, read the relevant guide in `node_modules/next/dist/docs/`.

Remote Unsplash images are allowed through `images.remotePatterns` in `next.config.ts`. Fonts use local CSS fallback stacks so builds do not depend on fetching Google Fonts.
