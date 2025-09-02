import basePage from './basePage';
import { expect } from '@playwright/test';


class homePage extends basePage {
    constructor(page) {
        super(page);
        this.registerLink = page.locator(`//a[text()='Register']`); 
        this.logoutButton = page.locator(`//a[text()='Log Out']`);
       
        }
    
    async navigateToRegisterPage() {
        
        await this.registerLink.waitFor({ state: 'visible' });
        await this.registerLink.focus();
        await this.registerLink.click();
        await this.page.waitForLoadState('networkidle');
        await expect(this.page).toHaveURL(/.*register\.htm/);
        await this.page.waitForLoadState('networkidle');
    }

    async clickOnLogoutButton(){

        await this.logoutButton.waitFor({ state: 'visible' });
    }
}

 export default homePage;