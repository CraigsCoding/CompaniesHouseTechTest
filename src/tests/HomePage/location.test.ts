import { test, expect } from '@playwright/test';
import HomePage from './../../pages/homePage';
import LocationSection from '../../sections/homePage/locationSection';

let homepage: HomePage;
let locationSection: LocationSection;

test.describe('our location tests', () => {
  test.beforeEach(async ({ page }) => {
    homepage = new HomePage(page);
    locationSection = await homepage.getLocation();
    
    await homepage.goToHomePage();
  });

  test('Location subsection title and description is displayed', async ({ page }) => {
    const locationHeading = await locationSection.getLocationHeading();
    const locationSubText = await locationSection.getLocationSubText();

    await expect(locationHeading).toBeVisible();
    await expect(locationSubText).toBeVisible();
  });

  test('location map is visible', async ({ page }) => {
    const map = await locationSection.getLocationMap();

    await expect(map).toBeVisible();
  });

  test('contact information is visible', async ({ page }) => {
    const contactInfo = await locationSection.getContactInformationText();
    const address = await locationSection.getContactInformationAddress()
    const phone = await locationSection.getContactInformationPhone();
    const email = await locationSection.getContactInformationEmail();
    const gettingHere = await locationSection.getContactInformationGettingHere();

    await expect(contactInfo).toBeVisible();
    await expect(address).toBeVisible();
    await expect(phone).toBeVisible();
    await expect(email).toBeVisible();
    await expect(gettingHere).toBeVisible();
  });

});