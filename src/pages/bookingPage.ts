import { Page } from '@playwright/test';
import RoomInfoSection from '../sections/bookingPage/roomInfoSection';
import RoomBookingSection from '../sections/bookingPage/roomBookingSection';
import SimilarRoomsSection from '../sections/bookingPage/similarRoomsSection';
import Utils from '../utils/utils';

export default class BookingPage {
    protected page: Page;
    private roomInfoSection: RoomInfoSection;
    private roomBookingSection: RoomBookingSection;
    private similarRoomsSection: SimilarRoomsSection;
    private utils: Utils;

    constructor(page: Page) {
        this.page = page;
        this.utils = new Utils(this.page);
        this.roomInfoSection = new RoomInfoSection(this.page);
        this.roomBookingSection = new RoomBookingSection(this.page);
        this.similarRoomsSection = new SimilarRoomsSection(this.page);
    }

    async goToHomePage() {
        await this.utils.navigate();
    }

    getRoomInfoSection() {
        return this.roomInfoSection;
    }

    getRoomBookingSection() {
        return this.roomBookingSection;
    }

    getSimilarRoomsSection() {
        return this.similarRoomsSection;
    }

}