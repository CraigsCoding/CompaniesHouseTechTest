import { Page } from '@playwright/test';

export default class NavLinkSection {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getNavLinkSection() {
        return this.page.locator('#navbarNav');
    }

    async getRoomsNavLink(): Promise<any> {
        const navLinkSection = await this.getNavLinkSection();
        return navLinkSection.getByRole('link', { name: 'Rooms' });
    }

    async getBookingNavLink(): Promise<any> {
        const navLinkSection = await this.getNavLinkSection();
        return navLinkSection.getByRole('link', { name: 'Booking' });
    }

    async getAmenitiesNavLink(): Promise<any> {
        const navLinkSection = await this.getNavLinkSection();
        return navLinkSection.getByRole('link', { name: 'Amenities' });
    }

    async getLocationNavLink(): Promise<any> {
        const navLinkSection = await this.getNavLinkSection();
        return navLinkSection.getByRole('link', { name: 'Location' });
    }

    async getContactNavLink(): Promise<any> {
        const navLinkSection = await this.getNavLinkSection();
        return navLinkSection.getByRole('link', { name: 'Contact' });
    }

    async getAdminNavLink(): Promise<any> {
        const navLinkSection = await this.getNavLinkSection();
        return navLinkSection.getByRole('link', { name: 'Admin' });
    }

    //move to admin section when adding dedicated admin tests
    async getAdminLoginForm() {
        return this.page.getByRole('heading', { name: 'Login' });
    }

}