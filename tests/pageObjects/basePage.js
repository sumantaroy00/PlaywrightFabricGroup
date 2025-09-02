// eslint-disable-next-line no-undef
const { expect } = require('@playwright/test');

// Base Page Class
class basePage {
    constructor(page) {
        this.page = page;
        // eslint-disable-next-line no-undef
        this.baseUrl = process.env.BASE_URL;
    }

    // Common navigation methods
    async navigateTo(url) {
        await this.page.goto(url);
    }

    async waitForPageLoad() {
        await this.page.waitForLoadState('networkidle');
    }

    async getPageTitle() {
        return await this.page.title();
    }

    // Common assertions
    async assertPageTitle(expectedTitle) {
        await expect(this.page).toHaveTitle(new RegExp(expectedTitle));
    }

    async assertElementVisible(selector) {
        await expect(this.page.locator(selector)).toBeVisible();
    }

    async assertElementText(selector, expectedText) {
        await expect(this.page.locator(selector)).toHaveText(expectedText);
    }
}

 export default basePage;