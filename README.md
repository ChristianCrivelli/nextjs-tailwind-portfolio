# Christian Crivelli — Portfolio

![License](https://img.shields.io/badge/license-MIT-blue.svg)

My personal CV / developer portfolio: a single-page site covering featured
projects, work experience, education, leadership, skills, languages, and a
map of places I've lived and studied — built on the
[Vercel portfolio-blog-starter](https://github.com/vercel/examples/tree/main/solutions/blog)
template and heavily customized from there.

**Live site:** https://my-cv-portfolio-alpha.vercel.app

## Features

- Hero section with an availability badge that's date-driven, not hand-edited
- Featured projects grid, with individual project detail pages
- GitHub contribution graph, pulled live for `ChristianCrivelli`
- Work experience, leadership, and education timelines
- Skills radar chart and a languages list
- Interactive map (Leaflet) of places I've lived, studied, and worked
- Light/dark theme, defaulting to light with a manual toggle (persisted
  across visits)
- SEO: sitemap, robots.txt, JSON-LD structured data, dynamic OG image
- Vercel Analytics and Speed Insights

## Stack

- [Next.js](https://nextjs.org/) (App Router) with Turbopack
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Geist](https://vercel.com/font) font
- [Leaflet](https://leafletjs.com/) / [React Leaflet](https://react-leaflet.js.org/) for the journey map
- Deployed on [Vercel](https://vercel.com/)

## Running locally

This project uses [pnpm](https://pnpm.io/installation).

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

```bash
pnpm build   # production build
pnpm start   # serve the production build
```

## Project structure

- `app/page.tsx` — homepage sections
- `app/components/` — UI components (nav, footer, timelines, project cards, etc.)
- `app/data/` — content: projects, experience, education, leadership, skills, languages, places
- `app/projects/[slug]/` — individual project detail pages
- `app/lib/` — small helpers (availability badge logic, last-updated date)

## License

MIT — see [LICENSE](./LICENSE).
