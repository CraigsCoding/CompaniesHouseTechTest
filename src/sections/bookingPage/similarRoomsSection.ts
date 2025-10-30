import {Page} from '@playwright/test';

export default class SimilarRoomsSection {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //improve selector in the long term
    async getSimilarRoomsSection() {
        return this.page.getByText('Similar Rooms You Might LikeDouble2 Guests£150/nightVestibulum sollicitudin,');
    }

    async getSimilarRoomsHeader() {
        return this.page.getByRole('heading', { name: 'Similar Rooms You Might Like' })
    }

    async getRoomSuggestionByRoomType(roomType: string) {
        return this.page.locator('div').filter({ hasText: roomType }).nth(4)
    }

    async getRoomSuggestionPrice(roomType: string) {
        return this.page.locator('div').filter({ hasText: roomType }).nth(4).getByText('Guests£')
    }

    async getRoomSuggestionImage(roomType: string) {
        return this.page.locator('div').filter({ hasText: roomType }).nth(4).getByRole('img', { name: roomType })
    }

    async getRoomSuggestionViewDetailsButton(roomType: string) {
        return this.page.locator('div').filter({ hasText: roomType }).nth(4).getByRole('link', { name: 'View Details' }).first()
    }

    async getRoomDescription(roomType: string) {
        return this.page.locator('div').filter({ hasText: roomType }).nth(4).locator('p.card-text.small').first()
    }






}