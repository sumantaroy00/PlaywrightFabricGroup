import basePage from './basePage';

class accountOverviewPage extends basePage {
    constructor(page) {
        super(page);
        this.page = page;


  }

  async getAccountDetails() {
             const table = this.page.locator('table');

            // Only grab rows that contain account links (exclude header + Total)
            const accountRows = table.locator('tr:has(td a)');
            const rowCount = await accountRows.count();

            // Pick the last account row
            const lastAccountRow = accountRows.nth(rowCount - 1);

            const accountNumber = await lastAccountRow.locator('td').nth(0).innerText();
            const balance = await lastAccountRow.locator('td').nth(1).innerText();

            console.log(`Last Account Row -> Account Number: ${accountNumber}, Balance: ${balance}`);

            return {
                accountNumber,
                balance
            };

  }

  
}
export default accountOverviewPage;