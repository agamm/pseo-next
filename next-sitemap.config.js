/** @type {import('next-sitemap').IConfig} */

/** Without additional '/' on the end, e.g. https://theodorusclarence.com */
// FIXME: make sure the siteURL is correct
const siteURL = process.env.SITE_URL || "http://localhost:3000";

module.exports = {
  siteUrl: siteURL,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/server*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: "/", // FIXME: when in production
      },
    ],
    additionalSitemaps: [
      `${siteURL}/server-sitemap-index.xml`, // Dynamic URLs for sitemap
      // `${siteURL}/server-sitemap.xml`, // Dynamic URLs for sitemap
    ],
  },
};
