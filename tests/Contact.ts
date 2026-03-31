import { expect, Page } from '@playwright/test';

export class Contact {
    constructor(private readonly page: Page) {}

    async gotoContact(): Promise<void> {
        const contactLink = this.page.getByRole('link', { name: 'Contact', exact: true });
        await expect(contactLink).toBeVisible();
        await contactLink.click();
    }
}
