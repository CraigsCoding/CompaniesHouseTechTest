import { test, expect } from '@playwright/test';
import BookingPage from '../../pages/bookingPage';
import RoomSection from '../../sections/homePage/roomsSection';
import { RoomType } from '../../sections/homePage/roomsSection';

let bookingPage: BookingPage;
let rooms: RoomSection

test.describe('Check Room Information Tests', () => {
    test.beforeEach(async ({ page }) => {
        bookingPage = new BookingPage(page);
        rooms = new RoomSection(page);
        await bookingPage.goToHomePage();
    });

    test('Room Info section is displayed after selecting room to book', async ({ page }) => {
        await rooms.selectRoomToBook(RoomType.Double);
        const roomInfoSection = bookingPage.getRoomInfoSection();
        const roomInfo = await roomInfoSection.getRoomInfoSection()
        
        await expect(roomInfo).toBeVisible();
    });

    test('Room Name, Description, Features and Policies are visible in Room Info section', async ({ page }) => {
        rooms.selectRoomToBook(RoomType.Suite);
        const roomInfoSection = bookingPage.getRoomInfoSection();

        const roomName = await roomInfoSection.getRoomInfoHeader('Suite');
        const roomDescription = await roomInfoSection.getRoomDescription();
        const roomFeatures = await roomInfoSection.getRoomFeaturesHeader();
        const roomPolicies = await roomInfoSection.getRoomPoliciesHeader();

        await expect(roomName).toBeVisible();
        await expect(roomDescription).toBeVisible();
        await expect(roomFeatures).toBeVisible();
        await expect(roomPolicies).toBeVisible();
    });

});