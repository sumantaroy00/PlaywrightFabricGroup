import { generateNiceName, generateRandomEmail } from './../utils/randomGenerator.js';
// eslint-disable-next-line no-undef
const dataSet = JSON.parse(JSON.stringify(require('../utils/questionAndAnswerTestData.json')));

class questionSubmissionPage {
  constructor(page) {
    this.page = page;
    this.questionButton = page.locator(
      `xpath=//div[@class='bv-header']//button[text()=' Ask a question  ']`
    );
    this.questionInput = page.locator('#bv-textarea-field-questionsummary');
    this.nicknameInput = page.getByPlaceholder('Example: bob27 (Maximum of 25 characters.)');
    this.locationInput = page.locator('#bv-text-field-userlocation');
    this.emailInput = page.locator('#bv-email-field-hostedauthentication_authenticationemail');
    this.termsAndConditionsCheckbox = page.getByText('terms & conditions');
    this.acceptButton = page.getByText('  Accept ');
    this.submitButton = page.getByText('Post Question');
    this.successPopup = page.locator('hgroup.bv-submission-message');
  }

  async fillQuestionForm() {
    await this.page.waitForLoadState('networkidle');
    await this.questionInput.waitFor({ state: 'visible' });

    const questionText = await dataSet[0].questionAndAnswerTestData.question.questionInput;
    await this.questionInput.fill(questionText);

    const niceName = generateNiceName();
    await this.nicknameInput.fill(niceName);

    const locationText = await dataSet[0].questionAndAnswerTestData.question.locationInput;
    await this.locationInput.fill(locationText);

    const randomEmail = generateRandomEmail();
    await this.emailInput.fill(randomEmail);

    await this.termsAndConditionsCheckbox.click();
    await this.page.waitForLoadState('networkidle');
    await this.acceptButton.click();
    await this.submitButton.click();
  }

  async questionButtonClick() {
    await this.page.waitForLoadState('networkidle');
    await this.questionButton.scrollIntoViewIfNeeded();
    await this.questionButton.waitFor({ state: 'visible' });
    console.log(await this.questionButton.isVisible());
    console.log(await this.questionButton.isEnabled());
    await this.questionButton.click({ force: true });
  }

  async isSuccessPopupVisible() {
    await this.page.waitForLoadState('networkidle');
    await this.successPopup.waitFor({ state: 'visible' });
    return await this.successPopup.isVisible();
  }
}

export default questionSubmissionPage;
