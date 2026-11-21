import { expect, test } from "@playwright/test";

test("home page loads with the product name", async ({ page }) => {
  const response = await page.goto("/");

  expect(response?.status()).toBe(200);
  await expect(
    page.getByRole("heading", { name: "Olympiad Champs", level: 1 }),
  ).toBeVisible();
});
