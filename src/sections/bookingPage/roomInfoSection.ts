import { Page } from '@playwright/test';

export default class RoomInfoSection {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getRoomInfoSection() {
        //improve selector in the long term
        return this.page.getByText('Double RoomAccessible Max 2 GuestsRoom DescriptionVestibulum sollicitudin,');
    }

    async getRoomInfoHeader(roomType: string) {
        return this.page.getByRole('heading', { name: roomType })
    }

    async getRoomDescription() {
        return this.page.getByText('Vestibulum sollicitudin, lectus ac mollis consequat, lorem orci ultrices tellus, eleifend euismod tortor dui egestas erat. Phasellus et ipsum nisl.');
    }

    async getRoomFeaturesHeader() {
        return this.page.getByRole('heading', { name: 'Room Features' })
    }

    async getRoomPoliciesHeader() {
        return this.page.getByRole('heading', { name: 'Room Policies' })
    }

}