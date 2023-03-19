import { getServerSideSitemap, ISitemapField } from "next-sitemap";

import { sitemapMaxItems, siteURL } from "@/lib/sitemap";
import { NextRequest } from "next/server";

const variantName = "variant";

export async function GET(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const sitemapIndexRaw = path.split("/")[2].replace(".xml", "");
  const sitemapIndex = parseInt(sitemapIndexRaw ?? "0");

  // FIXME: get this from the DB
  const variantSlugs = Array.from(Array(sitemapMaxItems * 1.5).keys()).map(
    (i) => `${variantName}_${i}`
  );

  const start = sitemapMaxItems * sitemapIndex;
  const end = start + sitemapMaxItems;
  const currentVariants = variantSlugs.slice(start, end);

  const urls: ISitemapField[] = currentVariants.map((slug) => ({
    loc: `${siteURL}/${variantName}/${slug}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(urls);
}
