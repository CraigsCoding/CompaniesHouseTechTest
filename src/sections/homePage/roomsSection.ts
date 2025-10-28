import { Page } from '@playwright/test';

export default class RoomSection {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getRoomsSection() {
        return this.page.locator('#rooms');
    }

    async getRoomsAvailable() {
        return this.page.locator('div.room-card')
    }
}