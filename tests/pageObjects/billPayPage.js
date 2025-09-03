import basePage from './basePage';

class billPayPage extends basePage {
    constructor(page) {
        super(page);
          this.page = page;

    // Locators
    this.payeeName = page.locator("input[name='payee.name']");
    this.address = page.locator("input[name='payee.address.street']");
    this.city = page.locator("input[name='payee.address.city']");
    this.state = page.locator("input[name='payee.address.state']");
    this.zipCode = page.locator("input[name='payee.address.zipCode']");
    this.phone = page.locator("input[name='payee.phoneNumber']");
    this.accountNumber = page.locator("input[name='payee.accountNumber']");
    this.verifyAccountNumber = page.locator("input[name='verifyAccount']");
    this.amount = page.locator("input[name='amount']");
    this.fromAccount = page.locator("select[name='fromAccountId']");
    this.sendPaymentBtn = page.locator("input[value='Send Payment']");
  }

  /**
   * Fill bill payment form
   * @param {object} data - test data object
   */
  async fillBillPayForm(data,accountNumber) {
    await this.payeeName.fill(data.payeeName);
    await this.address.fill(data.address);
    await this.city.fill(data.city);
    await this.state.fill(data.state);
    await this.zipCode.fill(data.zipCode);
    await this.phone.fill(data.phone);
    await this.accountNumber.fill(data.accountNumber);
    await this.verifyAccountNumber.fill(data.verifyAccountNumber);
    await this.amount.fill(String(data.amount));

    // Select from account dropdown
    await this.fromAccount.selectOption(accountNumber);
    await this.submitPayment();
  }

    /**
     * Submit the bill payment form
     */
    async submitPayment() {
        await this.sendPaymentBtn.click();
    }
  
}
export default billPayPage;
