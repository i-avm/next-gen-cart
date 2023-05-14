import { expect, test } from '@playwright/test';

test('home page tests', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('img', { name: 'Welcome' })).toBeVisible();
});
