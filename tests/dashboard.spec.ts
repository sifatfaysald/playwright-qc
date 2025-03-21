import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/dashboardPage';

test.describe('Dashboard Page', () => {

    let dashboardPage: DashboardPage;
    test.beforeEach(async ({ page }) => {
        dashboardPage = new DashboardPage(page);
        await page.goto('https://www.saucedemo.com/inventory.html');
    });

    test('User should see dashboard header after login', async () => {
        const isHeaderVisible = await dashboardPage.isDashboardHeaderVisible();
        expect(isHeaderVisible).toBe(true);
    });

    test('User should see inventory items on the dashboard', async () => {
        const isInventoryVisible = await dashboardPage.isInventoryListVisible();
        expect(isInventoryVisible).toBe(true);
    });
});