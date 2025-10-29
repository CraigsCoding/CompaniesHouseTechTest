import { Page } from '@playwright/test';

export default class RoomBookingSection {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getRoomBookingSection() {
        return this.page.getByText('Book This Room');
    }

    async selectDatesToBook(checkInDate: string, checkOutDate: string): Promise<void> {

    };

    async getPriceBreakdown(numberOfNights: string): Promise<any> {
        return this.page.getByText(`£150 x ${numberOfNights} nights£` );
    }

    async getCleaningFee(): Promise<any> {
        return this.page.getByText('Cleaning Fee£');
    } 

    async getServiceFee(): Promise<any> {
        return this.page.getByText('Service fee£');
    }

    async getTotalPrice(): Promise<any> {
        return this.page.getByText('Total£');
    }

    async getReserveButton(): Promise<any> {
        return this.page.getByRole('button', { name: 'Reserve Now' })
    }

    async getFirstNameTextBox(): Promise<any> {
        return this.page.getByRole('textbox', { name: 'Firstname' })
    }

    async getLastNameTextBox(): Promise<any> {
        return this.page.getByRole('textbox', { name: 'Lastname' })
    }
    
    async getEmailTextBox(): Promise<any> {
        return this.page.getByRole('textbox', { name: 'Email' })
    }

    async getPhoneTextBox(): Promise<any> {
        return this.page.getByRole('textbox', { name: 'Phone' })
    }

    async fillPersonalDetails(firstName: string, lastName: string, email: string, phone: string): Promise<void> {
        await this.page.getByRole('textbox', { name: 'Firstname' }).fill(firstName);
        await this.page.getByRole('textbox', { name: 'Lastname' }).fill(lastName);
        await this.page.getByRole('textbox', { name: 'Email' }).fill(email);
        await this.page.getByRole('textbox', { name: 'Phone' }).fill(phone);
    }

    async clickReserveButton(): Promise<void> {
        await this.page.getByRole('button', { name: 'Reserve Now' }).click();
    }

    async getBookingConfirmationMessage(): Promise<any> {
        return this.page.getByText('Booking Confirmed');
    }

    async getErrorMessage(): Promise<any> {
        return this.page.getByRole('alert');
    }

}