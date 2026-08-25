import { test, expect } from '@playwright/test';
import { AddToCartPage } from '../page_objects/AddToCartPage';


test('Add To Cart', async ({ page }) => {
    const addToCartPage = new AddToCartPage(page);

    await addToCartPage.addToCart();
});