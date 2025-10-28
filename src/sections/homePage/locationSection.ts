import { Page } from '@playwright/test';

export default class LocationSection {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getLocationSection() {
        return this.page.locator('#location');
    }

}