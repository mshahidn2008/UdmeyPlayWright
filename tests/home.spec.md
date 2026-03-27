# Test Case: Add Brazilian Santos To Cart

## Objective

Verify that a user can navigate from the home page to the shop, confirm that the `Brazilian Santos` product is visible, add it to the cart, and see it in the cart.

## Preconditions

- The site `https://valentinos-magic-beans.click/` is reachable.
- The product catalog is available.
- The cart starts in a usable state.

## Test Steps

1. Open `https://valentinos-magic-beans.click/`.
2. Confirm the page title is `Valentino's Magic Beans - Premium Coffee`.
3. Verify the `Shop` link is visible.
4. Click the `Shop` link.
5. Verify the `Brazilian Santos` product is visible on the products page.
6. Click `Add to Cart` for the `Brazilian Santos` product.
7. Verify the success message `Brazilian Santos is now in your cart.` is visible.
8. Click the header cart button.
9. Verify navigation to the cart page.
10. Verify the `Your Cart` heading is visible.
11. Verify `Brazilian Santos` is listed in the cart.
12. Verify the `Brazilian Santos` cart price matches the `Subtotal` amount in the Order Summary.

## Validation Points

- The home page loads successfully.
- The browser title matches `Valentino's Magic Beans - Premium Coffee`.
- The `Shop` navigation link is visible and clickable.
- The products page displays the `Brazilian Santos` product.
- The `Add to Cart` action succeeds for `Brazilian Santos`.
- A confirmation message appears after adding the item.
- The cart button opens the cart page.
- The final URL ends with `/cart`.
- The cart page shows the `Your Cart` heading.
- The cart contains `Brazilian Santos`.
- The `Brazilian Santos` price is equal to the Order Summary `Subtotal`.

## Expected Result

The user can add `Brazilian Santos` to the cart from the shop page, the item appears in the cart, and the cart item price matches the Order Summary subtotal.
