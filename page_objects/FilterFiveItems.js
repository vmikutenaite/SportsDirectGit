import { expect } from '@playwright/test';
export class FilterFiveItems {
    constructor(page){
        this.page = page;


        
        this.allowAllButton = page.locator('#onetrust-accept-btn-handler');
        this.sportasButton = page.locator('#liTopLevelMenu_6219068');
        this.outdoorButton = page.getByTestId('markdown-block').getByRole('link', { name: 'outdoor' });
        this.kidsClothingButton = page.locator('xpath=//button//span[text()="Kids Clothing"]');
        this.brandFilter = page.locator('span[data-item="ABRA^Gelert"]');
        this.sexFilter = page.locator('span[data-item="AFLOR^Berniukams"]');
        this.sizeFilter = page.locator('span[data-item="257862^11 - 12 Years"]');
        this.styleFilter = page.locator('span[data-item="WEBSTYLE^Vandeniui atsparios striukės"]');
        this.fiveItems = page.locator('.totalProducts').first();
    }

    filter5Items = async() => {
    await this.page.goto('https://www.sportsdirect.lt/');
    await this.allowAllButton.click();
    await this.sportasButton.click();
    await this.page.waitForURL('https://www.sportsdirect.lt/sport');

    await this.outdoorButton.click();
    await this.page.waitForURL('https://www.sportsdirect.lt/outdoor');

    await this.kidsClothingButton.click();
    await this.page.waitForURL('https://www.sportsdirect.lt/outdoor/outdoor-clothing/kids-outdoor-clothing');

    await this.brandFilter.check();
    await this.sexFilter.check();
    await this.sizeFilter.check();
    await this.styleFilter.check();

    await expect(this.fiveItems).toHaveText('5');
    console.log("Viso yra " + await this.fiveItems.innerText() + " prekės");
    }
}