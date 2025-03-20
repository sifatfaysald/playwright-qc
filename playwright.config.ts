import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    use: {
        headless: false,
        browserName: 'chromium',
        channel: 'chrome',
        viewport: { width: 1920, height: 1080 },
    },
    reporter: [['html', { outputFolder: 'playwright-report' }]],
});