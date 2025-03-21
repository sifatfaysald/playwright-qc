import { test, expect } from '@playwright/test';

test.describe('Playwright Website Navigation', () => {
    test('should navigate to the installation page and verify the heading', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
    });
});
