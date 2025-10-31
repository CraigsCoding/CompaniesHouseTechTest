import { test, expect } from '@playwright/test';
import HomePage from '../../pages/homePage';
import NavBar from '../../sections/homePage/navLinkSection';
import Rooms from '../../sections/homePage/roomsSection';

let homepage: HomePage;
let navBarSection: NavBar;
let roomSection: Rooms;

test.describe('Navigation Bar Tests', () => {

    test.beforeEach(async ({ page }) => {
        homepage = new HomePage(page);
        navBarSection = await homepage.getNavLink();
        roomSection = await homepage.getRoom();

        await homepage.goToHomePage();
    });

    test('Navigation Bar is visible', async ({ page }) => {
        const navBar = await navBarSection.getNavLinkSection();

        await expect(navBar).toBeVisible();
    });

    test('Navigate to Rooms section via Nav Bar link', async ({ page }) => {
        const roomsLink = await navBarSection.getRoomsNavLink();
        await roomsLink.click();
        const roomsSection = await roomSection.getRoomsSection();

        await expect(roomsSection).toBeInViewport();
    });

    test('Navigate to Booking Availability Section via Nav Bar link', async ({ page }) => {
        const bookingLink = await navBarSection.getBookingNavLink();
        await bookingLink.click();
        const getAvailability = await homepage.getAvailability();
        const availabilitySection = await getAvailability.getBookingSection();
        
        await expect(availabilitySection).toBeInViewport();
    });


    //broken, amentities link does not navigate anywhere
    test('Navigate to amenities section via Nav Bar link', async ({ page }) => {
        const amenitiesLink = await navBarSection.getNavLinkSection();
        await amenitiesLink.click();
        const amenitiesSection = await roomSection.getRoomsSection();
        
        await expect(amenitiesSection).toBeInViewport();
    });

    test('Navigate to location section via Nav Bar link', async ({ page }) => {
        const locationLink = await navBarSection.getLocationNavLink();
        await locationLink.click();
        const getLocation = await homepage.getLocation();
        const locationSection = await getLocation.getLocationSection();
        
        await expect(locationSection).toBeInViewport();
    });

    test('Navigate to contact us section via Nav Bar link', async ({ page }) => {
        const contactUsLink = await navBarSection.getContactNavLink();
        await contactUsLink.click();
        const contactForm = await homepage.getContactForm();
        const contactUsSection = await contactForm.getContactFormSection();
        
        await expect(contactUsSection).toBeInViewport();
    });

    test('Navigate to admin page via Nav Bar link', async ({ page }) => {
        const adminLink = await navBarSection.getAdminNavLink();
        await adminLink.click();
        const loginForm = await navBarSection.getAdminLoginForm();
        
        await expect(loginForm).toBeVisible();
    });

});