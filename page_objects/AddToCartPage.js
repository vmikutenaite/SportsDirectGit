import { expect } from '@playwright/test';
export class AddToCartPage {
    constructor(page){
        this.page = page;


        
        this.allowAllButton = page.locator('#onetrust-accept-btn-handler');
        this.runningButton = page.locator('a[href="/running"]');
        this.womenButton = page.locator('a[href="/running/all-ladies-running"]');
        this.sizeTen = page.locator('span[data-item="257862^10"]');
        this.colorBlack = page.locator('span[data-item="ACOL^Juoda"]');
        this.priceRange = page.locator('span[data-item="APRI^£100 to £250"]');
        this.selectTights = page.locator('span.productdescriptionname', { hasText: "Women's 7/8 Tights" });
        this.selectSize = page.locator('li[role="radio"][data-text="10 (S)"]');
        this.addCart = page.locator('#ProductStandardAddToBag a.addToBag');
        this.cartPreview = page.locator('#divBagTotalLink');
        this.continueToPay = page.locator('#divContinueSecurely');

    }

    addToCart = async() => {
    await this.page.goto('https://www.sportsdirect.lt/');
    await this.allowAllButton.click();
    await this.runningButton.click();
    await this.page.waitForURL('https://www.sportsdirect.lt/running');

    await this.womenButton.click();
    await this.page.waitForURL('https://www.sportsdirect.lt/running/all-ladies-running');

    await this.sizeTen.check();
    await this.colorBlack.check();
    await this.priceRange.check();
    await this.selectTights.click();
    await this.page.waitForURL('https://www.sportsdirect.lt/on-womens-7/8-tights-450477#colcode=45047703');

    await this.selectSize.click();
    await this.addCart.click();
    await this.page.pause();

    await this.cartPreview.click();
    await this.page.pause();
    await this.page.waitForURL('https://www.sportsdirect.lt/cart');
    await this.page.pause();

    await this.continueToPay.click();
    await this.page.pause();
    }
}