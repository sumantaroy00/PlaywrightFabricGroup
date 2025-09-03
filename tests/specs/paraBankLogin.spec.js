
import { test ,expect} from '@playwright/test';
import fs from 'fs';

import LoginPage from '../pageObjects/loginPage';
import BasePage from '../pageObjects/basePage';
import HomePage from '../pageObjects/homePage';
import OpenAccountPage from '../pageObjects/openAccount';  
import AccountOverviewPage from '../pageObjects/accountOverviewPage';
import TransferFundsPage from '../pageObjects/transferFundsPage';
import BillPayPage from '../pageObjects/billPayPage';


import utils from '../../resources/utils/randomGenerator';

test.beforeEach(async ({ page }) => {
        // eslint-disable-next-line no-undef
       const url = process.env.BASE_URL;
       const basePage = new BasePage(page);
       await basePage.navigateTo(url);
  
        const loginPage = new LoginPage(page);
            // ✅ read creds from JSON
        const creds = JSON.parse(fs.readFileSync('creds.json', 'utf-8'));
        await loginPage.login(creds.username, creds.password);
    
});

test.afterEach(async () => {
  //await page.close(); 
});


test.describe('Login Flow', () => {

     test('verify Global Navigation Menu', async ({ page }) => {

           const homePage = new HomePage(page);
           await homePage.globalNavigationMenuValidation();
     });

       test('verify user is able to Open New Account Page and pay the bills', async ({ page }) => {
            
           
            const homePage = new HomePage(page);
            await homePage.clickOnOpenAccountLink();


                    
            const openAccountPage = new OpenAccountPage(page);
            const dropDownValue = await openAccountPage.getAccountNumber();
            const newAccountNumber = await openAccountPage.createSavingsAccount(dropDownValue);

            // Assert account number exists
            expect(newAccountNumber).toMatch(/^\d+$/);

            await homePage.clickOnAccountOverviewLink();
            const accountOverviewPage = new AccountOverviewPage(page);
            const accountDetails = await accountOverviewPage.getAccountDetails();

            expect(newAccountNumber).toBe(accountDetails.accountNumber);


            await homePage.clickOnTransferFundsLink();
            const transferFundsPage = new TransferFundsPage(page);
            await transferFundsPage.transferFunds("20",newAccountNumber);

            await homePage.clickBillPayLink();
            const billPayPage = new BillPayPage(page);
            const testData = utils.generateBillPayData();
            await billPayPage.fillBillPayForm(testData,newAccountNumber);
     });

});