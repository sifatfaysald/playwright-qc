import { Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    // Locators
    private userNameField = '#user-name';
    private passwordField = '#password';
    private loginButton = '#login-button';

    constructor(page: Page) {
        this.page = page;
    }

    // Action Methods
    async navigate() {
        await this.page.goto('https://www.saucedemo.com');
    }

    async login(userName: string, password: string) {
        await this.page.fill(this.userNameField, userName);
        await this.page.fill(this.passwordField, password);
        await this.page.click(this.loginButton);
    }

    // Validation Method
    async isLoggedIn() {
        return await this.page.url() === 'https://www.saucedemo.com/inventory.html';
    }
}
