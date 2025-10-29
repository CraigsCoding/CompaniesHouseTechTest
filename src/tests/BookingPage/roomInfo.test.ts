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
    });

    test('Room Info section is displayed after selecting room to book', async ({ page }) => {
        const roomInfoSection = bookingPage.getRoomInfoSection();
        rooms.selectRoomToBook(RoomType.Double);
        const roomInfo = await roomInfoSection.getRoomInfoSection()
        await expect(roomInfo).toBeVisible();
    });

    test('Room Name, Description, Features and Policies are visible in Room Info section', async ({ page }) => {
        rooms.selectRoomToBook(RoomType.Suite);

        const roomName = page.getByRole('heading', { name: 'Suite Room' });
        const roomDescription = page.getByText('Vestibulum sollicitudin, lectus ac mollis consequat, lorem orci ultrices tellus, eleifend euismod tortor dui egestas erat. Phasellus et ipsum nisl.');
        const roomFeatures = page.getByRole('heading', { name: 'Room Features' });
        const roomPolicies = page.getByRole('heading', { name: 'Room Policies' });

        await expect(roomName).toBeVisible();
        await expect(roomDescription).toBeVisible();
        await expect(roomFeatures).toBeVisible();
        await expect(roomPolicies).toBeVisible();
    });

});