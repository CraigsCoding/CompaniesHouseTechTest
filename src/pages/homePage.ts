import { Page } from '@playwright/test';
import AvailabilitySection from '../sections/homePage/availabilitySection';
import RoomSection from '../sections/homePage/roomsSection';
import LocationSection from '../sections/homePage/locationSection';
import ContactFormSection from '../sections/homePage/contactFormSection';
import NavLinkSection from '../sections/homePage/navLinkSection';
import Utils from '../utils/utils';

export default class HomePage {
    protected page: Page;
    private availabilitySection: AvailabilitySection;
    private roomSection: RoomSection;
    private locationSection: LocationSection;
    private contactFormSection: ContactFormSection;
    private navLinkSection: NavLinkSection;
    private utils: Utils;

    constructor(page: Page) {
        this.page = page;
        this.availabilitySection = new AvailabilitySection(this.page);
        this.roomSection = new RoomSection(this.page);
        this.locationSection = new LocationSection(this.page);
        this.contactFormSection = new ContactFormSection(this.page);
        this.navLinkSection = new NavLinkSection(this.page);
        this.utils = new Utils(this.page);
    }

    async goToHomePage() {
        await this.utils.navigate();
    }

    async verifyPageLoaded() {
        await this.page.waitForSelector('.hotel-room-info');
    }

    getAvailabilitySection(): AvailabilitySection {
        return this.availabilitySection;
    }

    getRoomSection(): RoomSection {
        return this.roomSection;
    }

    getLocationSection(): LocationSection {
        return this.locationSection;
    }

    getContactFormSection(): ContactFormSection {
        return this.contactFormSection;
    }

    getNavLinkSection(): NavLinkSection {
        return this.navLinkSection;
    }

    async checkForPageScroll(buttonToClick?: any): Promise<boolean> {
        const initialPageScroll = await this.page.evaluate(() => window.scrollY);
        await buttonToClick.click();
        const pageScrollAfterButtonClick = await this.page.evaluate(() => window.scrollY);
        const hasPageScrolled = initialPageScroll !== pageScrollAfterButtonClick;
        return hasPageScrolled;
    }
}