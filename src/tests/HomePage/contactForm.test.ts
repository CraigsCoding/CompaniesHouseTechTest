import { test, expect } from '@playwright/test';
import HomePage from '../../pages/homePage';
import ContactFormSection from '../../sections/homePage/contactFormSection';

let homepage: HomePage;
let contactFormSection: ContactFormSection;

test.describe('Contact Form Tests', () => {

    test.beforeEach(async ({ page }) => {
        homepage = new HomePage(page);
        contactFormSection = homepage.getContactFormSection();
        await homepage.goToHomePage();
    });

    test('Contact Form section is visible', async ({ page }) => {
        const contactForm = contactFormSection.getContactFormSection();
        await expect(contactForm).toBeVisible();
    });

    test('Contact Form has name, email, phone, subject & message fields and submit button', async ({ page }) => {
        const contactForm = contactFormSection.getContactFormSection();

        const nameField = contactForm.getByTestId('ContactName');
        const emailField = contactForm.getByTestId('ContactEmail');
        const phoneField = contactForm.getByTestId('ContactPhone')
        const subjectField = contactForm.getByTestId('ContactSubject');
        const messageField = contactForm.getByTestId('ContactDescription');
        const submitButton = contactForm.getByRole('button', { name: 'Submit' });

        await expect(nameField).toBeVisible();
        await expect(emailField).toBeVisible();
        await expect(phoneField).toBeVisible();
        await expect(subjectField).toBeVisible();
        await expect(messageField).toBeVisible();
        await expect(submitButton).toBeVisible();
        await expect(submitButton).toBeEnabled();
    });

    test('Submitting the contact form with valid data shows a success message', async ({ page }) => {
        const contactForm = contactFormSection.getContactFormSection();

        await contactForm.getByTestId('ContactName').fill('John Doe');
        await contactForm.getByTestId('ContactEmail').fill('fake@fakeemail.com');
        await contactForm.getByTestId('ContactPhone').fill('12345678910');
        await contactForm.getByTestId('ContactSubject').fill('Test Subject');
        await contactForm.getByTestId('ContactDescription').fill('This is a test message.');
        await contactForm.getByRole('button', { name: 'Submit' }).click();

        const successMessage = contactForm.getByText('Thanks for getting in touch John Doe!');
        await expect(successMessage).toBeVisible();
    });

    test('Submitting the contact form with missing required data shows an error message', async ({ page }) => {
        const contactForm = contactFormSection.getContactFormSection();

        await contactForm.getByTestId('ContactName').fill('');
        await contactForm.getByTestId('ContactEmail').fill('invalidemail');
        await contactForm.getByRole('button', { name: 'Submit' }).click();

        const errorMessage = contactForm.locator('div.alert')
        await expect(errorMessage).toBeVisible();
    });

});