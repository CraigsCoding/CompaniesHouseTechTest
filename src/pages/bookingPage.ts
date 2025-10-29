import { Page } from '@playwright/test';
import HomePage from './homePage';
import RoomInfoSection from '../sections/bookingPage/roomInfoSection';
import RoomBookingSection from '../sections/bookingPage/roomBookingSection';
import Utils from '../utils/utils';

export default class BookingPage {
    protected page: Page;
    private homePage: HomePage;
    private roomInfoSection: RoomInfoSection;
    private roomBookingSection: RoomBookingSection;
    private utils: Utils;
    
    constructor(page: Page) {
        this.page = page;
        this.homePage = new HomePage(this.page);
        this.utils = new Utils(this.page);
        this.roomInfoSection = new RoomInfoSection(this.page);
        this.roomBookingSection = new RoomBookingSection(this.page);
    }

    async goToBookingPage() {
        await this.utils.navigate();
    }

    getRoomInfoSection() {
        return this.roomInfoSection;
    }

    getRoomBookingSection() {
        return this.roomBookingSection;
    }


}