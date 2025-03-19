import { defineConfig } from '@playwright/test';

export default defineConfig({
    use: {
        headless: false,
    },
    reporter: [['html', { outputFolder: 'playwright-report' }]],
});
