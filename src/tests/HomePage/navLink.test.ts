import { test, expect } from '@playwright/test';
import HomePage from '../../pages/homePage';
import NavBar from '../../sections/homePage/navLinkSection';
import Rooms from '../../sections/homePage/roomsSection';

let homepage: HomePage;
let narBarSection: NavBar;
let roomSection: Rooms;

test.describe('Navigation Bar Tests', () => {

    test.beforeEach(async ({ page }) => {
        homepage = new HomePage(page);
        narBarSection = homepage.getNavLinkSection();
        roomSection = homepage.getRoomSection();
        await homepage.goToHomePage();
    });

    test('Navigation Bar is visible', async ({ page }) => {
        const navBar = await narBarSection.getNavLinkSection();
        await expect(navBar).toBeVisible();
    });

    test('Navigate to Rooms section via Nav Bar link', async ({ page }) => {
        const navBar = await narBarSection.getNavLinkSection();
        const roomsLink = navBar.getByRole('link', { name: 'Rooms' });
        await roomsLink.click();

        const ourRooms = await homepage.getRoomSection().getRoomsSection();
        await expect(ourRooms).toBeInViewport();
    });

    test('Navigate to Booking Availability Section via Nav Bar link', async ({ page }) => {
        const navBar = await narBarSection.getNavLinkSection();
        const bookingLink = navBar.getByRole('link', { name: 'Booking' });
        await bookingLink.click();

        const availabilitySection = await homepage.getAvailabilitySection().getBookingSection();
        await expect(availabilitySection).toBeInViewport();
    });


    //broken, amentities link does not navigate anywhere
    test('Navigate to amenities section via Nav Bar link', async ({ page }) => {
        const navBar = await narBarSection.getNavLinkSection();
        const amenitiesLink = navBar.getByRole('link', { name: 'Amenities' });
        await amenitiesLink.click();

        const amenitiesSection = await homepage.getRoomSection().getRoomsSection();
        await expect(amenitiesSection).toBeInViewport();
    });

    test('Navigate to location section via Nav Bar link', async ({ page }) => {
        const navBar = await narBarSection.getNavLinkSection();
        const locationLink = navBar.getByRole('link', { name: 'Location' });
        await locationLink.click();

        const locationSection = await homepage.getLocationSection().getLocationSection();
        await expect(locationSection).toBeInViewport();
    });

    test('Navigate to contact us section via Nav Bar link', async ({ page }) => {
        const navBar = await narBarSection.getNavLinkSection();
        const contactUsLink = navBar.getByRole('link', { name: 'Contact' });
        await contactUsLink.click();

        const contactUsSection = await homepage.getContactFormSection().getContactFormSection();
        await expect(contactUsSection).toBeInViewport();
    });

    test('Navigate to admin page via Nav Bar link', async ({ page }) => {
        const navBar = await narBarSection.getNavLinkSection();
        const adminLink = navBar.getByRole('link', { name: 'Admin' });
        await adminLink.click();

        const loginForm = page.getByRole('heading', { name: 'Login' });
        await expect(loginForm).toBeVisible();
    });

});