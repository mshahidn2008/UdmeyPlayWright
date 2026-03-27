import { test, expect } from '@playwright/test';

test('Brazilian Santos can be added to the cart', async ({ page }) => {
    await page.goto('https://valentinos-magic-beans.click/');

    await expect(page).toHaveTitle("Valentino's Magic Beans - Premium Coffee");

    const shopLink = page.getByRole('link', { name: 'Shop', exact: true });
    await expect(shopLink).toBeVisible();
    await shopLink.click();

    const brazilianSantosHeading = page.getByRole('heading', { name: 'Brazilian Santos' });
    await expect(brazilianSantosHeading).toBeVisible();

    const brazilianSantosCard = brazilianSantosHeading.locator('..').locator('..');
    await brazilianSantosCard.getByRole('button', { name: 'Add to Cart' }).click();

    await expect(page.getByText('Brazilian Santos is now in your cart.', { exact: true })).toBeVisible();

    await page.locator('[data-test-id="header-cart-button"]').click();

    await expect(page).toHaveURL(/\/cart$/);
    await expect(page.getByRole('heading', { name: 'Your Cart' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Brazilian Santos' })).toBeVisible();

    const cartItem = page.getByRole('heading', { name: 'Brazilian Santos' }).locator('..').locator('..');
    const brazilianSantosPrice = await cartItem.getByText(/^\$\d+\.\d{2}$/).first().textContent();

    const orderSummarySubtotal = await page
        .getByText('Subtotal')
        .locator('xpath=following-sibling::*[1]')
        .textContent();

    expect(orderSummarySubtotal).toEqual(brazilianSantosPrice);


});