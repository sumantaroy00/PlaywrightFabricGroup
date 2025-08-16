
import { test,expect } from '@playwright/test';

import pageObjectManager from '../../pageObjects/pageObjectManager.js';

  test.beforeEach(async ({ page }) => {
    // eslint-disable-next-line no-undef
    await page.goto(process.env.BASE_URL);
    await page.waitForLoadState('networkidle');
    const POManager = new pageObjectManager(page);
    const loginPage = await POManager.getLoginPage();
    await loginPage.userLoginWithoutSSo();
  });


test.describe('App Setting - > Table  Module', () => {

    test('login and click app setting link', async ({ page }) => {

       const POManager = new pageObjectManager(page);
       const appSettingPage = await POManager.getAppSettingPage();    
       await appSettingPage.goToTables();
       await expect(page).toHaveURL(/AppTablesList/);
       await appSettingPage.clickOnNewTable();


    });

      test('verify user is able to close table form using cancel button', async ({ page }) => {

       const POManager = new pageObjectManager(page);
       const tablePages = await POManager.getTablesPage();
       await tablePages.cancelBtn();

      });

      
      test('verify user is able to close table form using cross icon', async ({ page }) => {

       const POManager = new pageObjectManager(page);
       const appSettingPage = await POManager.getAppSettingPage();
       const tablePages = await POManager.getTablesPage();

       await appSettingPage.clickOnNewTable();
       await tablePages.clickCrossIcon();

      });


});