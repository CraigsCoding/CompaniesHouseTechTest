import { test, expect } from '@playwright/test';
import HomePage from '../../pages/homePage';
import ContactFormSection from '../../sections/homePage/contactFormSection';

let homepage: HomePage;
let contactForm: ContactFormSection;
let contactFormSection: any;

test.describe('Contact Form Tests', () => {

    test.beforeEach(async ({ page }) => {
        homepage = new HomePage(page);
        contactForm = await homepage.getContactForm();
        await homepage.goToHomePage();
    });

    test('Contact Form section is visible', async ({ page }) => {
        const contactFormSection = await contactForm.getContactFormSection();
        await expect(contactFormSection).toBeVisible();
    });

    test('Contact Form has name, email, phone, subject & message fields and submit button', async ({ page }) => {
        const contactFormSection = await contactForm.getContactFormSection();

        const nameField = await contactForm.getContactNameField();
        const emailField = await contactForm.getContactEmailField();
        const phoneField = await contactForm.getContactPhoneField();
        const subjectField = await contactForm.getContactSubjectField();
        const messageField = await contactForm.getContactMessageField();
        const submitButton = await contactForm.getSubmitButton();

        await expect(nameField).toBeVisible();
        await expect(emailField).toBeVisible();
        await expect(phoneField).toBeVisible();
        await expect(subjectField).toBeVisible();
        await expect(messageField).toBeVisible();
        await expect(submitButton).toBeVisible();
        await expect(submitButton).toBeEnabled();
    });

    test('Submitting the contact form with valid data shows a success message', async ({ page }) => {
        const name = 'John Doe';
        await contactForm.submitContactForm(name, 'fake@fakeemail.com', '1234567891011', 'Test Subject', 'This is a test message.');
        const successMessage = await contactForm.getSuccessMessage(name);
        
        await expect(successMessage).toBeVisible();
    });

    test('Submitting the contact form with missing required data shows an error message', async ({ page }) => {
        await contactForm.submitContactForm('', '', '', '', '');
        const errorMessage = await contactForm.getErrorMessage();

        await expect(errorMessage).toBeVisible();
    });

});