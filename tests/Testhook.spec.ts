import { test, expect } from '@playwright/test';


test('Test hook', async ({ page }) => {
    tag: '@Testhook'
    await page.goto('https://valentinos-magic-beans.click/');
    await expect(page).toHaveTitle("Valentino's Magic Beans - Premium Coffee");
});

test.beforeEach(async ({ page }) => {
    tag: '@Testhook'
    await page.goto('https://valentinos-magic-beans.click/');
    console.log('Before each action');
});

test.afterEach(async ({ page }) => {
    tag: '@Testhook'
    await page.goto('https://valentinos-magic-beans.click/');
    console.log('After each action');
});

