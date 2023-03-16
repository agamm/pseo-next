import { test, expect } from "@playwright/test";

test("should navigate to the about page", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  await expect(page.locator("h1")).toContainText("Hello");

  await page.goto("/blog");
  await expect(page).toHaveURL("/blog/derp-blog");
  // The new page should contain an h1 with "About Page"
  await expect(page.locator("h1")).toContainText("Lorem Ipsum");
});
