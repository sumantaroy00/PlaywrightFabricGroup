import basePage from './basePage';
import { expect } from '@playwright/test';
 class loginPage extends basePage{
  
  
  constructor(page) {
        super(page);
        
        this.usernameInput = this.page.locator(`xpath=.//input[@name='username']`)   
        this.passwordInput = this.page.locator('input[type="password"]')       
        this.loginButton = this.page.locator('input[value="Log In"]')
    }

  

    async enterUsername(username) {

            await this.usernameInput.click();
            await this.usernameInput.fill('');
            await this.usernameInput.fill(username);
           
    }

    async enterPassword(password) {
            await this.passwordInput.click();
            await this.passwordInput.fill('');
            await this.passwordInput.fill(password);
    }

    async clickLoginButton() {
        
        await this.loginButton.waitFor({ state: 'visible' });
        await this.loginButton.click();    
        await expect(this.page).toHaveURL(/.*overview\.htm/);
    }

   

    // ========================================
    // COMPLETE LOGIN WORKFLOWS
    // ========================================

    async login(username, password) {
        
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    
  }

  export default loginPage;