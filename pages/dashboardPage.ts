// pages/dashboardPage.ts
import { Page } from '@playwright/test';

export class DashboardPage {
    readonly page: Page;

    // Locators
    private dashboardHeader = '.header_secondary_container'; // ড্যাশবোর্ড হেডার
    private inventoryList = '.inventory_list'; // ইনভেন্টরি আইটেম লিস্ট

    constructor(page: Page) {
        this.page = page;
    }

    // ড্যাশবোর্ড হেডার ভিজিবল কিনা চেক করুন
    async isDashboardHeaderVisible() {
        return await this.page.locator(this.dashboardHeader).isVisible();
    }

    // ইনভেন্টরি আইটেম লিস্ট ভিজিবল কিনা চেক করুন
    async isInventoryListVisible() {
        return await this.page.locator(this.inventoryList).isVisible();
    }
}