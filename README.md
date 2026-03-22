# CometChat Marketing Page

A responsive marketing landing page for CometChat, built using React and TanStack Start based on the provided Figma design.

**Live:** [web-practices.vercel.app](https://web-practices.vercel.app)

## Tech Stack

- React 19 with TanStack Start
- TypeScript
- Tailwind CSS 4
- Vite

## How to Run

```bash
pnpm install
pnpm run dev
```

Runs on `localhost:3000`.

### Production Build

```bash
pnpm run build
pnpm run start
```

## Folder Structure

```
src/
├── assets/
│   ├── icons/          # SVG icons as React components
│   ├── logos/          # Brand logos
│   └── images/         # Page images
├── components/
│   ├── navbar.tsx
│   ├── hero.tsx
│   ├── customer-band.tsx
│   ├── platform-section.tsx
│   ├── core-features.tsx
│   ├── build-section.tsx
│   ├── chat-integration-section.tsx
│   ├── cta-section.tsx
│   ├── footer.tsx
│   └── ui/             # Reusable small components
│       ├── button.tsx
│       ├── section-container.tsx
│       ├── feature-block.tsx
│       ├── bordered-card.tsx
│       ├── grid-card.tsx
│       ├── gradient-text.tsx
│       ├── gradient-divider.tsx
│       └── highlight-text.tsx
├── routes/
│   ├── __root.tsx      # Root layout with all meta/SEO stuff
│   └── index.tsx       # Main landing page
├── utils/
│   ├── constants.ts    # All the text content and data
│   ├── types.ts        # TypeScript types
│   └── utils.ts        # Helper functions
└── styles.css
```

I split the page into separate components for each section and kept all the text content in `constants.ts` so it's easy to update without touching component code. Smaller reusable pieces like buttons and cards are in the `ui/` folder.

## SEO

- Used semantic HTML tags (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`)
- Added meta title, description, Open Graph tags, and Twitter Card tags
- Added a canonical URL tag
- Added JSON-LD structured data for Organization and SoftwareApplication
- Created `robots.txt` and `sitemap.xml`
- All images have alt text

## Performance

- Images are compressed at build time using vite-plugin-image-optimizer
- Below-fold images use `loading="lazy"`
- Hero image is preloaded and has `fetchPriority="high"` since it's the first thing users see
- Using a single variable font file (Satoshi) that's preloaded to avoid layout shift
- TanStack Start handles SSR so the page doesn't depend on JS to show content

## Notes

### SEO Assumptions
- Targeted towards developers looking for chat SDKs and APIs to add to their apps
- Went with keywords like "in-app chat", "chat API", "messaging SDK"
- Used SoftwareApplication schema since CometChat is a developer tool/platform

### Tradeoffs
- Went with TanStack Start instead of a plain React SPA so I could get SSR for better SEO
- All content is hardcoded in a constants file — works fine for a single page but would need a CMS for a bigger site
- Stuck with PNG images from the Figma exports — ideally would convert to WebP but kept it simple for now
- Used Tailwind for speed — it made matching the Figma spacing and responsive breakpoints faster

### What I'd Do Differently in Production
- Convert images to WebP/AVIF for better file sizes
- Hook up a CMS so non-devs can update the page content
- Add analytics and tracking on the CTA buttons
- Run Lighthouse audits as part of CI/CD
- Do proper accessibility testing with screen readers
- Add a 404 page and error handling
