import { Page } from '@playwright/test';

export default class RoomInfoSection {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getRoomInfoSection() {
        return this.page.getByRole('row');
    }

}