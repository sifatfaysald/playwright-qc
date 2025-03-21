import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';

// Grouping tests related to "Login Functionality" using test.describe
test.describe('Login Functionality', () => {

    test('User should be able to login with valid credentials', async ({ page }) => {
        // Step 1: Create page objects for Login and Inventory pages
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        // Step 2: Navigate to the login page
        await loginPage.navigate();

        // Step 3: Perform login with valid credentials
        await loginPage.login('standard_user', 'secret_sauce');

        // Step 4: Verify successful login
        const isLoggedIn = await loginPage.isLoggedIn();
        expect(isLoggedIn).toBe(true); // Assert that user is logged in

        // Step 5: Check if inventory page elements are visible (indicating successful login)
        const isInventoryVisible = await inventoryPage.isInventoryVisible();
        expect(isInventoryVisible).toBe(true); // Assert that inventory page is visible
    });

    test('User should not be able to login with invalid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigate();
        await loginPage.login('invalid_user', 'wrong_password');

        const isLoggedIn = await loginPage.isLoggedIn();
        expect(isLoggedIn).toBe(false); // Assert that login failed
    });

});