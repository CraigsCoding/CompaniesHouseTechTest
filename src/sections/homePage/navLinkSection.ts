import { Page } from '@playwright/test';

export default class NavLinkSection {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getNavLinkSection() {
        return this.page.locator('#navbarNav');
    }
}