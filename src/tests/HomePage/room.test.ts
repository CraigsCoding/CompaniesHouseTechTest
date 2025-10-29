import { test, expect } from '@playwright/test';
import HomePage from '../../pages/homePage';
import RoomSection from '../../sections/homePage/roomsSection';

let homepage: HomePage;
let roomSection: RoomSection;


test.describe('Room Section Tests', () => {
    test.beforeEach(async ({ page }) => {
        homepage = new HomePage(page);
        roomSection = homepage.getRoomSection();
        await homepage.goToHomePage();
    });

    test('Room section title and description are visible', async () => {
        const rooms = await roomSection.getRoomsSection();
        const titleText = rooms.getByRole('heading', { name: 'Our Rooms' });
        const descriptionText = rooms.getByText('Comfortable beds and delightful breakfast from locally sourced ingredients')

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

            await expect(room.getByRole('img')).toBeVisible();
            await expect(room.locator('.card-body')).toBeVisible();
            await expect(room.getByText('Per Night')).toBeVisible();
            await expect(room.getByText("Book now")).toBeVisible();
            await expect(room.getByText("Book now")).toBeEnabled();
        }
    });

});
