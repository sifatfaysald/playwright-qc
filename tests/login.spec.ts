import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';

test.describe('Login Functionality', () => {

    let loginPage: LoginPage;
    let inventoryPage: InventoryPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);
        await loginPage.navigate();
    });

    test('User should be able to login with valid credentials', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
        const isLoggedIn = await loginPage.isLoggedIn();
        expect(isLoggedIn).toBe(true);

        const isInventoryVisible = await inventoryPage.isInventoryVisible();
        expect(isInventoryVisible).toBe(true);
    });

    test('User should not be able to login with invalid credentials', async () => {
        await loginPage.login('invalid_user', 'wrong_password');
        const isLoggedIn = await loginPage.isLoggedIn();
        expect(isLoggedIn).toBe(false);
    });
});
