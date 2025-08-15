
import { test } from '@playwright/test';

import pageObjectManager from '../../pageObjects/pageObjectManager.js';



test.describe('Question Submission Module', () => {
    test.beforeEach(async ({ page }) => {
        // eslint-disable-next-line no-undef
        await page.goto(process.env.BASE_URL);
        await page.waitForLoadState('networkidle'); // Main page reloads after login
        

    });

     test.afterEach(async ({ page }) => {
        await page.context().clearCookies();
    });


    test('login and click app setting link', async ({ page }) => {

       const POManager = new pageObjectManager(page);
       const loginPage = await POManager.getLoginPage();
       const appSettingPage = await POManager.getAppSettingPage();

       await loginPage.userLoginWithoutSSo();
       await appSettingPage.goToTables();

    

    });
});