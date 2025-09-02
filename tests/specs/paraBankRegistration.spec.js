
import { test } from '@playwright/test';

import BasePage from '../pageObjects/basePage';
import HomePage from '../pageObjects/homePage';
import RegisterPage from '../pageObjects/registerPage';
import fs from 'fs';

import utils from '../../resources/utils/randomGenerator';

test.beforeEach(async ({ page }) => {
       // eslint-disable-next-line no-undef
       const url = process.env.BASE_URL;
       const basePage = new BasePage(page);
       await basePage.navigateTo(url);


       const homePage = new HomePage(page);
       await homePage.navigateToRegisterPage(); 
  });

  test.afterEach(async ({ page })=>{

     await page.close();

  });


test.describe('Register New User Flow', () => {

    
     test('verify new user is able to register details', async ({ page }) => {

        const registerPage = new RegisterPage(page);
        const testData = utils.generateRegisterData();

        const creds = await registerPage.fillRegistrationForm(testData);
        await registerPage.submitRegistration();

        // ✅ save creds into JSON file
        fs.writeFileSync('creds.json', JSON.stringify(creds, null, 2));

        const homePage = new HomePage(page);
        await homePage.clickOnLogoutButton(); 
        
     });

});