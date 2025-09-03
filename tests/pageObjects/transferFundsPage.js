import basePage from './basePage';

class transferFundsPage extends basePage {
    constructor(page) {
        super(page);
         // Locators
        this.amountInput = page.locator('input[name="input"]'); // Amount input box
        this.fromAccountDropdown = page.locator('select#fromAccountId'); // From account dropdown
        this.toAccountDropdown = page.locator('select#toAccountId');     // To account dropdown
        this.transferButton = page.locator('input[value="Transfer"]');   // Transfer button
        this.transferConfirmationMessage = page.locator('#rightPanel .title'); // Success message after transfer
    }

   
    async enterAmount(amount) {
        await this.amountInput.fill(String(amount));
    }

 
    async selectToAccount(accountNumber) {
        await this.toAccountDropdown.selectOption(accountNumber);
    }

  
    async clickTransfer() {
        await this.transferButton.click();
    }


    async transferFunds(amount, toAccount) {
        await this.enterAmount(amount);
        await this.selectToAccount(toAccount);
        await this.clickTransfer();
    }

    async getConfirmationMessage() {
        return await this.transferConfirmationMessage.innerText();
    }

  
}
export default transferFundsPage;
