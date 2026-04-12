import { test, expect } from '@playwright/test';

test.use({
    locale: 'en-US',
    baseURL: 'https://www.google.com/',
   // defaultBrowserType: 'firefox',
    
})

test('Test hook', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle("Google");
    
});