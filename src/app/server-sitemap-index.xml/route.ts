import { generateSitemapArray, sitemapMaxItems } from "@/lib/sitemap";
import { getServerSideSitemapIndex } from "next-sitemap";

export async function GET(request: Request) {
  // FIXME: make this fetch from the DB
  const itemsCount = sitemapMaxItems * 1.5;

  const sitemapArray = generateSitemapArray(itemsCount);

  return getServerSideSitemapIndex(sitemapArray);
}
