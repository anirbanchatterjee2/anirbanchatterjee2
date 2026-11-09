import { test, expect } from '@playwright/test';

test('homepage renders and links work', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1').first()).toBeVisible();
  await expect(page.getByRole('link', { name: /blog/i }).first()).toBeVisible();
  await expect(page.getByRole('link', { name: /resume/i }).first()).toBeVisible();
});

test('blog listing renders', async ({ page }) => {
  await page.goto('/blog');
  await expect(page.locator('h1')).toContainText(/blog/i);
});
