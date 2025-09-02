import basePage from './basePage';
import { expect } from '@playwright/test';

import {TEXTS} from '../../resources/constants/texts.js'
class registerPage extends basePage {
    constructor(page) {
        super(page);
        this.page = page;

        // Locators
        this.firstName   = page.locator('input[name="customer.firstName"]');
        this.lastName    = page.locator('input[name="customer.lastName"]');
        this.address     = page.locator('input[name="customer.address.street"]');
        this.city        = page.locator('input[name="customer.address.city"]');
        this.state       = page.locator('input[name="customer.address.state"]');
        this.zipCode     = page.locator('input[name="customer.address.zipCode"]');
        this.phoneNumber = page.locator('input[name="customer.phoneNumber"]');
        this.ssn         = page.locator('input[name="customer.ssn"]');
        this.username    = page.locator('input[name="customer.username"]');
        this.password    = page.locator('input[name="customer.password"]');
        this.confirm     = page.locator('input[name="repeatedPassword"]');
        this.registerBtn = page.locator('input[value="Register"]');
        this.welcomeMessage = page.locator(`xpath=.//*[@id='rightPanel']/p`);
    }

    async fillRegistrationForm(data) {
        await this.firstName.fill(data.firstName);
        await this.lastName.fill(data.lastName);
        await this.address.fill(data.address);
        await this.city.fill(data.city);
        await this.state.fill(data.state);
        await this.zipCode.fill(data.zipCode);
        await this.phoneNumber.fill(data.phoneNumber);
        await this.ssn.fill(data.ssn);
        await this.username.fill(data.username);
        await this.password.fill(data.password);
        await this.confirm.fill(data.confirm);

                return {
            username: data.username,
            password: data.password
        };
    }

    async submitRegistration() {
        await this.registerBtn.click();
        await this.page.waitForLoadState('networkidle');
        await expect(this.page).toHaveURL(/.*register\.htm/);
        await this.page.waitForLoadState('networkidle');
        await this.welcomeMessage.focus();
        const welcomeText = await this.welcomeMessage.textContent();
      
        expect(welcomeText).toBe(TEXTS.REGISTER.MESSAGE);
  }
}
export default registerPage;