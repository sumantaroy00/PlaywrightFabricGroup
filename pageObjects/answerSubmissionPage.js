const {randomGenerator} = require('./../utils/randomGenerator.js');
const dataSet = JSON.parse(JSON.stringify(require('../utils/questionAndAnswerTestData.json')));


class answerSubmissionPage {


        constructor(page) {    
            this.page = page;
            this.answerButton = page.locator(`xpath=(//div[@class='bv-content-actions-container']//button[text()=' Answer this Question '])[1]`);
            this.answerInput = page.locator('#bv-textarea-field-answertext');
           
        }

        async answerButtonClick() {
           await this.page.waitForLoadState('networkidle'); 
           await this.answerButton.scrollIntoViewIfNeeded();
           await this.answerButton.waitFor({ state: 'visible' });
           await this.answerButton.click({ force: true });
        }

        async fillAnswerForm() {
            await this.page.waitForLoadState('networkidle');
            await this.answerInput.waitFor({ state: 'visible' });
            await this.answerInput.fill('The best way to learn Playwright is through hands-on practice and exploring the official documentation.');
        }
       
        

}

module.exports = answerSubmissionPage;
