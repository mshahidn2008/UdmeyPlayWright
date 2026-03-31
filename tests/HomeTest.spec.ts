import { test, expect } from "@playwright/test";
import { Shop } from "./Shop";
import { Contact } from "./Contact";

test('Home Test', async ({ page }) => {
    await page.goto('https://valentinos-magic-beans.click/');
    await expect(page).toHaveTitle("Valentino's Magic Beans - Premium Coffee");
    const shop = new Shop(page);
    await shop.gotoShop();
    await expect(page).toHaveURL(/\/products$/);
});

test('Contact Test', async ({ page }) => {
    await page.goto('https://valentinos-magic-beans.click/');
    await expect(page).toHaveTitle("Valentino's Magic Beans - Premium Coffee");
    const contact = new Contact(page);
    await contact.gotoContact();
    await expect(page).toHaveURL(/\/contact$/);
});
