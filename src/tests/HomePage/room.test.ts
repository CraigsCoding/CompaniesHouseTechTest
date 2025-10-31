import { test, expect } from '@playwright/test';
import HomePage from '../../pages/homePage';
import RoomSection from '../../sections/homePage/roomsSection';

let homepage: HomePage;
let roomSection: RoomSection;

test.describe('Room Section Tests', () => {
    test.beforeEach(async ({ page }) => {
        homepage = new HomePage(page);
        roomSection = await homepage.getRoom();
        
        await homepage.goToHomePage();
    });

    test('Room section title and description are visible', async () => {
        const titleText = await roomSection.getRoomsSectionHeading();
        const descriptionText = await roomSection.getRoomsSectionSubText();

        await expect(titleText).toBeVisible();
        await expect(descriptionText).toBeVisible();
    });

    test('There are 3 rooms displayed', async () => {
        const roomsAvailable = await roomSection.getRoomsAvailable();

        await expect(roomsAvailable).toHaveCount(3);
    });

    test('Each room displays image, description, price and book button', async () => {
        const rooms = await roomSection.getRoomsAvailable();

        for (let i = 0; i < await rooms.count(); i++) {
            const room = rooms.nth(i);

            await expect(await roomSection.getRoomImage(room)).toBeVisible();
            await expect(await roomSection.getRoomTextBody(room)).toBeVisible();
            await expect(await roomSection.getRoomPricePerNight(room)).toBeVisible();
            await expect(await roomSection.getRoomBookNowButton(room)).toBeEnabled();
        }
    });

});
