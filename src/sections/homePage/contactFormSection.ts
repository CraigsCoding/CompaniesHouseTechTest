import { Page } from '@playwright/test';

export default class ContactFormSection {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getContactFormSection() {
        return this.page.locator('#contact');
    }

}