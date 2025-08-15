const QuestionSubmission = require('./questionSubmissionPage.js');
const AnswerSubmission = require('./answerSubmissionPage.js');

class pageObjectManager {
    
    constructor(page) {
        this.page = page;
        this.questionSubmissionPage = new QuestionSubmission(this.page);
        this.answerSubmissionPage = new AnswerSubmission(this.page);
    }

    async getQuestionSubmissionPage() {
        return this.questionSubmissionPage;
    }

    async getAnswerSubmissionPage() {
        return this.answerSubmissionPage;
    }
}

module.exports = pageObjectManager;