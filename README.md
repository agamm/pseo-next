# Next 13 Boilerplate for Programmatic SEO Campaigns
[![Sponsor](https://readme-cash--readme-cash.us-central1.hosted.app/i/5pnjbzi5tp.svg)](https://readme-cash--readme-cash.us-central1.hosted.app/c/5pnjbzi5tp)

A terse template for creating modern [Programmatic SEO](https://unzip.dev/0x003-programmatic-seo/) campaigns.
Including all of the features you would expect in a modern pSEO campaign.
From the creator of [unzip.dev](https://unzip.dev?ref=next-pseo).

![image](https://github.com/agamm/pseo-next/assets/1269911/03286ccd-d476-49a7-bd46-3108a33f9ed7)


### Programmatic SEO Features

- ⚡ Utalizes Next 13 for Static Fast Webpage Loading and Deploy on Vercel.
- 🏗️ Use ISR for regenerating infomration on Vercel during runtime.
- 🗺️ Sitemaps and Robots.txt generated automatically even with ISR regeneration via next-sitemap.
- 🏯 Site, Blog and Variant page have distinct layouts.
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO.
- 💯 Maximize lighthouse score.
- 🍪 Built in Cookie Banner.
- 📊 Built in Google Analytics.
- 📷 Auto 404 Image place holder component.

### Developer experience first:

- 📦 Prisma (Postgres-compatible) for easy DB interaction.
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org).
- 💎 Integrate with [Tailwind CSS](https://tailwindcss.com).
- ✅ Strict Mode for TypeScript and React 18.
- 💖 Code Formatter with [Prettier](https://prettier.io).
- 💡 Absolute Imports using `@` prefix.
- 🧪 E2E Testing with Playwright.


## Getting Started

1. `git clone git@github.com:agamm/pseo-next.git pseo-example`
2. `npm i`
3. Start docker (for local postgress DB)
4. Open `https://localhost:3000/`
5. Check the `Development section`.

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

- .env.example -> mv to -> .env (change parameters if needed)
- /src/app/(site) - all of your landing pages go here (Home page, about, terms etc...)
- /posts - Your blog written as Markdown files.
- /src/app/blog - change your blog layout.
- /src/variant/[slug] - This is where you do your Programmatic variants.

  - Would be something like: yoursite.com/hotels/spain-summer-2023 (variant="hotels", slug="spain-summer-2023")
  - Remember to uncomment the comments there to actually fetch from your DB.

- Make sure to look into /src/components (I recommend using <TryImage> everywhere)

Lastly after fixing all of the `FIXME` comments. Connect your project to Prisma by:

- Adding your schema in /prisma/schema.prisma
- `npx prisma migrate dev --name init`
- `npm run db`

## Deployment

1. Connect your repository to Vercel.
2. Add your env variables to Vercel.
3. In vercel change the build:
   `npm run prod:build`
