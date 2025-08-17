
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

  test.afterEach(async ({ page })=>{

     await page.close();

  });


test.describe('App Setting - > Table  Module', () => {

    test.skip('login and click app setting link->tables link', async ({ page }) => {

       const POManager = new pageObjectManager(page);
       const appSettingPage = await POManager.getAppSettingPage();    
       await appSettingPage.goToTables();
       await expect(page).toHaveURL(/AppTablesList/);

       await appSettingPage.clickOnNewTable();

     });
      
     
    test('verify user is able to create new table', async ({ page }) => {

       const POManager = new pageObjectManager(page);
       const appSettingPage = await POManager.getAppSettingPage();   
       const tablePages = await POManager.getTablesPage();
       await appSettingPage.goToTables();
       await expect(page).toHaveURL(/AppTablesList/);

       const countBefore = await appSettingPage.getTablesCount();
       await appSettingPage.clickOnNewTable();
       await tablePages.fillTableForm();

       await appSettingPage.goToTables();
       const countAfter = await appSettingPage.getTablesCount();
       expect(countBefore+1).toBe(countAfter);

     })


      test.skip('verify user is able to close table form using cancel button', async ({ page }) => {

       const POManager = new pageObjectManager(page);
       const tablePages = await POManager.getTablesPage();
       const appSettingPage = await POManager.getAppSettingPage();    
       await appSettingPage.goToTables();
       await expect(page).toHaveURL(/AppTablesList/);

       await appSettingPage.clickOnNewTable();
       await tablePages.clickCancelBtn();

      });

      
      test.skip('verify user is able to close table form using cross icon', async ({ page }) => {

       const POManager = new pageObjectManager(page);
       const tablePages = await POManager.getTablesPage();
       const appSettingPage = await POManager.getAppSettingPage();    
       await appSettingPage.goToTables();
       await expect(page).toHaveURL(/AppTablesList/);

       await appSettingPage.clickOnNewTable();
       await tablePages.clickCrossIcon();

      });


});