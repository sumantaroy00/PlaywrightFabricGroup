// pages/AppSettingsPage.js';

 class loginPage {


  constructor(page) {
    this.ssoLogin = page.getByText('Yes');
    this.nossoLogin = page.getByRole('button', { name: 'No' });
    this.userName = page.getByRole('cell', { name: 'You need to sign in to get to' }).locator('input[name="loginid"]');
    this.password = page.locator('input[name="password"]');
    this.signIn = page.getByRole('button', {name:'Sign in'});

  }

  async userLoginWithoutSSo() {
    await this.nossoLogin.click();
    // eslint-disable-next-line no-undef
    await this.userName.fill(process.env.DATA);
    // eslint-disable-next-line no-undef
    await this.password.fill(process.env.PASSWORD);
    await this.signIn.click();
    
  }

}
 export default loginPage;
