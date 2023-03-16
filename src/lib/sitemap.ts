import { sitemapSize, siteUrl } from "../../next-sitemap.config";

export function generateSitemapArray(itemCount: number): string[] {
  let siteMapIndexes = [];
  let index = 0;
  let counter = 0;

  do {
    siteMapIndexes.push(`${siteUrl}/server-sitemap.xml?index=${index}`);
    counter += sitemapSize;
    index++;
  } while (counter <= itemCount);
  return siteMapIndexes;
}

export const siteURL = siteUrl;

export const sitemapMaxItems = sitemapSize;
