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

}