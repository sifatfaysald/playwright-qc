import { test, expect } from '@playwright/test';

test.describe('Playwright Website Navigation', () => {
    test('should navigate to the installation page and verify the heading', async ({ page }) => {
        // Navigate to the Playwright homepage
        await page.goto('https://playwright.dev/');
        // Click on the "Get started" link
        await page.getByRole('link', { name: 'Get started' }).click();
        // Verify the "Installation" heading is visible
        await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    });
});
