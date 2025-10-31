import { test, expect } from '@playwright/test';
import HomePage from './../../pages/homePage';
import AvailabilitySection from '../../sections/homePage/availabilitySection';

let homepage: HomePage;
let availabilitySection: AvailabilitySection;

test.describe('Check Room Availability Tests', () => {
  test.beforeEach(async ({ page }) => {
    homepage = new HomePage(page);
    availabilitySection = await homepage.getAvailability();
    await homepage.goToHomePage();
  });

  test('Check Availability subsection title is displayed', async ({ page }) => {
    const sectionTitle = await availabilitySection.getAvailabilitySectionHeading();
    
    await expect(sectionTitle).toBeVisible();
  });

  test('page scrolls to rooms after clicking check availablity button', async ({ page }) => {
    const button = await availabilitySection.getCheckAvailabilityButton();
    const hasPageScrolled = await homepage.checkForPageScroll(button);

    expect(hasPageScrolled).toBeTruthy();
  });

  //failing tests due to lack of date validation.

  test('setting date in past should not allow check availability button to be clicked', async ({ page }) => {
    await availabilitySection.selectDates('01/01/1970', '02/01/1970');
    const button = await availabilitySection.getCheckAvailabilityButton();
    const hasPageScrolled = await homepage.checkForPageScroll(button);

    expect(hasPageScrolled).toBeFalsy();
  });

  test('setting checkout date before checkin date should not allow check availability button to be clicked', async ({ page }) => {
    await availabilitySection.selectDates('31/12/2030', '25/12/2030');
    const button = await availabilitySection.getCheckAvailabilityButton();
    const hasPageScrolled = await homepage.checkForPageScroll(button);

    expect(hasPageScrolled).toBeFalsy();
  });

  test('date input boxes enforce english date format', async ({ page }) => {
    await availabilitySection.selectDates('12/20/2030', '01/20/2031');
    const button = await availabilitySection.getCheckAvailabilityButton();
    const hasPageScrolled = await homepage.checkForPageScroll(button);

    expect(hasPageScrolled).toBeFalsy();
  });

  test('date input boxes do not accept invalid date entries', async ({ page }) => {
    await availabilitySection.selectDates('invalid date', 'another invalid date');
    const button = await availabilitySection.getCheckAvailabilityButton();
    const hasPageScrolled = await homepage.checkForPageScroll(button)

    expect(hasPageScrolled).toBeFalsy();
  });

});