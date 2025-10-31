import { Page } from '@playwright/test';

export default class ContactFormSection {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getContactFormSection() {
        return this.page.locator('#contact');
    }

    async getContactNameField() {
        return this.page.getByTestId('ContactName');
    }

    async getContactEmailField() {
        return this.page.getByTestId('ContactEmail');
    }

    async getContactPhoneField() {
        return this.page.getByTestId('ContactPhone');
    }

    async getContactSubjectField() {
        return this.page.getByTestId('ContactSubject');
    }

    async getContactMessageField() {
        return this.page.getByTestId('ContactDescription');
    }

    async getSubmitButton() {
        return this.page.getByRole('button', { name: 'Submit' });
    }

    async submitContactForm(name: string, email: string, phone: string, subject: string, message: string) {
        await (await this.getContactNameField()).fill(name);
        await (await this.getContactEmailField()).fill(email);
        await (await this.getContactPhoneField()).fill(phone);
        await (await this.getContactSubjectField()).fill(subject);
        await (await this.getContactMessageField()).fill(message);
        await (await this.getSubmitButton()).click();
    }

    async getSuccessMessage(submittedName: string) {
        return this.page.getByText(`Thanks for getting in touch ${submittedName}!`);
    }

    async getErrorMessage() {
        return this.page.locator('div.alert');
    }

}