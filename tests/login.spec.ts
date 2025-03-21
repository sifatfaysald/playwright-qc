// login.test.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';

test('Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    // লগইন পেজে গিয়ে লগইন করব
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    // সফল লগইন হয়েছে কিনা তা যাচাই করব
    expect(await loginPage.isLoggedIn()).toBe(true);

    // ইনভেন্টরি পেজের উপাদান দেখানো আছে কিনা তা যাচাই
    expect(await inventoryPage.isInventoryVisible()).toBe(true);
});
