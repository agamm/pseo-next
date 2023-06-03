// export const revalidate = 86400; // FIXME: uncomment this in prod

import { sitemapSize, siteUrl } from "../../next-sitemap.config";

export function generateSitemapArray(itemCount: number): string[] {
  let siteMapIndexes = [];
  let index = 0;
  let counter = 0;

  do {
    siteMapIndexes.push(`${siteUrl}/server-sitemaps/${index}.xml`);
    counter += sitemapSize;
    index++;
  } while (counter <= itemCount);
  return siteMapIndexes;
}

export const siteURL = siteUrl;

export const sitemapMaxItems = sitemapSize;
