import { test, expect } from '@playwright/test';
import HomePage from './../../pages/homePage';
import LocationSection from '../../sections/homePage/locationSection';

let homepage: HomePage;
let locationSection: LocationSection;

test.describe('our location tests', () => {
  test.beforeEach(async ({ page }) => {
    homepage = new HomePage(page);
    locationSection = homepage.getLocationSection();
    await homepage.navigate();
  });

  test('Location subsection title and description is displayed', async ({ page }) => {
    const location = await locationSection.getLocationSection();
    await expect(location.getByRole('heading', { name: 'Our Location' })).toBeVisible();
    await expect(location.getByText('Find us in the beautiful')).toBeVisible();
  });

  test('location map is visible', async ({ page }) => {
    const location = await locationSection.getLocationSection();
    const map = location.locator('.pigeon-overlays');
    await expect(map).toBeVisible();
  });

  test('contact information is visible', async ({ page }) => {
    const location = await locationSection.getLocationSection();
    const contactInfo = location.getByText('Contact Information');
    const address = location.getByRole('heading', { name: 'Address' });
    const phone = location.getByRole('heading', { name: 'Phone' });
    const email = location.getByRole('heading', { name: 'Email' });
    const gettingHere = location.getByRole('heading', { name: 'Getting Here' });

    await expect(contactInfo).toBeVisible();
    await expect(address).toBeVisible();
    await expect(phone).toBeVisible();
    await expect(email).toBeVisible();
    await expect(gettingHere).toBeVisible();
  });

});