import { Page } from '@playwright/test';

 export default class Utils {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }
 
    async navigate(appendingURL: string = '') {
        await this.page.goto(`https://automationintesting.online/${appendingURL}`, {
            waitUntil: 'networkidle'
        });
    }

};