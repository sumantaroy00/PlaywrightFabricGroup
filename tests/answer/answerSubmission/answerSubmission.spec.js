const { test, expect } = require('@playwright/test');
// Update the path below to the correct relative path and filename for your project structure

const pageObjectManager = require('../../../pageObjects/pageObjectManager.js');


test.describe('Answer Submission', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(process.env.BASE_URL);
    });

    test.afterEach(async ({ page }) => {
        await page.context().clearCookies();
    });

    test('should open answer submission form', async ({ page }) => {

       const POManager = new pageObjectManager(page);
       const answerSubmissionPage = await POManager.getAnswerSubmissionPage();

       await answerSubmissionPage.answerButtonClick();
       await answerSubmissionPage.fillAnswerForm();



    });
});