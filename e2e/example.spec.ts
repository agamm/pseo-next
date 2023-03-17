import { test, expect } from "@playwright/test";

test("should navigate the blog", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toContainText("Hello");

  await page.goto("/blog");
  await expect(page).toHaveURL("/blog");
  const link = await page.$('a[href="/blog/derp-blog"]');
  if (!link) throw new Error("Failed");
  await link.click();
  // await page.waitForNavigation();
  await expect(page.locator("h1")).toContainText("Lorem Ipsum");
});
