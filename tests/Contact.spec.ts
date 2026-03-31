import { Page, expect } from '@playwright/test';

export class Contact {
    constructor(private readonly page: Page) {
        this.page.goto('https://valentinos-magic-beans.click/');
    }

    async gotoContact(): Promise<void> {
        const contactLink = this.page.getByRole('link', { name: 'Contact', exact: true });
        await expect(contactLink).toBeVisible();
        await contactLink.click();
    }
}