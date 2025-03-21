import { defineConfig } from '@playwright/test';

export default defineConfig({
    globalSetup: './globalSetup.ts',
    testDir: './tests',
    use: {
        headless: false,
        baseURL: 'https://www.saucedemo.com/',
        browserName: 'chromium',
        channel: 'chrome',
        viewport: { width: 1920, height: 1080 },
        storageState: 'data/state.json',
    },
    reporter: [['html', { outputFolder: 'playwright-report' }]],
});
