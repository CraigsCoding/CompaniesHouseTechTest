import { Page, Expect } from '@playwright/test';

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

    async selectRoomToBook(roomType: RoomType): Promise<void> {
        const index: number = roomType;
        this.page.getByRole('link', { name: 'Book now' }).nth(index).click();
    }

}

export enum RoomType {
    Single = 1,
    Double = 2,
    Suite = 3
}