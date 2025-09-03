
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
import ApiUtils from "../../resources/utils/apiUtils";


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


test.describe('Login Flow - Web and Bill Pay API validation', () => {

        test('verify Global Navigation Menu', async ({ page }) => {

            const homePage = new HomePage(page);
            await homePage.globalNavigationMenuValidation();
        });

       test('verify user is able to Open New Account Page and pay the bills', async ({ page,request }) => {
            
           
            const homePage = new HomePage(page);
            await homePage.clickOnOpenAccountLink();

             //Web - Test case 1
            const openAccountPage = new OpenAccountPage(page);
            const dropDownValue = await openAccountPage.getAccountNumber();
            const newAccountNumber = await openAccountPage.createSavingsAccount(dropDownValue);
            expect(newAccountNumber).toMatch(/^\d+$/);

              //Web - Test case 2
            await homePage.clickOnAccountOverviewLink();
            const accountOverviewPage = new AccountOverviewPage(page);
            const accountDetails = await accountOverviewPage.getAccountDetails();
            expect(newAccountNumber).toBe(accountDetails.accountNumber);

             
             //Web - Test case 3
            await homePage.clickOnTransferFundsLink();
            const transferFundsPage = new TransferFundsPage(page);
            const amount = 50;
            await transferFundsPage.transferFunds(amount,newAccountNumber);

              //Web - Test case 4
            await homePage.clickBillPayLink();
            const billPayPage = new BillPayPage(page);
            const testData = utils.generateBillPayData();
            await billPayPage.fillBillPayForm(testData,newAccountNumber);



                //API Bill Pay use case

                const baseUrl = "https://parabank.parasoft.com/parabank";
                const api = new ApiUtils(request, baseUrl);


                  // Read payload from JSON file
                const rawData = fs.readFileSync("resources/Payload/billPay.json");
                const payload = JSON.parse(rawData);
                payload.accountNumber = testData.accountNumber;
                const creds = JSON.parse(fs.readFileSync('creds.json', 'utf-8'));


                // Step 1: Call Find Transaction API
                const transactions = await api.findTransactionsByAmount(newAccountNumber, amount,payload,creds.username,creds.password);

                // Step 2: Validate JSON Response
                api.validateTransaction(transactions, {
                    newAccountNumber,
                    amount,
                });
                    });

});