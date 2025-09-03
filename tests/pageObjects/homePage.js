import basePage from './basePage';
import { expect } from '@playwright/test';


class homePage extends basePage {
    constructor(page) {
        super(page);
        this.registerLink = page.locator(`//a[text()='Register']`); 
        this.logoutButton = page.locator(`//a[text()='Log Out']`);
        this.openAccountLink = page.locator(`//a[text()='Open New Account']`);
        this.accountOverviewLink = page.locator(`//a[text()='Accounts Overview']`);
        this.transferFundsLink = page.locator(`//a[text()='Transfer Funds']`);
        this.billPayLink = page.locator(`//a[text()='Bill Pay']`);
       
       
        }
    
    async navigateToRegisterPage() {
        
        await this.registerLink.waitFor({ state: 'visible' });
        await this.registerLink.focus();
        await this.registerLink.click();
        await this.page.waitForLoadState('networkidle');
        await expect(this.page).toHaveURL(/.*register\.htm/);
        await this.page.waitForLoadState('networkidle');
    }

    async clickOnLogoutButton(){

        await this.logoutButton.waitFor({ state: 'visible' });
        await this.logoutButton.click();
    }

    async clickOnOpenAccountLink(){

        await this.openAccountLink.waitFor({ state: 'visible' });
        await this.openAccountLink.click();
        await expect(this.page).toHaveURL(/.*openaccount\.htm/);

    }

     async clickOnAccountOverviewLink(){

        await this.accountOverviewLink.waitFor({ state: 'visible' });
        await this.accountOverviewLink.click();
        await expect(this.page).toHaveURL(/.*overview\.htm/);

    }

    async clickOnTransferFundsLink(){

        await this.transferFundsLink.waitFor({ state: 'visible' });
        await this.transferFundsLink.click();
        await expect(this.page).toHaveURL(/.*transfer\.htm/);

    }

    async clickBillPayLink(){

        await this.billPayLink.waitFor({ state: 'visible' });
        await this.billPayLink.click();
        await expect(this.page).toHaveURL(/.*billpay\.htm/);

    }

    async globalNavigationMenuValidation(){

            // Map of link text to expected URL fragment
            const navLinks = {
                'Open New Account': '/parabank/openaccount.htm',
                'Accounts Overview': '/parabank/overview.htm',
                'Transfer Funds': '/parabank/transfer.htm',
                'Bill Pay': '/parabank/news.htm',
                'Find Transactions': '/parabank/findtrans.htm',
                'Update Contact Info': '/parabank/updateprofile.htm',
                'Request Loan': '/parabank/requestloan.htm',
                'Log Out' : ''
            };

            for (const [linkText] of Object.entries(navLinks)) {
                const link = await this.page.getByRole('link', { name: linkText });
                await expect(link).toBeVisible();
                
                
                //await link.click();
                //await expect(this.page).toHaveURL(new RegExp(expectedUrlPart));
                //await this.page.goBack();
            }
            

    }
}

 export default homePage;