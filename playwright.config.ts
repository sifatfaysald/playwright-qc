import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    use: {
        headless: false,
        baseURL: 'https://www.saucedemo.com/',
        browserName: 'chromium',
        channel: 'chrome',
        viewport: { width: 1920, height: 1080 },
        //storageState: 'state.json',
    },
    reporter: [['html', { outputFolder: 'playwright-report' }]],
});
