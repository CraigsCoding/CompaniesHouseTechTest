import { Page } from '@playwright/test';

export default class LocationSection {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getLocationSection() {
        return this.page.locator('#location');
    }

    async getLocationHeading(): Promise<any> {
        return this.page.getByRole('heading', { name: 'Our Location' });
    }

    async getLocationSubText(): Promise<any> {
        return this.page.getByText('Find us in the beautiful');
    }

    async getLocationMap() {
        return this.page.locator('.pigeon-overlays');
    }

    async getContactInformationText() {
        return this.page.getByText('Contact Information');
    }

    async getContactInformationAddress() {
        return this.page.getByRole('heading', { name: 'Address' });
    }

    async getContactInformationPhone() {
        return this.page.getByRole('heading', { name: 'Phone' });
    }

    async getContactInformationEmail() {
        return this.page.getByRole('heading', { name: 'Email' });
    }

    async getContactInformationGettingHere() {
        return this.page.getByRole('heading', { name: 'Getting Here' });
    }

}