import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('Login Test - Valid User', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo('https://example.com/login');

    await loginPage.login('testuser', 'password123');
    await expect(page).toHaveURL('https://example.com/dashboard');
});
