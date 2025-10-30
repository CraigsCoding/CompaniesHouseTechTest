import { test, expect } from '@playwright/test';
import BookingPage from '../../pages/bookingPage';
import RoomSection, { RoomType } from '../../sections/homePage/roomsSection';
import Utils from '../../utils/utils';

let bookingPage: BookingPage;
let rooms: RoomSection;
let utils: Utils;

test.describe('Check Room Information Tests', () => {
  test.beforeEach(async ({ page }) => {
    bookingPage = new BookingPage(page);
    rooms = new RoomSection(page);
    utils = new Utils(page);
    await bookingPage.goToBookingPage();
    });

    test('Room Info section is displayed after selecting room to book', async ({ page }) => {
        rooms.selectRoomToBook(RoomType.Double);
        const roomBookingSection = bookingPage.getRoomBookingSection();
        const roomBooking = await roomBookingSection.getRoomBookingSection()
        await expect(roomBooking).toBeVisible();
    });

    // revisit this to remove hard coded url and price breakdown values
    test('Select dates to book a room', async ({ page }) => {
        await utils.navigate('reservation/2?checkin=2025-10-01&checkout=2025-10-30');
        const book = bookingPage.getRoomBookingSection();
        const priceBreakdown = await book.getPriceBreakdown('29');
        await expect(priceBreakdown).toBeVisible();
    });

    test('Verify price breakdown is correct when booking a room', async ({ page }) => {
        await utils.navigate('reservation/2?checkin=2025-10-01&checkout=2025-10-06');
        const book = bookingPage.getRoomBookingSection();
        const priceBreakdown = await book.getPriceBreakdown('5');
        const cleaningFee = await book.getCleaningFee();
        const serviceFee = await book.getServiceFee();
        const totalPrice = await book.getTotalPrice();

        await expect(priceBreakdown).toHaveText('£150 x 5 nights£750' );
        await expect(cleaningFee).toHaveText('Cleaning fee£25');
        await expect(serviceFee).toHaveText('Service fee£15');
        await expect(totalPrice).toHaveText('Total£790');
    });

    test('Reserve button is clickable after selecting dates to book', async ({ page }) => {
        await utils.navigate('reservation/2?checkin=2026-11-01&checkout=2026-11-05');
        const book = bookingPage.getRoomBookingSection();
        const reserveButton = await book.getReserveButton();
        await expect(reserveButton).toBeEnabled();
    });

    //user is able to book dates in the past via URL manipulation, app should prevent this
    test('Reserve button is disabled when dates are set in past', async ({ page }) => {
        await utils.navigate('reservation/2?checkin=1970-01-01&checkout=1970-01-30');
        const book = bookingPage.getRoomBookingSection();
        const reserveButton = await book.getReserveButton();
        await expect(reserveButton).toBeDisabled();
    });

    test('clicking reserve button takes user to reservation step', async ({ page }) => {
        await utils.navigate('reservation/2?checkin=2025-12-01&checkout=2025-12-10');
        const book = bookingPage.getRoomBookingSection();
        const reserveButton = await book.getReserveButton();
        await reserveButton.click();

        const firstNameTextBox = await book.getFirstNameTextBox();
        const lastNameTextBox = await book.getLastNameTextBox();
        const emailTextBox = await book.getEmailTextBox();
        const phoneTextBox = await book.getPhoneTextBox();

        await expect(firstNameTextBox).toBeVisible();
        await expect(lastNameTextBox).toBeVisible();
        await expect(emailTextBox).toBeVisible();
        await expect(phoneTextBox).toBeVisible();
    });

    test('Booking Confirmation is displayed after submitting form', async ({ page }) => {
        await utils.navigate('reservation/2?checkin=2025-12-01&checkout=2025-12-10');
        const book = bookingPage.getRoomBookingSection();
        const reserveButton = await book.getReserveButton();
        await reserveButton.click();

        book.fillPersonalDetails('John', 'Doe', 'fake@fakemail.com','1234567891011');
        const reserveButtonAfterDetails = await book.getReserveButton();
        reserveButtonAfterDetails.click();
        
        const confirmationMessage = book.getBookingConfirmationMessage();
        await expect(await confirmationMessage).toBeVisible();
    });

    test('Error message is displayed when trying to submit empty form', async ({ page }) => {
        await utils.navigate('reservation/2?checkin=2025-12-01&checkout=2025-12-10');
        const book = bookingPage.getRoomBookingSection();
        const reserveButton = await book.getReserveButton();
        await reserveButton.click();

        const reserveButtonAfterDetails = await book.getReserveButton();
        await reserveButtonAfterDetails.click();
    
        const errorBox = book.getErrorMessage();
        await expect(await errorBox).toBeVisible();
    });

    //failing test, button is enabled even when dates are unavailable
    test('reserve button is disabled if dates are unavailable', async ({ page }) => {
        await utils.navigate('reservation/2?checkin=2026-12-01&checkout=2026-12-10');
        const book = bookingPage.getRoomBookingSection();
        const reserveButton = await book.getReserveButton();
        await reserveButton.click();

        await book.fillPersonalDetails('John', 'Doe', 'fake@fakemail.com','1234567891011');
        const reserveButtonAfterDetails = await book.getReserveButton();
        await reserveButtonAfterDetails.click();

        const confirmationMessage = await book.getBookingConfirmationMessage();
        await expect(await confirmationMessage).toBeVisible();

        //try to book the same room again for the same dates
        await utils.navigate('reservation/2?checkin=2025-12-01&checkout=2025-12-10');
        const bookAgain = bookingPage.getRoomBookingSection();
        const reserveButtonAgain = await bookAgain.getReserveButton();
        await reserveButtonAgain.click();

        await bookAgain.fillPersonalDetails('Jane', 'Smith', 'fake@fakeemail.com','1098765432111');
        const reserveButtonAfterDetailsAgain = await bookAgain.getReserveButton();
        expect(await reserveButtonAfterDetailsAgain).toBeDisabled();
    });
});