import { test, expect } from '@playwright/test';
import BookingPage from '../../pages/bookingPage';
import Rooms from '../../sections/homePage/roomsSection';
import { RoomType } from '../../sections/homePage/roomsSection';

let bookingPage: BookingPage;
let rooms: Rooms;

test.describe('Check Simliar Rooms Available Tests', () => {
    
    test.beforeEach(async ({ page }) => {
        bookingPage = new BookingPage(page);
        rooms = new Rooms(page);
        await bookingPage.goToBookingPage();
    });

    test('Similar Rooms section header is displayed on Booking Page', async ({ page }) => {
        await rooms.selectRoomToBook(RoomType.Double);
        const similarRooms = bookingPage.getSimilarRoomsSection();
        const similarRoomsSection = await similarRooms.getSimilarRoomsHeader();
        await expect(similarRoomsSection).toBeVisible();
    });

    test('Verify Room Suggestion details are visible', async ({ page }) => {
        await rooms.selectRoomToBook(RoomType.Single);
        const similarRooms = bookingPage.getSimilarRoomsSection();
        const similarRoomType = 'Double';
        const roomSuggestion = await similarRooms.getRoomSuggestionByRoomType(similarRoomType);
        const roomPrice = await similarRooms.getRoomSuggestionPrice(similarRoomType);
        const roomImage = await similarRooms.getRoomSuggestionImage(similarRoomType);
        const viewDetailsButton = await similarRooms.getRoomSuggestionViewDetailsButton(similarRoomType);
        const roomDescription = await similarRooms.getRoomDescription(similarRoomType);

        await expect(roomSuggestion).toBeVisible();
        await expect(roomPrice).toBeVisible();
        await expect(roomImage).toBeVisible();
        await expect(viewDetailsButton).toBeVisible();
        await expect(roomDescription).toBeVisible();
    });

});