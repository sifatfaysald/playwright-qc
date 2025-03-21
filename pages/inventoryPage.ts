import { Page } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;

    // Locator
    private inventoryList = '.inventory_list';

    constructor(page: Page) {
        this.page = page;
    }

    // Validation Method
    async isInventoryVisible() {
        return await this.page.locator(this.inventoryList).isVisible();
    }
}
