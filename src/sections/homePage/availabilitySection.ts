import { Page } from '@playwright/test';

export default class AvailabilitySection {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

     async getBookingSection() {
        return this.page.locator('#booking');
    }

    async selectDates(checkInDate: string, checkOutDate: string) {
        await this.page.getByRole('textbox').nth(0).fill(checkInDate);
        await this.page.getByRole('textbox').nth(1).fill(checkOutDate);
    }

    async checkAvailability() {
        await this.page.getByRole('button', { name: 'Check Availability' }).click();
    }

    async verifyRoomAvailable() {
        await this.page.waitForSelector('.room-available');
    }

    
}