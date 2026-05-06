import { test, expect } from "@playwright/test";

test("should find character positions and display result", async ({ page }) => {
  await page.goto("/");

  await page.fill("#mainInput", "hello");
  await page.fill("#charInput", "l");

  await page.click("#submitBtn");

  await page.waitForURL("**/result.html");

  await expect(page.locator("#resultText")).toHaveText(
    "Found 2 times at positions: 2,3",
  );
});

test("should show 0 when character not found", async ({ page }) => {
  await page.goto("/");

  await page.fill("#mainInput", "hello");
  await page.fill("#charInput", "z");

  await page.click("#submitBtn");

  await page.waitForURL("**/result.html");

  await expect(page.locator("#resultText")).toHaveText(
    "Found 0 times at positions: ",
  );
});
test("should show error if more than one character entered", async ({
  page,
}) => {
  await page.goto("/");

  await page.fill("#mainInput", "hello");
  await page.fill("#charInput", "ll");

  await page.click("#submitBtn");

  await expect(page.locator("#errorMsg")).toBeVisible();
});
test("should show error when inputs are empty", async ({ page }) => {
  await page.goto("/");

  await page.click("#submitBtn");

  await expect(page.locator("#errorMsg")).toBeVisible();
});
