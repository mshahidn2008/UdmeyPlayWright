import { test, expect } from '@playwright/test';

test('Brazilian Santos can be added to the cart', async ({ page }) => {
    
    let brazilianSantosPrice: string | null = null;


    await page.goto('https://valentinos-magic-beans.click/');



    await expect(page).toHaveTitle("Valentino's Magic Beans - Premium Coffee");

    await test.step('go to shop page', async () => {
        const shopLink = page.getByRole('link', { name: 'Shop', exact: true });
        await expect(shopLink).toBeVisible();
        await shopLink.click();
    })

    const shopLink = page.getByRole('link', { name: 'Shop', exact: true });
    await expect(shopLink).toBeVisible();
    await shopLink.click();

    const brazilianSantosHeading = page.getByRole('heading', { name: 'Brazilian Santos' });
    await expect(brazilianSantosHeading).toBeVisible();

    const brazilianSantosCard = brazilianSantosHeading.locator('..').locator('..');
    await brazilianSantosCard.getByRole('button', { name: 'Add to Cart' }).click();

    await expect(page.getByText('Brazilian Santos is now in your cart.', { exact: true })).toBeVisible();

    await page.locator('[data-test-id="header-cart-button"]').click();

    await test.step('check if cart is visible', async () => {
        await expect(page.getByRole('heading', { name: 'Your Cart' })).toBeVisible();
    })


    await test.step('check if cart item is visible', async () => {
        await expect(page.getByRole('heading', { name: 'Brazilian Santos' })).toBeVisible();
    })

    await test.step('check if cart item price is visible', async () => {
        const cartItem = page.getByRole('heading', { name: 'Brazilian Santos' }).locator('..').locator('..');
        brazilianSantosPrice = await cartItem.getByText(/^\$\d+\.\d{2}$/).first().textContent();
    })


    await test.step('check if order summary subtotal is visible', async () => {
        const orderSummarySubtotal = await page
            .getByText('Subtotal')
            .locator('xpath=following-sibling::*[1]')
            .textContent();
        expect(orderSummarySubtotal).toEqual(brazilianSantosPrice);
    })

});