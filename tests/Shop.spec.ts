import { expect, Page } from "@playwright/test";

export class Shop {
    constructor(private readonly page: Page) {

        this.page.goto('https://valentinos-magic-beans.click/');
    }

    async gotoShop(): Promise<void> {
        const shopLink = this.page.getByRole('link', { name: 'Shop', exact: true });
        await expect(shopLink).toBeVisible();
        await shopLink.click();
        await expect(this.page).toHaveURL(/\/products$/);
    }
}
