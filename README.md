# Boilerplate for Programmatic SEO campaigns

A terse template for creating modern [Programmatic SEO](https://unzip.dev/0x003-programmatic-seo/) campaigns.
From the creator of [unzip.dev](https://unzip.dev?ref=next-pseo).

### Programmatic SEO Features

- ⚡ Utalizes Next.js for Static Fast Webpage Loading and Deploy on Vercel.
- Use ISR for regenerating infomration on Vercel during runtime.
- 🗺️ Have Sitemaps and Robots.txt generated automatically even with ISR regeneration via next-sitemap.
- Site, Blog and Variant page have distinct layouts.
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
- 💯 Maximize lighthouse score

### Developer experience first:

- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [Tailwind CSS](https://tailwindcss.com)
- ✅ Strict Mode for TypeScript and React 18
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 💡 Absolute Imports using `@` prefix

Nice to have:

- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer) (NOT Connected yet)
- 📓 Write standard compliant commit messages with Commitizen (NOT Connected yet)
- 🔍 Visual testing with Percy (Optional) (NOT Connected yet)
- 🧪 E2E Testing with Playwright

Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

### Requirements

- Node.js 14+ and npm

## Getting Started

1. Check all of the "FIXME" comments before starting.

2. `cp .env.example .env.local`

3. Run the development server:

```bash
npm i
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

1. Connect your repository to Vercel.
2. Add your env variables to Vercel.
3. In vercel change the build:
   `npm run prod:build`
