import basePage from './basePage';
import { expect } from '@playwright/test';

class openAccount extends basePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.accountTypeDropdown = page.locator('select#type');
        this.existingAccountDropdown = page.locator('select#fromAccountId');
        this.openAccountBtn = page.getByRole('button', { name: 'Open New Account' });
        this.newAccountIdLink = page.locator('#newAccountId'); // link to new account


  }

  async createSavingsAccount(existingAccountId) {

    await this.accountTypeDropdown.selectOption('1'); 
    await this.existingAccountDropdown.selectOption(existingAccountId.toString());
    await this.openAccountBtn.click();
    await expect(this.newAccountIdLink).toBeVisible();
    const newAccountId = await this.newAccountIdLink.innerText();
    console.log(`New Savings Account Created: ${newAccountId}`);
    return newAccountId;
  }

  async getAccountNumber(){

          // Get the selected value
      const selectedValue = await this.page.locator('select#fromAccountId option:checked').textContent();
      console.log(`Selected Existing Account Number: ${selectedValue}`);

      return selectedValue;
  }
  
}
export default openAccount;