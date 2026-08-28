import { test, expect } from '@playwright/test';
import { AddToCartPage } from '../page_objects/AddToCartPage';
import { FilterFiveItems } from '../page_objects/FilterFiveItems';



// test('Add To Cart', async ({ page }) => {
//     const addToCartPage = new AddToCartPage(page);

//     await addToCartPage.addToCart();
// });

test('Filter 5 items', async ({ page }) => {
    const filterFiveItems = new FilterFiveItems(page);

    await filterFiveItems.filter5Items();
});