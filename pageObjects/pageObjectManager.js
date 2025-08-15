import AppSetting from './appSetting/appSettingbasePage.js';
import Login from './loginPage.js';

class pageObjectManager {
  constructor(page) {
    this.page = page;
    this.appSetting = new AppSetting(this.page);
    this.login = new Login(this.page);
  }

  async getAppSettingPage() {
    return this.appSetting;
  }

  async getLoginPage(){
    return this.login;
  }

}

export default pageObjectManager;
