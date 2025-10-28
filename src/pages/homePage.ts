import { Page } from '@playwright/test';
import AvailabilitySection from '../sections/homePage/availabilitySection';
import RoomSection from '../sections/homePage/roomsSection';
import LocationSection from '../sections/homePage/locationSection';
import ContactFormSection from '../sections/homePage/contactFormSection';

export default class HomePage {
    protected page: Page;
    private availabilitySection: AvailabilitySection;
    private roomSection: RoomSection; 
    private locationSection: LocationSection;
    private contactFormSection: any;
    
    constructor(page: Page) {
        this.page = page;
        this.availabilitySection = new AvailabilitySection(this.page);
        this.roomSection = new RoomSection(this.page);
        this.locationSection = new LocationSection(this.page);
        this.contactFormSection = new ContactFormSection(this.page);
    }

    async navigate() {
        await this.page.goto('https://automationintesting.online/');
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
}