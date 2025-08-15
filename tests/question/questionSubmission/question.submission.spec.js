
const { test, expect } = require('@playwright/test');
// Update the path below to the correct relative path and filename for your project structure

const pageObjectManager = require('../../../pageObjects/pageObjectManager.js');


test.describe('Question Submission Module', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(process.env.BASE_URL);
    });

     test.afterEach(async ({ page }) => {
        await page.context().clearCookies();
    });


    test('should open question submission form', async ({ page }) => {

       const POManager = new pageObjectManager(page);
       const questionSubmissionPage = await POManager.getQuestionSubmissionPage();

       await questionSubmissionPage.questionButtonClick();
       await questionSubmissionPage.fillQuestionForm();
       await questionSubmissionPage.isSuccessPopupVisible();

    });
});