import { Page } from '@playwright/test';
import { BasePage } from './basePage';

export class LoginPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async login(username: string, password: string) {
        await this.page.fill('input[name="username"]', username);
        await this.page.fill('input[name="password"]', password);
        await this.page.click('button[type="submit"]');
    }

    async getErrorMessage() {
        return this.page.textContent('.error-message');
    }
}
