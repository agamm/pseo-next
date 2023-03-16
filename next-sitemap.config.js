/** @type {import('next-sitemap').IConfig} */

/** Without additional '/' on the end, e.g. https://theodorusclarence.com */
const siteURL = process.env.SITE_URL || "http://localhost:3000";

module.exports = {
  siteUrl: siteURL,
  generateRobotsTxt: true,
  sitemapSize: 100,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: "/", // FIXME: when in production
      },
    ],
    additionalSitemaps: [
      `${siteURL}/server-sitemap-index.xml`, // Dynamic URLs for sitemap
      `${siteURL}/server-sitemap.xml`, // Dynamic URLs for sitemap
    ],
  },
  exclude: ["/server-sitemap-index.xml", "/server-sitemap.xml"], // Excluding it from the static paths of the sitemap
};
