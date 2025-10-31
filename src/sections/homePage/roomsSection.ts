import { Locator, Page } from '@playwright/test';

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

    async getRoomsSectionHeading(): Promise<any> {
        return this.page.getByRole('heading', { name: 'Our Rooms' });
    }

    async getRoomsSectionSubText(): Promise<any> {
        return this.page.getByText('Comfortable beds and delightful breakfast from locally sourced ingredients');
    }

    async getRoomImage(room: Locator): Promise<Locator> {
        return room.getByRole('img');
    }

    async getRoomTextBody(room: Locator): Promise<Locator> {
        return room.locator('.card-body');
    }

    async getRoomPricePerNight(room: Locator): Promise<Locator> {
        return room.getByText('Per Night');
    }

    async getRoomBookNowButton(room: Locator): Promise<Locator> {
        return room.getByRole('link', { name: 'Book now' });
    }
}

export enum RoomType {
    Single = 1,
    Double = 2,
    Suite = 3
}