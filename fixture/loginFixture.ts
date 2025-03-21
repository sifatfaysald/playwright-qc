import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';

// ফিকচার: LoginPage এবং InventoryPage তৈরি
test.describe('Login Functionality', () => {

    let loginPage: LoginPage;
    let inventoryPage: InventoryPage;

    // ফিকচার: প্রতিটি টেস্ট শুরুর আগে loginPage ও inventoryPage তৈরি করা
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);
        await loginPage.navigate(); // Navigate to the login page
    });

    test('User should be able to login with valid credentials', async () => {
        // Use the shared loginPage and inventoryPage instances
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
